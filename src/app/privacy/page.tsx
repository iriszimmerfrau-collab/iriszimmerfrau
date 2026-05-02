import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  description: `Privacy policy for ${siteConfig.name}. Learn how we handle your information.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy' }]} />

      <article className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
              <p className="mt-3">When you use our website, contact forms, or scheduling links, we may collect the following information:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Name, email address, and company name submitted through contact forms</li>
                <li>Information provided when scheduling a meeting through our booking tool (Koalendar)</li>
                <li>Email correspondence when you contact us directly</li>
                <li>Basic website usage data if analytics tools are enabled (page views, referral source)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">How We Use Your Information</h2>
              <p className="mt-3">We use the information we collect to:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Respond to your inquiries and provide information about our services</li>
                <li>Schedule and conduct meetings</li>
                <li>Communicate about services you have expressed interest in</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Information Sharing</h2>
              <p className="mt-3">We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in operating our website and business (such as scheduling tools and email services), but only to the extent necessary to provide those services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Third-Party Services</h2>
              <p className="mt-3">Our website may use third-party services including:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Koalendar for meeting scheduling</li>
                <li>Analytics tools to understand website usage</li>
                <li>Hosting services (Vercel or similar)</li>
              </ul>
              <p className="mt-3">These services have their own privacy policies governing how they handle data.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
              <p className="mt-3">Our website may use cookies and similar technologies for basic functionality and analytics. You can control cookie settings through your browser preferences.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Data Security</h2>
              <p className="mt-3">We take reasonable measures to protect the information you provide. However, no method of transmission over the internet is completely secure.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Your Rights</h2>
              <p className="mt-3">You may request access to, correction of, or deletion of your personal information at any time by contacting us.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Changes to This Policy</h2>
              <p className="mt-3">We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
              <p className="mt-3">
                If you have questions about this privacy policy, contact us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
