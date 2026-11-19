'use client';

import React from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import type { IndustryItem } from '@/content/industries';
import { SERVICES_DATA, type ServiceItem } from '@/content/services';
import { TiltCard } from '@/components/ui/TiltCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { FaqSection } from '@/components/home/FaqSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';

interface IndustryDetailTemplateProps {
  industry: IndustryItem;
}

export function IndustryDetailTemplate({
  industry,
}: IndustryDetailTemplateProps) {
  const linkedServices = industry.recommendedServiceSlugs
    .map((slug) => SERVICES_DATA.find((s) => s.slug === slug))
    .filter((s): s is ServiceItem => Boolean(s));

  return (
    <div className="pt-28 pb-10">
      {/* 1. Industry Hero */}
      <section className="relative py-12 sm:py-16 bg-background-alt/50 border-b border-surface-border overflow-hidden">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-muted mb-6"
          >
            <Link href="/" className="hover:text-orbit-green transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/industries"
              className="hover:text-orbit-green transition-colors"
            >
              Industries
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-orbit-green font-semibold">
              {industry.shortTitle}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <ScrambleText text="Sector-Specific Background Verification" />

              <SplitText
                as="h1"
                text={`Background Verification for ${industry.title}`}
                highlightWords={[
                  'Verification',
                  industry.shortTitle.split(' ')[0],
                ]}
                className="text-fluid-hero text-foreground"
              />

              <p className="text-base sm:text-lg font-semibold text-orbit-green">
                {industry.oneLiner}
              </p>

              <p className="text-sm sm:text-base text-muted text-justify leading-relaxed">
                {industry.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton href="/contact" variant="primary" size="lg">
                  Request Sector Consultation
                </MagneticButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden glass-panel-strong border border-surface-border shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                  alt={industry.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orbit-green/15 text-orbit-green">
                    <ServiceIcon name={industry.iconName} className="w-6 h-6" />
                  </div>
                  <h2 className="font-heading text-lg font-bold text-foreground">
                    Regulatory &amp; Audit Alignment
                  </h2>
                  <p className="text-xs text-muted text-justify leading-relaxed">
                    {industry.complianceNote}
                  </p>
                  <div className="pt-3 border-t border-surface-border flex items-center gap-2 text-xs font-semibold text-orbit-green">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Customized Role-Wise Screening Packages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Sector Risk Challenges */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-2xl space-y-2 mb-10">
            <ScrambleText text="Industry Hiring Challenges" />
            <h2 className="font-heading font-extrabold text-fluid-h2 text-foreground">
              Why {industry.shortTitle} Needs Thorough Screening
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.keyChallenges.map((challenge) => (
              <TiltCard key={challenge.title} className="p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 border border-amber-500/25">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {challenge.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted text-justify leading-relaxed">
                  {challenge.detail}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Recommended Verification Stack & Modules */}
      <section className="py-16 sm:py-20 bg-background-alt/50 border-y border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <ScrambleText text="Recommended Screening Package" />
              <h2 className="font-heading font-extrabold text-fluid-h3 text-foreground">
                Core Verification Checks for {industry.shortTitle}
              </h2>
              <div className="space-y-3 pt-2">
                {industry.recommendedChecks.map((check) => (
                  <div
                    key={check}
                    className="flex items-start gap-3 rounded-2xl glass-panel p-4 border border-surface-border text-xs sm:text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="text-xs font-bold uppercase tracking-wider text-orbit-green mb-4">
                Included Orbit Verify Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {linkedServices.map((srv) => (
                  <TiltCard
                    key={srv.slug}
                    className="p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orbit-green/10 text-orbit-green border border-orbit-green/25">
                        <ServiceIcon name={srv.iconName} className="w-5 h-5" />
                      </div>
                      <h4 className="mt-4 font-heading text-base font-bold text-foreground">
                        {srv.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-muted text-justify leading-relaxed">
                        {srv.shortDescription}
                      </p>
                    </div>
                    <Link
                      href={`/${srv.slug}`}
                      className="mt-4 pt-3 border-t border-surface-border inline-flex items-center justify-between text-xs font-bold text-orbit-green"
                    >
                      <span>View Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sector FAQs */}
      {industry.faqs.length > 0 && (
        <FaqSection
          faqs={industry.faqs}
          title={`${industry.shortTitle} BGV — Frequently Asked Questions`}
        />
      )}

      {/* 5. Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
