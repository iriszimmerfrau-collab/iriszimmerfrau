'use client';

import { useState } from 'react';
import type { FAQItem } from '@/types';

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200 rounded-xl border border-gray-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="pr-4 text-base font-medium text-gray-900">{item.question}</span>
            <svg
              className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5">
              <p className="text-base leading-relaxed text-gray-600">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
