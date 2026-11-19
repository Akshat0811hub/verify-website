'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ScrambleTextProps {
  text: string;
  className?: string;
}

/**
 * Lightweight section tag pill (zero setInterval re-renders during scroll).
 */
export function ScrambleText({ text, className }: ScrambleTextProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-orbit-green',
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-orbit-green" />
      <span>{text}</span>
    </span>
  );
}
