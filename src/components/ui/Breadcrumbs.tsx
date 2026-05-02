import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && (
                <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === allItems.length - 1 ? (
                <span className="font-medium text-gray-900">{item.label}</span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-brand-600">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
