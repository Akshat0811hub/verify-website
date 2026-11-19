import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { EMPLOYEE_SERVICES } from '@/content/services';
import { TiltCard } from '@/components/ui/TiltCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { HowItWorksPin } from '@/components/home/HowItWorksPin';
import { FaqSection } from '@/components/home/FaqSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Employee Background Verification Services (BGV) in India',
  description:
    'Complete 14-module employee background verification in India: identity, address, education, employment, criminal court, credit, drug screening, and executive checks.',
  path: '/employee-bgv',
});

export default function EmployeeBgvPage() {
  return (
    <div className="pt-28 pb-10">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 bg-radar-grid border-b border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 border border-orbit-green/35">
              <ScrambleText text="14 WORKFORCE VERIFICATION MODULES" />
            </div>

            <SplitText
              as="h1"
              text="Employee Background Verification Built for Modern Hiring."
              highlightWords={['Background', 'Verification', 'Modern']}
              className="text-fluid-hero text-foreground"
            />

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              From instant digital identity and criminal database checks to
              primary-source university registrar, HR tenure, UAN overlap, and
              C-suite executive due diligence—verify every candidate with 100%
              consent-based compliance.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton href="/contact" variant="primary" size="lg">
                Request Employee BGV Demo
              </MagneticButton>
              <span className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-3 font-mono text-xs text-orbit-green border border-orbit-green/30">
                <ShieldCheck className="w-4 h-4" />
                DPDP-Conscious &amp; Audit-Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* All 14 Employee BGV Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMPLOYEE_SERVICES.map((service, idx) => (
              <TiltCard
                key={service.slug}
                cursorLabel="View"
                className="p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orbit-green/15 text-orbit-green border border-orbit-green/35">
                      <ServiceIcon name={service.iconName} className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-background/70 px-3 py-1 font-mono text-[10px] text-orbit-cyan border border-surface-border">
                      <Clock className="w-3 h-3 text-orbit-green" />
                      {service.turnaround.split('|')[0]}
                    </span>
                  </div>

                  <h2 className="mt-5 font-heading text-xl font-bold text-foreground group-hover:text-orbit-green transition-colors">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-surface-border">
                    {service.whatsChecked.slice(0, 3).map((c) => (
                      <li
                        key={c.title}
                        className="flex items-center gap-2 text-xs text-foreground/85"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-orbit-green shrink-0" />
                        <span className="truncate">{c.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted">
                    EMP // {String(idx + 1).padStart(2, '0')}
                  </span>
                  <Link
                    href={`/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orbit-green group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Check</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksPin />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
