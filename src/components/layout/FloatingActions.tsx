'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/content/config';

export function FloatingActions() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Orbit Verify team, I would like to inquire about Background Verification (BGV) services.'
  )}`;

  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3"
      aria-label="Quick contact actions"
    >
      {/* WhatsApp Direct Button with Pulse */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Orbit Verify on WhatsApp"
        data-cursor="Chat"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#16C15A] text-white shadow-[0_0_25px_rgba(22,193,90,0.55)] hover:scale-110 transition-transform"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16C15A] opacity-40" />
        <MessageCircle className="relative w-5 h-5 fill-current" />
        <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg glass-panel-strong px-3 py-1.5 text-xs font-medium text-foreground opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
          WhatsApp Verification Desk
        </span>
      </a>

      {/* Floating Request Demo Pill */}
      <Link
        href="/contact"
        data-cursor="Demo"
        className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orbit-navy via-[#122B59] to-orbit-green px-4 py-2.5 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(5,6,15,0.65)] border border-orbit-green/50 hover:border-orbit-cyan transition-all"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orbit-green opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orbit-green" />
        </span>
        <Sparkles className="w-3.5 h-3.5 text-orbit-green" />
        <span>Request Demo</span>
      </Link>
    </div>
  );
}
