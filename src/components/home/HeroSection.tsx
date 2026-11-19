'use client';

import React from 'react';
import {
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  ShieldCheck,
} from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrambleText } from '@/components/ui/ScrambleText';
import HeroOrbitScene from './HeroOrbitScene';

export function HeroSection() {
  return (
    <section
      aria-label="Orbit Verify Hero"
      className="relative min-h-[90vh] pt-28 pb-14 lg:pt-32 lg:pb-16 flex items-center overflow-hidden bg-radar-grid"
    >
      {/* Lightweight Static Ambient Radial Glow (Zero GPU Repaint Cost) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px circle at 70% 45%, rgba(22, 193, 90, 0.1), rgba(34, 211, 238, 0.05) 45%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-container px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Subtext, CTAs, Trust Line */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 border border-orbit-green/35">
              <ScrambleText text="ORBIT VERIFY • NEXT-GEN BGV ENGINE" />
            </div>

            <h1 className="font-heading font-extrabold text-fluid-hero tracking-tight text-foreground">
              Hire With Confidence.
              <br className="hidden sm:inline" />{' '}
              <span className="orbit-gradient-text">Verify</span> in Minutes,
              Not Days.
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-muted leading-relaxed">
              Fast, accurate and legally compliant background verification for
              employers and businesses across India and international markets.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton href="/contact" variant="primary" size="lg">
                Request a Demo
              </MagneticButton>
              <MagneticButton href="#services-bento" variant="ghost" size="lg">
                Explore Services
              </MagneticButton>
            </div>

            {/* Small Trust Line */}
            <div className="pt-4 border-t border-surface-border flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-muted">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-orbit-green" />
                ISO-aligned processes
              </span>
              <span className="text-orbit-green">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orbit-cyan" />
                Consent-based
              </span>
              <span className="text-orbit-green">•</span>
              <span className="inline-flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-orbit-blue" />
                Audit-ready reports
              </span>
            </div>
          </div>

          {/* Right Column: Lightweight Hardware-Accelerated Orbit Scene */}
          <div className="lg:col-span-6 relative">
            <HeroOrbitScene />
          </div>
        </div>

        {/* Scroll Cue */}
        <a
          href="#trust-strip"
          aria-label="Scroll to explore"
          className="mt-6 lg:mt-2 mx-auto flex w-fit flex-col items-center gap-1 text-muted hover:text-orbit-green transition-colors"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Scroll to Scan
          </span>
          <ChevronDown className="w-4 h-4 text-orbit-green" />
        </a>
      </div>
    </section>
  );
}
