'use client';

import React from 'react';
import { Building2, CheckCircle2, Globe2, MapPin } from 'lucide-react';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { TiltCard } from '@/components/ui/TiltCard';

const INDIA_REGIONS = [
  {
    region: 'North India (New Delhi HQ & NCR)',
    cities: 'New Delhi, Gurugram, Noida, Chandigarh, Jaipur, Lucknow, Dehradun',
    detail:
      'Central verification headquarters at Ashok Nagar, Tilak Nagar, New Delhi—managing court records, university registrar outreach, and northern field verification.',
  },
  {
    region: 'West & Central India',
    cities: 'Mumbai, Pune, Ahmedabad, Surat, Vadodara, Nagpur, Indore, Bhopal',
    detail:
      'Dedicated field associates for BFSI workforce screening, industrial corridor vendor audits, and physical residential address visits.',
  },
  {
    region: 'South India',
    cities: 'Bengaluru, Hyderabad, Chennai, Kochi, Coimbatore, Visakhapatnam',
    detail:
      'High-speed background verification support for IT/SaaS companies, Global Capability Centers (GCCs), hospitals, and pharmaceutical hubs.',
  },
  {
    region: 'East & North-East India',
    cities: 'Kolkata, Bhubaneswar, Patna, Ranchi, Guwahati, Jamshedpur',
    detail:
      'Comprehensive on-ground address verification, state university checks, and logistics/manufacturing workforce screening across Eastern India.',
  },
];

const GLOBAL_CORRIDORS = [
  'North America (United States & Canada)',
  'United Kingdom & European Union',
  'Middle East & GCC (UAE, Saudi Arabia, Qatar)',
  'Asia-Pacific (Singapore, Australia, Japan)',
];

export function CoverageMap() {
  return (
    <section
      aria-labelledby="coverage-map-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <ScrambleText text="Pan-India & International Reach" />
          <SplitText
            text="On-Ground Field Network Across India & Global Screening Support"
            highlightWords={['India', 'Global']}
            className="text-fluid-h2 text-foreground"
          />
          <p className="text-sm sm:text-base text-muted text-justify leading-relaxed">
            Whether your candidates reside in metro cities, Tier-2/3 towns, or
            remote districts—or you are hiring international talent—Orbit Verify
            delivers reliable verification coverage everywhere you operate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: 4 Clean Regional Coverage Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {INDIA_REGIONS.map((item) => (
              <TiltCard
                key={item.region}
                className="p-6 border border-surface-border flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orbit-green/10 text-orbit-green">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground">
                    {item.region}
                  </h3>
                  <p className="text-xs font-semibold text-orbit-green">
                    {item.cities}
                  </p>
                  <p className="text-xs text-muted text-justify leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Right 5 Cols: Image + International Coverage Summary */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden glass-panel-strong border border-surface-border shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
                alt="Orbit Verify pan-India and international background verification partnership"
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orbit-green">
                  <Globe2 className="w-4 h-4" />
                  <span>International &amp; Cross-Border Checks</span>
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground">
                  28 Indian States + 200+ Global Jurisdictions
                </h4>
                <p className="text-xs sm:text-sm text-muted text-justify leading-relaxed">
                  In addition to our pan-India physical verification network, we
                  support global degree, international employment, OFAC/UN/EU
                  sanctions, and PEP watchlist checks across major global
                  markets:
                </p>

                <ul className="space-y-2 pt-1">
                  {GLOBAL_CORRIDORS.map((corridor) => (
                    <li
                      key={corridor}
                      className="flex items-center gap-2 text-xs font-medium text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orbit-green shrink-0" />
                      <span>{corridor}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-surface-border flex items-center gap-2 text-xs text-muted">
                  <Building2 className="w-4 h-4 text-orbit-green shrink-0" />
                  <span>
                    Headquarters: Ashok Nagar, Tilak Nagar, New Delhi 110018
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
