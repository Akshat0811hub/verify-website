'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Preloader() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const alreadySeen = window.sessionStorage.getItem('orbit_preloader_seen');
    if (alreadySeen) return;

    setVisible(true);
    window.sessionStorage.setItem('orbit_preloader_seen', '1');

    const timer = setTimeout(() => {
      setVisible(false);
    }, 1350);

    return () => clearTimeout(timer);
  }, [reducedMotion]);

  const dismiss = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onClick={dismiss}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#05060F] text-white cursor-pointer"
          role="status"
          aria-label="Loading Orbit Verify"
        >
          {/* Ambient radial glow */}
          <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-orbit-green/20 blur-3xl" />

          {/* Orbit Ring Drawing the Logo Emblem */}
          <div className="relative h-28 w-28 flex items-center justify-center">
            <svg
              viewBox="0 0 120 120"
              fill="none"
              className="w-full h-full"
            >
              {/* Animated Outer Green Orbit Ring */}
              <motion.path
                d="M 101 86 A 48 48 0 1 1 106 72"
                stroke="#16C15A"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeDasharray="300"
                initial={{ strokeDashoffset: 300, rotate: -60 }}
                animate={{ strokeDashoffset: 0, rotate: 0 }}
                transition={{ duration: 0.95, ease: 'easeInOut' }}
              />
              {/* Inner Navy & Green Circular Chevron */}
              <motion.path
                d="M 66 24 A 36 36 0 1 0 93 74 L 83 63 L 78 73 A 22 22 0 1 1 62 38 L 71 31 Z"
                fill="#1E3A8A"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              />
              <motion.path
                d="M 68 25 C 83 29 94 41 96 57 L 85 65 L 81 54 C 79 44 72 37 63 35 L 72 28 Z"
                fill="#16C15A"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              />
              <motion.circle
                cx="96"
                cy="81"
                r="6"
                fill="#22D3EE"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.35, delay: 0.55 }}
              />
              {/* Center Document Card */}
              <motion.rect
                x="43"
                y="41"
                width="34"
                height="38"
                rx="6"
                stroke="#E8ECF8"
                strokeWidth="3.2"
                fill="#0B1E3D"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              />
              <motion.line
                x1="49"
                y1="55"
                x2="70"
                y2="55"
                stroke="#E8ECF8"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.6 }}
              />
              <motion.line
                x1="49"
                y1="62"
                x2="70"
                y2="62"
                stroke="#E8ECF8"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.7 }}
              />
              <motion.line
                x1="49"
                y1="69"
                x2="63"
                y2="69"
                stroke="#16C15A"
                strokeWidth="2.8"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.8 }}
              />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-4 text-center"
          >
            <p className="font-heading text-xl font-extrabold tracking-tight">
              Orbit <span className="text-orbit-green">Verify</span>
            </p>
            <div className="mt-2 flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orbit-green animate-pulse" />
              <span className="w-1 h-1 rounded-full bg-orbit-green/70" />
              <span className="w-1 h-1 rounded-full bg-orbit-green/70" />
              <span className="w-2 h-2 rounded-full bg-orbit-cyan" />
              <span className="w-1 h-1 rounded-full bg-orbit-green/70" />
              <span className="w-1 h-1 rounded-full bg-orbit-green/70" />
              <span className="w-1.5 h-1.5 rounded-full bg-orbit-green animate-pulse" />
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
              Initializing Verification Orbit • Click to skip
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
