"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const steps = [
  {
    num: "01",
    title: "Brief",
    desc: "You tell us your goals, audience, and timeline. We listen, ask sharp questions, and build shared understanding before a single pixel is touched.",
  },
  {
    num: "02",
    title: "Build",
    desc: "Our AI-enhanced workflows generate, iterate, and refine faster than any traditional agency. Human creative directors shape every output.",
  },
  {
    num: "03",
    title: "Launch",
    desc: "You receive final assets, campaign files, and a performance dashboard. Most projects delivered in 48–72 hours.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-surface-2">
      <div className="max-w-6xl mx-auto px-8">
        <SectionEyebrow text="The Process" />
        <h2 className="font-display text-display-md font-light text-text-primary mb-16">
          How RUNOMA works.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px
                       bg-gradient-to-r from-sage/20 via-sage/40 to-sage/20 origin-left"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-full border border-sage/30 flex items-center
                              justify-center mb-6 bg-surface-3">
                <span className="font-mono text-sm text-sage">{step.num}</span>
              </div>
              <h3 className="font-display text-2xl font-light text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
