'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface OrbitLogoProps {
  className?: string;
  showSubtitle?: boolean;
  showDots?: boolean;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

/**
 * Vector reconstruction of the official Orbit Verify logo:
 * - Outer vibrant emerald-green orbit ring (#16C15A)
 * - Inner thick circular chevron ring in Orbit Navy (#0B1E3D) & Green (#16C15A)
 * - Orbiting satellite dot at 4 o'clock
 * - Central rounded document/ID card icon
 * - "Orbit Verify" wordmark + "Background Verification & Identity Check" + 7-dot signature bar
 */
export function OrbitLogo({
  className,
  showSubtitle = true,
  showDots = true,
  size = 'md',
  animated = true,
}: OrbitLogoProps) {
  const iconDimensions =
    size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11';

  return (
    <div
      className={cn(
        'group inline-flex items-center gap-3 select-none',
        className
      )}
    >
      {/* Emblem Mark */}
      <div
        className={cn(
          'relative flex items-center justify-center rounded-full bg-white/95 dark:bg-white shadow-[0_0_24px_rgba(22,193,90,0.28)] ring-1 ring-orbit-green/40 transition-transform duration-500 group-hover:scale-105',
          iconDimensions
        )}
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-0.5"
          aria-hidden="true"
        >
          {/* Outer vibrant green orbit ring */}
          <path
            d="M 101 86 A 48 48 0 1 1 106 72"
            stroke="#16C15A"
            strokeWidth="5.5"
            strokeLinecap="round"
            className={cn(
              animated &&
                'origin-center transition-transform duration-700 group-hover:rotate-45'
            )}
          />
          {/* Inner thick Navy circular chevron arc */}
          <path
            d="M 66 24 A 36 36 0 1 0 93 74 L 83 63 L 78 73 A 22 22 0 1 1 62 38 L 71 31 Z"
            fill="#0B1E3D"
          />
          {/* Inner vibrant Green chevron segment (top-right quadrant) */}
          <path
            d="M 68 25 C 83 29 94 41 96 57 L 85 65 L 81 54 C 79 44 72 37 63 35 L 72 28 Z"
            fill="#16C15A"
          />
          {/* Orbiting satellite dot (bottom-right) */}
          <circle cx="96" cy="81" r="6" fill="#0B1E3D" />
          {/* Center Document / ID Icon */}
          <rect
            x="43"
            y="41"
            width="34"
            height="38"
            rx="6"
            stroke="#0B1E3D"
            strokeWidth="3.5"
            fill="#FFFFFF"
          />
          <path
            d="M 51 49 C 48 49 48 53 51 53 L 69 53"
            stroke="#0B1E3D"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="49"
            y1="58"
            x2="70"
            y2="58"
            stroke="#0B1E3D"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
          <line
            x1="49"
            y1="63"
            x2="70"
            y2="63"
            stroke="#0B1E3D"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
          <line
            x1="49"
            y1="68"
            x2="70"
            y2="68"
            stroke="#0B1E3D"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
          <line
            x1="49"
            y1="73"
            x2="61"
            y2="73"
            stroke="#16C15A"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Wordmark + Subtitle + 7-Dot Signature Bar */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={cn(
              'font-heading font-extrabold tracking-tight text-foreground transition-colors',
              size === 'sm'
                ? 'text-lg'
                : size === 'lg'
                ? 'text-2xl'
                : 'text-xl'
            )}
          >
            Orbit <span className="text-orbit-green">Verify</span>
          </span>
        </div>

        {showSubtitle && (
          <span className="text-[10px] font-medium tracking-wide text-muted mt-0.5 leading-tight">
            Background Verification <strong className="text-foreground">&amp;</strong> Identity Check
          </span>
        )}

        {showDots && (
          <div
            className="flex items-center gap-1.5 mt-1"
            aria-hidden="true"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orbit-green" />
            <span className="w-1 h-1 rounded-full bg-orbit-green/80" />
            <span className="w-1 h-1 rounded-full bg-orbit-green/80" />
            <span className="w-2 h-2 rounded-full bg-orbit-navy dark:bg-orbit-cyan ring-1 ring-orbit-green/50" />
            <span className="w-1 h-1 rounded-full bg-orbit-green/80" />
            <span className="w-1 h-1 rounded-full bg-orbit-green/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-orbit-green" />
          </div>
        )}
      </div>
    </div>
  );
}
