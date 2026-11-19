'use client';

import React from 'react';
import {
  FileCheck2,
  KeyRound,
  Lock,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { SECURITY_COMPLIANCE_PILLARS } from '@/content/config';

const PILLAR_ICONS = [
  ShieldCheck,
  KeyRound,
  Lock,
  FileCheck2,
  Scale,
];

export function SecurityCompliance() {
  return (
    <section
      aria-labelledby="security-compliance-heading"
      className="relative py-20 sm:py-24 bg-background-alt/30 border-y border-surface-border"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <ScrambleText text="TRUST ARCHITECTURE • PRIVACY & AUDIT GOVERNANCE" />
          <SplitText
            text="Security, Privacy & Consent Built Into Every Check."
            highlightWords={['Security,', 'Consent']}
            className="text-fluid-h2 text-foreground"
          />
          <p className="text-sm sm:text-base text-muted">
            Background verification handles sensitive personal and corporate
            records. Our workflows enforce strict consent gating, encryption,
            and audit traceability at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SECURITY_COMPLIANCE_PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] ?? ShieldCheck;
            return (
              <TiltCard
                key={pillar.id}
                maxTilt={10}
                className="p-6 flex flex-col justify-between border border-orbit-green/25"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orbit-green/15 text-orbit-green border border-orbit-green/35">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="rounded-full bg-orbit-green/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-orbit-green border border-orbit-green/25">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-base font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-surface-border flex items-center justify-between font-mono text-[10px] text-orbit-cyan">
                  <span>PILLAR // 0{idx + 1}</span>
                  <span>VERIFIED ✓</span>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
