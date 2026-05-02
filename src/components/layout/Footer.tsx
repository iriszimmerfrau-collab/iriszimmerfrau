import Link from 'next/link';
import { footerNav } from '@/data/navigation';
import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-lg font-bold text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {siteConfig.tagline}
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-gray-400 transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
              <Link
                href="/book-meeting"
                className="inline-block text-brand-400 transition-colors hover:text-brand-300"
              >
                Schedule a meeting &rarr;
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
