# Orbit Verify — Next-Gen Employee & Business Background Verification Platform

Award-level (Awwwards / FWA inspired) 2026 Fintech & AI-Security redesign for **Orbit Verify** (operated by **Orbitouch Outsourcing Private Limited**, New Delhi, India).

---

## 1. Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling & Design System:** Tailwind CSS + CSS Custom Properties (`--bg-primary`, `--orbit-green`, `--orbit-navy`, `--mx`, `--my`) with Dark-First + Light Mode toggle
- **3D & WebGL:** React Three Fiber (`@react-three/fiber`) + `@react-three/drei` + `three` (lazy-loaded 3D holographic ID & orbiting check nodes in Hero with graceful non-WebGL fallback)
- **Motion & Scroll Storytelling:** Framer Motion + GSAP (`ScrollTrigger` pinned timeline & horizontal B2B carousel) + Lenis Smooth Scrolling
- **Forms & Validation:** React Hook Form + Zod (`@hookform/resolvers/zod`)
- **SEO & Structured Data:** Next.js Metadata API, `sitemap.xml`, `robots.txt`, 301 Redirect Map, JSON-LD (`Organization`, `LocalBusiness`, `FAQPage`, `Service`, `BreadcrumbList`)

---

## 2. Brand & Logo Color Family Integration

The design system fuses the 2026 dark-first fintech aesthetic (`#05060F` → `#0A0D1F`) with the official **Orbit Verify** logo color palette:
- **Orbit Deep Navy:** `#0B1E3D` (from the inner circular chevron & wordmark)
- **Orbit Verification Green:** `#16C15A` / `#10B981` (from the outer orbit ring, chevron arrow, and 7-dot verification signature bar)
- **Electric Blue & Cyan Accents:** `#3B82F6` & `#22D3EE`
- **Uploaded Logo Asset:** Stored at `public/orbit-verify-logo.jpg` and reconstructed as an interactive vector component in `src/components/ui/OrbitLogo.tsx`.

---

## 3. Local Setup & Development

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build

# 4. Run production server locally
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. Deploying to Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new) (or run `npx vercel` from the project root).
3. Framework Preset: **Next.js** (auto-detected).
4. Build Command: `npm run build` | Output Directory: `.next`.
5. Add custom domains (`orbitverify.com` / `www.orbitverify.com`) under **Project Settings → Domains**.

---

## 5. Complete URL & SEO Route Map (48 Static Pages)

- **Core Pages:** `/`, `/employee-bgv`, `/business-bgv`, `/industries`, `/about`, `/contact`, `/faq`, `/blog`, `/privacy-policy`
- **14 Employee BGV Routes:**
  - `/identity-and-address-verification`
  - `/education-and-employment-checks`
  - `/credit-and-gap-verification`
  - `/criminal-background-checks`
  - `/bank-statement-and-reference-checks`
  - `/drug-medical-screening`
  - `/global-compliance-checks`
  - `/specialized-checks`
  - `/background-verification`
  - `/executive-screening`
  - `/digital-background`
  - `/professional-background`
  - `/employment-risk`
  - `/custom-bgv`
- **15 Business BGV Routes:**
  - `/financial-due-diligence-service`
  - `/cyber-and-data-security`
  - `/sustainibility-risk` *(legacy slug preserved + 301 redirect from `/sustainability-risk`)*
  - `/supply-chain-risk`
  - `/vendor-verification-services`
  - `/legal-risk-verification`
  - `/physical-verification`
  - `/reputation-and-market`
  - `/operational-verification`
  - `/compliance-screening`
  - `/legal-verification`
  - `/governance-verification`
  - `/business-identification`
  - `/continuous-monitoring`
  - `/financial-due-diligence`
- **Industry Playbook Routes:**
  - `/industries-1/banking-and-financial-services`
  - `/industries-1/information-technology`
  - `/industries-1/healthcare-and-pharmaceuticals`
  - `/industries-1/telecommunications`
  - `/industries-1/education-and-edtech`
  - `/industries-1/manufacturing-and-logistics`
  - `/industries-1/real-estate-and-construction`
  - `/industries-1/retail-and-ecommerce`

---

## 6. Owner Replacement Checklist (`src/content/config.ts`)

All placeholder items are centralized in **`src/content/config.ts`** with `// TODO: OWNER` comments:

- [ ] **Proof Metrics (`PROOF_STATS`):** Update `500K+` checks, `300+` clients, `99.4%` accuracy, and `24 hrs` turnaround with your latest audited numbers.
- [ ] **Client Logos (`CLIENT_LOGOS_PLACEHOLDER`):** Replace placeholder enterprise names with authorized client logo SVGs/PNGs.
- [ ] **Recognition & Compliance Badges (`RECOGNITION_BADGES_PLACEHOLDER` & `SECURITY_COMPLIANCE_PILLARS`):** Add official ISO certificate numbers or industry association memberships once confirmed.
- [ ] **Client Testimonials (`TESTIMONIALS_PLACEHOLDER`):** Replace placeholder quotes and titles with signed client testimonials.
- [ ] **Leadership Bios (`TEAM_PLACEHOLDERS`):** Add photos and full executive bios alongside `jinendra@orbitverify.com`.
- [ ] **Service Turnaround Times (`src/content/services.ts`):** Confirm each service's exact SLA chip (`turnaround` field).
- [ ] **Contact API Email Delivery (`src/app/api/contact/route.ts`):** Connect your transactional email key (Resend / SendGrid / Nodemailer) to forward lead submissions to `hello@orbitverify.com`.
