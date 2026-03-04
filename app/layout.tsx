import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/ui/GrainOverlay";

export const metadata: Metadata = {
  title: "RUNOMA — AI-Powered Creative Tech Studio | Lagos, Nigeria",
  description:
    "Lagos's first fully AI-integrated creative tech studio. 32 services across branding, design, video, web, and AI automation. Enterprise results at African-market prices.",
  keywords: "AI creative agency Lagos, digital marketing Lagos, brand design Nigeria, AI advertising, RUNOMA",
  openGraph: {
    title: "RUNOMA — Where AI Meets Human Creativity",
    description: "AI-powered creative tech studio based in Lagos, Nigeria.",
    url: "https://runoma.co",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-surface-1 text-text-primary font-body antialiased overflow-x-hidden">
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
