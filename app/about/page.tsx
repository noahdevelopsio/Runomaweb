"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";

export default function AboutPage() {
  // Chapter 01 scroll tracking
  const ch1Ref = useRef(null);
  const { scrollYProgress: ch1Progress } = useScroll({
    target: ch1Ref,
    offset: ["start end", "end start"],
  });
  const ch1BgY = useTransform(ch1Progress, [0, 1], ["0%", "-20%"]);
  const ch1Opacity = useTransform(ch1Progress, [0, 0.2, 0.85, 1], [0, 1, 1, 0.85]);
  const ch1ContentY = useTransform(ch1Progress, [0, 0.4], ["40px", "0px"]);

  // Chapter 02 scroll tracking
  const ch2Ref = useRef(null);
  const { scrollYProgress: ch2Progress } = useScroll({
    target: ch2Ref,
    offset: ["start end", "end start"],
  });
  const ch2BgY = useTransform(ch2Progress, [0, 1], ["5%", "-25%"]);
  const ch2Opacity = useTransform(ch2Progress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.9]);
  const ch2TextY = useTransform(ch2Progress, [0, 1], ["20px", "-10px"]);
  const ch2CardsY = useTransform(ch2Progress, [0, 1], ["50px", "-15px"]);

  // Chapter 03 scroll tracking
  const ch3Ref = useRef(null);
  const { scrollYProgress: ch3Progress } = useScroll({
    target: ch3Ref,
    offset: ["start end", "end start"],
  });
  const ch3AccentY = useTransform(ch3Progress, [0, 1], ["-5%", "5%"]);
  const ch3Opacity = useTransform(ch3Progress, [0, 0.2, 0.9, 1], [0, 1, 1, 1]);
  const ch3ContentY = useTransform(ch3Progress, [0, 0.5], ["30px", "0px"]);

  return (
    <div className="bg-surface-1 pt-32 overflow-hidden">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <SectionEyebrow text="About RUNOMA" />
        <h1 className="font-display text-5xl md:text-display-lg font-light text-text-primary mb-6">
          We are an innovative,
          <br />
          <em className="text-sage">top-notch brand.</em>
        </h1>
        <p className="font-body text-lg text-text-secondary max-w-xl leading-relaxed">
          RUNOMA was born from a simple observation: Nigerian businesses deserve
          world-class creative without world-class prices or wait times.
          AI makes that possible. We built the studio to prove it.
        </p>
      </section>

      {/* ── Chapter 01 — The Observation ──────────────────────────── */}
      <section ref={ch1Ref} className="relative py-32 bg-surface-2 overflow-hidden">

        {/* Decorative chapter number — slower parallax (background layer) */}
        <motion.div
          style={{ y: ch1BgY }}
          aria-hidden
          className="absolute -right-8 top-1/2 -translate-y-1/2
                     font-display text-[22rem] font-light leading-none
                     text-sage/[0.04] select-none pointer-events-none"
        >
          01
        </motion.div>

        {/* Content — enters with fade + slide */}
        <motion.div
          style={{ opacity: ch1Opacity, y: ch1ContentY }}
          className="relative max-w-6xl mx-auto px-8"
        >
          <SectionEyebrow text="Chapter 01 — The Observation" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-6">

            <div>
              <h2 className="font-display text-display-sm font-light text-text-primary mb-6">
                The problem
                <br />
                <em className="text-sage">we couldn&apos;t ignore.</em>
              </h2>
              <p className="font-body text-text-secondary leading-relaxed">
                Nigerian businesses are among the most ambitious in the world. Yet the
                creative infrastructure around them has never matched that ambition. We
                saw this gap every day — great ideas, underpowered execution.
              </p>
            </div>

            {/* Stats panel */}
            <div className="bg-surface-3 rounded-3xl p-8 border border-sage/10">
              {[
                { stat: "₦1.4B", label: "Nigeria's projected AI market size" },
                { stat: "83%",   label: "Lagos marketers using AI without guidance" },
                { stat: "40M+",  label: "Nigerians on Instagram and TikTok" },
                { stat: "0",     label: "Lagos agencies offering Answer Engine Optimization (AEO) or design systems" },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="flex items-baseline gap-4 py-3 border-b border-sage/10 last:border-0"
                >
                  <span className="font-mono text-2xl text-sage w-20 shrink-0">{item.stat}</span>
                  <span className="font-body text-sm text-text-secondary">{item.label}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </section>

      {/* ── Chapter 02 — The Creative Gap ─────────────────────────── */}
      <section ref={ch2Ref} className="relative py-32 overflow-hidden">

        {/* Background accent — moves faster than text (stronger depth separation) */}
        <motion.div style={{ y: ch2BgY }} aria-hidden className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -left-32 top-1/4 w-96 h-96 rounded-full bg-sage/[0.04] blur-3xl" />
          <div
            className="absolute -right-8 bottom-8
                       font-display text-[18rem] font-light leading-none
                       text-sage/[0.04]"
          >
            02
          </div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-8">

          <motion.div style={{ opacity: ch2Opacity }}>
            <SectionEyebrow text="Chapter 02 — The Creative Gap" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-6">

            {/* Text — foreground layer */}
            <motion.div style={{ y: ch2TextY, opacity: ch2Opacity }}>
              <h2 className="font-display text-display-sm font-light text-text-primary mb-6">
                The choice
                <br />
                <em className="text-sage">no brand should make.</em>
              </h2>
              <p className="font-body text-text-secondary leading-relaxed mb-6">
                For too long, Nigerian brands have had to choose between expensive
                international agencies that don&apos;t understand the culture, or local
                agencies that can&apos;t deliver the quality. RUNOMA is neither.
              </p>
              <p className="font-body text-text-secondary leading-relaxed">
                We exist to close the creative gap — delivering world-class output
                with deep cultural fluency, at African-market prices.
              </p>
            </motion.div>

            {/* Comparison cards — background layer (different rate = depth) */}
            <motion.div style={{ y: ch2CardsY, opacity: ch2Opacity }} className="space-y-4">
              {[
                {
                  heading: "International agencies",
                  note: "World-class quality. Zero cultural context. Unaffordable pricing.",
                  highlight: false,
                },
                {
                  heading: "Local agencies",
                  note: "Cultural fluency. Limited execution capability. Slow delivery.",
                  highlight: false,
                },
                {
                  heading: "RUNOMA",
                  note: "AI-accelerated output. Nigerian-first thinking. Enterprise quality.",
                  highlight: true,
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className={`rounded-2xl border p-6 transition-colors ${
                    item.highlight
                      ? "border-sage/30 bg-sage/5"
                      : "border-sage/[0.08] bg-surface-2/50"
                  }`}
                >
                  <p className={`font-display text-xl font-light mb-1 ${item.highlight ? "text-sage" : "text-text-muted"}`}>
                    {item.heading}
                  </p>
                  <p className="font-body text-sm text-text-secondary">{item.note}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Chapter 03 — The Method ───────────────────────────────── */}
      <section ref={ch3Ref} className="relative py-32 bg-surface-2 overflow-hidden">

        {/* Accent — moves opposite direction for resolution feel */}
        <motion.div style={{ y: ch3AccentY }} aria-hidden className="absolute inset-0 pointer-events-none select-none">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                       font-display text-[20rem] font-light leading-none
                       text-sage/[0.04]"
          >
            03
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: ch3Opacity, y: ch3ContentY }}
          className="relative max-w-4xl mx-auto px-8 text-center"
        >
          <SectionEyebrow text="Chapter 03 — The Method" />
          <h2 className="font-display text-3xl md:text-display-md font-light text-text-primary mb-8">
            <AnimatedText text="AI doesn't replace creativity." />
            <br />
            <AnimatedText text="It expands it." delay={0.3} />
          </h2>
          <p className="font-body text-text-secondary text-lg leading-relaxed">
            Every RUNOMA deliverable begins with human thinking: What does this brand stand for?
            Who is the audience? What emotion should this trigger? Then AI amplifies the execution —
            generating options at speed, testing variants, and optimizing in real time.
            <br /><br />
            The creative insight is human. The production velocity is AI.
          </p>
        </motion.div>
      </section>

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
