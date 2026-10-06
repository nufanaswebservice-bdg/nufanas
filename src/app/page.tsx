import { HeroSection } from "@/components/sections/hero";
import { PillarsSection } from "@/components/sections/pillars";
import { ServicesSection } from "@/components/sections/services";
import { IndustriesSection } from "@/components/sections/industries";
import { PortfolioPreviewSection } from "@/components/sections/portfolio-preview";
import { TechnologySection } from "@/components/sections/technology";
import { ProcessSection } from "@/components/sections/process";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { PricingSection } from "@/components/sections/pricing";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { LocationSection } from "@/components/sections/location";
import { CTASection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <ServicesSection />
      <IndustriesSection />
      <PortfolioPreviewSection />
      <TechnologySection />
      <ProcessSection />
      <WhyChooseUsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <LocationSection />
      <CTASection />
    </>
  );
}
