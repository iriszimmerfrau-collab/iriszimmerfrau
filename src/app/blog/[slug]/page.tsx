import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { createMetadata } from '@/lib/metadata';
import BlogPostTemplate from '@/components/blog/BlogPostTemplate';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostTemplate post={post} />;
}
