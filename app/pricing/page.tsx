"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import { tiers, projectPricing } from "@/lib/data/pricing";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState(0);
  const categories = Object.keys(projectPricing);

  return (
    <div className="bg-surface-1 pt-32">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionEyebrow text="Pricing" />
          <h1 className="font-display text-display-lg font-light text-text-primary mb-5">
            Transparent pricing.
            <br />
            <em>No surprises.</em>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-xl">
            We believe clients should know exactly what they&apos;re paying for
            before they sign anything.
          </p>
        </motion.div>
      </section>

      {/* Subscription Tiers */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <SectionEyebrow text="Subscription Tiers" />
        <h2 className="font-display text-3xl font-light text-text-primary mb-4">
          Creative bandwidth, not billable hours.
        </h2>
        <p className="font-body text-text-secondary mb-12 max-w-xl">
          Pay for creative capacity — a dedicated team working on your brand
          every month. Pick the tier that fits your stage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl p-6 border transition-all duration-300 flex flex-col
                ${tier.featured
                  ? "bg-gradient-to-b from-[#1C3028] to-surface-2 border-sage/40 shadow-glow scale-[1.03]"
                  : "bg-gradient-card border-sage/[0.08] hover:border-sage/20"
                }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-sage text-ink font-mono text-xs px-3 py-1
                                   rounded-full tracking-wider">
                    POPULAR
                  </span>
                </div>
              )}
              <div className="font-mono text-xs tracking-widest text-sage uppercase mb-2">
                {tier.name}
              </div>
              <div className="font-mono text-2xl text-text-primary mb-1">{tier.price}</div>
              <div className="font-body text-xs text-text-muted mb-5">{tier.description}</div>
              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-body text-xs text-text-secondary">
                    <span className="text-sage mt-0.5">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={tier.featured ? "primary" : "ghost"}
                size="sm"
                fullWidth
              >
                Get Started →
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Pricing */}
      <section className="bg-surface-2 py-24">
        <div className="max-w-6xl mx-auto px-8">
          <SectionEyebrow text="Project Pricing" />
          <h2 className="font-display text-3xl font-light text-text-primary mb-10">
            One-off project rates.
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveTab(i)}
                className={`font-mono text-xs tracking-widest px-4 py-2 rounded-full
                            border transition-all duration-200 uppercase
                  ${activeTab === i
                    ? "bg-sage text-ink border-sage"
                    : "border-sage/20 text-text-muted hover:border-sage/40"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="rounded-2xl overflow-hidden border border-sage/10">
            <div className="grid grid-cols-3 bg-surface-3 px-6 py-3">
              {["Service", "Price Range", "Model"].map((h) => (
                <span key={h} className="font-mono text-xs tracking-widest text-sage uppercase">
                  {h}
                </span>
              ))}
            </div>
            {projectPricing[categories[activeTab]].map((row, i) => (
              <motion.div
                key={row.service}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.04 }}
                className={`grid grid-cols-3 px-6 py-4 border-t border-sage/5
                  ${i % 2 === 0 ? "bg-surface-1" : "bg-surface-2"}`}
              >
                <span className="font-body text-sm text-text-primary">{row.service}</span>
                <span className="font-mono text-sm text-sage">{row.price}</span>
                <span className="font-body text-sm text-text-muted">{row.model}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-8 py-24">
        <SectionEyebrow text="FAQ" />
        <h2 className="font-display text-3xl font-light text-text-primary mb-10">
          Common questions.
        </h2>
        {[
          {
            q: "Can I start with a project and move to a subscription?",
            a: "Yes. Most RUNOMA clients start with a single project, then move onto a subscription after they see the results.",
          },
          {
            q: "What does the free audit include?",
            a: "A 45-minute session reviewing your digital presence, ad performance, brand assets, and website. We show you the gaps and what we'd do to close them.",
          },
          {
            q: "Can I cancel a subscription?",
            a: "Subscriptions are month-to-month. No long-term contracts. We want you to stay because of results, not paperwork.",
          },
          {
            q: "How fast is the turnaround?",
            a: "Most creative deliverables: 48–72 hours. Websites: 7–14 days. Brand identities: 5–7 days.",
          },
        ].map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border-b border-sage/10 py-6"
          >
            <h4 className="font-body font-medium text-text-primary mb-2">{faq.q}</h4>
            <p className="font-body text-sm text-text-secondary">{faq.a}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
