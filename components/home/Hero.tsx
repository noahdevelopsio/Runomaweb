"use client";

import { Suspense } from "react";
import Image from "next/image";
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

      {/* Blended background image — right side */}
      {/* <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none overflow-hidden hidden md:block"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)",
        }}
      >
        <Image
          src="/image0.png"
          alt=""
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
          priority
        />
      </div> */}

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
              AI Powered Creative Studio · Lagos
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-6xl md:text-8xl lg:text-display-xl font-light text-foreground mb-8 max-w-4xl leading-[0.95]"
          >
            <ScrambleText text="We build brands" delay={0.5} />
            <br />
            <em className="text-primary text-4xl md:text-6xl inline-block">
              <GradientText>That People Don’t Just See, They Experience</GradientText>
            </em>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-body text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-12"
          >
            At Runoma we transform your boldest visions into reality, leveraging on our ever-pioneering capabilities. Enjoy a world of limitless possibilities, innovative and awesome inventions.
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
