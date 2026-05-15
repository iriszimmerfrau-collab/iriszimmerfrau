import Link from 'next/link';
import type { BlogPost, ContentBlock } from '@/data/blog';
import { getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'tldr':
      return (
        <div className="my-8 rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">TL;DR</p>
          <p className="mt-2 text-base leading-relaxed text-brand-900">{block.text}</p>
        </div>
      );
    case 'h2':
      return (
        <h2
          id={block.id ?? slugify(block.text)}
          className="mt-12 scroll-mt-24 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
        >
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3
          id={block.id ?? slugify(block.text)}
          className="mt-8 scroll-mt-24 text-xl font-semibold text-gray-900"
        >
          {block.text}
        </h3>
      );
    case 'p':
      return <p className="mt-4 text-base leading-relaxed text-gray-700">{block.text}</p>;
    case 'p-html':
      return (
        <p
          className="mt-4 text-base leading-relaxed text-gray-700"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );
    case 'ul':
      return (
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-gray-700">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-base text-gray-700">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case 'quote':
      return (
        <blockquote className="my-8 border-l-4 border-gray-300 bg-gray-50 px-6 py-4 text-base italic text-gray-700">
          {block.text}
          {block.cite && <footer className="mt-2 text-sm not-italic text-gray-500">— {block.cite}</footer>}
        </blockquote>
      );
    case 'callout':
      const variantClasses = {
        info: 'border-brand-200 bg-brand-50 text-brand-900',
        warning: 'border-amber-200 bg-amber-50 text-amber-900',
        note: 'border-gray-200 bg-gray-50 text-gray-800',
      }[block.variant];
      return (
        <div className={`my-6 rounded-xl border-l-4 px-5 py-4 ${variantClasses}`}>
          {block.title && <p className="font-semibold">{block.title}</p>}
          <p className={block.title ? 'mt-1' : ''}>{block.text}</p>
        </div>
      );
    case 'table':
      return (
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-3 py-2 text-left font-semibold text-gray-900">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-gray-200">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-3 text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'faq':
      return (
        <div className="my-6 divide-y divide-gray-200 rounded-xl border border-gray-200">
          {block.items.map((item, i) => (
            <details key={i} className="group p-5">
              <summary className="cursor-pointer text-base font-medium text-gray-900 marker:hidden">
                {item.q}
              </summary>
              <p className="mt-3 text-base leading-relaxed text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      );
    case 'cta':
      return (
        <div className="my-10 rounded-xl bg-brand-950 px-6 py-8 text-center sm:px-10">
          <h3 className="text-xl font-bold text-white sm:text-2xl">{block.heading}</h3>
          <p className="mt-3 text-base text-brand-200">{block.text}</p>
          <Link
            href={block.buttonHref}
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            {block.buttonText}
          </Link>
        </div>
      );
    case 'related-services': {
      const services = block.slugs.map((s) => getServiceBySlug(s)).filter(Boolean);
      if (services.length === 0) return null;
      return (
        <div className="my-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-base font-semibold text-gray-900">
            {block.heading ?? 'Related services'}
          </h3>
          <ul className="mt-4 space-y-3">
            {services.map((s) => (
              <li key={s!.slug}>
                <Link
                  href={`/services/${s!.slug}`}
                  className="group flex items-start justify-between gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-white"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-brand-700">
                      {s!.shortTitle}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-600">{s!.description}</p>
                  </div>
                  <span className="shrink-0 text-sm text-brand-600">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    default:
      return null;
  }
}

export default function BlogPostTemplate({ post }: { post: BlogPost }) {
  const url = `${siteConfig.url}/blog/${post.slug}`;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/logo.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.keywords.join(', '),
    inLanguage: 'en',
    url,
    image: `${siteConfig.url}/og-default.svg`,
  };

  const faqLd = post.schemaFaqs && post.schemaFaqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.schemaFaqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article>
        {/* Header */}
        <header className="bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              {post.category}
            </p>
            <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{post.excerpt}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
              <time dateTime={post.publishedAt}>{publishedDate}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
              <span aria-hidden="true">·</span>
              <span>Iris Zimmerfrau Inc.</span>
            </div>
          </div>
        </header>

        <hr className="border-gray-200" />

        {/* Body */}
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </div>

        {/* Back to blog */}
        <section className="border-t border-gray-200 bg-gray-50 px-4 py-12 text-center sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            ← Back to all posts
          </Link>
        </section>
      </article>
    </>
  );
}
