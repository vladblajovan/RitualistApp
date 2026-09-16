import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://vladblajovan.github.io/RitualistApp'

const pages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/user-guide/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/roadmap/', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/support/', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/privacy/', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms/', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
