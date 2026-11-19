'use client';

import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  CreditCard,
  FileSearch,
  Fingerprint,
  GraduationCap,
  MapPin,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface OrbitNodeData {
  id: string;
  label: string;
  tat: string;
  angleDeg: number;
  radiusPct: number; // percentage from center
  icon: React.ComponentType<{ className?: string }>;
}

const ORBIT_NODES: OrbitNodeData[] = [
  {
    id: 'identity',
    label: 'Identity',
    tat: 'API • 4m',
    angleDeg: -60,
    radiusPct: 40,
    icon: Fingerprint,
  },
  {
    id: 'address',
    label: 'Address',
    tat: 'Geo • 24h',
    angleDeg: 0,
    radiusPct: 44,
    icon: MapPin,
  },
  {
    id: 'education',
    label: 'Education',
    tat: 'Registrar ✓',
    angleDeg: 60,
    radiusPct: 40,
    icon: GraduationCap,
  },
  {
    id: 'employment',
    label: 'Employment',
    tat: 'HR Source ✓',
    angleDeg: 120,
    radiusPct: 40,
    icon: FileSearch,
  },
  {
    id: 'criminal',
    label: 'Criminal',
    tat: '3000+ Courts',
    angleDeg: 180,
    radiusPct: 44,
    icon: ShieldAlert,
  },
  {
    id: 'credit',
    label: 'Credit',
    tat: 'Bureau ✓',
    angleDeg: 240,
    radiusPct: 40,
    icon: CreditCard,
  },
];

/**
 * Lightweight, 60fps hardware-accelerated CSS/SVG Holographic Orbit Scene.
 * Replaces heavy WebGL / Three.js Canvas to eliminate GPU & main-thread lag.
 */
export default function HeroOrbitScene() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % ORBIT_NODES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const currentNode =
    ORBIT_NODES.find((n) => n.id === hoveredId) ?? ORBIT_NODES[activeIdx];

  return (
    <div className="relative w-full h-[420px] sm:h-[490px] lg:h-[530px] flex items-center justify-center select-none">
      {/* Subtle static ambient glow (no expensive animated blur repaints) */}
      <div
        className="pointer-events-none absolute h-72 w-72 sm:h-80 sm:w-80 rounded-full bg-orbit-green/10 blur-2xl"
        aria-hidden="true"
      />

      {/* Concentric SVG Orbit Radar Rings */}
      <svg
        viewBox="0 0 500 500"
        className="pointer-events-none absolute w-full max-w-[470px] h-auto"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orbitRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16C15A" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Outer Orbit Ring */}
        <circle
          cx="250"
          cy="250"
          r="210"
          fill="none"
          stroke="url(#orbitRingGrad)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
        {/* Middle Orbit Ring */}
        <circle
          cx="250"
          cy="250"
          r="165"
          fill="none"
          stroke="rgba(22, 193, 90, 0.25)"
          strokeWidth="1.2"
        />
        {/* Inner Radar Ring */}
        <circle
          cx="250"
          cy="250"
          r="120"
          fill="none"
          stroke="rgba(34, 211, 238, 0.18)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Central Holographic Verified Profile Card */}
      <div className="relative z-10 w-52 sm:w-56 rounded-2xl bg-[#071126] p-4 text-white border border-orbit-green/50 shadow-[0_16px_40px_rgba(5,6,15,0.75)] transition-transform duration-300 hover:scale-[1.02]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-orbit-green">
            ORBIT ID • #OV-9482
          </span>
          <ShieldCheck className="w-4 h-4 text-orbit-green" />
        </div>

        <div className="mt-3 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orbit-green to-orbit-cyan text-[#05060F] font-heading font-black text-xs">
            AK
          </div>
          <div>
            <p className="text-xs font-bold leading-tight">Aarav Khanna</p>
            <p className="text-[10px] text-slate-400">Sr. Fintech Architect</p>
          </div>
        </div>

        <div className="mt-3.5 space-y-1.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-slate-400">Trust Score</span>
            <span className="font-mono font-bold text-orbit-green">
              100% VERIFIED
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-orbit-green via-orbit-cyan to-orbit-blue" />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-1.5 text-[9px] font-mono">
          <span className="rounded-md bg-orbit-green/15 px-2 py-1 text-orbit-green">
            ✓ PAN / ID
          </span>
          <span className="rounded-md bg-orbit-green/15 px-2 py-1 text-orbit-green">
            ✓ UAN / EMP
          </span>
          <span className="rounded-md bg-orbit-green/15 px-2 py-1 text-orbit-green">
            ✓ COURT
          </span>
          <span className="rounded-md bg-orbit-green/15 px-2 py-1 text-orbit-green">
            ✓ DEGREE
          </span>
        </div>
      </div>

      {/* 6 Orbiting Verification Check Nodes positioned cleanly around the rings */}
      <div className="absolute inset-0 max-w-[490px] max-h-[490px] m-auto">
        {ORBIT_NODES.map((node, index) => {
          const rad = (node.angleDeg * Math.PI) / 180;
          const xPct = 50 + Math.cos(rad) * node.radiusPct;
          const yPct = 50 + Math.sin(rad) * node.radiusPct;
          const isActive = activeIdx === index || hoveredId === node.id;
          const Icon = node.icon;

          return (
            <button
              key={node.id}
              type="button"
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setActiveIdx(index)}
              style={{
                left: `${xPct}%`,
                top: `${yPct}%`,
              }}
              className={cn(
                'absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-mono whitespace-nowrap transition-transform duration-200 border',
                isActive
                  ? 'bg-[#0B1E3D] text-orbit-green border-orbit-green scale-105 shadow-[0_0_20px_rgba(22,193,90,0.4)]'
                  : 'bg-[#0E1330]/95 text-slate-200 border-white/15 hover:border-orbit-cyan'
              )}
            >
              <Icon
                className={cn(
                  'w-3.5 h-3.5 shrink-0',
                  isActive ? 'text-orbit-green' : 'text-orbit-cyan'
                )}
              />
              <span className="font-semibold">{node.label}</span>
              <span
                className={cn(
                  'text-[10px] px-1.5 py-0.5 rounded-full',
                  isActive
                    ? 'bg-orbit-green/20 text-orbit-green'
                    : 'bg-white/5 text-slate-400'
                )}
              >
                {isActive ? 'Verified ✓' : node.tat}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Live Telemetry HUD Bar */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 rounded-full bg-[#091128] px-4 py-2 border border-orbit-green/40 shadow-lg">
        <CheckCircle2 className="w-4 h-4 text-orbit-green shrink-0" />
        <div className="text-xs font-mono whitespace-nowrap">
          <span className="text-muted">ACTIVE CHECK: </span>
          <span className="font-bold text-foreground">{currentNode.label}</span>
          <span className="ml-2 text-orbit-green">
            • {currentNode.tat} (100%)
          </span>
        </div>
      </div>
    </div>
  );
}
