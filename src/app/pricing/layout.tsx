import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Pricing — AI Automation, Bookkeeping & Business Systems Packages',
  description:
    'Explore pricing packages for AI automation, bookkeeping, workflow automation, GEO, SEO, CRM, and marketing systems. Monthly packages starting at $450/month and one-time services starting at $350. Available in USD, GBP, EGP, SAR, JOD, and IQD.',
  path: '/pricing',
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
