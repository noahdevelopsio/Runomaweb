export default function Ticker() {
  const items = [
    "BRANDING", "AI AD GENERATION", "VIDEO PRODUCTION", "MOTION DESIGN",
    "WEB DESIGN", "3D RENDERS", "SEO & AEO", "PITCH DECKS",
    "COPYWRITING", "DESIGN SYSTEMS", "AI CONSULTING", "PACKAGING",
    "SOCIAL CREATIVE", "AR EXPERIENCES", "FRACTIONAL CMO",
  ];

  const content = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden border-y border-sage/10 py-3 bg-surface-2/50">
      <div className="flex animate-ticker whitespace-nowrap">
        {content.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-4">
            <span className="font-mono text-xs tracking-[0.12em] text-text-muted uppercase">
              {item}
            </span>
            <span className="text-sage text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
