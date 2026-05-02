import Link from 'next/link';
import { siteConfig } from '@/data/site';

interface CTASectionProps {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  heading = 'Ready to automate your business?',
  text = 'Schedule a meeting to discuss AI automation, bookkeeping, workflow systems, and growth strategies for your business.',
  buttonText = 'Schedule a Meeting',
  buttonHref = '/book-meeting',
}: CTASectionProps) {
  return (
    <section className="bg-brand-950 px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
        <p className="mt-4 text-lg text-brand-200">{text}</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={buttonHref}
            className="rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
          >
            {buttonText}
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm font-medium text-brand-300 transition-colors hover:text-white"
          >
            Or email {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
