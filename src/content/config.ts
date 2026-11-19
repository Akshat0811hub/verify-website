/**
 * ============================================================================
 * ORBIT VERIFY — CENTRAL SITE CONFIGURATION & PLACEHOLDER REGISTRY
 * ============================================================================
 * Real company facts (addresses, phones, emails, CIN, GSTIN) are locked below.
 * Items marked with `// TODO: OWNER — Replace with verified production data`
 * are structured placeholders ready for one-line updates.
 */

export const SITE_CONFIG = {
  companyName: 'Orbit Verify',
  legalEntity: 'Orbitouch Outsourcing Private Limited',
  tagline: 'Background Verification You Can Trust',
  corePromise: 'Fast turnaround, accurate reports, legally compliant.',
  vision:
    'Streamline hiring with swift, secure, insightful verification tailored to every industry.',
  mission: 'Empower businesses with trust and transparency.',
  siteUrl: 'https://orbitverify.com',
  portalLoginUrl: 'https://orbitverify.in/admin/login',
  cin: 'U72900DL2019PTC350022',
  gstin: '07AACCO9381R1ZJ',
  legalFooterLine:
    'Orbit Verify is operated by Orbitouch Outsourcing Private Limited | CIN: U72900DL2019PTC350022 | GSTIN: 07AACCO9381R1ZJ',
  copyrightLine:
    '© 2026 OrbiTouch Outsourcing Private Limited. All rights reserved.',
  defaultTitle: 'Background Verification Company in India | Orbit Verify',
  defaultDescription:
    'Employee background verification in India: identity, address, education, employment, criminal and credit checks. Fast, compliant reports. Request a demo.',
  contact: {
    phones: ['+91-92117-11370', '+91-92117-11371'],
    whatsappNumber: '919211711370',
    email: 'hello@orbitverify.com',
    escalationEmail: 'jinendra@orbitverify.com',
    operationalOffice:
      '28/6A, 1st Floor, Ashok Nagar, Tilak Nagar, New Delhi, Delhi 110018',
    registeredOffice:
      'RZ-37B/271, Upper Floor, Hans Park, West Sagarpur, New Delhi 110046',
    googleMapsEmbedUrl:
      'https://www.google.com/maps?q=Ashok+Nagar+Tilak+Nagar+New+Delhi+110018&output=embed',
  },
} as const;

// TODO: OWNER — Replace with your actual verified cumulative metrics
export const PROOF_STATS = [
  {
    id: 'checks',
    value: 500,
    suffix: 'K+',
    label: 'Verification Checks Completed',
    sublabel: 'Identity, employment, criminal & corporate checks',
    isPlaceholder: true,
  },
  {
    id: 'clients',
    value: 300,
    suffix: '+',
    label: 'Growing Teams & Enterprises',
    sublabel: 'Across India & cross-border hiring corridors',
    isPlaceholder: true,
  },
  {
    id: 'accuracy',
    value: 99.4,
    decimals: 1,
    suffix: '%',
    label: 'Multi-Layer QA Accuracy',
    sublabel: 'Dual-analyst verification before report release',
    isPlaceholder: true,
  },
  {
    id: 'tat',
    value: 24,
    suffix: ' hrs',
    label: 'Digital Identity Turnaround',
    sublabel: 'Instant API & priority source verification',
    isPlaceholder: true,
  },
];

// TODO: OWNER — Replace placeholder client names/SVG marks with authorized client logos
export const CLIENT_LOGOS_PLACEHOLDER = [
  { name: 'FinCore Capital (Placeholder)', sector: 'BFSI', code: 'FCC' },
  { name: 'NexaCloud Systems (Placeholder)', sector: 'Enterprise IT', code: 'NXC' },
  { name: 'Arogya LifeSciences (Placeholder)', sector: 'Healthcare', code: 'ALS' },
  { name: 'VeloGrid Logistics (Placeholder)', sector: 'Supply Chain', code: 'VGL' },
  { name: 'EduSphere Global (Placeholder)', sector: 'EdTech', code: 'ESG' },
  { name: 'Meridian InfraCorp (Placeholder)', sector: 'Real Estate', code: 'MIC' },
  { name: 'PulseTel Networks (Placeholder)', sector: 'Telecom', code: 'PTN' },
  { name: 'QuantPay Technologies (Placeholder)', sector: 'Fintech', code: 'QPT' },
  { name: 'Apex Manufacturing (Placeholder)', sector: 'Industrial', code: 'APX' },
  { name: 'Veritas Advisory (Placeholder)', sector: 'Consulting', code: 'VTA' },
];

// TODO: OWNER — Confirm or replace recognition badges with official awards/memberships
export const RECOGNITION_BADGES_PLACEHOLDER = [
  {
    title: 'ISO-Aligned Verification Workflow',
    subtitle: 'Standardized QA & Dual-Stage Audit Controls',
    tag: 'PROCESS QUALITY',
  },
  {
    title: 'Pan-India Field Network',
    subtitle: 'Physical verification across 28 states & 8 UTs',
    tag: 'COVERAGE',
  },
  {
    title: 'DPDP-Conscious Data Handling',
    subtitle: 'Explicit candidate consent & purpose limitation',
    tag: 'COMPLIANCE',
  },
  {
    title: 'Enterprise SLA Commitment',
    subtitle: 'Dedicated account & escalation desk in New Delhi',
    tag: 'RELIABILITY',
  },
];

// TODO: OWNER — Confirm security controls and add any formal certification numbers once audited
export const SECURITY_COMPLIANCE_PILLARS = [
  {
    id: 'consent-first',
    title: 'Consent-First Architecture',
    description:
      'Zero checks begin without explicit, timestamped digital or signed candidate authorization.',
    badge: '100% Consent-Gated',
  },
  {
    id: 'data-privacy',
    title: 'Data Privacy & Minimization',
    description:
      'PII is collected strictly for mandated screening scopes with role-based access control.',
    badge: 'Privacy by Design',
  },
  {
    id: 'encrypted-storage',
    title: 'Encrypted Document Vault',
    description:
      'Candidate proofs and verification artefacts are protected in transit (TLS) and at rest.',
    badge: 'Encrypted Vault',
  },
  {
    id: 'audit-trail',
    title: 'Immutable Audit Trail',
    description:
      'Every check carries source timestamps, verifier logs, and annexure evidence for compliance audits.',
    badge: 'Audit-Ready Logs',
  },
  {
    id: 'compliance-aligned',
    title: 'Compliance-Aligned Frameworks',
    description:
      'Designed around Indian employment regulations, DPDP principles, and global background screening norms.',
    badge: 'Reg-Aligned',
  },
];

// TODO: OWNER — Replace with real signed client testimonials & photos
export const TESTIMONIALS_PLACEHOLDER = [
  {
    id: 't1',
    quote:
      'Orbit Verify cut our lateral hiring turnaround from 12 days to under 48 hours for digital checks. Their discrepancy flags saved us from two high-risk hires last quarter.',
    author: 'VP of People Operations (Placeholder)',
    company: 'Leading Series-C Fintech, Gurugram',
    role: 'Hiring 120+ engineers/year',
    metric: '64% Faster Onboarding',
  },
  {
    id: 't2',
    quote:
      'What stood out is the evidence depth. Every employment and education report comes with clear source confirmation and zero ambiguity for our compliance audits.',
    author: 'Head of HR & Compliance (Placeholder)',
    company: 'Global IT Services Firm, Bengaluru',
    role: 'Enterprise BGV Program',
    metric: '100% Audit Pass Rate',
  },
  {
    id: 't3',
    quote:
      'We rely on Orbit Verify for both employee screening and vendor physical verification across Tier-2 and Tier-3 towns. Their field network is remarkably dependable.',
    author: 'Director of Procurement & Risk (Placeholder)',
    company: 'Pan-India Logistics Network, Mumbai',
    role: 'Vendor & Workforce Screening',
    metric: '28 States Covered',
  },
  {
    id: 't4',
    quote:
      'Candidate drop-offs dropped dramatically after switching to Orbit Verify’s mobile consent link. Our recruiters track every case live without chasing spreadsheets.',
    author: 'Talent Acquisition Lead (Placeholder)',
    company: 'Healthtech & Diagnostics Group, Delhi NCR',
    role: 'High-Volume Clinical Hiring',
    metric: '92% Candidate Completion',
  },
];

export const HOMEPAGE_FAQS = [
  {
    question: 'How long does background verification take with Orbit Verify?',
    answer:
      'Turnaround time depends on the check type. Digital identity, credit, and database checks complete within 4 to 24 hours. Employment, education, and physical address verifications typically take 3 to 7 business days depending on university, employer, or geographic response windows.',
  },
  {
    question: 'Which documents are needed to initiate an employee BGV check?',
    answer:
      'Typically, we require a signed candidate consent form, government-issued ID (Aadhaar/PAN/Passport), highest degree certificate or marksheet, relieving letters or pay slips from previous employers, and current/permanent address details.',
  },
  {
    question: 'Is candidate consent mandatory before starting verification?',
    answer:
      'Yes. Every Orbit Verify workflow is strictly consent-based. Candidates provide digital or signed authorization before any database query, employer outreach, or field visit is initiated.',
  },
  {
    question: 'Are Orbit Verify reports legally compliant and audit-ready?',
    answer:
      'Yes. Our screening protocols follow lawful data collection, Indian DPDP privacy principles, and fair-hiring guidelines. Every report includes timestamped proof annexures, verification remarks, and clear Red/Amber/Green severity grading.',
  },
  {
    question: 'Do you integrate with existing HRMS and ATS platforms?',
    answer:
      'Yes. You can initiate cases individually, via bulk Excel/CSV upload on the Orbit Verify Client Portal, or connect through REST APIs with popular HRMS and ATS workflows.',
  },
  {
    question: 'Do you support international background checks outside India?',
    answer:
      'Yes. We support cross-border education, employment, global watchlist, sanctions, PEP, and adverse media checks across major international hiring corridors for remote and relocating talent.',
  },
  {
    question: 'How do I track live report status and handle insufficiencies?',
    answer:
      'Clients receive real-time access to the Orbit Verify Portal (orbitverify.in/admin/login) showing case progress, SLA timers, insufficiency alerts, and one-click PDF dossier downloads.',
  },
  {
    question: 'How is pricing structured for startups versus enterprises?',
    answer:
      'We offer modular per-check pricing as well as volume-tiered annual packages (Fresher, Lateral, Executive, and Custom B2B Due Diligence bundles). Request a demo for a tailored rate card.',
  },
];

// TODO: OWNER — Replace leadership placeholders with real executive bios and photos
export const TEAM_PLACEHOLDERS = [
  {
    name: 'Jinendra Jain',
    role: 'Leadership & Client Escalations',
    bio: 'Driving operational excellence, strict SLA governance, and enterprise client partnerships at Orbitouch Outsourcing Pvt. Ltd.',
    email: 'jinendra@orbitverify.com',
  },
  {
    name: 'Verification Operations Lead (Placeholder)',
    role: 'Head of Pan-India Field & Source Operations',
    bio: 'Oversees primary source outreach, university verification desks, and physical address field associates across India.',
    email: 'hello@orbitverify.com',
  },
  {
    name: 'Quality & Compliance Lead (Placeholder)',
    role: 'Principal QA & Data Privacy Officer',
    bio: 'Ensures dual-layer report auditing, discrepancy verification, and privacy-first data handling protocols.',
    email: 'hello@orbitverify.com',
  },
];

export const BLOG_POSTS_PLACEHOLDER = [
  {
    slug: 'moonlighting-and-dual-employment-detection-india-2026',
    title: 'Detecting Dual Employment & Moonlighting in 2026: A Practical HR Playbook',
    category: 'Employee BGV',
    readTime: '6 min read',
    date: 'October 2026',
    excerpt:
      'How modern employment overlap checks, UAN/EPFO insights, and reference forensics protect engineering and remote teams without friction.',
  },
  {
    slug: 'vendor-due-diligence-checklist-indian-enterprises',
    title: 'The 7-Point B2B Vendor Verification Checklist Before Signing Supply Contracts',
    category: 'Business Due Diligence',
    readTime: '8 min read',
    date: 'September 2026',
    excerpt:
      'From GST/MCA registration health and litigation screening to on-ground physical factory inspections—how to prevent supply chain fraud.',
  },
  {
    slug: 'consent-first-background-screening-dpdp-era',
    title: 'Consent-First Background Screening in India’s Data Privacy Era',
    category: 'Compliance & Privacy',
    readTime: '5 min read',
    date: 'August 2026',
    excerpt:
      'Designing candidate verification flows that balance thorough risk mitigation with data minimization and audit transparency.',
  },
  {
    slug: 'executive-screening-c-suite-board-hiring',
    title: 'Why Standard BGV Fails for C-Suite Hires: Inside Executive Due Diligence',
    category: 'Executive Screening',
    readTime: '7 min read',
    date: 'July 2026',
    excerpt:
      'Uncovering undisclosed directorships, regulatory sanctions, conflict of interest, and reputational risks before leadership appointments.',
  },
  {
    slug: 'forged-degrees-shell-employers-red-flags',
    title: 'Spotting Forged Degrees & Shell Experience Letters Before Day One',
    category: 'Fraud Prevention',
    readTime: '5 min read',
    date: 'June 2026',
    excerpt:
      'Real-world red flags our verification analysts use to separate genuine academic and career records from sophisticated diploma mills.',
  },
  {
    slug: 'continuous-background-monitoring-regulated-industries',
    title: 'Why Annual & Continuous Monitoring Matters for BFSI and Healthcare',
    category: 'Continuous Monitoring',
    readTime: '6 min read',
    date: 'May 2026',
    excerpt:
      'Trust is not a one-time checkbox at onboarding. Learn how continuous watchlist and legal monitoring keeps regulated workforces compliant.',
  },
];
