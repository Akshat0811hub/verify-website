import React from 'react';
import { SITE_CONFIG } from '@/content/config';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Privacy Policy & Data Protection Statement',
  description:
    'Privacy Policy of Orbit Verify (operated by Orbitouch Outsourcing Private Limited). Learn how we protect candidate and corporate verification data.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="py-12 bg-radar-grid border-b border-surface-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-4">
          <ScrambleText text="DATA PRIVACY & DPDP GOVERNANCE" />
          <SplitText
            as="h1"
            text="Privacy Policy & Consent Framework"
            highlightWords={['Privacy', 'Consent']}
            className="text-fluid-h2 text-foreground"
          />
          <p className="font-mono text-xs text-muted">
            Last Updated: January 2026 • Entity: {SITE_CONFIG.legalEntity} (CIN:{' '}
            {SITE_CONFIG.cin})
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-8 text-sm text-muted leading-relaxed">
          <div className="rounded-2xl glass-panel p-6 border border-orbit-green/30">
            <h2 className="font-heading text-lg font-bold text-foreground mb-2">
              1. Scope &amp; Controller / Processor Role
            </h2>
            <p>
              Orbit Verify is operated by{' '}
              <strong className="text-foreground">
                {SITE_CONFIG.legalEntity}
              </strong>{' '}
              having its registered office at{' '}
              {SITE_CONFIG.contact.registeredOffice} and operational office at{' '}
              {SITE_CONFIG.contact.operationalOffice}. When performing
              background verification (BGV) or corporate due diligence on behalf
              of an employer or enterprise client, Orbit Verify acts as a Data
              Processor operating strictly under the documented instructions of
              the client and explicit consent of the candidate.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-surface-border">
            <h2 className="font-heading text-lg font-bold text-foreground mb-2">
              2. Consent-First Principle
            </h2>
            <p>
              No verification check is initiated without explicit digital or
              written authorization from the candidate. Candidates are informed
              of the specific scope of verification (such as identity, address,
              education, employment history, court record, credit, or drug
              screening) prior to data collection.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-surface-border">
            <h2 className="font-heading text-lg font-bold text-foreground mb-2">
              3. Data Minimization &amp; Purpose Limitation
            </h2>
            <p>
              We collect only the personal and professional identifiers strictly
              required to complete the authorized verification modules. We never
              sell, rent, or monetize candidate PII for advertising or
              unsolicited marketing.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-surface-border">
            <h2 className="font-heading text-lg font-bold text-foreground mb-2">
              4. Security &amp; Retention
            </h2>
            <p>
              Verification artefacts and identity documents are transmitted over
              encrypted TLS channels and stored in access-controlled vaults with
              immutable audit logs. Data is retained only for the duration
              mandated by the client master service agreement and applicable
              Indian law.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-surface-border">
            <h2 className="font-heading text-lg font-bold text-foreground mb-2">
              5. Grievance Officer &amp; Escalation Contact
            </h2>
            <p>
              For data privacy inquiries, correction requests, or compliance
              escalations, please contact:
            </p>
            <ul className="mt-3 space-y-1 font-mono text-xs text-foreground">
              <li>Email: {SITE_CONFIG.contact.email}</li>
              <li>Escalation Desk: {SITE_CONFIG.contact.escalationEmail}</li>
              <li>
                Phone: {SITE_CONFIG.contact.phones[0]},{' '}
                {SITE_CONFIG.contact.phones[1]}
              </li>
              <li>Address: {SITE_CONFIG.contact.operationalOffice}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
