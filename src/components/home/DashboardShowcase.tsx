'use client';

import React, { useState } from 'react';
import {
  Activity,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  FileSpreadsheet,
  Lock,
  Terminal,
  Webhook,
} from 'lucide-react';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SITE_CONFIG } from '@/content/config';
import { cn } from '@/lib/utils';

type CaseStatus = 'Verified' | 'In progress' | 'Insufficient';

interface MockCase {
  id: string;
  candidate: string;
  role: string;
  checks: string;
  progress: number;
  status: CaseStatus;
  tat: string;
}

const MOCK_CASES: MockCase[] = [
  {
    id: 'OV-9421',
    candidate: 'Ananya Sharma',
    role: 'VP Engineering • Bengaluru',
    checks: 'Identity, Degree, 3x Emp, Court, Credit',
    progress: 100,
    status: 'Verified',
    tat: '18h 20m',
  },
  {
    id: 'OV-9422',
    candidate: 'Vikramaditya Rao',
    role: 'Regional Sales Lead • Mumbai',
    checks: 'Identity, Address GPS, Emp, Criminal',
    progress: 100,
    status: 'Verified',
    tat: '22h 05m',
  },
  {
    id: 'OV-9423',
    candidate: 'Priya Nair',
    role: 'Clinical Pharmacist • Hyderabad',
    checks: 'Medical Council License, Drug 10-Panel',
    progress: 74,
    status: 'In progress',
    tat: 'SLA: 14h left',
  },
  {
    id: 'OV-9424',
    candidate: 'Apex Precision Vendors Pvt Ltd',
    role: 'Tier-1 Supplier KYB • Pune',
    checks: 'MCA Financials, GST, NCLT, Site Visit',
    progress: 100,
    status: 'Verified',
    tat: '2d 11h',
  },
  {
    id: 'OV-9425',
    candidate: 'Siddharth Verma',
    role: 'Cloud Security Analyst • Delhi NCR',
    checks: 'UAN Overlap, Bank Statement, HR Check',
    progress: 45,
    status: 'Insufficient',
    tat: 'Awaiting Relieving PDF',
  },
];

const LIVE_FEED_EVENTS = [
  '11:14:02 • [API] PAN & Masked Aadhaar checksum verified for Case #OV-9428',
  '11:14:09 • [FIELD] Geo-tagged residence photo uploaded in Pune (18.5204° N, 73.8567° E)',
  '11:14:18 • [REGISTRAR] VTU University degree roll number confirmed for Case #OV-9419',
  '11:14:27 • [COURT] 3,200+ District & High Court registries cleared for Case #OV-9421',
  '11:14:35 • [KYB] GSTIN & MCA Charge Analysis completed for Vendor #OV-9424',
];

export function DashboardShowcase() {
  const [filter, setFilter] = useState<'All' | CaseStatus>('All');

  const filteredCases =
    filter === 'All'
      ? MOCK_CASES
      : MOCK_CASES.filter((c) => c.status === filter);

  return (
    <section
      aria-labelledby="dashboard-showcase-heading"
      className="relative py-20 sm:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <ScrambleText text="COMMAND CENTER • REAL-TIME CLIENT PORTAL" />
            <SplitText
              text="Full Visibility Into Every Case. Zero Spreadsheet Chasing."
              highlightWords={['Visibility', 'Zero']}
              className="text-fluid-h2 text-foreground"
            />
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Track live turnaround timers, bulk-upload hundreds of candidates,
              resolve document insufficiencies, and download audit-ready PDF
              dossiers from the Orbit Verify Client Portal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton
              href={SITE_CONFIG.portalLoginUrl}
              external
              variant="primary"
              size="md"
            >
              Login to Portal
            </MagneticButton>
            <MagneticButton href="/contact" variant="ghost" size="md">
              Book Portal Walkthrough
            </MagneticButton>
          </div>
        </div>

        {/* Feature Pill Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {[
            { icon: Activity, label: 'Real-Time SLA Tracking' },
            { icon: FileSpreadsheet, label: 'One-Click Bulk Upload' },
            { icon: Webhook, label: 'API / HRMS Integration' },
            { icon: Download, label: 'Downloadable PDF Reports' },
            { icon: Lock, label: 'Role-Based Secure Login' },
          ].map((feat) => (
            <div
              key={feat.label}
              className="flex items-center gap-2.5 rounded-xl glass-panel px-3.5 py-2.5 border border-surface-border text-xs font-medium text-foreground"
            >
              <feat.icon className="w-4 h-4 text-orbit-green shrink-0" />
              <span>{feat.label}</span>
            </div>
          ))}
        </div>

        {/* Interactive HTML/CSS Mock Dashboard (Zero mousemove re-renders) */}
        <div className="rounded-3xl glass-panel-strong border border-orbit-green/40 shadow-2xl overflow-hidden">
          {/* Portal Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#070C1E] px-6 py-4 border-b border-white/10 text-white">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-orbit-green" />
              </div>
              <span className="font-mono text-xs text-slate-300">
                https://orbitverify.in/admin/login — Enterprise Client Workspace
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orbit-green/15 px-3 py-1 font-mono text-[11px] text-orbit-green border border-orbit-green/30">
                <span className="h-2 w-2 rounded-full bg-orbit-green" />
                Live Telemetry Active
              </span>
              <a
                href={SITE_CONFIG.portalLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-orbit-cyan hover:underline"
              >
                <span>Open Live Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Dashboard Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
            {/* Left 8 Cols: Interactive Filterable Case Table */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-heading text-base font-bold text-foreground">
                  Active Verification Queue
                </h3>

                {/* Status Filter Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {(['All', 'Verified', 'In progress', 'Insufficient'] as const).map(
                    (status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setFilter(status)}
                        className={cn(
                          'rounded-full px-3 py-1 font-mono text-[11px] transition-colors',
                          filter === status
                            ? 'bg-orbit-green text-orbit-deep font-bold'
                            : 'bg-background/60 text-muted hover:text-foreground border border-surface-border'
                        )}
                      >
                        {status}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Cases List */}
              <div className="space-y-2.5">
                {filteredCases.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-background/60 p-4 border border-surface-border hover:border-orbit-green/40 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-orbit-cyan">
                          #{item.id}
                        </span>
                        <span className="font-heading text-sm font-bold text-foreground">
                          {item.candidate}
                        </span>
                      </div>
                      <p className="text-xs text-muted">
                        {item.role} •{' '}
                        <span className="text-foreground/80">{item.checks}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-28 hidden xl:block">
                        <div className="flex justify-between text-[10px] font-mono text-muted mb-1">
                          <span>Progress</span>
                          <span>{item.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-surface-border overflow-hidden">
                          <div
                            style={{ width: `${item.progress}%` }}
                            className={cn(
                              'h-full rounded-full',
                              item.status === 'Verified'
                                ? 'bg-orbit-green'
                                : item.status === 'In progress'
                                ? 'bg-orbit-cyan'
                                : 'bg-amber-400'
                            )}
                          />
                        </div>
                      </div>

                      <span className="font-mono text-[11px] text-muted whitespace-nowrap">
                        {item.tat}
                      </span>

                      <span
                        className={cn(
                          'inline-flex items-center gap-1 rounded-full px-3 py-1 font-mono text-[11px] font-semibold border whitespace-nowrap',
                          item.status === 'Verified'
                            ? 'bg-orbit-green/15 text-orbit-green border-orbit-green/40'
                            : item.status === 'In progress'
                            ? 'bg-orbit-cyan/15 text-orbit-cyan border-orbit-cyan/40'
                            : 'bg-amber-500/15 text-amber-400 border-amber-400/40'
                        )}
                      >
                        {item.status === 'Verified' ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 4 Cols: Mini Analytics Chart + Live Activity Feed */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-5">
              <div className="rounded-2xl bg-background/60 p-5 border border-surface-border">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-muted">
                      WEEKLY VERIFICATION VELOCITY
                    </span>
                    <h4 className="font-heading text-lg font-bold text-foreground">
                      94.2% Within 24–48h SLA
                    </h4>
                  </div>
                  <span className="rounded-lg bg-orbit-green/15 px-2.5 py-1 font-mono text-xs font-bold text-orbit-green">
                    +18.4%
                  </span>
                </div>

                <div className="flex items-end justify-between gap-2 h-28 pt-4">
                  {[
                    { day: 'Mon', h: '62%' },
                    { day: 'Tue', h: '78%' },
                    { day: 'Wed', h: '88%' },
                    { day: 'Thu', h: '95%' },
                    { day: 'Fri', h: '100%' },
                    { day: 'Sat', h: '74%' },
                  ].map((bar) => (
                    <div
                      key={bar.day}
                      className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end"
                    >
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-orbit-navy via-orbit-blue to-orbit-green"
                        style={{ height: bar.h }}
                      />
                      <span className="font-mono text-[10px] text-muted">
                        {bar.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#060B1A] p-4 border border-orbit-green/30 text-white">
                <div className="flex items-center gap-2 pb-2.5 mb-3 border-b border-white/10">
                  <Terminal className="w-4 h-4 text-orbit-green" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-orbit-green">
                    Live Verification Stream
                  </span>
                </div>
                <div className="space-y-2 font-mono text-[11px]">
                  {LIVE_FEED_EVENTS.map((ev, idx) => (
                    <div
                      key={ev}
                      className={cn(
                        'rounded-lg p-2',
                        idx === 0
                          ? 'bg-orbit-green/15 text-orbit-green border border-orbit-green/30'
                          : 'text-slate-400 opacity-75'
                      )}
                    >
                      {ev}
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
