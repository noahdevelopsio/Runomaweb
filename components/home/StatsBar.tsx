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
  { value: 32, suffix: "+", label: "Services Offered", icon: "◆" },
  { value: 48, suffix: "hrs", label: "Average Delivery", icon: "⚡" },
  { value: 83, suffix: "%", label: "Need AI Guidance", icon: "◎" },
  { display: "₦20M+", label: "Year 1 Target", icon: "▲" },
];

export default function StatsBar() {
  return (
    <section className="py-20 bg-surface-0 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[300px] rounded-full bg-primary/[0.03] blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="group relative p-8 rounded-2xl border border-primary/[0.06]
                         bg-surface-1/50 backdrop-blur-sm
                         hover:border-primary/20 hover:bg-surface-2/50
                         transition-all duration-500 text-center"
            >
              <div className="text-primary/30 text-lg mb-3 group-hover:text-primary/60 transition-colors">
                {stat.icon}
              </div>
              <div className="font-mono text-4xl md:text-5xl text-foreground mb-2 tracking-tight">
                {"display" in stat && stat.display ? (
                  stat.display
                ) : (
                  <CountUp to={stat.value!} suffix={stat.suffix} />
                )}
              </div>
              <p className="font-body text-xs text-text-muted uppercase tracking-[0.15em]">
                {stat.label}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
