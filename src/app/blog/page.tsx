import React from 'react';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { BlogGridClient } from '@/components/templates/BlogGridClient';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Blog & BGV Intelligence — Hiring Risk, Compliance & Due Diligence',
  description:
    'Insights from Orbit Verify on detecting dual employment, shell-company experience fraud, DPDP consent compliance, and B2B vendor due diligence in India.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <div className="pt-28 pb-10">
      <section className="relative py-14 sm:py-16 bg-radar-grid border-b border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <ScrambleText text="ORBIT INTELLIGENCE • RESEARCH & PLAYBOOKS" />
            <SplitText
              as="h1"
              text="Insights on Workforce Trust, Fraud Forensics & Compliance."
              highlightWords={['Trust,', 'Forensics', 'Compliance.']}
              className="text-fluid-hero text-foreground"
            />
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Practical guides for HR leaders, compliance officers, and
              procurement risk teams navigating background screening in 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <BlogGridClient />
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
