"use client";

import CTA from "@/components/CTA";
import DualServicesPillars from "@/components/DualServicesPillars";
import EcoImpactSection from "@/components/EcoImpact";
import FAQ from "@/components/FAQ";
import HomeHero from "@/components/HomeHero";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <DualServicesPillars />
      <EcoImpactSection />
      <CTA />
      <FAQ />
    </>
  );
};

export default HomePage;
