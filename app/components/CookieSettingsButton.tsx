'use client';

import { clearConsent } from '../lib/analytics';

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => { clearConsent(); window.location.reload(); }}
      className="text-xs font-medium text-slate-700 underline underline-offset-2 transition-colors hover:text-[#075cb5] dark:text-slate-300 dark:hover:text-[#7bdcff]"
    >
      Cookie Settings
    </button>
  );
}
