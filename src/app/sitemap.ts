import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { careers } from '@/data/careers';

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

  // Personal page sub-site (raw HTML, served at /personal-page/*)
  const personalPages = [
    { url: `${BASE_URL}/personal-page/`, priority: 0.7 },
    { url: `${BASE_URL}/personal-page/research.html`, priority: 0.7 },
    { url: `${BASE_URL}/personal-page/publications.html`, priority: 0.7 },
    { url: `${BASE_URL}/personal-page/software.html`, priority: 0.7 },
    { url: `${BASE_URL}/personal-page/background.html`, priority: 0.6 },
    { url: `${BASE_URL}/personal-page/contact.html`, priority: 0.6 },
  ].map((p) => ({
    url: p.url,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: p.priority,
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
    ...personalPages,
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
