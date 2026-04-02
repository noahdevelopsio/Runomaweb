 "use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxImage() {
  const ref = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for better image placement and fit
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const imgX = useTransform(scrollYProgress, [0, 1], ["1%", "-1%"]);
  const imgRotateZ = useTransform(scrollYProgress, [0, 1], [0, -0.5]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  // Fade in
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Text motion
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  return (
    <section ref={ref} className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
      <motion.img
        src="/portfolio/parallax.JPG"
        alt="RUNOMA workspace"
        style={{ 
          y: imgY, 
          x: imgX, 
          rotateZ: imgRotateZ,
          scale: imgScale,
          opacity 
        }}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
        sizes="100vw"
      />

      {/* Overlay text */}
      <motion.div
        ref={textRef}
        style={{ opacity, y: textY }}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none"
      >
        <div className="text-center px-8 max-w-4xl mx-auto text-foreground drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] bg-black/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          <span className="font-display font-medium italic text-3xl sm:text-4xl md:text-5xl lg:text-display-sm xl:text-display-md leading-tight">
            less noise - more impact
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default ParallaxImage; 
