'use client';

import type { Service } from '@/types';
import { siteConfig } from '@/data/site';
import { getServiceArBySlug } from '@/data/services.ar';
import { getServiceKuBySlug } from '@/data/services.ku';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureGrid from '@/components/ui/FeatureGrid';
import ProcessSteps from '@/components/services/ProcessSteps';
import FAQAccordion from '@/components/ui/FAQAccordion';
import RelatedServices from '@/components/services/RelatedServices';
import CTASection from '@/components/ui/CTASection';
import JsonLd from '@/components/seo/JsonLd';
import { useT, useLocale } from '@/lib/locale-context';
import { translations } from '@/translations';

export default function ServicePageTemplate({ service }: { service: Service }) {
  const t = useT(translations);
  const { language } = useLocale();
  // Pick the localized record for the active language. English source is the
  // fallback for any field not yet translated.
  const ar = language === 'ar' ? getServiceArBySlug(service.slug)
           : language === 'ku' ? getServiceKuBySlug(service.slug)
           : undefined;

  // Choose localized fields with English fallback for missing translations.
  const title = ar?.title ?? service.title;
  const shortTitle = ar?.shortTitle ?? service.shortTitle;
  const longDescription = ar?.longDescription ?? service.longDescription;
  const features = ar?.features ?? service.features;
  const whoIsItFor = ar?.whoIsItFor ?? service.whoIsItFor;
  const useCases = ar?.useCases ?? service.useCases;
  const benefits = ar?.benefits ?? service.benefits;
  const process = ar?.process ?? service.process;
  const faqs = ar?.faqs ?? service.faqs;

  // JSON-LD always uses English source data — search engines and AI crawlers
  // mostly index English markup; alternate language versions live on the page.
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'ProfessionalService',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: ['United States', 'United Kingdom', 'Egypt', 'Saudi Arabia', 'Jordan', 'Iraq'],
    availableLanguage: ['English', 'Arabic'],
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />

      <Breadcrumbs
        items={[
          { label: t.nav.services, href: '/services' },
          { label: shortTitle, href: `/services/${service.slug}` },
        ]}
      />

      <Hero
        title={title}
        subtitle={longDescription}
        primaryCTA={{ label: t.common.scheduleAMeeting, href: '/book-meeting' }}
        secondaryCTA={{ label: t.common.viewPricing, href: '/pricing' }}
      />

      {/* What's Included */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.services.servicePage.whatsIncluded}
            title={t.services.servicePage.featuresTitle}
          />
          <div className="mt-12">
            <FeatureGrid features={features} />
          </div>
        </div>
      </section>

      {/* Who This Is For + Benefits */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading title={t.services.servicePage.whoForTitle} centered={false} />
              <ul className="mt-6 space-y-3">
                {whoIsItFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading title={t.services.servicePage.benefitsTitle} centered={false} />
              <ul className="mt-6 space-y-3">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.services.servicePage.useCasesEyebrow}
            title={t.services.servicePage.useCasesTitle}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {useCases.map((useCase, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm leading-relaxed text-gray-700">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow={t.services.servicePage.processEyebrow}
            title={t.services.servicePage.processTitle}
          />
          <div className="mt-12">
            <ProcessSteps steps={process} />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title={t.services.servicePage.faqTitle} />
          <div className="mt-12">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <RelatedServices slugs={service.relatedSlugs} />
      <CTASection />
    </>
  );
}
