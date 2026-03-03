"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const steps = [
  {
    num: "01",
    title: "Brief",
    desc: "You tell us your goals, audience, and timeline. We listen, ask sharp questions, and build shared understanding before a single pixel is touched.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    num: "02",
    title: "Build",
    desc: "Our AI-enhanced workflows generate, iterate, and refine faster than any traditional agency. Human creative directors shape every output.",
    accent: "from-secondary/20 to-secondary/5",
  },
  {
    num: "03",
    title: "Launch",
    desc: "You receive final assets, campaign files, and a performance dashboard. Most projects delivered in 48–72 hours.",
    accent: "from-primary-dark/20 to-primary-dark/5",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-surface-2 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: "-10%",
              right: "-10%",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 1.5 }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <SectionEyebrow text="The Process" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-display text-4xl md:text-display-md font-light text-foreground"
          >
            Three steps to
            <br />
            <em className="text-primary">remarkable.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connector */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="hidden md:block absolute top-[72px] left-[72px] w-2/3 h-px
                       bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 origin-left"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="relative p-8 md:p-10"
            >
              {/* Step circle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-8
                           border border-primary/20 bg-gradient-to-br ${step.accent}
                           backdrop-blur-sm relative`}
              >
                <span className="font-mono text-sm text-primary font-medium">{step.num}</span>
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/20"
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                />
              </motion.div>

              <h3 className="font-display text-3xl font-light text-foreground mb-4">
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
