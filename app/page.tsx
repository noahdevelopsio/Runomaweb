import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import CreativeShowcase from "@/components/home/CreativeShowcase";
import TeamImage from "@/components/home/TeamImage";
import Positioning from "@/components/home/Positioning";
import PillarsGrid from "@/components/home/PillarsGrid";
import HowItWorks from "@/components/home/HowItWorks";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CreativeShowcase />
      <TeamImage />
      <Positioning />
      <PillarsGrid />
      <HowItWorks />
      <CtaSection />
    </>
  );
}
