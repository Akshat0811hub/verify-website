'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { BUSINESS_SERVICES, EMPLOYEE_SERVICES } from '@/content/services';
import { cn } from '@/lib/utils';

export function ServicesBento() {
  const [activeTab, setActiveTab] = useState<'employee' | 'business'>(
    'employee'
  );

  // Use the 10 core bento cards for Employee BGV or top 10 Business BGV cards
  const displayedServices =
    activeTab === 'employee'
      ? EMPLOYEE_SERVICES.filter((s) => s.bentoFeatured)
      : BUSINESS_SERVICES.slice(0, 10);

  return (
    <section
      id="services-bento"
      aria-labelledby="services-bento-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        {/* Section Header + Sliding Pill Filter Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-3">
            <ScrambleText text="WHAT WE VERIFY • 360° CHECK ARCHITECTURE" />
            <SplitText
              text="Every Signal Orbiting One Verified Profile."
              highlightWords={['Orbiting', 'Verified']}
              className="text-fluid-h2 text-foreground"
            />
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Modular verification checks engineered for rapid hiring and
              high-stakes corporate due diligence. Switch between Employee BGV
              and Business BGV modules below.
            </p>
          </div>

          {/* Animated Sliding Pill Switcher */}
          <div
            role="tablist"
            aria-label="Filter verification services by category"
            className="inline-flex items-center rounded-full glass-panel p-1.5 border border-orbit-green/30 self-start lg:self-auto"
          >
            {(['employee', 'business'] as const).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'relative z-10 rounded-full px-5 py-2.5 text-xs sm:text-sm font-heading font-bold transition-colors',
                    isActive
                      ? 'text-white'
                      : 'text-muted hover:text-foreground'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="bento-filter-pill"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-orbit-navy via-[#143366] to-orbit-green shadow-[0_0_20px_rgba(22,193,90,0.4)]"
                    />
                  )}
                  {tab === 'employee'
                    ? 'Employee BGV (14)'
                    : 'Business BGV (15)'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid with Smooth Cross-Fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {displayedServices.map((service, idx) => {
              const isWide =
                idx === 0 || idx === 5 || service.bentoSpan === 'md:col-span-2';

              return (
                <TiltCard
                  key={service.slug}
                  cursorLabel="View"
                  className={cn(
                    'p-6 flex flex-col justify-between',
                    isWide ? 'md:col-span-2' : 'col-span-1'
                  )}
                >
                  <div>
                    {/* Top Row: Animated Icon + Turnaround Time Chip */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orbit-green/20 via-orbit-cyan/15 to-orbit-blue/20 text-orbit-green border border-orbit-green/35 group-hover:scale-110 transition-transform duration-300">
                        <ServiceIcon
                          name={service.iconName}
                          className="w-6 h-6"
                        />
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-background/70 px-3 py-1 font-mono text-[11px] text-orbit-cyan border border-surface-border">
                        <Clock className="w-3 h-3 text-orbit-green" />
                        <span>{service.turnaround}</span>
                      </span>
                    </div>

                    {/* Title & 1-Line Description */}
                    <h3 className="mt-5 font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-orbit-green transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Mini Check Pills on Wide Bento Cards */}
                    {isWide && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.whatsChecked.slice(0, 3).map((check) => (
                          <span
                            key={check.title}
                            className="rounded-lg bg-orbit-green/10 px-2.5 py-1 font-mono text-[10px] text-orbit-green border border-orbit-green/25"
                          >
                            ✓ {check.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Link */}
                  <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      MODULE // 0{idx + 1}
                    </span>
                    <Link
                      href={`/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orbit-green group-hover:translate-x-1 transition-transform"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </TiltCard>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Link to Full Catalog */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center">
          <Link
            href={activeTab === 'employee' ? '/employee-bgv' : '/business-bgv'}
            className="inline-flex items-center gap-2 rounded-full glass-panel px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:border-orbit-green transition-all"
          >
            <span>
              Explore All{' '}
              {activeTab === 'employee'
                ? '14 Employee BGV'
                : '15 Business Due Diligence'}{' '}
              Services
            </span>
            <ArrowRight className="w-4 h-4 text-orbit-green" />
          </Link>
        </div>
      </div>
    </section>
  );
}
