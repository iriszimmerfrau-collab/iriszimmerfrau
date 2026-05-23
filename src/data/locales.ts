// Country, currency, and language definitions for Iris Zimmerfrau Inc.
// Seven markets: US, UK, Egypt, Saudi Arabia, Jordan, Iraq, Kurdistan Region (KRG).
// Three languages: English, Arabic, Kurdish (Sorani / Central Kurdish).
//
// Exchange rates are USD → local. Update these periodically; they are intentionally
// rounded to "marketing-friendly" values rather than live spot rates so that displayed
// prices look clean (e.g. £349 instead of £355.50).

export type Language = 'en' | 'ar' | 'ku';

export type CountryCode = 'US' | 'GB' | 'EG' | 'SA' | 'JO' | 'IQ' | 'KRG';

export type CurrencyCode = 'USD' | 'GBP' | 'EGP' | 'SAR' | 'JOD' | 'IQD';

/** RTL languages — used to set html dir="rtl". */
export const RTL_LANGUAGES: Language[] = ['ar', 'ku'];

export function isRtlLanguage(lang: Language): boolean {
  return RTL_LANGUAGES.includes(lang);
}

export interface Country {
  code: CountryCode;
  name: { en: string; ar: string; ku: string };
  flag: string;
  defaultLanguage: Language;
  defaultCurrency: CurrencyCode;
}

export interface Currency {
  code: CurrencyCode;
  name: { en: string; ar: string; ku: string };
  symbol: string;
  /** Position of the symbol relative to the amount. */
  position: 'before' | 'after';
  /** USD → this currency multiplier. */
  rateFromUsd: number;
  /** Round displayed amounts to this nearest unit (e.g. 50 → EGP 22,050 not EGP 22,047). */
  roundTo: number;
  /** Number formatting locale used by Intl.NumberFormat. */
  formatLocale: string;
}

export const countries: Country[] = [
  {
    code: 'US',
    name: { en: 'United States', ar: 'الولايات المتحدة', ku: 'ویلایەتە یەکگرتووەکانی ئەمەریکا' },
    flag: '🇺🇸',
    defaultLanguage: 'en',
    defaultCurrency: 'USD',
  },
  {
    code: 'GB',
    name: { en: 'United Kingdom', ar: 'المملكة المتحدة', ku: 'شانشینی یەکگرتوو' },
    flag: '🇬🇧',
    defaultLanguage: 'en',
    defaultCurrency: 'GBP',
  },
  {
    code: 'EG',
    name: { en: 'Egypt', ar: 'مصر', ku: 'میسر' },
    flag: '🇪🇬',
    defaultLanguage: 'ar',
    defaultCurrency: 'EGP',
  },
  {
    code: 'SA',
    name: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية', ku: 'سعودیە' },
    flag: '🇸🇦',
    defaultLanguage: 'ar',
    defaultCurrency: 'SAR',
  },
  {
    code: 'JO',
    name: { en: 'Jordan', ar: 'الأردن', ku: 'ئوردن' },
    flag: '🇯🇴',
    defaultLanguage: 'ar',
    defaultCurrency: 'JOD',
  },
  {
    code: 'IQ',
    name: { en: 'Iraq', ar: 'العراق', ku: 'عێراق' },
    flag: '🇮🇶',
    defaultLanguage: 'ar',
    defaultCurrency: 'IQD',
  },
  {
    code: 'KRG',
    name: { en: 'Kurdistan Region', ar: 'إقليم كردستان', ku: 'هەرێمی کوردستان' },
    flag: '🇮🇶',
    defaultLanguage: 'ku',
    defaultCurrency: 'IQD',
  },
];

export const currencies: Currency[] = [
  {
    code: 'USD',
    name: { en: 'US Dollar', ar: 'دولار أمريكي', ku: 'دۆلاری ئەمەریکی' },
    symbol: '$',
    position: 'before',
    rateFromUsd: 1,
    roundTo: 1,
    formatLocale: 'en-US',
  },
  {
    code: 'GBP',
    name: { en: 'British Pound', ar: 'جنيه إسترليني', ku: 'پاوەندی بەریتانی' },
    symbol: '£',
    position: 'before',
    rateFromUsd: 0.79,
    roundTo: 1,
    formatLocale: 'en-GB',
  },
  {
    code: 'EGP',
    name: { en: 'Egyptian Pound', ar: 'جنيه مصري', ku: 'پاوەندی میسری' },
    symbol: 'E£',
    position: 'before',
    rateFromUsd: 49,
    roundTo: 50,
    formatLocale: 'ar-EG',
  },
  {
    code: 'SAR',
    name: { en: 'Saudi Riyal', ar: 'ريال سعودي', ku: 'ڕیاڵی سعودی' },
    symbol: 'SAR',
    position: 'before',
    rateFromUsd: 3.75,
    roundTo: 5,
    formatLocale: 'ar-SA',
  },
  {
    code: 'JOD',
    name: { en: 'Jordanian Dinar', ar: 'دينار أردني', ku: 'دیناری ئوردنی' },
    symbol: 'JD',
    position: 'before',
    rateFromUsd: 0.71,
    roundTo: 1,
    formatLocale: 'ar-JO',
  },
  {
    code: 'IQD',
    name: { en: 'Iraqi Dinar', ar: 'دينار عراقي', ku: 'دیناری عێراقی' },
    symbol: 'د.ع',
    position: 'after',
    rateFromUsd: 1310,
    roundTo: 500,
    formatLocale: 'ar-IQ',
  },
];

export function getCountry(code: CountryCode): Country {
  return countries.find((c) => c.code === code) ?? countries[0];
}

export function getCurrency(code: CurrencyCode): Currency {
  return currencies.find((c) => c.code === code) ?? currencies[0];
}

export const DEFAULT_COUNTRY: CountryCode = 'US';
export const DEFAULT_LANGUAGE: Language = 'en';
export const DEFAULT_CURRENCY: CurrencyCode = 'USD';

/** Map of common countries beyond our 7 → fall back to which of ours. */
export const COUNTRY_FALLBACK: Record<string, CountryCode> = {
  // Map other Arabic-speaking countries to our nearest market
  AE: 'SA', // UAE → Saudi
  KW: 'SA', // Kuwait → Saudi
  QA: 'SA', // Qatar → Saudi
  BH: 'SA', // Bahrain → Saudi
  OM: 'SA', // Oman → Saudi
  YE: 'SA', // Yemen → Saudi
  LB: 'JO', // Lebanon → Jordan
  SY: 'JO', // Syria → Jordan
  PS: 'JO', // Palestine → Jordan
  MA: 'EG', // Morocco → Egypt
  DZ: 'EG', // Algeria → Egypt
  TN: 'EG', // Tunisia → Egypt
  LY: 'EG', // Libya → Egypt
  SD: 'EG', // Sudan → Egypt
  // English-speaking → US
  CA: 'US',
  AU: 'US',
  NZ: 'US',
  IE: 'GB',
};
