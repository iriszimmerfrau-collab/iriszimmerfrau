'use client';

import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/services/ServiceCard';
import CTASection from '@/components/ui/CTASection';
import JsonLd from '@/components/seo/JsonLd';
import { useT } from '@/lib/locale-context';
import { translations } from '@/translations';

export default function ServicesPage() {
  const t = useT(translations);

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
      <Breadcrumbs items={[{ label: t.nav.services, href: '/services' }]} />

      <Hero
        title={t.services.heroTitle}
        subtitle={t.services.heroSubtitle}
        primaryCTA={{ label: t.common.scheduleAMeeting, href: '/book-meeting' }}
      />

      {t.services.categories.map((cat) => {
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
