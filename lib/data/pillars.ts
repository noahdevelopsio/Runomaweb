export type PillarGroup = {
  label?: string;
  services: string[];
};

export type Pillar = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  startingFrom: string;
  preview: string[];
  groups: PillarGroup[];
};

export const pillars: Pillar[] = [
  {
    id: 1,
    title: "Digital Marketing\n& AI Automation",
    tagline: "AI handles the repetitive. We handle the strategy.",
    description:
      "The highest-ROI entry point for most RUNOMA clients. We automate your ad generation, campaign testing, and content scheduling — then layer intelligent strategy on top to make every naira of ad spend work as hard as possible.",
    startingFrom: "₦50K/month",
    preview: ["AI Ad Generation", "Campaign Automation", "AEO Optimization"],
    groups: [
      {
        services: [
          "AI ad generation and creative variants for Meta, TikTok, YouTube, and Google",
          "Predictive audience targeting using behavioral and interest data",
          "Automated A/B testing and real-time campaign optimization",
          "AI-powered chatbot setup and automated lead-nurturing flows",
          "Content calendar automation and social scheduling",
          "Email and SMS marketing automation (Brevo, Klaviyo, Mailchimp)",
          "Performance analytics dashboards with real-time KPI tracking",
          "Creative automation pipelines — auto-generating ad variants at scale",
          "Lifecycle marketing — customer journeys from first touch to retention",
          "AEO (Answer Engine Optimization) — appear in ChatGPT, Perplexity, Gemini",
          "Google Ads / PPC management and optimization",
          "Organic social strategy — content that builds community and drives engagement",
          "CRO (Conversion Rate Optimization) — turning visitors into customers",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Creative Design\nServices",
    tagline: "Every format. Every medium. AI-generated at speed, human-directed for quality.",
    description:
      "From a logo to a full campaign. From a pitch deck to a packaged product. RUNOMA's creative design covers every visual format your brand will ever need — produced faster than any traditional studio.",
    startingFrom: "₦30K/project",
    preview: ["Brand Identity", "Pitch Deck Design", "Ad Creative"],
    groups: [
      {
        label: "Brand & Identity",
        services: [
          "Logo design, full visual identity systems, and brand guidelines",
          "Brand voice development, messaging frameworks, and storytelling systems",
          "Concept creation — big creative ideas and campaign concepts",
          "Illustration design — custom visual storytelling, editorial, character design",
        ],
      },
      {
        label: "Advertising & Campaign",
        services: [
          "Ad creative — high-performance designs for Meta, TikTok, Google, OOH",
          "Social media creative packages — static, carousel, Stories, Reels",
          "Campaign imagery — AI-generated product visuals and lifestyle photography",
        ],
      },
      {
        label: "Print & Physical",
        services: [
          "Print design — flyers, posters, banners, billboards, merchandise",
          "Packaging and merchandise design — product labels and custom merch",
          "Event branding — stage visuals, backdrop design, event kits",
        ],
      },
      {
        label: "Content & Documents",
        services: [
          "Presentation design — pitch decks, investor decks, sales decks, profiles",
          "eBook and report design — whitepapers, annual reports, investor briefs",
          "HTML email template design for campaigns and newsletters",
          "Copywriting — brand copy, website copy, ad copy, product descriptions",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Specialized\nProduction",
    tagline: "High-production creative. Video, motion, 3D, and immersive experiences.",
    description:
      "The services that signal premium. Video, motion, and immersive 3D work that commands attention — produced at a fraction of the cost of traditional production houses.",
    startingFrom: "₦50K/project",
    preview: ["Video Production", "Motion Design", "3D Product Renders"],
    groups: [
      {
        label: "Video & Motion",
        services: [
          "Video production — brand films, product videos, ad videos at scale",
          "Motion design — animated logos and motion graphics for ads and websites",
          "Video ad production — scripted, shot, and edited ads for all platforms",
          "Reels and short-form social video — hooks, transitions, caption design",
        ],
      },
      {
        label: "Immersive & 3D",
        services: [
          "3D product renders and visualizations — replacing expensive photography",
          "Immersive and AR design — filters and interactive brand experiences",
          "3D environment and scene design for digital activations",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Tech Design\nWeb, Product & Systems",
    tagline: "Digital storefronts built for conversion, speed, and scale.",
    description:
      "Your website is your most important sales tool. RUNOMA builds fast, beautiful, SEO-optimized digital products designed to convert visitors into paying customers.",
    startingFrom: "₦80K/project",
    preview: ["Website Design", "E-commerce Stores", "Design Systems"],
    groups: [
      {
        services: [
          "Website design and development — Webflow, WordPress, Framer, Next.js",
          "Mobile app UI/UX design and interactive prototyping",
          "E-commerce store setup and optimization — Shopify, WooCommerce",
          "Landing page design for product launches and campaigns",
          "Design systems — component libraries and reusable UI frameworks",
          "Product design — end-to-end UX for SaaS, apps, and platforms",
          "Technical SEO, site architecture, and content strategy",
          "Website maintenance and performance monitoring retainers",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "AI Services\n& Consulting",
    tagline: "Nigeria's AI adoption partner. Strategy, training, and custom tools.",
    description:
      "As Nigerian businesses race to adopt AI, most do it without a plan. RUNOMA is the expert partner guiding your AI strategy, building automation infrastructure, and training your team.",
    startingFrom: "₦15K/attendee",
    preview: ["AI Consulting", "Gen AI Workshops", "AEO/GEO Strategy"],
    groups: [
      {
        services: [
          "AI consulting — strategy for adopting and maximizing AI across operations",
          "Generative AI training workshops — hands-on sessions (Midjourney, ChatGPT)",
          "AI workflow automation — custom pipelines running marketing on autopilot",
          "Custom AI tool development — bespoke tools for enterprise clients",
          "AEO/GEO strategy — appearing in AI search: ChatGPT, Perplexity, Gemini",
          "AI adoption roadmaps — multi-month consulting for building AI infrastructure",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Strategy\n& Management",
    tagline: "Your embedded marketing department. Senior thinking, startup speed.",
    description:
      "For brands that want a full strategic partner, not just task execution. RUNOMA acts as your marketing department — setting strategy, managing campaigns, growing with you.",
    startingFrom: "₦150K/month",
    preview: ["Fractional CMO", "Campaign Strategy", "Growth Reviews"],
    groups: [
      {
        services: [
          "Marketing strategy — growth strategy, channel mix, go-to-market planning",
          "Campaign strategy — multi-market concepting and creative direction",
          "Fractional CMO services for startups and scaling SMBs",
          "Multi-platform ad account management and budget optimization",
          "Unified campaign dashboards across ads, CRM, analytics, and social",
          "Quarterly growth reviews, KPI tracking, and strategic roadmap sessions",
          "Influencer and creator campaign coordination",
          "Market research, competitor analysis, and audience insights reports",
        ],
      },
    ],
  },
];
