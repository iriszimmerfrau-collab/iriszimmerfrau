'use client';

import Link from 'next/link';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { monthlyPackages, monthlyPackagesAr } from '@/data/pricing';
import { globalFaqs, globalFaqsAr } from '@/data/faq';
import ServiceCard from '@/components/services/ServiceCard';
import PricingCard from '@/components/pricing/PricingCard';
import FAQAccordion from '@/components/ui/FAQAccordion';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';
import JsonLd from '@/components/seo/JsonLd';
import { useT, useLocale } from '@/lib/locale-context';
import { translations } from '@/translations';

export default function HomePage() {
  const t = useT(translations);
  const { language } = useLocale();
  const isAr = language === 'ar';

  const professionalServiceLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#service`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    image: `${siteConfig.url}/og-default.svg`,
    logo: `${siteConfig.url}/logo.svg`,
    description:
      'AI automation, bookkeeping, workflow automation, AI phone answering, GEO, SEO, CRM, and marketing systems for small businesses.',
    slogan: siteConfig.tagline,
    serviceType: [
      'AI Automation',
      'Custom AI Agents',
      'AI Phone Answering',
      'Workflow Automation',
      'Bookkeeping',
      'QuickBooks Setup',
      'Generative Engine Optimization',
      'SEO',
      'Marketing Automation',
      'CRM Setup',
      'Business Operations Consulting',
    ],
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Egypt' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Jordan' },
      { '@type': 'Country', name: 'Iraq' },
    ],
    availableLanguage: ['English', 'Arabic'],
  };

  const previewFaqs = (isAr ? globalFaqsAr : globalFaqs).slice(0, 5);

  const homeFaqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: globalFaqs.slice(0, 5).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={professionalServiceLd} />
      <JsonLd data={homeFaqLd} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {t.hero.home.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-200 sm:text-xl">
            {t.hero.home.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/book-meeting"
              className="rounded-lg bg-white px-8 py-3.5 text-center text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
            >
              {t.common.scheduleAMeeting}
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-brand-400 px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              {t.common.explorerServices}
            </Link>
          </div>

          {/* Trust bullets */}
          <ul className={`mt-12 grid gap-3 sm:grid-cols-2 lg:mx-auto lg:max-w-2xl ${isAr ? 'text-right' : 'text-left'}`}>
            {t.home.trustBullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-brand-200">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Business Operating System Stack */}
      <section className="border-b border-gray-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {t.home.systemTitle}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {t.home.systemStack.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="rounded-lg bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">{item}</span>
                {i < t.home.systemStack.length - 1 && (
                  <svg className={`h-4 w-4 text-brand-400 ${isAr ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.home.problemEyebrow}
            title={t.home.problemTitle}
            description={t.home.problemDescription}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.home.problems.map((p, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-base font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={t.home.solutionEyebrow}
            title={t.home.solutionTitle}
            description={t.home.solutionDescription}
          />
          <p className="mt-6 text-base text-gray-600">{t.home.solutionParagraph}</p>
          <p className="mt-4 text-sm font-medium text-gray-500">{t.home.solutionTrust}</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={t.home.servicesEyebrow} title={t.home.servicesTitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow={t.home.whyEyebrow} title={t.home.whyTitle} />
          <ul className="mt-10 space-y-4">
            {t.home.whyPoints.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <svg className="mt-1 h-5 w-5 shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Packages preview */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.home.pricingEyebrow}
            title={t.home.pricingTitle}
            description={t.home.pricingDescription}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {monthlyPackages.map((pkg, i) => {
              const ar = monthlyPackagesAr[i];
              return (
                <PricingCard
                  key={pkg.name}
                  pkg={pkg}
                  localizedName={isAr ? ar?.name : undefined}
                  localizedTagline={isAr ? ar?.tagline : undefined}
                  localizedFeatures={isAr ? ar?.features : undefined}
                  localizedCta={isAr ? ar?.cta : undefined}
                />
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link href="/pricing" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              {t.common.viewFullPricing} {isAr ? '←' : '→'}
            </Link>
          </div>
        </div>
      </section>

      {/* GEO/SEO section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={t.home.discoveryEyebrow}
            title={t.home.discoveryTitle}
            description={t.home.discoveryDescription}
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Google', 'Google Maps', 'ChatGPT', 'Perplexity', 'Claude', 'Gemini', 'AI Overviews', 'Bing Copilot'].map((platform) => (
              <span key={platform} className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
                {platform}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/services/generative-engine-optimization" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              {t.home.learnGeo} {isAr ? '←' : '→'}
            </Link>
            <Link href="/services/seo-local-search" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              {t.home.learnSeo} {isAr ? '←' : '→'}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title={t.home.faqTitle} />
          <div className="mt-12">
            <FAQAccordion items={previewFaqs} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              {t.common.viewAllFaqs} {isAr ? '←' : '→'}
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
