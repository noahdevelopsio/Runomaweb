"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("newsletter-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => setIsOpen(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    localStorage.setItem("newsletter-dismissed", "true");
    setTimeout(() => setIsOpen(false), 2500);
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("newsletter-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-surface-0/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed z-[101] inset-0 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-primary/15 bg-surface-1 shadow-card">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full text-text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Glow background */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/[0.08] blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-secondary/[0.06] blur-[60px] pointer-events-none" />

              <div className="relative p-8 md:p-10">
                {/* Animated icon */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0], y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6"
                >
                  <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </motion.div>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-2">
                        Stay in the <em className="text-primary">loop.</em>
                      </h3>
                      <p className="font-body text-sm text-text-secondary mb-6 leading-relaxed">
                        Get creative insights, AI tips, and exclusive offers
                        delivered to your inbox. No spam, just value.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="relative">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="w-full px-5 py-3.5 rounded-xl bg-surface-2 border border-primary/10
                                     text-foreground placeholder:text-text-muted
                                     focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20
                                     font-body text-sm transition-all duration-300"
                          />
                        </div>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3.5 rounded-xl bg-gradient-sage text-ink font-body font-semibold text-sm
                                   hover:shadow-glow transition-shadow duration-300"
                        >
                          Subscribe →
                        </motion.button>
                      </form>

                      <p className="font-mono text-[10px] text-text-muted mt-4 tracking-wide uppercase">
                        Unsubscribe anytime · No spam ever
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
                        className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4"
                      >
                        <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </motion.div>
                      <h3 className="font-display text-2xl text-foreground mb-2">
                        You&apos;re in!
                      </h3>
                      <p className="font-body text-sm text-text-secondary">
                        Welcome to the RUNOMA creative circle.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
