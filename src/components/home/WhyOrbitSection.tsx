'use client';

import React from 'react';
import {
  Clock,
  FileCheck2,
  Globe2,
  Headphones,
  MapPin,
  ShieldCheck,
  Sliders,
} from 'lucide-react';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { MagneticButton } from '@/components/ui/MagneticButton';

const WHY_POINTS = [
  {
    id: '01',
    title: 'Fast Turnaround Without Shortcuts',
    description:
      'Same-day digital identity, credit, and watchlist checks paired with parallel registrar and HR outreach so your best candidates never drop off waiting.',
    icon: Clock,
    tag: '4–24h Digital TAT',
  },
  {
    id: '02',
    title: 'Accurate, Evidence-Backed Reports',
    description:
      'Every report undergoes dual-analyst quality verification and attaches timestamped source proofs, GPS photographs, and Red/Amber/Green severity grading.',
    icon: FileCheck2,
    tag: 'Dual-Stage QA Gate',
  },
  {
    id: '03',
    title: 'Legally Compliant & 100% Consent-Based',
    description:
      'Built around Indian DPDP data privacy principles and lawful screening norms. Zero checks start without explicit, auditable candidate authorization.',
    icon: ShieldCheck,
    tag: 'DPDP & Audit Ready',
  },
  {
    id: '04',
    title: 'Pan-India On-Ground Field Network',
    description:
      'Trained field verification specialists across metro cities, Tier-2/3 hubs, and remote rural pin codes for physical residence and vendor facility audits.',
    icon: MapPin,
    tag: '28 States & 8 UTs',
  },
  {
    id: '05',
    title: 'Global Coverage Across 200+ Territories',
    description:
      'Cross-border education, employment, OFAC/UN/EU sanctions, PEP, and adverse media checks for international hires and global capability centers.',
    icon: Globe2,
    tag: 'Cross-Border Ready',
  },
  {
    id: '06',
    title: 'Dedicated Support & Direct Leadership Escalation',
    description:
      'No ticket black holes. Work with a dedicated account specialist in New Delhi backed by a direct executive escalation desk (jinendra@orbitverify.com).',
    icon: Headphones,
    tag: 'Human Account Desk',
  },
  {
    id: '07',
    title: 'Custom BGV Packages for Every Role Tier',
    description:
      'Mix and match 29 employee and B2B verification modules into custom packages for gig workers, freshers, lateral engineers, CXOs, and suppliers.',
    icon: Sliders,
    tag: '29 Modular Checks',
  },
];

export function WhyOrbitSection() {
  return (
    <section
      aria-labelledby="why-orbit-verify-heading"
      className="relative py-20 sm:py-24 bg-background-alt/30 border-y border-surface-border"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sticky Narrative Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <ScrambleText text="THE ORBIT ADVANTAGE • WHY TEAMS SWITCH" />
            <SplitText
              text="Engineered for Speed. Anchored in Evidence."
              highlightWords={['Speed.', 'Evidence.']}
              className="text-fluid-h2 text-foreground"
            />
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Legacy BGV vendors trap HR teams between slow manual chasers and
              shallow database checks. Orbit Verify unifies instant API rails
              with deep primary-source forensics and pan-India physical field
              operations.
            </p>

            <div className="rounded-2xl glass-panel p-5 border border-orbit-green/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orbit-green">
                <span className="h-2 w-2 rounded-full bg-orbit-green" />
                <span>Orbitouch Outsourcing Pvt. Ltd.</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Headquartered in New Delhi with full statutory incorporation
                (CIN: U72900DL2019PTC350022), dedicated university &amp; court
                research desks, and enterprise SLA governance.
              </p>
            </div>

            <div className="pt-2">
              <MagneticButton href="/contact" variant="primary" size="lg">
                Schedule a 15-Min Demo
              </MagneticButton>
            </div>
          </div>

          {/* Right Cards List (Clean, non-overlapping for smooth scrolling) */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.id}
                  className="rounded-2xl glass-panel p-6 border border-surface-border hover:border-orbit-green/45 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orbit-green/15 text-orbit-green border border-orbit-green/35">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-orbit-green">
                          {point.id} //
                        </span>
                        <span className="rounded-full bg-orbit-green/10 px-2.5 py-0.5 font-mono text-[10px] text-orbit-cyan border border-orbit-cyan/25">
                          {point.tag}
                        </span>
                      </div>
                      <h3 className="mt-1 font-heading text-lg font-bold text-foreground">
                        {point.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
