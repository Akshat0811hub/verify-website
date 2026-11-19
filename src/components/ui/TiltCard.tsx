'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number;
  scale?: number;
  cursorLabel?: string;
  glowColor?: string;
}

/**
 * Pure GPU-composited card component.
 * Uses hardware-accelerated CSS transform/border transitions instead of
 * high-frequency JS mousemove state updates for zero scroll/hover lag.
 */
export function TiltCard({
  children,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTilt,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scale,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cursorLabel,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  glowColor,
  ...props
}: TiltCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-2xl glass-panel overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-orbit-green/50 hover:shadow-[0_12px_32px_-12px_rgba(22,193,90,0.22)]',
        className
      )}
      {...props}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
