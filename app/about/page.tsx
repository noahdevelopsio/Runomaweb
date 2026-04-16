"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import AboutParallaxStory from "@/components/about/AboutParallaxStory";

export default function AboutPage() {
  return (
    <div className="bg-surface-1 pt-32">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <SectionEyebrow text="About RUNOMA" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-display-lg font-light text-text-primary mb-6"
        >
          We are an innovative,
          <br />
          <em className="text-sage">top-notch brand.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-lg text-text-secondary max-w-xl leading-relaxed"
        >
          RUNOMA was born from a simple observation: Nigerian businesses deserve
          world-class creative without world-class prices or wait times.
          AI makes that possible. We built the studio to prove it.
        </motion.p>
      </section>

      {/* Parallax Story — Chapter 1 / 2 / 3 */}
      <AboutParallaxStory />

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-xl mx-auto px-8">
          <h2 className="font-display text-3xl font-light text-text-primary mb-4">
            Ready to work with us?
          </h2>
          <p className="font-body text-text-secondary mb-8">
            Book a free audit and let&apos;s build something great together.
          </p>
          <Button href="/contact" size="lg">Work With Us →</Button>
        </div>
      </section>
    </div>
  );
}
