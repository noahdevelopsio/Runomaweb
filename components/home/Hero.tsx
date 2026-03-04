"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Scene3D from "./Scene3D";
import ScrambleText from "@/components/ui/ScrambleText";
import GradientText from "@/components/ui/GradientText";

export default function Hero() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
  };
  const item = {
    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
    show: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-surface-0">
      {/* Gradient mesh blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-primary/[0.07] blur-[150px] top-[-20%] right-[-15%] animate-mesh-1" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-secondary/[0.05] blur-[120px] bottom-[-15%] left-[-10%] animate-mesh-2" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-primary-dark/[0.06] blur-[100px] top-[40%] left-[30%]" />
      </div>

      {/* 3D Scene */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex items-center gap-3 mb-10">
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-primary"
            />
            <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
              AI-Powered Creative Studio · Lagos
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-6xl md:text-8xl lg:text-display-xl font-light text-foreground mb-8 max-w-4xl leading-[0.95]"
          >
            <ScrambleText text="We build brands" delay={0.5} />
            <br />
            <em className="text-primary inline-block">
              <GradientText>That People Don’t Just See — They Experience</GradientText>
            </em>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-body text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-12"
          >
            AI-powered creative studio based in Lagos, Nigeria.
            <br />
            Serving the brands, creatives, and companies building Africa&apos;s future.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-20">
            <Button href="/contact" size="lg">
              Book a Free Audit
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-12 border-t border-primary/10 pt-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
            >
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              <span className="font-mono text-xs tracking-wider text-text-secondary uppercase">
                Currently accepting new clients
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
        />
        <span className="font-mono text-[10px] text-text-muted tracking-[0.3em] uppercase">scroll</span>
      </motion.div>
    </section>
  );
}
