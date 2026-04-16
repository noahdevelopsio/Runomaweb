import { Metadata } from "next";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Book Your Free 45-Minute Brand Audit | RUNOMA",
  description:
    "Get in touch with RUNOMA. Ready to see what AI powered creativity looks like for your brand? Book your free audit today and get expert findings.",
};

export default function ContactPage() {
  return (
    <div className="bg-surface-1 pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Info */}
        <div>
          <SectionEyebrow text="Get in Touch" />
          <h1 className="font-display text-5xl md:text-display-md font-light text-text-primary mb-6">
            Let&apos;s build
            <br />
            <em className="text-sage">better, faster.</em>
          </h1>
          <p className="font-body text-lg text-text-secondary mb-12 leading-relaxed">
            Whether you&apos;re looking to scale your brand, automate your production,
            or just want to see what AI powered creativity can do for you—we&apos;re ready.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-xs tracking-widest text-sage uppercase mb-2">Email</h3>
              <p className="font-body text-text-primary">hello@runoma.com.ng</p>
            </div>
            <div>
              <h3 className="font-mono text-xs tracking-widest text-sage uppercase mb-2">Location</h3>
              <p className="font-body text-text-primary text-sm leading-relaxed">
                Lagos, Nigeria
                <br />
                Serving clients globally.
              </p>
            </div>
          </div>
        </div>

        <ContactClient />
      </div>
    </div>
  );
}
