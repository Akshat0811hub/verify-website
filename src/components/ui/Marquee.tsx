'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // seconds per cycle
  reverse?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = 32,
  reverse = false,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'group relative flex overflow-hidden marquee-mask select-none',
        className
      )}
    >
      <div
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
        className="flex min-w-full shrink-0 items-center justify-around gap-6 animate-marquee group-hover:[animation-play-state:paused] pr-6"
      >
        {children}
      </div>
      <div
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
        className="flex min-w-full shrink-0 items-center justify-around gap-6 animate-marquee group-hover:[animation-play-state:paused] pr-6"
        aria-hidden="true"
      >
        {children}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
