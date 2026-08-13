// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import devApi from './scripts/dev-api.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://test-it-academy.com',
  // German is the default language and is served from the site root (/).
  // English is served from the /en/ sub-path.
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
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
        !['/404/', '/danke/', '/thanks/'].includes(new URL(page).pathname),
    }),
    // Dev only: serves the Vercel functions in api/ so `npm run dev` can talk
    // to the chat assistant. Does nothing during `astro build`.
    devApi(),
  ],
});
