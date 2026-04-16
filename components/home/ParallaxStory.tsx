"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const storyChapters = [
  {
    eyebrow: "Chapter 01",
    title: "The Problem",
    body: "African brands deserve world-class creative. But traditional agencies are slow, expensive, and disconnected from the culture. Freelancers are fast but unreliable. The gap is massive.",
    accent: "primary" as const,
  },
  {
    eyebrow: "Chapter 02",
    title: "The Shift",
    body: "AI changed everything. Not to replace creativity — but to amplify it. What once took weeks now takes hours. What cost millions now costs thousands. The playing field is levelling.",
    accent: "secondary" as const,
  },
  {
    eyebrow: "Chapter 03",
    title: "The Vision",
    body: "RUNOMA exists at the intersection. AI-powered speed meets human creative direction. Lagos energy meets global design standards. The future of African branding starts here.",
    accent: "primary" as const,
  },
];

export default function ParallaxStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-surface-0"
      style={{ height: "300vh" }}
    >
      {/* Top decorative border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10" />

      {/* Sticky viewport — locks to screen while chapters scroll through */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {storyChapters.map((chapter, i) => (
          <ChapterBlock
            key={i}
            chapter={chapter}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Vertical progress rail */}
        <ProgressDots scrollYProgress={scrollYProgress} />
      </div>

      {/* Bottom decorative border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent z-10" />
    </section>
  );
}

// ── Progress indicator ────────────────────────────────────────────────────────

function DotIndicator({
  scrollYProgress,
  start,
  end,
  accent,
}: {
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  accent: "primary" | "secondary";
}) {
  const margin = 0.06;
  const opacity = useTransform(
    scrollYProgress,
    [start, start + margin, end - margin, end],
    [0.2, 1, 1, 0.2],
  );
  const scale = useTransform(
    scrollYProgress,
    [start, start + margin, end - margin, end],
    [1, 1.6, 1.6, 1],
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className={`w-1.5 h-1.5 rounded-full ${accent === "primary" ? "bg-primary" : "bg-secondary"}`}
    />
  );
}

function ProgressDots({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3 pointer-events-none">
      <DotIndicator
        scrollYProgress={scrollYProgress}
        start={0}
        end={1 / 3}
        accent="primary"
      />
      <DotIndicator
        scrollYProgress={scrollYProgress}
        start={1 / 3}
        end={2 / 3}
        accent="secondary"
      />
      <DotIndicator
        scrollYProgress={scrollYProgress}
        start={2 / 3}
        end={1}
        accent="primary"
      />
    </div>
  );
}

// ── Chapter panel ─────────────────────────────────────────────────────────────

function ChapterBlock({
  chapter,
  index,
  scrollYProgress,
}: {
  chapter: (typeof storyChapters)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / 3;
  const end = (index + 1) / 3;

  // Panel visibility (fade in / stay / fade out)
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.06, end - 0.06, end],
    [0, 1, 1, 0],
  );

  // Shared text entrance — slides up as the chapter enters
  const textY = useTransform(scrollYProgress, [start, start + 0.12], [80, 0]);

  // Glow orb Y parallax (moves opposite to scroll direction)
  const glowY = useTransform(scrollYProgress, [start, end], [120, -120]);

  // Chapter 01 — clip-path reveal: text sweeps up from behind a mask
  const clipPath = useTransform(
    scrollYProgress,
    [start, start + 0.12],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"],
  );

  // Chapter 02 — blur that clears as the chapter enters
  const blur = useTransform(
    scrollYProgress,
    [start, start + 0.12],
    ["blur(14px)", "blur(0px)"],
  );

  // Chapter 03 — glow orb scales up as crescendo
  const glowScale = useTransform(
    scrollYProgress,
    [start, start + 0.15, end - 0.1],
    [0.7, 1.3, 1.0],
  );

  // Animated expanding line
  const lineWidth = useTransform(
    scrollYProgress,
    [start + 0.05, start + 0.18],
    ["0%", "100%"],
  );
  const lineOpacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center"
    >
      {/* Parallax glow orb */}
      <motion.div
        style={{
          y: glowY,
          scale: index === 2 ? glowScale : 1,
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className={[
            "absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.07]",
            chapter.accent === "primary" ? "bg-primary" : "bg-secondary",
            isEven ? "right-[5%] top-[10%]" : "left-[5%] bottom-[10%]",
          ].join(" ")}
        />
      </motion.div>

      {/* Chapter 03 — cinematic parallax.JPG backdrop */}
      {index === 2 && (
        <motion.div
          style={{ y: glowY }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portfolio/parallax.JPG"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-[0.04]"
          />
        </motion.div>
      )}

      {/* Content */}
      <div
        className={[
          "relative z-10 max-w-6xl mx-auto px-8 w-full py-24",
          isEven ? "md:text-left" : "md:text-right",
        ].join(" ")}
      >
        <div className={`max-w-2xl ${isEven ? "" : "md:ml-auto"}`}>
          {/* Eyebrow */}
          <motion.span
            style={{ y: textY }}
            className={[
              "inline-block font-mono text-xs tracking-[0.25em] uppercase mb-6",
              chapter.accent === "primary" ? "text-primary" : "text-secondary",
            ].join(" ")}
          >
            {chapter.eyebrow}
          </motion.span>

          {/* Animated expanding line with shimmer */}
          <div
            className={[
              "relative h-px mb-8 overflow-hidden",
              isEven ? "origin-left" : "origin-right md:ml-auto",
            ].join(" ")}
          >
            <motion.div
              style={{ width: lineWidth, opacity: lineOpacity }}
              className={`h-full ${chapter.accent === "primary" ? "bg-primary/30" : "bg-secondary/30"}`}
            />
            {/* Shimmer sweep */}
            <motion.div
              style={{ width: lineWidth }}
              className="absolute inset-y-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer"
            />
          </div>

          {/* Title
              Chapter 01: clip-path sweep reveal
              Chapter 02: blur clears
              Chapter 03: plain entrance  */}
          <motion.h2
            style={{
              y: textY,
              clipPath: index === 0 ? clipPath : undefined,
              filter: index === 1 ? blur : undefined,
            }}
            className="font-display text-4xl md:text-display-sm font-light text-foreground mb-6"
          >
            {chapter.title}
            <em
              className={
                chapter.accent === "primary" ? "text-primary" : "text-secondary"
              }
            >
              .
            </em>
          </motion.h2>

          {/* Body text — Chapter 02 also gets blur clear */}
          <motion.p
            style={{
              y: textY,
              filter: index === 1 ? blur : undefined,
            }}
            className="font-body text-lg text-text-secondary leading-relaxed"
          >
            {chapter.body}
          </motion.p>

          {/* Oversized decorative chapter number */}
          <div
            className={[
              "absolute font-display text-[20rem] font-light leading-none",
              "pointer-events-none select-none opacity-[0.03]",
              chapter.accent === "primary" ? "text-primary" : "text-secondary",
              isEven ? "-right-10 bottom-0" : "-left-10 bottom-0",
            ].join(" ")}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Per-chapter bottom divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    </motion.div>
  );
}
