"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import { sendContactEmail } from "@/app/actions/email";

const inputClass = `
  w-full bg-surface-2 border border-sage/15 rounded-xl px-4 py-3
  font-body text-sm text-text-primary placeholder:text-text-muted
  focus:outline-none focus:border-sage/50 focus:ring-1 focus:ring-sage/20
  transition-all duration-200
`;

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const tier = searchParams.get("tier");

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
      site_url: formData.get("site_url") as string,
    };

    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface-1 pt-32 min-h-screen">
      <div className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionEyebrow text="Contact" />
            <h1 className="font-display text-5xl md:text-display-sm font-light text-text-primary mb-5">
              Let&apos;s talk about
              <br />
              <em className="text-sage">your brand.</em>
            </h1>
            <p className="font-body text-text-secondary leading-relaxed mb-10">
              Book a free 45-minute marketing audit. We&apos;ll tell you exactly where
              your brand stands, what&apos;s working, what isn&apos;t, and what we&apos;d do next.
              <br /><br />
              No commitment. No pressure. Just clarity.
            </p>

            <div className="space-y-5">
              {[
                { num: "01", text: "We review your submission within 24 hours" },
                { num: "02", text: "We'll contact you via mail to confirm your session" },
                { num: "03", text: "45-minute video or phone call (your choice)" },
                { num: "04", text: "We send written findings afterward, whether you work with us or not" },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <span className="font-mono text-xs text-sage mt-0.5 w-6 shrink-0">
                    {step.num}
                  </span>
                  <p className="font-body text-sm text-text-secondary">{step.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-gradient-card rounded-3xl p-10 border border-sage/20 text-center h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-sage/20 border border-sage/40 flex items-center justify-center mb-4">
                  <span className="text-sage text-xl">✓</span>
                </div>
                <h3 className="font-display text-2xl text-text-primary mb-2">
                  You&apos;re booked in.
                </h3>
                <p className="font-body text-text-secondary text-sm">
                  We&apos;ll be in touch within 24 hours via mail.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-card rounded-3xl p-8 border border-sage/10 space-y-5"
              >
                {/* Honeypot Field */}
                <input
                  type="text"
                  name="site_url"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs p-3 rounded-xl mb-4">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                      YOUR NAME *
                    </label>
                    <input name="name" required placeholder="John Doe" className={inputClass} />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                      BUSINESS NAME *
                    </label>
                    <input name="business" required placeholder="Brand Co." className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                    EMAIL *
                  </label>
                  <input name="email" type="email" required placeholder="you@email.com" className={inputClass} />
                </div>

                <div>
                  <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                    PHONE NUMBER *
                  </label>
                  <input name="phone" required placeholder="+234 800 000 0000" className={inputClass} />
                </div>

                <div>
                  <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                    SERVICE INTEREST
                  </label>
                  <select name="service" className={inputClass}>
                    <option value="">Select a pillar...</option>
                    <option>Digital Marketing & AI Automation</option>
                    <option>Creative Design</option>
                    <option>Video & Production</option>
                    <option>Tech Design (Website / App)</option>
                    <option>AI Consulting</option>
                    <option>Full-Service Retainer</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                {tier && (
                  <div>
                    <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                      PRICING TIER
                    </label>
                    <input
                      name="pricing_tier"
                      type="text"
                      value={tier}
                      readOnly
                      className={`${inputClass} opacity-75 cursor-not-allowed`}
                    />
                  </div>
                )}

                <div>
                  <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                    TELL US ABOUT YOUR BRAND
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="What you do, who your audience is, what you're trying to achieve..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Book Your Free Audit →"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="bg-surface-1 pt-32 min-h-screen">
        <div className="max-w-6xl mx-auto px-8 pb-24">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}
