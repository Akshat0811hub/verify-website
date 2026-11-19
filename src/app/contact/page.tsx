import React from 'react';
import {
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldAlert,
} from 'lucide-react';
import { SITE_CONFIG } from '@/content/config';
import { ContactForm } from '@/components/templates/ContactForm';
import { TiltCard } from '@/components/ui/TiltCard';
import { SplitText } from '@/components/ui/SplitText';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Contact Us & Request a BGV Demo',
  description:
    'Contact Orbit Verify in New Delhi (+91-92117-11370, hello@orbitverify.com). Schedule a platform demo or request a custom background verification rate card.',
  path: '/contact',
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Orbit Verify team, I would like to book a demo for Background Verification services.'
  )}`;

  return (
    <div className="pt-28 pb-16">
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-2xl space-y-3 mb-12">
            <ScrambleText text="GET IN TOUCH • NEW DELHI VERIFICATION DESK" />
            <SplitText
              as="h1"
              text="Let’s Architect Your Verification Workflow."
              highlightWords={['Architect', 'Verification']}
              className="text-fluid-hero text-foreground"
            />
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Speak directly with our background screening specialists in New
              Delhi for tailored packages, SLA commitments, or API integration.
            </p>
          </div>

          {/* Split Layout: Left Contact Cards & Map | Right Glass Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 5 Cols */}
            <div className="lg:col-span-5 space-y-5">
              {/* Phone & WhatsApp Card */}
              <TiltCard className="p-6 border border-orbit-green/35 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orbit-green/15 text-orbit-green border border-orbit-green/35">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase text-orbit-green">
                    Mon–Sat • 9:30 AM – 6:30 PM IST
                  </span>
                </div>
                <div>
                  <h2 className="font-heading text-lg font-bold text-foreground">
                    Direct Phone &amp; WhatsApp Desk
                  </h2>
                  <div className="mt-2 flex flex-col gap-1.5 font-mono text-sm font-semibold text-foreground">
                    <a
                      href="tel:+919211711370"
                      className="hover:text-orbit-green transition-colors"
                    >
                      {SITE_CONFIG.contact.phones[0]}
                    </a>
                    <a
                      href="tel:+919211711371"
                      className="hover:text-orbit-green transition-colors"
                    >
                      {SITE_CONFIG.contact.phones[1]}
                    </a>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#16C15A] px-4 py-2 text-xs font-bold text-orbit-deep hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Instantly on WhatsApp</span>
                </a>
              </TiltCard>

              {/* Email & Escalation Card */}
              <TiltCard className="p-6 border border-surface-border space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orbit-cyan/15 text-orbit-cyan border border-orbit-cyan/35">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-bold text-foreground">
                      Email &amp; Escalation Matrix
                    </h2>
                    <p className="text-xs text-muted">
                      2-hour SLA response during business hours
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs border-t border-surface-border pt-3">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-muted block">
                      Sales, Demos &amp; General Inquiries
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="font-mono text-sm font-bold text-orbit-cyan hover:underline"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-muted flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3 text-amber-400" />
                      Executive Escalation Desk
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.escalationEmail}`}
                      className="font-mono text-sm font-bold text-amber-400 hover:underline"
                    >
                      {SITE_CONFIG.contact.escalationEmail}
                    </a>
                  </div>
                </div>
              </TiltCard>

              {/* Offices Card */}
              <TiltCard className="p-6 border border-surface-border space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orbit-blue/15 text-orbit-blue border border-orbit-blue/35">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-bold text-foreground">
                      New Delhi Offices
                    </h2>
                    <p className="text-xs text-muted">
                      {SITE_CONFIG.legalEntity}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs border-t border-surface-border pt-3">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-orbit-green block">
                      Operational Corporate Office
                    </span>
                    <p className="mt-0.5 text-foreground leading-relaxed">
                      {SITE_CONFIG.contact.operationalOffice}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-muted block">
                      Registered Office
                    </span>
                    <p className="mt-0.5 text-muted leading-relaxed">
                      {SITE_CONFIG.contact.registeredOffice}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-surface-border font-mono text-[11px] text-muted flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-orbit-green shrink-0" />
                    <span>
                      CIN: {SITE_CONFIG.cin} | GSTIN: {SITE_CONFIG.gstin}
                    </span>
                  </div>
                </div>
              </TiltCard>

              {/* Map Embed */}
              <div className="rounded-3xl overflow-hidden glass-panel border border-surface-border h-56 relative">
                <iframe
                  title="Orbit Verify New Delhi Corporate Office Map"
                  src={SITE_CONFIG.contact.googleMapsEmbedUrl}
                  className="w-full h-full border-0 opacity-85 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right 7 Cols: Validated Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
