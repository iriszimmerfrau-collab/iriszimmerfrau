'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { useT } from '@/lib/locale-context';
import { translations } from '@/translations';

export default function Footer() {
  const t = useT(translations);
  const isAr = t.nav.services === 'الخدمات';

  const services = [
    { en: 'Custom AI Agents', ar: 'وكلاء ذكاء اصطناعي مخصصون', href: '/services/custom-ai-agents' },
    { en: 'AI Phone Answering', ar: 'الرد الآلي بالذكاء الاصطناعي', href: '/services/ai-phone-answering-agents' },
    { en: 'Workflow Automation', ar: 'أتمتة سير العمل', href: '/services/workflow-automation' },
    { en: 'Bookkeeping', ar: 'المحاسبة', href: '/services/bookkeeping' },
    { en: 'QuickBooks Setup', ar: 'إعداد QuickBooks', href: '/services/quickbooks-setup-cleanup' },
    { en: 'GEO Optimization', ar: 'تحسين GEO', href: '/services/generative-engine-optimization' },
    { en: 'SEO & Local Search', ar: 'SEO والبحث المحلي', href: '/services/seo-local-search' },
    { en: 'Marketing Automation', ar: 'أتمتة التسويق', href: '/services/marketing-automation' },
    { en: 'CRM & Sales Pipeline', ar: 'إدارة علاقات العملاء', href: '/services/crm-sales-pipeline' },
    { en: 'Websites & Landing Pages', ar: 'المواقع وصفحات الهبوط', href: '/services/website-landing-pages' },
  ];

  const company = [
    { label: t.nav.about, href: '/about' },
    { label: t.nav.pricing, href: '/pricing' },
    { label: t.nav.faq, href: '/faq' },
    { label: t.nav.contact, href: '/contact' },
    { label: t.nav.bookMeeting, href: '/book-meeting' },
  ];

  const legal = [
    { label: t.nav.privacy, href: '/privacy' },
    { label: t.nav.terms, href: '/terms' },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} ${t.common.home}`}>
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-sm font-black tracking-tight text-white"
                style={{ letterSpacing: '-0.04em' }}
              >
                ZF
              </span>
              <span className="text-base font-bold text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {isAr ? 'عمليات مؤتمتة. تسويق أذكى. حسابات أنظف.' : siteConfig.tagline}
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-gray-400 transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
              <Link
                href="/book-meeting"
                className="inline-block text-brand-400 transition-colors hover:text-brand-300"
              >
                {t.common.scheduleAMeeting} {isAr ? '←' : '→'}
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.services}</h3>
            <ul className="mt-4 space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {isAr ? item.ar : item.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.company}</h3>
            <ul className="mt-4 space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.legal}</h3>
            <ul className="mt-4 space-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {siteConfig.name}. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
