'use client';

import { useEffect } from 'react';
import { basePath, chosenLocaleKey, isLocale, localePath, preferredLocale, type Locale } from '../i18n/locales';

/**
 * Sets the page's language for assistive tech and, on a first visit to an English page,
 * takes a visitor whose phone speaks one of the site's languages to that page in it.
 * A language picked from the menu is remembered and wins from then on.
 */
export default function LocaleSetup({ locale, path }: { locale: Locale; path: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    if (locale !== 'en') return;
    let chosen: string | null = null;
    try {
      chosen = window.localStorage.getItem(chosenLocaleKey);
    } catch {
      return;
    }
    if (isLocale(chosen)) {
      if (chosen !== 'en') window.location.replace(basePath + localePath(chosen, path) + '/' + window.location.hash);
      return;
    }
    const preferred = preferredLocale(navigator.languages ?? [navigator.language]);
    if (preferred && preferred !== 'en') {
      window.location.replace(basePath + localePath(preferred, path) + '/' + window.location.hash);
    }
  }, [locale, path]);
  return null;
}
