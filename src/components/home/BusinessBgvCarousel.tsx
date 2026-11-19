'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { BUSINESS_SERVICES } from '@/content/services';

/**
 * Lightweight, native horizontal scroll carousel for B2B Due Diligence.
 * Removes vertical scroll-jacking (pin: true) so vertical page scrolling stays 100% smooth.
 */
export function BusinessBgvCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const carouselItems = BUSINESS_SERVICES.filter((s) =>
    Boolean(s.carouselIndex)
  );

  const scrollTrack = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: dir === 'left' ? -380 : 380,
      behavior: 'smooth',
    });
  };

  return (
    <section
      aria-labelledby="b2b-due-diligence-heading"
      className="relative py-20 lg:py-24 overflow-hidden bg-background-alt/30 border-y border-surface-border"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <ScrambleText text="B2B DUE DILIGENCE • CORPORATE & VENDOR VERIFICATION" />
            <SplitText
              text="Verify Every Vendor, Counterparty & Supply Chain Node."
              highlightWords={['Vendor,', 'Counterparty']}
              className="text-fluid-h2 text-foreground"
            />
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              13 specialized corporate intelligence modules—from MCA financials,
              cyber posture, and ESG compliance to physical factory inspections
              and continuous monitoring.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollTrack('left')}
                aria-label="Scroll previous"
                className="flex h-10 w-10 items-center justify-center rounded-full glass-panel hover:border-orbit-green transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTrack('right')}
                aria-label="Scroll next"
                className="flex h-10 w-10 items-center justify-center rounded-full glass-panel hover:border-orbit-green transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <Link
              href="/business-bgv"
              className="inline-flex items-center gap-1.5 rounded-full glass-panel px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-orbit-green border border-orbit-green/40 hover:bg-orbit-green/10 transition-colors"
            >
              <span>All 15 B2B Modules</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Smooth Native Horizontal Scroll Track */}
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
        >
          {carouselItems.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group shrink-0 w-[300px] sm:w-[340px] snap-start rounded-3xl glass-panel p-6 flex flex-col justify-between border border-surface-border hover:-translate-y-1 hover:border-orbit-green/50 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-extrabold orbit-gradient-text">
                    {service.carouselIndex}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orbit-green/15 text-orbit-green border border-orbit-green/30 group-hover:bg-orbit-green group-hover:text-orbit-deep transition-colors">
                    <ServiceIcon name={service.iconName} className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold text-foreground group-hover:text-orbit-green transition-colors">
                  {service.shortTitle}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  {service.shortDescription}
                </p>

                <ul className="mt-5 space-y-1.5 border-t border-surface-border pt-4">
                  {service.whatsChecked.slice(0, 3).map((item) => (
                    <li
                      key={item.title}
                      className="flex items-center gap-2 text-xs text-foreground/85"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-orbit-green shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between">
                <span className="font-mono text-[10px] text-orbit-cyan">
                  {service.turnaround.split('|')[0]}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-orbit-green group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
