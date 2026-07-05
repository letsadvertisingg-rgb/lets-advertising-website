import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogListingPage } from "@/components/BlogListingPage";

export const metadata: Metadata = {
  title: "Blog | Digital Marketing & AEO Insights | Let's Advertising",
  description:
    "Expert guides on SEO, Answer Engine Optimization, content marketing, and AI search from Let's Advertising.",
  openGraph: {
    title: "Blog | Digital Marketing & AEO Insights | Let's Advertising",
    description:
      "Expert guides on SEO, Answer Engine Optimization, content marketing, and AI search from Let's Advertising.",
  },
};

export default function BlogRoute() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <BlogListingPage />
      </main>
      <Footer />
    </>
  );
}
