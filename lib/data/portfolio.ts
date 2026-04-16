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
  gallery?: string[];
  video?: string;
  galleryVideos?: string[];
  intro?: string;
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
    slug: "brand-identity-visual-design",
    title: "Branding Identity & Visual Design",
    client: "One Titanium",
    category: "Branding & Marketing",
    description: "One Titanium is a modern oilfield services company delivering innovative engineering solutions, integrated oilfield services, and high-performance infrastructure support across Nigeria and Sub-Saharan Africa.",
    image: "/portfolio/one-titanium-hero.jpeg",
    video: "/portfolio/one-titanium-hero.mp4",
    tags: ["Logo design", "Visual Design", "Brand Strategy"],
    results: ["150% ROI", "+25% Visibility", "40% cost reduction"],
    gallery: [
      "/portfolio/one-titanium-gallery-1.jpeg",
      "/portfolio/one-titanium-gallery-2.jpeg",
      "/portfolio/one-titanium-gallery-3.jpeg",
      "/portfolio/one-titanium-gallery-4.jpeg",
    ],
  },
  {
    id: 3,
    slug: "motion-graphics-video",
    title: "Motion Graphics & Video Production",
    client: "Creative Agency",
    category: "Video",
    description: "A full-scale motion graphics and video production project delivering a brand video series with custom animations, 3D elements, and cinematic storytelling designed to captivate audiences across digital platforms.",
    image: "/placeholder-3.jpg",
    tags: ["Motion Design", "3D", "Video", "Post-Production"],
    results: ["1M+ views across platforms", "Featured on industry blogs", "3x engagement increase", "40% higher watch-through rate"],
    video: "/portfolio/motion-graphics-hero.mp4",
    challenge: "Create a series of brand videos that communicate a complex product story in under 60 seconds each, while maintaining visual consistency and emotional impact across multiple formats and platforms.",
    approach: "We developed a modular motion design system with reusable 3D assets and animation templates, allowing rapid production of multiple video formats. Each piece was crafted with cinematic pacing, custom sound design, and platform-specific optimization for maximum reach.",
    intro: "This project pushed the boundaries of what brand video can achieve. We combined hand-crafted motion graphics with 3D rendering and cinematic editing to produce a series that doesn't just inform — it moves people.\n\nFrom concept to final delivery, every frame was designed with intention. The result is a video series that performs across social, web, and presentation contexts — built for impact at every touchpoint.",
    galleryVideos: [
      "/portfolio/motion-graphics-gallery-1.mp4",
    ],
  },
  {
    id: 4,
    slug: "graphic-design-showcase",
    title: "Graphic Design",
    client: "Various Clients",
    category: "Graphic Design",
    description: "A curated showcase of graphic design work spanning brand collateral, social media creatives, print materials, packaging, and digital illustrations — crafted for clients across industries.",
    image: "/portfolio/graphic-design-hero.jpg",
    tags: ["Graphic Design", "Print", "Social Media", "Illustration", "Packaging"],
    results: ["50+ deliverables produced", "Consistent brand systems", "Cross-platform design assets", "Client satisfaction across industries"],
    challenge: "Deliver visually cohesive, high-impact design work across wildly different briefs — from luxury packaging to bold social media campaigns — while maintaining a signature creative standard.",
    approach: "Each project started with a deep dive into the client's brand DNA. We built flexible design systems that could scale from a single Instagram post to a full print campaign, ensuring every piece felt intentional and on-brand.",
    intro: "Great graphic design isn't just about looking good — it's about communicating clearly and leaving a lasting impression. This collection represents the breadth of our design capabilities, from minimalist brand collateral to vibrant social campaigns.\n\nEvery piece was designed with purpose, balancing aesthetics with function to deliver work that performs as well as it looks.",
    gallery: [
      "/portfolio/graphic-design-1.jpg",
      "/portfolio/graphic-design-2.jpg",
      "/portfolio/motion-graphics-gallery-2.mp4",
      "/portfolio/graphic-design-4.jpg",
      "/portfolio/graphic-design-5.jpg",
      "/portfolio/graphic-design-6.jpg",
    ],
  },
];
