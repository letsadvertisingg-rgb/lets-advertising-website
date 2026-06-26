import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AeoServicesPage } from "@/components/AeoServicesPage";

export const metadata: Metadata = {
  title: "AEO Services | Answer Engine Optimization | Let's Advertising",
  description:
    "Get your business recommended by AI search engines. AEO services for ChatGPT, Google AI Overviews, Gemini, Perplexity, and voice assistants from Let's Advertising.",
  openGraph: {
    title: "AEO Services | Answer Engine Optimization | Let's Advertising",
    description:
      "Get your business recommended by AI search engines with Answer Engine Optimization from Let's Advertising.",
  },
};

export default function AeoServicesRoute() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <AeoServicesPage />
      </main>
      <Footer />
    </>
  );
}
