"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { pillars } from "@/lib/data/pillars";

const icons = ["◈", "◇", "△", "□", "⬡", "○"];

export default function PillarsGrid() {
  return (
    <section className="py-32 bg-surface-1 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <SectionEyebrow text="What We Do" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="font-display text-4xl md:text-display-md font-light text-foreground"
            >
              32 services.
              <br />
              <em className="text-primary">One studio.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-body text-text-secondary text-lg max-w-md"
          >
            From a single social post to a full brand identity — RUNOMA covers
            the entire creative and marketing stack.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 60, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              style={{ perspective: "1000px" }}
            >
              <Link
                href={`/services#pillar-${pillar.id}`}
                className="group block h-full rounded-2xl p-8 relative overflow-hidden
                           border border-primary/[0.06] bg-surface-2/30 backdrop-blur-sm
                           transition-all duration-500
                           hover:-translate-y-3 hover:shadow-card-hover hover:border-primary/20"
              >
                {/* Animated gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs tracking-[0.12em] text-primary">
                      {String(pillar.id).padStart(2, "0")}
                    </span>
                    <span className="text-primary/40 text-xl group-hover:text-primary/70 transition-colors duration-300">
                      {icons[i] || "◆"}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-light text-foreground leading-tight mb-5 whitespace-pre-line">
                    {pillar.title}
                  </h3>

                  <ul className="space-y-2 mb-8">
                    {pillar.preview.map((s) => (
                      <li key={s} className="font-body text-sm text-text-secondary flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 font-body text-sm text-primary">
                    <span>Explore</span>
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
