import React from "react";

interface SectionEyebrowProps {
  text: string;
}

export default function SectionEyebrow({ text }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-8 h-px bg-primary" />
      <span className="font-mono text-xs tracking-[0.15em] text-primary uppercase">
        {text}
      </span>
    </div>
  );
}
