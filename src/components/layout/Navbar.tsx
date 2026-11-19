'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Menu,
  Moon,
  ShieldCheck,
  Sun,
  X,
} from 'lucide-react';
import { OrbitLogo } from '@/components/ui/OrbitLogo';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { useTheme } from '@/components/layout/ThemeProvider';
import { BUSINESS_SERVICES, EMPLOYEE_SERVICES } from '@/content/services';
import { SITE_CONFIG } from '@/content/config';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeMega, setActiveMega] = useState<'employee' | 'business' | null>(
    null
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<
    'employee' | 'business' | null
  >(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);

      if (currentY > 180 && currentY > lastScrollY + 6 && !mobileOpen) {
        setHidden(true);
        setActiveMega(null);
      } else if (currentY < lastScrollY - 6 || currentY <= 80) {
        setHidden(false);
      }
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  useEffect(() => {
    setActiveMega(null);
    setMobileOpen(false);
  }, [pathname]);

  const activeServices =
    activeMega === 'employee'
      ? EMPLOYEE_SERVICES
      : activeMega === 'business'
      ? BUSINESS_SERVICES
      : [];

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        onMouseLeave={() => setActiveMega(null)}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'py-2.5' : 'py-4'
        )}
      >
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <nav
            aria-label="Primary Navigation"
            className={cn(
              'relative flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300',
              scrolled
                ? 'glass-panel-strong py-2.5 shadow-[0_12px_40px_rgba(5,6,15,0.45)] border-orbit-green/25'
                : 'bg-transparent py-2 border border-transparent'
            )}
          >
            {/* Brand Logo */}
            <Link
              href="/"
              aria-label="Orbit Verify Home"
              className="shrink-0"
            >
              <OrbitLogo
                size={scrolled ? 'sm' : 'md'}
                showSubtitle={!scrolled}
                showDots={!scrolled}
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <NavLink href="/" active={pathname === '/'}>
                Home
              </NavLink>

              <NavLink
                href="/industries"
                active={
                  pathname === '/industries' ||
                  pathname.startsWith('/industries-1')
                }
              >
                Industries
              </NavLink>

              {/* Employee BGV Mega Trigger */}
              <div
                onMouseEnter={() => setActiveMega('employee')}
                className="relative"
              >
                <Link
                  href="/employee-bgv"
                  className={cn(
                    'group inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    activeMega === 'employee' || pathname === '/employee-bgv'
                      ? 'text-orbit-green'
                      : 'text-foreground/85 hover:text-orbit-green'
                  )}
                >
                  <span>Employee BGV</span>
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      activeMega === 'employee' && 'rotate-180 text-orbit-green'
                    )}
                  />
                </Link>
              </div>

              {/* Business BGV Mega Trigger */}
              <div
                onMouseEnter={() => setActiveMega('business')}
                className="relative"
              >
                <Link
                  href="/business-bgv"
                  className={cn(
                    'group inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    activeMega === 'business' || pathname === '/business-bgv'
                      ? 'text-orbit-green'
                      : 'text-foreground/85 hover:text-orbit-green'
                  )}
                >
                  <span>Business BGV</span>
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      activeMega === 'business' && 'rotate-180 text-orbit-green'
                    )}
                  />
                </Link>
              </div>

              <NavLink href="/about" active={pathname === '/about'}>
                About Us
              </NavLink>

              <NavLink href="/contact" active={pathname === '/contact'}>
                Contact
              </NavLink>
            </div>

            {/* Right Actions: Theme Switch, Portal Login, Request Demo */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Animated Sun/Moon Switch */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  theme === 'dark' ? 'light' : 'dark'
                } mode`}
                className="relative flex h-9 w-9 items-center justify-center rounded-full glass-panel hover:border-orbit-green/50 transition-colors"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'dark' ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4 text-orbit-green" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4 text-orbit-navy" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Client Portal Login */}
              <a
                href={SITE_CONFIG.portalLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-foreground/85 hover:text-orbit-green rounded-full border border-surface-border hover:border-orbit-green/50 transition-all"
              >
                <span>Login</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              {/* Request Demo CTA */}
              <MagneticButton
                href="/contact"
                size="sm"
                variant="primary"
                cursorLabel="Demo"
              >
                Request Demo
              </MagneticButton>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle color theme"
                className="flex h-9 w-9 items-center justify-center rounded-full glass-panel"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-orbit-green" />
                ) : (
                  <Moon className="w-4 h-4 text-orbit-navy" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                className="flex h-10 w-10 items-center justify-center rounded-xl glass-panel text-foreground"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5 text-orbit-green" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>

          {/* Desktop Mega-Menu Dropdown (14 Employee / 15 Business Services) */}
          <AnimatePresence>
            {activeMega && (
              <motion.div
                key={activeMega}
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.99 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setActiveMega(activeMega)}
                onMouseLeave={() => setActiveMega(null)}
                className="hidden lg:block mt-2 rounded-3xl glass-panel-strong p-6 shadow-[0_25px_80px_rgba(5,6,15,0.75)] border border-orbit-green/30"
              >
                <div className="grid grid-cols-12 gap-6">
                  {/* Services Grid (9 cols) */}
                  <div className="col-span-9">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-surface-border">
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-orbit-green">
                          {activeMega === 'employee'
                            ? '14 WORKFORCE SCREENING MODULES'
                            : '15 CORPORATE DUE DILIGENCE MODULES'}
                        </span>
                        <h3 className="font-heading text-lg font-bold text-foreground">
                          {activeMega === 'employee'
                            ? 'Employee Background Verification (BGV)'
                            : 'Business Verification & B2B Due Diligence'}
                        </h3>
                      </div>
                      <Link
                        href={
                          activeMega === 'employee'
                            ? '/employee-bgv'
                            : '/business-bgv'
                        }
                        className="inline-flex items-center gap-1 text-xs font-semibold text-orbit-green hover:underline"
                      >
                        <span>View All {activeServices.length} Services</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5">
                      {activeServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/${service.slug}`}
                          className="group flex items-start gap-3 rounded-xl p-2.5 hover:bg-orbit-green/10 border border-transparent hover:border-orbit-green/30 transition-all"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orbit-green/15 text-orbit-green group-hover:bg-orbit-green group-hover:text-white transition-colors">
                            <ServiceIcon
                              name={service.iconName}
                              className="w-4 h-4"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-foreground group-hover:text-orbit-green transition-colors truncate">
                              {service.shortTitle}
                            </p>
                            <p className="text-[11px] text-muted line-clamp-1 mt-0.5">
                              {service.shortDescription}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Featured Spotlight Card (3 cols) */}
                  <div className="col-span-3 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-orbit-navy via-[#0E1B3D] to-orbit-green/30 p-5 text-white border border-orbit-green/40 relative overflow-hidden">
                    <div className="pointer-events-none absolute -right-10 -bottom-10 h-36 w-36 rounded-full border border-orbit-green/30 animate-spin-slow" />
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-orbit-green/20 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-orbit-green border border-orbit-green/30">
                        <ShieldCheck className="w-3 h-3" />
                        Orbit Core Promise
                      </span>
                      <h4 className="mt-3 font-heading text-base font-bold leading-snug">
                        {activeMega === 'employee'
                          ? 'Hire With Confidence. Verify in Minutes, Not Days.'
                          : 'De-Risk Vendors, Partners & Counterparties Before Signing.'}
                      </h4>
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                        {activeMega === 'employee'
                          ? 'Consent-gated digital checks, pan-India physical field visits, and primary-source registrar & HR verification.'
                          : 'MCA financials, NCLT/court litigation, cyber hygiene, ESG compliance, and geo-tagged facility inspections.'}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-orbit-green px-4 py-2.5 text-xs font-bold text-orbit-deep hover:bg-orbit-cyan transition-colors"
                      >
                        <span>Request Custom BGV Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href={SITE_CONFIG.portalLoginUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 text-[11px] text-slate-300 hover:text-white"
                      >
                        <span>Client Portal Login</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Staggered Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-2xl pt-24 pb-10 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Industries We Serve', href: '/industries' },
              ].map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2.5 font-heading text-xl font-bold text-foreground hover:text-orbit-green"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Accordion: Employee BGV */}
              <div className="border-y border-surface-border py-2">
                <button
                  type="button"
                  onClick={() =>
                    setMobileAccordion(
                      mobileAccordion === 'employee' ? null : 'employee'
                    )
                  }
                  className="flex w-full items-center justify-between py-2 font-heading text-xl font-bold text-foreground"
                >
                  <span>Employee BGV (14)</span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 transition-transform',
                      mobileAccordion === 'employee' &&
                        'rotate-180 text-orbit-green'
                    )}
                  />
                </button>
                <AnimatePresence>
                  {mobileAccordion === 'employee' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 pb-3">
                        <Link
                          href="/employee-bgv"
                          className="text-xs font-mono uppercase text-orbit-green py-1"
                        >
                          → Overview: All Employee BGV
                        </Link>
                        {EMPLOYEE_SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/${s.slug}`}
                            className="flex items-center gap-2 rounded-lg p-2 text-sm text-muted hover:text-foreground hover:bg-orbit-green/10"
                          >
                            <ServiceIcon
                              name={s.iconName}
                              className="w-4 h-4 text-orbit-green shrink-0"
                            />
                            <span>{s.shortTitle}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Accordion: Business BGV */}
              <div className="border-b border-surface-border py-2">
                <button
                  type="button"
                  onClick={() =>
                    setMobileAccordion(
                      mobileAccordion === 'business' ? null : 'business'
                    )
                  }
                  className="flex w-full items-center justify-between py-2 font-heading text-xl font-bold text-foreground"
                >
                  <span>Business BGV (15)</span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 transition-transform',
                      mobileAccordion === 'business' &&
                        'rotate-180 text-orbit-green'
                    )}
                  />
                </button>
                <AnimatePresence>
                  {mobileAccordion === 'business' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 pb-3">
                        <Link
                          href="/business-bgv"
                          className="text-xs font-mono uppercase text-orbit-green py-1"
                        >
                          → Overview: All Business BGV
                        </Link>
                        {BUSINESS_SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/${s.slug}`}
                            className="flex items-center gap-2 rounded-lg p-2 text-sm text-muted hover:text-foreground hover:bg-orbit-green/10"
                          >
                            <ServiceIcon
                              name={s.iconName}
                              className="w-4 h-4 text-orbit-green shrink-0"
                            />
                            <span>{s.shortTitle}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[
                { label: 'About Us', href: '/about' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Blog & Insights', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2 font-heading text-xl font-bold text-foreground hover:text-orbit-green"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-surface-border">
                <MagneticButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Request a Demo
                </MagneticButton>
                <a
                  href={SITE_CONFIG.portalLoginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-mono uppercase tracking-wider border border-orbit-green/40 text-foreground"
                >
                  <span>Login to Client Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative px-3 py-2 text-sm font-medium transition-colors',
        active
          ? 'text-orbit-green'
          : 'text-foreground/85 hover:text-orbit-green'
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          'absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-orbit-green to-orbit-cyan transition-transform duration-300 origin-left',
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        )}
      />
    </Link>
  );
}
