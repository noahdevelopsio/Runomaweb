import Hero from "@/components/home/Hero";
import ParallaxImage from "@/components/home/ParallaxImage";
import Ticker from "@/components/home/Ticker";
import StatsBar from "@/components/home/StatsBar";
import Positioning from "@/components/home/Positioning";
import PillarsGrid from "@/components/home/PillarsGrid";
import HowItWorks from "@/components/home/HowItWorks";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ParallaxImage/>
      <Ticker />
      <StatsBar />
      <Positioning />
      <PillarsGrid />
      <HowItWorks />
      <CtaSection />
    </>
  );
}
