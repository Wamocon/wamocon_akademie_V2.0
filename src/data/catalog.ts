/**
 * ZENTRALE PFLEGESTELLE für Preise, Kurstermine und Bewertungswerte.
 *
 * Alles, was hier eingetragen wird, fließt automatisch an zwei Stellen ein:
 *   1. in den sichtbaren Seitentext (Terminliste auf /bildungsprogramme-fr-softwaretester/)
 *   2. in die strukturierten Daten (Course.offers, CourseInstance.startDate,
 *      EducationalOrganization.aggregateRating)
 *
 * Nichts davon wird doppelt gepflegt. Solange ein Wert `null` bzw. eine Liste
 * leer ist, gibt die Website an dieser Stelle bewusst nichts aus — weder im
 * Text noch im Markup. Es wird nichts geschätzt und nichts gerundet.
 *
 * -------------------------------------------------------------------------
 * WO TRAGE ICH WAS EIN?
 * -------------------------------------------------------------------------
 *   Preis eines Kurses ........ courseCatalog.<kurs>.price
 *   Währung ................... courseCatalog.<kurs>.priceCurrency (Vorbelegung EUR)
 *   Kurstermine ............... courseCatalog.<kurs>.startDates  (ISO 8601: '2026-11-03')
 *   Bewertungsdurchschnitt .... reviewSummary.ratingValue
 *   Anzahl der Bewertungen .... reviewSummary.reviewCount
 *
 * WICHTIG zu den Bewertungen: `ratingValue` und `reviewCount` müssen exakt den
 * auf /bewertungen/ öffentlich sichtbaren Bewertungen entsprechen. Google wertet
 * eine Abweichung als Richtlinienverstoß und entfernt die Sterne-Darstellung.
 * Solange auf der Bewertungsseite keine numerischen Bewertungen ausgewiesen
 * werden, bleiben beide Felder `null`.
 */
import type { Lang } from '../i18n/config';

export type CourseKey = 'ctfl40' | 'agileTester10' | 'booster360';

export type CourseOffer = {
  /** Kurspreis als Zahl, ohne Währungssymbol. `null` = noch nicht entschieden. */
  price: number | null;
  priceCurrency: string;
  /** Enthält der Preis die Umsatzsteuer? Steuert nur die schema.org-Angabe. */
  priceIncludesTax: boolean;
  /** Kursstarts als ISO-8601-Datum, z. B. '2026-11-03'. Leer = noch offen. */
  startDates: string[];
};

export const courseCatalog: Record<CourseKey, CourseOffer> = {
  // ISTQB® Certified Tester Foundation Level (CTFL) 4.0
  ctfl40: {
    price: null,
    priceCurrency: 'EUR',
    priceIncludesTax: true,
    startDates: [],
  },
  // ISTQB® Agile Tester 1.0
  agileTester10: {
    price: null,
    priceCurrency: 'EUR',
    priceIncludesTax: true,
    startDates: [],
  },
  // 360° Booster System
  booster360: {
    price: null,
    priceCurrency: 'EUR',
    priceIncludesTax: true,
    startDates: [],
  },
};

/** Bewertungswerte für den EducationalOrganization-Datensatz. */
export const reviewSummary: {
  ratingValue: number | null;
  reviewCount: number | null;
  bestRating: number;
  worstRating: number;
} = {
  ratingValue: null,
  reviewCount: null,
  bestRating: 5,
  worstRating: 1,
};

// ---------------------------------------------------------------------------
// Ableitungen. Ab hier ist nichts mehr zu pflegen.
// ---------------------------------------------------------------------------

/**
 * schema.org-`offers` für einen Kurs — oder `undefined`, solange kein Preis
 * hinterlegt ist. Ein Offer ohne Preis ist für Google wertlos und würde den
 * Datensatz nur mit einer unvollständigen Angabe belasten.
 */
export function offersFor(key: CourseKey, origin: string) {
  const course = courseCatalog[key];
  if (course.price === null) return undefined;
  return {
    '@type': 'Offer',
    price: course.price,
    priceCurrency: course.priceCurrency,
    category: course.priceIncludesTax ? 'Brutto' : 'Netto',
    availability: 'https://schema.org/InStock',
    url: `${origin}/bildungsprogramme-fr-softwaretester/`,
  };
}

/**
 * `CourseInstance`-Einträge für einen Kurs. Ohne hinterlegte Termine wird eine
 * einzelne Instanz ohne `startDate` zurückgegeben, damit Unterrichtsform, Dauer
 * und Ort erhalten bleiben — genau der heutige Stand.
 */
export function courseInstancesFor(key: CourseKey, base: Record<string, unknown>) {
  const { startDates } = courseCatalog[key];
  if (startDates.length === 0) return base;
  return startDates.map((startDate) => ({ ...base, startDate }));
}

/**
 * `aggregateRating` für den Organisationsdatensatz — oder `undefined`, solange
 * die Werte nicht aus tatsächlich veröffentlichten Bewertungen belegt sind.
 */
export function aggregateRating() {
  const { ratingValue, reviewCount, bestRating, worstRating } = reviewSummary;
  if (ratingValue === null || reviewCount === null || reviewCount < 1) return undefined;
  return {
    '@type': 'AggregateRating',
    ratingValue,
    reviewCount,
    bestRating,
    worstRating,
  };
}

/** Intl locale per site language, for prices and course dates. */
const intlLocales: Record<Lang, string> = { de: 'de-DE', en: 'en-GB', kk: 'kk-KZ' };

/** Preis als Fließtext für die Seite, z. B. „1.890 €". Leer, solange offen. */
export function priceLabel(key: CourseKey, lang: Lang): string | null {
  const { price, priceCurrency } = courseCatalog[key];
  if (price === null) return null;
  return new Intl.NumberFormat(intlLocales[lang], {
    style: 'currency',
    currency: priceCurrency,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Die Terminliste für die sichtbare Tabelle auf der Kursübersicht, gruppiert
 * nach Monat. Ohne hinterlegte Termine liefert sie `null`; die Seite zeigt dann
 * weiterhin ihren „In Planung"-Platzhalter.
 */
export function scheduleByMonth(
  lang: Lang,
): Array<{ month: string; rows: Array<[string, string]> }> | null {
  const locale = intlLocales[lang];
  const label = { de: 'Plätze verfügbar', en: 'Places available', kk: 'Орындар бар' }[lang];
  const all = (Object.keys(courseCatalog) as CourseKey[])
    .flatMap((key) => courseCatalog[key].startDates.map((date) => ({ key, date })))
    .sort((a, b) => a.date.localeCompare(b.date));
  if (all.length === 0) return null;

  const months = new Map<string, Array<[string, string]>>();
  const monthFmt = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' });
  const dayFmt = new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit' });
  for (const { date } of all) {
    const d = new Date(`${date}T00:00:00Z`);
    const month = monthFmt.format(d);
    if (!months.has(month)) months.set(month, []);
    months.get(month)!.push([dayFmt.format(d), label]);
  }
  return [...months].map(([month, rows]) => ({ month, rows }));
}
