'use client';

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import {
  type CountryCode,
  type CurrencyCode,
  type Language,
  countries,
  getCountry,
  isRtlLanguage,
  COUNTRY_FALLBACK,
  DEFAULT_COUNTRY,
} from '@/data/locales';

interface LocaleState {
  country: CountryCode;
  language: Language;
  currency: CurrencyCode;
  /** True until auto-detection has finished its first attempt. */
  hasResolved: boolean;
  setCountry: (code: CountryCode) => void;
  setCurrency: (code: CurrencyCode) => void;
  setLanguage: (lang: Language) => void;
}

const LocaleContext = createContext<LocaleState | null>(null);

const STORAGE_KEYS = {
  country: 'zf-country',
  currency: 'zf-currency',
  language: 'zf-language',
  detected: 'zf-detected', // ISO date so we don't re-detect every visit
} as const;

const DETECTION_TTL_DAYS = 30;

function readStorage(key: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore — Safari private mode, quota exceeded, etc.
  }
}

function isValidCountry(code: string | null): code is CountryCode {
  return code !== null && countries.some((c) => c.code === code);
}

/** Map a detected ISO country code (any country) to one of our 6 markets. */
function mapDetectedCountry(detected: string): CountryCode {
  const upper = detected.toUpperCase();
  if (isValidCountry(upper)) return upper;
  if (upper in COUNTRY_FALLBACK) return COUNTRY_FALLBACK[upper];
  return DEFAULT_COUNTRY;
}

/**
 * Try to auto-detect the user's country via a free IP geolocation API.
 * Falls back to navigator.language hints, then to default (US).
 */
async function detectCountry(): Promise<CountryCode> {
  // Try a few free providers; first one to respond wins.
  const providers = [
    { url: 'https://api.country.is/', extract: (j: unknown) => (j as { country?: string }).country },
    { url: 'https://ipapi.co/json/', extract: (j: unknown) => (j as { country_code?: string }).country_code },
    { url: 'https://ipwho.is/', extract: (j: unknown) => (j as { country_code?: string }).country_code },
  ];

  for (const provider of providers) {
    try {
      const res = await fetch(provider.url, { signal: AbortSignal.timeout(3500) });
      if (!res.ok) continue;
      const json = await res.json();
      const code = provider.extract(json);
      if (code && typeof code === 'string') {
        return mapDetectedCountry(code);
      }
    } catch {
      // Try next provider
    }
  }

  // Fallback: navigator.language ("ar-EG" → EG, "en-GB" → GB, etc.)
  if (typeof navigator !== 'undefined' && navigator.language) {
    const parts = navigator.language.split('-');
    if (parts.length === 2 && parts[1].length === 2) {
      return mapDetectedCountry(parts[1]);
    }
  }
  return DEFAULT_COUNTRY;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Initial sync read — uses cached preferences if present, else falls back
  // to defaults. Auto-detection happens in an effect.
  const [country, setCountryState] = useState<CountryCode>(() => {
    const stored = readStorage(STORAGE_KEYS.country);
    return isValidCountry(stored) ? stored : DEFAULT_COUNTRY;
  });

  const [language, setLanguageState] = useState<Language>(() => {
    const stored = readStorage(STORAGE_KEYS.language);
    if (stored === 'en' || stored === 'ar' || stored === 'ku') return stored;
    const c = readStorage(STORAGE_KEYS.country);
    return isValidCountry(c) ? getCountry(c).defaultLanguage : 'en';
  });

  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    const stored = readStorage(STORAGE_KEYS.currency);
    if (stored && ['USD', 'GBP', 'EGP', 'SAR', 'JOD', 'IQD'].includes(stored)) {
      return stored as CurrencyCode;
    }
    const c = readStorage(STORAGE_KEYS.country);
    return isValidCountry(c) ? getCountry(c).defaultCurrency : 'USD';
  });

  // Compute up-front whether we need to do IP detection. If we have a cached
  // country, or we recently detected, we skip the fetch entirely. Wrapped in
  // useState initializer so the impure Date.now() call only runs once on mount.
  const [shouldDetect] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    if (readStorage(STORAGE_KEYS.country)) return false;
    const lastDetected = readStorage(STORAGE_KEYS.detected);
    if (lastDetected) {
      const ageMs = Date.now() - new Date(lastDetected).getTime();
      const ageDays = ageMs / (1000 * 60 * 60 * 24);
      if (ageDays < DETECTION_TTL_DAYS) return false;
    }
    return true;
  });

  const [hasResolved, setHasResolved] = useState<boolean>(!shouldDetect);

  // Auto-detection effect — only runs when shouldDetect is true. Since this
  // only fires once and only when we genuinely need the network call, no
  // synchronous setState happens unless the fetch resolves.
  useEffect(() => {
    if (!shouldDetect) return;
    let cancelled = false;
    detectCountry().then((detected) => {
      if (cancelled) return;
      writeStorage(STORAGE_KEYS.detected, new Date().toISOString());
      setCountryState(detected);
      const c = getCountry(detected);
      // Only seed language/currency if user hasn't overridden.
      if (!readStorage(STORAGE_KEYS.language)) setLanguageState(c.defaultLanguage);
      if (!readStorage(STORAGE_KEYS.currency)) setCurrencyState(c.defaultCurrency);
      setHasResolved(true);
    });
    return () => {
      cancelled = true;
    };
  }, [shouldDetect]);

  // When language changes, update the html lang and dir attributes.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    // Sorani Kurdish BCP 47 tag: ckb. Use that for proper screen-reader pronunciation.
    document.documentElement.lang = language === 'ku' ? 'ckb' : language;
    document.documentElement.dir = isRtlLanguage(language) ? 'rtl' : 'ltr';
  }, [language]);

  const setCountry = useCallback((code: CountryCode) => {
    setCountryState(code);
    writeStorage(STORAGE_KEYS.country, code);
    const c = getCountry(code);
    // When user picks a new country, reset language and currency to that
    // country's defaults — but they can override afterward.
    setLanguageState(c.defaultLanguage);
    writeStorage(STORAGE_KEYS.language, c.defaultLanguage);
    setCurrencyState(c.defaultCurrency);
    writeStorage(STORAGE_KEYS.currency, c.defaultCurrency);
  }, []);

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
    writeStorage(STORAGE_KEYS.currency, code);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    writeStorage(STORAGE_KEYS.language, lang);
  }, []);

  const value: LocaleState = {
    country,
    language,
    currency,
    hasResolved,
    setCountry,
    setCurrency,
    setLanguage,
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleState {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used inside <LocaleProvider>');
  }
  return ctx;
}

/** Convenience hook for just the language string. */
export function useLanguage(): Language {
  return useLocale().language;
}

/**
 * Pick the right value out of a {en, ar, ku} object based on current language.
 * Falls back to en if a translation is missing (defensive).
 */
export function useT<T>(strings: { en: T; ar: T; ku?: T }): T {
  const lang = useLanguage();
  return strings[lang] ?? strings.en;
}
