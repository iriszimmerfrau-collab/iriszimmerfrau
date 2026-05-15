import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Blog — AI Automation, Bookkeeping, GEO, SEO & Business Systems',
  description:
    'Practical guides on AI automation, AI phone answering, workflow automation, bookkeeping, QuickBooks, GEO, SEO, and CRM for small businesses.',
  path: '/blog',
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
