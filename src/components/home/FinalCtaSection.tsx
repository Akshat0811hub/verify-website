'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Phone, Send, ShieldCheck } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { SITE_CONFIG } from '@/content/config';

const inlineLeadSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  company: z.string().min(2, 'Please enter your company name'),
  email: z.string().email('Please enter a valid work email'),
  phone: z
    .string()
    .min(8, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long'),
  service: z.string().min(2, 'Please select a service of interest'),
  message: z.string().optional(),
});

type InlineLeadValues = z.infer<typeof inlineLeadSchema>;

export function FinalCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InlineLeadValues>({
    resolver: zodResolver(inlineLeadSchema),
    defaultValues: {
      service: 'Employee Background Verification (BGV)',
    },
  });

  const onSubmit = async (values: InlineLeadValues) => {
    setServerError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
      reset();
    } catch {
      setServerError(
        'Could not submit right now. Please call +91-92117-11370 or email hello@orbitverify.com.'
      );
    }
  };

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-orbit-navy via-[#0A1838] to-[#071F29] p-8 sm:p-12 lg:p-14 border border-orbit-green/45 shadow-[0_30px_100px_rgba(22,193,90,0.22)] overflow-hidden text-white">
          {/* Animated Orbit Rings Behind */}
          <div
            className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border border-orbit-green/25 animate-spin-slow"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-[300px] w-[300px] rounded-full border border-dashed border-orbit-cyan/25 animate-spin-reverse-slow"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 6 Cols: Headline & Direct Call Actions */}
            <div className="lg:col-span-6 space-y-6">
              <ScrambleText text="LAUNCH YOUR VERIFICATION ORBIT" />
              <SplitText
                text="Ready for a better background screening experience?"
                highlightWords={['better', 'screening']}
                className="text-fluid-h2 text-white"
              />
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Tell us what you need. We&apos;ll show you how it can happen—with
                custom turnaround SLAs, zero setup friction, and audit-ready
                reports.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  cursorLabel="Demo"
                >
                  Request a Demo
                </MagneticButton>
                <a
                  href={`tel:${SITE_CONFIG.contact.phones[0]}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-6 py-4 text-sm font-semibold text-white border border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-orbit-green" />
                  <span>Call Us: {SITE_CONFIG.contact.phones[0]}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-orbit-green" />
                  Response within 2 business hours
                </span>
                <span>•</span>
                <span>Direct New Delhi Operations Desk</span>
              </div>
            </div>

            {/* Right 6 Cols: Inline Lead Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#050918]/85 backdrop-blur-xl p-6 sm:p-8 border border-orbit-green/35">
                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    {/* Self-drawing SVG Checkmark */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orbit-green/20 border border-orbit-green">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-8 h-8 text-orbit-green"
                      >
                        <motion.path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="30"
                          initial={{ strokeDashoffset: 30 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={{ duration: 0.6 }}
                        />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      Verification Demo Request Locked!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you. Our verification specialists in New Delhi will
                      reach out shortly with a tailored demo and rate card.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-orbit-green underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading text-lg font-bold text-white">
                        Quick Demo &amp; Pricing Request
                      </h3>
                      <span className="font-mono text-[10px] uppercase text-orbit-green">
                        Encrypted Form
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="cta-name"
                          className="block font-mono text-[11px] uppercase text-slate-300 mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          id="cta-name"
                          type="text"
                          placeholder="Rajeshwari Iyer"
                          {...register('name')}
                          className="w-full rounded-xl bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 border border-white/15 focus:border-orbit-green focus:outline-none"
                        />
                        {errors.name && (
                          <p className="mt-1 text-[11px] text-rose-400">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="cta-company"
                          className="block font-mono text-[11px] uppercase text-slate-300 mb-1"
                        >
                          Company Name *
                        </label>
                        <input
                          id="cta-company"
                          type="text"
                          placeholder="Acme Technologies Pvt Ltd"
                          {...register('company')}
                          className="w-full rounded-xl bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 border border-white/15 focus:border-orbit-green focus:outline-none"
                        />
                        {errors.company && (
                          <p className="mt-1 text-[11px] text-rose-400">
                            {errors.company.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="cta-email"
                          className="block font-mono text-[11px] uppercase text-slate-300 mb-1"
                        >
                          Work Email *
                        </label>
                        <input
                          id="cta-email"
                          type="email"
                          placeholder="hr@company.com"
                          {...register('email')}
                          className="w-full rounded-xl bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 border border-white/15 focus:border-orbit-green focus:outline-none"
                        />
                        {errors.email && (
                          <p className="mt-1 text-[11px] text-rose-400">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="cta-phone"
                          className="block font-mono text-[11px] uppercase text-slate-300 mb-1"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="cta-phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          {...register('phone')}
                          className="w-full rounded-xl bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 border border-white/15 focus:border-orbit-green focus:outline-none"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-[11px] text-rose-400">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="cta-service"
                        className="block font-mono text-[11px] uppercase text-slate-300 mb-1"
                      >
                        Service of Interest *
                      </label>
                      <select
                        id="cta-service"
                        {...register('service')}
                        className="w-full rounded-xl bg-[#0A1128] px-3.5 py-2.5 text-sm text-white border border-white/15 focus:border-orbit-green focus:outline-none"
                      >
                        <option value="Employee Background Verification (BGV)">
                          Employee Background Verification (BGV)
                        </option>
                        <option value="Business & Vendor Due Diligence (KYB)">
                          Business &amp; Vendor Due Diligence (KYB)
                        </option>
                        <option value="Executive & C-Suite Screening">
                          Executive &amp; C-Suite Screening
                        </option>
                        <option value="Criminal, Court & Global Watchlist Checks">
                          Criminal, Court &amp; Global Watchlist Checks
                        </option>
                        <option value="Drug & Medical Screening">
                          Drug &amp; Medical Screening
                        </option>
                        <option value="Custom Enterprise BGV Package & API">
                          Custom Enterprise BGV Package &amp; API
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="cta-message"
                        className="block font-mono text-[11px] uppercase text-slate-300 mb-1"
                      >
                        Approx. Monthly Volume / Requirements
                      </label>
                      <textarea
                        id="cta-message"
                        rows={2}
                        placeholder="e.g. Hiring 40 lateral engineers/month, need ID + Education + Employment + Court checks..."
                        {...register('message')}
                        className="w-full rounded-xl bg-white/5 px-3.5 py-2 text-sm text-white placeholder:text-slate-500 border border-white/15 focus:border-orbit-green focus:outline-none"
                      />
                    </div>

                    {serverError && (
                      <p className="text-xs text-rose-400">{serverError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orbit-green via-orbit-emerald to-orbit-blue px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(22,193,90,0.4)] hover:opacity-95 transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {isSubmitting
                          ? 'Transmitting Request...'
                          : 'Get Custom Demo & Rate Card'}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
