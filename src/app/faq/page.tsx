import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { globalFaqs } from '@/data/faq';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Hero from '@/components/ui/Hero';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTASection from '@/components/ui/CTASection';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = createMetadata({
  title: 'FAQ — Frequently Asked Questions',
  description:
    'Answers to common questions about AI automation, AI phone agents, bookkeeping, workflow automation, GEO, SEO, CRM setup, and marketing systems for small businesses.',
  path: '/faq',
});

export default function FAQPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: globalFaqs.map((faq) => ({
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
      <JsonLd data={faqLd} />
      <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />

      <Hero
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our AI automation, bookkeeping, workflow, GEO, SEO, CRM, and marketing services."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={globalFaqs} />
        </div>
      </section>

      <CTASection heading="Have more questions?" text="Schedule a meeting or email us directly and we will be happy to help." />
    </>
  );
}
