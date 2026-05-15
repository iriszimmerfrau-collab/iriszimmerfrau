// All translatable UI strings in one place.
// Each entry has both 'en' and 'ar'. Add new keys at the bottom of each section.
//
// Usage:
//   const t = useT(translations);
//   t.nav.services  // → "Services" or "الخدمات"

interface Strings {
  common: { [key: string]: string };
  nav: { [key: string]: string };
  footer: { [key: string]: string };
  hero: { home: { title: string; subtitle: string } };
  home: {
    systemTitle: string;
    systemStack: string[];
    problemEyebrow: string;
    problemTitle: string;
    problemDescription: string;
    problems: { title: string; text: string }[];
    solutionEyebrow: string;
    solutionTitle: string;
    solutionDescription: string;
    solutionParagraph: string;
    solutionTrust: string;
    servicesEyebrow: string;
    servicesTitle: string;
    whyEyebrow: string;
    whyTitle: string;
    whyPoints: string[];
    pricingEyebrow: string;
    pricingTitle: string;
    pricingDescription: string;
    discoveryEyebrow: string;
    discoveryTitle: string;
    discoveryDescription: string;
    learnGeo: string;
    learnSeo: string;
    faqTitle: string;
    trustBullets: string[];
  };
  cta: { readyTitle: string; readyText: string };
  services: {
    heroTitle: string;
    heroSubtitle: string;
    categories: { key: string; label: string; description: string }[];
    servicePage: {
      whatsIncluded: string;
      featuresTitle: string;
      whoForTitle: string;
      benefitsTitle: string;
      useCasesEyebrow: string;
      useCasesTitle: string;
      processEyebrow: string;
      processTitle: string;
      faqTitle: string;
      relatedTitle: string;
    };
  };
  pricing: {
    heroTitle: string;
    heroSubtitle: string;
    monthlyEyebrow: string;
    monthlyTitle: string;
    monthlyDescription: string;
    oneTimeEyebrow: string;
    oneTimeTitle: string;
    oneTimeDescription: string;
    scopeNote: string;
    ctaTitle: string;
    ctaText: string;
    currencyNote: (countryName: string, currencyCode: string) => string;
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    missionEyebrow: string;
    missionTitle: string;
    missionParagraphs: string[];
    founderLink: string;
    valuesTitle: string;
    values: { title: string; description: string }[];
    whoTitle: string;
    whoList: string[];
    ctaTitle: string;
    ctaText: string;
  };
  contact: {
    heroTitle: string;
    heroSubtitle: string;
    emailLabel: string;
    meetingLabel: string;
    meetingLink: string;
    preferTalkTitle: string;
    preferTalkText: string;
    formTitle: string;
    formIntro: string;
    fields: {
      name: string;
      email: string;
      company: string;
      service: string;
      servicePlaceholder: string;
      message: string;
    };
    formNote: string;
  };
  bookMeeting: {
    heroTitle: string;
    heroSubtitle: string;
    preferEmail: string;
    stepsTitle: string;
    steps: { title: string; description: string }[];
    bestForTitle: string;
    bestFor: string[];
    readyTitle: string;
    readyText: string;
  };
  faq: { heroTitle: string; heroSubtitle: string; ctaTitle: string; ctaText: string };
  careers: {
    heroTitle: string;
    heroIntro: string;
    heroBias: string;
    nowHiring: string;
    openRolesTitle: string;
    openRolesOne: string;
    openRolesMany: (n: number) => string;
    viewRole: string;
    locationLabel: string;
    typeLabel: string;
    departmentLabel: string;
    notRightTitle: string;
    notRightText: string;
    emailUsLabel: string;
    compensation: string;
    applicationsGoTo: string;
    aboutTitle: string;
    whatYoullDo: string;
    evaluationTitle: string;
    dayOneTitle: string;
    fitYesTitle: string;
    fitNoTitle: string;
    neverAskTitle: string;
    reportConcerns: string;
    howToApplyTitle: string;
    noteLabel: string;
    whatsappOpensNote: string;
    backToAll: string;
  };
  notFound: { title: string; text: string };
}

export const translations: { en: Strings; ar: Strings } = {
  en: {
    common: {
      scheduleAMeeting: 'Schedule a Meeting',
      scheduleAMeetingShort: 'Schedule a Meeting',
      explorerServices: 'Explore Services',
      learnMore: 'Learn more',
      viewAll: 'View all',
      readMore: 'Read more',
      getInTouch: 'Get in Touch',
      orEmail: 'Or email',
      bookAStrategyMeeting: 'Book a Strategy Meeting',
      sendMessage: 'Send Message',
      goHome: 'Go Home',
      viewServices: 'View Services',
      viewPricing: 'View Pricing',
      viewFullPricing: 'View full pricing',
      viewAllFaqs: 'View all FAQs',
      mostPopular: 'Most Popular',
      startingPrice: 'Starting price',
      perMonth: '/month',
      tryIt: 'Try it',
      visitSite: 'Visit site',
      home: 'Home',
      backToServices: 'Back to services',
    },
    nav: {
      services: 'Services',
      pricing: 'Pricing',
      about: 'About',
      blog: 'Blog',
      faq: 'FAQ',
      careers: 'Careers',
      contact: 'Contact',
      bookMeeting: 'Book a Meeting',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    footer: {
      services: 'Services',
      company: 'Company',
      legal: 'Legal',
      copyright: 'All rights reserved.',
    },
    hero: {
      home: {
        title: 'AI-Powered Business Systems for Small Businesses',
        subtitle:
          'Iris Zimmerfrau Inc. helps businesses automate operations, answer more calls, organize bookkeeping, capture leads, and grow with custom AI agents, workflow automation, GEO, SEO, CRM, and marketing systems.',
      },
    },
    home: {
      systemTitle: 'The Business Operating System',
      systemStack: [
        'Lead Capture',
        'AI Phone Agent',
        'CRM',
        'Workflow Automation',
        'Bookkeeping',
        'Reporting',
        'GEO/SEO Growth',
      ],
      problemEyebrow: 'The Problem',
      problemTitle: 'Small Businesses Lose Money Every Day',
      problemDescription:
        'Businesses lose revenue because calls go unanswered, leads are not followed up with, books are messy, repetitive admin tasks waste hours, and their websites are invisible to both Google and AI search engines.',
      problems: [
        { title: 'Missed Calls', text: 'Unanswered calls mean lost revenue. Most callers will not leave a voicemail.' },
        { title: 'Slow Follow-Up', text: 'Leads go cold when follow-up takes hours instead of minutes.' },
        { title: 'Messy Books', text: 'Disorganized finances lead to bad decisions and stressful tax seasons.' },
        { title: 'Manual Admin', text: 'Hours spent on repetitive tasks that could be automated.' },
        { title: 'Invisible Online', text: 'Your business does not show up on Google, maps, or AI search engines.' },
        { title: 'Disconnected Tools', text: 'Data lives in spreadsheets, inboxes, and apps that do not talk to each other.' },
      ],
      solutionEyebrow: 'The Solution',
      solutionTitle: 'Connected Systems That Work For You',
      solutionDescription:
        'Iris Zimmerfrau Inc. builds connected systems that automate the back office, improve lead response, organize finances, and make your business easier to discover online.',
      solutionParagraph:
        'We help businesses answer more calls, capture more leads, automate repetitive work, organize finances, improve online visibility, and create scalable business systems using AI, automation, bookkeeping, CRM, GEO, SEO, and marketing infrastructure.',
      solutionTrust: 'Built for small businesses that need practical systems, not vague AI hype.',
      servicesEyebrow: 'What We Do',
      servicesTitle: 'Our Services',
      whyEyebrow: 'Why Iris Zimmerfrau Inc.',
      whyTitle: 'Why Choose Us',
      whyPoints: [
        'Practical business automation, not vague AI hype',
        'Built for small businesses and growing teams',
        'Systems designed around real workflows',
        'Combines AI, operations, bookkeeping, and marketing',
        'Clear implementation roadmap',
        'Conversion-focused, measurable outcomes',
      ],
      pricingEyebrow: 'Packages',
      pricingTitle: 'Pricing',
      pricingDescription: 'Monthly packages designed for different stages of growth. Pricing varies by scope.',
      discoveryEyebrow: 'Modern Discovery',
      discoveryTitle: 'Be Found by Humans, Search Engines, and AI',
      discoveryDescription:
        'Modern discovery includes Google, Google Maps, ChatGPT, Perplexity, Claude, Gemini, AI Overviews, and answer engines. We help businesses structure content so humans, search engines, and AI systems understand what you offer.',
      learnGeo: 'Learn about GEO',
      learnSeo: 'Learn about SEO',
      faqTitle: 'Frequently Asked Questions',
      trustBullets: [
        'Custom AI agents for operations and support',
        'AI phone answering agents for missed-call recovery',
        'Bookkeeping, QuickBooks setup, and financial reporting',
        'GEO, SEO, and marketing systems for better visibility',
        'CRM and workflow automation for scalable operations',
      ],
    },
    cta: {
      readyTitle: 'Ready to automate your business?',
      readyText:
        'Schedule a meeting to discuss AI automation, bookkeeping, workflow systems, and growth strategies for your business.',
    },
    services: {
      heroTitle: 'AI Automation, Bookkeeping & Business Systems',
      heroSubtitle:
        'Iris Zimmerfrau Inc. provides a full range of services to help small businesses automate operations, organize finances, capture more leads, and grow with AI-powered systems.',
      categories: [
        { key: 'ai', label: 'AI Automation', description: 'Custom AI agents, AI phone answering, and intelligent business automation.' },
        { key: 'finance', label: 'Finance Operations', description: 'Bookkeeping, QuickBooks setup, and financial reporting for small businesses.' },
        { key: 'growth', label: 'Growth Systems', description: 'GEO, SEO, marketing automation, and strategies to increase visibility and leads.' },
        { key: 'infrastructure', label: 'Business Infrastructure', description: 'Workflow automation, CRM setup, websites, and operational systems.' },
      ],
      servicePage: {
        whatsIncluded: 'What’s Included',
        featuresTitle: 'Features & Capabilities',
        whoForTitle: 'Who This Is For',
        benefitsTitle: 'Key Benefits',
        useCasesEyebrow: 'Example Workflows',
        useCasesTitle: 'How Businesses Use This',
        processEyebrow: 'Our Process',
        processTitle: 'How It Works',
        faqTitle: 'Frequently Asked Questions',
        relatedTitle: 'Related Services',
      },
    },
    pricing: {
      heroTitle: 'Pricing & Packages',
      heroSubtitle:
        'Monthly packages designed for different stages of growth, plus one-time services for specific needs. All pricing is starting pricing — final scope and investment are tailored to your business.',
      monthlyEyebrow: 'Monthly Packages',
      monthlyTitle: 'Ongoing Business Systems',
      monthlyDescription: 'Choose a package that fits your needs. Each includes ongoing support, optimization, and reporting.',
      oneTimeEyebrow: 'One-Time Services',
      oneTimeTitle: 'Project-Based Work',
      oneTimeDescription: 'Need a specific setup, audit, or buildout? These one-time services deliver focused results.',
      scopeNote:
        'Pricing varies by scope, complexity, and business needs. Schedule a meeting to discuss what package or project fits your situation.',
      ctaTitle: 'Not sure which package is right?',
      ctaText: 'Schedule a meeting and we will recommend the best fit for your business.',
      currencyNote: (countryName: string, currencyCode: string) =>
        `Prices shown in ${currencyCode} for ${countryName}. Change currency or country with the switcher above.`,
    },
    about: {
      heroTitle: 'About Iris Zimmerfrau Inc.',
      heroSubtitle:
        'We help small businesses build practical AI-powered operating systems. Automation, bookkeeping, AI agents, phone answering, marketing systems, CRM workflows, and search visibility strategy — integrated into one business infrastructure.',
      missionEyebrow: 'Our Mission',
      missionTitle: 'Systems That Save Time and Drive Growth',
      missionParagraphs: [
        'Iris Zimmerfrau Inc. is an AI automation, bookkeeping, and business systems consultancy founded in 2026 by Iris Zimmerfrau. We help small businesses build practical AI-powered operating systems that save time, capture leads, and clean up day-to-day operations.',
        'We combine AI automation, workflow integration, bookkeeping, CRM setup, marketing automation, and search visibility (both traditional SEO and Generative Engine Optimization) into connected systems that help businesses operate more efficiently and grow more predictably.',
        'Our approach is practical. We do not sell vague AI promises. We build systems around how your business actually works — then automate the repetitive parts, organize the financials, and make the business easier to discover online by both search engines and AI answer engines like ChatGPT, Perplexity, and Google AI Overviews.',
      ],
      founderLink: 'Read about Iris Zimmerfrau',
      valuesTitle: 'How We Work',
      values: [
        { title: 'Practical Implementation', description: 'We build systems that work in real business environments, not theoretical frameworks or pilot projects that never ship.' },
        { title: 'Small Business Focus', description: 'Every service is designed for the budgets, timelines, and operational realities of small businesses and growing teams.' },
        { title: 'AI Without Hype', description: 'We use AI where it creates real business value — saving time, capturing leads, and reducing manual work — not for the sake of using AI.' },
        { title: 'Operations-First Mindset', description: 'Technology decisions are driven by operational needs. We start with your workflows and build systems around how your business actually runs.' },
        { title: 'Integrated Systems', description: 'We connect AI, automation, bookkeeping, CRM, marketing, and search visibility into one cohesive infrastructure instead of disconnected point solutions.' },
        { title: 'Measurable Outcomes', description: 'Every engagement is focused on results you can measure — faster response times, cleaner books, more leads, better visibility, less manual work.' },
      ],
      whoTitle: 'Who We Help',
      whoList: [
        'Local service businesses',
        'Restaurants and hospitality',
        'Clinics and healthcare practices',
        'Consultants and coaches',
        'Agencies and creative firms',
        'Contractors and home services',
        'Freelancers and solo practitioners',
        'Founders and startups',
        'Online businesses',
        'Professional service providers',
      ],
      ctaTitle: 'Ready to build your business operating system?',
      ctaText: 'Schedule a meeting to discuss how we can help automate, organize, and grow your business.',
    },
    contact: {
      heroTitle: 'Get in Touch',
      heroSubtitle:
        'Have questions about AI automation, bookkeeping, workflow systems, or any of our services? Reach out directly or fill out the form and we will get back to you.',
      emailLabel: 'Email',
      meetingLabel: 'Schedule a Meeting',
      meetingLink: 'Book a strategy meeting',
      preferTalkTitle: 'Prefer to talk it through?',
      preferTalkText: 'Schedule a free strategy meeting to discuss your business goals and explore which services fit best.',
      formTitle: 'Send a Message',
      formIntro: 'Fill out the form below to get in touch.',
      fields: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        service: 'Service Interested In',
        servicePlaceholder: 'Select a service',
        message: 'Message',
      },
      formNote: 'This form opens your email client. You can also email us directly at',
    },
    bookMeeting: {
      heroTitle: 'Book a Strategy Meeting',
      heroSubtitle:
        'Schedule a meeting to discuss AI automation, bookkeeping, workflow systems, AI phone agents, GEO, SEO, CRM setup, or marketing automation for your business.',
      preferEmail: 'Prefer email? Reach out directly at',
      stepsTitle: 'What Happens on the Call',
      steps: [
        { title: 'Review your business goals', description: 'We start by understanding where your business is today and where you want it to go.' },
        { title: 'Identify manual workflows and missed opportunities', description: 'We look at where time is being wasted, leads are slipping, and finances are disorganized.' },
        { title: 'Recommend AI, automation, bookkeeping, CRM, GEO, or marketing systems', description: 'We match solutions to your actual business needs — no generic pitches.' },
        { title: 'Outline a practical implementation plan', description: 'You leave with a clear roadmap of what to build, in what order, and what results to expect.' },
      ],
      bestForTitle: 'This Meeting Is Best For',
      bestFor: [
        'Business owners who miss calls or leads',
        'Businesses with messy or disorganized operations',
        'Companies that need bookkeeping help',
        'Founders wanting AI agents for their business',
        'Service businesses wanting more online visibility',
        'Teams using too many disconnected tools',
      ],
      readyTitle: 'Ready to get started?',
      readyText: 'Book your strategy meeting today or reach out by email.',
    },
    faq: {
      heroTitle: 'Frequently Asked Questions',
      heroSubtitle:
        'Answers to common questions about our AI automation, bookkeeping, workflow, GEO, SEO, CRM, and marketing services.',
      ctaTitle: 'Have more questions?',
      ctaText: 'Schedule a meeting or email us directly and we will be happy to help.',
    },
    careers: {
      heroTitle: 'Careers at Iris Zimmerfrau Inc.',
      heroIntro:
        'We build AI-powered business systems for small businesses — custom AI agents, AI phone answering, workflow automation, bookkeeping, CRM, GEO, SEO, and marketing automation. We’re hiring people who care about real outcomes for real businesses and who want to operate inside a small, fast-moving team.',
      heroBias:
        'If you’re organized, self-motivated, and biased toward doing the work rather than talking about it, you’ll thrive here.',
      nowHiring: 'Now Hiring',
      openRolesTitle: 'Open Roles',
      openRolesOne: 'One role is currently open. More positions will be added as we grow.',
      openRolesMany: (n: number) => `${n} roles are currently open.`,
      viewRole: 'View role',
      locationLabel: 'Location',
      typeLabel: 'Type',
      departmentLabel: 'Department',
      notRightTitle: 'Not the right role for you?',
      notRightText:
        'We’re a growing team and we add roles regularly. Reach out if you think your skills fit the work we do.',
      emailUsLabel: 'Email',
      compensation: 'Compensation',
      applicationsGoTo: 'Applications go to Biri, Sales Development Manager.',
      aboutTitle: 'About the role',
      whatYoullDo: 'What you’ll do',
      evaluationTitle: 'The 7-day evaluation',
      dayOneTitle: 'Day-one materials',
      fitYesTitle: 'You’re a fit if',
      fitNoTitle: 'You’re not a fit if',
      neverAskTitle: 'What we will never ask for',
      reportConcerns:
        'If anyone claiming to represent Iris Zimmerfrau Inc. asks you for money or sensitive banking information, please report it to',
      howToApplyTitle: 'How to apply',
      noteLabel: 'Note',
      whatsappOpensNote: 'Opens WhatsApp with a pre-filled message. You can edit before sending.',
      backToAll: 'Back to all open roles',
    },
    notFound: {
      title: 'Page Not Found',
      text: 'The page you are looking for does not exist or has been moved.',
    },
  },
  ar: {
    common: {
      scheduleAMeeting: 'احجز اجتماعًا',
      scheduleAMeetingShort: 'احجز اجتماعًا',
      explorerServices: 'استعرض الخدمات',
      learnMore: 'اعرف المزيد',
      viewAll: 'عرض الكل',
      readMore: 'اقرأ المزيد',
      getInTouch: 'تواصل معنا',
      orEmail: 'أو راسلنا عبر',
      bookAStrategyMeeting: 'احجز اجتماعًا استراتيجيًا',
      sendMessage: 'أرسل الرسالة',
      goHome: 'العودة للرئيسية',
      viewServices: 'عرض الخدمات',
      viewPricing: 'عرض الأسعار',
      viewFullPricing: 'عرض الأسعار كاملة',
      viewAllFaqs: 'عرض كل الأسئلة الشائعة',
      mostPopular: 'الأكثر شعبية',
      startingPrice: 'السعر يبدأ من',
      perMonth: '/شهريًا',
      tryIt: 'جرّبها',
      visitSite: 'زر الموقع',
      home: 'الرئيسية',
      backToServices: 'العودة للخدمات',
    },
    nav: {
      services: 'الخدمات',
      pricing: 'الأسعار',
      about: 'من نحن',
      blog: 'المدونة',
      faq: 'الأسئلة الشائعة',
      careers: 'الوظائف',
      contact: 'اتصل بنا',
      bookMeeting: 'احجز اجتماعًا',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
    },
    footer: {
      services: 'الخدمات',
      company: 'الشركة',
      legal: 'القانونية',
      copyright: 'جميع الحقوق محفوظة.',
    },
    hero: {
      home: {
        title: 'أنظمة أعمال مدعومة بالذكاء الاصطناعي للشركات الصغيرة',
        subtitle:
          'تساعد شركة Iris Zimmerfrau Inc. الشركات على أتمتة العمليات والرد على المزيد من المكالمات وتنظيم الحسابات واستقطاب العملاء المحتملين والنمو من خلال وكلاء الذكاء الاصطناعي المخصصين، وأتمتة سير العمل، وتحسين محركات الذكاء الاصطناعي، وتحسين محركات البحث، وأنظمة إدارة علاقات العملاء، والتسويق.',
      },
    },
    home: {
      systemTitle: 'نظام تشغيل الأعمال',
      systemStack: [
        'استقطاب العملاء',
        'وكيل هاتف ذكاء اصطناعي',
        'إدارة علاقات العملاء',
        'أتمتة سير العمل',
        'المحاسبة',
        'التقارير',
        'نمو GEO/SEO',
      ],
      problemEyebrow: 'المشكلة',
      problemTitle: 'الشركات الصغيرة تخسر الإيرادات يوميًا',
      problemDescription:
        'تخسر الشركات الإيرادات لأن المكالمات تذهب دون رد، والعملاء المحتملون لا يتم متابعتهم، والحسابات في فوضى، والمهام الإدارية المتكررة تستهلك ساعات، وموقعها الإلكتروني غير ظاهر لكل من Google ومحركات البحث بالذكاء الاصطناعي.',
      problems: [
        { title: 'مكالمات فائتة', text: 'المكالمات بدون رد تعني خسارة في الإيرادات. معظم المتصلين لا يتركون رسالة صوتية.' },
        { title: 'متابعة بطيئة', text: 'العملاء المحتملون يفقدون الاهتمام عندما تستغرق المتابعة ساعات بدلًا من دقائق.' },
        { title: 'حسابات غير منظمة', text: 'الفوضى المالية تؤدي إلى قرارات سيئة ومواسم ضرائب مرهقة.' },
        { title: 'إدارة يدوية', text: 'ساعات تُهدر على مهام متكررة يمكن أتمتتها.' },
        { title: 'غير مرئي على الإنترنت', text: 'لا يظهر عملك على Google أو الخرائط أو محركات البحث بالذكاء الاصطناعي.' },
        { title: 'أدوات منفصلة', text: 'البيانات موجودة في جداول وبريد وتطبيقات لا تتحدث مع بعضها البعض.' },
      ],
      solutionEyebrow: 'الحل',
      solutionTitle: 'أنظمة متصلة تعمل لصالحك',
      solutionDescription:
        'تبني Iris Zimmerfrau Inc. أنظمة متصلة تؤتمت العمليات الإدارية، وتحسّن الاستجابة للعملاء، وتنظم الشؤون المالية، وتسهّل العثور على عملك إلكترونيًا.',
      solutionParagraph:
        'نساعد الشركات على الرد على المزيد من المكالمات، واستقطاب المزيد من العملاء، وأتمتة الأعمال المتكررة، وتنظيم الشؤون المالية، وتحسين الظهور على الإنترنت، وبناء أنظمة قابلة للتوسع باستخدام الذكاء الاصطناعي والأتمتة والمحاسبة وإدارة علاقات العملاء وGEO وSEO والبنية التسويقية.',
      solutionTrust: 'مصمم للشركات الصغيرة التي تحتاج أنظمة عملية، لا وعودًا غامضة عن الذكاء الاصطناعي.',
      servicesEyebrow: 'ماذا نقدم',
      servicesTitle: 'خدماتنا',
      whyEyebrow: 'لماذا Iris Zimmerfrau Inc.',
      whyTitle: 'لماذا تختارنا',
      whyPoints: [
        'أتمتة أعمال عملية وليست وعودًا مبهمة عن الذكاء الاصطناعي',
        'مصممة للشركات الصغيرة والفرق الناشئة',
        'أنظمة مبنية حول مسارات العمل الحقيقية',
        'تجمع بين الذكاء الاصطناعي والعمليات والمحاسبة والتسويق',
        'خارطة طريق تنفيذ واضحة',
        'تركيز على التحويل ونتائج قابلة للقياس',
      ],
      pricingEyebrow: 'الباقات',
      pricingTitle: 'الأسعار',
      pricingDescription: 'باقات شهرية مصممة لمراحل النمو المختلفة. تختلف الأسعار حسب النطاق.',
      discoveryEyebrow: 'الاكتشاف الحديث',
      discoveryTitle: 'كن مرئيًا للبشر ومحركات البحث والذكاء الاصطناعي',
      discoveryDescription:
        'الاكتشاف الحديث يشمل Google وGoogle Maps وChatGPT وPerplexity وClaude وGemini وAI Overviews ومحركات الإجابة. نساعد الشركات على هيكلة المحتوى ليفهمه البشر ومحركات البحث وأنظمة الذكاء الاصطناعي.',
      learnGeo: 'تعرّف على GEO',
      learnSeo: 'تعرّف على SEO',
      faqTitle: 'الأسئلة الشائعة',
      trustBullets: [
        'وكلاء ذكاء اصطناعي مخصصون للعمليات والدعم',
        'وكلاء هاتف بالذكاء الاصطناعي لاستعادة المكالمات الفائتة',
        'محاسبة وإعداد QuickBooks وتقارير مالية',
        'GEO وSEO وأنظمة تسويقية لظهور أفضل',
        'أنظمة إدارة علاقات العملاء وأتمتة سير العمل لعمليات قابلة للتوسع',
      ],
    },
    cta: {
      readyTitle: 'هل أنت جاهز لأتمتة عملك؟',
      readyText:
        'احجز اجتماعًا لمناقشة أتمتة الذكاء الاصطناعي والمحاسبة وأنظمة سير العمل واستراتيجيات النمو لشركتك.',
    },
    services: {
      heroTitle: 'أتمتة الذكاء الاصطناعي والمحاسبة وأنظمة الأعمال',
      heroSubtitle:
        'تقدم Iris Zimmerfrau Inc. مجموعة كاملة من الخدمات لمساعدة الشركات الصغيرة على أتمتة العمليات وتنظيم الشؤون المالية واستقطاب المزيد من العملاء والنمو عبر أنظمة مدعومة بالذكاء الاصطناعي.',
      categories: [
        { key: 'ai', label: 'أتمتة الذكاء الاصطناعي', description: 'وكلاء ذكاء اصطناعي مخصصون، الرد الآلي على المكالمات، وأتمتة أعمال ذكية.' },
        { key: 'finance', label: 'العمليات المالية', description: 'محاسبة وإعداد QuickBooks وتقارير مالية للشركات الصغيرة.' },
        { key: 'growth', label: 'أنظمة النمو', description: 'GEO وSEO وأتمتة التسويق واستراتيجيات لزيادة الظهور والعملاء.' },
        { key: 'infrastructure', label: 'البنية التحتية للأعمال', description: 'أتمتة سير العمل، إعداد إدارة علاقات العملاء، المواقع، والأنظمة التشغيلية.' },
      ],
      servicePage: {
        whatsIncluded: 'ما يشمل',
        featuresTitle: 'الميزات والإمكانات',
        whoForTitle: 'لمن هذه الخدمة',
        benefitsTitle: 'الفوائد الرئيسية',
        useCasesEyebrow: 'أمثلة على سير العمل',
        useCasesTitle: 'كيف تستخدم الشركات هذه الخدمة',
        processEyebrow: 'منهجيتنا',
        processTitle: 'كيف نعمل',
        faqTitle: 'الأسئلة الشائعة',
        relatedTitle: 'خدمات ذات صلة',
      },
    },
    pricing: {
      heroTitle: 'الأسعار والباقات',
      heroSubtitle:
        'باقات شهرية مصممة لمراحل النمو المختلفة، إضافة إلى خدمات لمرة واحدة لاحتياجات محددة. كل الأسعار هي أسعار ابتدائية — يُحدد النطاق والاستثمار النهائي حسب احتياجات شركتك.',
      monthlyEyebrow: 'الباقات الشهرية',
      monthlyTitle: 'أنظمة أعمال مستمرة',
      monthlyDescription: 'اختر الباقة التي تناسب احتياجاتك. كل باقة تشمل دعمًا مستمرًا وتحسينًا وتقارير.',
      oneTimeEyebrow: 'خدمات لمرة واحدة',
      oneTimeTitle: 'أعمال قائمة على المشاريع',
      oneTimeDescription: 'هل تحتاج إلى إعداد أو تدقيق أو بناء معين؟ هذه الخدمات لمرة واحدة تقدم نتائج محددة.',
      scopeNote:
        'تختلف الأسعار حسب النطاق والتعقيد واحتياجات العمل. احجز اجتماعًا لمناقشة الباقة أو المشروع المناسب لك.',
      ctaTitle: 'لست متأكدًا من الباقة المناسبة؟',
      ctaText: 'احجز اجتماعًا وسنوصي بالأنسب لشركتك.',
      currencyNote: (countryName: string, currencyCode: string) =>
        `الأسعار معروضة بـ ${currencyCode} لـ ${countryName}. يمكنك تغيير العملة أو الدولة من الأعلى.`,
    },
    about: {
      heroTitle: 'عن Iris Zimmerfrau Inc.',
      heroSubtitle:
        'نساعد الشركات الصغيرة على بناء أنظمة تشغيل عملية مدعومة بالذكاء الاصطناعي. الأتمتة، المحاسبة، وكلاء الذكاء الاصطناعي، الرد على الهاتف، أنظمة التسويق، إدارة علاقات العملاء، واستراتيجية الظهور في البحث — كلها متكاملة في بنية أعمال واحدة.',
      missionEyebrow: 'مهمتنا',
      missionTitle: 'أنظمة توفر الوقت وتحفز النمو',
      missionParagraphs: [
        'Iris Zimmerfrau Inc. هي استشارية متخصصة في أتمتة الذكاء الاصطناعي والمحاسبة وأنظمة الأعمال، تأسست في 2026 على يد Iris Zimmerfrau. نساعد الشركات الصغيرة على بناء أنظمة تشغيل عملية مدعومة بالذكاء الاصطناعي توفر الوقت وتستقطب العملاء وتنظم العمليات اليومية.',
        'نجمع بين أتمتة الذكاء الاصطناعي وتكامل سير العمل والمحاسبة وإعداد إدارة علاقات العملاء وأتمتة التسويق والظهور في البحث (سواء SEO التقليدي أو Generative Engine Optimization) في أنظمة متصلة تساعد الشركات على العمل بكفاءة أعلى والنمو بشكل أكثر قابلية للتنبؤ.',
        'منهجنا عملي. لا نبيع وعودًا غامضة عن الذكاء الاصطناعي. نبني الأنظمة حول طريقة عمل شركتك الفعلية — ثم نؤتمت الأجزاء المتكررة، وننظم الشؤون المالية، ونجعل الشركة أسهل للاكتشاف عبر محركات البحث ومحركات الإجابة بالذكاء الاصطناعي مثل ChatGPT وPerplexity وGoogle AI Overviews.',
      ],
      founderLink: 'اقرأ عن Iris Zimmerfrau',
      valuesTitle: 'كيف نعمل',
      values: [
        { title: 'تنفيذ عملي', description: 'نبني أنظمة تعمل في بيئات الأعمال الحقيقية، لا أطر نظرية أو مشاريع تجريبية لا ترى النور.' },
        { title: 'تركيز على الشركات الصغيرة', description: 'كل خدمة مصممة لميزانيات وجداول وواقع تشغيلي للشركات الصغيرة والفرق الناشئة.' },
        { title: 'ذكاء اصطناعي بلا مبالغة', description: 'نستخدم الذكاء الاصطناعي حيث يقدم قيمة فعلية — توفير الوقت، استقطاب العملاء، وتقليل العمل اليدوي — لا من أجل الذكاء الاصطناعي ذاته.' },
        { title: 'العمليات أولًا', description: 'قرارات التقنية تنبع من الاحتياجات التشغيلية. نبدأ من سير عملك ونبني الأنظمة حول طريقة تشغيلك الفعلية.' },
        { title: 'أنظمة متكاملة', description: 'نربط الذكاء الاصطناعي والأتمتة والمحاسبة وإدارة علاقات العملاء والتسويق والظهور في البحث في بنية واحدة متماسكة بدلًا من حلول متفرقة.' },
        { title: 'نتائج قابلة للقياس', description: 'كل تعاقد يركز على نتائج يمكن قياسها — استجابة أسرع، حسابات أنظف، عملاء أكثر، ظهور أفضل، عمل يدوي أقل.' },
      ],
      whoTitle: 'من نخدم',
      whoList: [
        'شركات الخدمات المحلية',
        'المطاعم والضيافة',
        'العيادات والممارسات الصحية',
        'الاستشاريون والمدربون',
        'الوكالات والشركات الإبداعية',
        'المقاولون وخدمات المنازل',
        'العاملون الحرون والممارسون الفرديون',
        'المؤسسون والشركات الناشئة',
        'الأعمال على الإنترنت',
        'مزودو الخدمات المهنية',
      ],
      ctaTitle: 'هل أنت مستعد لبناء نظام تشغيل أعمالك؟',
      ctaText: 'احجز اجتماعًا لمناقشة كيف يمكننا مساعدتك في الأتمتة والتنظيم والنمو.',
    },
    contact: {
      heroTitle: 'تواصل معنا',
      heroSubtitle:
        'هل لديك أسئلة عن أتمتة الذكاء الاصطناعي أو المحاسبة أو أنظمة سير العمل أو أي من خدماتنا؟ تواصل مباشرة أو املأ النموذج وسنرد عليك.',
      emailLabel: 'البريد الإلكتروني',
      meetingLabel: 'احجز اجتماعًا',
      meetingLink: 'احجز اجتماعًا استراتيجيًا',
      preferTalkTitle: 'تفضّل التحدث مباشرة؟',
      preferTalkText: 'احجز اجتماعًا استراتيجيًا مجانيًا لمناقشة أهداف عملك واستكشاف الخدمات الأنسب.',
      formTitle: 'أرسل رسالة',
      formIntro: 'املأ النموذج أدناه للتواصل.',
      fields: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        company: 'الشركة',
        service: 'الخدمة المطلوبة',
        servicePlaceholder: 'اختر خدمة',
        message: 'الرسالة',
      },
      formNote: 'يفتح هذا النموذج برنامج البريد الإلكتروني لديك. يمكنك أيضًا مراسلتنا مباشرة على',
    },
    bookMeeting: {
      heroTitle: 'احجز اجتماعًا استراتيجيًا',
      heroSubtitle:
        'احجز اجتماعًا لمناقشة أتمتة الذكاء الاصطناعي والمحاسبة وأنظمة سير العمل ووكلاء الهاتف الذكي وGEO وSEO وإعداد إدارة علاقات العملاء وأتمتة التسويق لشركتك.',
      preferEmail: 'تفضّل البريد الإلكتروني؟ تواصل مباشرة على',
      stepsTitle: 'ما يحدث في الاجتماع',
      steps: [
        { title: 'مراجعة أهداف عملك', description: 'نبدأ بفهم وضع شركتك الحالي وإلى أين تريد الوصول.' },
        { title: 'تحديد سير العمل اليدوي والفرص المفقودة', description: 'ننظر إلى أين يُهدر الوقت، وأين يفلت العملاء، وأين تكون الشؤون المالية في فوضى.' },
        { title: 'توصية بالذكاء الاصطناعي والأتمتة والمحاسبة وإدارة علاقات العملاء وGEO أو التسويق', description: 'نطابق الحلول مع احتياجات عملك الفعلية — لا عروض جاهزة.' },
        { title: 'وضع خطة تنفيذ عملية', description: 'تخرج بخارطة طريق واضحة لما يجب بناؤه، بأي ترتيب، وما النتائج المتوقعة.' },
      ],
      bestForTitle: 'هذا الاجتماع مناسب لـ',
      bestFor: [
        'أصحاب الأعمال الذين يفوّتون مكالمات أو عملاء',
        'الشركات ذات العمليات غير المنظمة',
        'الشركات التي تحتاج مساعدة في المحاسبة',
        'المؤسسون الراغبون بوكلاء ذكاء اصطناعي لشركاتهم',
        'شركات الخدمات الراغبة في ظهور أوسع على الإنترنت',
        'الفرق التي تستخدم أدوات منفصلة كثيرة',
      ],
      readyTitle: 'هل أنت جاهز للبدء؟',
      readyText: 'احجز اجتماعك الاستراتيجي اليوم أو تواصل عبر البريد.',
    },
    faq: {
      heroTitle: 'الأسئلة الشائعة',
      heroSubtitle:
        'إجابات لأسئلة شائعة عن خدماتنا في أتمتة الذكاء الاصطناعي والمحاسبة وسير العمل وGEO وSEO وإدارة علاقات العملاء والتسويق.',
      ctaTitle: 'لديك أسئلة أخرى؟',
      ctaText: 'احجز اجتماعًا أو راسلنا مباشرة وسنسعد بمساعدتك.',
    },
    careers: {
      heroTitle: 'الوظائف في Iris Zimmerfrau Inc.',
      heroIntro:
        'نبني أنظمة أعمال مدعومة بالذكاء الاصطناعي للشركات الصغيرة — وكلاء ذكاء اصطناعي مخصصون، الرد الآلي على المكالمات، أتمتة سير العمل، المحاسبة، إدارة علاقات العملاء، GEO، SEO، وأتمتة التسويق. نوظّف أشخاصًا يهتمون بالنتائج الحقيقية للشركات الحقيقية ويرغبون بالعمل ضمن فريق صغير سريع الحركة.',
      heroBias:
        'إذا كنت منظمًا، ومحفّزًا ذاتيًا، وتميل إلى تنفيذ العمل بدلًا من الحديث عنه — ستزدهر هنا.',
      nowHiring: 'وظائف مفتوحة',
      openRolesTitle: 'الوظائف المتاحة',
      openRolesOne: 'وظيفة واحدة مفتوحة حاليًا. ستضاف وظائف أخرى مع توسعنا.',
      openRolesMany: (n: number) => `يوجد ${n} وظائف مفتوحة حاليًا.`,
      viewRole: 'عرض الوظيفة',
      locationLabel: 'الموقع',
      typeLabel: 'نوع التوظيف',
      departmentLabel: 'القسم',
      notRightTitle: 'لا تجد الوظيفة المناسبة لك؟',
      notRightText:
        'نحن فريق متنامٍ ونضيف وظائف بانتظام. تواصل معنا إن كنت تعتقد أن مهاراتك تناسب طبيعة عملنا.',
      emailUsLabel: 'البريد الإلكتروني',
      compensation: 'الراتب والعمولة',
      applicationsGoTo: 'تذهب الطلبات إلى بيري، مدير تطوير المبيعات.',
      aboutTitle: 'عن الوظيفة',
      whatYoullDo: 'ماذا ستفعل',
      evaluationTitle: 'فترة التقييم — 7 أيام',
      dayOneTitle: 'ما ستحصل عليه من اليوم الأول',
      fitYesTitle: 'هذه الوظيفة مناسبة لك إذا',
      fitNoTitle: 'هذه الوظيفة غير مناسبة لك إذا',
      neverAskTitle: 'ما لن نطلبه منك أبدًا',
      reportConcerns:
        'إذا طلب منك أي شخص يدّعي أنه يمثل Iris Zimmerfrau Inc. مالًا أو معلومات بنكية حساسة، فالرجاء إبلاغنا عبر',
      howToApplyTitle: 'كيفية التقديم',
      noteLabel: 'ملاحظة',
      whatsappOpensNote: 'سيُفتح WhatsApp برسالة جاهزة. يمكنك تعديلها قبل الإرسال.',
      backToAll: 'العودة إلى جميع الوظائف',
    },
    notFound: {
      title: 'الصفحة غير موجودة',
      text: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
    },
  },
};

export type Translations = Strings;
