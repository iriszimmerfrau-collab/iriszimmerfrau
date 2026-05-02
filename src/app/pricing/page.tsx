import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { monthlyPackages, oneTimeServices } from '@/data/pricing';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Hero from '@/components/ui/Hero';
import PricingCard from '@/components/pricing/PricingCard';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = createMetadata({
  title: 'Pricing — AI Automation, Bookkeeping & Business Systems Packages',
  description:
    'Explore pricing packages for AI automation, bookkeeping, workflow automation, GEO, SEO, CRM, and marketing systems. Monthly packages starting at $450/month and one-time services starting at $350.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Pricing', href: '/pricing' }]} />

      <Hero
        title="Pricing & Packages"
        subtitle="Monthly packages designed for different stages of growth, plus one-time services for specific needs. All pricing is starting pricing — final scope and investment are tailored to your business."
        primaryCTA={{ label: 'Schedule a Meeting', href: '/book-meeting' }}
      />

      {/* Monthly Packages */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Monthly Packages" title="Ongoing Business Systems" description="Choose a package that fits your needs. Each includes ongoing support, optimization, and reporting." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {monthlyPackages.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Services */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="One-Time Services" title="Project-Based Work" description="Need a specific setup, audit, or buildout? These one-time services deliver focused results." />
          <div className="mt-12 space-y-4">
            {oneTimeServices.map((service) => (
              <div key={service.name} className="flex flex-col justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{service.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{service.price}</p>
                  <p className="text-xs text-gray-500">Starting price</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope note */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base text-gray-600">
            Pricing varies by scope, complexity, and business needs. Schedule a meeting to discuss what package or project fits your situation.
          </p>
        </div>
      </section>

      <CTASection heading="Not sure which package is right?" text="Schedule a meeting and we will recommend the best fit for your business." />
    </>
  );
}
