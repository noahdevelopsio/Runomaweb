import { Metadata } from "next";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | Case Studies of AI Powered Success | RUNOMA",
  description:
    "Browse our latest work for premium brands across Nigeria and Sub-Saharan Africa. See how we combine human insight with AI powered production velocity.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-surface-1 pt-32">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <div>
          <SectionEyebrow text="Portfolio" />
          <h1 className="font-display text-5xl md:text-display-lg font-light text-text-primary mb-5">
            Work that moves
            <br />
            <em className="text-sage">brands forward.</em>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-xl">
            Case studies showcasing how we help African businesses build brands that stand out.
          </p>
        </div>
      </section>

      <PortfolioClient />
    </div>
  );
}
