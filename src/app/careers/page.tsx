'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import JsonLd from '@/components/seo/JsonLd';
import { careers } from '@/data/careers';
import { careersAr } from '@/data/careers.ar';
import { careersKu } from '@/data/careers.ku';
import { isRtlLanguage } from '@/data/locales';
import { siteConfig } from '@/data/site';
import { useT, useLocale } from '@/lib/locale-context';
import { translations } from '@/translations';

export default function CareersIndexPage() {
  const t = useT(translations);
  const { language } = useLocale();
  const isRtl = isRtlLanguage(language);
  const isAr = language === 'ar';
  const isKu = language === 'ku';

  // JSON-LD stays English for SEO consistency — Google indexes the
  // canonical source regardless of client locale.
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

  const openRolesDescription =
    careers.length === 1 ? t.careers.openRolesOne : t.careers.openRolesMany(careers.length);

  return (
    <>
      <JsonLd data={itemListLd} />

      <Breadcrumbs items={[{ label: t.nav.careers, href: '/careers' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {t.careers.heroTitle}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-200 sm:text-xl">
            {t.careers.heroIntro}
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-300 sm:text-lg">
            {t.careers.heroBias}
          </p>
        </div>
      </section>

      {/* Open roles */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.careers.nowHiring}
            title={t.careers.openRolesTitle}
            description={openRolesDescription}
          />

          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {careers.map((role) => {
              const ar = isAr ? careersAr[role.slug] : isKu ? careersKu[role.slug] : undefined;
              const displayTitle = ar?.title ?? role.title;
              const displaySummary = ar?.summary ?? role.summary;
              const displayLocation = ar?.location ?? role.location;
              const displayType = ar?.employmentTypeDisplay ?? role.employmentTypeDisplay;
              const displayDepartment = ar?.department ?? role.department;
              return (
                <li key={role.slug}>
                  <Link
                    href={`/careers/${role.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-700">
                        {displayTitle}
                      </h3>
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                        {displayDepartment}
                      </span>
                    </div>
                    <dl className="mt-3 grid grid-cols-1 gap-1 text-xs text-gray-500">
                      <div>
                        <dt className="inline font-medium text-gray-600">{t.careers.locationLabel}: </dt>
                        <dd className="inline">{displayLocation}</dd>
                      </div>
                      <div>
                        <dt className="inline font-medium text-gray-600">{t.careers.typeLabel}: </dt>
                        <dd className="inline">{displayType}</dd>
                      </div>
                    </dl>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                      {displaySummary}
                    </p>
                    <span className="mt-5 text-sm font-medium text-brand-600 group-hover:text-brand-700">
                      {t.careers.viewRole} {isRtl ? '←' : '→'}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Bottom CTA — inline section using anchor so mailto works reliably */}
      <section className="bg-brand-950 px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.careers.notRightTitle}</h2>
          <p className="mt-4 text-lg text-brand-200">{t.careers.notRightText}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                isAr ? 'الوظائف — استفسار عام' : isKu ? 'هەلی کار — پرسیاری گشتی' : 'Careers — General inquiry'
              )}`}
              className="rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
            >
              {t.careers.emailUsLabel} {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
