"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";

const inputClass = `
  w-full bg-surface-2 border border-sage/15 rounded-xl px-4 py-3
  font-body text-sm text-text-primary placeholder:text-text-muted
  focus:outline-none focus:border-sage/50 focus:ring-1 focus:ring-sage/20
  transition-all duration-200
`;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to Resend/Formspree
    setSubmitted(true);
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
                { num: "02", text: "We'll send a WhatsApp message to confirm your session" },
                { num: "03", text: "45-minute video or phone call — your choice" },
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
                  We&apos;ll be in touch within 24 hours via WhatsApp.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-card rounded-3xl p-8 border border-sage/10 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                      YOUR NAME *
                    </label>
                    <input required placeholder="John Doe" className={inputClass} />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                      BUSINESS NAME *
                    </label>
                    <input required placeholder="Brand Co." className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                    EMAIL *
                  </label>
                  <input type="email" required placeholder="you@email.com" className={inputClass} />
                </div>

                <div>
                  <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                    WHATSAPP NUMBER *
                  </label>
                  <input required placeholder="+234 800 000 0000" className={inputClass} />
                </div>

                <div>
                  <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                    SERVICE INTEREST
                  </label>
                  <select className={inputClass}>
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

                <div>
                  <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                    MONTHLY BUDGET
                  </label>
                  <select className={inputClass}>
                    <option value="">Select range...</option>
                    <option>Under ₦100K</option>
                    <option>₦100K – ₦300K</option>
                    <option>₦300K – ₦600K</option>
                    <option>₦600K+</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs text-sage tracking-wider block mb-2">
                    TELL US ABOUT YOUR BRAND
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What you do, who your audience is, what you're trying to achieve..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button type="submit" size="lg" fullWidth>
                  Book My Free Audit →
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
