import { Metadata } from "next";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";
import AboutClient from "./AboutClient";
import AboutParallaxStory from "@/app/about/AboutParallaxStory";

export const metadata: Metadata = {
  title: "About RUNOMA | Our Mission & AI Powered Creative Philosophy",
  description:
    "Discover why RUNOMA was built in Lagos for Africa. Learn about our mission to close the creative gap using AI powered production and senior creative direction.",
};

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
          world-class creative without world-class prices or wait times.
          AI makes that possible. We built the studio to prove it.
        </p>
      </section>

      {/* Parallax Story */}
      <AboutParallaxStory />

      <AboutClient />

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
            Who is the audience? What emotion should this trigger? Then AI amplifies the execution,
            generating options at speed, testing variants, and optimizing in real time.
            <br /><br />
            The creative insight is human. The production velocity is AI.
          </p>
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
