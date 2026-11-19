import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  EXTRA_INDUSTRY_MARQUEE,
  INDUSTRIES_DATA,
} from '@/content/industries';
import { TiltCard } from '@/components/ui/TiltCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Industries We Serve — Sector-Specific Background Verification',
  description:
    'Tailored employee background verification and vendor due diligence for BFSI, IT/SaaS, Healthcare, Telecom, EdTech, Manufacturing, Logistics, and 20+ industries.',
  path: '/industries',
});

export default function IndustriesHubPage() {
  return (
    <div className="pt-28 pb-10">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 bg-radar-grid border-b border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 border border-orbit-green/35">
              <ScrambleText text="20+ INDUSTRY VERIFICATION BLUEPRINTS" />
            </div>

            <SplitText
              as="h1"
              text="Background Screening Tailored to Every Industry."
              highlightWords={['Tailored', 'Industry.']}
              className="text-fluid-hero text-foreground"
            />

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              From RBI-regulated fintechs and SOC2-compliant IT Capability
              Centers to hospitals, universities, and pan-India logistics
              fleets—Orbit Verify maps the exact verification checks your sector
              demands.
            </p>

            <div className="pt-2">
              <MagneticButton href="/contact" variant="primary" size="lg">
                Configure Your Sector BGV Package
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Industries Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDUSTRIES_DATA.map((industry, idx) => (
              <TiltCard
                key={industry.slug}
                cursorLabel="View"
                className="p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orbit-green/15 text-orbit-green border border-orbit-green/35">
                      <ServiceIcon
                        name={industry.iconName}
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="font-mono text-xs text-orbit-green">
                      SECTOR // 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="mt-5 font-heading text-2xl font-bold text-foreground group-hover:text-orbit-green transition-colors">
                    {industry.title}
                  </h2>

                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                    {industry.oneLiner}
                  </p>

                  <div className="mt-5 pt-4 border-t border-surface-border space-y-2">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-orbit-cyan">
                      KEY SCREENING MODULES
                    </p>
                    {industry.recommendedChecks.slice(0, 3).map((chk) => (
                      <div
                        key={chk}
                        className="flex items-start gap-2 text-xs text-foreground/90"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-orbit-green shrink-0 mt-0.5" />
                        <span>{chk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between">
                  <span className="font-mono text-[11px] text-muted">
                    {industry.riskStats.split('&')[0]}
                  </span>
                  <Link
                    href={`/industries-1/${industry.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orbit-green group-hover:translate-x-1 transition-transform"
                  >
                    <span>Industry Playbook</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* 20+ Additional Sectors Directory */}
          <div className="mt-16 rounded-3xl glass-panel p-8 border border-surface-border">
            <div className="max-w-xl mb-6">
              <ScrambleText text="EXTENDED COVERAGE" />
              <h3 className="mt-1 font-heading text-2xl font-bold text-foreground">
                20+ Specialized Verticals Served Across India &amp; Global Markets
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {EXTRA_INDUSTRY_MARQUEE.map((sector) => (
                <span
                  key={sector}
                  className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-xs font-medium text-foreground border border-surface-border"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orbit-green" />
                  <span>{sector}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
