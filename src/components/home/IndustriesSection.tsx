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

const INDUSTRY_IMAGES: Record<string, string> = {
  'banking-and-financial-services':
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
  'information-technology':
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
  'healthcare-and-pharmaceuticals':
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
  telecommunications:
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80',
  'education-and-edtech':
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
  'manufacturing-and-logistics':
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
  'real-estate-and-construction':
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
  'retail-and-ecommerce':
    'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80',
};

export function IndustriesSection() {
  const [activeSlug, setActiveSlug] = useState<string>(INDUSTRIES_DATA[0].slug);

  const activeIndustry =
    INDUSTRIES_DATA.find((i) => i.slug === activeSlug) ?? INDUSTRIES_DATA[0];

  const activeImage =
    INDUSTRY_IMAGES[activeIndustry.slug] ??
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80';

  return (
    <section
      aria-labelledby="industries-we-serve-heading"
      className="relative py-16 sm:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <ScrambleText text="Industries We Serve Across India" />
            <SplitText
              text="Background Verification Tailored for 20+ Industries"
              highlightWords={['Tailored', 'Industries']}
              className="text-fluid-h2 text-foreground"
            />
            <p className="text-sm sm:text-base text-muted text-justify leading-relaxed">
              Every industry faces unique hiring and compliance requirements.
              Orbit Verify customizes its verification packages for banking, IT,
              healthcare, telecom, education, manufacturing, logistics, and
              growing businesses across India.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 rounded-full glass-panel px-5 py-2.5 text-xs font-semibold text-orbit-green border border-orbit-green/40 hover:bg-orbit-green/10 transition-colors self-start lg:self-auto"
          >
            <span>Explore All 20+ Sectors</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive List + Live Industry Photo & Dossier Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Clean Industry List */}
          <div className="lg:col-span-7 divide-y divide-surface-border rounded-3xl glass-panel border border-surface-border overflow-hidden">
            {INDUSTRIES_DATA.slice(0, 7).map((ind) => {
              const isSelected = ind.slug === activeSlug;
              return (
                <div
                  key={ind.slug}
                  onMouseEnter={() => setActiveSlug(ind.slug)}
                  onClick={() => setActiveSlug(ind.slug)}
                  className={cn(
                    'group relative p-5 sm:p-6 transition-colors cursor-pointer',
                    isSelected
                      ? 'bg-orbit-green/10'
                      : 'hover:bg-background-alt/60'
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orbit-green/15 text-orbit-green">
                        <ServiceIcon name={ind.iconName} className="w-5 h-5" />
                      </div>
                      <div>
                        <h3
                          className={cn(
                            'font-heading text-lg font-bold transition-colors',
                            isSelected
                              ? 'text-orbit-green'
                              : 'text-foreground group-hover:text-orbit-green'
                          )}
                        >
                          {ind.shortTitle}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                          {ind.oneLiner}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/industries-1/${ind.slug}`}
                      aria-label={`View ${ind.shortTitle} verification solutions`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-surface-border group-hover:border-orbit-green group-hover:bg-orbit-green group-hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 5 Cols: Industry Image & Recommended Verification Checks */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl glass-panel-strong border border-surface-border shadow-xl overflow-hidden">
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={activeImage}
                  alt={activeIndustry.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 rounded-full bg-orbit-navy/90 px-3.5 py-1 text-xs font-semibold text-white">
                  {activeIndustry.shortTitle}
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-5">
                <div>
                  <h4 className="font-heading text-xl font-bold text-foreground">
                    {activeIndustry.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                    {activeIndustry.description}
                  </p>
                </div>

                <div className="rounded-2xl bg-background-alt p-4 border border-surface-border space-y-2">
                  <p className="text-xs font-bold text-foreground">
                    Recommended Verification Checks:
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

                <div className="pt-1 flex items-center justify-end">
                  <Link
                    href={`/industries-1/${activeIndustry.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-orbit-green px-5 py-2.5 text-xs font-bold text-white hover:opacity-95 transition-opacity"
                  >
                    <span>View Industry Solutions</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Looping Industry Marquee (20+ Sectors) */}
        <div className="mt-14 pt-8 border-t border-surface-border">
          <p className="text-center text-xs font-semibold text-muted mb-5">
            Serving 20+ Additional Business Verticals Across India &amp; Global
            Markets
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
