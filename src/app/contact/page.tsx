import type { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/forms/ContactForm';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = createMetadata({
  title: 'Contact — Get in Touch',
  description:
    'Contact Iris Zimmerfrau Inc. to discuss AI automation, bookkeeping, workflow automation, AI phone agents, GEO, SEO, CRM setup, or marketing automation for your business.',
  path: '/contact',
});

export default function ContactPage() {
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
    },
  };

  return (
    <>
      <JsonLd data={contactLd} />
      <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Info */}
            <div>
              <SectionHeading title="Get in Touch" centered={false} />
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Have questions about AI automation, bookkeeping, workflow systems, or any of our services? Reach out directly or fill out the form and we will get back to you.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-base text-brand-600 hover:text-brand-700">
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Schedule a Meeting</h3>
                  <Link href="/book-meeting" className="mt-1 block text-base text-brand-600 hover:text-brand-700">
                    Book a strategy meeting &rarr;
                  </Link>
                </div>
              </div>

              <div className="mt-12 rounded-xl bg-brand-50 p-6">
                <h3 className="text-base font-semibold text-brand-900">Prefer to talk it through?</h3>
                <p className="mt-2 text-sm text-brand-700">
                  Schedule a free strategy meeting to discuss your business goals and explore which services fit best.
                </p>
                <Link
                  href="/book-meeting"
                  className="mt-4 inline-block rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  Schedule a Meeting
                </Link>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">Send a Message</h2>
              <p className="mt-2 text-sm text-gray-600">
                Fill out the form below to get in touch.
              </p>
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
