import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PaidAdvertisingPage } from "@/components/PaidAdvertisingPage";

export const metadata: Metadata = {
  title: "Paid Advertising Services | Let's Advertising",
  description:
    "Drive more leads, sales, and revenue with data-driven paid advertising from Let's Advertising. Google Ads, Meta, LinkedIn, YouTube, and remarketing campaigns.",
  openGraph: {
    title: "Paid Advertising Services | Let's Advertising",
    description:
      "Drive more leads, sales, and revenue with data-driven paid advertising from Let's Advertising.",
  },
};

export default function PaidAdvertisingRoute() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <PaidAdvertisingPage />
      </main>
      <Footer />
    </>
  );
}
