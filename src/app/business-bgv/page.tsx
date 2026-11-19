import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, Clock } from 'lucide-react';
import { BUSINESS_SERVICES } from '@/content/services';
import { SERVICE_IMAGE_MAP } from '@/components/home/ServicesBento';
import { TiltCard } from '@/components/ui/TiltCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { FaqSection } from '@/components/home/FaqSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Business Background Verification & B2B Due Diligence Services',
  description:
    '15 corporate due diligence and vendor verification services in India: financial due diligence, KYB, legal litigation, cyber posture, ESG, and physical site inspections.',
  path: '/business-bgv',
});

export default function BusinessBgvPage() {
  return (
    <div className="pt-28 pb-10">
      {/* Hero */}
      <section className="relative py-14 sm:py-20 bg-background-alt/50 border-b border-surface-border">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="max-w-3xl space-y-5">
            <ScrambleText text="15 Corporate Due Diligence & KYB Services" />

            <SplitText
              as="h1"
              text="Business Verification & Third-Party Risk Due Diligence."
              highlightWords={['Business', 'Verification', 'Due', 'Diligence.']}
              className="text-fluid-hero text-foreground"
            />

            <p className="text-base sm:text-lg text-muted text-justify leading-relaxed">
              Protect your enterprise from phantom vendors, insolvent suppliers,
              litigation traps, and supply chain disruptions. Orbit Verify
              combines statutory MCA/GST/court intelligence with on-ground
              physical facility inspections across India.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton href="/contact" variant="primary" size="lg">
                Request B2B Due Diligence Demo
              </MagneticButton>
              <span className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-3 text-xs font-semibold text-foreground border border-surface-border">
                <Building2 className="w-4 h-4 text-orbit-green" />
                MCA • GST • NCLT • Physical Site Visits
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* All 15 Business BGV Services Grid with Images */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {BUSINESS_SERVICES.map((service, idx) => {
              const cardImage =
                SERVICE_IMAGE_MAP[service.slug] ??
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';

              return (
                <TiltCard
                  key={service.slug}
                  className="overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden border-b border-surface-border">
                      <img
                        src={cardImage}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-xl bg-white/95 px-2.5 py-1 text-xs font-bold text-orbit-navy shadow-sm">
                        <ServiceIcon
                          name={service.iconName}
                          className="w-3.5 h-3.5 text-orbit-green"
                        />
                        <span>{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-orbit-navy/90 px-2.5 py-1 text-[11px] text-white">
                        <Clock className="w-3 h-3 text-orbit-green" />
                        <span>
                          {service.turnaround
                            .replace('(Placeholder)', '')
                            .split('|')[0]
                            .trim()}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="font-heading text-xl font-bold text-foreground group-hover:text-orbit-green transition-colors">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="mt-4 space-y-1.5 pt-3 border-t border-surface-border">
                        {service.whatsChecked.slice(0, 3).map((c) => (
                          <li
                            key={c.title}
                            className="flex items-center gap-2 text-xs text-foreground/90"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-orbit-green shrink-0" />
                            <span className="truncate">{c.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-surface-border flex items-center justify-between">
                    <span className="text-xs font-medium text-muted">
                      Business Due Diligence
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
        </div>
      </section>

      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
