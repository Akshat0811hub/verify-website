'use client';

import React from 'react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { TiltCard } from '@/components/ui/TiltCard';
import { PROOF_STATS } from '@/content/config';

export function StatsSection() {
  return (
    <section
      aria-label="Verification Proof and Metrics"
      className="relative py-14 sm:py-16"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROOF_STATS.map((stat) => (
            <TiltCard
              key={stat.id}
              className="h-full p-6 border border-surface-border"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-orbit-navy dark:text-white">
                    <AnimatedCounter
                      value={stat.value}
                      decimals={stat.decimals ?? 0}
                      suffix={stat.suffix}
                    />
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-surface-border">
                  <h3 className="font-heading text-base font-bold text-foreground">
                    {stat.label}
                  </h3>
                  <p className="mt-1 text-xs text-muted text-left">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
