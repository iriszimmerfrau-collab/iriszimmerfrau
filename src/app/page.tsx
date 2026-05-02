import Link from 'next/link';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { monthlyPackages } from '@/data/pricing';
import { globalFaqs } from '@/data/faq';
import ServiceCard from '@/components/services/ServiceCard';
import PricingCard from '@/components/pricing/PricingCard';
import FAQAccordion from '@/components/ui/FAQAccordion';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';
import JsonLd from '@/components/seo/JsonLd';

const trustBullets = [
  'Custom AI agents for operations and support',
  'AI phone answering agents for missed-call recovery',
  'Bookkeeping, QuickBooks setup, and financial reporting',
  'GEO, SEO, and marketing systems for better visibility',
  'CRM and workflow automation for scalable operations',
];

const systemStack = [
  'Lead Capture',
  'AI Phone Agent',
  'CRM',
  'Workflow Automation',
  'Bookkeeping',
  'Reporting',
  'GEO/SEO Growth',
];

const problems = [
  { title: 'Missed Calls', text: 'Unanswered calls mean lost revenue. Most callers will not leave a voicemail.' },
  { title: 'Slow Follow-Up', text: 'Leads go cold when follow-up takes hours instead of minutes.' },
  { title: 'Messy Books', text: 'Disorganized finances lead to bad decisions and stressful tax seasons.' },
  { title: 'Manual Admin', text: 'Hours spent on repetitive tasks that could be automated.' },
  { title: 'Invisible Online', text: 'Your business does not show up on Google, maps, or AI search engines.' },
  { title: 'Disconnected Tools', text: 'Data lives in spreadsheets, inboxes, and apps that do not talk to each other.' },
];

const whyUs = [
  'Practical business automation, not vague AI hype',
  'Built for small businesses and growing teams',
  'Systems designed around real workflows',
  'Combines AI, operations, bookkeeping, and marketing',
  'Clear implementation roadmap',
  'Conversion-focused, measurable outcomes',
];

export default function HomePage() {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
  };

  const professionalServiceLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description:
      'AI automation, bookkeeping, workflow automation, AI phone answering, GEO, SEO, CRM, and marketing systems for small businesses.',
    serviceType: [
      'AI Automation',
      'Bookkeeping',
      'Workflow Automation',
      'Marketing Automation',
      'CRM Setup',
      'Generative Engine Optimization',
      'Business Operations Consulting',
    ],
    areaServed: { '@type': 'Country', name: 'United States' },
  };

  const previewFaqs = globalFaqs.slice(0, 5);

  return (
    <>
      <JsonLd data={orgLd} />
      <JsonLd data={professionalServiceLd} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            AI-Powered Business Systems for Small Businesses
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-200 sm:text-xl">
            Iris Zimmerfrau Inc. helps businesses automate operations, answer more calls, organize bookkeeping, capture leads, and grow with custom AI agents, workflow automation, GEO, SEO, CRM, and marketing systems.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/book-meeting"
              className="rounded-lg bg-white px-8 py-3.5 text-center text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
            >
              Schedule a Meeting
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-brand-400 px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust bullets */}
          <ul className="mt-12 grid gap-3 text-left sm:grid-cols-2 lg:mx-auto lg:max-w-2xl">
            {trustBullets.map((bullet, i) => (
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
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">The Business Operating System</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {systemStack.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="rounded-lg bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">{item}</span>
                {i < systemStack.length - 1 && (
                  <svg className="h-4 w-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            eyebrow="The Problem"
            title="Small Businesses Lose Money Every Day"
            description="Businesses lose revenue because calls go unanswered, leads are not followed up with, books are messy, repetitive admin tasks waste hours, and their websites are invisible to both Google and AI search engines."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
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
            eyebrow="The Solution"
            title="Connected Systems That Work For You"
            description="Iris Zimmerfrau Inc. builds connected systems that automate the back office, improve lead response, organize finances, and make your business easier to discover online."
          />
          <p className="mt-6 text-base text-gray-600">
            We help businesses answer more calls, capture more leads, automate repetitive work, organize finances, improve online visibility, and create scalable business systems using AI, automation, bookkeeping, CRM, GEO, SEO, and marketing infrastructure.
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">
            Built for small businesses that need practical systems, not vague AI hype.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What We Do" title="Our Services" />
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
          <SectionHeading eyebrow="Why Iris Zimmerfrau Inc." title="Why Choose Us" />
          <ul className="mt-10 space-y-4">
            {whyUs.map((item, i) => (
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
          <SectionHeading eyebrow="Packages" title="Pricing" description="Monthly packages designed for different stages of growth. Pricing varies by scope." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {monthlyPackages.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/pricing" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              View full pricing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* GEO/SEO section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Modern Discovery"
            title="Be Found by Humans, Search Engines, and AI"
            description="Modern discovery includes Google, Google Maps, ChatGPT, Perplexity, Claude, Gemini, AI Overviews, and answer engines. We help businesses structure content so humans, search engines, and AI systems understand what you offer."
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
              Learn about GEO &rarr;
            </Link>
            <Link href="/services/seo-local-search" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              Learn about SEO &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-12">
            <FAQAccordion items={previewFaqs} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              View all FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
