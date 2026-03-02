"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      size: number; opacity: number; color: string;
    };

    const particles: Particle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.35 + 0.05,
      color: Math.random() > 0.5 ? "124,180,154" : "168,197,218",
    }));

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-surface-0">
      {/* Animated mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-sage/10 blur-3xl
                        top-[-10%] left-[-10%] animate-mesh-1" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-mist/[0.08] blur-3xl
                        bottom-[-10%] right-[-10%] animate-mesh-2" />
      </div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-32 pb-20">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Badge */}
          <motion.div variants={item} className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
            <span className="font-mono text-xs tracking-[0.15em] text-sage uppercase">
              AI-Powered Creative Studio · Lagos, Nigeria
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-display-xl font-light text-text-primary mb-6 max-w-3xl"
          >
            We build brands
            <br />
            <em className="text-sage">that move.</em>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            className="font-body text-lg text-text-secondary max-w-xl leading-relaxed mb-10"
          >
            AI-powered creative studio based in Lagos, Nigeria.
            <br />
            Serving the brands, creatives, and companies building Africa&apos;s future.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <Button href="/contact" size="lg">Book a Free Audit →</Button>
            <Button href="/services" variant="ghost" size="lg">Explore Services</Button>
          </motion.div>

          {/* Inline stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-8 border-t border-sage/10 pt-8"
          >
            {[
              { value: "32", label: "Services" },
              { value: "48hrs", label: "Avg. Delivery" },
              { value: "6", label: "Pillars" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-mono text-2xl text-text-primary">{s.value}</span>
                <span className="font-body text-sm text-text-muted">{s.label}</span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-sage to-transparent"
        />
        <span className="font-mono text-xs text-text-muted tracking-widest">scroll</span>
      </motion.div>
    </section>
  );
}
