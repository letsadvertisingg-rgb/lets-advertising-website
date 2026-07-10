import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WebDesignPage } from "@/components/WebDesignPage";

export const metadata: Metadata = {
  title: "Web Design Services | Let's Advertising",
  description:
    "Build a website that grows your business with Let's Advertising. Custom design, responsive development, e-commerce, landing pages, and ongoing support.",
  openGraph: {
    title: "Web Design Services | Let's Advertising",
    description:
      "Build a website that grows your business with Let's Advertising. Custom design, responsive development, and high-performing websites.",
  },
};

export default function WebDesignRoute() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <WebDesignPage />
      </main>
      <Footer />
    </>
  );
}
