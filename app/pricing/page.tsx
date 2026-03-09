"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { tiers, includedInAll, faqs } from "@/lib/data/pricing";

// ─── FAQ Item ──────────────────────────────────────────

function FaqRow({ q, a, index }: { q: string; a: string; index: number }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-sage/10"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-5 text-left group"
            >
                <span className="font-body text-sm md:text-base text-text-primary pr-8 group-hover:text-sage transition-colors duration-200">
                    {q}
                </span>
                <span className="shrink-0 text-sage">
                    {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="font-body text-sm text-text-secondary leading-relaxed pb-5 max-w-2xl">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ─── Tier Card ─────────────────────────────────────────

function TierCard({ tier, index }: { tier: typeof tiers[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`relative rounded-3xl p-6 flex flex-col transition-all duration-300
        ${tier.featured
                    ? "bg-gradient-to-b from-[#1C3028] to-surface-2 border border-sage/40 md:shadow-glow md:scale-[1.03]"
                    : "bg-gradient-card border border-sage/[0.08] hover:border-sage/20 hover:-translate-y-1"
                }`}
        >
            {/* Featured badge */}
            {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="font-mono text-[10px] tracking-widest uppercase
                           bg-gradient-sage text-ink px-4 py-1.5 rounded-full">
                        {tier.badge}
                    </span>
                </div>
            )}

            {/* Header */}
            <div className="mb-5">
                <h3 className={`font-display text-2xl font-semibold mb-1
          ${tier.featured ? "text-sage" : "text-text-primary"}`}>
                    {tier.name}
                </h3>
                <p className="font-mono text-xs text-text-muted tracking-wide">
                    {tier.forWho}
                </p>
                <p className="font-body text-sm text-text-secondary mt-3 italic">
                    {tier.tagline}
                </p>
            </div>

            {/* Divider */}
            <div className={`h-px mb-5 ${tier.featured ? "bg-sage/30" : "bg-sage/10"}`} />

            {/* Features */}
            <ul className="space-y-3 flex-1 mb-6">
                {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                        <Check
                            size={14}
                            className={`mt-0.5 shrink-0 ${tier.featured ? "text-sage" : "text-sage/60"}`}
                        />
                        <span className="font-body text-sm text-text-secondary">{f}</span>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <Button
                href="/contact"
                variant={tier.featured ? "primary" : "ghost"}
                fullWidth
            >
                {tier.name === "Enterprise" ? "Let&apos;s Talk →" : "Book a Free Audit →"}
            </Button>
        </motion.div>
    );
}

// ─── Page ──────────────────────────────────────────────

export default function PricingPage() {
    return (
        <div className="bg-surface-1 pt-32">

            {/* ── Hero ── */}
            <section className="max-w-6xl mx-auto px-8 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <SectionEyebrow text="Pricing" />
                    <h1 className="font-display text-5xl md:text-display-lg font-light text-text-primary mb-5">
                        A subscription built to
                        <br />
                        <em><GradientText>fuel your growth.</GradientText></em>
                    </h1>
                    <p className="font-body text-lg text-text-secondary max-w-xl leading-relaxed">
                        Pick a creative tier. We handle the rest — strategy, design, production,
                        and AI — every month. No scope creep. No surprise invoices. Just output.
                    </p>
                </motion.div>
            </section>

            {/* ── Included in all plans ── */}
            <section className="max-w-6xl mx-auto px-8 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-card rounded-3xl border border-sage/10 p-8 md:p-12"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-8 h-px bg-sage" />
                        <span className="font-mono text-xs tracking-[0.15em] text-sage uppercase">
                            Included in every plan
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {includedInAll.map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06, duration: 0.5 }}
                                className="flex items-start gap-3"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5 shrink-0" />
                                <span className="font-body text-sm text-text-secondary leading-snug">
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── Tier Cards ── */}
            <section className="max-w-[90rem] mx-auto px-8 pb-24">
                <div className="text-center mb-14">
                    <SectionEyebrow text="Plans" />
                    <h2 className="font-display text-3xl md:text-display-sm font-light text-text-primary">
                        Choose your creative bandwidth.
                    </h2>
                    <p className="font-body text-text-secondary mt-3 max-w-md mx-auto">
                        Not sure which plan is right for you? Book a free audit — we&apos;ll recommend
                        the exact tier for your brand&apos;s stage and goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
                    {tiers.map((tier, i) => (
                        <TierCard key={tier.name} tier={tier} index={i} />
                    ))}
                </div>

                {/* Nudge below cards */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center font-body text-sm text-text-muted mt-10"
                >
                    Pricing is tailored to your brand&apos;s scope and goals.{" "}
                    <a href="/contact" className="text-sage hover:underline underline-offset-4">
                        Book a call
                    </a>{" "}
                    and we&apos;ll walk you through it. No commitment.
                </motion.p>
            </section>

            {/* ── How it works ── */}
            <section className="bg-surface-0 py-24">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <SectionEyebrow text="The Model" />
                        <h2 className="font-display text-3xl md:text-display-sm font-light text-text-primary">
                            Creative bandwidth,
                            <br />
                            <em className="text-sage">not billable hours.</em>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                num: "01",
                                title: "Pick a tier",
                                desc: "Choose the creative plan that matches your brand&apos;s current stage and monthly output needs.",
                            },
                            {
                                num: "02",
                                title: "Submit projects",
                                desc: "Brief us on what you need — ads, videos, websites, strategy. We get to work within 48 hours.",
                            },
                            {
                                num: "03",
                                title: "Grow every month",
                                desc: "Your brand compounds. Every month we learn more, move faster, and produce better work for you.",
                            },
                        ].map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="relative"
                            >
                                <div className="font-mono text-xs tracking-[0.15em] text-sage mb-4">
                                    {step.num}
                                </div>
                                <h3 className="font-display text-2xl font-light text-text-primary mb-3">
                                    {step.title}
                                </h3>
                                <p className="font-body text-sm text-text-secondary leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="max-w-3xl mx-auto px-8 py-24">
                <div className="text-center mb-14">
                    <SectionEyebrow text="Questions" />
                    <h2 className="font-display text-3xl font-light text-text-primary">
                        Frequently asked questions.
                    </h2>
                </div>

                <div>
                    {faqs.map((item, i) => (
                        <FaqRow key={item.q} q={item.q} a={item.a} index={i} />
                    ))}
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="py-24 bg-surface-0 text-center">
                <div className="max-w-xl mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="font-display text-3xl md:text-display-sm font-light text-text-primary mb-4">
                            Not sure where to start?
                        </h2>
                        <p className="font-body text-text-secondary mb-8 leading-relaxed">
                            Book a free 45-minute audit. We&apos;ll tell you exactly which tier fits your
                            brand, what we&apos;d do first, and what it would look like working together.
                            No commitment. No pressure.
                        </p>
                        <Button href="/contact" size="lg">
                            Book Your Free Audit →
                        </Button>
                        <p className="font-body text-xs text-text-muted mt-5">
                            No commitment · 45 minutes · Written findings sent afterward
                        </p>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
