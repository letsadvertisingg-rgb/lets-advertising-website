import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnalyticsTrackingPage } from "@/components/AnalyticsTrackingPage";

export const metadata: Metadata = {
  title: "Analytics & Marketing Measurement Services | Let's Advertising",
  description:
    "Transform data into growth with advanced analytics from Let's Advertising. GA4 setup, tag management, dashboards, attribution, and conversion tracking.",
  openGraph: {
    title: "Analytics & Marketing Measurement Services | Let's Advertising",
    description:
      "Transform data into growth with advanced analytics and marketing measurement from Let's Advertising.",
  },
};

export default function AnalyticsTrackingRoute() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <AnalyticsTrackingPage />
      </main>
      <Footer />
    </>
  );
}
