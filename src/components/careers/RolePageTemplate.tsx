'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import JsonLd from '@/components/seo/JsonLd';
import type { JobRole } from '@/data/careers';
import { getRoleArBySlug } from '@/data/careers.ar';
import { siteConfig } from '@/data/site';
import { useT, useLocale } from '@/lib/locale-context';
import { translations } from '@/translations';

interface ApplyButtonProps {
  href: string;
  label: string;
  size?: 'md' | 'lg';
}

function ApplyButton({ href, label, size = 'lg' }: ApplyButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        size === 'lg'
          ? 'inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2'
          : 'inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600'
      }
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      {label}
    </a>
  );
}

export default function RolePageTemplate({ role }: { role: JobRole }) {
  const t = useT(translations);
  const { language } = useLocale();
  const isAr = language === 'ar';
  const ar = isAr ? getRoleArBySlug(role.slug) : undefined;

  // Choose the displayed content. English from `role`, Arabic from `ar` with
  // English fallback when a particular Arabic field is missing.
  const title = ar?.title ?? role.title;
  const shortTitle = ar?.shortTitle ?? role.shortTitle;
  const location = ar?.location ?? role.location;
  const employmentTypeDisplay = ar?.employmentTypeDisplay ?? role.employmentTypeDisplay;
  const department = ar?.department ?? role.department;
  const compensation = ar?.compensation ?? role.compensation;
  const about = ar?.about ?? role.about;
  const whatYoullDo = ar?.whatYoullDo ?? role.whatYoullDo;
  const evaluation = ar?.evaluation ?? role.evaluation;
  const dayOneMaterials = ar?.dayOneMaterials ?? role.dayOneMaterials;
  const fitYes = ar?.fitYes ?? role.fitYes;
  const fitNo = ar?.fitNo ?? role.fitNo;
  const neverAskFor = ar?.neverAskFor ?? role.neverAskFor;
  const application = ar?.application ?? role.application;
  const note = ar?.note ?? role.note;
  const applyButtonText = ar?.applyButtonText ?? role.applyButtonText;
  const applyUrl = ar?.applyUrl ?? role.applyUrl;

  const url = `${siteConfig.url}/careers/${role.slug}`;
  const logoUrl = `${siteConfig.url}/logo.svg`;

  // JobPosting JSON-LD always uses the English source data — keeps Google
  // for Jobs indexing stable regardless of which language a visitor sees.
  const jobPostingLd = {
    '@context': 'https://schema.org/',
    '@type': 'JobPosting',
    title: role.title,
    description: role.schemaDescription,
    identifier: {
      '@type': 'PropertyValue',
      name: 'Iris Zimmerfrau Inc.',
      value: role.identifier,
    },
    datePosted: role.datePosted,
    validThrough: role.validThrough,
    employmentType: role.employmentTypeSchema,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Iris Zimmerfrau Inc.',
      sameAs: siteConfig.url,
      logo: logoUrl,
    },
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: role.applicantCountries.map((country) => ({
      '@type': 'Country',
      name: country,
    })),
    inLanguage: ['en', 'ar'],
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: role.baseSalary.currency,
      value: {
        '@type': 'QuantitativeValue',
        value: role.baseSalary.value,
        unitText: role.baseSalary.unitText,
      },
    },
    directApply: false,
    url,
  };

  return (
    <>
      <JsonLd data={jobPostingLd} />
      <Breadcrumbs
        items={[
          { label: t.nav.careers, href: '/careers' },
          { label: shortTitle, href: `/careers/${role.slug}` },
        ]}
      />

      <article>
        {/* Header */}
        <header className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
              {department} · {t.careers.nowHiring}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <dl className="mt-6 grid gap-2 text-sm text-brand-200 sm:grid-cols-2">
              <div>
                <dt className="inline font-semibold text-white">{t.careers.locationLabel}: </dt>
                <dd className="inline">{location}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-white">{t.careers.typeLabel}: </dt>
                <dd className="inline">{employmentTypeDisplay}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-white">{t.careers.departmentLabel}: </dt>
                <dd className="inline">{department}</dd>
              </div>
            </dl>
          </div>
        </header>

        {/* Compensation summary */}
        <section className="border-b border-gray-200 bg-brand-50 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-bold text-brand-900">{t.careers.compensation}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {compensation.map((item, i) => (
                <li key={i} className="rounded-lg border border-brand-200 bg-white p-4 text-sm">
                  <p className="font-semibold text-gray-900">{item.label}</p>
                  <p className="mt-1 text-gray-700">{item.value}</p>
                </li>
              ))}
            </ul>

            {/* Top apply button — right after compensation */}
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <ApplyButton href={applyUrl} label={applyButtonText} />
              <p className="text-sm text-brand-800">{t.careers.applicationsGoTo}</p>
            </div>
          </div>
        </section>

        {/* About the role */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title={t.careers.aboutTitle} centered={false} />
            <p className="mt-6 text-base leading-relaxed text-gray-700">{about}</p>
          </div>
        </section>

        {/* What you'll do */}
        <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title={t.careers.whatYoullDo} centered={false} />
            <ul className="mt-6 space-y-3">
              {whatYoullDo.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-brand-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The 7-day evaluation */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title={t.careers.evaluationTitle} centered={false} />
            <p className="mt-6 text-base leading-relaxed text-gray-700">{evaluation.intro}</p>
            <ul className="mt-4 space-y-2">
              {evaluation.targets.map((target, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-brand-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{target}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
                {evaluation.passDescription}
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700">
                {evaluation.fallShortDescription}
              </div>
            </div>
          </div>
        </section>

        {/* Day-one materials */}
        <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title={t.careers.dayOneTitle} centered={false} />
            <ul className="mt-6 space-y-3">
              {dayOneMaterials.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-brand-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Fit */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading title={t.careers.fitYesTitle} centered={false} />
                <ul className="mt-6 space-y-3">
                  {fitYes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-brand-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionHeading title={t.careers.fitNoTitle} centered={false} />
                <ul className="mt-6 space-y-3">
                  {fitNo.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Never ask for */}
        <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title={t.careers.neverAskTitle} centered={false} />
            <ul className="mt-6 space-y-3">
              {neverAskFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-brand-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              {t.careers.reportConcerns}{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </section>

        {/* How to apply */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title={t.careers.howToApplyTitle} centered={false} />
            <p className="mt-6 text-base leading-relaxed text-gray-700">{application.intro}</p>
            <ol className="mt-6 space-y-3">
              {application.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            {note && (
              <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 p-5 text-sm leading-relaxed text-brand-900">
                <p className="font-semibold">{t.careers.noteLabel}</p>
                <p className="mt-1">{note}</p>
              </div>
            )}

            {/* Bottom apply button */}
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <ApplyButton href={applyUrl} label={applyButtonText} />
              <p className="text-sm text-gray-600">{t.careers.whatsappOpensNote}</p>
            </div>
          </div>
        </section>

        {/* Back link */}
        <section className="border-t border-gray-200 bg-gray-50 px-4 py-12 text-center sm:px-6 lg:px-8">
          <Link href="/careers" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            {isAr ? '→' : '←'} {t.careers.backToAll}
          </Link>
        </section>
      </article>
    </>
  );
}
