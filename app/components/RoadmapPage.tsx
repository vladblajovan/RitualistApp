import Link from 'next/link';
import type { Metadata } from 'next';
import SuggestFeatureForm from '../roadmap/SuggestFeatureForm';
import CookieSettingsButton from './CookieSettingsButton';
import LanguageSwitcher from './LanguageSwitcher';
import LocaleSetup from './LocaleSetup';
import RichText from './RichText';
import { localePath, locales, openGraphLocales, siteUrl, type Locale } from '../i18n/locales';
import { roadmapCopy } from '../i18n/roadmap';
import { siteCopy } from '../i18n/site';

export function roadmapMetadata(locale: Locale): Metadata {
  const copy = roadmapCopy[locale];
  const languages = Object.fromEntries(locales.map((code) => [code, `${siteUrl}${localePath(code, '/roadmap')}/`]));
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: { canonical: `${siteUrl}${localePath(locale, '/roadmap')}/`, languages: { ...languages, 'x-default': `${siteUrl}/roadmap/` } },
    openGraph: { locale: openGraphLocales[locale] },
  };
}

const SIDETRACK_ROADMAP_ID = '69cb83adb83f336a76b2771a';
const ROADMAP_URL = `https://roadmap.sidetrack.app/roadmap/${SIDETRACK_ROADMAP_ID}`;

interface RoadmapFeature {
  id: string;
  title: string;
  status?: string;
  description?: string;
  isFinished?: boolean;
  votes?: number;
}

function statusColor(status?: string): string {
  switch (status?.toLowerCase()) {
    case 'planned':
      return 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400';
    case 'in progress':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
    case 'in review':
      return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
    case 'finished':
      return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
    default:
      return 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400';
  }
}

async function getFeatures(): Promise<RoadmapFeature[]> {
  try {
    const res = await fetch(ROADMAP_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function RoadmapPage({ locale }: { locale: Locale }) {
  const copy = roadmapCopy[locale];
  const site = siteCopy[locale];
  const statusLabel = (status: string) => copy.statuses[status.toLowerCase() as keyof typeof copy.statuses] ?? status;
  const features = await getFeatures();
  const activeFeatures = features.filter((f) => !f.isFinished);
  const finishedFeatures = features.filter((f) => f.isFinished);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <LocaleSetup locale={locale} path="/roadmap" />
      {/* Nav */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href={localePath(locale, '/')}
            className="text-sm font-semibold text-zinc-900 dark:text-white hover:opacity-70 transition-opacity"
          >
            {site.backHome}
          </Link>
          <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <Link href={localePath(locale, '/support')} className="hidden sm:inline hover:text-zinc-900 dark:hover:text-white transition-colors">
              {site.support}
            </Link>
            <Link href={localePath(locale, '/privacy')} className="hidden sm:inline hover:text-zinc-900 dark:hover:text-white transition-colors">
              {site.privacy}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">{copy.title}</h1>

        {/* Vote CTA */}
        <div className="mb-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-4 py-3 flex items-center gap-3">
          <span className="text-2xl">🗳️</span>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            <RichText text={copy.vote} locale={locale} />
          </p>
        </div>

        {/* Suggest a feature form */}
        <SuggestFeatureForm copy={copy} />

        <p className="text-zinc-500 dark:text-zinc-400 mb-4 mt-8">
          {copy.intro}
        </p>

        {features.length === 0 && (
          <p className="text-center text-zinc-400 dark:text-zinc-500 py-20">
            {copy.empty}
          </p>
        )}

        {/* Active features */}
        {activeFeatures.length > 0 && (
          <section className="mb-12">
            <div className="space-y-3">
              {activeFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{feature.title}</h3>
                    {feature.status && (
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusColor(
                          feature.status
                        )}`}
                      >
                        {statusLabel(feature.status)}
                      </span>
                    )}
                  </div>
                  {feature.description && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Finished features */}
        {finishedFeatures.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">{copy.completed}</h2>
            <div className="space-y-3">
              {finishedFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 opacity-70"
                >
                  <svg
                    className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{feature.title}</h3>
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusColor('finished')}`}>
                        {copy.statuses.finished}
                      </span>
                    </div>
                    {feature.description && (
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <Link href={localePath(locale, '/support')} className="hover:text-zinc-900 dark:hover:text-white transition-colors">{site.support}</Link>
            <Link href={localePath(locale, '/privacy')} className="hover:text-zinc-900 dark:hover:text-white transition-colors">{site.privacy}</Link>
            <Link href={localePath(locale, '/terms')} className="hover:text-zinc-900 dark:hover:text-white transition-colors">{site.terms}</Link>
          </div>
          <span>
            &copy; 2025&ndash;{new Date().getFullYear()} Ritualist. {site.builtBy}{' '}
            <a
              href="https://vladblajovan.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-400 underline-offset-2 transition-colors hover:text-black dark:decoration-zinc-600 dark:hover:text-white"
            >
              Vlad Blajovan
            </a>
          </span>
          <CookieSettingsButton />
        </div>
      </footer>
    </div>
  );
}
