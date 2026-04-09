"use client";

import { motion } from "framer-motion";

const items = [
  "BRANDING",
  "AI AD GENERATION",
  "VIDEO PRODUCTION",
  "MOTION DESIGN",
  "WEB DESIGN",
  "3D RENDERS",
  "SEO & AEO",
  "PITCH DECKS",
  "COPYWRITING",
  "DESIGN SYSTEMS",
  "AI CONSULTING",
  "PACKAGING",
  "SOCIAL CREATIVE",
  "AR EXPERIENCES",
  "FRACTIONAL CMO",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <motion.div
      className="flex gap-3 whitespace-nowrap py-1"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      {doubled.map((item, i) => (
        <motion.span
          key={`${item}-${i}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
            border border-primary/15 bg-primary/[0.04]
            backdrop-blur-md
            font-mono text-xs tracking-[0.14em] uppercase
            text-text-secondary
            hover:border-primary/40 hover:bg-primary/[0.1] hover:text-primary
            hover:shadow-[0_0_20px_rgba(124,180,154,0.12)]
            transition-all duration-300 cursor-default
            select-none shrink-0"
          whileHover={{ scale: 1.06, y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
}
