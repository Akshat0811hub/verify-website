'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
  cursorLabel?: string;
}

/**
 * Lightweight GPU-accelerated CTA button with zero mousemove re-renders.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = true,
  className,
  type = 'button',
  disabled = false,
  external = false,
}: MagneticButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-orbit-green via-orbit-emerald to-orbit-blue text-white font-semibold shadow-[0_6px_20px_rgba(22,193,90,0.28)] hover:brightness-110 border border-white/20',
    secondary:
      'bg-orbit-navy text-white font-semibold border border-orbit-green/40 hover:border-orbit-green',
    ghost:
      'glass-panel text-foreground font-medium hover:border-orbit-green/50 hover:bg-orbit-green/10',
    outline:
      'border border-orbit-green/50 text-foreground font-medium hover:bg-orbit-green/15',
  }[variant];

  const innerContent = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </span>
  );

  const combinedClassName = cn(
    'group relative inline-flex items-center justify-center rounded-full overflow-hidden select-none transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none',
    sizeClasses,
    variantClasses,
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={combinedClassName}
        >
          {innerContent}
        </a>
      );
    }

    return (
      <Link href={href} onClick={onClick} className={combinedClassName}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClassName}
    >
      {innerContent}
    </button>
  );
}
