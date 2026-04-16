"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const chapters = [
  {
    number: "01",
    eyebrow: "Our Mission",
    headingLine1: "We exist to close",
    headingLine2: "the creative gap.",
    body: "For too long, Nigerian brands have had to choose between expensive international agencies that don\u2019t understand the culture, or local agencies that can\u2019t deliver the quality. RUNOMA is neither.",
    stats: [
      { value: "\u20a61.4B", label: "Nigeria\u2019s projected AI market size" },
      { value: "83%", label: "Lagos marketers using AI without guidance" },
      { value: "40M+", label: "Nigerians on Instagram and TikTok" },
      { value: "0", label: "Lagos agencies offering AEO or design systems" },
    ],
  },
  {
    number: "02",
    eyebrow: "How We Think",
    headingLine1: "AI doesn\u2019t replace creativity.",
    headingLine2: "It expands it.",
    body: "Every RUNOMA deliverable begins with human thinking: What does this brand stand for? Who is the audience? What emotion should this trigger? Then AI amplifies the execution \u2014 generating options at speed, testing variants, and optimizing in real time.",
    stats: [
      { value: "Human", label: "Creative insight \u2014 strategy, concept, emotion" },
      { value: "AI", label: "Production velocity \u2014 speed, scale, optimisation" },
    ],
  },
  {
    number: "03",
    eyebrow: "The Studio",
    headingLine1: "RUNOMA was built",
    headingLine2: "to prove it.",
    body: "Nigerian businesses deserve world-class creative without world-class prices or wait times. AI makes that possible. We built the studio to deliver exactly that \u2014 32 services, one integrated team, zero compromises.",
    stats: [
      { value: "32", label: "Services across brand, design, video & AI" },
      { value: "100%", label: "African-market pricing, enterprise-grade quality" },
    ],
  },
] as const;

/** Separate component to keep hook usage out of a render loop. */
function DotIndicator({ active }: { active: number }) {
  return (
    <div className="flex flex-col gap-3" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{
            opacity: i === active ? 1 : 0.3,
            scale: i === active ? 1.4 : 1,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="block w-1.5 h-1.5 rounded-full bg-sage"
        />
      ))}
    </div>
  );
}

export default function AboutParallaxStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.34) setActiveChapter(0);
    else if (v < 0.67) setActiveChapter(1);
    else setActiveChapter(2);
  });

  // ── Chapter 0: present at scroll start, fades out as ch1 approaches ──
  const ch0Opacity = useTransform(scrollYProgress, [0, 0.05, 0.27, 0.34], [0.4, 1, 1, 0]);
  const ch0Y = useTransform(scrollYProgress, [0, 0.05, 0.27, 0.34], [20, 0, 0, -24]);

  // ── Chapter 1: fades in at 1/3, fades out at 2/3 ──
  const ch1Opacity = useTransform(scrollYProgress, [0.33, 0.4, 0.6, 0.67], [0, 1, 1, 0]);
  const ch1Y = useTransform(scrollYProgress, [0.33, 0.4, 0.6, 0.67], [24, 0, 0, -24]);

  // ── Chapter 2: fades in at 2/3, lingers until end ──
  const ch2Opacity = useTransform(scrollYProgress, [0.66, 0.73, 0.95, 1.0], [0, 1, 1, 0.8]);
  const ch2Y = useTransform(scrollYProgress, [0.66, 0.73, 0.95, 1.0], [24, 0, 0, -10]);

  const chapterOpacities = [ch0Opacity, ch1Opacity, ch2Opacity];
  const chapterYs = [ch0Y, ch1Y, ch2Y];

  return (
    /*
     * Outer scroll driver — 250 vh on mobile, 300 vh on desktop.
     * The sticky inner stays pinned for the full scroll distance.
     */
    <div ref={containerRef} className="relative h-[250vh] md:h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-surface-1 flex flex-col justify-center">
        {/* Scroll progress bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage to-transparent origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="w-full max-w-6xl mx-auto px-6 md:px-8 pt-2 pb-8">
          {/* Section eyebrow */}
          <div className="mb-6 md:mb-10">
            <SectionEyebrow text="Our Story" />
          </div>

          {/*
           * Chapter frames: chapter 0 stays in normal flow so it dictates
           * the container height; chapters 1 & 2 are absolutely stacked on
           * top of it, sharing the same space.
           */}
          <div className="relative">
            {chapters.map((chapter, i) => (
              <motion.div
                key={chapter.number}
                style={{
                  opacity: chapterOpacities[i],
                  y: chapterYs[i],
                }}
                className={`${
                  i === 0 ? "relative" : "absolute inset-0"
                } grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-start md:items-center`}
                aria-hidden={i !== activeChapter ? true : undefined}
              >
                {/* ── Left: narrative text ── */}
                <div>
                  {/* Chapter label row */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[0.6rem] tracking-[0.18em] text-sage/40 uppercase">
                      Chapter {chapter.number}
                    </span>
                    <span className="w-4 h-px bg-sage/20" />
                    <span className="font-mono text-[0.6rem] tracking-[0.18em] text-sage/60 uppercase">
                      {chapter.eyebrow}
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="font-display text-3xl sm:text-4xl md:text-display-sm lg:text-display-md font-light text-text-primary mb-5 leading-tight">
                    {chapter.headingLine1}
                    <br />
                    <em className="text-sage">{chapter.headingLine2}</em>
                  </h2>

                  {/* Body */}
                  <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed max-w-md">
                    {chapter.body}
                  </p>
                </div>

                {/* ── Right: stats / data card ── */}
                <div className="rounded-3xl border border-sage/[0.08] bg-surface-2/60 p-6 md:p-8 backdrop-blur-sm">
                  {chapter.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-baseline gap-4 py-3 border-b border-sage/10 last:border-0"
                    >
                      <span className="font-mono text-xl md:text-2xl text-sage w-20 shrink-0">
                        {stat.value}
                      </span>
                      <span className="font-body text-xs md:text-sm text-text-secondary">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Dot indicator: right edge ── */}
        <div className="absolute right-5 lg:right-8 top-1/2 -translate-y-1/2 z-10">
          <DotIndicator active={activeChapter} />
        </div>

        {/* ── Decorative watermark chapter number ── */}
        {chapters.map((chapter, i) => (
          <motion.span
            key={chapter.number}
            style={{ opacity: chapterOpacities[i] }}
            className="absolute bottom-0 right-6 font-display font-light text-[8rem] md:text-[12rem] leading-none text-sage/[0.035] pointer-events-none select-none"
          >
            {chapter.number}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
