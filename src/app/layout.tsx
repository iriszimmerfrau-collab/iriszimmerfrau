import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import Analytics from '@/components/seo/Analytics';
import { LocaleProvider } from '@/lib/locale-context';
import { siteConfig } from '@/data/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-noto-arabic',
  weight: ['400', '500', '600', '700', '800'],
});

export const viewport: Viewport = {
  themeColor: '#5145CD',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: '%s | Iris Zimmerfrau Inc.',
    default: 'Iris Zimmerfrau Inc. — AI Automation, Bookkeeping & Business Systems for Small Businesses',
  },
  description:
    'Iris Zimmerfrau Inc. builds AI-powered business systems for small businesses: custom AI agents, AI phone answering, workflow automation, bookkeeping, QuickBooks setup, GEO, SEO, CRM, and marketing automation. Serving the United States, United Kingdom, Egypt, Saudi Arabia, Jordan, and Iraq.',
  applicationName: siteConfig.name,
  authors: [{ name: 'Iris Zimmerfrau', url: siteConfig.url }],
  creator: 'Iris Zimmerfrau',
  publisher: siteConfig.name,
  generator: 'Next.js',
  keywords: [
    'AI automation for small business',
    'custom AI agents',
    'AI phone answering agent',
    'AI receptionist',
    'workflow automation',
    'bookkeeping services',
    'QuickBooks setup',
    'QuickBooks cleanup',
    'generative engine optimization',
    'GEO optimization',
    'AI search optimization',
    'SEO services',
    'local SEO',
    'marketing automation',
    'CRM setup',
    'sales pipeline automation',
    'business operations consulting',
    'AI business systems',
    'small business automation',
    'Iris Zimmerfrau',
    'Iris Zimmerfrau Inc.',
    'أتمتة الذكاء الاصطناعي',
    'وكلاء ذكاء اصطناعي',
    'محاسبة',
    'أنظمة أعمال',
  ],
  category: 'business',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_EG', 'ar_SA', 'ar_JO', 'ar_IQ', 'en_GB'],
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: 'Iris Zimmerfrau Inc. — AI Automation & Business Systems',
    description:
      'AI automation, bookkeeping, workflow automation, AI phone answering, GEO, SEO, CRM, and marketing systems for small businesses. Available in English and Arabic for the US, UK, Egypt, Saudi Arabia, Jordan, and Iraq.',
    images: [
      {
        url: '/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'Iris Zimmerfrau Inc. — AI-Powered Business Systems for Small Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iris Zimmerfrau Inc. — AI Automation & Business Systems',
    description:
      'AI-powered business systems for small businesses. Automated operations. Smarter marketing. Cleaner books.',
    creator: '@iriszimmerfrau',
    images: ['/og-default.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  verification: {
    // Both are no-ops when the strings in src/data/site.ts are empty.
    google: siteConfig.googleSiteVerification || undefined,
    other: siteConfig.bingSiteVerification
      ? { 'msvalidate.01': siteConfig.bingSiteVerification }
      : undefined,
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    '@id': `${siteConfig.url}/#organization`,
  },
  inLanguage: ['en-US', 'en-GB', 'ar-EG', 'ar-SA', 'ar-JO', 'ar-IQ'],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: 'Iris Zimmerfrau Inc.',
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  foundingDate: '2026',
  founder: {
    '@type': 'Person',
    name: 'Iris Zimmerfrau',
    url: `${siteConfig.url}/personal-page/`,
    sameAs: [
      'https://www.linkedin.com/in/iris-zimmerfrau-92bb02174/',
      'https://github.com/iriszimmerfrau-collab',
      'https://independent.academia.edu/AminAlogaili',
    ],
  },
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/logo.svg`,
    width: 480,
    height: 360,
  },
  image: `${siteConfig.url}/og-default.svg`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: siteConfig.email,
    availableLanguage: ['English', 'Arabic'],
    areaServed: ['US', 'GB', 'EG', 'SA', 'JO', 'IQ'],
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'Jordan' },
    { '@type': 'Country', name: 'Iraq' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoArabic.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <JsonLd data={websiteSchema} />
        <JsonLd data={organizationSchema} />

        <LocaleProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>

        <Analytics />

        {/* Koalendar Popup Widget */}
        <Script
          id="koalendar-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.Koalendar = window.Koalendar || function(){(Koalendar.props = Koalendar.props || []).push(arguments)};`,
          }}
        />
        <Script
          src="https://koalendar.com/assets/widget.js"
          strategy="afterInteractive"
        />
        <Script
          id="koalendar-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `Koalendar('widget', {"url":"https://koalendar.com/e/meet-with-iris-zimmerfrau","text":"Schedule a meeting","shape":"rounded-full","backgroundColor":"#5145CD","textColor":"#FFFFFF","position":"bottom-right","icon":"calendar"});`,
          }}
        />
      </body>
    </html>
  );
}
