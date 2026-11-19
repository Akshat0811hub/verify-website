import React from 'react';
import Image from 'next/image';
import {
  Award,
  Building2,
  Compass,
  Eye,
  Mail,
  ShieldCheck,
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
  title: 'About Us — Orbit Verify (Orbitouch Outsourcing Pvt. Ltd.)',
  description:
    'Learn about Orbit Verify, operated by Orbitouch Outsourcing Private Limited in New Delhi. Our vision, mission, values, and pan-India background verification network.',
  path: '/about',
});

const COMPANY_TIMELINE = [
  {
    year: '2019',
    title: 'Foundation of Orbitouch Outsourcing Pvt. Ltd.',
    detail:
      'Incorporated in New Delhi (CIN: U72900DL2019PTC350022) with a mission to bring transparency, speed, and accountability to workforce and business verification.',
  },
  {
    year: '2021',
    title: 'Pan-India Physical Field Network Expansion',
    detail:
      'Scaled on-ground address and commercial site verification capabilities across all 28 Indian states and Tier-2/Tier-3 industrial corridors.',
  },
  {
    year: '2023',
    title: 'Launch of Orbit Verify Digital Client Portal',
    detail:
      'Rolled out real-time case tracking, digital candidate consent links, bulk CSV ingestion, and dual-layer QA grading workflows.',
  },
  {
    year: '2026',
    title: 'Next-Gen AI-Assisted Forensics & Global Corridors',
    detail:
      'Combining instant API identity/court rails, document tampering forensics, and 200+ international screening corridors under one unified platform.',
  },
];

const CORE_VALUES = [
  {
    title: 'Uncompromising Accuracy',
    detail:
      'Every report undergoes dual-analyst quality verification with attached primary-source evidence—never guesswork.',
  },
  {
    title: 'Consent & Privacy First',
    detail:
      'We respect candidate dignity and DPDP privacy principles through strict consent gating and purpose-limited data handling.',
  },
  {
    title: 'Speed With Accountability',
    detail:
      'Our parallel verification engine and direct New Delhi escalation desk ensure SLAs are met without cutting corners.',
  },
  {
    title: 'Radical Transparency',
    detail:
      'Live portal timestamps, clear Red/Amber/Green grading, and straightforward pricing with zero hidden friction.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-10">
      {/* 1. Hero & Story */}
      <section className="relative py-16 sm:py-20 bg-radar-grid border-b border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 border border-orbit-green/35">
                <ScrambleText text="ABOUT ORBIT VERIFY • NEW DELHI, INDIA" />
              </div>

              <SplitText
                as="h1"
                text="Empowering Businesses With Trust and Transparency."
                highlightWords={['Trust', 'Transparency.']}
                className="text-fluid-hero text-foreground"
              />

              <p className="text-base sm:text-lg text-muted leading-relaxed">
                Operated by{' '}
                <strong className="text-foreground">
                  {SITE_CONFIG.legalEntity}
                </strong>{' '}
                in New Delhi, Orbit Verify was built on a single premise: every
                great hire and every resilient business partnership begins with
                verified truth.
              </p>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                In our orbit model, individual verification checks—identity,
                address, education, employment, criminal records, credit, and
                corporate governance—revolve around a candidate or company and
                lock into one clear, audit-ready profile.
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

            {/* Right: Official Brand Card & Statutory Credentials */}
            <div className="lg:col-span-5">
              <TiltCard className="p-7 border border-orbit-green/40 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-white p-3 shadow-md border border-orbit-green/30">
                    <Image
                      src="/orbit-verify-logo.jpg"
                      alt="Orbit Verify Official Logo"
                      width={160}
                      height={84}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                  <span className="rounded-full bg-orbit-green/15 px-3 py-1 font-mono text-[10px] font-bold uppercase text-orbit-green border border-orbit-green/30">
                    Verified Entity
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    {SITE_CONFIG.legalEntity}
                  </h2>
                  <p className="text-xs text-muted leading-relaxed">
                    Headquartered in New Delhi, serving high-growth startups,
                    regulated enterprises, and global capability centers across
                    India and international markets.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-surface-border font-mono text-xs">
                  <div className="rounded-xl bg-background/60 p-3 border border-surface-border">
                    <span className="text-[10px] text-muted block">
                      CORPORATE ID (CIN)
                    </span>
                    <span className="font-bold text-orbit-green">
                      {SITE_CONFIG.cin}
                    </span>
                  </div>
                  <div className="rounded-xl bg-background/60 p-3 border border-surface-border">
                    <span className="text-[10px] text-muted block">
                      GST REGISTRATION
                    </span>
                    <span className="font-bold text-orbit-cyan">
                      {SITE_CONFIG.gstin}
                    </span>
                  </div>
                </div>
              </TiltCard>
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
            <TiltCard className="p-8 border border-orbit-green/35">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orbit-green/15 text-orbit-green border border-orbit-green/35">
                <Eye className="w-6 h-6" />
              </div>
              <span className="mt-5 block font-mono text-xs uppercase tracking-widest text-orbit-green">
                OUR VISION
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-foreground leading-snug">
                “{SITE_CONFIG.vision}”
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                We envision a hiring and procurement ecosystem where background
                screening is no longer a multi-week bottleneck, but an instant,
                high-trust intelligence layer tailored to every sector.
              </p>
            </TiltCard>

            <TiltCard className="p-8 border border-orbit-cyan/35">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orbit-cyan/15 text-orbit-cyan border border-orbit-cyan/35">
                <Target className="w-6 h-6" />
              </div>
              <span className="mt-5 block font-mono text-xs uppercase tracking-widest text-orbit-cyan">
                OUR MISSION
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-foreground leading-snug">
                “{SITE_CONFIG.mission}”
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                By uniting primary-source research, nationwide field operations,
                and encrypted digital workflows, we give decision-makers clear,
                legally compliant evidence they can act on with confidence.
              </p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-16 sm:py-20 bg-background-alt/30 border-y border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-2xl space-y-2 mb-10">
            <ScrambleText text="OPERATING PRINCIPLES" />
            <h2 className="font-heading font-extrabold text-fluid-h2 text-foreground">
              The Values Guiding Every Verification
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((val, idx) => (
              <TiltCard key={val.title} className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <Compass className="w-6 h-6 text-orbit-green" />
                  <span className="font-mono text-xs text-orbit-green">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {val.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {val.detail}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Journey Timeline */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-2xl space-y-2 mb-12">
            <ScrambleText text="OUR TRAJECTORY • 2019 → 2026" />
            <h2 className="font-heading font-extrabold text-fluid-h2 text-foreground">
              Building India’s Modern Verification Orbit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {COMPANY_TIMELINE.map((item) => (
              <TiltCard
                key={item.year}
                className="p-6 border border-surface-border flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-3xl font-extrabold orbit-gradient-text">
                    {item.year}
                  </span>
                  <h3 className="mt-3 font-heading text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leadership & Operations Desk (Placeholders from config.ts) */}
      <section className="py-16 sm:py-20 bg-background-alt/30 border-y border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-2xl space-y-2 mb-10">
            <ScrambleText text="LEADERSHIP & OPERATIONS DESK" />
            <h2 className="font-heading font-extrabold text-fluid-h2 text-foreground">
              Accountable Human Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_PLACEHOLDERS.map((member) => (
              <TiltCard key={member.name} className="p-7 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orbit-navy via-orbit-blue to-orbit-green text-white font-heading font-bold">
                    {member.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs text-orbit-green mt-0.5">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-5 pt-3 border-t border-surface-border inline-flex items-center gap-2 font-mono text-xs text-orbit-cyan hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{member.email}</span>
                </a>
              </TiltCard>
            ))}
          </div>

          {/* Recognition Badges */}
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
                  <p className="text-[11px] text-muted mt-0.5">
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
