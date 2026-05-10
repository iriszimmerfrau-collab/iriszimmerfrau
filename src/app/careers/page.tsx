import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import JsonLd from '@/components/seo/JsonLd';
import { careers } from '@/data/careers';
import { siteConfig } from '@/data/site';

export default function CareersIndexPage() {
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Open roles at Iris Zimmerfrau Inc.',
    itemListElement: careers.map((role, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: role.title,
      url: `${siteConfig.url}/careers/${role.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemListLd} />

      <Breadcrumbs items={[{ label: 'Careers', href: '/careers' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Careers at Iris Zimmerfrau Inc.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-200 sm:text-xl">
            We build AI-powered business systems for small businesses — custom AI agents,
            AI phone answering, workflow automation, bookkeeping, CRM, GEO, SEO, and
            marketing automation. We&rsquo;re hiring people who care about real outcomes
            for real businesses and who want to operate inside a small, fast-moving team.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-300 sm:text-lg">
            If you&rsquo;re organized, self-motivated, and biased toward doing the work
            rather than talking about it, you&rsquo;ll thrive here.
          </p>
        </div>
      </section>

      {/* Open roles */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Now Hiring"
            title="Open Roles"
            description={
              careers.length === 1
                ? 'One role is currently open. More positions will be added as we grow.'
                : `${careers.length} roles are currently open.`
            }
          />

          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {careers.map((role) => (
              <li key={role.slug}>
                <Link
                  href={`/careers/${role.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-700">
                      {role.title}
                    </h3>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {role.department}
                    </span>
                  </div>
                  <dl className="mt-3 grid grid-cols-1 gap-1 text-xs text-gray-500">
                    <div>
                      <dt className="inline font-medium text-gray-600">Location: </dt>
                      <dd className="inline">{role.location}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-gray-600">Type: </dt>
                      <dd className="inline">{role.employmentTypeDisplay}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                    {role.summary}
                  </p>
                  <span className="mt-5 text-sm font-medium text-brand-600 group-hover:text-brand-700">
                    View role &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom CTA — uses an anchor (not Link) so mailto works reliably */}
      <section className="bg-brand-950 px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Not the right role for you?
          </h2>
          <p className="mt-4 text-lg text-brand-200">
            We&rsquo;re a growing team and we add roles regularly. Reach out if you think
            your skills fit the work we do.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Careers — General inquiry')}`}
              className="rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
            >
              Email {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
