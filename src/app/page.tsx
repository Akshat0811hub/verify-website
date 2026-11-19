import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesBento } from '@/components/home/ServicesBento';
import { HowItWorksPin } from '@/components/home/HowItWorksPin';
import { BusinessBgvCarousel } from '@/components/home/BusinessBgvCarousel';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { WhyOrbitSection } from '@/components/home/WhyOrbitSection';
import { CoverageMap } from '@/components/home/CoverageMap';
import { SecurityCompliance } from '@/components/home/SecurityCompliance';
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel';
import { FaqSection } from '@/components/home/FaqSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  path: '',
});

export default function HomePage() {
  return (
    <>
      {/* 1. Clean Corporate Hero with Real Orbit Verify Copy & Photography */}
      <HeroSection />

      {/* 2. Trusted Clients & Quality Standards */}
      <TrustStrip />

      {/* 3. Key Verification Proof Metrics */}
      <StatsSection />

      {/* 4. Employee & Business Verification Services */}
      <ServicesBento />

      {/* 5. Simple 5-Step Verification Process */}
      <HowItWorksPin />

      {/* 6. Business Due Diligence & Vendor Verification */}
      <BusinessBgvCarousel />

      {/* 7. Industries We Serve Across India */}
      <IndustriesSection />

      {/* 8. Why Choose Orbit Verify */}
      <WhyOrbitSection />

      {/* 9. Pan-India & Global Coverage */}
      <CoverageMap />

      {/* 10. Data Privacy, Security & Compliance */}
      <SecurityCompliance />

      {/* 11. Client Testimonials */}
      <TestimonialsCarousel />

      {/* 12. Frequently Asked Questions + FAQ Schema */}
      <FaqSection />

      {/* 13. Consultation & Demo Request CTA */}
      <FinalCtaSection />
    </>
  );
}
