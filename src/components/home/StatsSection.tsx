'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { TiltCard } from '@/components/ui/TiltCard';
import { PROOF_STATS } from '@/content/config';

export function StatsSection() {
  return (
    <section
      aria-label="Verification Proof and Metrics"
      className="relative py-16 sm:py-20"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROOF_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <TiltCard className="h-full p-6 border border-surface-border">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-orbit-green">
                        0{idx + 1} // METRIC
                      </span>
                      <span className="h-2 w-2 rounded-full bg-orbit-green shadow-[0_0_8px_#16C15A]" />
                    </div>
                    <p className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight orbit-gradient-text">
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
                    <p className="mt-1 text-xs text-muted">{stat.sublabel}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
