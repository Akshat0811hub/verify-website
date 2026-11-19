'use client';

import React from 'react';
import Link from 'next/link';
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
import { FaqSection } from '@/components/home/FaqSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';

interface ServiceDetailTemplateProps {
  service: ServiceItem;
}

export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const relatedServices = service.relatedSlugs
    .map((slug) => SERVICES_DATA.find((s) => s.slug === slug))
    .filter((s): s is ServiceItem => Boolean(s));

  const heroImage =
    service.category === 'employee'
      ? 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80'
      : 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80';

  return (
    <div className="pt-28 pb-10">
      {/* 1. Clean Corporate Hero with Breadcrumb & Real Photograph */}
      <section className="relative py-12 sm:py-16 overflow-hidden bg-background-alt/50 border-b border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-muted mb-6"
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
            <div className="lg:col-span-7 space-y-5">
              <ScrambleText
                text={
                  service.category === 'employee'
                    ? 'Employee Background Verification'
                    : 'Business Due Diligence & KYB'
                }
              />

              <SplitText
                as="h1"
                text={service.title}
                highlightWords={[
                  'Verification',
                  'Checks',
                  'Due',
                  'Diligence',
                  'Screening',
                ]}
                className="text-fluid-hero text-foreground"
              />

              <p className="text-base sm:text-lg font-semibold text-orbit-green">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-muted text-justify leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton href="/contact" variant="primary" size="lg">
                  Request a Free Consultation
                </MagneticButton>
                <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-3 text-xs font-medium text-foreground border border-surface-border">
                  <Clock className="w-4 h-4 text-orbit-green" />
                  <span>
                    Turnaround:{' '}
                    {service.turnaround.replace('(Placeholder)', '').trim()}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Corporate Image & Summary Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden glass-panel-strong border border-surface-border shadow-lg">
                <img
                  src={heroImage}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orbit-green/15 text-orbit-green">
                      <ServiceIcon name={service.iconName} className="w-6 h-6" />
                    </div>
                    <span className="rounded-full bg-orbit-green/10 px-3 py-1 text-xs font-semibold text-orbit-green">
                      100% Consent-Based
                    </span>
                  </div>
                  <h2 className="font-heading text-lg font-bold text-foreground">
                    Audit-Ready Verification Report
                  </h2>
                  <p className="text-xs text-muted text-justify leading-relaxed">
                    Every report includes primary-source verification evidence,
                    timestamped remarks, and clear Red / Amber / Green status
                    grading accessible on the Orbit Verify Client Portal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "What We Verify" Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-2xl space-y-2 mb-10">
            <ScrambleText text="Scope of Verification" />
            <h2 className="font-heading font-extrabold text-fluid-h2 text-foreground">
              What We Verify in{' '}
              <span className="orbit-gradient-text">{service.shortTitle}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whatsChecked.map((item, idx) => (
              <TiltCard
                key={item.title}
                className="h-full p-6 sm:p-7 border border-surface-border"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orbit-green/10 text-orbit-green font-bold text-sm border border-orbit-green/25">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works + 4. Documents Needed */}
      <section className="py-16 sm:py-20 bg-background-alt/50 border-y border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Process Steps (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <ScrambleText text="Verification Process" />
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
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orbit-green text-white text-xs font-bold">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl glass-panel-strong p-7 border border-surface-border space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orbit-green/10 text-orbit-green border border-orbit-green/25">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-orbit-green">
                      Document Checklist
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
                      className="flex items-start gap-3 rounded-xl bg-background-alt p-3.5 text-xs sm:text-sm text-foreground border border-surface-border"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-orbit-green/10 p-4 border border-orbit-green/25 flex items-start gap-3 text-xs text-muted text-justify">
                  <ShieldCheck className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                  <span>
                    All documents are collected securely with candidate consent
                    and handled in accordance with Indian data protection norms.
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
                <ScrambleText text="Related Verification Checks" />
                <h2 className="mt-2 font-heading text-2xl font-bold text-foreground">
                  Other Services You May Need
                </h2>
              </div>
              <Link
                href={
                  service.category === 'employee'
                    ? '/employee-bgv'
                    : '/business-bgv'
                }
                className="text-xs font-semibold text-orbit-green hover:underline"
              >
                View All Services →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedServices.map((rel) => (
                <TiltCard
                  key={rel.slug}
                  className="p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orbit-green/10 text-orbit-green border border-orbit-green/25">
                      <ServiceIcon name={rel.iconName} className="w-5 h-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                      {rel.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted text-justify leading-relaxed">
                      {rel.shortDescription}
                    </p>
                  </div>
                  <Link
                    href={`/${rel.slug}`}
                    className="mt-5 pt-3 border-t border-surface-border inline-flex items-center justify-between text-xs font-bold text-orbit-green"
                  >
                    <span>View Service</span>
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
