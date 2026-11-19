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
    step: '01',
    title: 'Request Initiated',
    subtitle: 'Portal, Bulk CSV, or HRMS API',
    description:
      'Recruiters or procurement leads trigger a verification request in seconds—selecting a role-specific BGV package (Fresher, Lateral, Executive, or Vendor KYB).',
    icon: Send,
    previewTitle: 'NEW CASE TRIGGERED // #OV-8841',
    previewChip: 'SLA Timer Started • 00:00:04',
    previewRows: [
      { label: 'Candidate', value: 'Rohan Mehta (Sr. DevOps)' },
      { label: 'Package', value: 'Lateral Tech 360° (6 Checks)' },
      { label: 'Invite Channel', value: 'SMS + WhatsApp + Email Sent ✓' },
    ],
    progress: 20,
  },
  {
    step: '02',
    title: 'Candidate Consent & Document Upload',
    subtitle: 'Mobile-First Secure Link',
    description:
      'Candidate opens a white-labeled encrypted link on their phone, signs digital DPDP-compliant authorization, captures a live selfie, and uploads documents with instant OCR validation.',
    icon: Smartphone,
    previewTitle: 'CANDIDATE CONSENT CAPTURED',
    previewChip: 'E-Sign + Geo-IP Timestamped ✓',
    previewRows: [
      { label: 'Digital Consent', value: 'Signed • SHA-256 Hash Locked' },
      { label: 'ID & Address Proofs', value: 'PAN, Aadhaar, Degree Uploaded' },
      { label: 'Live Geo-Location', value: '28.6139° N, 77.2090° E (Verified)' },
    ],
    progress: 40,
  },
  {
    step: '03',
    title: 'Multi-Track Source Verification',
    subtitle: 'APIs, Registrars, HR & Field Network',
    description:
      'Parallel tracks execute simultaneously: government ID & court databases query via API while analysts contact university registrars, past HR departments, and dispatch pan-India field executives.',
    icon: Database,
    previewTitle: 'PARALLEL SOURCE QUERIES ACTIVE',
    previewChip: '6/6 Verification Channels Running',
    previewRows: [
      { label: 'Identity & Court API', value: 'Cleared across 3,200+ Courts ✓' },
      { label: 'University Registrar', value: 'Roll #190482 Confirmed by Desk ✓' },
      { label: 'Past Employer HR', value: 'Tenure & Exit Verified via Official HR ✓' },
    ],
    progress: 65,
  },
  {
    step: '04',
    title: 'Dual-Layer Quality Review',
    subtitle: 'Forensic Audit & Discrepancy Grading',
    description:
      'Every source response, GPS doorstep photo, and document annexure undergoes a strict two-stage QA audit to eliminate false positives and apply Red / Amber / Green severity grading.',
    icon: ShieldCheck,
    previewTitle: 'DUAL-ANALYST QA AUDIT',
    previewChip: '99.4% Accuracy Gate • Passed ✓',
    previewRows: [
      { label: 'Document Forensics', value: 'Zero PDF Metadata Tampering' },
      { label: 'Annexure Evidence', value: '6 Primary Source Proofs Attached' },
      { label: 'Final Severity Status', value: 'GREEN — Clear for Onboarding' },
    ],
    progress: 88,
  },
  {
    step: '05',
    title: 'Audit-Ready Report Delivered',
    subtitle: 'Instant Portal Alert, PDF Dossier & Webhook',
    description:
      'Receive an instant notification and downloadable, watermarked PDF dossier complete with timestamped annexures, verifier logs, and executive summary.',
    icon: FileCheck2,
    previewTitle: 'VERIFIED DOSSIER PUBLISHED',
    previewChip: 'Completed in 22 Hours • SLA Met ✓',
    previewRows: [
      { label: 'Overall Verdict', value: 'VERIFIED GREEN (100% Score)' },
      { label: 'Audit Annexures', value: 'ID, Court, HR, Degree & GPS Proofs' },
      { label: 'Delivery', value: 'Portal PDF + HRMS Webhook Synced ✓' },
    ],
    progress: 100,
  },
];

export function HowItWorksPin() {
  const [activeStep, setActiveStep] = useState(0);
  const current = TIMELINE_STEPS[activeStep];

  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="relative py-20 lg:py-24 bg-background-alt/30 border-y border-surface-border"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl space-y-2 mb-10">
          <ScrambleText text="HOW IT WORKS • 5-STAGE VERIFICATION PIPELINE" />
          <SplitText
            text="From Request to Audit-Ready Report in 5 Seamless Steps."
            highlightWords={['Audit-Ready', 'Seamless']}
            className="text-fluid-h2 text-foreground"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Vertical Timeline with Glowing Progress Line */}
          <div className="lg:col-span-6 relative pl-8">
            <div
              className="absolute left-3 top-3 bottom-3 w-[2px] bg-surface-border rounded-full"
              aria-hidden="true"
            />
            <div
              style={{
                height: `${((activeStep + 1) / TIMELINE_STEPS.length) * 100}%`,
              }}
              className="absolute left-3 top-3 w-[2px] bg-gradient-to-b from-orbit-green via-orbit-cyan to-orbit-blue transition-all duration-300 rounded-full"
              aria-hidden="true"
            />

            <div className="space-y-3">
              {TIMELINE_STEPS.map((item, idx) => {
                const Icon = item.icon;
                const isActive = idx === activeStep;
                const isCompleted = idx < activeStep;

                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={cn(
                      'group relative w-full text-left rounded-2xl p-4 transition-colors duration-200 border',
                      isActive
                        ? 'glass-panel-strong border-orbit-green/50'
                        : 'bg-transparent border-transparent hover:bg-surface/40'
                    )}
                  >
                    <span
                      className={cn(
                        'absolute -left-[29px] top-6 flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-mono transition-transform',
                        isActive
                          ? 'bg-orbit-green border-white text-orbit-deep scale-110'
                          : isCompleted
                          ? 'bg-orbit-green/30 border-orbit-green text-orbit-green'
                          : 'bg-background border-surface-border text-muted'
                      )}
                    >
                      {isCompleted ? '✓' : idx + 1}
                    </span>

                    <div className="flex items-start gap-3.5">
                      <div
                        className={cn(
                          'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors',
                          isActive
                            ? 'bg-orbit-green text-orbit-deep border-orbit-green'
                            : 'bg-orbit-green/10 text-orbit-green border-orbit-green/25'
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-orbit-green">
                          STEP {item.step} • {item.subtitle}
                        </span>
                        <h3 className="mt-0.5 font-heading text-base sm:text-lg font-bold text-foreground">
                          {item.title}
                        </h3>
                        {isActive && (
                          <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Interactive Phone / Dashboard Mockup Preview */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl glass-panel-strong p-6 sm:p-8 border border-orbit-green/35 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-surface-border">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-orbit-green" />
                  <span className="ml-2 font-mono text-[11px] text-muted">
                    orbit-verify://pipeline/stage-0{activeStep + 1}
                  </span>
                </div>
                <span className="rounded-full bg-orbit-green/15 px-3 py-0.5 font-mono text-[10px] font-bold text-orbit-green border border-orbit-green/30">
                  {current.progress}% COMPLETE
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-orbit-navy via-[#102652] to-orbit-green/25 p-5 text-white border border-orbit-green/40">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-orbit-green">
                      {current.previewTitle}
                    </p>
                    <h4 className="mt-1 font-heading text-xl font-bold">
                      {current.title}
                    </h4>
                    <p className="mt-1 font-mono text-xs text-orbit-cyan">
                      {current.previewChip}
                    </p>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orbit-green/20 border border-orbit-green/40 text-orbit-green">
                    <current.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="space-y-3">
                  {current.previewRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 rounded-xl bg-background/60 p-3.5 border border-surface-border"
                    >
                      <span className="font-mono text-xs text-muted">
                        {row.label}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orbit-green shrink-0" />
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-muted">
                      ORBIT VERIFICATION TELEMETRY
                    </span>
                    <span className="text-orbit-green font-bold">
                      STAGE {activeStep + 1} OF 5
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-background overflow-hidden p-0.5 border border-surface-border">
                    <div
                      style={{ width: `${current.progress}%` }}
                      className="h-full rounded-full bg-gradient-to-r from-orbit-green via-orbit-cyan to-orbit-blue transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted">
                  Hover or click any stage to inspect workflow
                </span>
                <div className="flex items-center gap-1.5">
                  {TIMELINE_STEPS.map((s, idx) => (
                    <button
                      key={s.step}
                      type="button"
                      aria-label={`Go to step ${idx + 1}`}
                      onClick={() => setActiveStep(idx)}
                      className={cn(
                        'h-2 rounded-full transition-all',
                        idx === activeStep
                          ? 'w-6 bg-orbit-green'
                          : 'w-2 bg-muted/40 hover:bg-muted'
                      )}
                    />
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
