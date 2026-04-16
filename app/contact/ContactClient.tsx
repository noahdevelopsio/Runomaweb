"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { sendContactEmail } from "@/app/actions/email";

const inputClass = `
  w-full bg-surface-2 border border-sage/15 rounded-xl px-4 py-3
  font-body text-sm text-text-primary placeholder:text-text-muted
  focus:outline-none focus:border-sage/50 focus:ring-1 focus:ring-sage/20
  transition-all duration-200
`;

function ContactForm() {
  const searchParams = useSearchParams();
  const tier = searchParams.get("tier");

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      business: formData.get("business") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
      site_url: formData.get("site_url") as string, // Honeypot
    };

    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to connect to the server. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface-2 border border-sage/20 rounded-3xl p-12 text-center"
      >
        <div className="w-16 h-16 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">✓</span>
        </div>
        <h2 className="font-display text-3xl font-light text-text-primary mb-4">Message Sent!</h2>
        <p className="font-body text-text-secondary mb-8">
          Thanks for reaching out. We&apos;ll review your request and get back to you 
          within 24 hours with some initial findings.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="ghost">Send Another Message</Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-surface-2 border border-sage/10 rounded-3xl p-8 md:p-10 shadow-xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field (hidden from users) */}
        <input type="text" name="site_url" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="font-mono text-[10px] tracking-widest text-sage uppercase ml-1">
              Your Name
            </label>
            <input type="text" id="name" name="name" required placeholder="John Doe" className={inputClass} />
          </div>
          <div className="space-y-2">
            <label htmlFor="business" className="font-mono text-[10px] tracking-widest text-sage uppercase ml-1">
              Business Name
            </label>
            <input type="text" id="business" name="business" required placeholder="Company Ltd" className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="font-mono text-[10px] tracking-widest text-sage uppercase ml-1">
              Email Address
            </label>
            <input type="email" id="email" name="email" required placeholder="john@example.com" className={inputClass} />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="font-mono text-[10px] tracking-widest text-sage uppercase ml-1">
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" required placeholder="080... or +234..." className={inputClass} />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="font-mono text-[10px] tracking-widest text-sage uppercase ml-1">
            Service Interest
          </label>
          <select id="service" name="service" required className={inputClass} defaultValue={tier || ""}>
            <option value="" disabled>Select a pillar...</option>
            <option value="Strategy">Strategy & Transformation</option>
            <option value="Branding">Branding & Identity</option>
            <option value="AI Automation">AI Powered Automation</option>
            <option value="Video/Creative">Video & Special Creative</option>
            <option value="Web/Tech">Web & Advanced Tech</option>
            <option value="Tier: Starter">Creative Tier: Starter</option>
            <option value="Tier: Growth">Creative Tier: Growth</option>
            <option value="Tier: Scale">Creative Tier: Scale</option>
            <option value="Tier: Enterprise">Creative Tier: Enterprise</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="font-mono text-[10px] tracking-widest text-sage uppercase ml-1">
            Tell us about your brand
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="What gap are we closing for you today?"
            className={`${inputClass} resize-none`}
          />
        </div>

        {error && (
          <p className="text-red-400 text-xs font-body animate-pulse">{error}</p>
        )}

        <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Book Your Free Audit →"}
        </Button>
      </form>
    </motion.div>
  );
}

export default function ContactClient() {
  return (
    <Suspense fallback={<div className="h-[500px] animate-pulse bg-surface-2 rounded-3xl" />}>
      <ContactForm />
    </Suspense>
  );
}
