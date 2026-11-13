import type { Metadata } from 'next';
import { localePath, locales, openGraphLocales, siteUrl, type Locale } from '../locales';
import { homeCopy } from '.';

/** The home page's title, description and social card in a language, with its other languages linked. */
export function homeMetadata(locale: Locale): Metadata {
  const meta = homeCopy[locale].meta;
  const image = `${siteUrl}/og-image-20261109.png`;
  const languages = Object.fromEntries(locales.map((code) => [code, `${siteUrl}${localePath(code, '/')}${code === 'en' ? '' : '/'}`]));
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${siteUrl}${localePath(locale, '/')}${locale === 'en' ? '' : '/'}`, languages: { ...languages, 'x-default': siteUrl } },
    openGraph: {
      type: 'website',
      locale: openGraphLocales[locale],
      url: `${siteUrl}${localePath(locale, '/')}`,
      title: meta.ogTitle,
      description: meta.ogDescription,
      siteName: 'Ritualist',
      images: [{ url: image, width: 1200, height: 630, alt: meta.ogAlt }],
    },
    twitter: { card: 'summary_large_image', title: meta.ogTitle, description: meta.ogDescription, images: [image] },
  };
}
