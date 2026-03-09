export type Tier = {
  name: string;
  badge?: string;       // e.g. "Most Popular"
  forWho: string;       // "For solo creators and small businesses"
  tagline: string;      // One punchy line
  features: string[];   // What's included
  featured?: boolean;
};

export type FaqItem = {
  q: string;
  a: string;
};

export const tiers: Tier[] = [
  {
    name: "Starter",
    forWho: "Solo creators and small businesses",
    tagline: "Get your brand online and performing.",
    features: [
      "AI-powered ad creative for Meta & TikTok",
      "Monthly social media content package",
      "Basic performance report",
      "Email support",
      "1 active project at a time",
    ],
  },
  {
    name: "Growth",
    forWho: "SMBs and e-commerce brands scaling up",
    tagline: "More output. More channels. More results.",
    features: [
      "Everything in Starter",
      "Social media management",
      "Video and motion content",
      "1 brand refresh per month",
      "2 active projects at a time",
      "Monthly strategy check-in",
    ],
  },
  {
    name: "Scale",
    forWho: "Startups and entertainment labels",
    tagline: "Full creative stack. Built for velocity.",
    features: [
      "Full creative service access",
      "Ads, content, video, and web support",
      "Monthly strategy sessions",
      "5-day turnaround SLA",
      "4 active projects at a time",
      "Dedicated account manager",
    ],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Studio",
    forWho: "Scaling brands with high creative output needs",
    tagline: "Unlimited requests. Dedicated bandwidth.",
    features: [
      "All services on-demand",
      "Unlimited creative requests",
      "Creative bandwidth model",
      "Dedicated account manager",
      "Priority turnaround",
      "Quarterly growth reviews",
    ],
  },
  {
    name: "Enterprise",
    forWho: "Corporates and large organizations",
    tagline: "A fully embedded creative department.",
    features: [
      "Dedicated Creative Director",
      "Full team assignment",
      "Custom SLA and dashboards",
      "Priority turnaround on all work",
      "Custom AI workflow builds",
      "Executive strategy sessions",
    ],
  },
];

export const includedInAll: string[] = [
  "Access to all 32 RUNOMA services",
  "AI-enhanced production on every deliverable",
  "Dedicated creative project manager",
  "Turnaround starting at 48 hours",
  "Multi-platform asset formats included",
  "Unlimited revisions within scope",
  "Monthly performance reporting",
  "Support across all 6 service pillars",
];

export const faqs: FaqItem[] = [
  {
    q: "How do I know which tier is right for me?",
    a: "Book a free 45-minute audit and we'll recommend the right tier based on your brand's goals, current output, and growth stage. No commitment required — just clarity.",
  },
  {
    q: "Can I start with a one-off project before subscribing?",
    a: "Absolutely. Many of our best clients started with a single project — a logo, a website, a video. Once they saw the quality and speed, they moved to a subscription. There's no pressure either way.",
  },
  {
    q: "What does the free audit actually include?",
    a: "A 45-minute session where we review your brand's current marketing, identify what's working and what isn't, and tell you exactly what RUNOMA would do differently. You get written findings afterward whether you work with us or not.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Subscriptions run monthly. You can cancel or pause at any time with 30 days notice. We don't lock you into long contracts — we'd rather keep you because the work is great.",
  },
  {
    q: "How fast is the turnaround?",
    a: "Most deliverables are returned within 48–72 hours. Scale and Studio plans include a 5-day SLA for complex multi-format projects. Rush delivery is available on request.",
  },
  {
    q: "What happens to unused capacity in a month?",
    a: "Unused creative capacity rolls over for up to 30 days. We don't want you to lose value — if a busy month means you couldn't use your full subscription, we carry it forward.",
  },
];
