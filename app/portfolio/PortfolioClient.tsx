"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { caseStudies } from "@/lib/data/portfolio";

export default function PortfolioClient() {
  return (
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
            {/* Image / Video */}
            <div className="relative h-80 overflow-hidden">
              {study.video ? (
                <video
                  src={study.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-transparent" />
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

              {study.link ? (
                <Button href={study.link} variant="ghost" size="sm">
                  Visit Website →
                </Button>
              ) : (
                <Button href={`/portfolio/${study.slug}`} variant="ghost" size="sm">
                  View Case Study →
                </Button>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
