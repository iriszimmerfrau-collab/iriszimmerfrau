import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Iris Zimmerfrau Inc.',
  url: 'https://iriszf.com',
  email: 'iris@iriszf.com',
  description:
    'AI automation, bookkeeping, workflow automation, AI phone answering, GEO, SEO, CRM, and marketing systems for small businesses.',
  tagline: 'Automated operations. Smarter marketing. Cleaner books.',
  supportingMessage:
    'Iris Zimmerfrau Inc. builds AI-powered business systems that save time, capture leads, clean up operations, and help small businesses grow.',
  koalendarUrl: 'https://koalendar.com/e/meet-with-iris-zimmerfrau',

  // Analytics & search-console verification.
  // To activate: replace empty strings with your real IDs/tokens and redeploy.
  //
  // GA4: create a property at https://analytics.google.com → admin → data streams →
  //      copy the "Measurement ID" (format: G-XXXXXXXXXX) here.
  //
  // Search Console: https://search.google.com/search-console → add property →
  //      use the "HTML tag" method → copy the `content="..."` value here.
  //
  // Bing Webmaster: https://www.bing.com/webmasters → add site → HTML meta tag method.
  gaMeasurementId: '',
  googleSiteVerification: '',
  bingSiteVerification: '',
};
