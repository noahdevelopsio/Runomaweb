import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import DynamicIslandNav from "@/components/layout/DynamicIslandNav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://runoma.com.ng"),
  title: "RUNOMA - AI Powered Creative Tech Studio | Lagos, Nigeria",
  description:
    "Lagos's first fully AI-integrated creative tech studio. 32 services across branding, design, video, web, and AI automation. Enterprise results at African-market prices.",
  keywords: "AI creative agency Lagos, digital marketing Lagos, brand design Nigeria, AI advertising, RUNOMA",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "RUNOMA - Where AI Meets Human Creativity",
    description: "AI powered creative tech studio based in Lagos, Nigeria.",
    url: "https://runoma.com.ng",
    type: "website",
    siteName: "RUNOMA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RUNOMA - Where AI Meets Human Creativity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RUNOMA - Where AI Meets Human Creativity",
    description: "AI powered creative tech studio based in Lagos, Nigeria.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-surface-1 text-text-primary font-body antialiased overflow-x-hidden">
        <Navbar />
        <DynamicIslandNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
