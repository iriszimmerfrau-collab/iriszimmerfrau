import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Careers at Iris Zimmerfrau Inc.',
  description:
    'Open roles at Iris Zimmerfrau Inc. — we build AI automation, bookkeeping, CRM, and growth systems for small businesses. View current openings and apply.',
  path: '/careers',
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
