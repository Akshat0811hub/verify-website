'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface OrbitDividerProps {
  className?: string;
  label?: string;
}

export function OrbitDivider({ className, label }: OrbitDividerProps) {
  return (
    <div
      className={cn(
        'relative mx-auto max-w-container px-6 py-4 flex items-center justify-center overflow-hidden',
        className
      )}
      aria-hidden="true"
    >
      <div className="w-full h-px bg-gradient-to-r from-transparent via-orbit-green/40 to-transparent" />
      <div className="relative mx-4 flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-orbit-green/30">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orbit-green opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orbit-green" />
        </span>
        {label ? (
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {label}
          </span>
        ) : (
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-orbit-green/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-orbit-cyan" />
            <span className="w-1 h-1 rounded-full bg-orbit-green/70" />
          </div>
        )}
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-orbit-blue/40 to-transparent" />
    </div>
  );
}
