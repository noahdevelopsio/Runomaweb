"use client";

import { motion } from "framer-motion";
import { Compass, Hammer, Puzzle } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Discover",
    desc: "We dive deep into your brand, audience, and market landscape. Through research and strategic insight, we uncover the ideas and opportunities that will set you apart.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Hammer,
    title: "Build",
    desc: "Our AI-enhanced workflows design, iterate, and refine at speed. Every deliverable is shaped by senior creative directors who understand African markets and global standards.",
    accent: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Puzzle,
    title: "Integrate",
    desc: "We deliver production-ready assets and ensure seamless integration into your existing platforms, campaigns, and workflows — so everything just works.",
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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-display text-4xl md:text-display-md font-light text-foreground"
          >
            The RUNOMA{" "}
            <em className="text-primary">Code</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="relative p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center
                               border border-primary/20 bg-gradient-to-br ${step.accent}`}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-light text-foreground">
                    <em className="text-primary">{step.title}</em>
                  </h3>
                </div>
                <p className="font-body text-base text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
