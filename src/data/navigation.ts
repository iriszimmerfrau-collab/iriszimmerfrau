import type { NavItem } from '@/types';

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Custom AI Agents', href: '/services/custom-ai-agents' },
      { label: 'AI Phone Answering', href: '/services/ai-phone-answering-agents' },
      { label: 'Workflow Automation', href: '/services/workflow-automation' },
      { label: 'Bookkeeping', href: '/services/bookkeeping' },
      { label: 'QuickBooks Setup & Cleanup', href: '/services/quickbooks-setup-cleanup' },
      { label: 'GEO Optimization', href: '/services/generative-engine-optimization' },
      { label: 'SEO & Local Search', href: '/services/seo-local-search' },
      { label: 'Marketing Automation', href: '/services/marketing-automation' },
      { label: 'CRM & Sales Pipeline', href: '/services/crm-sales-pipeline' },
      { label: 'Website & Landing Pages', href: '/services/website-landing-pages' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  services: [
    { label: 'Custom AI Agents', href: '/services/custom-ai-agents' },
    { label: 'AI Phone Answering', href: '/services/ai-phone-answering-agents' },
    { label: 'Workflow Automation', href: '/services/workflow-automation' },
    { label: 'Bookkeeping', href: '/services/bookkeeping' },
    { label: 'QuickBooks Setup', href: '/services/quickbooks-setup-cleanup' },
    { label: 'GEO Optimization', href: '/services/generative-engine-optimization' },
    { label: 'SEO & Local Search', href: '/services/seo-local-search' },
    { label: 'Marketing Automation', href: '/services/marketing-automation' },
    { label: 'CRM & Sales Pipeline', href: '/services/crm-sales-pipeline' },
    { label: 'Websites & Landing Pages', href: '/services/website-landing-pages' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book a Meeting', href: '/book-meeting' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
