/**
 * ZENTRALE PFLEGESTELLE für die Aussage zur Praxisbewertung.
 *
 * Hintergrund: Aussagen zur Trainerherkunft („unsere Trainer arbeiten in
 * Konzernprojekten") werden unwahr, sobald die Academy mit externen Trainern
 * arbeitet. Belegbar bleibt dauerhaft nur die Aussage über die BEWERTUNG, weil
 * die Bewertungsberechtigung an aktive Projekttätigkeit gebunden ist.
 *
 * Ob heute bereits eine individuelle Bewertung von Teilnehmerarbeit stattfindet
 * und ob das Testlabor der Lernplattform genannt werden darf, ist eine
 * Produktentscheidung. Deshalb ist der Satz hier schaltbar statt fest verdrahtet.
 *
 * -------------------------------------------------------------------------
 * UMSCHALTEN: genau eine Zeile ändern — `practiceAssessmentMode` unten.
 * -------------------------------------------------------------------------
 *   'testLab'    Satz MIT Testlabor-Bezug.
 *                Erst zulässig, wenn das Testlabor-Modul veröffentlicht ist —
 *                vorher beschriebe die Website ein Merkmal, das ein Interessent
 *                nicht nutzen kann.
 *   'noTestLab'  Satz OHNE Testlabor-Bezug.   << aktuell aktiv
 *   'off'        Satz entfällt ersatzlos.
 *                Zu wählen, falls heute keine individuelle Bewertung von
 *                Teilnehmerarbeit stattfindet.
 *
 * Alle Fundstellen im gerenderten Inhalt beziehen den Satz von hier
 * (src/data/faq.ts, 3 deutsche und 3 englische Antworten). In jedem der drei
 * Zustände bleibt der umgebende Text grammatisch vollständig; im Zustand 'off'
 * verschwindet der Satz spurlos.
 *
 * NICHT automatisch mitgeführt wird public/llms-full.txt: das ist eine statische
 * Datei ohne Importmöglichkeit. Sie führt denselben Satz einmal im Abschnitt
 * „WAMOCON Academy is operated alongside WAMOCON GmbH …" und ist beim Umschalten
 * von Hand nachzuziehen.
 */
import type { Lang } from '../i18n/config';

export type PracticeAssessmentMode = 'testLab' | 'noTestLab' | 'off';

/** Die eine Zeile, die den Zustand bestimmt. */
export const practiceAssessmentMode: PracticeAssessmentMode = 'noTestLab';

const SENTENCE: Record<Exclude<PracticeAssessmentMode, 'off'>, Record<Lang, string>> = {
  testLab: {
    de: 'Deine Arbeit im Testlabor wird von praktizierenden Testmanagern bewertet.',
    en: 'Your work in the test lab is assessed by practising test managers.',
    kk: 'Тест зертханасындағы жұмысыңызды тәжірибеде істеп жүрген тестілеу менеджерлері бағалайды.',
  },
  noTestLab: {
    de: 'Deine Arbeit wird von praktizierenden Testmanagern bewertet.',
    en: 'Your work is assessed by practising test managers.',
    kk: 'Жұмысыңызды тәжірибеде істеп жүрген тестілеу менеджерлері бағалайды.',
  },
};

/** Der Satz für sich, oder ein leerer String im Zustand 'off'. */
export function practiceAssessment(lang: Lang): string {
  if (practiceAssessmentMode === 'off') return '';
  return SENTENCE[practiceAssessmentMode][lang];
}

/**
 * Der Satz zum Anhängen an einen Absatz, mit führendem Leerzeichen — oder ein
 * leerer String. So bleibt der vorangehende Text im Zustand 'off' unverändert
 * und ohne doppeltes Leerzeichen.
 */
export function practiceAssessmentSuffix(lang: Lang): string {
  const sentence = practiceAssessment(lang);
  return sentence ? ` ${sentence}` : '';
}
