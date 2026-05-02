import Link from 'next/link';
import type { Service } from '@/types';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
    >
      <h3 className="text-base font-semibold text-gray-900 group-hover:text-brand-700">
        {service.shortTitle}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
        {service.description.length > 140
          ? service.description.slice(0, 140) + '...'
          : service.description}
      </p>
      <span className="mt-4 text-sm font-medium text-brand-600 group-hover:text-brand-700">
        Learn more &rarr;
      </span>
    </Link>
  );
}
