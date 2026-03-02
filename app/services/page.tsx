"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import { pillars } from "@/lib/data/pillars";

export default function ServicesPage() {
  return (
    <div className="bg-surface-1 pt-32">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionEyebrow text="Services" />
          <h1 className="font-display text-display-lg font-light text-text-primary mb-5">
            Everything your brand
            <br />
            <em>needs to grow.</em>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-xl">
            32 services across 6 pillars. AI-enhanced by default.
            Built for Lagos, ready for the world.
          </p>
        </motion.div>
      </section>

      {/* Pillar Sections */}
      {pillars.map((pillar, i) => (
        <section
          key={pillar.id}
          id={`pillar-${pillar.id}`}
          className={`py-20 border-t border-sage/10 ${
            i % 2 === 0 ? "bg-surface-1" : "bg-surface-2"
          }`}
        >
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
            >
              {/* Left: Header */}
              <div>
                <div className="font-mono text-xs tracking-[0.12em] text-sage mb-3">
                  PILLAR {String(pillar.id).padStart(2, "0")}
                </div>
                <h2 className="font-display text-3xl font-light text-text-primary mb-4">
                  {pillar.title}
                </h2>
                <p className="font-body text-text-secondary italic mb-4">
                  {pillar.tagline}
                </p>
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <div className="font-mono text-sm text-sage">
                  Starting from {pillar.startingFrom}
                </div>
              </div>

              {/* Right: Services */}
              <div>
                {pillar.groups?.map((group) => (
                  <div key={group.label || "default"} className="mb-6">
                    {group.label && (
                      <h4 className="font-mono text-xs tracking-[0.12em] text-mist
                                     uppercase mb-3">
                        {group.label}
                      </h4>
                    )}
                    <ul className="space-y-2">
                      {group.services.map((s) => (
                        <li key={s} className="flex items-start gap-3 font-body text-sm
                                               text-text-secondary">
                          <span className="w-1 h-1 rounded-full bg-sage/60 mt-2 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-surface-0 text-center">
        <div className="max-w-xl mx-auto px-8">
          <h2 className="font-display text-3xl font-light text-text-primary mb-4">
            Not sure which pillar fits?
          </h2>
          <p className="font-body text-text-secondary mb-8">
            Book a free audit and we&apos;ll tell you exactly what your brand needs.
          </p>
          <Button href="/contact" size="lg">Book Free Audit →</Button>
        </div>
      </section>
    </div>
  );
}
