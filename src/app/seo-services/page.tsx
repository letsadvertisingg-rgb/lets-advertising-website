import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SeoServicesPage } from "@/components/SeoServicesPage";

export const metadata: Metadata = {
  title: "SEO Services | Let's Advertising",
  description:
    "Increase your visibility, drive organic traffic, and grow your business with SEO from Let's Advertising. Audits, on-page, technical, local, content, and link building.",
  openGraph: {
    title: "SEO Services | Let's Advertising",
    description:
      "Increase your visibility, drive organic traffic, and grow your business with strategic SEO from Let's Advertising.",
  },
};

export default function SeoServicesRoute() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <SeoServicesPage />
      </main>
      <Footer />
    </>
  );
}
