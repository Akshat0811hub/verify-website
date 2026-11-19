import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesBento } from '@/components/home/ServicesBento';
import { HowItWorksPin } from '@/components/home/HowItWorksPin';
import { DashboardShowcase } from '@/components/home/DashboardShowcase';
import { BusinessBgvCarousel } from '@/components/home/BusinessBgvCarousel';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { WhyOrbitSection } from '@/components/home/WhyOrbitSection';
import { CoverageMap } from '@/components/home/CoverageMap';
import { SecurityCompliance } from '@/components/home/SecurityCompliance';
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel';
import { FaqSection } from '@/components/home/FaqSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { OrbitDivider } from '@/components/ui/OrbitDivider';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  path: '',
});

export default function HomePage() {
  return (
    <>
      {/* 5.1 Full-Viewport Interactive 3D Hero */}
      <HeroSection />

      {/* 5.2 Infinite Client Marquee & Recognition Badges */}
      <TrustStrip />

      {/* 5.3 Animated Count-Up Proof Metrics */}
      <StatsSection />

      <OrbitDivider label="VERIFICATION MODULES" />

      {/* 5.4 What We Verify: Employee & Business Bento Grid */}
      <ServicesBento />

      {/* 5.5 Scroll-Pinned 5-Step Verification Timeline */}
      <HowItWorksPin />

      {/* 5.6 Interactive HTML/CSS Live Client Portal Showcase */}
      <DashboardShowcase />

      {/* 5.7 GSAP Pinned Horizontal Carousel: B2B Due Diligence */}
      <BusinessBgvCarousel />

      {/* 5.8 Industries We Serve + Cursor-Following Dossier + 20+ Sector Marquee */}
      <IndustriesSection />

      {/* 5.9 Why Orbit Verify: Split Sticky Narrative */}
      <WhyOrbitSection />

      {/* 5.10 Interactive Pan-India & Global Coverage Radar Map */}
      <CoverageMap />

      {/* 5.11 Security, Privacy & Compliance Architecture */}
      <SecurityCompliance />

      {/* 5.12 Draggable Client Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* 5.13 BGV Frequently Asked Questions + FAQ Schema */}
      <FaqSection />

      {/* 5.14 Final Orbit CTA + Inline Validated Demo Form */}
      <FinalCtaSection />
    </>
  );
}
