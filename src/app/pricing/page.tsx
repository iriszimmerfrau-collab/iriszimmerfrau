'use client';

import { monthlyPackages, monthlyPackagesAr, monthlyPackagesKu, oneTimeServices, oneTimeServicesAr, oneTimeServicesKu } from '@/data/pricing';
import { isRtlLanguage } from '@/data/locales';
import { getCountry } from '@/data/locales';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Hero from '@/components/ui/Hero';
import PricingCard from '@/components/pricing/PricingCard';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';
import { useLocale, useT } from '@/lib/locale-context';
import { translations } from '@/translations';
import { formatPrice, parseUsdString } from '@/lib/currency';

export default function PricingPage() {
  const t = useT(translations);
  const { country, currency, language } = useLocale();
  const isAr = language === 'ar';
  const isKu = language === 'ku';
  const isRtl = isRtlLanguage(language);
  const localizedPackages = isAr ? monthlyPackagesAr : isKu ? monthlyPackagesKu : null;
  const localizedOneTime = isAr ? oneTimeServicesAr : isKu ? oneTimeServicesKu : null;

  const countryName = getCountry(country).name[language];
  const currencyNoteText = t.pricing.currencyNote(countryName, currency);

  return (
    <>
      <Breadcrumbs items={[{ label: t.nav.pricing, href: '/pricing' }]} />

      <Hero
        title={t.pricing.heroTitle}
        subtitle={t.pricing.heroSubtitle}
        primaryCTA={{ label: t.common.scheduleAMeeting, href: '/book-meeting' }}
      />

      {/* Currency note */}
      <section className="border-b border-gray-200 bg-brand-50 px-4 py-3 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-7xl text-center text-sm text-brand-800">{currencyNoteText}</p>
      </section>

      {/* Monthly Packages */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.pricing.monthlyEyebrow}
            title={t.pricing.monthlyTitle}
            description={t.pricing.monthlyDescription}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {monthlyPackages.map((pkg, i) => {
              const localized = localizedPackages?.[i];
              return (
                <PricingCard
                  key={pkg.name}
                  pkg={pkg}
                  localizedName={localized?.name}
                  localizedTagline={localized?.tagline}
                  localizedFeatures={localized?.features}
                  localizedCta={localized?.cta}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* One-Time Services */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow={t.pricing.oneTimeEyebrow}
            title={t.pricing.oneTimeTitle}
            description={t.pricing.oneTimeDescription}
          />
          <div className="mt-12 space-y-4">
            {oneTimeServices.map((service, i) => {
              const localized = localizedOneTime?.[i];
              const usdAmount = parseUsdString(service.price);
              const displayPrice = formatPrice(usdAmount, currency);
              return (
                <div
                  key={service.name}
                  className="flex flex-col justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {localized?.name ?? service.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {localized?.description ?? service.description}
                    </p>
                  </div>
                  <div className={isRtl ? 'text-left' : 'text-right'}>
                    <p className="text-lg font-bold text-gray-900">{displayPrice}</p>
                    <p className="text-xs text-gray-500">{t.common.startingPrice}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scope note */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base text-gray-600">{t.pricing.scopeNote}</p>
        </div>
      </section>

      <CTASection heading={t.pricing.ctaTitle} text={t.pricing.ctaText} />
    </>
  );
}
