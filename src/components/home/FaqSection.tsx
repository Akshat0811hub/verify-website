'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { JsonLd } from '@/components/ui/JsonLd';
import { HOMEPAGE_FAQS } from '@/content/config';
import { getFaqSchema } from '@/lib/seo';
import { cn } from '@/lib/utils';

interface FaqSectionProps {
  faqs?: { question: string; answer: string }[];
  title?: string;
}

export function FaqSection({
  faqs = HOMEPAGE_FAQS,
  title = 'Frequently Asked Questions About Background Verification.',
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-section-heading"
      className="relative py-20 sm:py-28 bg-background-alt/25 border-t border-surface-border"
    >
      <JsonLd data={getFaqSchema(faqs)} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center space-y-3 mb-12">
          <ScrambleText text="KNOWLEDGE BASE • BGV CLARITY" />
          <SplitText
            text={title}
            highlightWords={['Questions', 'Verification.']}
            className="text-fluid-h2 text-foreground"
          />
          <p className="text-sm sm:text-base text-muted">
            Clear answers on turnaround times, document requirements, candidate
            consent, compliance, and HRMS integration.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={cn(
                  'rounded-2xl transition-all duration-300 border overflow-hidden',
                  isOpen
                    ? 'glass-panel-strong border-orbit-green/45 shadow-[0_12px_35px_rgba(22,193,90,0.12)]'
                    : 'glass-panel border-surface-border hover:border-orbit-green/30'
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs text-orbit-green">
                      0{idx + 1}
                    </span>
                    <span className="font-heading text-base sm:text-lg font-bold text-foreground">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                      isOpen
                        ? 'rotate-45 bg-orbit-green text-orbit-deep border-orbit-green'
                        : 'border-surface-border text-muted'
                    )}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 pl-12 text-xs sm:text-sm text-muted leading-relaxed border-t border-surface-border/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
