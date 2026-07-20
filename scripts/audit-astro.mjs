import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');

const routes = [
  '/',
  '/360-booster-system/',
  '/ber-die-akademie/',
  '/bewertungen/',
  '/danke/',
  '/datenschutz/',
  '/ditele-app/',
  '/impressum/',
  '/istqb-zertifizierung/',
  '/kontakt/',
  '/en/',
  '/en/360-booster-system/',
  '/en/about-us/',
  '/en/contacts/',
  '/en/ditele-app/',
  '/en/istqb-certification/',
  '/en/reviews/',
  '/imprint/',
  '/privacy-policy/',
  '/thanks/',
];

const bilingualRoutes = [
  ['/', '/en/'],
  ['/360-booster-system/', '/en/360-booster-system/'],
  ['/ber-die-akademie/', '/en/about-us/'],
  ['/bewertungen/', '/en/reviews/'],
  ['/datenschutz/', '/privacy-policy/'],
  ['/ditele-app/', '/en/ditele-app/'],
  ['/impressum/', '/imprint/'],
  ['/istqb-zertifizierung/', '/en/istqb-certification/'],
  ['/kontakt/', '/en/contacts/'],
  ['/danke/', '/thanks/'],
];

const failures = [];
const nonNavigationRoutes = new Set(['/danke/', '/datenschutz/', '/impressum/', '/imprint/', '/privacy-policy/', '/thanks/']);
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
  assert(html.includes('rel="canonical"'), `${route}: missing canonical URL`);
  if (route === '/danke/' || route === '/thanks/') {
    assert(html.includes('name="robots" content="noindex, follow"'), `${route}: confirmation page must be excluded from search results`);
  }
  assert(html.includes('class="office-map'), `${route}: shared office map is missing`);
  assert(html.includes('Mergenthalerallee+79-81%2C+65760+Eschborn'), `${route}: map address is incorrect`);
  assert(html.indexOf('class="office-map') < html.indexOf('<footer'), `${route}: map must appear above the footer`);
  assert(html.includes('tild3661-6362-4233-a538-636439366365__frame_929516.png'), `${route}: WMA favicon is missing`);
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

for (const [deRoute, enRoute] of bilingualRoutes) {
  const de = renderedPages.get(deRoute) ?? '';
  const en = renderedPages.get(enRoute) ?? '';
  const escapedEnRoute = enRoute.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const escapedDeRoute = deRoute.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  assert(de.includes('<html lang="de">'), `${deRoute}: German html language is missing`);
  assert(en.includes('<html lang="en">'), `${enRoute}: English html language is missing`);
  assert(de.includes(`hreflang="en" href="https://test-it-academy.com${enRoute}"`), `${deRoute}: English alternate link is incorrect`);
  assert(en.includes(`hreflang="de" href="https://test-it-academy.com${deRoute}"`), `${enRoute}: German alternate link is incorrect`);
  assert(new RegExp(`class="site-header__lang" href="${escapedEnRoute}"[^>]*>\\s*EN\\s*<\\/a>`).test(de), `${deRoute}: language switch does not point to ${enRoute}`);
  assert(new RegExp(`class="site-header__lang" href="${escapedDeRoute}"[^>]*>\\s*DE\\s*<\\/a>`).test(en), `${enRoute}: language switch does not point to ${deRoute}`);
}

for (const route of ['/', '/en/']) {
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html');
  const html = await readFile(file, 'utf8');
  assert(html.includes('<video') && html.includes('/media/hero-background.mp4'), `${route}: homepage background video is missing`);
  assert(/<video\b[^>]*\sautoplay\b[^>]*\smuted\b[^>]*\sloop\b/i.test(html), `${route}: homepage background video is not configured for continuous muted playback`);
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
  console.log(`Astro production audit passed: ${routes.length} routes, ${bilingualRoutes.length} bilingual pairs, internal links, button hooks, accessible images, form security, video and 360-degree tour.`);
}
