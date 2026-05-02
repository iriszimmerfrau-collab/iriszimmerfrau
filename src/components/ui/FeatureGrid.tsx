import type { Feature } from '@/types';

export default function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
