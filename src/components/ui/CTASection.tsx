'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { useT } from '@/lib/locale-context';
import { translations } from '@/translations';

interface CTASectionProps {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  heading,
  text,
  buttonText,
  buttonHref = '/book-meeting',
}: CTASectionProps) {
  const t = useT(translations);

  return (
    <section className="bg-brand-950 px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading ?? t.cta.readyTitle}</h2>
        <p className="mt-4 text-lg text-brand-200">{text ?? t.cta.readyText}</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={buttonHref}
            className="rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
          >
            {buttonText ?? t.common.scheduleAMeeting}
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm font-medium text-brand-300 transition-colors hover:text-white"
          >
            {t.common.orEmail} {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
