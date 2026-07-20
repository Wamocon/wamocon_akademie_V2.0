import type { Lang } from '../i18n/config';

export type CoursePopupBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

export const cleanCoursePopupDescription = (description: string, lang: Lang) => {
  if (/Bildungsgutschein gefördert|education voucher funded|supported (?:with|by) (?:a |the )?(?:training|education) voucher/i.test(description)) {
    return lang === 'de'
      ? 'Dieses Kursangebot verbindet Grundlagen des Softwaretestens mit praxisnaher Prüfungsvorbereitung. Aktuelle Termine und Preise: In Planung. Eine Förderung durch Bildungsgutschein kann im Einzelfall möglich sein. Über Voraussetzungen, förderfähige Kosten und Bewilligung entscheiden die zuständige Agentur für Arbeit oder das Jobcenter. Bitte lassen Sie die Förderung vor einer Anmeldung schriftlich bestätigen. Eine Anfrage über diese Website ist unverbindlich und stellt keinen Kauf dar.'
      : 'This course combines software-testing fundamentals with practical examination preparation. Current dates and prices: Planned. Funding through a Bildungsgutschein may be available in individual cases. The responsible employment agency or job centre decides eligibility, covered costs and approval. Please obtain written confirmation before registering. An inquiry through this website is non-binding and does not constitute a purchase.';
  }

  return description
    .replace(/\r\n?/g, '\n')
    .replace(/\s*(Eine Frage stellen|Ask a question)\s*$/, '');
};

export const coursePopupBlocks = (description: string, lang: Lang): CoursePopupBlock[] => {
  const blocks: CoursePopupBlock[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) blocks.push({ type: 'paragraph', text: paragraph.join(' ') });
    paragraph = [];
  };
  const flushList = () => {
    if (list.length) blocks.push({ type: 'list', items: list });
    list = [];
  };

  cleanCoursePopupDescription(description, lang)
    .split('\n')
    .forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line) {
        flushParagraph();
        flushList();
        return;
      }

      const isHeading =
        line.endsWith(':') ||
        /^ISTQB® Certified Tester Foundation Level\b/i.test(line) ||
        /^\d+\.\s*Etappe\b/i.test(line) ||
        /^(?:Stage\s+\d+|\d+(?:st|nd|rd|th)\s+stage)\s*:/i.test(line) ||
        /^(?:Ihre Vorteile auf dem Arbeitsmarkt|Your (?:team’s |team's )?advantages (?:in|on) the job market)$/i.test(line);
      if (isHeading) {
        flushParagraph();
        flushList();
        blocks.push({ type: 'heading', text: line.replace(/:$/, '') });
        return;
      }

      const bullet = line.match(/^(?:[-–—•]|\d+[.)])\s+(.+)$/);
      if (bullet) {
        flushParagraph();
        list.push(bullet[1]);
        return;
      }

      flushList();
      paragraph.push(line);
    });

  flushParagraph();
  flushList();
  return blocks;
};

export const coursePopupCategory = (hook: string, lang: Lang) => {
  const isTeamCourse = /-2-(?:de|en)$/.test(hook);
  if (lang === 'de') return isTeamCourse ? 'Teamkurse' : 'Einzelkurse';
  return isTeamCourse ? 'Team courses' : 'Individual courses';
};
