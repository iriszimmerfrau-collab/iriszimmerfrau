// Job postings for the Careers section.
// Each role has both display content (rendered on the page) and structured
// metadata used to generate a valid schema.org JobPosting (for Google for Jobs).

export interface JobCompensationBullet {
  label: string;
  value: string;
}

export interface JobApplicationStep {
  label: string;
}

export interface JobRole {
  slug: string;
  title: string;
  shortTitle: string;
  /** One-line summary shown on the careers index card. */
  summary: string;
  /** Plain-text description (~1–2 paragraphs) used as page meta and JSON-LD description. */
  metaDescription: string;
  /** HTML description used inside JobPosting structured data. */
  schemaDescription: string;

  location: string;
  department: string;
  /** Display string, e.g. "Contract → Full-time after 7-day evaluation". */
  employmentTypeDisplay: string;
  /** schema.org values, e.g. ["CONTRACTOR", "FULL_TIME"]. */
  employmentTypeSchema: string[];

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

  applyUrl: string;
  applyButtonText: string;

  /** Date fields for JSON-LD. Update when re-posting. */
  datePosted: string; // YYYY-MM-DD
  validThrough: string; // ISO 8601 with timezone

  identifier: string;

  /** For applicantLocationRequirements. */
  applicantCountries: string[];

  baseSalary: {
    currency: string;
    value: number;
    unitText: 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
  };
}

export const careers: JobRole[] = [
  {
    slug: 'sales-development-representative',
    title: 'Sales Development Representative — Iraq & Kurdistan',
    shortTitle: 'Sales Development Representative',
    summary:
      'Source SMBs across Iraq and Kurdistan, book qualified discovery meetings with our team, and earn base salary plus 45% commission on every sale you originate.',
    metaDescription:
      'Remote SDR role for Arabic-speaking candidates in Iraq and Kurdistan. 650,000 IQD/month base after a 7-day evaluation, plus 45% commission on every sale. Apply via WhatsApp.',
    schemaDescription:
      "<p>Iris Zimmerfrau Inc. is hiring 25 Sales Development Representatives (SDRs) based in Iraq and Kurdistan to identify small and medium businesses that would benefit from AI automation, bookkeeping support, or growth infrastructure — and book qualified discovery meetings with our team.</p><p>You open the door; our closer takes the meeting. All scripts, templates, and a starting prospect database are provided. Compensation is 650,000 IQD/month base (after a 7-day evaluation) plus 45% commission on every sale you originate, paid monthly to your Qi account. Realistic earnings: $1,200–$2,500+ USD/month for active reps.</p><p>This role is for Arabic-speaking candidates. Applications are handled in Arabic via WhatsApp.</p>",

    location: 'Remote (Iraq or Kurdistan Region)',
    department: 'Sales',
    employmentTypeDisplay: 'Contract → Full-time after 7-day evaluation',
    employmentTypeSchema: ['CONTRACTOR', 'FULL_TIME'],

    compensation: [
      { label: 'Base salary', value: '650,000 IQD/month (after passing the 7-day evaluation)' },
      { label: 'Commission', value: '45% on each new sale you originate' },
      { label: 'Payment', value: 'Direct to your Qi account, monthly' },
      { label: 'Realistic earnings', value: '$1,200 – $2,500+ USD/month for active reps' },
    ],

    about:
      "You'll identify small and medium businesses in Iraq and Kurdistan that would benefit from AI automation, bookkeeping support, or growth infrastructure — and book qualified discovery meetings with our team. You open the door; our closer takes the meeting. All scripts, templates, and a starting prospect database are provided.",

    whatYoullDo: [
      'Source SMBs across Iraq and Kurdistan via WhatsApp, Instagram, Facebook, and Google Maps',
      'Send pre-written outreach messages and qualify responses',
      'Book qualified discovery calls',
      'Hand off engaged prospects to the closing manager',
      'Track activity in a shared CRM',
      'Coordinate daily with the Sales Development Manager',
    ],

    evaluation: {
      intro:
        'Before a full contract, every candidate completes a 7-day evaluation. Targets:',
      targets: [
        '5+ qualified meetings booked',
        '2 businesses closed on any package',
      ],
      passDescription:
        'If you pass → full contract with base + commission from day 8.',
      fallShortDescription:
        'If you fall short → you can continue commission-only. Performance is reviewed monthly, and base salary becomes available once production levels are met.',
    },

    dayOneMaterials: [
      'Detailed Arabic sales playbook',
      'All outreach templates and objection scripts',
      'Initial prospect database',
      'Service offerings reference manual (Arabic)',
      'Direct training from the Sales Development Manager',
    ],

    fitYes: [
      'Fluent in Arabic (Kurdish is a plus; English not required)',
      'Based in Iraq or Kurdistan with stable internet',
      'Available 2–4 hours daily',
      'Comfortable on WhatsApp, Instagram, and Facebook',
      'Organized, persistent, patient',
      'Self-motivated and resilient to rejection',
    ],

    fitNo: [
      'Looking for low-effort work — this is performance-based',
      'Uncomfortable with cold outreach',
      'Unable to commit consistent daily time',
    ],

    neverAskFor: [
      'No application fees',
      'No upfront purchase',
      'No banking documents or sensitive personal information',
    ],

    application: {
      intro:
        'WhatsApp +1 (415) 530-9336 (Biri, Sales Development Manager) with:',
      steps: [
        'Full name',
        'City (Erbil / Baghdad / Basra / etc.)',
        'Age + current school or work',
        'Why you want this role (2–3 sentences)',
        'Any prior sales or outreach experience (optional)',
        'How would you find 500 prospects in 7 days? (2–3 sentences)',
        'Your Qi account number (for direct payment)',
      ],
    },

    note:
      'This role is for Arabic-speaking candidates in Iraq and Kurdistan. The page is in English so applicants from any background can read it. Apply in Arabic via WhatsApp.',

    applyUrl: "https://wa.me/14155309336?text=Hi%2C%20I%27d%20like%20to%20apply%20for%20the%20SDR%20role",
    applyButtonText: 'Apply via WhatsApp',

    datePosted: '2026-05-10',
    validThrough: '2026-07-09T23:59:59+00:00',

    identifier: 'sdr-iraq-kurdistan-2026',

    applicantCountries: ['Iraq'],

    baseSalary: {
      currency: 'IQD',
      value: 650000,
      unitText: 'MONTH',
    },
  },
];

export function getRoleBySlug(slug: string): JobRole | undefined {
  return careers.find((r) => r.slug === slug);
}
