"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { pillars } from "@/lib/data/pillars";

export default function PillarsGrid() {
  return (
    <section className="py-24 bg-surface-1">
      <div className="max-w-6xl mx-auto px-8">
        <SectionEyebrow text="What We Do" />
        <h2 className="font-display text-display-md font-light text-text-primary mb-4">
          32 services.
          <br />
          <em>One studio.</em>
        </h2>
        <p className="font-body text-text-secondary text-lg max-w-xl mb-16">
          From a single social post to a full brand identity — RUNOMA covers
          the entire creative and marketing stack.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/services#pillar-${pillar.id}`}
                className="group block h-full bg-gradient-card border border-sage/[0.08]
                           rounded-3xl p-8 transition-all duration-300
                           hover:-translate-y-2 hover:shadow-card-hover hover:border-sage/25"
              >
                <div className="font-mono text-xs tracking-[0.12em] text-sage mb-4">
                  {String(pillar.id).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl font-light text-text-primary
                               leading-tight mb-5">
                  {pillar.title}
                </h3>
                <ul className="space-y-1.5 mb-6">
                  {pillar.preview.map((s) => (
                    <li key={s} className="font-body text-sm text-text-secondary
                                          flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-sage/50 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <span className="font-body text-sm text-sage group-hover:gap-3
                                 flex items-center gap-2 transition-all">
                  Explore Pillar
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
