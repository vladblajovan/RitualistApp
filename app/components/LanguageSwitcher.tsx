'use client';

import { usePathname, useRouter } from 'next/navigation';
import { chosenLocaleKey, localeLabels, localePath, locales, splitPathname, type Locale } from '../i18n/locales';
import { siteCopy } from '../i18n/site';
import { trackEvent } from '../lib/analytics';

/** The language menu: the same page in another language, remembered for the next visit. */
export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const pathname = usePathname() ?? '/';
  const router = useRouter();
  const { locale, path } = splitPathname(pathname);

  function choose(next: Locale) {
    try {
      window.localStorage.setItem(chosenLocaleKey, next);
    } catch {
      // A private window keeps no choice; the menu still works.
    }
    trackEvent({ action: 'language_select', category: 'navigation', label: next });
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    router.push(localePath(next, path) + hash);
  }

  return (
    <label className={`inline-flex items-center ${className}`}>
      <span className="sr-only">{siteCopy[locale].language}</span>
      <select
        value={locale}
        onChange={(event) => choose(event.target.value as Locale)}
        className="cursor-pointer rounded-md border border-zinc-300 bg-transparent px-2 py-1 text-sm text-zinc-700 hover:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600"
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
