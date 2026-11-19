'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe2, MapPin, Navigation, ShieldCheck } from 'lucide-react';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { cn } from '@/lib/utils';

interface CityNode {
  id: string;
  name: string;
  region: string;
  x: number;
  y: number;
  isHQ?: boolean;
  capabilities: string;
}

const INDIA_HUBS: CityNode[] = [
  {
    id: 'delhi',
    name: 'New Delhi HQ',
    region: 'National Capital Region',
    x: 185,
    y: 128,
    isHQ: true,
    capabilities: 'Central Command, Courts, Universities & North Field Desk',
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    region: 'Rajasthan',
    x: 152,
    y: 162,
    capabilities: 'Physical Address, Vendor Site & District Court Verification',
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    region: 'Uttar Pradesh',
    x: 235,
    y: 158,
    capabilities: 'State Universities, High Court & Tier-2/3 Field Network',
  },
  {
    id: 'guwahati',
    name: 'Guwahati',
    region: 'North East Hub',
    x: 342,
    y: 165,
    capabilities: 'North-East 7-Sister States On-Ground Verification Hub',
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    region: 'Gujarat',
    x: 118,
    y: 215,
    capabilities: 'Industrial Corridor Supplier Audits & Workforce BGV',
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    region: 'West Bengal',
    x: 305,
    y: 222,
    capabilities: 'Eastern India Field Operations, High Court & Registrar Desk',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    region: 'Maharashtra',
    x: 128,
    y: 278,
    capabilities: 'BFSI Compliance Hub, Corporate Due Diligence & Field Visits',
  },
  {
    id: 'pune',
    name: 'Pune',
    region: 'Maharashtra',
    x: 146,
    y: 295,
    capabilities: 'IT/GCC Employment Forensics & Auto Manufacturing Audits',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    region: 'Telangana',
    x: 198,
    y: 305,
    capabilities: 'Pharma/Life-Sciences Credentialing & Enterprise Tech BGV',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    region: 'Karnataka',
    x: 182,
    y: 362,
    capabilities: 'SaaS, Fintech & GCC High-Velocity Digital Verification Hub',
  },
  {
    id: 'chennai',
    name: 'Chennai',
    region: 'Tamil Nadu',
    x: 218,
    y: 368,
    capabilities: 'Southern Industrial Supply Chain & University Registrar Desk',
  },
  {
    id: 'kochi',
    name: 'Kochi',
    region: 'Kerala',
    x: 175,
    y: 408,
    capabilities: 'Healthcare & International Expat Credential Verification',
  },
];

const GLOBAL_CORRIDORS = [
  {
    region: 'North America (US & Canada)',
    checks: 'OFAC, SSN/SIN Trace, Federal/County Criminal, Global Degree & HR Checks',
    latency: '24–72 hrs',
  },
  {
    region: 'United Kingdom & European Union',
    checks: 'UK HMT & EU Sanctions, DBS/Basic Disclosure Alignment, Academic & Employer Verification',
    latency: '2–5 days',
  },
  {
    region: 'Middle East & GCC (UAE, KSA, Qatar)',
    checks: 'Expat Employment Verification, Trade License KYB, Regional Sanctions & Media',
    latency: '2–5 days',
  },
  {
    region: 'Asia-Pacific (Singapore, Australia, Japan)',
    checks: 'ACRA/ASIC Corporate KYB, Cross-Border Employment, Sanctions & Watchlist Screening',
    latency: '24–96 hrs',
  },
];

export function CoverageMap() {
  const [selectedCity, setSelectedCity] = useState<CityNode>(INDIA_HUBS[0]);
  const [viewMode, setViewMode] = useState<'india' | 'global'>('india');

  const hq = INDIA_HUBS[0];

  return (
    <section
      aria-labelledby="coverage-map-heading"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        {/* Header + Counter Chips */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <ScrambleText text="COVERAGE RADAR • PAN-INDIA FIELD + GLOBAL WATCHLISTS" />
            <SplitText
              text="Local Boots Across India. Digital Reach Across the Globe."
              highlightWords={['India.', 'Globe.']}
              className="text-fluid-h2 text-foreground"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setViewMode('india')}
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-mono uppercase tracking-wider border transition-all',
                viewMode === 'india'
                  ? 'bg-orbit-green text-orbit-deep font-bold border-orbit-green shadow-[0_0_20px_rgba(22,193,90,0.4)]'
                  : 'glass-panel text-foreground border-surface-border'
              )}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Pan-India • 28 States &amp; 8 UTs</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('global')}
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-mono uppercase tracking-wider border transition-all',
                viewMode === 'global'
                  ? 'bg-orbit-cyan text-orbit-deep font-bold border-orbit-cyan shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                  : 'glass-panel text-foreground border-surface-border'
              )}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>Global Checks • 200+ Territories</span>
            </button>
          </div>
        </div>

        {/* Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 7 Cols: Interactive SVG Radar Map */}
          <div className="lg:col-span-7 relative rounded-3xl glass-panel-strong p-6 sm:p-8 border border-orbit-green/35 shadow-[0_25px_75px_rgba(5,6,15,0.65)] overflow-hidden min-h-[460px] flex items-center justify-center bg-dot-matrix">
            {/* Radar Sweep Concentric Rings */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="h-64 w-64 rounded-full border border-orbit-green/15" />
              <div className="absolute h-96 w-96 rounded-full border border-orbit-cyan/10" />
              <div className="absolute h-[460px] w-[460px] rounded-full border border-orbit-blue/10" />
            </div>

            <svg
              viewBox="0 0 440 460"
              className="relative z-10 w-full max-w-[440px] h-auto select-none"
              role="img"
              aria-label="Interactive Orbit Verify India and Global Coverage Radar Map"
            >
              <defs>
                <linearGradient
                  id="arcGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#16C15A" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Stylized India Polygon Silhouette Outline */}
              <path
                d="M175,45 L210,55 L220,85 L208,110 L245,135 L295,148 L355,142 L370,175 L325,205 L312,245 L255,288 L230,348 L205,425 L178,425 L155,365 L125,295 L105,235 L88,205 L118,175 L138,132 L158,85 Z"
                fill="rgba(11, 30, 61, 0.45)"
                stroke="rgba(22, 193, 90, 0.32)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />

              {/* Global Satellite Arcs when Global Mode is active */}
              {viewMode === 'global' && (
                <g>
                  {[
                    'M185,128 Q60,30 20,80',
                    'M185,128 Q90,110 25,180',
                    'M185,128 Q350,40 415,110',
                    'M185,128 Q380,280 415,360',
                  ].map((arc, idx) => (
                    <motion.path
                      key={arc}
                      d={arc}
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="1.8"
                      strokeDasharray="240"
                      initial={{ strokeDashoffset: 240, opacity: 0 }}
                      animate={{ strokeDashoffset: 0, opacity: 0.75 }}
                      transition={{ duration: 1.1, delay: idx * 0.15 }}
                    />
                  ))}
                </g>
              )}

              {/* Animated Connection Lines from New Delhi HQ to All Indian City Hubs */}
              {INDIA_HUBS.slice(1).map((city) => {
                const isSelected = selectedCity.id === city.id;
                return (
                  <line
                    key={`line-${city.id}`}
                    x1={hq.x}
                    y1={hq.y}
                    x2={city.x}
                    y2={city.y}
                    stroke={isSelected ? '#16C15A' : 'url(#arcGrad)'}
                    strokeWidth={isSelected ? '2.2' : '1.1'}
                    strokeDasharray={isSelected ? 'none' : '3 3'}
                    opacity={isSelected ? 1 : 0.48}
                  />
                );
              })}

              {/* Pulsing City Nodes */}
              {INDIA_HUBS.map((city) => {
                const isSelected = selectedCity.id === city.id;
                return (
                  <g
                    key={city.id}
                    onClick={() => setSelectedCity(city)}
                    onMouseEnter={() => setSelectedCity(city)}
                    className="cursor-pointer"
                  >
                    {/* Outer Pulse Ring */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={city.isHQ ? 14 : isSelected ? 12 : 8}
                      fill={city.isHQ || isSelected ? '#16C15A' : '#22D3EE'}
                      opacity={city.isHQ || isSelected ? 0.28 : 0.15}
                    />
                    {/* Core Node */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={city.isHQ ? 6 : isSelected ? 5.5 : 4}
                      fill={city.isHQ ? '#16C15A' : isSelected ? '#22D3EE' : '#E8ECF8'}
                      stroke="#05060F"
                      strokeWidth="1.5"
                    />
                    {/* City Label */}
                    <text
                      x={city.x + 9}
                      y={city.y + 3}
                      fill={isSelected || city.isHQ ? '#16C15A' : '#E8ECF8'}
                      fontSize={city.isHQ || isSelected ? '11' : '9.5'}
                      fontWeight={city.isHQ || isSelected ? '700' : '500'}
                      fontFamily="monospace"
                    >
                      {city.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Bottom Corner Map Telemetry Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-[#060C1E]/90 px-4 py-2.5 text-xs font-mono text-slate-300 border border-orbit-green/30">
              <span className="inline-flex items-center gap-1.5 text-orbit-green">
                <Navigation className="w-3.5 h-3.5" />
                ACTIVE NODE: {selectedCity.name.toUpperCase()}
              </span>
              <span className="text-slate-400">
                Click any city node to inspect capabilities
              </span>
            </div>
          </div>

          {/* Right 5 Cols: Selected Hub Telemetry + Global Corridors */}
          <div className="lg:col-span-5 space-y-5">
            {/* Active Node Card */}
            <div className="rounded-3xl glass-panel-strong p-6 border border-orbit-green/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orbit-green/15 px-3 py-1 font-mono text-[10px] font-bold uppercase text-orbit-green border border-orbit-green/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-orbit-green animate-ping" />
                  {selectedCity.isHQ
                    ? 'NATIONAL COMMAND HQ'
                    : 'REGIONAL VERIFICATION HUB'}
                </span>
                <span className="font-mono text-xs text-muted">
                  {selectedCity.region}
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {selectedCity.name}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                  {selectedCity.capabilities}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="rounded-xl bg-background/60 p-3 border border-surface-border text-center">
                  <p className="font-heading text-base font-bold text-orbit-green">
                    19,000+
                  </p>
                  <p className="font-mono text-[10px] text-muted">
                    Pin Codes Covered
                  </p>
                </div>
                <div className="rounded-xl bg-background/60 p-3 border border-surface-border text-center">
                  <p className="font-heading text-base font-bold text-orbit-cyan">
                    3,000+
                  </p>
                  <p className="font-mono text-[10px] text-muted">
                    Indian Courts
                  </p>
                </div>
                <div className="rounded-xl bg-background/60 p-3 border border-surface-border text-center">
                  <p className="font-heading text-base font-bold text-orbit-blue">
                    900+
                  </p>
                  <p className="font-mono text-[10px] text-muted">
                    Universities
                  </p>
                </div>
              </div>
            </div>

            {/* International Markets Corridors */}
            <div className="rounded-3xl glass-panel p-6 border border-surface-border space-y-3.5">
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-base font-bold text-foreground flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-orbit-cyan" />
                  <span>International Screening Corridors</span>
                </h4>
                <span className="font-mono text-[10px] uppercase text-orbit-cyan">
                  200+ Territories
                </span>
              </div>

              <div className="space-y-2.5">
                {GLOBAL_CORRIDORS.map((corridor) => (
                  <div
                    key={corridor.region}
                    className="rounded-xl bg-background/50 p-3 border border-surface-border"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-heading text-xs font-bold text-foreground">
                        {corridor.region}
                      </p>
                      <span className="font-mono text-[10px] text-orbit-green">
                        TAT: {corridor.latency}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-muted leading-snug">
                      {corridor.checks}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
