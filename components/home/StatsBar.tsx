"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [inView, to, suffix, count]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  {
    value: 32,
    suffix: "+",
    label: "Creative Services",
    description: "End-to-end capabilities",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Across all deliverables",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
    description: "Brands transformed",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    value: 5,
    suffix: "x",
    label: "Faster Than Traditional",
    description: "AI-powered velocity",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function StatsBar() {
  return (
    <section className="py-24 bg-surface-0 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[300px] rounded-full bg-primary/[0.03] blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            By The Numbers
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/[0.06] rounded-3xl overflow-hidden border border-primary/[0.08]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="group relative p-8 md:p-10 bg-surface-0
                         hover:bg-surface-1/80
                         transition-all duration-500 text-center"
            >
              {/* Icon */}
              <div className="text-primary/30 mb-4 flex justify-center group-hover:text-primary/70 transition-colors duration-500">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="font-mono text-4xl md:text-5xl text-foreground mb-1 tracking-tight">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="font-body text-sm text-foreground/80 font-medium mb-1">
                {stat.label}
              </p>
              <p className="font-body text-xs text-text-muted">
                {stat.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
