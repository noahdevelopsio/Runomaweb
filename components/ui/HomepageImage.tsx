"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HomepageImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  animate?: boolean;
}

export default function HomepageImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  animate = true,
}: HomepageImageProps) {
  const [hasError, setHasError] = useState(false);

  const baseStyles = "rounded-2xl overflow-hidden border border-primary/[0.06]";

  const content = hasError ? (
    <div
      className={cn(baseStyles, "bg-gradient-sage", className)}
      style={{ width, height }}
      aria-label={alt}
      role="img"
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn(baseStyles, className)}
      onError={() => setHasError(true)}
    />
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {content}
    </motion.div>
  );
}
