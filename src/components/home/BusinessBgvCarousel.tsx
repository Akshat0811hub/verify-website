'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { BUSINESS_SERVICES } from '@/content/services';
import { SERVICE_IMAGE_MAP } from '@/components/home/ServicesBento';

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
      className="relative py-16 lg:py-24 overflow-hidden bg-background-alt/40 border-y border-surface-border"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <ScrambleText text="Corporate & Vendor Due Diligence" />
            <SplitText
              text="Verify Every Vendor, Partner & Supply Chain Business"
              highlightWords={['Vendor,', 'Partner']}
              className="text-fluid-h2 text-foreground"
            />
            <p className="text-sm sm:text-base text-muted text-justify leading-relaxed">
              Explore our specialized corporate verification modules—from MCA
              financial health, legal litigation, and cyber security to physical
              factory inspections and ongoing vendor monitoring.
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
              className="inline-flex items-center gap-1.5 rounded-full glass-panel px-5 py-2.5 text-xs font-semibold text-orbit-green border border-orbit-green/40 hover:bg-orbit-green/10 transition-colors"
            >
              <span>All 15 B2B Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track with Images on Every Card */}
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
        >
          {carouselItems.map((service) => {
            const cardImage =
              SERVICE_IMAGE_MAP[service.slug] ??
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';

            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group shrink-0 w-[310px] sm:w-[350px] snap-start rounded-3xl glass-panel overflow-hidden flex flex-col justify-between border border-surface-border hover:-translate-y-1 hover:border-orbit-green/50 transition-all duration-200"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden border-b border-surface-border">
                    <img
                      src={cardImage}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-xl bg-white/95 px-2.5 py-1 text-xs font-bold text-orbit-navy shadow-sm">
                      <ServiceIcon
                        name={service.iconName}
                        className="w-3.5 h-3.5 text-orbit-green"
                      />
                      <span>{service.carouselIndex}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-orbit-green transition-colors">
                      {service.shortTitle}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <ul className="mt-4 space-y-1.5 border-t border-surface-border pt-3.5">
                      {service.whatsChecked.slice(0, 3).map((item) => (
                        <li
                          key={item.title}
                          className="flex items-center gap-2 text-xs text-foreground/90"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-orbit-green shrink-0" />
                          <span className="truncate">{item.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-surface-border flex items-center justify-between">
                  <span className="text-xs font-medium text-muted">
                    {service.turnaround
                      .replace('(Placeholder)', '')
                      .split('|')[0]
                      .trim()}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-orbit-green group-hover:translate-x-1 transition-transform">
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
