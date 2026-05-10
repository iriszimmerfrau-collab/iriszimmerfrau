'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/forms/ContactForm';
import JsonLd from '@/components/seo/JsonLd';
import { useT } from '@/lib/locale-context';
import { translations } from '@/translations';

export default function ContactPage() {
  const t = useT(translations);

  const contactLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'sales',
      availableLanguage: ['English', 'Arabic'],
      areaServed: ['US', 'GB', 'EG', 'SA', 'JO', 'IQ'],
    },
  };

  return (
    <>
      <JsonLd data={contactLd} />
      <Breadcrumbs items={[{ label: t.nav.contact, href: '/contact' }]} />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Info */}
            <div>
              <SectionHeading title={t.contact.heroTitle} centered={false} />
              <p className="mt-4 text-base leading-relaxed text-gray-600">{t.contact.heroSubtitle}</p>

              <div className="mt-10 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{t.contact.emailLabel}</h3>
                  <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-base text-brand-600 hover:text-brand-700">
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{t.contact.meetingLabel}</h3>
                  <Link href="/book-meeting" className="mt-1 block text-base text-brand-600 hover:text-brand-700">
                    {t.contact.meetingLink} →
                  </Link>
                </div>
              </div>

              <div className="mt-12 rounded-xl bg-brand-50 p-6">
                <h3 className="text-base font-semibold text-brand-900">{t.contact.preferTalkTitle}</h3>
                <p className="mt-2 text-sm text-brand-700">{t.contact.preferTalkText}</p>
                <Link
                  href="/book-meeting"
                  className="mt-4 inline-block rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  {t.common.scheduleAMeeting}
                </Link>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">{t.contact.formTitle}</h2>
              <p className="mt-2 text-sm text-gray-600">{t.contact.formIntro}</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
