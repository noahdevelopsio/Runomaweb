"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function TeamImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <section ref={ref} className="relative py-0 bg-surface-0 overflow-hidden">
      {/* Full-width image with parallax */}
      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative rounded-3xl overflow-hidden border border-primary/[0.08]"
        >
          <motion.div style={{ y, scale }} className="relative aspect-[21/9]">
            <Image
              src="/images/team-collab.jpg"
              alt="RUNOMA creative team collaborating on design projects in Lagos"
              fill
              loading="lazy"
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-0/90 via-surface-0/20 to-transparent" />

          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase block mb-3">
                The Team
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-light text-foreground max-w-lg">
                Creative minds, <em className="text-primary">powered by AI.</em>
              </h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
