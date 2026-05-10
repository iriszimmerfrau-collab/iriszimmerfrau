'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { useT } from '@/lib/locale-context';
import { translations } from '@/translations';
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
  const t = useT(translations);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const mainNav = [
    { label: t.nav.services, href: '/services' },
    { label: t.nav.pricing, href: '/pricing' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.faq, href: '/faq' },
    { label: t.nav.contact, href: '/contact' },
  ];

  // Service sub-nav uses titles in current language — kept simple, links to slugs.
  // We can later swap labels for localized service shortTitles via a hook.
  const serviceLinks = [
    { en: 'Custom AI Agents', ar: 'وكلاء ذكاء اصطناعي مخصصون', href: '/services/custom-ai-agents' },
    { en: 'AI Phone Answering', ar: 'الرد الآلي بالذكاء الاصطناعي', href: '/services/ai-phone-answering-agents' },
    { en: 'Workflow Automation', ar: 'أتمتة سير العمل', href: '/services/workflow-automation' },
    { en: 'Bookkeeping', ar: 'المحاسبة', href: '/services/bookkeeping' },
    { en: 'QuickBooks Setup & Cleanup', ar: 'إعداد وتنظيف QuickBooks', href: '/services/quickbooks-setup-cleanup' },
    { en: 'GEO Optimization', ar: 'تحسين GEO', href: '/services/generative-engine-optimization' },
    { en: 'SEO & Local Search', ar: 'SEO والبحث المحلي', href: '/services/seo-local-search' },
    { en: 'Marketing Automation', ar: 'أتمتة التسويق', href: '/services/marketing-automation' },
    { en: 'CRM & Sales Pipeline', ar: 'إدارة علاقات العملاء', href: '/services/crm-sales-pipeline' },
    { en: 'Website & Landing Pages', ar: 'المواقع وصفحات الهبوط', href: '/services/website-landing-pages' },
  ];

  // Determine current language by reading t — slightly hacky but works.
  const isAr = t.nav.services === 'الخدمات';

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} ${t.common.home}`}>
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-sm font-black tracking-tight text-white"
            style={{ letterSpacing: '-0.04em' }}
          >
            ZF
          </span>
          <span className="text-base font-bold text-gray-900 sm:text-lg">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {mainNav.map((item, i) =>
            i === 0 ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.label}
                  <svg className="ms-1 inline-block h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {servicesOpen && (
                  <div className={`absolute top-full z-50 mt-0 w-72 rounded-xl border border-gray-200 bg-white p-2 shadow-lg ${isAr ? 'right-0' : 'left-0'}`}>
                    {serviceLinks.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        {isAr ? child.ar : child.en}
                      </Link>
                    ))}
                    <div className="mt-1 border-t border-gray-100 pt-1">
                      <Link
                        href="/services"
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-600 transition-colors hover:bg-brand-50"
                      >
                        {t.common.viewAll} {t.nav.services.toLowerCase()}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="ms-3">
            <LocaleSwitcher />
          </div>
          <Link
            href="/book-meeting"
            className="ms-3 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            {t.common.scheduleAMeeting}
          </Link>
        </nav>

        {/* Mobile: switcher + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher />
          <button
            type="button"
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? (isAr ? 'إغلاق القائمة' : 'Close menu') : (isAr ? 'فتح القائمة' : 'Open menu')}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 pb-6 pt-4 lg:hidden" aria-label="Mobile navigation">
          {mainNav.map((item, i) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {i === 0 && (
                <div className="ms-4">
                  {serviceLinks.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      onClick={() => setMobileOpen(false)}
                    >
                      {isAr ? child.ar : child.en}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 px-3">
            <Link
              href="/book-meeting"
              className="block w-full rounded-lg bg-brand-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-brand-600"
              onClick={() => setMobileOpen(false)}
            >
              {t.common.scheduleAMeeting}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
