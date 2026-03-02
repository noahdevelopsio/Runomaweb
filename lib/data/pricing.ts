export type Tier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type PricingRow = {
  service: string;
  price: string;
  model: string;
};

export const tiers: Tier[] = [
  {
    name: "Starter",
    price: "₦100K/mo",
    description: "For solo creators and small businesses starting online",
    features: [
      "AI ad automation",
      "Social media creative",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "₦250K/mo",
    description: "For SMBs and e-commerce brands scaling up",
    features: [
      "Everything in Starter",
      "Social media management",
      "Video / motion content",
      "1 brand refresh per month",
    ],
  },
  {
    name: "Scale",
    price: "₦500K/mo",
    description: "For startups and entertainment labels",
    features: [
      "Full creative stack",
      "Ads, content, video, web support",
      "Monthly strategy sessions",
      "5-day turnaround SLA",
    ],
    featured: true,
  },
  {
    name: "Studio",
    price: "₦800K/mo",
    description: "For scaling brands with high output needs",
    features: [
      "All services on-demand",
      "Unlimited creative requests",
      "Creative bandwidth model",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For corporates and large brands",
    features: [
      "Dedicated Creative Director",
      "Full team assignment",
      "Custom SLA & dashboards",
      "Priority turnaround",
    ],
  },
];

export const projectPricing: Record<string, PricingRow[]> = {
  "Creative Design": [
    { service: "Logo + Full Brand Identity",      price: "₦150K – ₦450K",      model: "Project" },
    { service: "Presentation / Pitch Deck",       price: "₦80K – ₦250K",       model: "Project" },
    { service: "eBook / Report / Whitepaper",     price: "₦100K – ₦350K",      model: "Project" },
    { service: "Illustration Design (custom)",    price: "₦80K – ₦200K/set",   model: "Project" },
    { service: "Print Design",                    price: "₦30K – ₦150K",       model: "Project" },
    { service: "Packaging & Merchandise",         price: "₦150K – ₦500K",      model: "Project" },
    { service: "Concept Creation",                price: "₦100K – ₦300K",      model: "Project" },
    { service: "HTML Email Template",             price: "₦50K – ₦150K",       model: "Project" },
    { service: "Copywriting",                     price: "₦50K – ₦200K",       model: "Project" },
  ],
  "Production": [
    { service: "Video Production (brand / ad)",   price: "₦150K – ₦700K",      model: "Project" },
    { service: "Motion Design",                   price: "₦80K – ₦300K/asset", model: "Project" },
    { service: "Reels / Short-form Video",        price: "₦50K – ₦150K/video", model: "Project" },
    { service: "3D Product Render",               price: "₦80K – ₦300K/render",model: "Project" },
    { service: "AR Filter / Immersive",           price: "₦200K – ₦800K",      model: "Project" },
    { service: "Event Branding & Stage Visuals",  price: "₦200K – ₦600K",      model: "Project" },
  ],
  "Tech Design": [
    { service: "Website (Standard)",              price: "₦300K – ₦600K",      model: "Project" },
    { service: "Website (Custom / Premium)",      price: "₦600K – ₦1.5M",      model: "Project" },
    { service: "Mobile App UI/UX",                price: "₦400K – ₦1.2M",      model: "Project" },
    { service: "E-commerce Store",                price: "₦300K – ₦800K",      model: "Project" },
    { service: "Landing Page",                    price: "₦80K – ₦250K",       model: "Project" },
    { service: "Design System",                   price: "₦500K – ₦2M",        model: "Project" },
    { service: "Website Maintenance",             price: "₦50K – ₦150K/mo",    model: "Retainer" },
  ],
  "Marketing & AI": [
    { service: "AI Ad Automation",                price: "₦50K/mo + 15% spend", model: "Retainer" },
    { service: "Social Media Management",         price: "₦80K – ₦250K/mo",    model: "Retainer" },
    { service: "SEO Retainer",                    price: "₦100K – ₦350K/mo",   model: "Retainer" },
    { service: "AEO Optimization",               price: "₦150K – ₦400K/mo",   model: "Retainer" },
    { service: "Email & SMS Automation",          price: "₦80K – ₦200K/mo",    model: "Retainer" },
    { service: "AI Chatbot Setup",               price: "₦100K + ₦30K/mo",    model: "Setup + Retainer" },
    { service: "AI Consulting",                   price: "₦200K – ₦1M",        model: "Project" },
    { service: "AI Training Workshop",            price: "₦15K – ₦30K/person", model: "Event" },
    { service: "Fractional CMO",                  price: "₦150K – ₦500K/mo",   model: "Retainer" },
  ],
};
