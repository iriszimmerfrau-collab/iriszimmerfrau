// Blog posts authored as structured content blocks. A single BlogPostTemplate
// component renders all blocks, so adding a new post = appending an entry here.
//
// Conventions:
// - Aim for 1,500+ words for "definitive guide" style posts (ranking sweet spot)
// - Use H2 to break sections, H3 for sub-points
// - Open with a "TL;DR" callout for AI-engine extraction
// - End every post with a related-services list + CTA
// - All posts are English by default; ship Arabic translations later as `.ar.ts`.

export type ContentBlock =
  | { type: 'tldr'; text: string }
  | { type: 'h2'; text: string; id?: string }
  | { type: 'h3'; text: string; id?: string }
  | { type: 'p'; text: string }
  | { type: 'p-html'; html: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'callout'; variant: 'info' | 'warning' | 'note'; title?: string; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'faq'; items: { q: string; a: string }[] }
  | { type: 'cta'; heading: string; text: string; buttonText: string; buttonHref: string }
  | { type: 'related-services'; slugs: string[]; heading?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** SEO meta description (~155 chars). */
  metaDescription: string;
  category: 'Guide' | 'Comparison' | 'Industry' | 'How-To' | 'Insight';
  publishedAt: string; // YYYY-MM-DD
  updatedAt?: string;
  readingMinutes: number;
  keywords: string[];
  /** Short FAQs surfaced in the page's FAQPage JSON-LD. Distinct from in-content FAQ blocks. */
  schemaFaqs?: { q: string; a: string }[];
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-geo-generative-engine-optimization',
    title: 'What Is GEO (Generative Engine Optimization)? A Definitive Guide for 2026',
    excerpt:
      'GEO is the practice of structuring your content so AI engines like ChatGPT, Perplexity, Claude, and Google AI Overviews understand, summarize, and cite your business. Here is what it actually means, how it differs from SEO, and what to do about it.',
    metaDescription:
      'GEO (Generative Engine Optimization) makes your business discoverable inside AI answers. Complete guide: definition, how it differs from SEO, and 12 tactics that work in 2026.',
    category: 'Guide',
    publishedAt: '2026-05-10',
    readingMinutes: 12,
    keywords: [
      'GEO',
      'generative engine optimization',
      'what is GEO',
      'GEO vs SEO',
      'AI search optimization',
      'ChatGPT SEO',
      'Perplexity SEO',
      'Google AI Overviews',
      'llms.txt',
    ],
    schemaFaqs: [
      {
        q: 'What is GEO?',
        a: 'GEO stands for Generative Engine Optimization. It is the practice of structuring your website and business information so AI engines like ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews can understand, summarize, and cite you when users ask questions.',
      },
      {
        q: 'How is GEO different from SEO?',
        a: 'SEO targets the ten blue links on traditional search engine results pages. GEO targets the answers AI engines generate. The two overlap heavily — most GEO work also helps SEO — but GEO additionally focuses on entity clarity, answer-ready phrasing, schema markup, and machine-readable summaries like llms.txt.',
      },
      {
        q: 'Does GEO replace SEO?',
        a: 'No. SEO is still where most search traffic originates. GEO complements SEO by also optimizing for the growing share of queries that end inside an AI answer rather than a search results page.',
      },
      {
        q: 'How long does GEO take to show results?',
        a: 'AI engines update their knowledge much faster than traditional search. Well-structured GEO work can start surfacing inside AI answers within 2 to 8 weeks, versus 3 to 6 months for typical SEO ranking improvements.',
      },
    ],
    content: [
      {
        type: 'tldr',
        text: "GEO (Generative Engine Optimization) is the practice of making your business legible to AI engines so they cite you in answers. It overlaps with SEO but emphasizes entity clarity, answer-ready content, schema markup, and machine-readable summary files like llms.txt. You don't replace SEO with GEO — you do both.",
      },
      {
        type: 'p',
        text: "Search is fragmenting. Ten years ago, almost every information query started in Google. Today, a meaningful share of those queries finish inside an AI engine — ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, Bing Copilot — without the user ever clicking a result. If your business depends on being found online, that's a new ranking surface you need to win.",
      },
      {
        type: 'p',
        text: 'GEO is the discipline that wins it. This guide covers what GEO actually is, how it differs from SEO, the twelve tactics that move the needle, and how to think about results.',
      },
      { type: 'h2', text: 'What does GEO stand for?', id: 'definition' },
      {
        type: 'p',
        text: 'GEO is short for Generative Engine Optimization. A generative engine is any system that generates synthesized answers from a corpus of training data plus, often, live web retrieval — including ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews, Bing Copilot, You.com, and Phind.',
      },
      {
        type: 'p',
        text: 'When one of those engines answers a user question, it picks and synthesizes from sources. GEO is the work that makes you one of those sources — and shapes how you are described when you are quoted.',
      },
      { type: 'h2', text: 'How GEO differs from SEO', id: 'geo-vs-seo' },
      {
        type: 'table',
        headers: ['Dimension', 'SEO', 'GEO'],
        rows: [
          ['Surface', 'Search engine results pages (SERPs)', 'AI-generated answers, chat replies, AI Overviews'],
          ['Currency', 'Rankings, clicks, organic traffic', 'Citations, mentions, recommendation share'],
          ['Discovery', 'Crawl + index + rank', 'Train + retrieve + cite'],
          ['Key signal', 'Backlinks, on-page relevance, page experience', 'Entity clarity, answer-ready text, schema, brand consistency'],
          ['Timeline', '3–6 months to rank competitive terms', '2–8 weeks to start appearing in answers'],
          ['Format that wins', 'Comprehensive long-form, clear topical authority', 'Structured Q&A, clean entity definitions, citations to your facts'],
        ],
      },
      {
        type: 'p',
        text: 'The overlap is substantial. Most things that help GEO also help SEO: clear headings, schema markup, answer-style FAQ blocks, comprehensive coverage of a topic. The differences are at the edges — and the edges matter.',
      },
      { type: 'h2', text: 'Why GEO matters now', id: 'why-now' },
      {
        type: 'ul',
        items: [
          "Google's AI Overviews already appear on a meaningful share of commercial queries and pull from a different ranking pool than the ten blue links beneath them.",
          'Perplexity, ChatGPT search, and Claude with web search are growing rapidly as discovery tools for buyers, especially in B2B and professional services.',
          'AI answers consolidate clicks. A buyer who used to read four results now reads one synthesized answer that mentions one or two businesses. You either are one of those one or two — or you are not.',
          "Schema markup and structured FAQs were already 'nice to have' for SEO. For GEO they are table stakes: AI engines preferentially cite structured, parseable content.",
        ],
      },
      { type: 'h2', text: 'The 12 GEO tactics that actually move the needle', id: 'tactics' },
      {
        type: 'p',
        text: 'Not every "GEO tip" you will read online actually changes anything. The list below is what we implement for clients and have seen produce measurable improvements in AI citation rates.',
      },
      { type: 'h3', text: '1. Entity-first brand positioning' },
      {
        type: 'p',
        text: 'AI engines build internal representations of entities — businesses, people, products, concepts. Your job is to make your entity clear: who you are, what you do, who you serve, where you operate, and how you differ from the obvious comparisons. Write it once, on your About page and your homepage and your llms.txt, in consistent phrasing. AI engines reward consistency.',
      },
      { type: 'h3', text: '2. Answer-ready content patterns' },
      {
        type: 'p',
        text: 'Lead with the answer. Every section starts with one sentence that resolves the question in the heading, then expands. AI engines extract the first 1–2 sentences after a heading more often than anything else on the page.',
      },
      { type: 'h3', text: '3. Structured FAQ blocks with FAQPage schema' },
      {
        type: 'p',
        text: 'A handful of well-written Q&As at the bottom of each page, marked up with FAQPage JSON-LD, dramatically increases the odds an AI engine will pull a verbatim quote from your site. The schema is not optional — it is the difference between extractable and not.',
      },
      { type: 'h3', text: '4. Schema markup across every page' },
      {
        type: 'p',
        text: 'Beyond FAQPage: Organization, ProfessionalService, LocalBusiness, Service, BreadcrumbList, AboutPage, Person, JobPosting. Each schema is a structured statement of fact that AI engines can ingest more reliably than parsing prose. Build them into your templates so every new page ships with the right markup automatically.',
      },
      { type: 'h3', text: '5. A canonical llms.txt' },
      {
        type: 'p',
        text: 'llms.txt is a plain-text summary of your site designed for LLM crawlers. Treat it like a press kit: name, one-line description, services with links, pricing summary, key Q&As, comparison statements, contact. AI engines that follow the llms.txt convention can build an accurate snapshot of your business in seconds rather than crawling and parsing everything.',
      },
      { type: 'h3', text: '6. Explicit AI crawler permissions in robots.txt' },
      {
        type: 'p',
        text: 'Add explicit Allow rules for GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, OAI-SearchBot, ChatGPT-User, Bytespider, Amazonbot, cohere-ai, Meta-ExternalAgent, and FacebookBot. Default robots configs often miss these or accidentally block them.',
      },
      { type: 'h3', text: '7. Comparison content' },
      {
        type: 'p',
        text: 'AI engines field a huge number of "X vs Y" queries. Publishing comparison pages — your service vs the obvious alternative, your category vs adjacent categories — gives engines clean material to cite when those queries come in.',
      },
      { type: 'h3', text: '8. Use-case and industry pages' },
      {
        type: 'p',
        text: 'Generic service pages compete with everyone in your category. Industry-specific pages ("AI automation for restaurants", "bookkeeping for home services") compete with far fewer pages and answer the long-tail "for [my industry]" qualifier AI engines often add when users ask broad questions.',
      },
      { type: 'h3', text: '9. Concise primary descriptions' },
      {
        type: 'p',
        text: 'Have a one-sentence, two-sentence, and four-sentence description of your business, used consistently across your site, llms.txt, meta description, and social profiles. When an AI engine summarizes you, it has to pick a length — give it three clean options.',
      },
      { type: 'h3', text: '10. Cite-able facts and data' },
      {
        type: 'p',
        text: 'AI engines like to cite sources for specific claims. If your content includes original numbers ("80% of voicemails go unreturned"), make those facts easy to extract and clearly attribute to you. This is how you become the linked source rather than an unattributed assumption.',
      },
      { type: 'h3', text: '11. Author and E-E-A-T signals' },
      {
        type: 'p',
        text: "Both Google and AI engines weight authority. Publish under named authors with verifiable credentials, link to LinkedIn and other professional profiles, mark up authors with Person schema, and connect to citations of your work elsewhere. Anonymous content ranks worse and gets cited less.",
      },
      { type: 'h3', text: '12. Semantic internal linking' },
      {
        type: 'p',
        text: 'Link every service page to the related services. Link every blog post to the related services it covers. Use descriptive anchor text. Internal link graphs are how engines understand topical depth — both for ranking and for deciding whether you are the right entity to cite.',
      },
      { type: 'h2', text: 'How to measure GEO', id: 'measurement' },
      {
        type: 'p',
        text: 'GEO measurement is less mature than SEO measurement. The most pragmatic approach today:',
      },
      {
        type: 'ol',
        items: [
          'Define a list of 10–20 buyer-intent queries in your category ("best AI receptionist for plumbers", "how does workflow automation compare to hiring an admin", etc.).',
          'Once a month, run each query in ChatGPT search, Perplexity, Claude with web, and Google AI Overviews. Record whether you appear, in what position, and how you are described.',
          'Track the description quality — does it match how you want to be described? If not, look at which page on your site the engine cited and improve the source content.',
          'Watch your Search Console impressions for your service keywords. Many GEO improvements also lift impressions on the underlying SERPs.',
          'For high-value queries, set a goal: "be cited in at least one of the four major engines within 90 days." Iterate from there.',
        ],
      },
      { type: 'h2', text: 'GEO and SEO together', id: 'together' },
      {
        type: 'p',
        text: 'The pragmatic stance is simple. Do good SEO — fast site, clear information architecture, comprehensive content, real backlinks, technical hygiene. Then layer GEO on top: entity clarity, schema everywhere, llms.txt, explicit AI crawler permissions, answer-ready phrasing, comparison and industry pages.',
      },
      {
        type: 'p',
        text: "If you are building a new site, build GEO and SEO into the foundation at the same time. Retrofitting GEO onto a site that lacks structured data is doable but slower than just doing it once correctly.",
      },
      { type: 'h2', text: 'Common questions', id: 'faq' },
      {
        type: 'faq',
        items: [
          {
            q: 'Will AI engines penalize me for over-optimizing?',
            a: 'Not in the way Google occasionally does for keyword stuffing. The current generation of generative engines reward clarity, structure, and consistency. The risk is being too clever — burying the answer in marketing prose so the engine never extracts it.',
          },
          {
            q: 'Do I need a separate GEO strategy if my SEO is already strong?',
            a: 'Probably not a separate strategy, but a few additions. If you already rank well, ensure you have FAQPage schema on every relevant page, an llms.txt at your root, explicit AI bot permissions in robots.txt, and consistent entity descriptions. Those four changes alone meaningfully move the citation needle.',
          },
          {
            q: 'How do I track which AI engine is sending me traffic?',
            a: 'Indirectly. Look at referrer data in your analytics for chat.openai.com, perplexity.ai, claude.ai, etc. Also watch for branded search spikes — when AI engines start citing you, branded searches rise as users follow up.',
          },
          {
            q: 'Is llms.txt actually used by any AI engine?',
            a: 'The convention is young and adoption is uneven, but Anthropic, OpenAI, Perplexity, and others have signaled support. Publishing one is cheap and the worst case is that it goes unread; the best case is it becomes a small but real advantage as adoption grows.',
          },
        ],
      },
      { type: 'h2', text: 'Where to start', id: 'start' },
      {
        type: 'p',
        text: "If you have a few hours: audit your home and service pages, write a one-sentence and four-sentence entity description, publish them consistently, add FAQPage schema to anywhere you already have FAQ blocks, and write a clean llms.txt. That is the highest-ROI GEO work you can do in one sitting.",
      },
      {
        type: 'p',
        text: 'If you have a few weeks: add comparison pages for the obvious "X vs Y" queries in your category, build out industry-specific landing pages, and audit your robots.txt for AI bot permissions.',
      },
      {
        type: 'related-services',
        slugs: ['generative-engine-optimization', 'seo-local-search', 'website-landing-pages'],
        heading: 'Services that put this into practice',
      },
      {
        type: 'cta',
        heading: 'Want a GEO audit on your site?',
        text: 'We will review how AI engines currently see your business and give you a prioritized list of fixes. No commitment.',
        buttonText: 'Schedule a meeting',
        buttonHref: '/book-meeting',
      },
    ],
  },
];

// ============================================================================
// AI agent vs chatbot comparison
// ============================================================================
blogPosts.push({
  slug: 'ai-agent-vs-chatbot-difference-for-business',
  title: 'AI Agent vs Chatbot: What’s the Actual Difference for a Small Business?',
  excerpt:
    'They look similar from the outside. They are very different inside. Here is what separates a real AI agent from a chatbot and which one your business needs.',
  metaDescription:
    'AI agent vs chatbot: real differences in capability, cost, and outcomes for small businesses. Side-by-side comparison plus which to pick for your use case.',
  category: 'Comparison',
  publishedAt: '2026-05-10',
  readingMinutes: 7,
  keywords: [
    'AI agent vs chatbot',
    'difference between AI agent and chatbot',
    'AI agent for business',
    'custom AI agent',
    'chatbot vs AI agent',
    'AI agent definition',
  ],
  schemaFaqs: [
    {
      q: 'What is the difference between an AI agent and a chatbot?',
      a: 'A chatbot follows scripted decision trees and answers predefined questions. An AI agent uses a language model to understand intent, plan multi-step actions, integrate with your business tools, and take real actions like booking meetings, qualifying leads, or updating a CRM. The chatbot reads from a script; the agent gets things done.',
    },
    {
      q: 'Are AI agents more expensive than chatbots?',
      a: 'Upfront setup is usually more expensive for an AI agent because it needs integration with your tools and tuning against your business knowledge. Ongoing costs depend on usage volume. For most small businesses the agent pays for itself within 1–3 months by handling work that previously required a human, while a basic chatbot rarely pays for itself at all.',
    },
    {
      q: 'Can a chatbot become an AI agent?',
      a: 'Not really. The underlying architecture is different. You can upgrade from a chatbot to an AI agent, but you are essentially building a new system that talks to the same channels (website widget, WhatsApp, etc.).',
    },
  ],
  content: [
    {
      type: 'tldr',
      text: "A chatbot follows scripts. An AI agent understands intent and takes real actions — booking meetings, qualifying leads, updating your CRM, searching documents. For anything beyond a basic FAQ deflector, you want an agent.",
    },
    {
      type: 'p',
      text: 'When someone says "AI agent" and someone else says "chatbot," they often mean the same thing to a small business owner. They are not the same thing. The architectural difference shows up directly in what each one can do for your business — and how much it costs.',
    },
    { type: 'h2', text: 'The short definitions' },
    {
      type: 'p',
      text: 'A chatbot is a rules-based or scripted system. It maps user inputs to predefined responses. If you ask something the script does not cover, it either falls back to a generic reply or routes to a human.',
    },
    {
      type: 'p',
      text: 'An AI agent is a system built around a large language model (LLM) that can understand intent in natural language, reason about multi-step tasks, integrate with your business tools, and take actions on your behalf. The LLM is the brain; the integrations are the hands.',
    },
    { type: 'h2', text: 'Side-by-side comparison' },
    {
      type: 'table',
      headers: ['Capability', 'Chatbot', 'AI agent'],
      rows: [
        ['Understands varied phrasing', 'Limited (keyword match)', 'Yes (semantic understanding)'],
        ['Handles questions outside the script', 'Falls back to "I don\'t know"', 'Reasons about new questions'],
        ['Books meetings end-to-end', 'No (typically a link)', 'Yes (checks calendar, books slot, confirms)'],
        ['Qualifies leads', 'Linear form', 'Conversational qualification, scoring'],
        ['Updates your CRM', 'No', 'Yes'],
        ['Searches internal documents', 'No', 'Yes (with RAG)'],
        ['Handles edge cases gracefully', 'Rigid', 'Adaptive'],
        ['Multi-step tasks', 'No', 'Yes ("book me a call AND send a confirmation AND notify the team")'],
        ['Setup cost', 'Low ($50–$300 templates)', 'Higher ($500–$5,000+ for custom)'],
        ['Ongoing usage cost', 'Flat subscription', 'Per-message or per-token (scales with usage)'],
        ['Maintenance', 'You write new scripts', 'You feed it new information; it reasons about it'],
      ],
    },
    { type: 'h2', text: 'When a chatbot is actually fine' },
    {
      type: 'ul',
      items: [
        'You have 5–10 frequently asked questions and you want to deflect them away from your inbox.',
        'Visitor questions follow predictable patterns ("what are your hours", "where are you located").',
        'You only need a glorified FAQ widget with a link to a contact form.',
        'Budget is the binding constraint and you cannot justify any setup investment.',
      ],
    },
    { type: 'h2', text: 'When you need an AI agent' },
    {
      type: 'ul',
      items: [
        'Customer questions are varied and context-dependent ("can you do my taxes if I have rental income in two states?").',
        'You want the system to book meetings, qualify leads, or create CRM entries — not just answer questions.',
        'Your business has accumulated internal knowledge (SOPs, pricing rules, service descriptions) that you want the system to draw on.',
        'You are spending hours per week on the same kinds of questions or tasks.',
        'You want the system to escalate intelligently — routing the right requests to the right person.',
      ],
    },
    { type: 'h2', text: 'How agents fail and how chatbots fail (differently)' },
    {
      type: 'p',
      text: 'Chatbots fail predictably: a user asks something the script does not cover, and the chatbot says some version of "I don\'t understand." Frustrating but obvious.',
    },
    {
      type: 'p',
      text: "AI agents fail less predictably. They can confidently produce a wrong answer (hallucination) or take an action you did not intend. This is why production agents need guardrails: limited tool access, output validation, escalation rules, and a human-in-the-loop for high-stakes decisions.",
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'The pragmatic rule',
      text: 'If a wrong answer or action has real consequences (financial, legal, medical), constrain the agent tightly or keep a human in the loop. If the worst case is a slightly off answer that gets corrected on a follow-up, the agent’s upside far outweighs the risk.',
    },
    { type: 'h2', text: 'Picking between the two' },
    {
      type: 'p',
      text: "Start with the work you actually want done. If the answer is “deflect FAQs from my inbox,” a good chatbot is fine. If the answer involves any of: book meetings, qualify leads, integrate with tools, search documents, or handle nuanced questions — you want an agent.",
    },
    {
      type: 'p',
      text: 'Most small businesses end up wanting an agent and not realizing it until they’ve already paid for a chatbot that does not move the needle. If you are not sure, write down the five things you want the system to do, then ask whether each one needs scripted answers or actual reasoning. If three or more need reasoning, you want an agent.',
    },
    {
      type: 'related-services',
      slugs: ['custom-ai-agents', 'ai-phone-answering-agents', 'workflow-automation'],
      heading: 'Services that put this into practice',
    },
    {
      type: 'cta',
      heading: 'Not sure which one fits your business?',
      text: 'Tell us what you want the system to do and we will tell you honestly whether an agent is worth the investment or if a chatbot is enough.',
      buttonText: 'Schedule a meeting',
      buttonHref: '/book-meeting',
    },
  ],
});

// ============================================================================
// AI phone answering vs voicemail comparison
// ============================================================================
blogPosts.push({
  slug: 'ai-phone-answering-vs-voicemail',
  title: 'AI Phone Answering vs Voicemail: Why Voicemail Is Costing You Customers',
  excerpt:
    'Most callers do not leave a voicemail. Most of those callers do not call back. AI phone answering closes that gap. Here is what changes when you switch.',
  metaDescription:
    'AI phone answering vs voicemail: why most missed calls never come back, what AI answering changes, and the cost of each missed call to a small business.',
  category: 'Comparison',
  publishedAt: '2026-05-10',
  readingMinutes: 6,
  keywords: [
    'AI phone answering vs voicemail',
    'AI receptionist',
    'missed call recovery',
    'voicemail conversion rate',
    'AI answering service',
    'virtual receptionist',
  ],
  schemaFaqs: [
    {
      q: 'How many callers leave a voicemail?',
      a: 'Industry estimates range from 15% to 30% — meaning 70–85% of callers who reach a voicemail hang up. Of those who do leave a message, only a fraction are reached on the call-back. AI phone answering captures the rest in real time.',
    },
    {
      q: 'Can an AI phone agent book appointments?',
      a: 'Yes. AI phone agents connect to your calendar, check availability, propose times, confirm bookings, and send confirmation messages — all during the call.',
    },
    {
      q: 'Will callers know it is an AI?',
      a: 'Modern voice models sound natural enough that many callers do not notice. We typically recommend disclosing that the system is an AI receptionist when asked. Honesty performs better than concealment over time.',
    },
  ],
  content: [
    {
      type: 'tldr',
      text: 'Most callers do not leave voicemails, and most callers who leave voicemails are not reached on the callback. AI phone answering catches the call in real time, qualifies the lead, and books the meeting — closing a leak that costs most service businesses thousands per month.',
    },
    {
      type: 'p',
      text: 'Voicemail is the default fallback for unanswered calls. It is also one of the most expensive defaults in a service business, because most callers will not use it.',
    },
    { type: 'h2', text: 'The voicemail math nobody runs' },
    {
      type: 'p',
      text: 'Take a typical small service business that gets 20 inbound calls a day. Maybe 30% of those calls go to voicemail because the team is on a job, on another call, or after hours. That is 6 missed calls a day.',
    },
    {
      type: 'p',
      text: 'Of those 6 callers, industry data suggests 1–2 will leave a voicemail. Of those 1–2 voicemails, maybe half result in a successful callback within 24 hours. So out of 6 missed calls, you successfully reconnect with 0–1 of them.',
    },
    {
      type: 'p',
      text: 'The other 5+ called your competitor, gave up, or postponed indefinitely. At a $400 average ticket and a 30% close rate, that is roughly $600–$1,200 in lost revenue per day. Annualized, that is between $150,000 and $300,000.',
    },
    { type: 'h2', text: 'What changes with AI phone answering' },
    {
      type: 'table',
      headers: ['Scenario', 'Voicemail', 'AI phone answering'],
      rows: [
        ['Call rings, no answer', 'Sends to voicemail', 'AI answers within 2–3 rings'],
        ['Caller hangs up', '70–85% of callers', 'Rare — most stay on'],
        ['Caller leaves a message', '15–30% leave one', 'Conversation happens in real time'],
        ['Caller details captured', 'Whatever they decide to say', 'Structured intake (name, phone, service, urgency)'],
        ['Appointment booked', 'No (requires callback)', 'Yes — directly into your calendar'],
        ['You get notified', 'When you check voicemail', 'Immediately, with full summary'],
        ['After-hours coverage', 'Same as during hours — voicemail', '24/7, same experience'],
        ['Cost per missed call', '$50–$200 in lost revenue', '$0.50–$2 per call in compute'],
      ],
    },
    { type: 'h2', text: 'What AI phone answering does not do (yet)' },
    {
      type: 'ul',
      items: [
        'Highly nuanced human conversations — the AI handles 80–90% of calls well; the rest you want escalated to a real person.',
        'Complex on-the-spot problem solving requiring deep domain expertise.',
        'Emotional support situations — escalate quickly.',
      ],
    },
    {
      type: 'p',
      text: 'The right comparison is not "is AI as good as a perfect human receptionist?" It is "is AI better than the voicemail you are using right now?" For 95% of small businesses, the answer is yes by a large margin.',
    },
    { type: 'h2', text: 'When you should not move off voicemail' },
    {
      type: 'ul',
      items: [
        'You get fewer than 1–2 inbound calls a day and they almost always reach you.',
        'Your callers expect to leave a voicemail and you have a perfect callback discipline.',
        'You answer 95%+ of calls in person already.',
      ],
    },
    {
      type: 'p',
      text: 'For everyone else: the cost of staying on voicemail is much larger than the cost of switching.',
    },
    {
      type: 'related-services',
      slugs: ['ai-phone-answering-agents', 'marketing-automation', 'crm-sales-pipeline'],
      heading: 'Services that put this into practice',
    },
    {
      type: 'cta',
      heading: 'Want to estimate what voicemail is costing you?',
      text: 'Tell us your call volume and average ticket and we will model your real annual loss. No commitment.',
      buttonText: 'Schedule a meeting',
      buttonHref: '/book-meeting',
    },
  ],
});

// ============================================================================
// Workato vs Zapier vs Make comparison
// ============================================================================
blogPosts.push({
  slug: 'workato-vs-zapier-vs-make-workflow-automation',
  title: 'Workato vs Zapier vs Make: Which Workflow Automation Tool Fits Your Business?',
  excerpt:
    'They all promise to connect your apps. They are not actually the same product. Here is when to pick each one — and when to use none of them.',
  metaDescription:
    'Workato vs Zapier vs Make: side-by-side for small businesses. Pricing, complexity, ideal use cases, and the honest tradeoffs for each automation platform.',
  category: 'Comparison',
  publishedAt: '2026-05-10',
  readingMinutes: 8,
  keywords: [
    'Workato vs Zapier',
    'Zapier vs Make',
    'workflow automation tools comparison',
    'best automation platform small business',
    'Workato alternatives',
    'Zapier alternatives',
  ],
  schemaFaqs: [
    {
      q: 'Which is cheapest: Workato, Zapier, or Make?',
      a: 'Make is cheapest for most small-business workflows. Zapier is usually middle. Workato is the most expensive but the most powerful at enterprise scale. For a small business, the cost ladder is typically Make < Zapier < Workato.',
    },
    {
      q: 'Which is easiest to learn?',
      a: 'Zapier has the gentlest learning curve and the best UI for non-technical users. Make is more powerful but visually complex. Workato is the most technical of the three.',
    },
    {
      q: 'Do I actually need any of these tools?',
      a: 'If you have 1–2 repetitive multi-app tasks you want to automate, yes. If you have one occasional task, a spreadsheet or a 30-minute manual process is probably fine. Tools cost money even when you are not using them.',
    },
  ],
  content: [
    {
      type: 'tldr',
      text: 'For small businesses: start with Zapier (easiest), graduate to Make when costs sting (more powerful), consider Workato only at real operational scale (enterprise pricing). The right answer is whichever tool you will actually use weekly.',
    },
    {
      type: 'p',
      text: 'The three names you will hear when you start looking at workflow automation are Zapier, Make (formerly Integromat), and Workato. They overlap heavily — all three connect apps, trigger workflows on events, and let you build multi-step automations without code. They also differ enough that picking the wrong one wastes real money.',
    },
    { type: 'h2', text: 'Side-by-side at a glance' },
    {
      type: 'table',
      headers: ['Dimension', 'Zapier', 'Make', 'Workato'],
      rows: [
        ['Best for', 'Solopreneurs, small teams, simple flows', 'Small–mid teams, more complex logic', 'Mid-market & enterprise ops'],
        ['Learning curve', 'Easy', 'Moderate', 'Steep'],
        ['Visual builder', 'Linear, simple', 'Spaghetti-friendly (good and bad)', 'Most professional'],
        ['Connectors', '6,000+', '2,000+', '1,200+ but deeper'],
        ['Free tier', '100 tasks/month', '1,000 ops/month', 'No free tier'],
        ['Entry-level paid', '~$20/mo', '~$10/mo', '$10K+/yr (custom)'],
        ['Branching/conditional logic', 'Limited on lower tiers', 'Excellent', 'Excellent'],
        ['Error handling', 'Basic', 'Granular', 'Enterprise-grade'],
        ['On-prem / hybrid', 'No', 'No', 'Yes'],
        ['Best non-feature', 'Massive integration library', 'Cost per workflow', 'Reliability at scale'],
      ],
    },
    { type: 'h2', text: 'When to pick Zapier' },
    {
      type: 'ul',
      items: [
        'You are non-technical and need the workflow built today.',
        'Your automations are linear: trigger → action → action. No complex branching.',
        'You need an integration with an obscure tool — Zapier almost always has it.',
        'You want the system to "just work" with minimal maintenance.',
      ],
    },
    { type: 'h2', text: 'When to pick Make' },
    {
      type: 'ul',
      items: [
        'Your workflows have multiple conditional paths ("if X, do A; if Y, do B").',
        'You run high volumes of tasks and Zapier\'s per-task pricing is becoming expensive.',
        'You want fine-grained control over errors, retries, and data transformation.',
        'You enjoy the visual builder — it is genuinely more capable than Zapier\'s.',
      ],
    },
    { type: 'h2', text: 'When to pick Workato' },
    {
      type: 'ul',
      items: [
        'You are running operations at enterprise scale (≥ 100 employees, mission-critical integrations).',
        'You need on-prem or hybrid deployment for compliance reasons.',
        'You have dedicated ops or IT staff who will own the automation infrastructure.',
        'Budget is not the binding constraint — reliability and depth are.',
      ],
    },
    { type: 'h2', text: 'When to skip all three' },
    {
      type: 'p',
      text: 'Sometimes the right answer is "do it manually" — if the work happens once a month and takes 10 minutes, automation infrastructure costs more than the time it saves. Other times the right answer is a custom-built workflow: when the logic is too business-specific for a templated tool, or when you need to embed it inside your own application.',
    },
    {
      type: 'p',
      text: 'The most expensive automation is the one you set up, get excited about, and then forget to maintain. Pick the simplest tool that solves your highest-frequency repetitive task. Use the savings to fund the next workflow.',
    },
    { type: 'h2', text: 'The pragmatic recommendation' },
    {
      type: 'p',
      text: "For most small businesses we work with, the order goes: start with Zapier for the first 2–3 workflows because it is fast and the cost is low at low volume; switch the noisy ones to Make once you are running enough tasks that Zapier's pricing scales uncomfortably; consider Workato when you have an actual ops or IT team and can justify the contract.",
    },
    {
      type: 'p',
      text: 'Whichever tool you pick, the actual value comes from designing the right workflows — not from the platform. A poorly designed Workato deployment is worse than a well-designed Zap.',
    },
    {
      type: 'related-services',
      slugs: ['workflow-automation', 'crm-sales-pipeline', 'marketing-automation'],
      heading: 'Services that put this into practice',
    },
    {
      type: 'cta',
      heading: 'Want help picking and setting up the right one?',
      text: 'We design, build, and maintain workflow automation on whichever platform fits your business — so you get the outcome without learning the tool yourself.',
      buttonText: 'Schedule a meeting',
      buttonHref: '/book-meeting',
    },
  ],
});

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRecentPosts(limit = 6): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}
