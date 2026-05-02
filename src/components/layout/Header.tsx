'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mainNav } from '@/data/navigation';
import { siteConfig } from '@/data/site';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-gray-900 sm:text-xl">
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.label}
                  <svg className="ml-1 inline-block h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full z-50 w-72 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                    <div className="mt-1 border-t border-gray-100 pt-1">
                      <Link
                        href="/services"
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-600 transition-colors hover:bg-brand-50"
                      >
                        View all services
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/book-meeting"
            className="ml-3 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Schedule a Meeting
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 pb-6 pt-4 lg:hidden" aria-label="Mobile navigation">
          {mainNav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 px-3">
            <Link
              href="/book-meeting"
              className="block w-full rounded-lg bg-brand-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-brand-600"
              onClick={() => setMobileOpen(false)}
            >
              Schedule a Meeting
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
