import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'About — AI Automation & Business Systems Consultancy',
  description:
    'Iris Zimmerfrau Inc. helps small businesses build practical AI-powered operating systems. Automation, bookkeeping, AI agents, marketing, CRM, GEO, and SEO — integrated into one business infrastructure. Serving the US, UK, Egypt, Saudi Arabia, Jordan, and Iraq.',
  path: '/about',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
