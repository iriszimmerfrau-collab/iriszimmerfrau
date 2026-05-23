'use client';

import { globalFaqs, globalFaqsAr, globalFaqsKu } from '@/data/faq';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Hero from '@/components/ui/Hero';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTASection from '@/components/ui/CTASection';
import JsonLd from '@/components/seo/JsonLd';
import { useT, useLocale } from '@/lib/locale-context';
import { translations } from '@/translations';

export default function FAQPage() {
  const t = useT(translations);
  const { language } = useLocale();
  const isAr = language === 'ar';
  const isKu = language === 'ku';

  // Always emit English FAQ schema for crawlers (most engines prefer English).
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: globalFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const faqs = isAr ? globalFaqsAr : isKu ? globalFaqsKu : globalFaqs;

  return (
    <>
      <JsonLd data={faqLd} />
      <Breadcrumbs items={[{ label: t.nav.faq, href: '/faq' }]} />

      <Hero title={t.faq.heroTitle} subtitle={t.faq.heroSubtitle} />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection heading={t.faq.ctaTitle} text={t.faq.ctaText} />
    </>
  );
}
