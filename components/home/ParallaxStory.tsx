"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const storyChapters = [
  {
    eyebrow: "Chapter 01",
    title: "The Problem",
    body: "African brands deserve world-class creative. But traditional agencies are slow, expensive, and disconnected from the culture. Freelancers are fast but unreliable. The gap is massive.",
    accent: "primary",
  },
  {
    eyebrow: "Chapter 02",
    title: "The Shift",
    body: "AI changed everything. Not to replace creativity — but to amplify it. What once took weeks now takes hours. What cost millions now costs thousands. The playing field is levelling.",
    accent: "secondary",
  },
  {
    eyebrow: "Chapter 03",
    title: "The Vision",
    body: "RUNOMA exists at the intersection. AI-powered speed meets human creative direction. Lagos energy meets global design standards. The future of African branding starts here.",
    accent: "primary",
  },
];

export default function ParallaxStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-surface-0">
      {/* Full-width decorative gradient bar */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {storyChapters.map((chapter, i) => (
        <ChapterBlock key={i} chapter={chapter} index={i} />
      ))}
    </section>
  );
}

function ChapterBlock({
  chapter,
  index,
}: {
  chapter: (typeof storyChapters)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.95]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -40]);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Parallax background glow */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className={`absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.05]
            ${chapter.accent === "primary" ? "bg-primary" : "bg-secondary"}
            ${isEven ? "right-[10%] top-[20%]" : "left-[10%] bottom-[20%]"}`}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className={`relative z-10 max-w-6xl mx-auto px-8 w-full py-24
          ${isEven ? "md:text-left" : "md:text-right"}`}
      >
        <div className={`max-w-2xl ${isEven ? "" : "md:ml-auto"}`}>
          {/* Eyebrow */}
          <motion.span
            style={{ y: textY }}
            className={`inline-block font-mono text-xs tracking-[0.25em] uppercase mb-6
              ${chapter.accent === "primary" ? "text-primary" : "text-secondary"}`}
          >
            {chapter.eyebrow}
          </motion.span>

          {/* Animated line */}
          <motion.div
            style={{ width: lineWidth }}
            className={`h-px mb-8
              ${chapter.accent === "primary" ? "bg-primary/30" : "bg-secondary/30"}
              ${isEven ? "origin-left" : "origin-right md:ml-auto"}`}
          />

          {/* Title */}
          <motion.h2
            style={{ y: textY }}
            className="font-display text-4xl md:text-display-sm font-light text-foreground mb-6"
          >
            {chapter.title}
            <em className={chapter.accent === "primary" ? "text-primary" : "text-secondary"}>.</em>
          </motion.h2>

          {/* Body */}
          <motion.p
            style={{ y: textY }}
            className="font-body text-lg text-text-secondary leading-relaxed"
          >
            {chapter.body}
          </motion.p>

          {/* Decorative number */}
          <motion.span
            style={{ y, opacity: useTransform(opacity, (v) => v * 0.06) }}
            className={`absolute font-display text-[20rem] font-light leading-none pointer-events-none select-none
              ${chapter.accent === "primary" ? "text-primary" : "text-secondary"}
              ${isEven ? "-right-10 top-0" : "-left-10 top-0"}`}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
        </div>
      </motion.div>

      {/* Section divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    </div>
  );
}
