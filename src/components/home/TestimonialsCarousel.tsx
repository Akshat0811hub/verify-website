'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, Sparkles } from 'lucide-react';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { TESTIMONIALS_PLACEHOLDER } from '@/content/config';
import { cn } from '@/lib/utils';

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_PLACEHOLDER.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_PLACEHOLDER.length);

  const handlePrev = () =>
    setActiveIndex(
      (prev) =>
        (prev - 1 + TESTIMONIALS_PLACEHOLDER.length) %
        TESTIMONIALS_PLACEHOLDER.length
    );

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <ScrambleText text="CLIENT FEEDBACK • HR & RISK LEADERS" />
            <SplitText
              text="Why HR, Compliance & Risk Teams Trust Orbit Verify."
              highlightWords={['Trust', 'Orbit']}
              className="text-fluid-h2 text-foreground"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full glass-panel hover:border-orbit-green transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full glass-panel hover:border-orbit-green transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Draggable / Interactive Testimonial Deck */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          data-cursor="Drag"
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Featured Active Testimonial Card (7 cols) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={TESTIMONIALS_PLACEHOLDER[activeIndex].id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50) handleNext();
                    if (info.offset.x > 50) handlePrev();
                  }}
                  className="h-full rounded-3xl glass-panel-strong p-8 sm:p-10 border border-orbit-green/40 shadow-[0_25px_70px_rgba(5,6,15,0.6)] flex flex-col justify-between cursor-grab active:cursor-grabbing"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orbit-green/15 text-orbit-green border border-orbit-green/35">
                        <Quote className="w-6 h-6" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-orbit-green/15 px-3.5 py-1 font-mono text-xs font-bold text-orbit-green border border-orbit-green/30">
                        <Sparkles className="w-3.5 h-3.5" />
                        {TESTIMONIALS_PLACEHOLDER[activeIndex].metric}
                      </span>
                    </div>

                    <blockquote className="font-heading text-lg sm:text-2xl font-semibold text-foreground leading-relaxed">
                      “{TESTIMONIALS_PLACEHOLDER[activeIndex].quote}”
                    </blockquote>
                  </div>

                  <div className="mt-8 pt-6 border-t border-surface-border flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orbit-navy via-orbit-blue to-orbit-green text-white font-heading font-bold text-sm">
                        {TESTIMONIALS_PLACEHOLDER[activeIndex].author
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>
                      <div>
                        <p className="font-heading text-sm font-bold text-foreground">
                          {TESTIMONIALS_PLACEHOLDER[activeIndex].author}
                        </p>
                        <p className="text-xs text-muted">
                          {TESTIMONIALS_PLACEHOLDER[activeIndex].company} •{' '}
                          {TESTIMONIALS_PLACEHOLDER[activeIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Side Selector Stack (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3">
              {TESTIMONIALS_PLACEHOLDER.map((item, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      'w-full text-left rounded-2xl p-4 transition-all border',
                      isSelected
                        ? 'glass-panel-strong border-orbit-green/50 shadow-md'
                        : 'glass-panel border-surface-border opacity-70 hover:opacity-100'
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xs font-bold text-foreground">
                        {item.company}
                      </span>
                      <span className="font-mono text-[10px] text-orbit-green">
                        {item.metric}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted line-clamp-1">
                      “{item.quote}”
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Auto-Play Progress Bar */}
          <div className="mt-6 flex items-center gap-2">
            {TESTIMONIALS_PLACEHOLDER.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Select testimonial ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className="flex-1 h-1.5 rounded-full bg-surface-border overflow-hidden"
              >
                {idx === activeIndex && (
                  <motion.div
                    key={`bar-${activeIndex}-${isPaused}`}
                    initial={{ width: '0%' }}
                    animate={{ width: isPaused ? '50%' : '100%' }}
                    transition={{
                      duration: isPaused ? 0.2 : 5.5,
                      ease: 'linear',
                    }}
                    className="h-full bg-gradient-to-r from-orbit-green to-orbit-cyan"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
