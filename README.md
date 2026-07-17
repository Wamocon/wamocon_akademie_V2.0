# WAMOCON Academy V2

Bilingual Astro implementation of [test-it-academy.com](https://test-it-academy.com/) for German and English visitors.

## Architecture

- `src/pages/` defines all public Astro routes.
- `src/components/layout/` provides the shared header and footer used by every page.
- `src/components/ui/CookieBanner.astro` manages consent for external Google/YouTube media.
- `src/data/` contains shared course and company copy.
- `api/lead.js` validates inquiries, verifies Cloudflare Turnstile and sends mail through Microsoft Graph.
- `scripts/audit-astro.mjs` checks route, navigation, media and form behavior.
- `scripts/audit-compliance.mjs` checks shared layout, consent controls, tracker removal, dates and required notices.

No Tilda or legacy standalone HTML source is used by the build.

## Local development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:4322`.

## Verification

```bash
npm run check
npm exec astro check
npm test
```

Rendered UI verification must use the in-app browser with desktop/mobile screenshots. Do not use Playwright for this project.

## Deployment

Vercel runs `npm run build` and publishes `dist/`. Legacy page-ID URLs redirect to the corresponding clean Astro routes. Security and cache headers are defined in `vercel.json`.

Production requires the Microsoft Graph and Cloudflare Turnstile environment variables documented in `.env.example`.
