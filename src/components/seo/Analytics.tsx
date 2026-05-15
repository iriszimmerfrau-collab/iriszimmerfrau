import Script from 'next/script';
import { siteConfig } from '@/data/site';

/**
 * Google Analytics 4. Renders nothing when gaMeasurementId is empty so the
 * site has zero analytics overhead until you actually configure GA.
 *
 * To activate: put your G-XXXXXXXXXX ID in src/data/site.ts and redeploy.
 */
export default function Analytics() {
  const id = siteConfig.gaMeasurementId;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}', { anonymize_ip: true });
          `,
        }}
      />
    </>
  );
}
