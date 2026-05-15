import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { siteConfig } from '@/data/site';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import JsonLd from '@/components/seo/JsonLd';

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Iris Zimmerfrau Inc. Blog',
    description:
      'Practical guides on AI automation, AI phone answering, workflow automation, bookkeeping, GEO, SEO, and CRM for small businesses.',
    url: `${siteConfig.url}/blog`,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    blogPost: sorted.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${siteConfig.url}/blog/${p.slug}`,
      datePublished: p.publishedAt,
      description: p.excerpt,
    })),
  };

  return (
    <>
      <JsonLd data={blogLd} />

      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Practical guides for small businesses</h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-200">
            How AI automation, AI phone answering, bookkeeping, CRM, GEO, and SEO actually work in real businesses — not generic advice.
          </p>
        </div>
      </section>

      {/* Posts list */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Latest posts" centered={false} />

          <ul className="mt-10 space-y-8">
            {sorted.map((post) => {
              const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              });
              return (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                      <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-semibold text-brand-700">
                        {post.category}
                      </span>
                      <time dateTime={post.publishedAt} className="text-gray-500">{publishedDate}</time>
                      <span aria-hidden="true" className="text-gray-300">·</span>
                      <span className="text-gray-500">{post.readingMinutes} min read</span>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-brand-700 sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-gray-600">{post.excerpt}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-brand-600 group-hover:text-brand-700">
                      Read post →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
