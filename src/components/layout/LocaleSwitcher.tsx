'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/lib/locale-context';
import {
  countries,
  currencies,
  getCountry,
  getCurrency,
  type CountryCode,
  type CurrencyCode,
  type Language,
} from '@/data/locales';

const languageOptions: { code: Language; label: { en: string; ar: string; ku: string }; native: string }[] = [
  { code: 'en', label: { en: 'English', ar: 'الإنجليزية', ku: 'ئینگلیزی' }, native: 'English' },
  { code: 'ar', label: { en: 'Arabic', ar: 'العربية', ku: 'عەرەبی' }, native: 'العربية' },
  { code: 'ku', label: { en: 'Kurdish', ar: 'الكردية', ku: 'کوردی' }, native: 'کوردی' },
];

export default function LocaleSwitcher() {
  const { country, language, currency, setCountry, setCurrency, setLanguage } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) {
      document.addEventListener('mousedown', onClick);
      return () => document.removeEventListener('mousedown', onClick);
    }
  }, [open]);

  const activeCountry = getCountry(country);
  const activeCurrency = getCurrency(currency);
  const activeLanguage = languageOptions.find((l) => l.code === language) ?? languageOptions[0];
  const isRtl = language === 'ar' || language === 'ku';

  const labels = {
    en: { country: 'Country', currency: 'Currency', language: 'Language', note: 'Currency and language can be changed independently of country.', aria: 'Change country, currency, and language' },
    ar: { country: 'الدولة', currency: 'العملة', language: 'اللغة', note: 'يمكنك تغيير العملة واللغة بشكل مستقل عن الدولة.', aria: 'تغيير الدولة والعملة واللغة' },
    ku: { country: 'وڵات', currency: 'دراو', language: 'زمان', note: 'دەتوانیت دراو و زمان جیا لە وڵات بگۆڕیت.', aria: 'گۆڕینی وڵات و دراو و زمان' },
  }[language];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        aria-label={labels.aria}
        aria-expanded={open}
      >
        <span className="text-base leading-none">{activeCountry.flag}</span>
        <span className="hidden sm:inline">{activeCountry.name[language]}</span>
        <span className="text-xs text-gray-500">·</span>
        <span className="text-xs">{activeCurrency.code}</span>
        <span className="text-xs text-gray-500">·</span>
        <span className="text-xs">{activeLanguage.native}</span>
        <svg
          className={`h-3.5 w-3.5 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute top-full z-50 mt-2 w-80 rounded-xl border border-gray-200 bg-white p-3 shadow-lg ${
            isRtl ? 'left-0' : 'right-0'
          }`}
        >
          <div className="mb-3">
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              {labels.country}
            </p>
            <div className="grid grid-cols-2 gap-1">
              {countries.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => setCountry(c.code as CountryCode)}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition-colors ${
                    c.code === country ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-base leading-none">{c.flag}</span>
                  <span className="truncate">{c.name[language]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-3">
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              {labels.currency}
            </p>
            <div className="grid grid-cols-3 gap-1">
              {currencies.map((cur) => (
                <button
                  key={cur.code}
                  type="button"
                  onClick={() => setCurrency(cur.code as CurrencyCode)}
                  className={`rounded-lg px-2 py-1.5 text-xs font-medium transition-colors ${
                    cur.code === currency ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  title={cur.name[language]}
                >
                  {cur.code}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 border-t border-gray-100 pt-3">
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              {labels.language}
            </p>
            <div className="grid grid-cols-3 gap-1">
              {languageOptions.map((opt) => (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => setLanguage(opt.code)}
                  className={`rounded-lg px-2 py-1.5 text-sm font-medium transition-colors ${
                    opt.code === language ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  title={opt.label[language]}
                  lang={opt.code === 'ku' ? 'ckb' : opt.code}
                >
                  {opt.native}
                </button>
              ))}
            </div>
            <p className="mt-2 px-2 text-[11px] text-gray-500">{labels.note}</p>
          </div>
        </div>
      )}
    </div>
  );
}
