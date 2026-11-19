'use client';

import { useCallback, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface UseTiltOptions {
  maxTilt?: number;
  scale?: number;
}

export function useTilt({ maxTilt = 9, scale = 1.015 }: UseTiltOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
  });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || !ref.current) return;
      if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const pctX = mouseX / width;
      const pctY = mouseY / height;

      const rotateY = (pctX - 0.5) * (maxTilt * 2);
      const rotateX = (0.5 - pctY) * (maxTilt * 2);

      ref.current.style.setProperty('--card-mx', `${mouseX}px`);
      ref.current.style.setProperty('--card-my', `${mouseY}px`);

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 80ms linear',
      });

      setGlare({
        x: pctX * 100,
        y: pctY * 100,
        opacity: 0.16,
      });
    },
    [maxTilt, scale, reducedMotion]
  );

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 500ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
    });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return {
    ref,
    style,
    glare,
    onMouseMove,
    onMouseLeave,
  };
}
