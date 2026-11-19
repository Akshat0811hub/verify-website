'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Database,
  FileCheck2,
  Send,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { cn } from '@/lib/utils';

const TIMELINE_STEPS = [
  {
    step: 'Step 1',
    title: 'Initiate Verification Request',
    subtitle: 'Client Portal, Bulk Excel Upload, or API',
    description:
      'HR and procurement teams can initiate single or bulk verification requests in seconds through the Orbit Verify Client Portal, selecting role-specific screening packages tailored for freshers, lateral hires, executives, or business vendors.',
    icon: Send,
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Instant case creation via Web Portal or Bulk Excel sheet',
      'Role-wise customized BGV packages (Fresher, Lateral, CXO, Vendor)',
      'Automated email & SMS notification sent to the candidate',
    ],
  },
  {
    step: 'Step 2',
    title: 'Candidate Consent & Document Collection',
    subtitle: 'Secure Mobile & Web Upload Link',
    description:
      'Every background check at Orbit Verify begins with explicit candidate authorization. Candidates use a secure digital link to sign their consent form and upload required identity, academic, and employment documents.',
    icon: Smartphone,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    highlights: [
      '100% consent-based process aligned with Indian privacy laws',
      'Easy mobile document upload with zero app installation',
      'Automated document completeness check to avoid delays',
    ],
  },
  {
    step: 'Step 3',
    title: 'Primary-Source & Field Verification',
    subtitle: 'Registrars, Past Employers, Courts & Physical Visits',
    description:
      'Our verification specialists validate credentials directly from primary sources—contacting university registrars, previous HR departments, official government and court databases, and dispatching field executives for physical address visits.',
    icon: Database,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Direct verification with university registrars and past HR teams',
      'Pan-India physical doorstep address and office inspections',
      'District, High Court, Supreme Court, and global watchlist checks',
    ],
  },
  {
    step: 'Step 4',
    title: 'Two-Stage Quality & Compliance Audit',
    subtitle: 'Discrepancy Review & Evidence Verification',
    description:
      'Before any report is finalized, our dedicated Quality Assurance desk reviews every source proof, geo-tagged photograph, and court record to ensure accuracy, eliminate false positives, and assign clear Red, Amber, or Green grading.',
    icon: ShieldCheck,
    image:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Dual-analyst verification of every attached proof and remark',
      'Clear Red / Amber / Green severity classification',
      'Strict adherence to client SLA and compliance guidelines',
    ],
  },
  {
    step: 'Step 5',
    title: 'Audit-Ready Report Delivered',
    subtitle: 'Downloadable PDF Dossier with Proofs',
    description:
      'Once verified, the consolidated background screening report is published on your Orbit Verify dashboard with all supporting annexures, timestamps, and verification certificates ready for HR and compliance audits.',
    icon: FileCheck2,
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Consolidated PDF report with complete proof annexures',
      ' typical 24–72 hour turnaround for digital & priority checks',
      'Dedicated New Delhi account support and escalation desk',
    ],
  },
];

export function HowItWorksPin() {
  const [activeStep, setActiveStep] = useState(0);
  const current = TIMELINE_STEPS[activeStep];

  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="relative py-16 lg:py-24 bg-background-alt/50 border-y border-surface-border"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl space-y-2 mb-12">
          <ScrambleText text="Simple 5-Step Verification Process" />
          <SplitText
            text="How Orbit Verify Delivers Accurate Reports on Time"
            highlightWords={['Accurate', 'Reports']}
            className="text-fluid-h2 text-foreground"
          />
          <p className="text-sm sm:text-base text-muted text-justify leading-relaxed">
            Our streamlined verification process removes manual follow-ups for
            your HR team while ensuring every candidate and business partner is
            thoroughly vetted.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Clean Step Selector */}
          <div className="lg:col-span-6 space-y-3">
            {TIMELINE_STEPS.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeStep;

              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    'w-full text-left rounded-2xl p-5 transition-all border',
                    isActive
                      ? 'glass-panel-strong border-orbit-green shadow-md'
                      : 'glass-panel border-surface-border hover:border-orbit-green/40'
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors',
                        isActive
                          ? 'bg-orbit-green text-white border-orbit-green'
                          : 'bg-orbit-green/10 text-orbit-green border-orbit-green/25'
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-semibold text-orbit-green">
                        {item.step} • {item.subtitle}
                      </span>
                      <h3 className="mt-0.5 font-heading text-base sm:text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      {isActive && (
                        <p className="mt-2 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Visual Image & Key Highlights Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl glass-panel-strong border border-surface-border shadow-xl overflow-hidden">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 rounded-full bg-orbit-navy/90 px-4 py-1.5 text-xs font-semibold text-white">
                  {current.step}: {current.title}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h4 className="font-heading text-xl font-bold text-foreground">
                  {current.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted text-justify leading-relaxed">
                  {current.description}
                </p>

                <div className="pt-3 border-t border-surface-border space-y-2.5">
                  {current.highlights.map((pt) => (
                    <div
                      key={pt}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
