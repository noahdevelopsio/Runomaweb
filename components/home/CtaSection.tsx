"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="py-40 bg-surface-0 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 20, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[300px] h-[300px] rounded-full bg-secondary/[0.04] blur-[100px] top-[30%] right-[20%]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <motion.span
            className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-8 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            GET STARTED
          </motion.span>

          <h2 className="font-display text-4xl md:text-display-md font-light text-foreground mb-8 leading-[1.1]">
            Ready to see what AI-powered
            <br />
            <em>creativity looks like for your brand?</em>
          </h2>

          <p className="font-body text-text-secondary text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Book a free 45-minute marketing audit. We&apos;ll show you exactly what
            RUNOMA would do differently. No pitch. No pressure. Just real insight.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Book Your Free Audit
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Button>
          </div>

          <p className="font-body text-sm text-text-muted mt-6">
            No commitment · 45 minutes · Real results
          </p>
        </motion.div>
      </div>
    </section>
  );
}
