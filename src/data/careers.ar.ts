// Arabic translations of career role content. Keyed by slug.
// English remains the source of truth in src/data/careers.ts (and powers
// the schema.org JobPosting JSON-LD for SEO consistency). This file
// supplies the visible Arabic content when the locale is "ar".

import type { JobCompensationBullet } from './careers';

interface LocalizedRole {
  title: string;
  shortTitle: string;
  summary: string;
  location: string;
  department: string;
  employmentTypeDisplay: string;
  compensation: JobCompensationBullet[];
  about: string;
  whatYoullDo: string[];
  evaluation: {
    intro: string;
    targets: string[];
    passDescription: string;
    fallShortDescription: string;
  };
  dayOneMaterials: string[];
  fitYes: string[];
  fitNo: string[];
  neverAskFor: string[];
  application: {
    intro: string;
    steps: string[];
  };
  note?: string;
  applyButtonText: string;
  /** URL with an Arabic pre-filled WhatsApp message. */
  applyUrl: string;
}

export const careersAr: Record<string, LocalizedRole> = {
  'sales-development-representative': {
    title: 'مندوب تطوير مبيعات — العراق وكردستان',
    shortTitle: 'مندوب تطوير مبيعات',
    summary:
      'استهدف الشركات الصغيرة والمتوسطة في العراق وكردستان، احجز اجتماعات اكتشافية مؤهلة مع فريقنا، واحصل على راتب أساسي مع عمولة 45% على كل صفقة تنشئها.',

    location: 'عن بُعد (داخل العراق أو إقليم كردستان)',
    department: 'المبيعات',
    employmentTypeDisplay: 'عقد ⟵ توظيف كامل بعد تقييم 7 أيام',

    compensation: [
      { label: 'الراتب الأساسي', value: '650,000 دينار عراقي شهريًا (بعد اجتياز تقييم 7 أيام)' },
      { label: 'العمولة', value: '45% على كل صفقة جديدة تنشئها' },
      { label: 'الدفع', value: 'مباشرة إلى حساب Qi، شهريًا' },
      { label: 'الدخل الواقعي', value: '1,200 – 2,500+ دولار شهريًا للمندوبين النشطين' },
    ],

    about:
      'ستحدد الشركات الصغيرة والمتوسطة في العراق وكردستان التي قد تستفيد من أتمتة الذكاء الاصطناعي، أو دعم المحاسبة، أو البنية التحتية للنمو — وتحجز اجتماعات اكتشافية مؤهلة مع فريقنا. أنت تفتح الباب؛ مدير المبيعات يتولى الاجتماع. جميع السكربتات والنماذج وقاعدة بيانات أولية للعملاء المحتملين متوفرة لك.',

    whatYoullDo: [
      'استهداف الشركات الصغيرة والمتوسطة في العراق وكردستان عبر WhatsApp وInstagram وFacebook وGoogle Maps',
      'إرسال رسائل تواصل جاهزة وتأهيل الردود',
      'حجز مكالمات اكتشافية مؤهلة',
      'تسليم العملاء المحتملين المهتمين إلى مدير الإغلاق',
      'تسجيل النشاط في نظام CRM مشترك',
      'التنسيق اليومي مع مدير تطوير المبيعات',
    ],

    evaluation: {
      intro: 'قبل العقد الكامل، يجتاز كل مرشح فترة تقييم مدتها 7 أيام. الأهداف:',
      targets: ['حجز 5 اجتماعات مؤهلة أو أكثر', 'إغلاق صفقتين على أي باقة'],
      passDescription:
        'إذا اجتزت → عقد كامل مع راتب أساسي + عمولة بدءًا من اليوم الثامن.',
      fallShortDescription:
        'إذا لم تصل للهدف → يمكنك الاستمرار بنظام العمولة فقط. تتم مراجعة الأداء شهريًا، ويصبح الراتب الأساسي متاحًا فور الوصول إلى مستويات الإنتاج المطلوبة.',
    },

    dayOneMaterials: [
      'دليل مبيعات عربي مفصل',
      'جميع نماذج التواصل وسكربتات الرد على الاعتراضات',
      'قاعدة بيانات أولية للعملاء المحتملين',
      'دليل مرجعي للخدمات (بالعربية)',
      'تدريب مباشر من مدير تطوير المبيعات',
    ],

    fitYes: [
      'تتحدث العربية بطلاقة (الكردية ميزة إضافية؛ الإنجليزية غير مطلوبة)',
      'مقيم في العراق أو كردستان مع اتصال إنترنت مستقر',
      'متاح من 2 إلى 4 ساعات يوميًا',
      'مرتاح في استخدام WhatsApp وInstagram وFacebook',
      'منظم ومثابر وصبور',
      'محفّز ذاتيًا وقادر على تجاوز الرفض',
    ],

    fitNo: [
      'تبحث عن عمل بجهد منخفض — هذه الوظيفة قائمة على الأداء',
      'غير مرتاح مع التواصل البارد',
      'غير قادر على الالتزام بوقت يومي ثابت',
    ],

    neverAskFor: [
      'لا توجد رسوم تقديم',
      'لا يوجد شراء مسبق',
      'لا نطلب مستندات بنكية أو معلومات شخصية حساسة',
    ],

    application: {
      intro:
        'راسلنا على WhatsApp رقم +1 (415) 530-9336 (بيري، مدير تطوير المبيعات) مع:',
      steps: [
        'الاسم الكامل',
        'المدينة (أربيل / بغداد / البصرة / إلخ.)',
        'العمر + الدراسة الحالية أو العمل الحالي',
        'لماذا تريد هذه الوظيفة (2–3 جمل)',
        'أي خبرة سابقة في المبيعات أو التواصل (اختياري)',
        'كيف ستجد 500 عميل محتمل خلال 7 أيام؟ (2–3 جمل)',
        'رقم حساب Qi الخاص بك (للدفع المباشر)',
      ],
    },

    note: 'هذه الوظيفة مخصصة للمتحدثين بالعربية في العراق وكردستان. يمكنك التقديم بالعربية عبر WhatsApp.',

    applyButtonText: 'قدّم عبر WhatsApp',
    applyUrl:
      'https://wa.me/14155309336?text=' +
      encodeURIComponent('مرحبًا، أرغب بالتقديم لوظيفة مندوب تطوير المبيعات (SDR)'),
  },
};

export function getRoleArBySlug(slug: string) {
  return careersAr[slug];
}
