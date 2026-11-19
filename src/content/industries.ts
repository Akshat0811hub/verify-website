export interface IndustryItem {
  slug: string;
  title: string;
  shortTitle: string;
  oneLiner: string;
  description: string;
  iconName: string;
  accentColor: string;
  riskStats: string;
  keyChallenges: {
    title: string;
    detail: string;
  }[];
  recommendedChecks: string[];
  recommendedServiceSlugs: string[];
  complianceNote: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    slug: 'banking-and-financial-services',
    title: 'Banking, Financial Services & Fintech (BFSI)',
    shortTitle: 'Banking & Financial Services',
    oneLiner:
      'Fiduciary-grade credit, regulatory watchlist, criminal, and employment verification for banks, NBFCs, insurers, and fintechs.',
    description:
      'In banking, insurance, and fintech, every employee handles sensitive financial data, credit decisions, or regulated payment rails. Orbit Verify delivers audit-ready BGV aligned with RBI, SEBI, IRDAI, and global AML screening standards.',
    iconName: 'Landmark',
    accentColor: '#16C15A',
    riskStats: 'Credit, AML Sanctions & 7-Year Employment History Standard',
    keyChallenges: [
      {
        title: 'Fiduciary & Embezzlement Risk',
        detail: 'Unscreened credit distress or undisclosed defaults increase insider fraud exposure in treasury and lending roles.',
      },
      {
        title: 'Strict Regulatory Audit Scrutiny',
        detail: 'RBI and SEBI audits require timestamped consent, identity KYC, and global sanctions clearance for regulated staff.',
      },
      {
        title: 'High-Volume Field Sales Onboarding',
        detail: 'CASA, microfinance, and insurance distribution teams require rapid 24–48hr digital identity and court checks.',
      },
    ],
    recommendedChecks: [
      'PAN, Aadhaar & Passport Biometric Identity Validation',
      'CIBIL / Credit Bureau Financial Integrity Check',
      'Global Sanctions, OFAC, PEP & RBI/SEBI Regulatory Debarment Check',
      '7-Year Employment & Highest Education Primary-Source Check',
      'District, High Court & Economic Offense Litigation Search',
    ],
    recommendedServiceSlugs: [
      'credit-and-gap-verification',
      'global-compliance-checks',
      'criminal-background-checks',
      'education-and-employment-checks',
    ],
    complianceNote:
      'Supports RBI outsourcing guidelines, AML/KYC screening norms, and annual continuous watchlist re-verification.',
    faqs: [
      {
        question: 'Can Orbit Verify handle both branch sales hires and headquarters fintech engineers?',
        answer:
          'Yes. We run 24-hour digital fast-track checks for field relationship managers and comprehensive 7-year history + credit/AML checks for core banking and tech roles.',
      },
      {
        question: 'Do you screen against SEBI and RBI defaulter/enforcement lists?',
        answer:
          'Yes, every BFSI compliance package includes domestic financial regulator orders alongside global OFAC/PEP watchlists.',
      },
    ],
  },
  {
    slug: 'information-technology',
    title: 'Information Technology, SaaS & GCCs',
    shortTitle: 'Information Technology',
    oneLiner:
      'Eliminate moonlighting, shell-company experience fraud, and proxy-interview impersonation across engineering and IT teams.',
    description:
      'India’s IT, SaaS, and Global Capability Centers face sophisticated resume fraud—from shell companies selling fake 4-year experience packages to concurrent dual employment. Orbit Verify protects your codebase and client SLAs.',
    iconName: 'Cpu',
    accentColor: '#22D3EE',
    riskStats: 'Dual-Employment (UAN), Shell-Company Forensics & Global Client Compliance',
    keyChallenges: [
      {
        title: 'Shell-Company Fake Experience Letters',
        detail: 'Candidates submit polished relieving letters and payslips from unverified entities that exist only on paper.',
      },
      {
        title: 'Dual Employment & Moonlighting',
        detail: 'Remote and hybrid engineers holding concurrent full-time roles create severe IP and productivity risks.',
      },
      {
        title: 'Proxy Interviews & Identity Swap',
        detail: 'A different person clears the technical video interview than the individual who joins on Day 1.',
      },
    ],
    recommendedChecks: [
      'UAN / EPFO Employment Timeline & Overlap Verification',
      'Past Employer Corporate Legitimacy (MCA/GST/PF Shell Check)',
      'Biometric Selfie-to-ID Match (Anti-Impersonation)',
      'Bank Statement Salary Inflow Forensics',
      'US/UK/EU Client Compliance (OFAC, Global Criminal, 10-Panel Drug Test)',
    ],
    recommendedServiceSlugs: [
      'education-and-employment-checks',
      'specialized-checks',
      'bank-statement-and-reference-checks',
      'global-compliance-checks',
    ],
    complianceNote:
      'Structured to meet SOC2, ISO 27001 human-resource security controls, and Fortune 500 client MSA screening clauses.',
    faqs: [
      {
        question: 'How do you catch fake IT experience companies that answer verification emails?',
        answer:
          'A replied email is never enough. Our entity forensics desk cross-checks MCA incorporation age, active PF establishment filings, GST returns, domain creation history, and salary bank credits.',
      },
      {
        question: 'Can you run 10-panel drug tests required by US banking/healthcare IT clients?',
        answer:
          'Yes. We coordinate pan-India NABL-accredited 5 to 12-panel drug screenings bundled directly into your IT onboarding flow.',
      },
    ],
  },
  {
    slug: 'healthcare-and-pharmaceuticals',
    title: 'Healthcare, Hospitals & Pharmaceuticals',
    shortTitle: 'Healthcare & Pharmaceuticals',
    oneLiner:
      'Verify medical council registrations, nursing licenses, clinical credentials, and substance screening for patient safety.',
    description:
      'In hospitals, diagnostics, and life sciences, credential authenticity directly impacts patient lives. Orbit Verify authenticates medical and paramedical licenses, academic degrees, criminal histories, and drug screening.',
    iconName: 'HeartPulse',
    accentColor: '#10B981',
    riskStats: 'NMC/State Medical Council, Nursing License & Clinical Safety Screening',
    keyChallenges: [
      {
        title: 'Unlicensed or Suspended Practitioners',
        detail: 'Forged MBBS/nursing registrations or undisclosed disciplinary actions jeopardize patient safety and hospital accreditation.',
      },
      {
        title: 'Home-Healthcare & Diagnostic Field Staff Trust',
        detail: 'Phlebotomists and home-care nurses entering patient homes require rigorous criminal and address verification.',
      },
      {
        title: 'Pharma R&D & Manufacturing Integrity',
        detail: 'GMP facility staff and medical representatives require verified academic credentials and clean regulatory records.',
      },
    ],
    recommendedChecks: [
      'NMC / State Medical Council, Dental, Nursing & Pharmacy License Verification',
      'Medical & Paramedical University Degree Primary-Source Check',
      'Criminal Court & Police Verification for Patient-Facing Staff',
      'Pre-Employment Drug & Occupational Health Screening',
      'OIG / GSA / FDA Healthcare Sanctions Check (for global clinical trials/KPOs)',
    ],
    recommendedServiceSlugs: [
      'specialized-checks',
      'drug-medical-screening',
      'criminal-background-checks',
      'education-and-employment-checks',
    ],
    complianceNote:
      'Aligned with NABH human resource credentialing standards and global clinical research compliance.',
    faqs: [
      {
        question: 'Do you verify state nursing and pharmacy council registrations across India?',
        answer:
          'Yes, our specialized verification desk authenticates registration numbers and good-standing status across central and state medical/nursing/pharmacy councils.',
      },
    ],
  },
  {
    slug: 'telecommunications',
    title: 'Telecommunications & Network Infrastructure',
    shortTitle: 'Telecommunications',
    oneLiner:
      'High-scale screening for telecom engineers, tower contractors, retail KYC agents, and enterprise connectivity teams.',
    description:
      'Telecom operators manage critical national infrastructure and millions of subscriber KYC records. Orbit Verify screens both core engineering teams and distributed field technicians, contractors, and retail POS partners.',
    iconName: 'Radio',
    accentColor: '#3B82F6',
    riskStats: 'Critical Infrastructure Clearance & Distributed Vendor/Field Verification',
    keyChallenges: [
      {
        title: 'Critical Infrastructure & Data Center Access',
        detail: 'Field engineers and third-party contractors accessing switching centers and fiber hubs require strict security clearance.',
      },
      {
        title: 'Retail Store & Subscriber KYC Fraud',
        detail: 'Distributor staff handling customer SIM activation and eKYC need verified identity and clean criminal records.',
      },
      {
        title: 'Large-Scale Contractor & Vendor Networks',
        detail: 'Managing hundreds of regional O&M vendors requires continuous B2B vendor and workforce compliance.',
      },
    ],
    recommendedChecks: [
      'Instant Digital Identity & Geo-Tagged Address Verification',
      'District & High Court Criminal Record Screening',
      'Technical Diploma / Engineering Degree & Past Employment Check',
      'B2B Telecom Vendor & Sub-Contractor KYB Verification',
    ],
    recommendedServiceSlugs: [
      'identity-and-address-verification',
      'criminal-background-checks',
      'vendor-verification-services',
      'operational-verification',
    ],
    complianceNote:
      'Built for DoT security guidelines and high-volume distributed workforce onboarding across all telecom circles.',
    faqs: [
      {
        question: 'Can field technicians in remote telecom circles complete verification via smartphone?',
        answer:
          'Yes. Our mobile-first consent and GPS address capture works across low-bandwidth regions pan-India.',
      },
    ],
  },
  {
    slug: 'education-and-edtech',
    title: 'Education, Universities & EdTech',
    shortTitle: 'Education & EdTech',
    oneLiner:
      'Child-safety criminal screening, faculty academic credential validation, and tutor identity verification.',
    description:
      'Whether you operate a K-12 school chain, a private university, or a global EdTech tutoring platform, trust and student safety are paramount. Orbit Verify authenticates faculty degrees, UGC/NET qualifications, and criminal clearances.',
    iconName: 'GraduationCap',
    accentColor: '#8B5CF6',
    riskStats: 'Faculty Degree Authenticity & Student-Safety Criminal Screening',
    keyChallenges: [
      {
        title: 'Student & Child Safety Compliance',
        detail: 'Teachers, campus staff, bus drivers, and online tutors interacting with minors require zero-tolerance criminal screening.',
      },
      {
        title: 'Counterfeit PhDs & Teaching Credentials',
        detail: 'Unaccredited degrees and inflated publication or teaching histories undermine institutional accreditation.',
      },
      {
        title: 'Rapid EdTech Tutor & Counselor Scaling',
        detail: 'Seasonal admission spikes require fast digital verification for thousands of remote educators and academic counselors.',
      },
    ],
    recommendedChecks: [
      'Comprehensive Criminal Court & Police Record Check',
      'PhD, Postgraduate, B.Ed & UGC-NET Primary-Source Verification',
      'Previous Institution Tenure & Conduct Reference Check',
      'Bus Driver & Campus Support Staff Identity, RTO License & Drug Check',
    ],
    recommendedServiceSlugs: [
      'education-and-employment-checks',
      'criminal-background-checks',
      'identity-and-address-verification',
      'bank-statement-and-reference-checks',
    ],
    complianceNote:
      'Supports CBSE/ICSE/State Board campus safety mandates, NAAC faculty record audits, and global online tutoring standards.',
    faqs: [
      {
        question: 'Do you screen non-teaching school staff like drivers, guards, and attendants?',
        answer:
          'Yes. We offer dedicated blue-collar campus safety packages covering Government ID, physical address visit, RTO driving license validity, and criminal checks.',
      },
    ],
  },
  {
    slug: 'manufacturing-and-logistics',
    title: 'Manufacturing, Industrial & Logistics',
    shortTitle: 'Manufacturing & Logistics',
    oneLiner:
      'Plant workforce verification, commercial driver & fleet checks, warehouse security, and Tier-1/2 supplier audits.',
    description:
      'From automated factory floors to last-mile delivery fleets, Orbit Verify secures your physical operations. We screen blue-collar, contractual, and supervisory staff alongside physical and financial verification of supply chain vendors.',
    iconName: 'Truck',
    accentColor: '#16C15A',
    riskStats: 'Blue-Collar Fast-Track, Driver RTO Checks & On-Site Supplier Audits',
    keyChallenges: [
      {
        title: 'High-Volume Plant & Contract Labor Turnover',
        detail: 'Seasonal manufacturing and 3PL warehouse shifts require rapid identity, address, and criminal checks.',
      },
      {
        title: 'Cargo Theft & Fleet Safety Risks',
        detail: 'Commercial drivers and hub loaders handling high-value freight require RTO license and criminal record clearance.',
      },
      {
        title: 'Phantom Suppliers & Sub-Contracting Fraud',
        detail: 'Raw material and logistics vendors must be physically inspected for real capacity and ESG/labor compliance.',
      },
    ],
    recommendedChecks: [
      'Aadhaar/Voter/PAN Identity & Permanent Address Verification',
      'RTO Commercial Driving Licence & Criminal Court Check',
      'Pre-Employment Substance / Drug & Medical Fitness Test',
      'Physical Factory/Warehouse Inspection & Supply Chain Risk Audit',
    ],
    recommendedServiceSlugs: [
      'identity-and-address-verification',
      'supply-chain-risk',
      'physical-verification',
      'drug-medical-screening',
    ],
    complianceNote:
      'Covers Factory Act compliance records, CLRA contractor audits, and pan-India industrial corridor inspections.',
    faqs: [
      {
        question: 'Can you verify bulk blue-collar and delivery staff within 24 hours?',
        answer:
          'Yes. Our digital identity, driving licence, and court database fast-track clears fleet and warehouse personnel within 4 to 24 hours.',
      },
    ],
  },
  {
    slug: 'real-estate-and-construction',
    title: 'Real Estate, Infrastructure & Construction',
    shortTitle: 'Real Estate & Construction',
    oneLiner:
      'Contractor due diligence, project vendor physical audits, site engineer verification, and RERA/legal risk screening.',
    description:
      'Large infrastructure and real estate developments involve complex contractor ecosystems and high-value procurement. Orbit Verify screens EPC contractors, material suppliers, facility management agencies, and project personnel.',
    iconName: 'Building2',
    accentColor: '#22D3EE',
    riskStats: 'EPC Contractor Financial/Legal DD & Site Workforce Screening',
    keyChallenges: [
      {
        title: 'Sub-Contractor Default & Litigation Exposure',
        detail: 'Onboarding financially distressed or RERA/NCLT-litigated contractors stalls multi-crore project timelines.',
      },
      {
        title: 'Procurement & Material Vendor Collusion',
        detail: 'Related-party shell vendors and inflated manpower claims drain project budgets.',
      },
      {
        title: 'Site Engineer & Facility Staff Credentials',
        detail: 'Civil engineers, safety officers, and gated-community facility staff require verified credentials and clean records.',
      },
    ],
    recommendedChecks: [
      'B2B Contractor Financial, NCLT/RERA Litigation & GST Due Diligence',
      'On-Site Physical Verification of Vendor Plants & Offices',
      'Related-Party & Common-Director Conflict-of-Interest Mapping',
      'Civil/MEP Engineer Degree & Past Project Employment Verification',
    ],
    recommendedServiceSlugs: [
      'vendor-verification-services',
      'financial-due-diligence-service',
      'legal-risk-verification',
      'physical-verification',
    ],
    complianceNote:
      'Supports project governance audits, RERA compliance due diligence, and ISO safety workforce verification.',
    faqs: [
      {
        question: 'Can you verify whether a construction vendor actually owns the machinery and office they claim?',
        answer:
          'Yes. Our physical verification and operational audit teams visit the vendor’s site across India to capture geo-tagged photos of facilities, equipment, and staff.',
      },
    ],
  },
  {
    slug: 'retail-and-ecommerce',
    title: 'Retail, E-Commerce & Quick Commerce',
    shortTitle: 'Retail & E-Commerce',
    oneLiner:
      'Instant onboarding checks for dark-store staff, delivery partners, seller KYB, and corporate merchandising teams.',
    description:
      'Scale your store network, seller marketplace, and delivery fleet without compromising customer safety or inventory loss. Orbit Verify provides API-driven workforce checks and merchant KYB verification.',
    iconName: 'ShoppingBag',
    accentColor: '#3B82F6',
    riskStats: 'API Delivery Partner Checks, Seller KYB & Inventory Shrinkage Prevention',
    keyChallenges: [
      {
        title: 'Last-Mile Customer Safety',
        detail: 'Delivery executives entering residential complexes require verified identity and criminal background checks.',
      },
      {
        title: 'Counterfeit & Shell Marketplace Sellers',
        detail: 'E-commerce platforms must verify merchant GSTIN, bank accounts, and warehouse existence.',
      },
      {
        title: 'Store & Warehouse Shrinkage',
        detail: 'Cashiers and store managers handling inventory and POS terminals need thorough past employment and criminal checks.',
      },
    ],
    recommendedChecks: [
      'Instant Digital ID, Selfie Match & Driving Licence Verification',
      'Criminal Court Record Screening',
      'Marketplace Seller KYB (GSTIN, PAN, Bank Penny-Drop, Physical Shop Check)',
      'Corporate & Procurement Team Employment & Conflict-of-Interest Screening',
    ],
    recommendedServiceSlugs: [
      'digital-background',
      'business-identification',
      'criminal-background-checks',
      'vendor-verification-services',
    ],
    complianceNote:
      'High-throughput API and bulk upload ready for seasonal festive hiring spikes.',
    faqs: [
      {
        question: 'Can we integrate Orbit Verify directly into our rider or seller onboarding app?',
        answer:
          'Yes. Our digital verification modules and KYB checks can be triggered seamlessly via API or bulk portal feeds.',
      },
    ],
  },
];

export const EXTRA_INDUSTRY_MARQUEE = [
  'Banking & Fintech',
  'IT & Cloud SaaS',
  'Global Capability Centers (GCC)',
  'Hospitals & Diagnostics',
  'Pharmaceuticals & Biotech',
  'Telecommunications',
  'EdTech & Universities',
  'Automotive & EV Manufacturing',
  '3PL & Cold-Chain Logistics',
  'Real Estate & EPC Infrastructure',
  'E-Commerce & Quick Commerce',
  'Aviation & Hospitality',
  'Insurance & Wealth Management',
  'Energy, Solar & Utilities',
  'FMCG & Consumer Goods',
  'Media, Gaming & Entertainment',
  'Management Consulting & Legal',
  'Private Equity & Venture Capital',
  'Staffing & RPO Enterprises',
  'Facility Management & Security',
];

export function getIndustryBySlug(slug: string): IndustryItem | undefined {
  return INDUSTRIES_DATA.find((item) => item.slug === slug);
}
