import { Metadata } from "next";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing & Plans | Scalable AI Powered Creative Subscriptions | RUNOMA",
  description:
    "Flexible monthly creative bandwidth for brands of all sizes. No scope creep. No surprise invoices. Just high-quality output across design, video, and AI powered automation.",
};

export default function PricingPage() {
  return (
    <div className="bg-surface-1 pt-32">
      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <div>
          <SectionEyebrow text="Pricing" />
          <h1 className="font-display text-5xl md:text-display-lg font-light text-text-primary mb-5">
            A subscription built to
            <br />
            <em>fuel your growth.</em>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-xl leading-relaxed">
            Pick a creative tier. We handle the rest, from strategy and design to production,
            and AI, every month. No scope creep. No surprise invoices. Just output.
          </p>
        </div>
      </section>

      <PricingClient />
    </div>
  );
}
