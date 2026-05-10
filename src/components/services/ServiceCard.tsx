'use client';

import Link from 'next/link';
import type { Service } from '@/types';
import { getServiceArBySlug } from '@/data/services.ar';
import { useT, useLocale } from '@/lib/locale-context';
import { translations } from '@/translations';

export default function ServiceCard({ service }: { service: Service }) {
  const t = useT(translations);
  const { language } = useLocale();
  const ar = language === 'ar' ? getServiceArBySlug(service.slug) : undefined;

  const shortTitle = ar?.shortTitle ?? service.shortTitle;
  const description = ar?.description ?? service.description;
  const isAr = language === 'ar';

  const trimmed = description.length > 140 ? description.slice(0, 140) + '...' : description;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
    >
      <h3 className="text-base font-semibold text-gray-900 group-hover:text-brand-700">
        {shortTitle}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{trimmed}</p>
      <span className="mt-4 text-sm font-medium text-brand-600 group-hover:text-brand-700">
        {t.common.learnMore} {isAr ? '←' : '→'}
      </span>
    </Link>
  );
}
