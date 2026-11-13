import { MetadataRoute } from 'next'
import { locales, localePath, siteUrl } from './i18n/locales'

export const dynamic = 'force-static'

type Page = { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number; translated: boolean }

const pages: Page[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1, translated: true },
  // The User Guide picks its language on the page itself.
  { path: '/user-guide/', changeFrequency: 'monthly', priority: 0.8, translated: false },
  { path: '/roadmap/', changeFrequency: 'weekly', priority: 0.6, translated: true },
  { path: '/support/', changeFrequency: 'monthly', priority: 0.6, translated: true },
  { path: '/privacy/', changeFrequency: 'yearly', priority: 0.3, translated: true },
  { path: '/privacy-choices/', changeFrequency: 'yearly', priority: 0.3, translated: true },
  { path: '/terms/', changeFrequency: 'yearly', priority: 0.3, translated: true },
]

const url = (path: string) => `${siteUrl}${path.endsWith('/') ? path : `${path}/`}`

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, changeFrequency, priority, translated }) => {
    if (!translated) return [{ url: url(path), lastModified: new Date(), changeFrequency, priority }]
    const languages = Object.fromEntries(locales.map((locale) => [locale, url(localePath(locale, path))]))
    return locales.map((locale) => ({
      url: url(localePath(locale, path)),
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages },
    }))
  })
}
