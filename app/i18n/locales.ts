// The site's languages: the app's own six. English lives at the site's root
// (the app links there), every other language under its code: /it/, /de/support/.

export const locales = ['en', 'de', 'es', 'fr', 'it', 'ro'] as const;
export type Locale = (typeof locales)[number];
export type TranslatedLocale = Exclude<Locale, 'en'>;
export const translatedLocales = locales.filter((locale) => locale !== 'en') as TranslatedLocale[];

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  ro: 'Română',
};

export const openGraphLocales: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  es: 'es_ES',
  fr: 'fr_FR',
  it: 'it_IT',
  ro: 'ro_RO',
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const siteUrl = 'https://vladblajovan.github.io/RitualistApp';

/** The key the visitor's chosen language is kept under, in this browser only. */
export const chosenLocaleKey = 'ritualist-locale';

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** A page's path in a language: `localePath('it', '/support')` is `/it/support`. */
export function localePath(locale: Locale, path: string): string {
  const clean = path === '' ? '/' : path;
  if (locale === 'en') return clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

/** The language and the page a pathname (without the base path) points to. */
export function splitPathname(pathname: string): { locale: Locale; path: string } {
  const segments = pathname.split('/');
  const first = segments[1];
  if (isLocale(first) && first !== 'en') {
    const rest = '/' + segments.slice(2).join('/');
    return { locale: first, path: rest === '/' ? '/' : rest.replace(/\/$/, '') };
  }
  return { locale: 'en', path: pathname === '' ? '/' : pathname.replace(/\/$/, '') || '/' };
}

/** The User Guide reads its language from `?lang=`; English needs none. */
export function userGuidePath(locale: Locale): string {
  return locale === 'en' ? '/user-guide' : `/user-guide?lang=${locale}`;
}

/** The first of the browser's languages the site has, if any. */
export function preferredLocale(languages: readonly string[]): Locale | null {
  for (const language of languages) {
    const code = language.toLowerCase().split(/[-_]/)[0];
    if (isLocale(code)) return code;
  }
  return null;
}
