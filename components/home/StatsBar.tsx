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
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [inView, to, suffix, count]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 32,    suffix: "+",   label: "Services Offered"             },
  { value: 48,    suffix: "hrs", label: "Average Delivery"             },
  { value: 83,    suffix: "%",   label: "of Lagos marketers need guidance" },
  { display: "₦20M+",           label: "Year 1 Revenue Target"        },
];

export default function StatsBar() {
  return (
    <section className="bg-surface-2 py-12 border-y border-sage/10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="font-mono text-3xl md:text-4xl text-text-primary mb-1">
                {"display" in stat ? stat.display : (
                  <CountUp to={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="font-body text-xs text-text-muted uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
