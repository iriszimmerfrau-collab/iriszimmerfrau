export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  category: 'ai' | 'finance' | 'growth' | 'infrastructure';
  icon: string;
  features: Feature[];
  whoIsItFor: string[];
  useCases: string[];
  benefits: string[];
  process: ProcessStep[];
  faqs: FAQItem[];
  relatedSlugs: string[];
}

export interface Feature {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPackage {
  name: string;
  tagline: string;
  price: string;
  period?: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  href: string;
}

export interface OneTimeService {
  name: string;
  price: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  url: string;
  email: string;
  description: string;
  tagline: string;
  supportingMessage: string;
  koalendarUrl: string;
}
