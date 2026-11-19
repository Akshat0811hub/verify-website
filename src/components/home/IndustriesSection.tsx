'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { Marquee } from '@/components/ui/Marquee';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import {
  EXTRA_INDUSTRY_MARQUEE,
  INDUSTRIES_DATA,
} from '@/content/industries';
import { cn } from '@/lib/utils';

export function IndustriesSection() {
  const [activeSlug, setActiveSlug] = useState<string>(INDUSTRIES_DATA[0].slug);

  const activeIndustry =
    INDUSTRIES_DATA.find((i) => i.slug === activeSlug) ?? INDUSTRIES_DATA[0];

  return (
    <section
      aria-labelledby="industries-we-serve-heading"
      className="relative py-20 sm:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <ScrambleText text="SECTOR INTELLIGENCE • 20+ REGULATED INDUSTRIES" />
            <SplitText
              text="Verification Tailored to Your Industry’s Risk Profile."
              highlightWords={['Tailored', 'Risk']}
              className="text-fluid-h2 text-foreground"
            />
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Every sector carries distinct regulatory mandates and fraud
              vectors. Select any industry below to inspect its custom
              verification blueprint.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 rounded-full glass-panel px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-orbit-green border border-orbit-green/40 hover:bg-orbit-green/10 transition-colors self-start lg:self-auto"
          >
            <span>Explore All 20+ Sectors</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive List + Live Visual Preview (Zero mousemove state lag) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Interactive Accordion List */}
          <div className="lg:col-span-7 divide-y divide-surface-border rounded-3xl glass-panel border border-surface-border overflow-hidden">
            {INDUSTRIES_DATA.slice(0, 7).map((ind, idx) => {
              const isSelected = ind.slug === activeSlug;
              return (
                <div
                  key={ind.slug}
                  onMouseEnter={() => setActiveSlug(ind.slug)}
                  onClick={() => setActiveSlug(ind.slug)}
                  className={cn(
                    'group relative p-5 sm:p-6 transition-colors cursor-pointer',
                    isSelected
                      ? 'bg-gradient-to-r from-orbit-green/15 via-orbit-cyan/5 to-transparent'
                      : 'hover:bg-surface/40'
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs text-orbit-green mt-1">
                        0{idx + 1}
                      </span>
                      <div>
                        <h3
                          className={cn(
                            'font-heading text-lg sm:text-xl font-bold transition-colors',
                            isSelected
                              ? 'text-orbit-green'
                              : 'text-foreground group-hover:text-orbit-green'
                          )}
                        >
                          {ind.shortTitle}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                          {ind.oneLiner}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/industries-1/${ind.slug}`}
                      aria-label={`View ${ind.shortTitle} verification solutions`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-surface-border group-hover:border-orbit-green group-hover:bg-orbit-green group-hover:text-orbit-deep transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 5 Cols: Sticky Sector Intelligence Dossier Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl glass-panel-strong p-7 border border-orbit-green/40 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orbit-green/15 text-orbit-green border border-orbit-green/40">
                  <ServiceIcon
                    name={activeIndustry.iconName}
                    className="w-6 h-6"
                  />
                </div>
                <span className="rounded-full bg-orbit-green/15 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-orbit-green border border-orbit-green/30">
                  Sector Blueprint
                </span>
              </div>

              <div>
                <h4 className="font-heading text-2xl font-bold text-foreground">
                  {activeIndustry.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  {activeIndustry.description}
                </p>
              </div>

              <div className="rounded-2xl bg-background/60 p-4 border border-surface-border space-y-2.5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-orbit-cyan">
                  RECOMMENDED VERIFICATION STACK
                </p>
                {activeIndustry.recommendedChecks.map((check) => (
                  <div
                    key={check}
                    className="flex items-start gap-2 text-xs text-foreground/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted">
                  {activeIndustry.riskStats.split('&')[0]}
                </span>
                <Link
                  href={`/industries-1/${activeIndustry.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-orbit-green px-5 py-2.5 text-xs font-bold text-orbit-deep hover:bg-orbit-cyan transition-colors"
                >
                  <span>Full Industry Playbook</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Looping Industry Marquee (20+ Sectors) */}
        <div className="mt-14 pt-8 border-t border-surface-border">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted mb-5">
            + 20 More Sectors Protected by Orbit Verify
          </p>
          <Marquee speed={45} reverse>
            {EXTRA_INDUSTRY_MARQUEE.map((sector) => (
              <Link
                key={sector}
                href="/industries"
                className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-xs font-medium text-foreground/85 border border-surface-border hover:border-orbit-green/50 hover:text-orbit-green transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orbit-green" />
                <span>{sector}</span>
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
