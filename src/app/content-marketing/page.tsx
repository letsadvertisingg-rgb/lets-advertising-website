import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContentMarketingPage } from "@/components/ContentMarketingPage";

export const metadata: Metadata = {
  title: "Content Marketing Services | Let's Advertising",
  description:
    "Turn content into customers with strategic content marketing from Let's Advertising. SEO content, blogs, video, email, and AI-optimized content that drives growth.",
  openGraph: {
    title: "Content Marketing Services | Let's Advertising",
    description:
      "Turn content into customers with strategic content marketing from Let's Advertising.",
  },
};

export default function ContentMarketingRoute() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <ContentMarketingPage />
      </main>
      <Footer />
    </>
  );
}
