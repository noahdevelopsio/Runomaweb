import type { Metadata } from "next";
import BlogSection from "@/components/home/BlogSection";

export const metadata: Metadata = {
  title: "Blog | RUNOMA - Insights from the Studio",
  description:
    "Explore insights on AI, branding, motion design, and creative strategy from RUNOMA's studio in Lagos, Nigeria.",
};

export default function BlogPage() {
  return (
    <div className="pt-24">
      <BlogSection />
    </div>
  );
}
