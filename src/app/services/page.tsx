import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/services/ServiceCard';
import CTASection from '@/components/ui/CTASection';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = createMetadata({
  title: 'Services — AI Automation, Bookkeeping & Business Systems',
  description:
    'Explore our full range of services: custom AI agents, AI phone answering, workflow automation, bookkeeping, GEO, SEO, marketing automation, CRM setup, and website buildout for small businesses.',
  path: '/services',
});

const categories = [
  { key: 'ai', label: 'AI Automation', description: 'Custom AI agents, AI phone answering, and intelligent business automation.' },
  { key: 'finance', label: 'Finance Operations', description: 'Bookkeeping, QuickBooks setup, and financial reporting for small businesses.' },
  { key: 'growth', label: 'Growth Systems', description: 'GEO, SEO, marketing automation, and strategies to increase visibility and leads.' },
  { key: 'infrastructure', label: 'Business Infrastructure', description: 'Workflow automation, CRM setup, websites, and operational systems.' },
] as const;

export default function ServicesPage() {
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services offered by Iris Zimmerfrau Inc.',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `${siteConfig.url}/services/${s.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemListLd} />
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />

      <Hero
        title="AI Automation, Bookkeeping & Business Systems"
        subtitle="Iris Zimmerfrau Inc. provides a full range of services to help small businesses automate operations, organize finances, capture more leads, and grow with AI-powered systems."
        primaryCTA={{ label: 'Schedule a Meeting', href: '/book-meeting' }}
      />

      {categories.map((cat) => {
        const catServices = services.filter((s) => s.category === cat.key);
        if (catServices.length === 0) return null;
        return (
          <section key={cat.key} className="px-4 py-16 sm:px-6 lg:px-8 even:bg-gray-50">
            <div className="mx-auto max-w-7xl">
              <SectionHeading title={cat.label} description={cat.description} />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {catServices.map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
