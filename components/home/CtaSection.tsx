"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="py-32 bg-surface-0 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-sage/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs tracking-[0.15em] text-sage uppercase mb-6 block">
            GET STARTED
          </span>
          <h2 className="font-display text-display-md font-light text-text-primary mb-6">
            Ready to see what AI-powered
            <br />
            <em>creativity looks like for your brand?</em>
          </h2>
          <p className="font-body text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Book a free 45-minute marketing audit. We&apos;ll show you exactly what
            RUNOMA would do differently. No pitch. No pressure. Just real insight.
          </p>
          <Button href="/contact" size="lg">Book Your Free Audit →</Button>
          <p className="font-body text-sm text-text-muted mt-4">
            No commitment. 45 minutes. Real results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
