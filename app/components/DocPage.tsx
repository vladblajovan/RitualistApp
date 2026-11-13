import Link from 'next/link';
import type { Metadata } from 'next';
import CookieSettingsButton from './CookieSettingsButton';
import LanguageSwitcher from './LanguageSwitcher';
import LocaleSetup from './LocaleSetup';
import RichText from './RichText';
import { localePath, locales, openGraphLocales, siteUrl, type Locale } from '../i18n/locales';
import { siteCopy } from '../i18n/site';

// The site's text pages (support, privacy, terms, your privacy choices) are data:
// one renderer draws them in every language, so a translation is only words.

export type DocBlock =
  | { p: string }
  | { h3: string }
  | { ul: string[] }
  | { note: string }
  | { warn: string }
  | { contact: { label: string; value: string }[] }
  | { choice: { title: string; body: string; where: string } }
  | { faq: { q: string; a: string }[] }
  | { button: { text: string; href: string } };

export type DocSection = { title?: string; blocks: DocBlock[] };

export type Doc = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  /** The page's own date, already in the language's words. */
  updated?: string;
  lead?: string;
  sections: DocSection[];
  /** A legal text: its translations say the English one applies. */
  legal?: boolean;
};

export type DocPageName = 'support' | 'privacy' | 'privacy-choices' | 'terms';

const navLinks: Record<DocPageName, ('support' | 'privacy' | 'terms')[]> = {
  support: ['privacy', 'terms'],
  privacy: ['support', 'terms'],
  'privacy-choices': ['privacy', 'support'],
  terms: ['support', 'privacy'],
};

const text = 'text-zinc-700 dark:text-zinc-300';

export function docMetadata(doc: Doc, locale: Locale, page: string): Metadata {
  const languages = Object.fromEntries(locales.map((code) => [code, `${siteUrl}${localePath(code, page)}/`]));
  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternates: { canonical: `${siteUrl}${localePath(locale, page)}/`, languages: { ...languages, 'x-default': `${siteUrl}${page}/` } },
    openGraph: { locale: openGraphLocales[locale] },
  };
}

function Block({ block, locale }: { block: DocBlock; locale: Locale }) {
  const copy = siteCopy[locale];
  if ('p' in block) return <p className={`mb-3 ${text}`}><RichText text={block.p} locale={locale} /></p>;
  if ('h3' in block) return <h3 className="font-semibold mb-2 mt-4 first:mt-0">{block.h3}</h3>;
  if ('ul' in block)
    return (
      <ul className={`list-disc pl-5 mb-4 space-y-1 ${text}`}>
        {block.ul.map((item) => (
          <li key={item}><RichText text={item} locale={locale} /></li>
        ))}
      </ul>
    );
  if ('note' in block)
    return (
      <div className={`mb-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-3 text-sm ${text}`}>
        <RichText text={block.note} locale={locale} />
      </div>
    );
  if ('warn' in block)
    return (
      <div className="bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-400 px-4 py-3 mb-4 rounded-r-lg">
        <p className="font-semibold text-zinc-800 dark:text-zinc-200"><RichText text={block.warn} locale={locale} /></p>
      </div>
    );
  if ('contact' in block)
    return (
      <div className={`bg-zinc-100 dark:bg-zinc-800 rounded-lg px-4 py-3 text-sm ${text}`}>
        {block.contact.map((row, index) => (
          <p key={row.label} className={index > 0 ? 'mt-1' : undefined}>
            <strong>{row.label}:</strong> <RichText text={row.value} locale={locale} />
          </p>
        ))}
      </div>
    );
  if ('choice' in block)
    return (
      <div className="mb-6">
        <h3 className="font-semibold mb-1">{block.choice.title}</h3>
        <p className={`mb-2 ${text}`}><RichText text={block.choice.body} locale={locale} /></p>
        <p className={`text-sm bg-zinc-100 dark:bg-zinc-800 rounded-lg px-3 py-2 ${text}`}>
          <strong>{copy.whereLabel}:</strong> <RichText text={block.choice.where} locale={locale} />
        </p>
      </div>
    );
  if ('faq' in block)
    return (
      <div className="space-y-3">
        {block.faq.map((item) => (
          <div key={item.q} className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">{item.q}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400"><RichText text={item.a} locale={locale} /></p>
          </div>
        ))}
      </div>
    );
  return (
    <a
      href={block.button.href}
      className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
    >
      {block.button.text}
    </a>
  );
}

export function SiteNav({ locale, links }: { locale: Locale; links: ('support' | 'privacy' | 'terms')[] }) {
  const copy = siteCopy[locale];
  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
        <Link href={localePath(locale, '/')} className="text-sm font-semibold text-zinc-900 dark:text-white hover:opacity-70 transition-opacity">
          {copy.backHome}
        </Link>
        <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          {links.map((link) => (
            <Link key={link} href={localePath(locale, `/${link}`)} className="hidden sm:inline hover:text-zinc-900 dark:hover:text-white transition-colors">
              {copy[link]}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default function DocPage({ doc, locale, page }: { doc: Doc; locale: Locale; page: DocPageName }) {
  const copy = siteCopy[locale];
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <LocaleSetup locale={locale} path={`/${page}`} />
      <SiteNav locale={locale} links={navLinks[page]} />

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className={`text-3xl font-bold ${doc.updated ? 'mb-1' : 'mb-2'}`}>{doc.title}</h1>
        {doc.updated && <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10">{copy.lastUpdated}: {doc.updated}</p>}
        {doc.lead && <p className="text-zinc-500 dark:text-zinc-400 mb-10">{doc.lead}</p>}
        {doc.legal && locale !== 'en' && (
          <p className="-mt-6 mb-10 text-sm text-zinc-500 dark:text-zinc-400">
            {copy.translationNote}{' '}
            <Link href={`/${page}`} className="text-blue-600 dark:text-blue-400 hover:underline">{copy.englishVersion}</Link>
          </p>
        )}

        {doc.sections.map((section, index) => {
          const isLast = index === doc.sections.length - 1;
          return (
            <section key={section.title ?? index} className={isLast ? 'mb-12' : 'mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800'}>
              {section.title && <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">{section.title}</h2>}
              {section.blocks.map((block, blockIndex) => (
                <Block key={blockIndex} block={block} locale={locale} />
              ))}
            </section>
          );
        })}

        <div className="flex flex-col items-center gap-2 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
            <Link href={localePath(locale, '/support')} className="hover:text-zinc-900 dark:hover:text-white transition-colors">{copy.support}</Link>
            <Link href={localePath(locale, '/privacy')} className="hover:text-zinc-900 dark:hover:text-white transition-colors">{copy.privacyPolicy}</Link>
            <Link href={localePath(locale, '/terms')} className="hover:text-zinc-900 dark:hover:text-white transition-colors">{copy.termsOfService}</Link>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">© 2025–{new Date().getFullYear()} Ritualist. {copy.rights}</p>
          <CookieSettingsButton />
        </div>
      </main>
    </div>
  );
}
