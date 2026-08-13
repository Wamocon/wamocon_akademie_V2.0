/**
 * Astro dev-server integration that serves the Vercel functions in api/.
 *
 * `astro dev` only serves the static site, so a POST to /api/chat fell through
 * to the 404 page and the browser got HTML where it expected JSON — which the
 * chat widget could only report as a generic error. This dispatches /api/<name>
 * to api/<name>.js using the same request/response shape Vercel provides, so
 * `npm run dev` behaves like production.
 *
 * Dev only: it is registered from `astro:server:setup`, which never runs during
 * `astro build`. In production Vercel serves api/ natively.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

/** Vercel injects env vars for us; locally we read .env ourselves. */
function loadEnv(root) {
  const file = join(root, '.env');
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

export default function devApi() {
  return {
    name: 'wamocon-dev-api',
    hooks: {
      'astro:server:setup': ({ server, logger }) => {
        const root = process.cwd();
        loadEnv(root);

        const ready = Boolean(process.env.AI_API_KEY && process.env.AI_BASE_URL);
        logger.info(
          ready
            ? 'serving /api/* from api/ — chat assistant configured'
            : 'serving /api/* from api/ — chat assistant DISABLED (set AI_API_KEY and AI_BASE_URL in .env)'
        );

        server.middlewares.use(async (req, res, next) => {
          const url = req.url || '';
          if (!url.startsWith('/api/')) return next();

          const name = url.split('?')[0].slice(5).replace(/\/+$/, '');
          const file = join(root, 'api', `${name}.js`);
          if (!name || !existsSync(file)) return next();

          let raw = '';
          for await (const chunk of req) raw += chunk;
          try { req.body = raw ? JSON.parse(raw) : {}; } catch { req.body = {}; }

          // Cache-bust so edits to api/*.js are picked up without a restart.
          let handler;
          try {
            const mod = await import(`${pathToFileURL(file).href}?t=${Date.now()}`);
            handler = mod.default;
          } catch (err) {
            logger.error(`api/${name}.js failed to load: ${err.message}`);
            return sendJson(res, 500, { ok: false, error: 'Handler failed to load' });
          }

          // Minimal shim over the Vercel response API used by our handlers.
          const shim = {
            _status: 200,
            status(code) { this._status = code; return this; },
            setHeader(k, v) { res.setHeader(k, v); return this; },
            json(obj) { sendJson(res, this._status, obj); return this; },
          };

          try {
            await handler(req, shim);
          } catch (err) {
            logger.error(`api/${name}: ${err.message}`);
            if (!res.writableEnded) sendJson(res, 500, { ok: false, error: 'Handler threw' });
          }
        });
      },
    },
  };
}
