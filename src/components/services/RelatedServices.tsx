import ServiceCard from './ServiceCard';
import { getRelatedServices } from '@/data/services';

export default function RelatedServices({ slugs }: { slugs: string[] }) {
  const related = getRelatedServices(slugs);
  if (related.length === 0) return null;

  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-gray-900">Related Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
