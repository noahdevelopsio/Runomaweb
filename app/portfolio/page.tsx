import { Metadata } from "next";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionEyebrow text="Portfolio" />
          <h1 className="font-display text-5xl md:text-display-lg font-light text-text-primary mb-5">
            Work that moves
            <br />
            <em className="text-sage">brands forward.</em>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-xl">
            Case studies showcasing how we help African businesses build brands that stand out.
          </p>
        </motion.div>
      </section>

      <PortfolioClient />

      {/* CTA Section */}
      <section className="bg-surface-2 py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionEyebrow text="Ready to Start?" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-text-primary mb-6">
              Let&apos;s build something
              <br />
              <em className="text-sage">remarkable together.</em>
            </h2>
            <p className="font-body text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free audit to see how we can help your brand stand out in the African market.
            </p>
            <Button href="/contact" size="lg">
              Book Free Audit →
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
