import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Book a Strategy Meeting',
  description:
    'Schedule a meeting to discuss AI automation, bookkeeping, workflow systems, AI phone agents, GEO, SEO, CRM setup, or marketing automation for your business.',
  path: '/book-meeting',
});

export default function BookMeetingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
