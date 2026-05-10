'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';
import JsonLd from '@/components/seo/JsonLd';
import { useT } from '@/lib/locale-context';
import { translations } from '@/translations';

export default function AboutPage() {
  const t = useT(translations);

  const aboutPageLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Iris Zimmerfrau Inc.',
    url: `${siteConfig.url}/about`,
    description:
      'About Iris Zimmerfrau Inc. — an AI automation, bookkeeping, and business systems consultancy for small businesses.',
    mainEntity: { '@id': `${siteConfig.url}/#organization` },
  };

  const founderLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Iris Zimmerfrau',
    alternateName: 'Amin Alogaili',
    url: `${siteConfig.url}/personal-page/`,
    jobTitle: 'Founder & Operator',
    worksFor: { '@id': `${siteConfig.url}/#organization` },
    knowsAbout: [
      'AI Automation', 'Custom AI Agents', 'AI Phone Answering', 'Workflow Automation',
      'Bookkeeping', 'QuickBooks', 'Generative Engine Optimization', 'SEO',
      'CRM Setup', 'Marketing Automation', 'Quantum Computing', 'Computational Linguistics',
      'Python', 'Arabic', 'German',
    ],
    sameAs: [
      'https://www.linkedin.com/in/iris-zimmerfrau-92bb02174/',
      'https://github.com/iriszimmerfrau-collab',
      'https://independent.academia.edu/AminAlogaili',
      `${siteConfig.url}/personal-page/`,
    ],
  };

  return (
    <>
      <JsonLd data={aboutPageLd} />
      <JsonLd data={founderLd} />
      <Breadcrumbs items={[{ label: t.nav.about, href: '/about' }]} />

      <Hero title={t.about.heroTitle} subtitle={t.about.heroSubtitle} />

      {/* Mission */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow={t.about.missionEyebrow} title={t.about.missionTitle} />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-700">
            {t.about.missionParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="text-sm text-gray-500">
              <Link href="/personal-page/" className="text-brand-600 hover:underline">
                {t.about.founderLink}
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.about.valuesTitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.values.map((v, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title={t.about.whoTitle} />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.about.whoList.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <svg className="h-4 w-4 shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={t.about.ctaTitle} text={t.about.ctaText} />
    </>
  );
}
