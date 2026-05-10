import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Services — AI Automation, Bookkeeping & Business Systems',
  description:
    'Explore our full range of services: custom AI agents, AI phone answering, workflow automation, bookkeeping, GEO, SEO, marketing automation, CRM setup, and website buildout for small businesses.',
  path: '/services',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
