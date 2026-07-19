import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { careers } from '@/data/careers';
import { blogPosts } from '@/data/blog';

const BASE_URL = 'https://iriszf.com';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const servicePages = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Career role pages — picked up automatically from src/data/careers.ts.
  const careerPages = careers.map((r) => ({
    url: `${BASE_URL}/careers/${r.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Blog posts — sitemap auto-updates as src/data/blog.ts grows.
  const blogPages = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(p.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // /personal-page/ sub-site — a static hand-authored HTML mini-site under public/.
  // Now indexable, so its URLs are listed here for search-engine discovery.
  const personalPagePaths = [
    '/personal-page/',
    '/personal-page/research.html',
    '/personal-page/publications.html',
    '/personal-page/software.html',
    '/personal-page/background.html',
    '/personal-page/contact.html',
  ];
  const personalPages = personalPagePaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...servicePages,
    { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/book-meeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    ...careerPages,
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...blogPages,
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    ...personalPages,
  ];
}
