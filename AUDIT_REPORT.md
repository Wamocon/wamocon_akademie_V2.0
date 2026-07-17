# WAMOCON Academy Astro audit

## Delivery

The deployable site is fully generated from Astro source. German routes are served from the root and English routes from `/en/`. Every route uses the same `BaseLayout`, header, footer and consent manager. The legacy Tilda/standalone HTML build is not part of the production path.

## Compliance corrections

- Yandex Metrica counter `99131843` and Webvisor are absent from the Astro output.
- Consent offers accept, reject and settings choices; external Google/YouTube media is blocked until allowed.
- The footer reopens privacy settings and displays the bilingual AI-transparency notice.
- Inquiry forms use visible labels and a privacy notice instead of mandatory processing consent.
- Testimonial publication has a separate optional, unchecked consent.
- The company name, street spelling and current footer year are corrected.
- Expired 2024/2025 course dates are replaced with `In Planung` / `Planned`.
- Blanket Bildungsgutschein cost promises are replaced with case-by-case wording, and course actions are explicitly non-binding inquiries.
- ISTQB wording is limited to the accreditation entries currently visible in the official provider directory (German CTFL 4.0 and Agile Tester 1.0 training materials).
- The privacy policy describes the services in the implementation: Vercel, Microsoft Graph, Cloudflare Turnstile and consent-gated Google/YouTube content.
- Google Analytics, reCAPTCHA, AdSense, Real Cookie Banner, Tilda and DDoS-Guard are not claimed as active Astro services.
- HSTS, CSP and other security headers are configured in `vercel.json`.

## Automated verification

`npm run check` builds 23 rendered pages and runs both Astro and compliance audits. `npm exec astro check` verifies Astro/TypeScript diagnostics. The API has isolated validation tests in `tests/api-lead.test.mjs`.

Microsoft Edge screenshots (without Playwright) are stored in `artifacts/ui/`: German and English desktop homepages, German privacy policy and a 500 px responsive consent view. The screenshot pass found and verified the fix for consent-panel overflow at the mobile breakpoint.

## Factual items still requiring company records

AVV/DPA evidence, exact operational deletion periods, image/video/testimonial permissions, BFSG micro-enterprise figures, and current AGB/cancellation terms cannot be proven from website code alone. The company must also reconfirm the exact register-court wording before publication; the supplied instruction to keep `Handelsregister: Eschborn, HRB 123666` has been followed.
