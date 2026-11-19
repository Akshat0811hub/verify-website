'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, ShieldCheck } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  company: z.string().min(2, 'Please enter your organization name'),
  email: z.string().email('Please enter a valid work email address'),
  phone: z
    .string()
    .min(8, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long'),
  service: z.string().min(2, 'Please select a primary verification service'),
  hiringVolume: z.string().optional(),
  message: z
    .string()
    .min(5, 'Please share a brief note about your verification requirements'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: 'Employee Background Verification (BGV)',
      hiringVolume: '25 - 100 checks / month',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setErrorMsg(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Request failed');
      setSubmitted(true);
      reset();
    } catch {
      setErrorMsg(
        'Unable to submit right now. Please call +91-92117-11370 or email hello@orbitverify.com directly.'
      );
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl glass-panel-strong p-8 sm:p-12 border border-orbit-green/45 text-center space-y-5">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orbit-green/20 border-2 border-orbit-green shadow-[0_0_30px_rgba(22,193,90,0.45)]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-10 h-10 text-orbit-green"
          >
            <motion.path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="30"
              initial={{ strokeDashoffset: 30 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground">
          Request Received by Orbit Verify Desk
        </h3>
        <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. Our New Delhi verification team will
          review your scope and respond within 2 business hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="rounded-full bg-orbit-green/15 px-5 py-2 text-xs font-mono text-orbit-green border border-orbit-green/35 hover:bg-orbit-green/25"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl glass-panel-strong p-7 sm:p-10 border border-orbit-green/35 shadow-[0_25px_80px_rgba(5,6,15,0.6)] space-y-5"
    >
      <div className="flex items-center justify-between border-b border-surface-border pb-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-orbit-green">
            DIRECT VERIFICATION CONSULTATION
          </span>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
            Request a Custom Demo &amp; Rate Card
          </h2>
        </div>
        <ShieldCheck className="w-6 h-6 text-orbit-green shrink-0" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-name"
            className="block font-mono text-xs uppercase text-muted mb-1.5"
          >
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="e.g. Vikramaditya Sen"
            {...register('name')}
            className="w-full rounded-xl bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 border border-surface-border focus:border-orbit-green focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-company"
            className="block font-mono text-xs uppercase text-muted mb-1.5"
          >
            Company / Organization *
          </label>
          <input
            id="contact-company"
            type="text"
            placeholder="e.g. NexaCloud Technologies"
            {...register('company')}
            className="w-full rounded-xl bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 border border-surface-border focus:border-orbit-green focus:outline-none"
          />
          {errors.company && (
            <p className="mt-1 text-xs text-rose-400">
              {errors.company.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-email"
            className="block font-mono text-xs uppercase text-muted mb-1.5"
          >
            Work Email *
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="name@company.com"
            {...register('email')}
            className="w-full rounded-xl bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 border border-surface-border focus:border-orbit-green focus:outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block font-mono text-xs uppercase text-muted mb-1.5"
          >
            Phone / WhatsApp Number *
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+91 98765 43210"
            {...register('phone')}
            className="w-full rounded-xl bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 border border-surface-border focus:border-orbit-green focus:outline-none"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-rose-400">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-service"
            className="block font-mono text-xs uppercase text-muted mb-1.5"
          >
            Primary Service of Interest *
          </label>
          <select
            id="contact-service"
            {...register('service')}
            className="w-full rounded-xl bg-background px-4 py-3 text-sm text-foreground border border-surface-border focus:border-orbit-green focus:outline-none"
          >
            <option value="Employee Background Verification (BGV)">
              Employee Background Verification (BGV)
            </option>
            <option value="Business & Vendor Due Diligence (B2B)">
              Business &amp; Vendor Due Diligence (B2B)
            </option>
            <option value="Identity, Address & Criminal Checks">
              Identity, Address &amp; Criminal Checks
            </option>
            <option value="Education & Employment Primary-Source Checks">
              Education &amp; Employment Primary-Source Checks
            </option>
            <option value="Executive & Board Screening">
              Executive &amp; Board Screening
            </option>
            <option value="Drug & Medical Screening">
              Drug &amp; Medical Screening
            </option>
            <option value="Global Watchlist, Sanctions & PEP Checks">
              Global Watchlist, Sanctions &amp; PEP Checks
            </option>
            <option value="Custom Enterprise BGV & API Integration">
              Custom Enterprise BGV &amp; API Integration
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-volume"
            className="block font-mono text-xs uppercase text-muted mb-1.5"
          >
            Estimated Monthly Checks
          </label>
          <select
            id="contact-volume"
            {...register('hiringVolume')}
            className="w-full rounded-xl bg-background px-4 py-3 text-sm text-foreground border border-surface-border focus:border-orbit-green focus:outline-none"
          >
            <option value="1 - 25 checks / month">1 - 25 checks / month</option>
            <option value="25 - 100 checks / month">
              25 - 100 checks / month
            </option>
            <option value="100 - 500 checks / month">
              100 - 500 checks / month
            </option>
            <option value="500+ Enterprise volume">
              500+ Enterprise volume
            </option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block font-mono text-xs uppercase text-muted mb-1.5"
        >
          Your Requirements / Questions *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Tell us which checks or industry compliance packages you need..."
          {...register('message')}
          className="w-full rounded-xl bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 border border-surface-border focus:border-orbit-green focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-rose-400">{errors.message.message}</p>
        )}
      </div>

      {errorMsg && <p className="text-xs text-rose-400">{errorMsg}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orbit-green via-orbit-emerald to-orbit-blue px-7 py-4 text-sm font-bold text-white shadow-[0_0_28px_rgba(22,193,90,0.4)] hover:opacity-95 transition-all disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        <span>
          {isSubmitting
            ? 'Submitting to Orbit Verify Desk...'
            : 'Schedule Demo & Request Pricing'}
        </span>
      </button>
    </form>
  );
}
