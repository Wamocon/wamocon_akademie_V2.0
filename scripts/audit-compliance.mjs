import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootUrl = new URL('../dist/', import.meta.url);
const root = fileURLToPath(rootUrl);
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : (entry.name.endsWith('.html') ? [path] : []);
  }));
  return nested.flat();
}

const files = await htmlFiles(root);
const pages = await Promise.all(files.map(async (file) => ({ file, html: await readFile(file, 'utf8') })));
const combined = pages.map((page) => page.html).join('\n');
const sourceHtml = await htmlFiles(fileURLToPath(new URL('../src/', import.meta.url)));
const leadFormSource = await readFile(new URL('../src/components/sections/LeadForm.astro', import.meta.url), 'utf8');
const consentSource = await readFile(new URL('../src/components/ui/CookieBanner.astro', import.meta.url), 'utf8');

for (const { file, html } of pages) {
  assert(/<header\b/.test(html), `${file}: shared header missing`);
  assert(/<footer\b/.test(html), `${file}: shared footer missing`);
  assert(/data-open-consent-settings/.test(html), `${file}: consent withdrawal/settings control missing`);
  assert(/data-consent-accept/.test(html) && /data-consent-reject/.test(html) && /data-consent-settings/.test(html), `${file}: equal consent choices missing`);
  assert(!/<input[^>]+name="consent"[^>]+required/i.test(html), `${file}: mandatory consent checkbox remains`);
}

assert(!/99131843|mc\.yandex|metrika\.yandex|\bym\s*\(/i.test(combined), 'Yandex Metrica/Webvisor code remains in the Astro output');
assert(!/fonts\.googleapis\.com|fonts\.gstatic\.com/i.test(combined), 'Remote Google Fonts remain in the Astro output');
assert(!/Mergenthaleralee/i.test(combined), 'Misspelled Mergenthaleralee remains');
assert(!/November 2024|Dezember 2024|December 2024|Januar 2025|January 2025/i.test(combined), 'Expired course dates remain');
assert(!/<iframe\b(?=[^>]*\ssrc=)[^>]*\ssrc="https:\/\/(?:www\.google\.com|www\.youtube|youtube)/i.test(combined), 'Third-party iframe loads before consent');
assert(!/vollständig finanziert|alle Kosten (?:werden )?übernommen|free of charge with an education voucher/i.test(combined), 'Unverified blanket funding promise remains');
assert(!/Als offizieller Partner (?:von|des)|As an official partner of ISTQB/i.test(combined), 'Unverified ISTQB partner wording remains');
assert(combined.includes('Texte, Bilder, Videos, Audios und Grafiken, die hier bereitgestellt werden'), 'German AI transparency notice missing');
assert(combined.includes('Texts, images, videos, audio and graphics provided here may have been created'), 'English AI transparency notice missing');
assert(sourceHtml.length === 0, `Standalone HTML source files remain: ${sourceHtml.join(', ')}`);
assert(!/\.lead-form label\s*\{[^}]*font-size:\s*0[;\s}]/s.test(leadFormSource), 'Shared lead-form labels are visually hidden');
assert(/data-external-media-load.*data-load-external-media|data-load-external-media.*data-external-media-load/s.test(consentSource), 'Contextual external-media buttons are not connected to consent storage');

const privacy = await readFile(new URL('./datenschutz/index.html', rootUrl), 'utf8');
for (const term of ['Vercel', 'Microsoft 365', 'Cloudflare Turnstile', 'YouTube', 'Google Maps', 'Yandex Metrica']) {
  assert(privacy.includes(term), `Privacy policy does not address ${term}`);
}

if (failures.length) {
  console.error(`Compliance audit failed (${failures.length}):\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(`Compliance audit passed: ${pages.length} rendered pages, shared header/footer, consent controls, tracker blocking, current dates and bilingual AI notice.`);
