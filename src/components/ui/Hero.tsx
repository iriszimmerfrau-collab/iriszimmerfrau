import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  centered?: boolean;
}

export default function Hero({ title, subtitle, primaryCTA, secondaryCTA, centered = true }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className={`mx-auto max-w-4xl ${centered ? 'text-center' : ''}`}>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-brand-200 sm:text-xl">
          {subtitle}
        </p>
        {(primaryCTA || secondaryCTA) && (
          <div className={`mt-10 flex flex-col gap-4 sm:flex-row ${centered ? 'sm:justify-center' : ''}`}>
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="rounded-lg bg-white px-8 py-3.5 text-center text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="rounded-lg border border-brand-400 px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-800"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
