/**
 * ZENTRALE PFLEGESTELLE für die AZAV-Trägerzulassung der WAMOCON Academy GmbH.
 *
 * Alles, was hier eingetragen wird, steuert die Seite /bildungstraeger/ (und
 * ihre englische und kasachische Fassung), die Navigation, den Footer, die
 * Sitemap und die strukturierten Daten. Nichts davon wird doppelt gepflegt.
 * Solange ein Wert leer ist, gibt die Website an dieser Stelle bewusst nichts
 * aus. Es wird nichts geschätzt, nichts vorweggenommen und nichts gerundet.
 *
 * -------------------------------------------------------------------------
 * WO TRAGE ICH WAS EIN?
 * -------------------------------------------------------------------------
 *   Zertifikatsnummer .......... zertifikatsnummer
 *                                (leer = Seite bleibt noindex und fehlt in Sitemap
 *                                und Chat-Wissen; der Reiter ist immer sichtbar)
 *   Gültigkeit ................. gueltigVon / gueltigBis (ISO 8601: '2026-11-01')
 *   Ausgestellt am ............. zertifikatAusgestellt (ISO 8601)
 *   Einschränkungen ............ einschraenkungen (laut Anhang, z. B. 'keine')
 *   Zertifikat ................. zertifikatDatei (Pfad unter /public, Bild oder PDF)
 *   Zertifikat-Vorschau ........ zertifikatBreite / zertifikatHoehe (Pixel, nur bei Bild)
 *   Zeichen der GZQ ............ zeichenDatei, zeichenBreite, zeichenHoehe
 *                                + zeichenNutzungsregelnGeprueft
 *                                (beides nötig, sonst erscheint nur Text)
 *   Fachliche Prüfung .......... pruefdatum (ISO 8601)
 *   Zugelassene Maßnahmen ...... massnahmen (erst NACH der Maßnahmenzulassung)
 *
 * WICHTIG zu den Maßnahmen: Ein Kurs darf erst in `massnahmen` stehen, wenn
 * für genau diesen Kurs eine Maßnahmenzulassung (§ 179 SGB III) mit Nummer
 * vorliegt. Erst dann zeigt die Seite ihn als förderfähig an. Bis dahin steht
 * er in `massnahmenGeplant`.
 */

export type MassnahmeFormat = 'praesenz' | 'online';

export type Massnahme = {
  /** Offizieller Name laut Maßnahmenzulassung. */
  name: string;
  /** Maßnahmenummer laut Zulassungsbescheid. */
  massnahmenummer: string;
  /** Dauer laut Zulassung, z. B. '12 Wochen in Vollzeit'. */
  dauer: string;
  format: MassnahmeFormat;
  /** Durchführungsort, z. B. 'Eschborn' oder 'online'. */
  ort: string;
  /** Abschluss laut Zulassung. */
  abschluss: string;
};

export type MassnahmeGeplant = {
  name: string;
  format: MassnahmeFormat;
};

/**
 * Das 45-Tage-Seminar, das als geplante Maßnahme zugelassen werden soll. Es
 * erscheint als Werbeschild direkt unter dem Hero. Titel, Dauer und Etappen
 * stammen aus dem bestehenden Kurs „ISTQB® CTFL + Praxistraining“ auf
 * /bildungsprogramme-fr-softwaretester/ (audit/course-popup-copy.json).
 */
export type Seminar = {
  titel: string;
  tage: number;
  /** Etappen als [erster Tag, letzter Tag]. */
  etappen: Array<[number, number]>;
};

/**
 * Siegel und Auszeichnungen für die Siegelleiste. Ein Eintrag ohne `datei`
 * wird nicht angezeigt. Jedes Logo nur mit Nutzungsrecht einbinden und
 * unverändert lassen (kein Zuschnitt, keine Umfärbung).
 */
export type Siegel = {
  key: string;
  /** Bildunterschrift je Sprache. */
  label: { de: string; en: string; kk: string };
  datei: string;
  breite: number | null;
  hoehe: number | null;
};

/**
 * Nächster Seminarstart für den Kalender auf der Seite. Solange `datum` leer
 * ist, zeigt der Kalender die Monate aus `kalenderMonate` ausgegraut mit
 * „Termin folgt in Kürze“. Ist ein Datum eingetragen, wird nur dessen Monat
 * gezeigt und der Starttag hervorgehoben.
 *
 * WICHTIG: `startsImJahr` und `plaetzeVorOrt` werden als Verknappung beworben
 * („nur noch ein Start“, „mindestens 12 Plätze“). Sie müssen jederzeit stimmen.
 */
export type NaechsterStart = {
  datum: string;
  kalenderMonate: string[];
  jahr: number;
  startsImJahr: number;
  plaetzeVorOrt: number;
};

export const bildungstraeger: {
  fachkundigeStelle: { name: string; ort: string; url: string; urlLabel: string; akkreditierung: string };
  zulassungsart: string;
  paragraf: string;
  erstzulassung: boolean;
  fachbereich: { nummer: number; bezeichnung: string };
  auditTermine: string[];
  zertifikatsnummer: string;
  gueltigVon: string;
  gueltigBis: string;
  zertifikatAusgestellt: string;
  einschraenkungen: string;
  zertifikatDatei: string;
  zertifikatBreite: number | null;
  zertifikatHoehe: number | null;
  zeichenDatei: string;
  zeichenBreite: number | null;
  zeichenHoehe: number | null;
  zeichenNutzungsregelnGeprueft: boolean;
  pruefdatum: string;
  pruefer: string;
  massnahmen: Massnahme[];
  massnahmenGeplant: MassnahmeGeplant[];
  seminar: Seminar;
  naechsterStart: NaechsterStart;
  siegel: Siegel[];
} = {
  fachkundigeStelle: {
    name: 'GZQ GmbH',
    ort: 'Saarbrücken',
    url: 'https://www.gzq.de/',
    urlLabel: 'www.gzq.de',
    // Laut Zertifikat: von der DAkkS akkreditierte Zertifizierungsstelle.
    akkreditierung: 'D-ZE-16064-02-00',
  },
  zulassungsart: 'Trägerzulassung nach AZAV',
  paragraf: '§ 178 SGB III',
  erstzulassung: true,
  fachbereich: { nummer: 4, bezeichnung: 'Maßnahmen der beruflichen Weiterbildung' },
  auditTermine: ['2026-10-05', '2026-10-14'],

  // Quelle: Zertifikat der GZQ GmbH vom 20.10.2026 (Seite 1 und Anhang).
  // Mit der Nummer ist die Seite öffentlich: indexiert, in Sitemap und Chat-Wissen.
  zertifikatsnummer: 'Z-001806-1',
  gueltigVon: '2026-10-19',
  gueltigBis: '2031-10-18',
  zertifikatAusgestellt: '2026-10-20',
  // Anhang, Zentrale Eschborn, FB4: Einschränkungen „keine“.
  einschraenkungen: 'keine',
  zertifikatDatei: '/docs/azav-zertifikat-z-001806-1.pdf',
  // TODO: OFFEN. Pixelmaße des Zertifikatsbilds (verhindert Layout-Sprünge).
  zertifikatBreite: null,
  zertifikatHoehe: null,
  // TODO: OFFEN. Zeichen der fachkundigen Stelle unverändert unter /public ablegen.
  zeichenDatei: '',
  // TODO: OFFEN. Pixelmaße der Zeichen-Datei, damit sie unverzerrt und ohne
  // Layout-Sprung eingebunden wird.
  zeichenBreite: null,
  zeichenHoehe: null,
  // TODO: OFFEN. Erst auf true setzen, wenn die Nutzungsregeln der GZQ vorliegen
  // und die Einbindung danach geprüft ist. Die Regeln der GZQ gehen vor.
  zeichenNutzungsregelnGeprueft: false,
  // TODO: OFFEN. Datum der fachlichen Prüfung der Seite, ISO 8601.
  pruefdatum: '',
  pruefer: 'Dipl.-Ing. Waleri Moretz',

  // Zugelassene Maßnahmen: noch keine.
  massnahmen: [],

  // Geplant, noch ohne Maßnahmenzulassung. Bewusst ohne Termin.
  massnahmenGeplant: [
    { name: 'Abschluss Softwaretester ISTQB® Zertifikat, Weiterbildung', format: 'praesenz' },
    { name: 'Abschluss Softwaretester ISTQB® Zertifikat, Weiterbildung', format: 'online' },
  ],

  // Das Seminar hinter der geplanten Maßnahme (Werbeschild unter dem Hero).
  seminar: {
    titel: 'ISTQB® CTFL + Praxistraining',
    tage: 45,
    etappen: [[1, 14], [15, 28], [29, 42], [43, 45]],
  },

  // Das Seminar startet erst nach der Maßnahmenzulassung, damit es mit
  // Bildungsgutschein besucht werden kann. Für 2026 ist nur noch ein Start geplant.
  naechsterStart: {
    // TODO: OFFEN. Starttermin als ISO 8601, z. B. '2026-12-01'.
    datum: '',
    // Monate, die ausgegraut gezeigt werden, solange das Datum offen ist.
    kalenderMonate: ['2026-11', '2026-12'],
    jahr: 2026,
    startsImJahr: 1,
    plaetzeVorOrt: 12,
  },

  siegel: [
    {
      // Auszeichnung des Deutschen Innovationsinstituts (diind), gültig bis
      // 12/2025. Deshalb ausdrücklich als Auszeichnung 2025 beschriftet.
      key: 'ki-innovator',
      label: { de: 'KI-Innovator 2025', en: 'AI Innovator 2025', kk: 'KI-Innovator 2025' },
      datei: '/images/badge-ki-siegel.png',
      breite: 1680,
      hoehe: 2432,
    },
    {
      key: 'zukunft',
      // Laut WAMOCON-Unternehmensübersicht (10/2026): nominiert als „Unternehmen der Zukunft“.
      label: { de: 'Nominiert: Unternehmen der Zukunft', en: 'Nominated: Company of the Future', kk: 'Номинация: Болашақ компаниясы' },
      datei: '/images/badge-zukunft.webp',
      breite: 1052,
      hoehe: 1524,
    },
    {
      // Logo vom Team geliefert (27.10.2026).
      key: 'bildung-made-in-germany',
      label: { de: 'Bildung Made in Germany', en: 'Bildung Made in Germany', kk: 'Bildung Made in Germany' },
      datei: '/images/badge-bildung-made-in-germany.png',
      breite: 1024,
      hoehe: 440,
    },
    {
      // TODO: OFFEN. IHK-Zeichen nur mit Freigabe der zuständigen IHK einbinden.
      key: 'ihk',
      label: { de: 'IHK: Wir bilden aus', en: 'IHK: Wir bilden aus', kk: 'IHK: Wir bilden aus' },
      datei: '',
      breite: null,
      hoehe: null,
    },
  ],
};

// ---------------------------------------------------------------------------
// Ableitungen. Ab hier ist nichts mehr zu pflegen.
// ---------------------------------------------------------------------------

/** Die Seite ist öffentlich, sobald die Zertifikatsnummer eingetragen ist. */
export function istVeroeffentlicht(): boolean {
  return bildungstraeger.zertifikatsnummer.trim() !== '';
}

/** Das Zeichen erscheint nur mit Datei UND geprüften Nutzungsregeln. */
export function zeigeZeichen(): boolean {
  const z = bildungstraeger;
  return z.zeichenDatei.trim() !== '' && z.zeichenBreite !== null && z.zeichenHoehe !== null && z.zeichenNutzungsregelnGeprueft;
}

/** Mindestens eine Maßnahme mit Maßnahmenzulassung ist eingetragen. */
export function hatZugelasseneMassnahmen(): boolean {
  return bildungstraeger.massnahmen.length > 0;
}

/** Das Zertifikat liegt als PDF vor (sonst als Bild). */
export function zertifikatIstPdf(): boolean {
  return /\.pdf$/i.test(bildungstraeger.zertifikatDatei);
}

/**
 * schema.org-Kurs für das 45-Tage-Seminar (SEO und GEO). Bewusst ohne Preis
 * und ohne Förderaussage; ein Starttermin erscheint erst, wenn er feststeht.
 */
export function seminarSchema(origin: string, url: string, inLanguage: string, description: string) {
  const { seminar, naechsterStart } = bildungstraeger;
  const instance = (courseMode: string) => ({
    '@type': 'CourseInstance',
    courseMode,
    courseWorkload: `P${seminar.tage}D`,
    ...(naechsterStart.datum ? { startDate: naechsterStart.datum } : {}),
  });
  return {
    '@type': 'Course',
    '@id': `${url}#seminar`,
    name: `${seminar.titel} (${seminar.tage} Tage)`,
    description,
    url,
    inLanguage,
    provider: { '@id': `${origin}/#organization` },
    educationalLevel: 'Beginner',
    teaches: ['Software testing fundamentals', 'Test design techniques', 'Test management', 'Test tools', 'ISTQB Certified Tester Foundation Level 4.0'],
    hasCourseInstance: [instance('onsite'), instance('online')],
  };
}

/** Pfade der Seite je Sprache. Einzige Quelle für Navigation, Sitemap und Audit. */
export const bildungstraegerHref = {
  de: '/bildungstraeger/',
  en: '/en/education-provider/',
  kk: '/kk/bilim-beru-uyymy/',
} as const;
