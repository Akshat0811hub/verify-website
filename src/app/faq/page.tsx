import React from 'react';
import { FaqSection } from '@/components/home/FaqSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Frequently Asked Questions (FAQ) — Background Verification',
  description:
    'Answers to common questions about employee background verification turnaround times, required documents, candidate consent, DPDP compliance, and HRMS integration.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <div className="pt-24">
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
