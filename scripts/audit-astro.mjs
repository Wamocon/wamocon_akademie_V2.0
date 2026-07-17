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
  '/bildungsprogramme-fr-softwaretester/',
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
  '/en/educational-programs/',
  '/en/istqb-certification/',
  '/en/reviews/',
  '/imprint/',
  '/privacy-policy/',
  '/thanks/',
];

const failures = [];
const nonNavigationRoutes = new Set(['/danke/', '/datenschutz/', '/impressum/', '/imprint/', '/privacy-policy/', '/thanks/']);
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

  assert(html.includes('name="generator" content="Astro'), `${route}: missing Astro generator metadata`);
  assert(html.includes('<title>') && html.includes('name="description"'), `${route}: missing SEO title/description`);
  assert(html.includes('rel="canonical"'), `${route}: missing canonical URL`);
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
}

for (const route of ['/', '/en/']) {
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html');
  const html = await readFile(file, 'utf8');
  assert(html.includes('<video') && html.includes('/media/hero-background.mp4'), `${route}: homepage background video is missing`);
  assert(html.includes('class="office-tour'), `${route}: 360-degree tour section is missing`);
  assert(html.includes('map_action=pano'), `${route}: 360-degree tour link is missing`);
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
  console.log(`Astro production audit passed: ${routes.length} routes, active navigation, WMA favicon, map order, form security, video and 360-degree tour.`);
}
