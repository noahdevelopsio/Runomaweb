"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import Image from "next/image";

// Placeholder case studies - replace with real data
const caseStudies = [
  {
    id: 1,
    title: "Brand Identity & Web Design",
    client: "Tech Startup",
    category: "Branding",
    description: "Complete brand identity system and website for an emerging fintech platform.",
    image: "/placeholder-1.jpg",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    results: ["300% increase in conversions", "2x user engagement"],
  },
  {
    id: 2,
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
    title: "Motion Graphics & Video Production",
    client: "Creative Agency",
    category: "Video",
    description: "Brand video series with custom motion graphics and 3D elements.",
    image: "/placeholder-3.jpg",
    tags: ["Motion Design", "3D", "Video"],
    results: ["1M+ views", "Featured on industry blogs"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-surface-1 pt-32">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionEyebrow text="Portfolio" />
          <h1 className="font-display text-5xl md:text-display-lg font-light text-text-primary mb-5">
            Work that moves
            <br />
            <em className="text-sage">brands forward.</em>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-xl">
            Case studies showcasing how we help African businesses build brands that stand out.
          </p>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl overflow-hidden bg-gradient-card border border-sage/[0.08] 
                         hover:border-sage/20 transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Image placeholder */}
              <div className="relative h-64 bg-surface-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs text-text-muted tracking-widest">
                    PROJECT IMAGE
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs tracking-widest text-sage uppercase">
                    {study.category}
                  </span>
                  <span className="text-sage/30">•</span>
                  <span className="font-mono text-xs text-text-muted">
                    {study.client}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light text-text-primary mb-3 
                               group-hover:text-sage transition-colors">
                  {study.title}
                </h3>

                <p className="font-body text-sm text-text-secondary mb-4">
                  {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1 rounded-full 
                                 bg-sage/5 text-sage border border-sage/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-1 mb-4">
                  {study.results.map((result) => (
                    <div key={result} className="flex items-start gap-2">
                      <span className="text-sage mt-0.5">✓</span>
                      <span className="font-body text-xs text-text-secondary">{result}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" size="sm">
                  View Case Study →
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-2 py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionEyebrow text="Ready to Start?" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-text-primary mb-6">
              Let&apos;s build something
              <br />
              <em className="text-sage">remarkable together.</em>
            </h2>
            <p className="font-body text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free audit to see how we can help your brand stand out in the African market.
            </p>
            <Button href="/contact" size="lg">
              Book Free Audit →
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
