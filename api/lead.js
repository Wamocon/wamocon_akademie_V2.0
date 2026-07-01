const TENANT_ID = process.env.GRAPH_TENANT_ID;
const CLIENT_ID = process.env.GRAPH_CLIENT_ID;
const CLIENT_SECRET = process.env.GRAPH_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GRAPH_REFRESH_TOKEN;
const PUBLIC_CLIENT = process.env.GRAPH_PUBLIC_CLIENT === 'true';
const GRAPH_SENDER = process.env.GRAPH_SENDER || 'info@wamocon.com';
const RECIPIENT = process.env.LEAD_RECIPIENT || 'info@wamocon.com';

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

async function fetchToken(params) {
  const res = await fetch(`https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`, {
    method: 'POST',
    body: params,
  });
  const data = await res.json();
  if (!res.ok || data.error) {
    throw new Error(
      `Graph token request failed: ${res.status} ${data.error_description || data.error || res.statusText}`
    );
  }
  return data.access_token;
}

async function getAccessToken() {
  if (!TENANT_ID || !CLIENT_ID) {
    throw new Error('Missing Graph tenant/client environment variables.');
  }

  if (REFRESH_TOKEN) {
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('client_id', CLIENT_ID);
    if (!PUBLIC_CLIENT && CLIENT_SECRET) params.append('client_secret', CLIENT_SECRET);
    params.append('refresh_token', REFRESH_TOKEN);
    params.append('scope', 'https://graph.microsoft.com/Mail.Send');
    return fetchToken(params);
  }

  if (!CLIENT_SECRET) {
    throw new Error('Missing GRAPH_CLIENT_SECRET for client credentials.');
  }

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', CLIENT_ID);
  params.append('client_secret', CLIENT_SECRET);
  params.append('scope', 'https://graph.microsoft.com/.default');
  return fetchToken(params);
}

async function graphSendMail(accessToken, message) {
  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(GRAPH_SENDER)}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, saveToSentItems: false }),
    }
  );

  if (!res.ok) {
    throw new Error(`Graph sendMail failed: ${res.status} ${await res.text()}`);
  }
}

function label(type, lang) {
  const labels = {
    de: {
      lead: 'Kontakt',
      courses: 'Kurse',
      about: 'Über die Academy',
      booster: '360° Booster System',
      reviews: 'Bewertungen',
      certification: 'ISTQB®-Zertifizierung',
      ditele: 'DiTeLe App',
    },
    en: {
      lead: 'Contact',
      courses: 'Courses',
      about: 'About the Academy',
      booster: '360° Booster System',
      reviews: 'Reviews',
      certification: 'ISTQB® certification',
      ditele: 'DiTeLe App',
    },
  };
  return (labels[lang] || labels.de)[type] || type;
}

function emailLayout(title, body, lang) {
  const footer =
    lang === 'de'
      ? 'Diese E-Mail wurde automatisch über die Website der WAMOCON Academy versendet.'
      : 'This email was sent automatically via the WAMOCON Academy website.';

  return `<!doctype html>
<html lang="${escapeHtml(lang)}">
<body style="margin:0;background:#0f1115;font-family:Arial,sans-serif;color:#111827;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0f1115;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;">
          <tr><td style="height:5px;background:#e31b23;"></td></tr>
          <tr>
            <td style="padding:30px 28px 10px;">
              <p style="margin:0 0 8px;color:#e31b23;font-size:13px;font-weight:bold;letter-spacing:.08em;text-transform:uppercase;">WAMOCON Academy</p>
              <h1 style="margin:0;color:#111827;font-size:24px;line-height:1.25;">${escapeHtml(title)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 28px 30px;color:#334155;font-size:15px;line-height:1.6;">${body}</td>
          </tr>
          <tr>
            <td style="padding:18px 28px 28px;border-top:1px solid #e5e7eb;color:#64748b;font-size:12px;line-height:1.5;">
              ${footer}<br><a href="https://test-it-academy.com" style="color:#e31b23;text-decoration:none;">test-it-academy.com</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function details(submission, lang) {
  const rows = [
    [lang === 'de' ? 'Typ' : 'Type', label(submission.type, lang)],
    ['Name', submission.name],
    [lang === 'de' ? 'Telefon' : 'Phone', submission.phone],
    ['E-Mail', submission.email],
    [lang === 'de' ? 'Nachricht' : 'Message', submission.comment || '-'],
  ];
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;">
    ${rows
      .map(
        ([key, value]) =>
          `<tr><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#111827;width:34%;">${escapeHtml(
            key
          )}</td><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;">${escapeHtml(value)}</td></tr>`
      )
      .join('')}
  </table>`;
}

function internalMessage(submission) {
  const isDe = submission.lang === 'de';
  const type = label(submission.type, submission.lang);
  const title = isDe ? `Neue Anfrage: ${type}` : `New inquiry: ${type}`;
  const body = `<p>${isDe ? 'Eine neue Anfrage wurde über die Academy-Website übermittelt.' : 'A new inquiry was submitted via the Academy website.'}</p>${details(
    submission,
    submission.lang
  )}`;

  return {
    subject: isDe ? `Neue ${type}-Anfrage von ${submission.name}` : `New ${type} inquiry from ${submission.name}`,
    body: { contentType: 'HTML', content: emailLayout(title, body, submission.lang) },
    toRecipients: [{ emailAddress: { address: RECIPIENT } }],
    replyTo: [{ emailAddress: { address: submission.email } }],
  };
}

function confirmationMessage(submission) {
  const isDe = submission.lang === 'de';
  const title = isDe ? 'Vielen Dank für Ihre Anfrage' : 'Thank you for your request';
  const body = `<p>${isDe ? 'Hallo' : 'Hi'} ${escapeHtml(submission.name)},</p>
    <p>${
      isDe
        ? 'vielen Dank für Ihre Anfrage bei der WAMOCON Academy. Wir haben Ihre Daten erhalten und melden uns schnellstmöglich bei Ihnen.'
        : 'thank you for your request to WAMOCON Academy. We have received your details and will get back to you as soon as possible.'
    }</p>${details(submission, submission.lang)}`;

  return {
    subject: isDe ? 'Vielen Dank für Ihre Anfrage bei WAMOCON Academy' : 'Thank you for your request to WAMOCON Academy',
    body: { contentType: 'HTML', content: emailLayout(title, body, submission.lang) },
    toRecipients: [{ emailAddress: { address: submission.email } }],
  };
}

async function sendEmails(submission) {
  if (!TENANT_ID || !CLIENT_ID || !(CLIENT_SECRET || REFRESH_TOKEN)) {
    console.log('[lead] Graph env vars missing; skipping email');
    return;
  }
  const accessToken = await getAccessToken();
  await graphSendMail(accessToken, internalMessage(submission));
  await graphSendMail(accessToken, confirmationMessage(submission));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = readBody(req);
  if (cap(body.company || body.website || body.url, 200)) {
    return res.status(200).json({ ok: true });
  }

  const submission = {
    type: cap(body.type || 'lead', 40),
    lang: cap(body.lang || 'de', 5) === 'en' ? 'en' : 'de',
    name: cap(body.name, 200),
    phone: cap(body.phone, 60),
    email: cap(body.email, 320),
    comment: cap(body.comment, 5000),
    receivedAt: new Date().toISOString(),
  };
  const consent = body.consent === true || body.consent === 'true' || body.consent === 'on';

  if (!consent) return res.status(400).json({ ok: false, error: 'Consent is required.' });
  if (!submission.name || !submission.phone || !submission.email) {
    return res.status(400).json({ ok: false, error: 'Missing required fields.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email address.' });
  }
  if (!/[\d]/.test(submission.phone) || !/[\d\s+\-()/]{6,}$/.test(submission.phone)) {
    return res.status(400).json({ ok: false, error: 'Invalid phone number.' });
  }

  console.log('[lead] new academy submission', JSON.stringify(submission));

  try {
    await sendEmails(submission);
  } catch (err) {
    console.error('[lead] email error', err.message || err);
  }

  return res.status(200).json({ ok: true });
}
