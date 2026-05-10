'use client';

import { siteConfig } from '@/data/site';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import { useT } from '@/lib/locale-context';
import { translations } from '@/translations';

export default function BookMeetingPage() {
  const t = useT(translations);

  return (
    <>
      <Breadcrumbs items={[{ label: t.nav.bookMeeting, href: '/book-meeting' }]} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.bookMeeting.heroTitle}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-200">
            {t.bookMeeting.heroSubtitle}
          </p>
          <div className="mt-10">
            <a
              href={siteConfig.koalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-white px-10 py-4 text-base font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
            >
              {t.common.scheduleAMeeting}
            </a>
          </div>
          <p className="mt-6 text-sm text-brand-300">
            {t.bookMeeting.preferEmail}{' '}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-white underline hover:text-brand-200">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </section>

      {/* What happens on the call */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title={t.bookMeeting.stepsTitle} />
          <div className="mt-10 space-y-8">
            {t.bookMeeting.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best fit section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title={t.bookMeeting.bestForTitle} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.bookMeeting.bestFor.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-950 px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white">{t.bookMeeting.readyTitle}</h2>
          <p className="mt-4 text-brand-200">{t.bookMeeting.readyText}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={siteConfig.koalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              {t.common.scheduleAMeeting}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium text-brand-300 hover:text-white">
              {t.common.orEmail} {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
