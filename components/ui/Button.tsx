import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
  type?: "submit" | "button";
}

export default function Button({
  href, onClick, children, variant = "primary",
  size = "md", className = "", fullWidth = false, type,
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold
    transition-all duration-200 cursor-pointer relative overflow-hidden
    ${fullWidth ? "w-full" : ""}
  `;

  const sizes = {
    sm: "text-sm px-5 py-2.5",
    md: "text-sm px-7 py-3.5",
    lg: "text-base px-9 py-4",
  };

  const variants = {
    primary: `
      bg-gradient-sage text-ink
      hover:-translate-y-0.5 hover:shadow-glow
      active:translate-y-0
    `,
    ghost: `
      bg-transparent text-text-primary border border-sage/30
      hover:border-sage hover:bg-sage/5 hover:-translate-y-0.5
      active:translate-y-0
    `,
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={classes}>{children}</button>
  );
}
