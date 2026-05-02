import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = createMetadata({
  title: 'Terms of Service',
  description: `Terms of service for ${siteConfig.name}. Review the terms that govern use of our website and services.`,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Terms of Service', href: '/terms' }]} />

      <article className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
              <p className="mt-3">These terms of service govern your use of the {siteConfig.name} website and any services provided by {siteConfig.name}. By accessing this website, you agree to these terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Website Information</h2>
              <p className="mt-3">The information provided on this website is for general informational purposes. While we strive to keep information accurate and up to date, we make no warranties about the completeness, reliability, or accuracy of the content.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Services</h2>
              <p className="mt-3">All services provided by {siteConfig.name} require a custom scope of work. Pricing published on this website represents starting prices and may vary based on the specific requirements, complexity, and scope of each engagement.</p>
              <p className="mt-3">Services are provided under separate agreements between {siteConfig.name} and the client. These terms of service govern website usage, not service delivery.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">No Guarantees</h2>
              <p className="mt-3">{siteConfig.name} does not guarantee specific results from any service, including but not limited to:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Specific search engine rankings or positions</li>
                <li>Placement in AI-generated search results or answers</li>
                <li>Specific revenue increases or lead volumes</li>
                <li>Specific response rates from marketing campaigns</li>
              </ul>
              <p className="mt-3">Results depend on many factors outside our control, including market conditions, competition, and client implementation of recommendations.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Intellectual Property</h2>
              <p className="mt-3">All content on this website, including text, design, and structure, is the property of {siteConfig.name} and is protected by applicable intellectual property laws.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Third-Party Links</h2>
              <p className="mt-3">This website may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or terms of any third-party sites.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Limitation of Liability</h2>
              <p className="mt-3">{siteConfig.name} shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on information provided herein.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Changes to Terms</h2>
              <p className="mt-3">We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the website constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
              <p className="mt-3">
                Questions about these terms? Contact us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
