"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "32+", label: "Services Offered" },
  { value: "5×", label: "Faster with AI" },
  { value: "100%", label: "User Satisfaction" },
];

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function StatsBar() {
  return (
    <section className="py-20 bg-surface-0 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[400px] rounded-full bg-primary/[0.03] blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: easing }}
              className="text-center"
            >
              <span className="block font-display text-display-md md:text-display-lg font-light text-primary">
                {stat.value}
              </span>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary mt-2 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
