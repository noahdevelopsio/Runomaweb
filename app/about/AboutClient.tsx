"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function AboutClient() {
  return (
    <section className="bg-surface-2 py-24">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionEyebrow text="Our Mission" />
            <h2 className="font-display text-display-sm font-light text-text-primary mb-6">
              We exist to close
              <br />
              <em>the creative gap.</em>
            </h2>
            <p className="font-body text-text-secondary leading-relaxed">
              For too long, Nigerian brands have had to choose between expensive
              international agencies that don&apos;t understand the culture, or local
              agencies that can&apos;t deliver the quality. RUNOMA is neither.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface-3 rounded-3xl p-8 border border-sage/10"
          >
            {[
              { stat: "₦1.4B", label: "Nigeria's projected AI market size" },
              { stat: "83%", label: "Lagos marketers using AI without guidance" },
              { stat: "40M+", label: "Nigerians on Instagram and TikTok" },
              { stat: "0", label: "Lagos agencies offering AEO or design systems" },
            ].map((item) => (
              <div key={item.stat} className="flex items-baseline gap-4 py-3 border-b border-sage/10 last:border-0">
                <span className="font-mono text-2xl text-sage w-20 shrink-0">{item.stat}</span>
                <span className="font-body text-sm text-text-secondary">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
