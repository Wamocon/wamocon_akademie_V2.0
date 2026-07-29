import {
  defaultLang,
  langCodes,
  legalNav,
  nav,
  thanksHref,
  ui,
  type Lang,
  type NavLink,
} from './config';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return (langCodes as string[]).includes(first) && first !== defaultLang
    ? (first as Lang)
    : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['de']): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Selects the variant for the active language, falling back to German when a
 * locale is missing an entry. Keeps a half-translated record from rendering
 * `undefined` in the page.
 */
export function pick<T>(lang: Lang, variants: Partial<Record<Lang, T>>): T {
  return (variants[lang] ?? variants[defaultLang]) as T;
}

function normalize(path: string): string {
  return path.endsWith('/') ? path : `${path}/`;
}

type RouteGroup = Record<Lang, string>;

function flattenNav(items: NavLink[]): RouteGroup[] {
  return items.flatMap((item) => [
    { de: item.de.href, en: item.en.href },
    ...(item.children ? flattenNav(item.children) : []),
  ]);
}

/**
 * Every route that exists in all three languages, so the language switcher and
 * the hreflang tags can map the current page onto its siblings.
 */
export const routeGroups: RouteGroup[] = [
  ...flattenNav(nav),
  ...Object.values(legalNav).map((item) => ({
    de: item.de.href,
    en: item.en.href,
  })),
  { de: thanksHref.de, en: thanksHref.en },
];

/** Home page of a locale — the fallback when a route has no translated sibling. */
export function getHomeHref(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

/**
 * Maps the current path onto its equivalent in every language. Unmapped paths
 * fall back to each locale's home page rather than 404-ing the switcher.
 */
export function getAlternateLangUrls(currentPath: string, current: Lang): Record<Lang, string> {
  const path = normalize(currentPath);
  const match = routeGroups.find((group) => normalize(group[current]) === path);

  return Object.fromEntries(
    langCodes.map((code) => [code, match ? match[code] : getHomeHref(code)]),
  ) as Record<Lang, string>;
}

/** Single-language convenience wrapper around {@link getAlternateLangUrls}. */
export function getAlternateLangUrl(currentPath: string, current: Lang, target: Lang): string {
  return getAlternateLangUrls(currentPath, current)[target];
}
