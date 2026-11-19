'use client';

import React from 'react';
import { Award, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Marquee } from '@/components/ui/Marquee';
import { TiltCard } from '@/components/ui/TiltCard';
import {
  CLIENT_LOGOS_PLACEHOLDER,
  RECOGNITION_BADGES_PLACEHOLDER,
} from '@/content/config';

export function TrustStrip() {
  return (
    <section
      id="trust-strip"
      aria-label="Trusted by growing teams"
      className="relative py-12 border-y border-surface-border bg-background-alt/40"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 space-y-10">
        {/* Marquee Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Trusted by growing teams &amp; compliance-first enterprises
          </p>
          <span className="rounded-full bg-orbit-green/10 px-3 py-0.5 font-mono text-[10px] text-orbit-green border border-orbit-green/25">
            Pan-India &amp; Global Corridors
          </span>
        </div>

        {/* Infinite Client Logo Marquee (Placeholder logos from config.ts) */}
        <Marquee speed={36}>
          {CLIENT_LOGOS_PLACEHOLDER.map((logo) => (
            <div
              key={logo.code}
              className="group flex items-center gap-3 rounded-2xl glass-panel px-5 py-3 border border-surface-border hover:border-orbit-green/40 transition-all"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orbit-navy to-orbit-green/30 font-mono text-xs font-bold text-orbit-green border border-orbit-green/30">
                {logo.code}
              </div>
              <div>
                <p className="font-heading text-xs font-bold text-foreground group-hover:text-orbit-green transition-colors">
                  {logo.name}
                </p>
                <p className="font-mono text-[10px] text-muted">
                  {logo.sector}
                </p>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Glowing 3D-Tilt Recognition Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {RECOGNITION_BADGES_PLACEHOLDER.map((badge, idx) => (
            <TiltCard
              key={badge.title}
              maxTilt={10}
              className="p-4 border border-orbit-green/20"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orbit-green/15 text-orbit-green border border-orbit-green/30">
                  {idx === 0 ? (
                    <ShieldCheck className="w-5 h-5" />
                  ) : idx === 1 ? (
                    <Building2 className="w-5 h-5" />
                  ) : idx === 2 ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <Award className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-orbit-cyan">
                    {badge.tag}
                  </span>
                  <h3 className="mt-0.5 font-heading text-sm font-bold text-foreground">
                    {badge.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted leading-snug">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
