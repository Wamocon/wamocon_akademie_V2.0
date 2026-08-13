import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');

// Every route the site publishes, grouped by locale. German is served from the
// root and English from /en/.
const localeRoutes = [
  { de: '/', en: '/en/' },
  { de: '/bildungsprogramme-fr-softwaretester/', en: '/en/educational-programs/' },
  { de: '/ber-die-akademie/', en: '/en/about-us/' },
  { de: '/360-booster-system/', en: '/en/360-booster-system/' },
  { de: '/bewertungen/', en: '/en/reviews/' },
  { de: '/istqb-zertifizierung/', en: '/en/istqb-certification/' },
  { de: '/ditele-app/', en: '/en/ditele-app/' },
  { de: '/datenschutz/', en: '/privacy-policy/' },
  { de: '/impressum/', en: '/imprint/' },
  { de: '/barrierefreiheit/', en: '/accessibility/' },
  { de: '/danke/', en: '/thanks/' },
];

const locales = ['de', 'en'];
const routes = localeRoutes.flatMap((group) => locales.map((code) => group[code]));
// Confirmation pages render with noindex and therefore emit no canonical or
// hreflang tags.
const noindexRoutes = new Set(['/danke/', '/thanks/']);

const failures = [];
const nonNavigationRoutes = new Set([
  '/danke/', '/thanks/',
  '/datenschutz/', '/privacy-policy/',
  '/impressum/', '/imprint/',
  '/barrierefreiheit/', '/accessibility/',
]);
const normalizeRoute = (pathname) => pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`;
const knownRoutes = new Set(routes.map(normalizeRoute));
const renderedPages = new Map();
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

for (const route of routes) {
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html');
  let html = '';
  try {
    html = await readFile(file, 'utf8');
  } catch {
    failures.push(`${route}: missing Astro output ${file}`);
    continue;
  }
  renderedPages.set(route, html);

  assert(html.includes('name="generator" content="Astro'), `${route}: missing Astro generator metadata`);
  assert(html.includes('<title>') && html.includes('name="description"'), `${route}: missing SEO title/description`);
  // Confirmation pages are noindex, so they deliberately emit no canonical or
  // hreflang tags; every indexable route must carry them.
  if (noindexRoutes.has(route)) {
    assert(html.includes('name="robots" content="noindex, follow"'), `${route}: confirmation page must be excluded from search results`);
  } else {
    assert(html.includes('rel="canonical"'), `${route}: missing canonical URL`);
  }
  assert(html.includes('class="office-map'), `${route}: shared office map is missing`);
  assert(html.includes('Mergenthalerallee+79-81%2C+65760+Eschborn'), `${route}: map address is incorrect`);
  assert(html.indexOf('class="office-map') < html.indexOf('<footer'), `${route}: map must appear above the footer`);
  assert(html.includes('href="/images/favicon-32.png"'), `${route}: WMA favicon is missing`);
  assert(html.includes('rel="apple-touch-icon"'), `${route}: apple-touch-icon is missing`);
  if (!nonNavigationRoutes.has(route)) {
    assert(html.includes('aria-current="page"'), `${route}: active navigation state is missing`);
  }
  assert(!html.includes('—'), `${route}: em dash remains in rendered website copy`);
  assert(html.includes('form.js-lead-form') || html.includes('js-lead-form'), `${route}: lead form integration is missing`);
  assert(html.includes('cf-turnstile-response'), `${route}: Turnstile field/runtime is missing`);
  assert(!/Mergenthaleralee/i.test(html), `${route}: obsolete misspelled address remains`);
  assert(!/class="t(?:396|form|popup)\b/.test(html), `${route}: legacy Tilda markup leaked into Astro output`);
  assert(!/page\d{6,}\.html/.test(html), `${route}: legacy page identifier leaked into Astro output`);

  for (const match of html.matchAll(/<a\b([^>]*)\shref="([^"]+)"([^>]*)>/g)) {
    const attributes = `${match[1]} ${match[3]}`;
    const href = match[2].replaceAll('&amp;', '&');
    assert(!/^javascript:/i.test(href), `${route}: unsafe javascript link remains (${href})`);
    if (/\starget="_blank"/.test(attributes)) {
      assert(/\srel="[^"]*noopener[^"]*"/.test(attributes), `${route}: target=_blank link lacks noopener (${href})`);
    }
    if (!href || href.startsWith('#') || /^(?:mailto:|tel:)/i.test(href)) continue;
    const target = new URL(href, 'https://test-it-academy.com');
    if (target.origin !== 'https://test-it-academy.com') continue;
    assert(knownRoutes.has(normalizeRoute(target.pathname)), `${route}: internal link has no rendered route (${href})`);
  }

  for (const match of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)) {
    const attributes = match[1];
    const visibleText = match[2].replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, ' ').trim();
    assert(/\stype="(?:button|submit|reset)"/.test(attributes), `${route}: button is missing an explicit type`);
    assert(visibleText || /\saria-label="[^"]+"/.test(attributes), `${route}: button is missing an accessible name`);
    if (/\stype="button"/.test(attributes)) {
      assert(/\sdata-[\w-]+(?:=|\s|$)|\sid="(?:nav-toggle|ditele-check-button)"/.test(attributes), `${route}: non-submit button has no interaction hook`);
    }
  }

  for (const match of html.matchAll(/<img\b([^>]*)>/g)) {
    assert(/\salt="[^"]*"/.test(match[1]), `${route}: image is missing an alt attribute`);
  }
}

// Each locale must declare its own language, link to its two siblings via
// hreflang, and offer all three in the header switcher.
for (const group of localeRoutes) {
  for (const code of locales) {
    const route = group[code];
    const html = renderedPages.get(route) ?? '';
    assert(html.includes(`<html lang="${code}">`), `${route}: ${code} html language is missing`);

    for (const other of locales) {
      if (other === code) continue;
      assert(
        noindexRoutes.has(route) ||
          html.includes(`hreflang="${other}" href="https://test-it-academy.com${group[other]}"`),
        `${route}: ${other} alternate link is incorrect (expected ${group[other]})`,
      );
      const escaped = group[other].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      assert(
        new RegExp(`href="${escaped}"[^>]*hreflang="${other}"[^>]*class="site-header__langoption`).test(html),
        `${route}: language switcher does not offer ${other} at ${group[other]}`,
      );
    }
  }
}

// Hero player source: the component's <script> is bundled to an external
// module, so playback wiring is asserted here rather than in the HTML.
const heroSource = await readFile(new URL('../src/components/sections/AcademyHome.astro', import.meta.url), 'utf8');

for (const route of ['/', '/en/']) {
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html');
  const html = await readFile(file, 'utf8');
  assert(html.includes('<video') && html.includes('/media/hero-background.mp4'), `${route}: homepage background video is missing`);
  // Continuous muted playback, under either mechanism. The hero video is now
  // lazy-loaded — the source is attached and play() called from JS after load,
  // so the `autoplay` attribute is deliberately absent. `muted` and `loop` are
  // still required as attributes, and the lazy form must carry the hook plus
  // the deferred source, so the check still proves the video actually plays.
  const videoTag = (html.match(/<video\b[^>]*>/i) || [''])[0];
  const mutedLoop = /\smuted\b/i.test(videoTag) && /\sloop\b/i.test(videoTag);
  const eagerPlay = /\sautoplay\b/i.test(videoTag);
  // The player lives in the component's <script>, which Astro bundles to an
  // external module — so it is asserted against the source, not the HTML.
  const lazyPlay = /\sdata-hero-video\b/i.test(videoTag)
    && /\sdata-src="[^"]*hero-background\.mp4"/i.test(videoTag)
    && /video\.muted\s*=\s*true/.test(heroSource)
    && /video\.play\(\)/.test(heroSource);
  assert(mutedLoop && (eagerPlay || lazyPlay), `${route}: homepage background video is not configured for continuous muted playback`);
  assert(!html.includes('data-hero-media-toggle'), `${route}: obsolete homepage video toggle remains`);
  assert(html.includes('class="office-tour'), `${route}: 360-degree tour section is missing`);
  assert(html.includes('map_action=pano'), `${route}: 360-degree tour link is missing`);
}

for (const route of ['/bewertungen/', '/en/reviews/']) {
  const html = renderedPages.get(route) ?? '';
  assert(html.includes('data-review-video-id') && html.includes('data-reviews-video-dialog'), `${route}: reviews do not provide in-page video playback`);
  assert(!html.includes('https://i.ytimg.com/'), `${route}: review posters still depend on third-party thumbnail requests`);
}

try {
  const video = await stat(join(root, 'public', 'media', 'hero-background.mp4'));
  assert(video.size > 1_000_000, 'Homepage background video is empty or unexpectedly small');
} catch {
  failures.push('Homepage background video asset is missing');
}

const vercel = JSON.parse(await readFile(join(root, 'vercel.json'), 'utf8'));
const redirects = vercel.redirects ?? [];
assert(redirects.some((entry) => entry.source === '/page53378373.html' && entry.destination === '/'), 'Legacy homepage redirect is missing');
assert(redirects.some((entry) => entry.source === '/Impressum' && entry.destination === '/impressum'), 'Legacy Impressum redirect is missing');

if (failures.length) {
  console.error(`Astro production audit failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Astro production audit passed: ${routes.length} routes, ${localeRoutes.length} bilingual groups (${locales.join('/')}), internal links, button hooks, accessible images, form security, video and 360-degree tour.`);
}
