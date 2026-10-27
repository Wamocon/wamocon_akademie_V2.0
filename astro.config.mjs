// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import devApi from './scripts/dev-api.mjs';
import { bildungstraegerHref, istVeroeffentlicht } from './src/data/bildungstraeger.ts';

// The AZAV provider page stays out of the sitemap until its certificate number
// is entered in src/data/bildungstraeger.ts.
const hiddenRoutes = istVeroeffentlicht() ? [] : Object.values(bildungstraegerHref);

/**
 * Reminds whoever builds the site that the AZAV page is still unpublished.
 * @returns {import('astro').AstroIntegration}
 */
const bildungstraegerNotice = () => ({
  name: 'bildungstraeger-notice',
  hooks: {
    'astro:build:start': ({ logger }) => {
      if (!istVeroeffentlicht()) {
        logger.warn(
          'Zertifikatsnummer in src/data/bildungstraeger.ts fehlt: /bildungstraeger/ (EN, KK) wird mit noindex gebaut und erscheint nicht in Navigation, Footer und Sitemap.',
        );
      }
    },
  },
});

// https://astro.build/config
export default defineConfig({
  site: 'https://test-it-academy.com',
  // German is the default language and is served from the site root (/).
  // English lives under /en/, Kazakh under /kk/.
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'kk'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    // Emit clean folder-style URLs.
    format: 'directory',
  },
  // Keep image handling simple & predictable for non-developers editing later.
  image: {
    domains: [],
  },
  integrations: [
    // Generates /sitemap-index.xml + /sitemap-0.xml at build time for SEO.
    sitemap({
      filter: (page) =>
        !['/404/', '/danke/', '/thanks/', '/kk/rahmet/', ...hiddenRoutes].includes(new URL(page).pathname),
    }),
    bildungstraegerNotice(),
    // Dev only: serves the Vercel functions in api/ so `npm run dev` can talk
    // to the chat assistant. Does nothing during `astro build`.
    devApi(),
  ],
});
