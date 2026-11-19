'use client';

import React from 'react';
import { motion, useScroll } from 'framer-motion';

/**
 * Lightweight native scroll wrapper with top progress bar.
 * Uses native browser compositor scrolling (120fps) instead of wheel-hijacking.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-orbit-green via-orbit-cyan to-orbit-blue"
        aria-hidden="true"
      />
      {children}
    </>
  );
}
