import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { careers, getRoleBySlug } from '@/data/careers';
import { createMetadata } from '@/lib/metadata';
import RolePageTemplate from '@/components/careers/RolePageTemplate';

export function generateStaticParams() {
  return careers.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) return {};
  return createMetadata({
    title: role.title,
    description: role.metaDescription,
    path: `/careers/${role.slug}`,
  });
}

export default async function RolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) notFound();

  return <RolePageTemplate role={role} />;
}
