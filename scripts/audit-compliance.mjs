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

  for (const match of html.matchAll(/<iframe\b[^>]*data-consent-src="[^"]*youtube-nocookie\.com[^"]*"[^>]*>/gi)) {
    const iframe = match[0];
    assert(/data-consent-mode="manual"/i.test(iframe), `${file}: consented YouTube video can load without an explicit play action`);
    assert(!/\ssrc="/i.test(iframe), `${file}: consented YouTube video has a live src before an explicit play action`);
  }
}

assert(!/99131843|mc\.yandex|metrika\.yandex|\bym\s*\(/i.test(combined), 'Yandex Metrica/Webvisor code remains in the Astro output');
assert(!/fonts\.googleapis\.com|fonts\.gstatic\.com/i.test(combined), 'Remote Google Fonts remain in the Astro output');
assert(!/Mergenthaleralee/i.test(combined), 'Misspelled Mergenthaleralee remains');
assert(!/November 2024|Dezember 2024|December 2024|Januar 2025|January 2025/i.test(combined), 'Expired course dates remain');
assert(!/<iframe\b(?=[^>]*\ssrc=)[^>]*\ssrc="https:\/\/(?:www\.google\.com|www\.youtube|youtube)/i.test(combined), 'Third-party iframe loads before consent');
assert(
  !/vollständig finanziert|alle Kosten (?:werden )?übernommen|free of charge with an education voucher/i.test(combined),
  'Blanket funding promise remains in the rendered website',
);
assert(!/Als offizieller Partner (?:von|des)|As an official partner of ISTQB/i.test(combined), 'Unverified ISTQB partner wording remains');
assert(!/5838311|info@wamocon\.com/i.test(combined), 'Conflicting legacy Academy contact details remain in rendered pages');
assert(combined.includes('+49 (0) 6196 5838312') && combined.includes('info@test-it-academy.com'), 'Canonical Academy phone or e-mail is missing');
assert(combined.includes('DE344930486'), 'Confirmed Academy VAT ID is missing');
assert(combined.includes('50 Jahre gebündelte Praxiserfahrung unseres Teams'), 'Confirmed combined team-experience wording is missing');
assert(combined.includes('Die WAMOCON Academy GmbH ist nicht bereit und nicht verpflichtet'), 'Confirmed Academy consumer-dispute statement is missing');
assert(!combined.includes('info@test-it-academy.de'), 'Obsolete .de Academy e-mail remains');
assert(!/Regierungspräsidium Hessen|Hesse Regional Council/i.test(combined), 'Unverified authority recognition claim remains');
assert(!/von der Bundesrepublik Deutschland ausgewählt|selected as a training provider by the Federal Republic of Germany/i.test(combined), 'Unverified federal-authority selection claim remains');
assert(!/seit zwanzig Jahren|for twenty years/i.test(combined), 'Outdated WMC-method experience claim remains');
assert(!/Schulung komplett kostenfrei durch das Arbeitsamt|training completely free of charge through the employment office/i.test(combined), 'Unqualified employment-office funding promise remains');
assert(combined.includes('Einzelne grafische Elemente dieser Website'), 'German AI transparency notice missing');
assert(combined.includes('Some graphical elements on this website'), 'English AI transparency notice missing');

// Published participant reviews must stay in the language they were given in.
assert(
  combined.includes('Leon konnte trotz unzähliger Bewerbungen keinen Arbeitsplatz finden'),
  'Original German participant review wording is missing',
);
assert(sourceHtml.length === 0, `Standalone HTML source files remain: ${sourceHtml.join(', ')}`);
assert(!/\.lead-form label\s*\{[^}]*font-size:\s*0[;\s}]/s.test(leadFormSource), 'Shared lead-form labels are visually hidden');
assert(/data-external-media-load.*data-load-external-media|data-load-external-media.*data-external-media-load/s.test(consentSource), 'Contextual external-media buttons are not connected to consent storage');
assert(/allowed && requiresPlay/.test(consentSource), 'External-media consent still loads manual videos automatically');

const privacy = await readFile(new URL('./datenschutz/index.html', rootUrl), 'utf8');
for (const term of ['Vercel', 'Microsoft 365', 'Cloudflare Turnstile', 'YouTube', 'Google Maps', 'Yandex Metrica']) {
  assert(privacy.includes(term), `Privacy policy does not address ${term}`);
}

if (failures.length) {
  console.error(`Compliance audit failed (${failures.length}):\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(`Compliance audit passed: ${pages.length} rendered pages, shared header/footer, consent controls, tracker blocking, current dates and bilingual AI notice.`);
