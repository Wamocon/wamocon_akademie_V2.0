import { defaultLang, legalNav, nav, ui, type Lang, type NavLink } from './config';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['de']): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

function normalize(path: string): string {
  return path.endsWith('/') ? path : `${path}/`;
}

function flattenNav(items: NavLink[]): Array<{ de: string; en: string }> {
  return items.flatMap((item) => [
    { de: item.de.href, en: item.en.href },
    ...(item.children ? flattenNav(item.children) : []),
  ]);
}

export function getAlternateLangUrl(currentPath: string, current: Lang): string {
  const other: Lang = current === 'de' ? 'en' : 'de';
  const path = normalize(currentPath);

  const entries = [
    ...flattenNav(nav),
    ...Object.values(legalNav).map((item) => ({ de: item.de.href, en: item.en.href })),
    { de: '/danke/', en: '/thanks/' },
    { de: '/fehler/', en: '/en/error/' },
  ];

  const match = entries.find((entry) => normalize(entry[current]) === path);
  return match ? match[other] : other === 'en' ? '/en/' : '/';
}
