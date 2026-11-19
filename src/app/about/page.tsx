import React from 'react';
import Image from 'next/image';
import {
  Award,
  CheckCircle2,
  Compass,
  Eye,
  Mail,
  Target,
} from 'lucide-react';
import {
  RECOGNITION_BADGES_PLACEHOLDER,
  SITE_CONFIG,
  TEAM_PLACEHOLDERS,
} from '@/content/config';
import { TiltCard } from '@/components/ui/TiltCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { StatsSection } from '@/components/home/StatsSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'About Orbit Verify — OrbiTouch Outsourcing Pvt. Ltd., New Delhi',
  description:
    'Learn about Orbit Verify, operated by OrbiTouch Outsourcing Private Limited in New Delhi. Technology-enabled employee background verification and corporate due diligence across India.',
  path: '/about',
});

const COMPANY_TIMELINE = [
  {
    year: '2011–2019',
    title: 'HR & Recruitment Heritage (OrbiTouch Outsourcing)',
    detail:
      'Started with a strong foundation in corporate recruitment, staffing, and HR services in New Delhi before incorporating OrbiTouch Outsourcing Private Limited (CIN: U72900DL2019PTC350022).',
  },
  {
    year: '2021',
    title: 'Pan-India Physical Verification Network',
    detail:
      'Expanded our physical field verification executives across all 28 Indian states to verify residential addresses, supplier factories, and commercial premises.',
  },
  {
    year: '2023',
    title: 'Unified Digital BGV Client Portal',
    detail:
      'Launched our cloud-based verification platform allowing HR teams to initiate checks, collect digital candidate consent, and track live status reports.',
  },
  {
    year: '2026',
    title: 'Comprehensive Employee & B2B Risk Screening',
    detail:
      'Serving 300+ organizations across 20+ industries with 29 specialized employee background check and corporate due diligence modules.',
  },
];

const CORE_VALUES = [
  {
    title: 'Uncompromising Accuracy',
    detail:
      'Every screening report undergoes a dual-analyst quality audit with verified primary-source proofs attached.',
  },
  {
    title: 'Consent & Data Privacy',
    detail:
      'We adhere strictly to Indian data privacy laws and fair-hiring practices through 100% consent-based workflows.',
  },
  {
    title: 'Fast 24–72 Hour Turnaround',
    detail:
      'Our digital platform and dedicated New Delhi verification desks ensure rapid reporting without cutting corners.',
  },
  {
    title: 'Complete Transparency',
    detail:
      'Clear Red, Amber, and Green status grading, real-time portal tracking, and straightforward pricing.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-10">
      {/* 1. Hero & Real Orbit Verify Story */}
      <section className="relative py-14 sm:py-20 bg-background-alt/50 border-b border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <ScrambleText text="About Orbit Verify • New Delhi, India" />

              <SplitText
                as="h1"
                text="Empowering Businesses With Trust and Transparency."
                highlightWords={['Trust', 'Transparency.']}
                className="text-fluid-hero text-foreground"
              />

              <p className="text-base sm:text-lg text-muted text-justify leading-relaxed">
                <strong className="text-foreground">Orbit Verify</strong> is a
                technology-enabled employee background verification and
                corporate due diligence company in India, operated by{' '}
                <strong className="text-foreground">
                  {SITE_CONFIG.legalEntity}
                </strong>{' '}
                in New Delhi. We help businesses make confident hiring,
                onboarding, and vendor-risk decisions by mitigating hiring
                fraud, ensuring workplace safety, and driving regulatory
                compliance.
              </p>

              <p className="text-sm sm:text-base text-muted text-justify leading-relaxed">
                By combining automated digital verification platforms, official
                government and court database checks, pan-India physical field
                visits, and experienced human analysts, we deliver accurate,
                compliant screening reports tailored to more than 20 industries.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton href="/contact" variant="primary" size="lg">
                  Partner With Orbit Verify
                </MagneticButton>
                <MagneticButton
                  href="/employee-bgv"
                  variant="ghost"
                  size="lg"
                >
                  Explore Our Services
                </MagneticButton>
              </div>
            </div>

            {/* Right: Corporate Team Image & Official Registration Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden glass-panel-strong border border-surface-border shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="Orbit Verify corporate verification team in New Delhi"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Image
                      src="/orbit-verify-logo.jpg"
                      alt="Orbit Verify Official Logo"
                      width={130}
                      height={64}
                      className="h-11 w-auto object-contain rounded-lg bg-white p-1 border border-surface-border"
                    />
                    <span className="inline-flex items-center gap-1 rounded-full bg-orbit-green/10 px-3 py-1 text-xs font-semibold text-orbit-green">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Registered Indian Entity
                    </span>
                  </div>

                  <div>
                    <h2 className="font-heading text-lg font-bold text-foreground">
                      {SITE_CONFIG.legalEntity}
                    </h2>
                    <p className="mt-1 text-xs text-muted text-justify leading-relaxed">
                      Corporate Office: {SITE_CONFIG.contact.operationalOffice}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-surface-border text-xs">
                    <div className="rounded-xl bg-background-alt p-3 border border-surface-border">
                      <span className="text-[10px] text-muted block">
                        CORPORATE ID (CIN)
                      </span>
                      <span className="font-bold text-foreground">
                        {SITE_CONFIG.cin}
                      </span>
                    </div>
                    <div className="rounded-xl bg-background-alt p-3 border border-surface-border">
                      <span className="text-[10px] text-muted block">
                        GST REGISTRATION
                      </span>
                      <span className="font-bold text-foreground">
                        {SITE_CONFIG.gstin}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <StatsSection />

      {/* 3. Vision & Mission Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TiltCard className="p-8 border border-surface-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orbit-green/10 text-orbit-green border border-orbit-green/25">
                <Eye className="w-6 h-6" />
              </div>
              <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-orbit-green">
                Our Vision
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-foreground leading-snug">
                “{SITE_CONFIG.vision}”
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                We envision a hiring and business ecosystem where background
                verification is swift, transparent, and seamlessly integrated
                into every organization’s onboarding journey.
              </p>
            </TiltCard>

            <TiltCard className="p-8 border border-surface-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orbit-green/10 text-orbit-green border border-orbit-green/25">
                <Target className="w-6 h-6" />
              </div>
              <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-orbit-green">
                Our Mission
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-foreground leading-snug">
                “{SITE_CONFIG.mission}”
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                By uniting primary-source research, nationwide field operations,
                and secure digital workflows, we give employers and procurement
                leaders verified facts they can rely on.
              </p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-16 sm:py-20 bg-background-alt/50 border-y border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-2xl space-y-2 mb-10">
            <ScrambleText text="Our Core Values" />
            <h2 className="font-heading font-extrabold text-fluid-h2 text-foreground">
              The Principles Guiding Every Verification
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((val) => (
              <TiltCard key={val.title} className="p-6 space-y-3">
                <Compass className="w-6 h-6 text-orbit-green" />
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {val.title}
                </h3>
                <p className="text-xs text-muted text-justify leading-relaxed">
                  {val.detail}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Journey Timeline */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-2xl space-y-2 mb-12">
            <ScrambleText text="Our Journey" />
            <h2 className="font-heading font-extrabold text-fluid-h2 text-foreground">
              Growing With India’s Leading Employers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {COMPANY_TIMELINE.map((item) => (
              <TiltCard
                key={item.year}
                className="p-6 border border-surface-border flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-2xl font-extrabold text-orbit-green">
                    {item.year}
                  </span>
                  <h3 className="mt-3 font-heading text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted text-justify leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leadership & Operations Desk */}
      <section className="py-16 sm:py-20 bg-background-alt/50 border-y border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-2xl space-y-2 mb-10">
            <ScrambleText text="Leadership & Client Support" />
            <h2 className="font-heading font-extrabold text-fluid-h2 text-foreground">
              Dedicated Verification Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_PLACEHOLDERS.map((member) => (
              <TiltCard
                key={member.name}
                className="p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orbit-navy text-white font-heading font-bold">
                    {member.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-orbit-green mt-0.5">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-5 pt-3 border-t border-surface-border inline-flex items-center gap-2 text-xs font-semibold text-orbit-green hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{member.email}</span>
                </a>
              </TiltCard>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECOGNITION_BADGES_PLACEHOLDER.map((badge) => (
              <div
                key={badge.title}
                className="flex items-start gap-3 rounded-2xl glass-panel p-4 border border-surface-border"
              >
                <Award className="w-5 h-5 text-orbit-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-xs font-bold text-foreground">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-muted mt-0.5 text-left">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
