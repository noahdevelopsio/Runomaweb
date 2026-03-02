interface EyebrowProps {
  text: string;
}

export default function SectionEyebrow({ text }: EyebrowProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-8 h-px bg-sage" />
      <span className="font-mono text-xs tracking-[0.15em] text-sage uppercase">
        {text}
      </span>
    </div>
  );
}
