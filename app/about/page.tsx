import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About RUNOMA | Our Mission & AI Powered Creative Philosophy",
  description:
    "Discover why RUNOMA was built in Lagos for Africa. Learn about our mission to close the creative gap using AI powered production and senior creative direction.",
};

export default function AboutPage() {
  return <AboutClient />;
}
