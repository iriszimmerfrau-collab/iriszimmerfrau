import type { PricingPackage, OneTimeService } from '@/types';

export const monthlyPackages: PricingPackage[] = [
  {
    name: 'Starter Systems',
    tagline: 'Best for small businesses that need basic operational support.',
    price: '$450',
    period: '/month',
    features: [
      'Monthly bookkeeping support',
      'Basic financial reporting',
      'One simple automation workflow',
      'Monthly strategy check-in',
    ],
    highlighted: false,
    cta: 'Schedule a Meeting',
    href: '/book-meeting',
  },
  {
    name: 'Growth Systems',
    tagline: 'Best for service businesses that want more leads and less admin.',
    price: '$950',
    period: '/month',
    features: [
      'Bookkeeping support',
      'CRM setup or support',
      'Marketing automation',
      'AI lead follow-up',
      'GEO/SEO recommendations',
      'Monthly reporting',
    ],
    highlighted: true,
    cta: 'Schedule a Meeting',
    href: '/book-meeting',
  },
  {
    name: 'Automation Pro',
    tagline: 'Best for businesses ready to automate operations seriously.',
    price: '$1,500',
    period: '/month',
    features: [
      'Custom AI agent',
      'AI phone answering agent setup',
      'Workflow automation',
      'CRM integration',
      'Bookkeeping support',
      'Monthly optimization',
    ],
    highlighted: false,
    cta: 'Schedule a Meeting',
    href: '/book-meeting',
  },
  {
    name: 'Full Business Systems',
    tagline: 'Best for businesses that want a done-for-you operating system.',
    price: '$2,500',
    period: '/month',
    features: [
      'AI agents',
      'AI phone receptionist',
      'CRM and sales pipeline',
      'Bookkeeping systems',
      'GEO/SEO',
      'Website or landing page support',
      'Marketing automation',
      'Reporting dashboard',
      'Ongoing consulting',
    ],
    highlighted: false,
    cta: 'Schedule a Meeting',
    href: '/book-meeting',
  },
];

export const oneTimeServices: OneTimeService[] = [
  { name: 'AI Business Operations Audit', price: '$350', description: 'Comprehensive review of your operations with automation and AI recommendations.' },
  { name: 'QuickBooks Setup & Cleanup', price: '$650', description: 'Full QuickBooks Online configuration, cleanup, and reporting setup.' },
  { name: 'Workflow Automation Setup', price: '$750', description: 'Design and build automated workflows connecting your business tools.' },
  { name: 'Custom AI Agent Setup', price: '$850', description: 'Build and deploy a custom AI agent for your website or internal operations.' },
  { name: 'GEO Optimization Audit', price: '$850', description: 'Audit and strategy for AI search engine visibility across ChatGPT, Perplexity, and more.' },
  { name: 'AI Phone Answering Agent Setup', price: '$950', description: 'Configure and deploy an AI phone answering agent for your business.' },
  { name: 'Website / Landing Page Buildout', price: '$1,200', description: 'Conversion-focused website or landing page with SEO, GEO, and booking integration.' },
];

// ----- Arabic translations -----

export const monthlyPackagesAr = [
  {
    name: 'الأنظمة الأولى',
    tagline: 'الأنسب للشركات الصغيرة التي تحتاج دعمًا تشغيليًا أساسيًا.',
    features: [
      'دعم محاسبي شهري',
      'تقارير مالية أساسية',
      'سير عمل مؤتمت بسيط',
      'لقاء استراتيجي شهري',
    ],
    cta: 'احجز اجتماعًا',
  },
  {
    name: 'أنظمة النمو',
    tagline: 'الأنسب لشركات الخدمات التي تريد عملاء أكثر وأعمال إدارية أقل.',
    features: [
      'دعم محاسبي',
      'إعداد أو دعم إدارة علاقات العملاء',
      'أتمتة التسويق',
      'متابعة العملاء بالذكاء الاصطناعي',
      'توصيات GEO/SEO',
      'تقارير شهرية',
    ],
    cta: 'احجز اجتماعًا',
  },
  {
    name: 'أتمتة احترافية',
    tagline: 'الأنسب للشركات الجاهزة لأتمتة العمليات بشكل جدي.',
    features: [
      'وكيل ذكاء اصطناعي مخصص',
      'إعداد وكيل هاتف بالذكاء الاصطناعي',
      'أتمتة سير العمل',
      'تكامل إدارة علاقات العملاء',
      'دعم محاسبي',
      'تحسين شهري',
    ],
    cta: 'احجز اجتماعًا',
  },
  {
    name: 'أنظمة أعمال متكاملة',
    tagline: 'الأنسب للشركات التي تريد نظام تشغيل جاهز بالكامل.',
    features: [
      'وكلاء ذكاء اصطناعي',
      'موظف استقبال هاتفي بالذكاء الاصطناعي',
      'إدارة علاقات العملاء وقمع المبيعات',
      'أنظمة محاسبية',
      'GEO/SEO',
      'دعم الموقع أو صفحات الهبوط',
      'أتمتة التسويق',
      'لوحة تقارير',
      'استشارات مستمرة',
    ],
    cta: 'احجز اجتماعًا',
  },
];

export const oneTimeServicesAr = [
  { name: 'تدقيق عمليات الأعمال بالذكاء الاصطناعي', description: 'مراجعة شاملة لعملياتك مع توصيات الأتمتة والذكاء الاصطناعي.' },
  { name: 'إعداد وتنظيف QuickBooks', description: 'إعداد كامل لـ QuickBooks Online وتنظيف وإعداد التقارير.' },
  { name: 'إعداد أتمتة سير العمل', description: 'تصميم وبناء سير عمل مؤتمت يربط أدوات عملك.' },
  { name: 'إعداد وكيل ذكاء اصطناعي مخصص', description: 'بناء ونشر وكيل ذكاء اصطناعي مخصص لموقعك أو لعملياتك الداخلية.' },
  { name: 'تدقيق تحسين GEO', description: 'تدقيق واستراتيجية للظهور في محركات البحث بالذكاء الاصطناعي مثل ChatGPT وPerplexity وغيرها.' },
  { name: 'إعداد وكيل هاتف بالذكاء الاصطناعي', description: 'إعداد ونشر وكيل هاتف بالذكاء الاصطناعي لشركتك.' },
  { name: 'بناء موقع / صفحة هبوط', description: 'موقع أو صفحة هبوط تركز على التحويل مع SEO وGEO وتكامل الحجز.' },
];

// ----- Kurdish (Sorani) translations -----

export const monthlyPackagesKu = [
  {
    name: 'سیستەمی دەستپێک',
    tagline: 'گونجاوترین بۆ بزنسە بچووکەکان کە پێویستیان بە پشتگیری بنەڕەتیە.',
    features: [
      'پشتگیری ژمێریاری مانگانە',
      'ڕاپۆرتی دارایی بنەڕەتی',
      'یەک شێوازی ئۆتۆماتیکی سادە',
      'چاوپێکەوتنی ستراتیژی مانگانە',
    ],
    cta: 'چاوپێکەوتن ڕێکبخە',
  },
  {
    name: 'سیستەمی گەشە',
    tagline: 'گونجاوترین بۆ بزنسە خزمەتگوزاریەکان کە کڕیاری زیاتر و کاری ئیداری کەمتر دەویست.',
    features: [
      'پشتگیری ژمێریاری',
      'ڕێکخستن یان پشتگیری CRM',
      'ئۆتۆماتیکی بازاڕکردن',
      'شوێنپێکەوتنی کڕیار بە AI',
      'پێشنیارەکانی GEO/SEO',
      'ڕاپۆرتی مانگانە',
    ],
    cta: 'چاوپێکەوتن ڕێکبخە',
  },
  {
    name: 'ئۆتۆماتیکی پیشەیی',
    tagline: 'گونجاوترین بۆ بزنسە ئامادەکان بۆ ئۆتۆماتیککردنی کارەکان بە شێوەی جیددی.',
    features: [
      'بریکاری تایبەتی AI',
      'ڕێکخستنی بریکاری وەڵامدانەوەی تەلەفۆن بە AI',
      'ئۆتۆماتیکی شێوازی کار',
      'یەکگرتنی CRM',
      'پشتگیری ژمێریاری',
      'باشترکردنی مانگانە',
    ],
    cta: 'چاوپێکەوتن ڕێکبخە',
  },
  {
    name: 'سیستەمی تەواوەتی بزنس',
    tagline: 'گونجاوترین بۆ بزنسە ئەو شیرکەتانەی کە سیستەمی کارپێکردنی تەواو ئامادە دەخوازن.',
    features: [
      'بریکارەکانی AI',
      'پێشوازیکاری تەلەفۆنی AI',
      'CRM و لۆلەی فرۆشتن',
      'سیستەمی ژمێریاری',
      'GEO/SEO',
      'پشتگیری ماڵپەڕ یان پەڕەی هاتنە خوارەوە',
      'ئۆتۆماتیکی بازاڕکردن',
      'تابلۆی ڕاپۆرت',
      'ڕاوێژکاری بەردەوام',
    ],
    cta: 'چاوپێکەوتن ڕێکبخە',
  },
];

export const oneTimeServicesKu = [
  { name: 'شیکاری کارەکانی بزنس بە AI', description: 'پێداچوونەوەی تەواوەتی بۆ کارەکانت لەگەڵ پێشنیاری ئۆتۆماتیک و AI.' },
  { name: 'ڕێکخستن و پاککردنەوەی QuickBooks', description: 'ڕێکخستنی تەواوەتی QuickBooks Online و پاککردنەوە و ڕێکخستنی ڕاپۆرتەکان.' },
  { name: 'ڕێکخستنی ئۆتۆماتیکی شێوازی کار', description: 'دیزاینکردن و دروستکردنی شێوازی کاری ئۆتۆماتیک کە ئامرازەکانی بزنسەکەت ببەستێتەوە.' },
  { name: 'ڕێکخستنی بریکاری تایبەتی AI', description: 'دروستکردن و نیشاندانی بریکارێکی تایبەتی AI بۆ ماڵپەڕەکەت یان کارە ناوخۆییەکانت.' },
  { name: 'شیکاری باشترکردنی GEO', description: 'شیکاری و ستراتیژ بۆ دەرکەوتن لە مەکینەکانی گەڕانی AI وەکو ChatGPT و Perplexity و هیتر.' },
  { name: 'ڕێکخستنی بریکاری تەلەفۆنی AI', description: 'ڕێکخستن و نیشاندانی بریکاری تەلەفۆنی AI بۆ بزنسەکەت.' },
  { name: 'دروستکردنی ماڵپەڕ / پەڕەی هاتنە خوارەوە', description: 'ماڵپەڕ یان پەڕەی هاتنە خوارەوەی فۆکسکراو لەسەر گۆڕین لەگەڵ SEO و GEO و یەکگرتنی چاوپێکەوتن.' },
];
