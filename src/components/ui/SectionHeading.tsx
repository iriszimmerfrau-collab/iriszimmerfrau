interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({ eyebrow, title, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}
