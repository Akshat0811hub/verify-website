'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldAlert,
} from 'lucide-react';
import { OrbitLogo } from '@/components/ui/OrbitLogo';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SITE_CONFIG } from '@/content/config';
import { BUSINESS_SERVICES, EMPLOYEE_SERVICES } from '@/content/services';
import { INDUSTRIES_DATA } from '@/content/industries';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="relative mt-16 border-t border-surface-border bg-orbit-navy text-white overflow-hidden">
      <div
        className="h-1 w-full bg-gradient-to-r from-orbit-green via-orbit-cyan to-orbit-blue"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-container px-4 sm:px-6 pt-16 pb-12">
        {/* Top Row: Brand Identity + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="rounded-xl bg-white px-3 py-1.5 shadow-sm">
                <Image
                  src="/orbit-verify-logo.jpg"
                  alt="Orbit Verify Official Logo"
                  width={110}
                  height={52}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <p className="font-heading text-xl font-extrabold text-white">
                  Orbit <span className="text-orbit-green">Verify</span>
                </p>
                <p className="text-xs text-slate-300">
                  Operated by {SITE_CONFIG.legalEntity}
                </p>
              </div>
            </div>
            <p className="max-w-xl text-sm text-slate-300 text-justify leading-relaxed">
              {SITE_CONFIG.tagline}. Orbit Verify provides fast, accurate, and
              legally compliant employee background verification (BGV) and
              corporate due diligence services across India and international
              markets.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl bg-white/5 p-6 border border-white/10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-orbit-green">
                HR &amp; Compliance Updates
              </span>
              <h3 className="mt-1 font-heading text-lg font-bold text-white">
                Receive background verification guides &amp; compliance updates
              </h3>
            </div>

            {subscribed ? (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-orbit-green/20 p-3.5 text-sm text-orbit-green border border-orbit-green/40">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>
                  Thank you for subscribing to Orbit Verify updates!
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mt-4 flex flex-col sm:flex-row gap-3"
              >
                <label htmlFor="footer-newsletter" className="sr-only">
                  Work Email
                </label>
                <input
                  id="footer-newsletter"
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your work email (e.g. hr@company.com)"
                  className="flex-1 rounded-full bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 border border-white/15 focus:border-orbit-green focus:outline-none"
                />
                <MagneticButton type="submit" variant="primary" size="md">
                  Subscribe
                </MagneticButton>
              </form>
            )}
          </div>
        </div>

        {/* Middle Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/10">
          {/* Column 1: Employee BGV */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-orbit-green mb-4">
              Employee BGV Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/employee-bgv"
                  className="font-semibold text-white hover:text-orbit-green transition-colors"
                >
                  All Employee BGV →
                </Link>
              </li>
              {EMPLOYEE_SERVICES.slice(0, 10).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-slate-300 hover:text-orbit-green transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Business BGV */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-orbit-green mb-4">
              Business Due Diligence
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/business-bgv"
                  className="font-semibold text-white hover:text-orbit-green transition-colors"
                >
                  All Business BGV →
                </Link>
              </li>
              {BUSINESS_SERVICES.slice(0, 10).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-slate-300 hover:text-orbit-green transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries & Company */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
                Industries
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link
                    href="/industries"
                    className="font-semibold text-orbit-green hover:underline"
                  >
                    All 20+ Industries →
                  </Link>
                </li>
                {INDUSTRIES_DATA.slice(0, 6).map((ind) => (
                  <li key={ind.slug}>
                    <Link
                      href={`/industries-1/${ind.slug}`}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {ind.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-300 hover:text-orbit-green transition-colors"
                  >
                    About Orbit Verify
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-slate-300 hover:text-orbit-green transition-colors"
                  >
                    Blog &amp; Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-slate-300 hover:text-orbit-green transition-colors"
                  >
                    BGV FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-slate-300 hover:text-orbit-green transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-300 hover:text-orbit-green transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.portalLoginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-orbit-green font-semibold hover:underline"
                  >
                    <span>Client Portal Login</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Exact Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-orbit-green mb-4">
              New Delhi Headquarters &amp; Contact
            </h4>

            <div className="rounded-2xl bg-white/5 p-5 space-y-3.5 text-xs border border-white/10">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-slate-400 text-left">
                    Phone Numbers
                  </p>
                  <div className="mt-0.5 flex flex-wrap gap-x-3 gap-y-1 font-semibold text-white">
                    <a
                      href="tel:+919211711370"
                      className="hover:text-orbit-green transition-colors"
                    >
                      +91-92117-11370
                    </a>
                    <span>•</span>
                    <a
                      href="tel:+919211711371"
                      className="hover:text-orbit-green transition-colors"
                    >
                      +91-92117-11371
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-slate-400 text-left">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="mt-0.5 block font-semibold text-white hover:text-orbit-green transition-colors"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-slate-400 text-left">
                    Escalation Desk
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.escalationEmail}`}
                    className="mt-0.5 block font-semibold text-white hover:text-amber-400 transition-colors"
                  >
                    {SITE_CONFIG.contact.escalationEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                <MapPin className="w-4 h-4 text-orbit-green shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-slate-400 text-left">
                    Corporate Office
                  </p>
                  <p className="mt-0.5 text-slate-200 leading-relaxed text-left">
                    {SITE_CONFIG.contact.operationalOffice}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-slate-400 text-left">
                    Registered Office
                  </p>
                  <p className="mt-0.5 text-slate-300 leading-relaxed text-left">
                    {SITE_CONFIG.contact.registeredOffice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">{SITE_CONFIG.legalFooterLine}</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-orbit-green transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-orbit-green transition-colors"
            >
              Sitemap
            </Link>
            <span>{SITE_CONFIG.copyrightLine}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
