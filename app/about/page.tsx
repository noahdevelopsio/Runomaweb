"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";

const tools = [
  "Midjourney", "Adobe Firefly", "ChatGPT", "Claude AI",
  "Runway ML", "CapCut", "Make.com", "Framer",
  "Webflow", "Figma", "GSAP", "Framer Motion",
  "HubSpot", "Brand24", "Semrush", "GrackerAI",
];

export default function AboutPage() {
  return (
    <div className="bg-surface-1 pt-32">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <SectionEyebrow text="About RUNOMA" />
        <h1 className="font-display text-5xl md:text-display-lg font-light text-text-primary mb-6">
          Built in Lagos.
          <br />
          <em className="text-sage">Built for Africa.</em>
        </h1>
        <p className="font-body text-lg text-text-secondary max-w-xl leading-relaxed">
          RUNOMA was born from a simple observation: Nigerian businesses deserve
          world-class creative — without world-class prices or wait times.
          AI makes that possible. We built the studio to prove it.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-surface-2 py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionEyebrow text="Our Mission" />
              <h2 className="font-display text-display-sm font-light text-text-primary mb-6">
                We exist to close
                <br />
                <em>the creative gap.</em>
              </h2>
              <p className="font-body text-text-secondary leading-relaxed">
                For too long, Nigerian brands have had to choose between expensive
                international agencies that don&apos;t understand the culture, or local
                agencies that can&apos;t deliver the quality. RUNOMA is neither.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface-3 rounded-3xl p-8 border border-sage/10"
            >
              {[
                { stat: "₦1.4B", label: "Nigeria's projected AI market size" },
                { stat: "83%", label: "Lagos marketers using AI without guidance" },
                { stat: "40M+", label: "Nigerians on Instagram and TikTok" },
                { stat: "0", label: "Lagos agencies offering AEO or design systems" },
              ].map((item) => (
                <div key={item.stat} className="flex items-baseline gap-4 py-3 border-b border-sage/10 last:border-0">
                  <span className="font-mono text-2xl text-sage w-20 shrink-0">{item.stat}</span>
                  <span className="font-body text-sm text-text-secondary">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <SectionEyebrow text="How We Think" />
          <h2 className="font-display text-3xl md:text-display-md font-light text-text-primary mb-8">
            <AnimatedText text="AI doesn't replace creativity." />
            <br />
            <AnimatedText text="It expands it." delay={0.3} />
          </h2>
          <p className="font-body text-text-secondary text-lg leading-relaxed">
            Every RUNOMA deliverable begins with human thinking: What does this brand stand for?
            Who is the audience? What emotion should this trigger? Then AI amplifies the execution —
            generating options at speed, testing variants, and optimizing in real time.
            <br /><br />
            The creative insight is human. The production velocity is AI.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-surface-2 py-24">
        <div className="max-w-6xl mx-auto px-8">
          <SectionEyebrow text="Our Toolstack" />
          <h2 className="font-display text-3xl font-light text-text-primary mb-10">
            The AI stack behind the studio.
          </h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="font-mono text-xs tracking-wider px-4 py-2 rounded-full
                           border border-sage/20 text-text-secondary hover:border-sage/50
                           hover:text-text-primary transition-all duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-xl mx-auto px-8">
          <h2 className="font-display text-3xl font-light text-text-primary mb-4">
            Ready to work with us?
          </h2>
          <p className="font-body text-text-secondary mb-8">
            Book a free audit and let&apos;s build something great together.
          </p>
          <Button href="/contact" size="lg">Work With Us →</Button>
        </div>
      </section>
    </div>
  );
}
