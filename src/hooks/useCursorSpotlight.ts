'use client';

import { useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useCursorSpotlight(
  targetRef?: React.RefObject<HTMLElement | null>
) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
  }, [targetRef, reducedMotion]);
}
