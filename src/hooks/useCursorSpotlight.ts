'use client';

import { useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useCursorSpotlight(targetRef?: React.RefObject<HTMLElement>) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const element = targetRef?.current ?? document.documentElement;

    const handlePointerMove = (e: MouseEvent) => {
      if (targetRef?.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        targetRef.current.style.setProperty('--mx', `${x}px`);
        targetRef.current.style.setProperty('--my', `${y}px`);
      } else {
        element.style.setProperty('--mx', `${e.clientX}px`);
        element.style.setProperty('--my', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, [targetRef, reducedMotion]);
}
