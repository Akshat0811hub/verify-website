'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ScrambleTextProps {
  text: string;
  className?: string;
}

/**
 * Clean, calm corporate section badge (replaces noisy tech/radar tags).
 */
export function ScrambleText({ text, className }: ScrambleTextProps) {
  // Strip noisy tech separators like "//" or "•" for a calmer corporate label
  const cleanLabel = text.split('•')[0].replace(/\/\//g, '').trim();

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-orbit-green/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-orbit-green border border-orbit-green/25',
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-orbit-green" />
      <span>{cleanLabel}</span>
    </span>
  );
}
