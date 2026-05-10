import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Contact — Get in Touch',
  description:
    'Contact Iris Zimmerfrau Inc. to discuss AI automation, bookkeeping, workflow automation, AI phone agents, GEO, SEO, CRM setup, or marketing automation for your business. Available in English and Arabic.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
