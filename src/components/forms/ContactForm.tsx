'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site';
import { useT } from '@/lib/locale-context';
import { translations } from '@/translations';

const serviceOptionsEn = [
  'Custom AI Agents',
  'AI Phone Answering Agents',
  'Workflow Automation',
  'Bookkeeping',
  'QuickBooks Setup & Cleanup',
  'GEO Optimization',
  'SEO & Local Search',
  'Marketing Automation',
  'CRM & Sales Pipeline',
  'Website & Landing Pages',
  'Other',
];

const serviceOptionsAr = [
  'وكلاء ذكاء اصطناعي مخصصون',
  'وكلاء الرد الآلي بالذكاء الاصطناعي',
  'أتمتة سير العمل',
  'المحاسبة',
  'إعداد وتنظيف QuickBooks',
  'تحسين GEO',
  'SEO والبحث المحلي',
  'أتمتة التسويق',
  'إدارة علاقات العملاء',
  'المواقع وصفحات الهبوط',
  'أخرى',
];

export default function ContactForm() {
  const t = useT(translations);
  const isAr = t.nav.services === 'الخدمات';
  const serviceOptions = isAr ? serviceOptionsAr : serviceOptionsEn;
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name}${form.company ? ` (${form.company})` : ''}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t.contact.fields.name}</label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t.contact.fields.email}</label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">{t.contact.fields.company}</label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">{t.contact.fields.service}</label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:outline-none"
        >
          <option value="">{t.contact.fields.servicePlaceholder}</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t.contact.fields.message}</label>
        <textarea
          id="message"
          rows={4}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
      >
        {t.common.sendMessage}
      </button>
      <p className="text-xs text-gray-500">
        {t.contact.formNote}{' '}
        <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a>.
      </p>
    </form>
  );
}
