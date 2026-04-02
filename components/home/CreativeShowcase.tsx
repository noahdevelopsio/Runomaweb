"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const showcaseItems = [
  {
    src: "/images/showcase-1.jpg",
    alt: "Creative studio workspace with 3D elements",
    label: "Studio Environment",
    rotate: -3,
  },
  {
    src: "/images/showcase-2.jpg",
    alt: "Futuristic brand design mockup",
    label: "Digital Branding",
    rotate: 2,
  },
  {
    src: "/images/showcase-3.jpg",
    alt: "Abstract 3D metallic forms",
    label: "Creative Direction",
    rotate: -1.5,
  },
];

export default function CreativeShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -60]);

  const yValues = [y1, y2, y3];

  return (
    <section ref={containerRef} className="py-32 bg-surface-1 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[150px] top-1/2 left-1/4 -translate-y-1/2" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-secondary/[0.03] blur-[120px] bottom-0 right-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <SectionEyebrow text="Our Craft" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-display text-4xl md:text-display-md font-light text-foreground"
          >
            Where vision meets
            <br />
            <em className="text-primary">execution.</em>
          </motion.h2>
        </div>

        {/* Parallax image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={i}
              style={{ y: yValues[i] }}
              initial={{ opacity: 0, scale: 0.9, rotate: item.rotate }}
              whileInView={{ opacity: 1, scale: 1, rotate: item.rotate }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.15,
                duration: 1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-primary/[0.08]
                              aspect-[4/5] bg-surface-2
                              group-hover:border-primary/25 transition-all duration-700">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-0/80 via-transparent to-transparent
                                opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="font-mono text-xs tracking-[0.15em] text-primary uppercase"
                  >
                    {item.label}
                  </motion.span>
                </div>

                {/* Hover glow ring */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                                transition-opacity duration-500
                                shadow-[inset_0_0_40px_rgba(124,180,154,0.1)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
