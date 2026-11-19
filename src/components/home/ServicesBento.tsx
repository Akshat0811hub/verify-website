'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { BUSINESS_SERVICES, EMPLOYEE_SERVICES } from '@/content/services';
import { cn } from '@/lib/utils';

const SERVICE_IMAGES: Record<string, string> = {
  'identity-and-address-verification':
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80',
  'education-and-employment-checks':
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80',
  'criminal-background-checks':
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=80',
  'financial-due-diligence-service':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
  'vendor-verification-services':
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80',
  'physical-verification':
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80',
};

export function ServicesBento() {
  const [activeTab, setActiveTab] = useState<'employee' | 'business'>(
    'employee'
  );

  const displayedServices =
    activeTab === 'employee'
      ? EMPLOYEE_SERVICES.filter((s) => s.bentoFeatured)
      : BUSINESS_SERVICES.slice(0, 9);

  return (
    <section
      id="services-bento"
      aria-labelledby="services-bento-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        {/* Section Header + Clean Pill Switcher */}
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

          {/* Clean Tab Switcher */}
          <div
            role="tablist"
            aria-label="Filter verification services by category"
            className="inline-flex items-center rounded-full glass-panel p-1.5 border border-surface-border self-start lg:self-auto"
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
                    'rounded-full px-5 py-2.5 text-xs sm:text-sm font-heading font-bold transition-all',
                    isActive
                      ? 'bg-orbit-navy text-white shadow-sm'
                      : 'text-muted hover:text-foreground'
                  )}
                >
                  {tab === 'employee'
                    ? 'Employee BGV Services (14)'
                    : 'Business Due Diligence (15)'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean 3-Column Corporate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => {
            const cardImage = SERVICE_IMAGES[service.slug];
            return (
              <TiltCard
                key={service.slug}
                className="flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {cardImage && (
                    <div className="h-44 w-full overflow-hidden border-b border-surface-border">
                      <img
                        src={cardImage}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orbit-green/10 text-orbit-green border border-orbit-green/25">
                        <ServiceIcon
                          name={service.iconName}
                          className="w-5 h-5"
                        />
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-background-alt px-3 py-1 text-xs font-medium text-muted border border-surface-border">
                        <Clock className="w-3.5 h-3.5 text-orbit-green" />
                        <span>
                          {service.turnaround
                            .replace('(Placeholder)', '')
                            .split('|')[0]
                            .trim()}
                        </span>
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-orbit-green transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="mt-4 space-y-1.5 pt-3 border-t border-surface-border">
                      {service.whatsChecked.slice(0, 3).map((check) => (
                        <li
                          key={check.title}
                          className="flex items-center gap-2 text-xs text-foreground/90"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-orbit-green shrink-0" />
                          <span className="truncate">{check.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-surface-border flex items-center justify-between">
                  <span className="text-xs font-medium text-muted">
                    {service.category === 'employee'
                      ? 'Employee Verification'
                      : 'Corporate Due Diligence'}
                  </span>
                  <Link
                    href={`/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orbit-green group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Bottom Link to Full Catalog */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            href={activeTab === 'employee' ? '/employee-bgv' : '/business-bgv'}
            className="inline-flex items-center gap-2 rounded-full glass-panel px-7 py-3.5 text-sm font-semibold text-foreground hover:border-orbit-green transition-all"
          >
            <span>
              View All{' '}
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
