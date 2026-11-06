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
 *                                (nur zur Pflege, wird auf der Website nicht ausgegeben)
 *   Ausgestellt am ............. zertifikatAusgestellt (ISO 8601)
 *   Einschränkungen ............ einschraenkungen (laut Anhang, z. B. 'keine')
 *   Zertifikat ................. zertifikatDatei (Pfad unter /public, Bild oder PDF)
 *   Zertifikat-Vorschau ........ zertifikatVorschau + zertifikatBreite / zertifikatHoehe
 *                                (Bild der ersten Seite; erscheint auf der Seite und
 *                                öffnet beim Klick das Zertifikat)
 *   Zeichen der GZQ ............ zeichenDatei, zeichenBreite, zeichenHoehe
 *                                + zeichenNutzungsregelnGeprueft
 *                                (beides nötig, sonst erscheint nur Text)
 *   Fachliche Prüfung .......... pruefdatum (ISO 8601)
 *   Zugelassene Maßnahmen ...... massnahmen (erst NACH der Maßnahmenzulassung)
 *   Avatar-Video Begleitung .... begleitVideo.<de/en/kk>.datei (+ poster, Pfad unter /public;
 *                                leer = Platzhalter "Video folgt")
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
  /** Regulärpreis ohne Bildungsgutschein in Euro. */
  preisRegulaer: number;
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
  /**
   * Seite des Ausstellers mit den Prüfkriterien. Die Siegelkarte verlinkt
   * darauf (neuer Tab). Beim diind-Siegel Pflicht: Lizenzbedingungen § 2
   * Abs. 1 verlangen bei werblicher Nutzung einen Verweis auf die Kriterien.
   */
  kriterienUrl?: string;
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

/** Erklärvideo einer Sprachfassung. `datei` leer = Platzhalter "Video folgt". */
export type BegleitVideo = { datei: string; poster: string; laenge: string };

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
  zertifikatVorschau: string;
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
  begleitVideo: { de: BegleitVideo; en: BegleitVideo; kk: BegleitVideo };
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
  // Bewusst kein Download (Team, 02.11.2026): keine PDF-Datei auf der Website.
  zertifikatDatei: '',
  // Seite 1 des Zertifikats als Bild, nur zur Ansicht und ohne Vergrößerung.
  // Der Zulassungszeitraum ist im Bild abgedeckt (Team, 02.11.2026).
  zertifikatVorschau: '/images/academy/azav-zertifikat-z-001806-1.webp',
  zertifikatBreite: 1000,
  zertifikatHoehe: 1415,
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
    // Regulärpreis laut Team (27.10.2026). Mit bewilligtem Bildungsgutschein
    // übernimmt die Agentur für Arbeit die Lehrgangskosten (§ 83 SGB III).
    preisRegulaer: 6000,
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
      // Auszeichnung des Deutschen Innovationsinstituts (diind), Urkunde vom
      // 02.11.2026, gültig bis einschließlich 12/2027 (Lizenzbedingungen § 3
      // Abs. 2: bis zum letzten Tag des Monats). Quelle: Siegeldatei, Urkunde
      // und Lizenzbedingungen (Stand Juli 2026) vom diind. Die Datei ist nur
      // proportional verkleinert (3508 x 5079 auf 663 x 960, verlustfrei),
      // wie § 1 Abs. 5 es erlaubt.
      // Neue Siegel immer unter neuem Dateinamen ablegen: /images/ wird laut
      // vercel.json ein Jahr lang unveränderlich gecacht.
      // Beschriftung ohne Jahreszahl und in allen Sprachen mit dem offiziellen
      // Namen der Auszeichnung (Team, 04.11.2026). Die Gültigkeit steht auf
      // dem Siegel selbst.
      key: 'ki-innovator',
      label: { de: 'KI-Innovator', en: 'KI-Innovator', kk: 'KI-Innovator' },
      datei: '/images/badge-ki-innovator-bis-12-2027.webp',
      breite: 663,
      hoehe: 960,
      // Abschnitt "Das Prüfverfahren der Auszeichnung KI Innovator" (geprüft 04.11.2026).
      kriterienUrl: 'https://diind.de/auszeichnungen/der-pruefprozess/',
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

  // Erklärvideo im Abschnitt "So begleiten wir dich" (vom Team geliefert,
  // mit KI erstellt und so gekennzeichnet), je Sprache eine eigene Fassung.
  // Es zeigt Förderweg, Begleitung und die Zeit nach dem Seminar und ersetzt
  // die Kacheln dieses Abschnitts. Solange datei leer ist, zeigt die Seite
  // einen Platzhalter. Ändert sich die Länge, auch videoCta in
  // BildungstraegerPage.astro anpassen ("In 36 Sekunden ...").
  begleitVideo: {
    de: {
      // wamocon_seminar_kostenfrei_v03, Länge laut Datei: 35,9 s.
      datei: '/media/bildungstraeger-begleitung.mp4',
      // Standbild aus Sekunde 5 ("Softwaretester werden, ohne selbst zu zahlen?").
      poster: '/images/academy/begleitung-poster.webp',
      laenge: '0:36',
    },
    en: {
      // wamocon_seminar_free_en_v01, Länge laut Datei: 41,1 s.
      datei: '/media/bildungstraeger-begleitung-en.mp4',
      // Standbild aus Sekunde 5 ("Become a software tester without paying?").
      poster: '/images/academy/begleitung-poster-en.webp',
      laenge: '0:41',
    },
    kk: {
      // wamocon_seminar_kostenfrei_kk_v02, Länge laut Datei: 47,6 s.
      datei: '/media/bildungstraeger-begleitung-kk.mp4',
      // Standbild aus Sekunde 7 (Frage nach den Kosten, Gutschein liegt auf).
      poster: '/images/academy/begleitung-poster-kk.webp',
      laenge: '0:48',
    },
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

/**
 * schema.org-Kurs für das 45-Tage-Seminar (SEO und GEO). Mit Regulärpreis,
 * bewusst ohne Förderaussage; ein Starttermin erscheint erst, wenn er feststeht.
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
    offers: { '@type': 'Offer', price: seminar.preisRegulaer, priceCurrency: 'EUR', category: 'Regular price without education voucher' },
  };
}

/** Pfade der Seite je Sprache. Einzige Quelle für Navigation, Sitemap und Audit. */
export const bildungstraegerHref = {
  de: '/bildungstraeger/',
  en: '/en/education-provider/',
  kk: '/kk/bilim-beru-uyymy/',
} as const;
