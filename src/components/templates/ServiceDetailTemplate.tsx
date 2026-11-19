'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import type { ServiceItem } from '@/content/services';
import { SERVICES_DATA } from '@/content/services';
import { TiltCard } from '@/components/ui/TiltCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { OrbitDivider } from '@/components/ui/OrbitDivider';
import { FaqSection } from '@/components/home/FaqSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';

interface ServiceDetailTemplateProps {
  service: ServiceItem;
}

export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const relatedServices = service.relatedSlugs
    .map((slug) => SERVICES_DATA.find((s) => s.slug === slug))
    .filter((s): s is ServiceItem => Boolean(s));

  return (
    <div className="pt-28 pb-10">
      {/* 1. Animated Hero with Breadcrumb */}
      <section className="relative py-12 sm:py-16 overflow-hidden bg-radar-grid border-b border-surface-border">
        <div
          className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-orbit-green/15 blur-[120px]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-container px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted mb-6"
          >
            <Link href="/" className="hover:text-orbit-green transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href={
                service.category === 'employee'
                  ? '/employee-bgv'
                  : '/business-bgv'
              }
              className="hover:text-orbit-green transition-colors"
            >
              {service.category === 'employee'
                ? 'Employee BGV'
                : 'Business BGV'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-orbit-green font-semibold">
              {service.shortTitle}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 border border-orbit-green/35">
                <ScrambleText
                  text={`${
                    service.category === 'employee'
                      ? 'EMPLOYEE BGV MODULE'
                      : 'CORPORATE DUE DILIGENCE MODULE'
                  }`}
                />
              </div>

              <SplitText
                as="h1"
                text={service.title}
                highlightWords={['Verification', 'Checks', 'Due', 'Diligence', 'Screening']}
                className="text-fluid-hero text-foreground"
              />

              <p className="text-lg sm:text-xl font-medium text-orbit-cyan">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
                {service.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <MagneticButton href="/contact" variant="primary" size="lg">
                  Request a Demo
                </MagneticButton>
                <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-3 text-xs font-mono text-orbit-green border border-orbit-green/30">
                  <Clock className="w-4 h-4" />
                  <span>Turnaround: {service.turnaround}</span>
                </div>
              </div>
            </div>

            {/* Right Visual Emblem Card */}
            <div className="lg:col-span-4">
              <TiltCard className="p-7 border border-orbit-green/40 bg-gradient-to-br from-orbit-navy/80 via-surface to-orbit-green/15">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orbit-green text-orbit-deep shadow-[0_0_25px_rgba(22,193,90,0.5)]">
                    <ServiceIcon name={service.iconName} className="w-8 h-8" />
                  </div>
                  <span className="rounded-full bg-orbit-green/20 px-3 py-1 font-mono text-[10px] font-bold uppercase text-orbit-green border border-orbit-green/30">
                    100% Consent-Gated
                  </span>
                </div>
                <h2 className="font-heading text-lg font-bold text-foreground">
                  Audit-Ready Verification Dossier
                </h2>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Includes primary-source evidence annexures, verifier timestamp
                  logs, and Red / Amber / Green discrepancy grading on the Orbit
                  Verify Portal.
                </p>
                <div className="mt-5 pt-4 border-t border-surface-border flex items-center justify-between font-mono text-[11px] text-orbit-cyan">
                  <span>ISO-Aligned Workflow</span>
                  <span>Verified ✓</span>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "What We Verify" Bento Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-2xl space-y-2 mb-10">
            <ScrambleText text="VERIFICATION PARAMETERS • SCOPE OF CHECK" />
            <h2 className="font-heading font-extrabold text-fluid-h2 text-foreground">
              What We Verify in <span className="orbit-gradient-text">{service.shortTitle}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whatsChecked.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <TiltCard className="h-full p-6 sm:p-7 border border-surface-border">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orbit-green/15 text-orbit-green font-mono text-xs font-bold border border-orbit-green/30">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OrbitDivider label="EXECUTION PIPELINE" />

      {/* 3. How It Works + 4. Documents Needed */}
      <section className="py-16 sm:py-24 bg-background-alt/30 border-y border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Process Steps (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <ScrambleText text="STEP-BY-STEP WORKFLOW" />
                <h2 className="mt-2 font-heading font-extrabold text-fluid-h3 text-foreground">
                  How {service.shortTitle} Works
                </h2>
              </div>

              <div className="space-y-4">
                {service.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex items-start gap-4 rounded-2xl glass-panel p-5 border border-surface-border"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orbit-green text-orbit-deep font-mono text-xs font-bold">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl glass-panel-strong p-7 border border-orbit-green/40 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orbit-green/15 text-orbit-green border border-orbit-green/35">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-orbit-green">
                      CHECKLIST
                    </span>
                    <h2 className="font-heading text-xl font-bold text-foreground">
                      Documents &amp; Inputs Needed
                    </h2>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.documentsRequired.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 rounded-xl bg-background/60 p-3.5 text-xs sm:text-sm text-foreground border border-surface-border"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-orbit-green/10 p-4 border border-orbit-green/30 flex items-start gap-3 text-xs text-muted">
                  <ShieldCheck className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                  <span>
                    All candidate and counterparty documents are collected via
                    encrypted upload links or API with full audit trails.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Service FAQs */}
      {service.faqs.length > 0 && (
        <FaqSection
          faqs={service.faqs}
          title={`${service.shortTitle} — Frequently Asked Questions`}
        />
      )}

      {/* 6. Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-container px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <ScrambleText text="COMPLEMENTARY MODULES" />
                <h2 className="mt-1 font-heading text-2xl font-bold text-foreground">
                  Related Verification Services
                </h2>
              </div>
              <Link
                href={
                  service.category === 'employee'
                    ? '/employee-bgv'
                    : '/business-bgv'
                }
                className="text-xs font-mono uppercase text-orbit-green hover:underline"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedServices.map((rel) => (
                <TiltCard key={rel.slug} className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orbit-green/15 text-orbit-green border border-orbit-green/30">
                      <ServiceIcon name={rel.iconName} className="w-5 h-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                      {rel.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted leading-relaxed">
                      {rel.shortDescription}
                    </p>
                  </div>
                  <Link
                    href={`/${rel.slug}`}
                    className="mt-5 pt-3 border-t border-surface-border inline-flex items-center justify-between text-xs font-bold text-orbit-green"
                  >
                    <span>Explore Module</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
