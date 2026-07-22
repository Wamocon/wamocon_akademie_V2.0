import type { Lang } from '../i18n/config';

export type CoursePopupLink = { text: string; href: string };

export type CoursePopupInline = { text: string; href?: string; strong?: boolean };

export type CoursePopupBlock =
  | { type: 'heading'; parts: CoursePopupInline[] }
  | { type: 'paragraph'; parts: CoursePopupInline[] }
  | { type: 'list'; items: CoursePopupInline[][] };

/** Links rendered as buttons under the popup body — the real CTAs, not the inline source links. */
export const coursePopupActions = (links: CoursePopupLink[]) =>
  links.filter((link) => link.href.startsWith('#'));

/** Links that appear inside the description text and stay inline where they were written. */
const inlineLinks = (links: CoursePopupLink[]) => links.filter((link) => !link.href.startsWith('#'));

export const cleanCoursePopupDescription = (description: string) =>
  description
    .replace(/\r\n?/g, '\n')
    .replace(/[​‌‍﻿]/g, '')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/\s*(Eine Frage stellen|Ask a question)\s*$/, '');

const linkify = (text: string, links: CoursePopupLink[]): CoursePopupInline[] => {
  const parts: CoursePopupInline[] = [];
  let rest = text;

  links.forEach((link) => {
    const index = rest.indexOf(link.text);
    if (index === -1) return;
    if (index > 0) parts.push({ text: rest.slice(0, index) });
    parts.push({ text: link.text, href: link.href });
    rest = rest.slice(index + link.text.length);
  });

  if (rest) parts.push({ text: rest });
  return parts.length ? parts : [{ text }];
};

/** Bullets like "Theorie: …" lead with a bold label, as on the live site. */
const withLabel = (parts: CoursePopupInline[]): CoursePopupInline[] => {
  const [first, ...tail] = parts;
  if (!first || first.href) return parts;
  const label = first.text.match(/^([^:]{1,30}:)(\s+)(.*)$/s);
  if (!label) return parts;
  return [{ text: label[1], strong: true }, { text: label[2] + label[3] }, ...tail];
};

export const coursePopupBlocks = (
  description: string,
  _lang: Lang,
  links: CoursePopupLink[] = [],
): CoursePopupBlock[] => {
  const blocks: CoursePopupBlock[] = [];
  const sourceLinks = inlineLinks(links);
  let paragraph: string[] = [];
  let list: CoursePopupInline[][] = [];

  const flushParagraph = () => {
    if (paragraph.length) blocks.push({ type: 'paragraph', parts: linkify(paragraph.join(' '), sourceLinks) });
    paragraph = [];
  };
  const flushList = () => {
    if (list.length) blocks.push({ type: 'list', items: list });
    list = [];
  };

  cleanCoursePopupDescription(description)
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
        (line.endsWith('!') && line.length <= 60) ||
        /^ISTQB® Certified Tester Foundation Level\b/i.test(line) ||
        /^\d+\.\s*Etappe\b/i.test(line) ||
        /^(?:Stage\s+\d+|\d+(?:st|nd|rd|th)\s+stage)\s*:/i.test(line) ||
        /^(?:Ihre Vorteile auf dem Arbeitsmarkt|Your (?:team’s |team's )?advantages (?:in|on) the job market)$/i.test(line);
      if (isHeading) {
        flushParagraph();
        flushList();
        blocks.push({ type: 'heading', parts: linkify(line.replace(/:$/, ''), sourceLinks) });
        return;
      }

      const bullet = line.match(/^(?:[-–—•]|\d+[.)])\s+(.+)$/);
      if (bullet) {
        flushParagraph();
        list.push(withLabel(linkify(bullet[1], sourceLinks)));
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
