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
      className="relative py-16 sm:py-24 bg-background-alt/50 border-y border-surface-border"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <ScrambleText text="Data Security & Compliance" />
          <SplitText
            text="Privacy, Consent & Audit Integrity in Every Report"
            highlightWords={['Privacy,', 'Consent', 'Integrity']}
            className="text-fluid-h2 text-foreground"
          />
          <p className="text-sm sm:text-base text-muted text-center">
            Background verification involves sensitive personal and corporate
            information. Orbit Verify follows strict data protection,
            consent-first workflows, and complete audit documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SECURITY_COMPLIANCE_PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] ?? ShieldCheck;
            return (
              <TiltCard
                key={pillar.id}
                className="p-6 flex flex-col justify-between border border-surface-border"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orbit-green/10 text-orbit-green border border-orbit-green/25">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="rounded-full bg-orbit-green/10 px-2.5 py-0.5 text-[10px] font-semibold text-orbit-green">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-base font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted text-justify leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
