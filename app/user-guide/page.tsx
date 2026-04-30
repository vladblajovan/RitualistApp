'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import content from './content.json';

type Lang = 'en' | 'de' | 'es' | 'fr' | 'ro';
const SUPPORTED_LANGS: Lang[] = ['en', 'de', 'es', 'fr', 'ro'];
const LANG_LABELS: Record<Lang, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  ro: 'Română',
};

interface GuideItem {
  emoji: string;
  title: string;
  subtitle: string;
  content: string;
}

interface GuideSection {
  key: string;
  color: string;
  title: string;
  items: GuideItem[];
}

interface LangBundle {
  sections: GuideSection[];
  ui: {
    pageTitle: string;
    subtitle: string;
    searchPlaceholder: string;
    noResults: string;
    home: string;
    privacy: string;
    terms: string;
    language: string;
    jumpToTop: string;
  };
}

// Tailwind class lookups for each section's accent color. Keep this static
// so Tailwind's JIT can statically extract every class it needs.
const ACCENT_CLASSES: Record<string, { dot: string; border: string; title: string }> = {
  yellow: {
    dot: 'bg-yellow-500',
    border: 'border-yellow-500',
    title: 'text-yellow-600 dark:text-yellow-400',
  },
  green: {
    dot: 'bg-green-500',
    border: 'border-green-500',
    title: 'text-green-600 dark:text-green-400',
  },
  cyan: {
    dot: 'bg-cyan-500',
    border: 'border-cyan-500',
    title: 'text-cyan-600 dark:text-cyan-400',
  },
  orange: {
    dot: 'bg-orange-500',
    border: 'border-orange-500',
    title: 'text-orange-600 dark:text-orange-400',
  },
  blue: {
    dot: 'bg-blue-500',
    border: 'border-blue-500',
    title: 'text-blue-600 dark:text-blue-400',
  },
  pink: {
    dot: 'bg-pink-500',
    border: 'border-pink-500',
    title: 'text-pink-600 dark:text-pink-400',
  },
  purple: {
    dot: 'bg-purple-500',
    border: 'border-purple-500',
    title: 'text-purple-600 dark:text-purple-400',
  },
};

function pickInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('lang');
  if (requested) {
    const normalized = requested.toLowerCase().split(/[-_]/)[0];
    if (SUPPORTED_LANGS.includes(normalized as Lang)) return normalized as Lang;
  }
  const browser = (navigator.language || 'en').toLowerCase().split(/[-_]/)[0];
  if (SUPPORTED_LANGS.includes(browser as Lang)) return browser as Lang;
  return 'en';
}

export default function UserGuidePage() {
  const [lang, setLang] = useState<Lang>('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setLang(pickInitialLang());
    setHasMounted(true);
  }, []);

  const bundle = (content as Record<Lang, LangBundle>)[lang];
  const ui = bundle.ui;

  const filteredSections = useMemo<GuideSection[]>(() => {
    if (!searchTerm.trim()) return bundle.sections;
    const needle = searchTerm.trim().toLowerCase();
    return bundle.sections
      .map((section) => {
        const matchedItems = section.items.filter((item) => {
          return (
            item.title.toLowerCase().includes(needle) ||
            item.subtitle.toLowerCase().includes(needle) ||
            item.content.toLowerCase().includes(needle)
          );
        });
        const sectionMatches = section.title.toLowerCase().includes(needle);
        if (sectionMatches) return section;
        if (matchedItems.length > 0) {
          return { ...section, items: matchedItems };
        }
        return null;
      })
      .filter((s): s is GuideSection => s !== null);
  }, [bundle.sections, searchTerm]);

  const totalMatches = filteredSections.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Nav */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 sticky top-0 z-10 bg-white/85 dark:bg-zinc-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-zinc-900 dark:text-white hover:opacity-70 transition-opacity"
          >
            ← Ritualist
          </Link>
          <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <label htmlFor="lang-select" className="sr-only">
              {ui.language}
            </label>
            <select
              id="lang-select"
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-2 py-1 text-sm text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {SUPPORTED_LANGS.map((code) => (
                <option key={code} value={code}>
                  {LANG_LABELS[code]}
                </option>
              ))}
            </select>
            <Link
              href="/privacy"
              className="hidden sm:inline hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {ui.privacy}
            </Link>
            <Link
              href="/terms"
              className="hidden sm:inline hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {ui.terms}
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">{ui.pageTitle}</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8">{ui.subtitle}</p>

        {/* Search */}
        <div className="mb-10">
          <div className="relative">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={ui.searchPlaceholder}
              aria-label={ui.searchPlaceholder}
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-10 pr-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 dark:text-zinc-500 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
        </div>

        {/* Sections */}
        {hasMounted && totalMatches === 0 ? (
          <p className="text-center text-zinc-500 dark:text-zinc-400 py-16">{ui.noResults}</p>
        ) : (
          <div className="space-y-10">
            {filteredSections.map((section) => {
              const accent = ACCENT_CLASSES[section.color] ?? ACCENT_CLASSES.blue;
              return (
                <section key={section.key} className="pb-8 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 last:pb-0">
                  <h2 className={`text-lg font-semibold ${accent.title} mb-4 flex items-center gap-2`}>
                    <span className={`inline-block w-2 h-2 rounded-full ${accent.dot}`} aria-hidden="true" />
                    {section.title}
                  </h2>

                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <details
                        key={`${section.key}-${idx}`}
                        className={`group bg-zinc-50 dark:bg-zinc-900 border-l-4 ${accent.border} rounded-r-lg`}
                        open={searchTerm.trim().length > 0}
                      >
                        <summary className="cursor-pointer list-none px-4 py-3 flex items-start gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 rounded-r-lg transition-colors">
                          <span className="text-xl leading-none pt-0.5" aria-hidden="true">
                            {item.emoji}
                          </span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                            {item.subtitle ? (
                              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{item.subtitle}</p>
                            ) : null}
                          </div>
                          <svg
                            className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-1 transition-transform group-open:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-4 pb-4 pt-0 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                          {item.content}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className="text-center pt-12 mt-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              {ui.home}
            </Link>
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              {ui.privacy}
            </Link>
            <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              {ui.terms}
            </Link>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            © 2025–{new Date().getFullYear()} Ritualist
          </p>
        </div>
      </main>
    </div>
  );
}
