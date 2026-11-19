'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Sparkles,
} from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { BUSINESS_SERVICES, EMPLOYEE_SERVICES } from '@/content/services';
import { cn } from '@/lib/utils';

export const SERVICE_IMAGE_MAP: Record<string, string> = {
  // Employee BGV (Top 6 & full 14)
  'identity-and-address-verification':
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
  'education-and-employment-checks':
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  'credit-and-gap-verification':
    'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
  'criminal-background-checks':
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
  'bank-statement-and-reference-checks':
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  'drug-medical-screening':
    'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
  'global-compliance-checks':
    'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
  'specialized-checks':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  'executive-screening':
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
  'digital-background':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  'background-verification':
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
  'professional-background':
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  'employment-risk':
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
  'custom-bgv':
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',

  // Business Due Diligence (Top 6 & full 15)
  'financial-due-diligence-service':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  'cyber-and-data-security':
    'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80',
  'sustainibility-risk':
    'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
  'supply-chain-risk':
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  'vendor-verification-services':
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  'legal-risk-verification':
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  'physical-verification':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  'reputation-and-market':
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
  'operational-verification':
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  'compliance-screening':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  'legal-verification':
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
  'governance-verification':
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
  'business-identification':
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  'continuous-monitoring':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  'financial-due-diligence':
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
};

export function ServicesBento() {
  const [activeTab, setActiveTab] = useState<'employee' | 'business'>(
    'employee'
  );
  // Track which card has its interactive "Documents & Process Preview" expanded
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  // Strictly show 6 core services on the homepage
  const displayedServices =
    activeTab === 'employee'
      ? EMPLOYEE_SERVICES.slice(0, 6)
      : BUSINESS_SERVICES.slice(0, 6);

  return (
    <section
      id="services-bento"
      aria-labelledby="services-bento-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        {/* Section Header + Interactive Category Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-3">
            <ScrambleText text="Our Core Verification Services" />
            <SplitText
              text="Comprehensive Employee Screening & Business Due Diligence"
              highlightWords={['Employee', 'Screening', 'Business']}
              className="text-fluid-h2 text-foreground"
            />
            <p className="text-sm sm:text-base text-muted text-justify leading-relaxed">
              Orbit Verify offers end-to-end background verification services
              designed to eliminate hiring risks, verify candidate credentials
              from primary sources, and validate corporate vendors before you
              sign contracts.
            </p>
          </div>

          {/* Interactive Pill Switcher */}
          <div
            role="tablist"
            aria-label="Filter verification services by category"
            className="inline-flex items-center rounded-full glass-panel p-1.5 border border-surface-border self-start lg:self-auto shadow-sm"
          >
            {(['employee', 'business'] as const).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveTab(tab);
                    setExpandedSlug(null);
                  }}
                  className={cn(
                    'rounded-full px-5 py-2.5 text-xs sm:text-sm font-heading font-bold transition-all',
                    isActive
                      ? 'bg-orbit-navy text-white shadow-md'
                      : 'text-muted hover:text-foreground'
                  )}
                >
                  {tab === 'employee'
                    ? 'Employee BGV Services'
                    : 'Business Due Diligence'}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Image-Rich Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayedServices.map((service, index) => {
            const cardImage =
              SERVICE_IMAGE_MAP[service.slug] ??
              'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80';
            const isExpanded = expandedSlug === service.slug;

            return (
              <TiltCard
                key={service.slug}
                className="flex flex-col justify-between overflow-hidden border border-surface-border hover:border-orbit-green/60 transition-all duration-300"
              >
                <div>
                  {/* Image Header with Interactive Hover Overlay & Badges */}
                  <div className="relative h-52 w-full overflow-hidden border-b border-surface-border bg-background-alt">
                    <img
                      src={cardImage}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Subtle gradient bottom scrim for badge legibility */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/80 via-[#0B1E3D]/20 to-transparent" />

                    {/* Top Left Service Number & Icon Pill */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-1.5 text-orbit-navy shadow-md">
                      <ServiceIcon
                        name={service.iconName}
                        className="w-4 h-4 text-orbit-green"
                      />
                      <span className="font-heading text-xs font-bold">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Top Right Turnaround Time Pill */}
                    <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 rounded-full bg-orbit-navy/90 px-3 py-1 text-[11px] font-medium text-white shadow-md backdrop-blur-sm">
                      <Clock className="w-3 h-3 text-orbit-green" />
                      <span>
                        {service.turnaround
                          .replace('(Placeholder)', '')
                          .split('|')[0]
                          .trim()}
                      </span>
                    </div>

                    {/* Bottom Image Caption Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-orbit-green">
                        {service.category === 'employee'
                          ? 'Employee Verification'
                          : 'B2B Due Diligence'}
                      </span>
                      <Link
                        href={`/${service.slug}`}
                        className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-1 rounded-full bg-orbit-green px-3 py-1 text-[11px] font-bold text-white shadow-sm"
                      >
                        <span>Open Page</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <Link href={`/${service.slug}`}>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-orbit-green transition-colors">
                        {service.title}
                      </h3>
                    </Link>

                    <p className="mt-2.5 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                      {service.description}
                    </p>

                    {/* What We Verify Checklist */}
                    <div className="mt-4 pt-3.5 border-t border-surface-border space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-orbit-green">
                        Key Verification Checks:
                      </p>
                      <ul className="space-y-1.5">
                        {service.whatsChecked.slice(0, 3).map((check) => (
                          <li
                            key={check.title}
                            className="flex items-center gap-2 text-xs text-foreground/90"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-orbit-green shrink-0" />
                            <span className="truncate font-medium">
                              {check.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Expandable Drawer: Required Documents & Process */}
                    {isExpanded && (
                      <div className="mt-4 rounded-2xl bg-background-alt p-4 border border-orbit-green/30 space-y-3 animate-fadeIn">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                          <FileText className="w-3.5 h-3.5 text-orbit-green" />
                          <span>Documents Required:</span>
                        </div>
                        <ul className="space-y-1 text-xs text-muted">
                          {service.documentsRequired.map((doc) => (
                            <li key={doc} className="flex items-start gap-1.5">
                              <span className="text-orbit-green font-bold">•</span>
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Interactive Footer Controls */}
                <div className="px-6 pb-6 pt-3 border-t border-surface-border flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedSlug(isExpanded ? null : service.slug)
                    }
                    className="inline-flex items-center gap-1.5 rounded-full bg-background-alt hover:bg-orbit-green/10 px-3.5 py-1.5 text-xs font-semibold text-foreground hover:text-orbit-green border border-surface-border transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-orbit-green" />
                    <span>{isExpanded ? 'Hide Docs' : 'Required Docs'}</span>
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform',
                        isExpanded && 'rotate-180'
                      )}
                    />
                  </button>

                  <Link
                    href={`/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orbit-green hover:underline group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Bottom Button for the Remaining Services */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={activeTab === 'employee' ? '/employee-bgv' : '/business-bgv'}
            className="inline-flex items-center gap-2.5 rounded-full bg-orbit-navy hover:bg-orbit-green px-8 py-4 text-sm font-bold text-white shadow-lg transition-colors"
          >
            <span>
              Explore All{' '}
              {activeTab === 'employee'
                ? '14 Employee BGV Services'
                : '15 Business Due Diligence Services'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full glass-panel px-7 py-4 text-sm font-semibold text-foreground hover:border-orbit-green transition-colors"
          >
            <span>Request Custom Package</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
