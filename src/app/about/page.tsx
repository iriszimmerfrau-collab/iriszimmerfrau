import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = createMetadata({
  title: 'About — AI Automation & Business Systems Consultancy',
  description:
    'Iris Zimmerfrau Inc. helps small businesses build practical AI-powered operating systems. Automation, bookkeeping, AI agents, marketing, CRM, GEO, and SEO — integrated into one business infrastructure.',
  path: '/about',
});

const values = [
  { title: 'Practical Implementation', description: 'We build systems that work in real business environments, not theoretical frameworks or pilot projects that never ship.' },
  { title: 'Small Business Focus', description: 'Every service is designed for the budgets, timelines, and operational realities of small businesses and growing teams.' },
  { title: 'AI Without Hype', description: 'We use AI where it creates real business value — saving time, capturing leads, and reducing manual work — not for the sake of using AI.' },
  { title: 'Operations-First Mindset', description: 'Technology decisions are driven by operational needs. We start with your workflows and build systems around how your business actually runs.' },
  { title: 'Integrated Systems', description: 'We connect AI, automation, bookkeeping, CRM, marketing, and search visibility into one cohesive infrastructure instead of disconnected point solutions.' },
  { title: 'Measurable Outcomes', description: 'Every engagement is focused on results you can measure — faster response times, cleaner books, more leads, better visibility, less manual work.' },
];

const whoWeHelp = [
  'Local service businesses',
  'Restaurants and hospitality',
  'Clinics and healthcare practices',
  'Consultants and coaches',
  'Agencies and creative firms',
  'Contractors and home services',
  'Freelancers and solo practitioners',
  'Founders and startups',
  'Online businesses',
  'Professional service providers',
];

export default function AboutPage() {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
  };

  return (
    <>
      <JsonLd data={orgLd} />
      <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />

      <Hero
        title="About Iris Zimmerfrau Inc."
        subtitle="We help small businesses build practical AI-powered operating systems. Automation, bookkeeping, AI agents, phone answering, marketing systems, CRM workflows, and search visibility strategy — integrated into one business infrastructure."
      />

      {/* Mission */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Our Mission" title="Systems That Save Time and Drive Growth" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              Iris Zimmerfrau Inc. was founded to solve a problem that most small businesses face: too many manual processes, disconnected tools, missed leads, messy books, and an online presence that does not reflect the quality of the business.
            </p>
            <p>
              We combine AI automation, workflow integration, bookkeeping, CRM setup, marketing automation, and search visibility (both traditional SEO and Generative Engine Optimization) into connected systems that help businesses operate more efficiently and grow more predictably.
            </p>
            <p>
              Our approach is practical. We do not sell vague AI promises. We build systems around how your business actually works — then automate the repetitive parts, organize the financials, and make the business easier to discover online.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="How We Work" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Who We Help" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {whoWeHelp.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <svg className="h-4 w-4 shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to build your business operating system?" text="Schedule a meeting to discuss how we can help automate, organize, and grow your business." />
    </>
  );
}
