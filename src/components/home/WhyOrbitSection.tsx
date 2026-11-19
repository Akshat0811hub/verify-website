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
    title: 'Fast Turnaround Without Shortcuts',
    description:
      'Same-day digital identity, credit, and database checks paired with proactive university registrar and HR follow-ups so your best candidates join on time.',
    icon: Clock,
    tag: '24–72 Hrs Turnaround',
  },
  {
    title: 'Accurate, Evidence-Backed Reports',
    description:
      'Every screening report undergoes a strict two-stage quality review and includes timestamped source proofs, geo-tagged photos, and Red/Amber/Green status grading.',
    icon: FileCheck2,
    tag: 'Two-Stage QA Review',
  },
  {
    title: 'Legally Compliant & 100% Consent-Based',
    description:
      'Designed around Indian data privacy guidelines and fair hiring norms. Every verification begins only after explicit candidate authorization.',
    icon: ShieldCheck,
    tag: 'Privacy & Law Aligned',
  },
  {
    title: 'Pan-India Physical Field Network',
    description:
      'Trained field verification executives across metro cities, Tier-2/3 towns, and rural pin codes for doorstep residential address and commercial site inspections.',
    icon: MapPin,
    tag: 'All 28 States Covered',
  },
  {
    title: 'Global & Cross-Border Screening',
    description:
      'International education, past employment, global watchlists, sanctions, PEP, and adverse media checks across major international hiring markets.',
    icon: Globe2,
    tag: 'International Coverage',
  },
  {
    title: 'Dedicated Account Manager & Escalation Desk',
    description:
      'Work directly with an experienced verification team in New Delhi backed by leadership escalation support (jinendra@orbitverify.com).',
    icon: Headphones,
    tag: 'Personal Client Support',
  },
  {
    title: 'Custom BGV Packages for Every Role',
    description:
      'Choose from 29 employee and business verification checks to build tailored screening packages for freshers, lateral hires, executives, and vendors.',
    icon: Sliders,
    tag: 'Flexible Packages',
  },
];

export function WhyOrbitSection() {
  return (
    <section
      aria-labelledby="why-orbit-verify-heading"
      className="relative py-16 sm:py-24 bg-background-alt/50 border-y border-surface-border"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sticky Column with Real Corporate Image */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            <ScrambleText text="Why Businesses Choose Orbit Verify" />
            <SplitText
              text="Reliable Verification Built on Speed, Accuracy & Trust"
              highlightWords={['Speed,', 'Accuracy', 'Trust']}
              className="text-fluid-h2 text-foreground"
            />
            <p className="text-sm sm:text-base text-muted text-justify leading-relaxed">
              Operated by OrbiTouch Outsourcing Private Limited in New Delhi,
              Orbit Verify combines automated verification technology with
              primary-source research and an extensive pan-India field network
              to help organizations hire safely and confidently.
            </p>

            <div className="rounded-3xl overflow-hidden border border-surface-border shadow-md bg-surface">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="Orbit Verify background screening specialists reviewing candidate verification reports"
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div className="p-4 text-xs text-muted text-justify">
                <strong className="text-foreground">
                  OrbiTouch Outsourcing Pvt. Ltd.
                </strong>{' '}
                — Headquartered in New Delhi (CIN: U72900DL2019PTC350022),
                delivering trusted employee and business background checks
                across India.
              </div>
            </div>

            <div className="pt-1">
              <MagneticButton href="/contact" variant="primary" size="lg">
                Schedule a Free Consultation
              </MagneticButton>
            </div>
          </div>

          {/* Right Cards List */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="rounded-2xl glass-panel p-6 border border-surface-border hover:border-orbit-green/45 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orbit-green/10 text-orbit-green border border-orbit-green/25">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-heading text-lg font-bold text-foreground">
                          {point.title}
                        </h3>
                        <span className="rounded-full bg-orbit-green/10 px-3 py-0.5 text-xs font-medium text-orbit-green">
                          {point.tag}
                        </span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-muted text-justify leading-relaxed">
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
