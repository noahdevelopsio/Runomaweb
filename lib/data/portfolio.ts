export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  results: string[];
  link?: string;
  challenge?: string;
  approach?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "lifeos",
    title: "LifeOS - AI-Powered Productivity Platform",
    client: "LifeOS",
    category: "Product Design",
    description: "A comprehensive productivity platform that helps users stay organized with tasks, journaling, and focus tools, powered by an AI companion that learns from user data and goals.",
    image: "/portfolio/lifeos-hero.png",
    tags: ["Brand Identity", "Web Design", "UI/UX", "AI Integration"],
    results: [
      "Intuitive task management system",
      "AI companion with personalized insights",
      "Seamless journaling experience",
      "Focus-driven interface design"
    ],
    link: "https://lifeoperatingsys.vercel.app/",
    challenge: "Create a sanctuary for mindful productivity that combines task management, journaling, and AI assistance in a calming, distraction-free environment.",
    approach: "Designed a serene interface with sage green tones and circular motifs to promote focus and emotional clarity. Integrated AI that learns from user patterns to provide personalized productivity insights.",
  },
  {
    id: 2,
    slug: "ai-marketing-campaign",
    title: "AI-Powered Marketing Campaign",
    client: "E-commerce Brand",
    category: "Marketing",
    description: "Data-driven marketing campaign leveraging AI for personalization and optimization.",
    image: "/placeholder-2.jpg",
    tags: ["AI Marketing", "Content", "Analytics"],
    results: ["150% ROI", "40% cost reduction"],
  },
  {
    id: 3,
    slug: "motion-graphics-video",
    title: "Motion Graphics & Video Production",
    client: "Creative Agency",
    category: "Video",
    description: "Brand video series with custom motion graphics and 3D elements.",
    image: "/placeholder-3.jpg",
    tags: ["Motion Design", "3D", "Video"],
    results: ["1M+ views", "Featured on industry blogs"],
  },
];
