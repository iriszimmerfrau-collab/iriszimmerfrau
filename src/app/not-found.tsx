import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-6xl font-bold text-brand-500">404</p>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h1>
        <p className="mt-2 text-base text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
