import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/data/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: '%s | Iris Zimmerfrau Inc.',
    default: 'AI Automation & Business Systems for Small Businesses | Iris Zimmerfrau Inc.',
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

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
