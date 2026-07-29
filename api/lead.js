const TENANT_ID = process.env.GRAPH_TENANT_ID;
const CLIENT_ID = process.env.GRAPH_CLIENT_ID;
const CLIENT_SECRET = process.env.GRAPH_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GRAPH_REFRESH_TOKEN;
const PUBLIC_CLIENT = process.env.GRAPH_PUBLIC_CLIENT === 'true';
const GRAPH_SENDER = process.env.GRAPH_SENDER || 'info@test-it-academy.com';
const RECIPIENT = process.env.LEAD_RECIPIENT || 'info@test-it-academy.com';
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
const SITE_ORIGINS = new Set(
  (process.env.SITE_ORIGINS || 'https://test-it-academy.com,https://www.test-it-academy.com')
    .split(',')
    .map((origin) => origin.trim().replace(/\/$/, ''))
    .filter(Boolean)
);

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 8;
const rateBuckets = globalThis.__academyLeadRateBuckets || new Map();
globalThis.__academyLeadRateBuckets = rateBuckets;

function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return Object.fromEntries(new URLSearchParams(req.body));
    }
  }
  return {};
}

function cap(value, max) {
  return String(value || '').trim().slice(0, max);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function header(req, name) {
  const headers = req.headers || {};
  const value = headers[name] ?? headers[name.toLowerCase()] ?? headers[name.toUpperCase()];
  return Array.isArray(value) ? value[0] : value;
}

function requestIp(req) {
  const forwarded = cap(header(req, 'x-forwarded-for'), 500).split(',')[0].trim();
  return forwarded || req.socket?.remoteAddress || 'unknown';
}

async function verifyTurnstile(token, ip) {
  if (!TURNSTILE_SECRET) return false;
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: TURNSTILE_SECRET, response: token, remoteip: ip }),
      signal: AbortSignal.timeout(10_000),
    });
    const result = await response.json();
    return response.ok && result.success === true;
  } catch (error) {
    console.error(
      '[lead] Turnstile verification failed',
      error instanceof Error ? error.message : 'unknown error',
    );
    return false;
  }
}

function isDevelopmentOrigin(origin) {
  if (process.env.NODE_ENV === 'production') return false;
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin);
}

function hasValidOrigin(req) {
  const origin = cap(header(req, 'origin'), 300).replace(/\/$/, '');
  const host = cap(header(req, 'x-forwarded-host') || header(req, 'host'), 300);
  const protocol = cap(header(req, 'x-forwarded-proto'), 20) || (isDevelopmentOrigin(origin) ? 'http' : 'https');
  const sameOrigin = host ? `${protocol}://${host}`.replace(/\/$/, '') : '';
  return Boolean(
    origin && (origin === sameOrigin || SITE_ORIGINS.has(origin) || isDevelopmentOrigin(origin))
  );
}

function isRateLimited(req) {
  const now = Date.now();
  const ip = requestIp(req);
  const bucket = rateBuckets.get(ip);

  if (!bucket || now - bucket.startedAt >= RATE_WINDOW_MS) {
    rateBuckets.set(ip, { startedAt: now, count: 1 });
    return false;
  }

  bucket.count += 1;
  if (rateBuckets.size > 2_000) {
    for (const [key, value] of rateBuckets) {
      if (now - value.startedAt >= RATE_WINDOW_MS) rateBuckets.delete(key);
    }
  }
  return bucket.count > RATE_MAX;
}

function graphConfigured() {
  return Boolean(TENANT_ID && CLIENT_ID && (CLIENT_SECRET || REFRESH_TOKEN));
}

async function fetchToken(params) {
  const response = await fetch(`https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`, {
    method: 'POST',
    body: params,
    signal: AbortSignal.timeout(15_000),
  });
  const data = await response.json();
  if (!response.ok || data.error) {
    throw new Error(`Graph token request failed with status ${response.status}`);
  }
  return data.access_token;
}

async function getAccessToken() {
  if (!graphConfigured()) throw new Error('Microsoft Graph mail delivery is not configured.');

  if (REFRESH_TOKEN) {
    const params = new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: CLIENT_ID,
      refresh_token: REFRESH_TOKEN,
      scope: 'https://graph.microsoft.com/Mail.Send',
    });
    if (!PUBLIC_CLIENT && CLIENT_SECRET) params.append('client_secret', CLIENT_SECRET);
    return fetchToken(params);
  }

  return fetchToken(
    new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      scope: 'https://graph.microsoft.com/.default',
    })
  );
}

async function graphSendMail(accessToken, message) {
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(GRAPH_SENDER)}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, saveToSentItems: false }),
      signal: AbortSignal.timeout(15_000),
    }
  );

  if (!response.ok) throw new Error(`Graph sendMail failed with status ${response.status}`);
}

// Email copy per locale. German is the fallback for anything unrecognised.
const EMAIL_COPY = {
  de: {
    footer: 'Diese E-Mail wurde automatisch über die Website der WAMOCON Academy versendet.',
    form: 'Formular',
    page: 'Seite',
    phone: 'Telefon',
    message: 'Nachricht',
    publicationAllowed: 'Veröffentlichung erlaubt',
    yes: 'Ja',
    no: 'Nein',
    internalTitle: 'Neue Anfrage über die Academy-Website',
    internalBody: 'Eine neue Anfrage wurde übermittelt.',
    internalSubject: (name) => `Neue Academy-Anfrage von ${name}`,
    confirmTitle: 'Vielen Dank für Ihre Anfrage',
    greeting: 'Hallo',
    confirmBody:
      'vielen Dank für Ihre Anfrage bei der WAMOCON Academy. Wir haben Ihre Daten erhalten und melden uns schnellstmöglich bei Ihnen.',
    confirmSubject: 'Vielen Dank für Ihre Anfrage bei WAMOCON Academy',
  },
  en: {
    footer: 'This email was sent automatically via the WAMOCON Academy website.',
    form: 'Form',
    page: 'Page',
    phone: 'Phone',
    message: 'Message',
    publicationAllowed: 'Publication allowed',
    yes: 'Yes',
    no: 'No',
    internalTitle: 'New inquiry via the Academy website',
    internalBody: 'A new inquiry was submitted.',
    internalSubject: (name) => `New Academy inquiry from ${name}`,
    confirmTitle: 'Thank you for your request',
    greeting: 'Hi',
    confirmBody:
      'thank you for your request to WAMOCON Academy. We have received your details and will get back to you as soon as possible.',
    confirmSubject: 'Thank you for your request to WAMOCON Academy',
  },
};

const copyFor = (lang) => EMAIL_COPY[lang] || EMAIL_COPY.de;

function emailLayout(title, body, lang) {
  const footer = copyFor(lang).footer;

  return `<!doctype html>
<html lang="${escapeHtml(lang)}">
<body style="margin:0;background:#0f1115;font-family:Arial,sans-serif;color:#111827;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0f1115;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#fff;border-radius:8px;overflow:hidden;">
        <tr><td style="height:5px;background:#e31b23;"></td></tr>
        <tr><td style="padding:30px 28px 10px;">
          <p style="margin:0 0 8px;color:#e31b23;font-size:13px;font-weight:bold;letter-spacing:.08em;text-transform:uppercase;">WAMOCON Academy</p>
          <h1 style="margin:0;color:#111827;font-size:24px;line-height:1.25;">${escapeHtml(title)}</h1>
        </td></tr>
        <tr><td style="padding:10px 28px 30px;color:#334155;font-size:15px;line-height:1.6;">${body}</td></tr>
        <tr><td style="padding:18px 28px 28px;border-top:1px solid #e5e7eb;color:#64748b;font-size:12px;line-height:1.5;">
          ${footer}<br><a href="https://test-it-academy.com" style="color:#e31b23;text-decoration:none;">test-it-academy.com</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function details(submission, lang) {
  const t = copyFor(lang);
  const rows = [
    [t.form, submission.type],
    [t.page, submission.source],
    ['Name', submission.name],
    [t.phone, submission.phone || '-'],
    ['E-Mail', submission.email],
    [t.message, submission.comment || '-'],
    ...(submission.type === 'review'
      ? [[t.publicationAllowed, submission.publicationConsent ? t.yes : t.no]]
      : []),
  ];

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;">
    ${rows
      .map(
        ([key, value]) =>
          `<tr><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#111827;width:34%;">${escapeHtml(key)}</td><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;">${escapeHtml(value)}</td></tr>`
      )
      .join('')}
  </table>`;
}

function internalMessage(submission) {
  const t = copyFor(submission.lang);
  const title = t.internalTitle;
  const body = `<p>${t.internalBody}</p>${details(submission, submission.lang)}`;

  return {
    subject: t.internalSubject(submission.name),
    body: { contentType: 'HTML', content: emailLayout(title, body, submission.lang) },
    toRecipients: [{ emailAddress: { address: RECIPIENT } }],
    replyTo: [{ emailAddress: { address: submission.email } }],
  };
}

function confirmationMessage(submission) {
  const t = copyFor(submission.lang);
  const title = t.confirmTitle;
  const body = `<p>${t.greeting} ${escapeHtml(submission.name)},</p>
    <p>${t.confirmBody}</p>${details(submission, submission.lang)}`;

  return {
    subject: t.confirmSubject,
    body: { contentType: 'HTML', content: emailLayout(title, body, submission.lang) },
    toRecipients: [{ emailAddress: { address: submission.email } }],
  };
}

async function sendEmails(submission) {
  const accessToken = await getAccessToken();
  await Promise.all([
    graphSendMail(accessToken, internalMessage(submission)),
    graphSendMail(accessToken, confirmationMessage(submission)),
  ]);
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const contentLength = Number(header(req, 'content-length') || 0);
  if (contentLength > 25_000) return res.status(413).json({ ok: false, error: 'Request too large' });
  if (!hasValidOrigin(req) || header(req, 'x-wamocon-form') !== 'academy') {
    return res.status(403).json({ ok: false, error: 'Request rejected' });
  }
  if (isRateLimited(req)) {
    res.setHeader('Retry-After', String(Math.ceil(RATE_WINDOW_MS / 1000)));
    return res.status(429).json({ ok: false, error: 'Too many requests' });
  }

  const body = readBody(req);
  if (cap(body.company || body.website || body.url, 200)) {
    return res.status(200).json({ ok: true });
  }

  if (!TURNSTILE_SECRET) {
    console.error('[lead] Turnstile is not configured');
    return res.status(503).json({ ok: false, error: 'Security verification is unavailable' });
  }
  const turnstileToken = cap(body['cf-turnstile-response'] || body.turnstileToken, 2_048);
  if (!turnstileToken) {
    return res.status(400).json({ ok: false, error: 'Security verification is required' });
  }
  if (!(await verifyTurnstile(turnstileToken, requestIp(req)))) {
    return res.status(403).json({ ok: false, error: 'Security verification failed' });
  }

  const submission = {
    type: cap(body.type || 'lead', 200),
    source: cap(body.source || '/', 300),
    formId: cap(body.formId, 200),
    lang: cap(body.lang || 'de', 5) === 'en' ? 'en' : 'de',
    name: cap(body.name, 200),
    phone: cap(body.phone, 60),
    email: cap(body.email, 320),
    comment: cap(body.comment, 5_000),
    publicationConsent: body.publicationConsent === true || body.publicationConsent === 'true' || body.publicationConsent === 'on',
  };
  if (!submission.name || !submission.email) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email address' });
  }
  if (
    submission.phone &&
    (!/\d/.test(submission.phone) || !/^[\d\s+\-()/]{6,}$/.test(submission.phone))
  ) {
    return res.status(400).json({ ok: false, error: 'Invalid phone number' });
  }
  if (!graphConfigured()) {
    console.error('[lead] Microsoft Graph delivery is not configured');
    return res.status(503).json({ ok: false, error: 'Form delivery is unavailable' });
  }

  try {
    await sendEmails(submission);
    console.info('[lead] academy submission delivered');
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('[lead] delivery failed', error instanceof Error ? error.message : 'unknown error');
    return res.status(502).json({ ok: false, error: 'Form delivery failed' });
  }
}
