import type { Service } from '@/types';
import { siteConfig } from '@/data/site';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureGrid from '@/components/ui/FeatureGrid';
import ProcessSteps from '@/components/services/ProcessSteps';
import FAQAccordion from '@/components/ui/FAQAccordion';
import RelatedServices from '@/components/services/RelatedServices';
import CTASection from '@/components/ui/CTASection';
import JsonLd from '@/components/seo/JsonLd';

export default function ServicePageTemplate({ service }: { service: Service }) {
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
          { label: 'Services', href: '/services' },
          { label: service.shortTitle, href: `/services/${service.slug}` },
        ]}
      />

      <Hero
        title={service.title}
        subtitle={service.longDescription}
        primaryCTA={{ label: 'Schedule a Meeting', href: '/book-meeting' }}
        secondaryCTA={{ label: 'View Pricing', href: '/pricing' }}
      />

      {/* What's Included */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What&rsquo;s Included" title="Features & Capabilities" />
          <div className="mt-12">
            <FeatureGrid features={service.features} />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading title="Who This Is For" centered={false} />
              <ul className="mt-6 space-y-3">
                {service.whoIsItFor.map((item, i) => (
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
              <SectionHeading title="Key Benefits" centered={false} />
              <ul className="mt-6 space-y-3">
                {service.benefits.map((item, i) => (
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

      {/* Example Use Cases */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Example Workflows" title="How Businesses Use This" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.useCases.map((useCase, i) => (
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
          <SectionHeading eyebrow="Our Process" title="How It Works" />
          <div className="mt-12">
            <ProcessSteps steps={service.process} />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-12">
            <FAQAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      <RelatedServices slugs={service.relatedSlugs} />
      <CTASection />
    </>
  );
}
