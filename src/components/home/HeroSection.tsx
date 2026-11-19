'use client';

import React from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  Clock,
  FileCheck2,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function HeroSection() {
  return (
    <section
      aria-label="Orbit Verify Hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-background-alt via-background to-background border-b border-surface-border"
    >
      <div className="relative z-10 mx-auto max-w-container px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Real Orbit Verify Content & Justified Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-orbit-green/10 px-4 py-1.5 text-xs font-semibold text-orbit-green border border-orbit-green/25">
              <ShieldCheck className="w-4 h-4" />
              <span>Background Verification You Can Trust</span>
            </div>

            <h1 className="font-heading font-extrabold text-fluid-hero text-foreground">
              Hire With Confidence.{' '}
              <span className="orbit-gradient-text">
                Accurate &amp; Compliant
              </span>{' '}
              Background Verification Across India.
            </h1>

            <p className="text-base sm:text-lg text-muted text-justify leading-relaxed">
              Orbit Verify (operated by OrbiTouch Outsourcing Private Limited,
              New Delhi) helps businesses make confident hiring, onboarding, and
              vendor-risk decisions. We combine digital verification platforms,
              official government and court database checks, pan-India physical
              field verifications, and human quality review to deliver accurate,
              audit-ready screening reports within 24 to 72 hours.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton href="/contact" variant="primary" size="lg">
                Request a Free Consultation
              </MagneticButton>
              <MagneticButton href="#services-bento" variant="ghost" size="lg">
                Explore Verification Services
              </MagneticButton>
            </div>

            {/* Clean Trust Pillars */}
            <div className="pt-5 border-t border-surface-border grid grid-cols-3 gap-4 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-foreground">
                    24–72 Hours
                  </p>
                  <p className="text-muted text-left">Fast Turnaround Time</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-foreground">
                    100% Consent
                  </p>
                  <p className="text-muted text-left">Privacy &amp; Law Aligned</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FileCheck2 className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-foreground">
                    Pan-India &amp; Global
                  </p>
                  <p className="text-muted text-left">28 States + International</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Corporate Photography & Verified Report Preview */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Corporate Photo Card */}
              <div className="relative rounded-3xl overflow-hidden border border-surface-border shadow-xl bg-surface">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Orbit Verify corporate HR and employee background verification team in India"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
                <div className="p-5 bg-surface border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/orbit-verify-logo.jpg"
                      alt="Orbit Verify Official Logo"
                      width={96}
                      height={48}
                      className="h-10 w-auto object-contain rounded-lg bg-white p-1 border border-surface-border"
                    />
                    <div>
                      <p className="font-heading text-sm font-bold text-foreground">
                        OrbiTouch Outsourcing Pvt. Ltd.
                      </p>
                      <p className="text-xs text-muted text-left">
                        Employee BGV &amp; Corporate Due Diligence • New Delhi
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-orbit-green/15 px-3 py-1 text-xs font-semibold text-orbit-green">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Reports
                  </span>
                </div>
              </div>

              {/* Clean Floating Verification Badge (Top Left) */}
              <div className="hidden sm:flex items-center gap-3 absolute -top-5 -left-5 rounded-2xl bg-surface px-4 py-3 shadow-lg border border-orbit-green/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orbit-green/15 text-orbit-green">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">
                    Identity, Education &amp; Employment
                  </p>
                  <p className="text-[11px] text-orbit-green font-medium text-left">
                    Primary Source Verified ✓
                  </p>
                </div>
              </div>

              {/* Clean Floating Field Network Badge (Bottom Right) */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -right-4 rounded-2xl bg-surface px-4 py-3 shadow-lg border border-surface-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orbit-navy text-white">
                  <MapPin className="w-5 h-5 text-orbit-green" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">
                    Physical Address &amp; Court Checks
                  </p>
                  <p className="text-[11px] text-muted text-left">
                    Geo-Tagged Field Visits Pan-India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
