import Link from "next/link";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Digital Marketing", href: "/services#pillar-1" },
      { label: "Creative Design", href: "/services#pillar-2" },
      { label: "Production", href: "/services#pillar-3" },
      { label: "Tech Design", href: "/services#pillar-4" },
      { label: "AI Consulting", href: "/services#pillar-5" },
      { label: "Strategy", href: "/services#pillar-6" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Twitter/X", href: "#" },
      { label: "WhatsApp", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-0 border-t border-sage/10">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-baseline gap-1 mb-3">
              <span className="font-display text-2xl font-semibold tracking-widest text-text-primary">
                RUNOMA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-sage mb-1" />
            </div>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-3">
              AI-Powered Creative Tech Studio
              <br />
              Lagos, Nigeria
            </p>
            <p className="font-display text-sm italic text-text-muted">
              &quot;Where AI Meets Human Creativity&quot;
            </p>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="font-mono text-xs tracking-[0.12em] text-sage uppercase mb-5">
                {col.title}
              </h5>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-text-secondary
                                 hover:text-text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-sage/10 pt-6 flex flex-col md:flex-row
                        justify-between items-center gap-3">
          <p className="font-body text-xs text-text-muted">
            © 2025 RUNOMA.
          </p>
          <p className="font-mono text-xs text-text-muted">Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
