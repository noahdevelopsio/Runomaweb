import { Metadata } from "next";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | 32+ AI Powered Creative Pillars | RUNOMA",
  description:
    "Explore our 6 pillars of excellence: Strategy, Branding, Content, Video, Web, and AI Automation. Custom creative solutions built for the African market, AI enhanced by default.",
};

export default function ServicesPage() {
  return (
    <div className="bg-surface-1 pt-32">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <div>
          <SectionEyebrow text="Services" />
          <h1 className="font-display text-5xl md:text-display-lg font-light text-text-primary mb-5">
            Everything your brand
            <br />
            <em>needs to grow.</em>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-xl">
            32 services across 6 pillars. AI enhanced by default.
            Built for Lagos, ready for the world.
          </p>
        </div>
      </section>

      <ServicesClient />

      {/* CTA */}
      <section className="py-20 bg-surface-0 text-center">
        <div className="max-w-xl mx-auto px-8">
          <h2 className="font-display text-3xl font-light text-text-primary mb-4">
            Not sure which pillar fits?
          </h2>
          <p className="font-body text-text-secondary mb-8">
            Book a free audit and we&apos;ll tell you exactly what your brand needs.
          </p>
          <Button href="/contact" size="lg">Book Free Audit →</Button>
        </div>
      </section>
    </div>
  );
}
