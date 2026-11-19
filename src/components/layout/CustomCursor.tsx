'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 320, damping: 28, mass: 0.4 });
  const springY = useSpring(cursorY, { stiffness: 320, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (reducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
      const interactiveEl = target.closest('a, button, input, select, textarea, [role="button"]');

      if (cursorEl) {
        setLabel(cursorEl.getAttribute('data-cursor'));
        setHovered(true);
      } else if (interactiveEl) {
        setLabel(null);
        setHovered(true);
      } else {
        setLabel(null);
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY, reducedMotion]);

  if (isTouch || reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[120] overflow-hidden hidden lg:block"
      aria-hidden="true"
    >
      {/* Center Precision Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-orbit-green shadow-[0_0_10px_#16C15A]"
      />

      {/* Trailing Orbit Radar Ring */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: label ? 68 : hovered ? 44 : 28,
          height: label ? 68 : hovered ? 44 : 28,
          borderColor: hovered
            ? 'rgba(22, 193, 90, 0.85)'
            : 'rgba(34, 211, 238, 0.45)',
          backgroundColor: label
            ? 'rgba(11, 30, 61, 0.88)'
            : hovered
            ? 'rgba(22, 193, 90, 0.1)'
            : 'rgba(22, 193, 90, 0)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border backdrop-blur-sm"
      >
        {label && (
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orbit-green">
            {label}
          </span>
        )}
      </motion.div>
    </div>
  );
}
