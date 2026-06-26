import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialMediaMarketingPage } from "@/components/SocialMediaMarketingPage";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Let's Advertising",
  description:
    "Grow your brand, engage your audience, and drive real business results with data-driven social media strategies from Let's Advertising. Facebook, Instagram, LinkedIn, TikTok & more.",
  openGraph: {
    title: "Social Media Marketing Services | Let's Advertising",
    description:
      "Grow your brand, engage your audience, and drive real business results with data-driven social media strategies from Let's Advertising.",
  },
};

export default function SocialMediaMarketingRoute() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <SocialMediaMarketingPage />
      </main>
      <Footer />
    </>
  );
}
