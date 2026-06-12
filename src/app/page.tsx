import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoMarquee } from "@/components/LogoMarquee";
import { GetBackSection } from "@/components/GetBackSection";
import { ScaleSection } from "@/components/ScaleSection";
import { StickyFeatures } from "@/components/StickyFeatures";
import { CaseStudies } from "@/components/CaseStudies";
import { TopCompanies } from "@/components/TopCompanies";
import { RoiCalculator } from "@/components/RoiCalculator";
import { PlatformCarousel } from "@/components/PlatformCarousel";
import { FaqSection } from "@/components/FaqSection";
import { InsightsSection } from "@/components/InsightsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <LogoMarquee />
        <GetBackSection />
        <ScaleSection />
        <StickyFeatures />
        <CaseStudies />
        <TopCompanies />
        <RoiCalculator />
        <PlatformCarousel />
        <FaqSection />
        <InsightsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
