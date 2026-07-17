import assert from 'node:assert/strict';
import test from 'node:test';

delete process.env.GRAPH_TENANT_ID;
delete process.env.GRAPH_CLIENT_ID;
delete process.env.GRAPH_CLIENT_SECRET;
delete process.env.GRAPH_REFRESH_TOKEN;
process.env.TURNSTILE_SECRET_KEY = 'test-secret';
process.env.NODE_ENV = 'test';

const originalFetch = globalThis.fetch;
let turnstileSucceeds = true;
globalThis.fetch = async (url) => {
  if (String(url).includes('challenges.cloudflare.com/turnstile')) {
    return new Response(JSON.stringify({ success: turnstileSucceeds }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return originalFetch(url);
};

const { default: handler } = await import(`../api/lead.js?test=${Date.now()}`);

function request(overrides = {}) {
  return {
    method: 'POST',
    headers: {
      origin: 'http://localhost:4321',
      host: 'localhost:4321',
      'content-type': 'application/json',
      'x-wamocon-form': 'academy',
    },
    socket: { remoteAddress: `127.0.0.${Math.floor(Math.random() * 200) + 1}` },
    body: {
      type: 'Beratung erhalten',
      source: '/kontakt',
      lang: 'de',
      name: 'Test User',
      phone: '+49 6196 123456',
      email: 'test@example.com',
      'cf-turnstile-response': 'test-token',
    },
    ...overrides,
  };
}

function response() {
  return {
    headers: new Map(),
    statusCode: 200,
    payload: undefined,
    setHeader(name, value) {
      this.headers.set(name.toLowerCase(), value);
    },
    status(code) {
      this.statusCode = code;
      return {
        json: (payload) => {
          this.payload = payload;
          return this;
        },
      };
    },
  };
}

test('rejects unsupported methods', async () => {
  const res = response();
  await handler(request({ method: 'GET' }), res);
  assert.equal(res.statusCode, 405);
  assert.equal(res.headers.get('allow'), 'POST');
});

test('rejects cross-origin submissions', async () => {
  const res = response();
  const req = request();
  req.headers.origin = 'https://attacker.example';
  await handler(req, res);
  assert.equal(res.statusCode, 403);
});

test('requires the form CSRF header', async () => {
  const res = response();
  const req = request();
  delete req.headers['x-wamocon-form'];
  await handler(req, res);
  assert.equal(res.statusCode, 403);
});

test('validates required inquiry fields without requiring consent', async () => {
  const res = response();
  const req = request({ body: { name: '', phone: '', email: '', 'cf-turnstile-response': 'test-token' } });
  await handler(req, res);
  assert.equal(res.statusCode, 400);
  assert.equal(res.payload.ok, false);
});

test('silently accepts honeypot submissions', async () => {
  const res = response();
  const req = request();
  req.body.company = 'spam.example';
  await handler(req, res);
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.payload, { ok: true });
});

test('requires a Turnstile token', async () => {
  const res = response();
  const req = request();
  delete req.body['cf-turnstile-response'];
  await handler(req, res);
  assert.equal(res.statusCode, 400);
  assert.match(res.payload.error, /verification is required/i);
});

test('rejects an invalid Turnstile token', async () => {
  turnstileSucceeds = false;
  const res = response();
  await handler(request(), res);
  turnstileSucceeds = true;
  assert.equal(res.statusCode, 403);
  assert.match(res.payload.error, /verification failed/i);
});

test('fails visibly when production mail delivery is not configured', async () => {
  const res = response();
  await handler(request(), res);
  assert.equal(res.statusCode, 503);
  assert.equal(res.payload.ok, false);
});
