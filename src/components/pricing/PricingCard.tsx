import Link from 'next/link';
import type { PricingPackage } from '@/types';
import { cn } from '@/lib/utils';

export default function PricingCard({ pkg }: { pkg: PricingPackage }) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-xl border p-8 shadow-sm',
        pkg.highlighted
          ? 'border-brand-500 bg-white ring-2 ring-brand-500'
          : 'border-gray-200 bg-white'
      )}
    >
      {pkg.highlighted && (
        <span className="mb-4 inline-block w-fit rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
      <p className="mt-2 text-sm text-gray-600">{pkg.tagline}</p>
      <div className="mt-6">
        <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
        {pkg.period && <span className="text-base text-gray-500">{pkg.period}</span>}
      </div>
      <p className="mt-1 text-xs text-gray-500">Starting price</p>
      <ul className="mt-8 flex-1 space-y-3">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={pkg.href}
        className={cn(
          'mt-8 block rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors',
          pkg.highlighted
            ? 'bg-brand-500 text-white hover:bg-brand-600'
            : 'border border-brand-500 text-brand-600 hover:bg-brand-50'
        )}
      >
        {pkg.cta}
      </Link>
    </div>
  );
}
