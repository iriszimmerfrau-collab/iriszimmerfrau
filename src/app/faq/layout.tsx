import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'FAQ — Frequently Asked Questions',
  description:
    'Answers to common questions about AI automation, AI phone agents, bookkeeping, workflow automation, GEO, SEO, CRM setup, and marketing systems for small businesses. Available in English and Arabic.',
  path: '/faq',
});

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
