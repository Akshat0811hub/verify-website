'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  text: string;
  highlightWords?: string[];
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

/**
 * Lightweight heading renderer with gradient keyword highlighting.
 * Avoids per-word blur() filter animations that cause scroll frame drops.
 */
export function SplitText({
  text,
  highlightWords = [],
  className,
  as: Tag = 'h2',
}: SplitTextProps) {
  const words = text.split(' ');
  const normalizedHighlights = new Set(
    highlightWords.map((w) => w.toLowerCase().replace(/[^a-z0-9]/g, ''))
  );

  return (
    <Tag className={cn('font-heading font-extrabold', className)}>
      {words.map((word, index) => {
        const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
        const isHighlighted = normalizedHighlights.has(cleanWord);

        return (
          <React.Fragment key={`${word}-${index}`}>
            <span className={cn(isHighlighted && 'orbit-gradient-text')}>
              {word}
            </span>
            {index < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}
