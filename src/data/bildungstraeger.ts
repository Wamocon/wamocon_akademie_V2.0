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

export const bildungstraeger: {
  fachkundigeStelle: { name: string; ort: string; url: string; urlLabel: string };
  zulassungsart: string;
  paragraf: string;
  erstzulassung: boolean;
  fachbereich: { nummer: number; bezeichnung: string };
  auditTermine: string[];
  zertifikatsnummer: string;
  gueltigVon: string;
  gueltigBis: string;
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
} = {
  fachkundigeStelle: {
    name: 'GZQ GmbH',
    ort: 'Saarbrücken',
    url: 'https://www.gzq.de/',
    urlLabel: 'www.gzq.de',
  },
  zulassungsart: 'Trägerzulassung nach AZAV',
  paragraf: '§ 178 SGB III',
  erstzulassung: true,
  fachbereich: { nummer: 4, bezeichnung: 'Maßnahmen der beruflichen Weiterbildung' },
  auditTermine: ['2026-10-05', '2026-10-14'],

  // TODO: OFFEN. Zertifikatsnummer der GZQ GmbH eintragen. Solange leer, bleibt
  // die Seite noindex und fehlt in Sitemap und Chat-Wissen.
  zertifikatsnummer: '',
  // TODO: OFFEN. Gültigkeit laut Zertifikat, ISO 8601.
  gueltigVon: '',
  // TODO: OFFEN.
  gueltigBis: '',
  // TODO: OFFEN. Zertifikat als Bild (.png/.jpg/.webp) oder PDF unter /public,
  // z. B. '/images/academy/azav-zertifikat.png'.
  zertifikatDatei: '',
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
    { name: 'Abschluss Softwaretester:in ISTQB® Zertifikat, Weiterbildung', format: 'praesenz' },
    { name: 'Abschluss Softwaretester:in ISTQB® Zertifikat, Weiterbildung', format: 'online' },
  ],

  // Das Seminar hinter der geplanten Maßnahme (Werbeschild unter dem Hero).
  seminar: {
    titel: 'ISTQB® CTFL + Praxistraining',
    tage: 45,
    etappen: [[1, 14], [15, 28], [29, 42], [43, 45]],
  },
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

/** Pfade der Seite je Sprache. Einzige Quelle für Navigation, Sitemap und Audit. */
export const bildungstraegerHref = {
  de: '/bildungstraeger/',
  en: '/en/education-provider/',
  kk: '/kk/bilim-beru-uyymy/',
} as const;
