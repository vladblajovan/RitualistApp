'use client';

import { usePathname } from 'next/navigation';
import { clearConsent } from '../lib/analytics';
import { splitPathname } from '../i18n/locales';
import { siteCopy } from '../i18n/site';

export default function CookieSettingsButton() {
  const { locale } = splitPathname(usePathname() ?? '/');
  return (
    <button
      onClick={() => { clearConsent(); window.location.reload(); }}
      className="text-xs font-medium text-slate-700 underline underline-offset-2 transition-colors hover:text-[#075cb5] dark:text-slate-300 dark:hover:text-[#7bdcff]"
    >
      {siteCopy[locale].cookieSettings}
    </button>
  );
}
