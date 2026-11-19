export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'employee' | 'business';
  tagline: string;
  shortDescription: string;
  description: string;
  iconName: string;
  turnaround: string; // Marked as placeholder SLA
  bentoFeatured?: boolean;
  bentoSpan?: 'col-span-1' | 'md:col-span-2';
  carouselIndex?: string;
  whatsChecked: {
    title: string;
    detail: string;
  }[];
  documentsRequired: string[];
  processSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  // ==========================================================================
  // 14 EMPLOYEE BGV SERVICES
  // ==========================================================================
  {
    slug: 'identity-and-address-verification',
    title: 'Identity & Address Verification',
    shortTitle: 'Identity & Address',
    category: 'employee',
    tagline: 'Confirm every hire is who they claim to be—and resides where stated.',
    shortDescription:
      'Instant government ID validation paired with geo-tagged physical or digital address verification.',
    description:
      'Orbit Verify combines real-time government ID authentication (PAN, Aadhaar, Passport, Voter ID, Driving Licence) with geo-tagged field visits and digital utility/postal verification across urban and remote pin codes in India.',
    iconName: 'Fingerprint',
    turnaround: 'Digital • 4–24 hrs | Field • 2–4 days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'md:col-span-2',
    whatsChecked: [
      {
        title: 'Government ID Authenticity',
        detail: 'Cross-verifies PAN, Passport, Voter ID, Driving Licence, and masked Aadhaar checksums.',
      },
      {
        title: 'Current & Permanent Residence',
        detail: 'Confirms stay duration, ownership/tenancy status, and landmark coordinates.',
      },
      {
        title: 'Geo-Tagged Photographic Proof',
        detail: 'Captures doorstep evidence, latitude/longitude coordinates, and neighbor/verifier confirmation.',
      },
      {
        title: 'Biometric & Face Match',
        detail: 'Matches candidate selfie against official ID photography to prevent impersonation.',
      },
    ],
    documentsRequired: [
      'Signed Candidate Consent Form',
      'Copy of PAN Card / Passport / Voter ID / Driving Licence',
      'Complete Current & Permanent Address with Pin Code & Landmark',
      'Recent Utility Bill or Rent Agreement (if applicable)',
    ],
    processSteps: [
      {
        step: '01',
        title: 'ID & Address Capture',
        detail: 'Candidate uploads ID proof and pin-code details via Orbit Verify’s secure link.',
      },
      {
        step: '02',
        title: 'Database & Field Dispatch',
        detail: 'IDs are validated digitally while a field executive or digital geo-link verifies the residence.',
      },
      {
        step: '03',
        title: 'Geo-Coordinate QA Audit',
        detail: 'QA analysts review GPS metadata, photographs, and verifier signatures.',
      },
      {
        step: '04',
        title: 'Verified Dossier Delivery',
        detail: 'Timestamped report with photographic annexures is published to your portal.',
      },
    ],
    faqs: [
      {
        question: 'Can address verification be done digitally if a candidate works remotely?',
        answer:
          'Yes. We offer both physical field agent visits across India and smartphone-based GPS + live photo address verification for remote employees.',
      },
      {
        question: 'Do you cover Tier-3 towns and rural pin codes in India?',
        answer:
          'Yes, our pan-India field associate network covers metro hubs, Tier-2/3 cities, and rural districts across all states and union territories.',
      },
    ],
    relatedSlugs: [
      'education-and-employment-checks',
      'criminal-background-checks',
      'digital-background',
    ],
  },
  {
    slug: 'education-and-employment-checks',
    title: 'Education & Employment Checks',
    shortTitle: 'Education & Employment',
    category: 'employee',
    tagline: 'Validate academic credentials and career history directly from primary sources.',
    shortDescription:
      'Primary-source university registrar checks and past employer HR/tenure verification.',
    description:
      'Eliminate resume inflation, fake diploma mills, and shell company experience letters. Orbit Verify contacts university registrars, examination boards, and previous HR/payroll departments directly to confirm credentials and tenure.',
    iconName: 'GraduationCap',
    turnaround: 'Primary Source • 3–7 days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    whatsChecked: [
      {
        title: 'Degree & University Accreditation',
        detail: 'Confirms roll number, graduation year, course specialization, and UGC/AICTE recognition.',
      },
      {
        title: 'Employment Tenure & Designation',
        detail: 'Verifies exact joining date, exit date, last held title, and nature of separation.',
      },
      {
        title: 'Employer Genuineness Forensics',
        detail: 'Screens past employers against MCA, GST, EPFO, and shell-company watchlists.',
      },
      {
        title: 'Exit Eligibility & Conduct',
        detail: 'Confirms notice period completion, full-and-final settlement status, and rehire eligibility.',
      },
    ],
    documentsRequired: [
      'Final Degree Certificate & Consolidated Marksheet',
      'Relieving Letter / Experience Certificate from Past Employers',
      'Last 3 Months Salary Slips or Appointment Letter',
      'Employee ID & HR Contact Email of Previous Organizations',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Document Ingestion & Forensics',
        detail: 'Certificates and relieving letters undergo preliminary tampering and entity authenticity checks.',
      },
      {
        step: '02',
        title: 'Registrar & HR Outreach',
        detail: 'Official verification requests are routed to university registrars and corporate HR desks.',
      },
      {
        step: '03',
        title: 'Discrepancy Cross-Check',
        detail: 'Dates, titles, and grades are matched line-by-line against candidate claims.',
      },
      {
        step: '04',
        title: 'Evidence-Backed Report',
        detail: 'Written HR/university confirmation proofs are attached to the final BGV dossier.',
      },
    ],
    faqs: [
      {
        question: 'How do you detect fake experience certificates from shell companies?',
        answer:
          'Before contacting an employer, we verify the organization’s corporate registration (MCA/CIN), GST filing activity, domain age, physical presence, and PF registration.',
      },
      {
        question: 'What if a university requires physical demand drafts or sealed applications?',
        answer:
          'Our dedicated university operations desk handles physical registrar submissions, official fee payments, and convocation record checks across India.',
      },
    ],
    relatedSlugs: [
      'professional-background',
      'bank-statement-and-reference-checks',
      'employment-risk',
    ],
  },
  {
    slug: 'credit-and-gap-verification',
    title: 'Credit & Gap Verification',
    shortTitle: 'Credit & Gap Checks',
    category: 'employee',
    tagline: 'Assess financial integrity and verify unexplained career or academic gaps.',
    shortDescription:
      'CIBIL/experian credit health insights and structured investigation of employment or study gaps.',
    description:
      'Essential for banking, fintech, treasury, and fiduciary roles. Orbit Verify assesses candidate financial liabilities via authorized credit bureau pulls and verifies unexplained timeline gaps between degrees or jobs.',
    iconName: 'FileSearch',
    turnaround: 'Credit • 24 hrs | Gap • 2–4 days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    whatsChecked: [
      {
        title: 'Credit Bureau Liability & Defaults',
        detail: 'Evaluates active defaults, written-off accounts, collections, and debt-to-obligation red flags.',
      },
      {
        title: 'Chronological Gap Mapping',
        detail: 'Identifies unreported periods exceeding 60–90 days between education and employment stints.',
      },
      {
        title: 'Gap Activity Validation',
        detail: 'Verifies stated reasons (higher studies, medical recovery, sabbatical, freelance work) with evidence.',
      },
      {
        title: 'Undisclosed Overlap Detection',
        detail: 'Flags concealed terminations or concurrent employment hidden behind claimed career breaks.',
      },
    ],
    documentsRequired: [
      'Candidate PAN Card & Mobile Consent OTP (for Credit Bureau pull)',
      'Complete Chronological Resume with Month/Year Timelines',
      'Supporting Gap Proofs (Course certificates, medical records, or self-declaration)',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Timeline & Consent Audit',
        detail: 'Our system parses candidate career chronology to isolate gaps and capture credit consent.',
      },
      {
        step: '02',
        title: 'Bureau Query & Gap Verification',
        detail: 'Authorized bureau reports are retrieved while analysts validate gap documentation.',
      },
      {
        step: '03',
        title: 'Risk Grading',
        detail: 'Findings are categorized by fiduciary risk relevance without exposing unnecessary personal noise.',
      },
      {
        step: '04',
        title: 'Consolidated Summary',
        detail: 'Clear clearance report delivered to HR and compliance reviewers.',
      },
    ],
    faqs: [
      {
        question: 'Does a soft credit check hurt the candidate’s credit score?',
        answer:
          'No. Employment screening credit inquiries are processed as soft pulls with candidate authorization and do not lower their credit score.',
      },
      {
        question: 'Which roles typically require credit and gap screening?',
        answer:
          'BFSI, accounting, wealth management, enterprise sales, procurement, and senior IT security roles commonly include credit and gap checks.',
      },
    ],
    relatedSlugs: [
      'bank-statement-and-reference-checks',
      'education-and-employment-checks',
      'employment-risk',
    ],
  },
  {
    slug: 'criminal-background-checks',
    title: 'Criminal Background Checks',
    shortTitle: 'Criminal Record Checks',
    category: 'employee',
    tagline: 'Comprehensive litigation, court record, and police verification across jurisdictions.',
    shortDescription:
      'District, High Court, Supreme Court, tribunal, and police record screening across India.',
    description:
      'Protect workplace safety, customer trust, and brand reputation. Orbit Verify conducts multi-jurisdictional court record searches across 3,000+ Indian courts, tribunal databases, and law enforcement records tied to candidate addresses.',
    iconName: 'ShieldAlert',
    turnaround: 'Digital Court • 24–48 hrs | Law Firm/Police • 3–7 days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    whatsChecked: [
      {
        title: 'District & Sessions Courts',
        detail: 'Searches criminal and magistrate court registries across current and permanent jurisdictions.',
      },
      {
        title: 'High Courts & Supreme Court of India',
        detail: 'Screens appellate petitions, criminal writs, and serious offense filings nationwide.',
      },
      {
        title: 'Tribunals & Regulatory Orders',
        detail: 'Covers NCLT, SEBI, DRT, consumer forums, and specialized economic offense records.',
      },
      {
        title: 'Law-Firm Certified Legal Opinion',
        detail: 'Matched records are vetted by legal analysts to eliminate false-positive name collisions.',
      },
    ],
    documentsRequired: [
      'Full Legal Name & Father’s/Spouse’s Name (for accurate disambiguation)',
      'Date of Birth & Government Photo ID',
      '7-Year Address History with Pin Codes',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Jurisdiction Mapping',
        detail: 'Candidate address history is mapped to corresponding district, session, and high court jurisdictions.',
      },
      {
        step: '02',
        title: 'Multi-Court Registry Sweep',
        detail: 'Automated and proprietary legal databases query criminal dockets, FIR references, and judgments.',
      },
      {
        step: '03',
        title: 'Advocate Disambiguation',
        detail: 'Any potential name match is manually verified against parentage, age, and address to remove false positives.',
      },
      {
        step: '04',
        title: 'Certified Clearance Report',
        detail: 'Clear or flagged dossier delivered with case numbers, sections, and court status.',
      },
    ],
    faqs: [
      {
        question: 'How do you avoid false positives for candidates with common Indian names?',
        answer:
          'We cross-match father’s name, residential jurisdiction, age, and FIR/petitioner details, followed by manual legal analyst review before flagging any record.',
      },
      {
        question: 'Can you facilitate official Police Verification Certificates (PCC)?',
        answer:
          'Yes, where regulations or client contracts require police station or commissioner verification in addition to court database checks, we coordinate the process.',
      },
    ],
    relatedSlugs: [
      'identity-and-address-verification',
      'global-compliance-checks',
      'employment-risk',
    ],
  },
  {
    slug: 'bank-statement-and-reference-checks',
    title: 'Bank Statement & Reference Checks',
    shortTitle: 'Bank & Reference Checks',
    category: 'employee',
    tagline: 'Corroborate salary inflows and gather structured insights from former managers.',
    shortDescription:
      'Forensic salary bank statement validation and structured supervisor reference interviews.',
    description:
      'Fake pay slips are effortless to edit—bank inflows are not. Orbit Verify validates salary credits via statement forensics while conducting structured interviews with verified supervisors and peers.',
    iconName: 'Landmark',
    turnaround: '2–4 Business Days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    whatsChecked: [
      {
        title: 'Salary Credit & PDF Forensics',
        detail: 'Detects PDF metadata tampering and confirms net pay inflows match submitted payslips.',
      },
      {
        title: 'Referee Authenticity Verification',
        detail: 'Confirms reference provider’s corporate email domain, LinkedIn footprint, and reporting relationship.',
      },
      {
        title: 'Competency & Integrity Interviews',
        detail: 'Assesses delivery reliability, team collaboration, ethical conduct, and leadership capability.',
      },
      {
        title: 'Compensation & Tenure Alignment',
        detail: 'Cross-checks claimed CTC against actual monthly disbursements.',
      },
    ],
    documentsRequired: [
      'Last 3 to 6 Months Bank Statements Showing Salary Credits',
      'Corresponding Salary Slips / Form 16',
      '2+ Professional References (Name, Designation, Official Corporate Email & Phone)',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Statement Tamper Scan',
        detail: 'Bank PDFs are analyzed for font manipulation, metadata anomalies, and arithmetic consistency.',
      },
      {
        step: '02',
        title: 'Referee Identity Validation',
        detail: 'We verify that listed referees genuinely worked with the candidate at the stated organization.',
      },
      {
        step: '03',
        title: 'Structured Questionnaire',
        detail: 'Analysts conduct phone and email reference checks covering 10+ performance parameters.',
      },
      {
        step: '04',
        title: 'Insight Report',
        detail: 'Financial match status and verbatim reference transcripts are compiled into one report.',
      },
    ],
    faqs: [
      {
        question: 'Can you spot edited PDF bank statements?',
        answer:
          'Yes. Our forensic checks analyze PDF creation streams, font layers, transaction sequencing, and cross-reference employer narration strings.',
      },
      {
        question: 'What if a referee only responds via official corporate email?',
        answer:
          'We support both structured telephonic interviews and verified corporate-domain email questionnaires for audit traceability.',
      },
    ],
    relatedSlugs: [
      'education-and-employment-checks',
      'credit-and-gap-verification',
      'professional-background',
    ],
  },
  {
    slug: 'drug-medical-screening',
    title: 'Drug & Medical Screening',
    shortTitle: 'Drug & Medical',
    category: 'employee',
    tagline: 'Accredited lab drug panels and pre-employment health screening across India.',
    shortDescription:
      '5-panel to 12-panel substance testing and pre-employment medical checkups via NABL-partnered labs.',
    description:
      'Maintain a safe, substance-free, and healthy workplace. Orbit Verify coordinates pre-employment and random drug tests (5, 7, 10, or 12-panel) and occupational health screenings through accredited diagnostic centers pan-India.',
    iconName: 'HeartPulse',
    turnaround: '2–4 Business Days after sample collection (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    whatsChecked: [
      {
        title: 'Multi-Panel Drug Screening (5/7/10/12 Panel)',
        detail: 'Screens for Amphetamines, Cannabinoids (THC), Cocaine, Opiates, Phencyclidine, Barbiturates, and Benzodiazepines.',
      },
      {
        title: 'Chain-of-Custody Sample Integrity',
        detail: 'Strict ID verification and tamper-evident collection protocol at authorized collection centers.',
      },
      {
        title: 'Occupational Fitness & Vision/Audio',
        detail: 'Role-specific physical fitness checks for aviation, manufacturing, logistics, and healthcare staff.',
      },
      {
        title: 'MRO Confirmatory Review',
        detail: 'Non-negative results undergo secondary confirmation to rule out legitimate prescription medication.',
      },
    ],
    documentsRequired: [
      'Signed Medical & Drug Testing Consent Form',
      'Original Government Photo ID at Collection Center',
      'Current Prescription Disclosure (if taking prescribed medication)',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Nearest Lab Scheduling',
        detail: 'Candidate receives an automated voucher and appointment slot at a partnered diagnostic lab.',
      },
      {
        step: '02',
        title: 'Biometric ID & Sample Collection',
        detail: 'Lab technician verifies photo ID and follows strict chain-of-custody collection procedures.',
      },
      {
        step: '03',
        title: 'Immunoassay & GC/MS Testing',
        detail: 'Samples are analyzed with confirmatory lab testing for any preliminary positive indicators.',
      },
      {
        step: '04',
        title: 'Confidential Medical Clearance',
        detail: 'Pass/Fail compliance report is securely uploaded to the employer portal.',
      },
    ],
    faqs: [
      {
        question: 'Can candidates visit a collection center in their own city?',
        answer:
          'Yes, our diagnostic partner footprint spans major cities and Tier-2 hubs across India for convenient candidate walk-ins.',
      },
      {
        question: 'How is candidate medical privacy protected?',
        answer:
          'Results are handled under strict medical confidentiality and shared only with designated compliance personnel on your portal.',
      },
    ],
    relatedSlugs: [
      'specialized-checks',
      'criminal-background-checks',
      'identity-and-address-verification',
    ],
  },
  {
    slug: 'global-compliance-checks',
    title: 'Global & Compliance Checks',
    shortTitle: 'Global & Sanctions',
    category: 'employee',
    tagline: 'Screen against international sanctions, PEP lists, interpol, and global watchlists.',
    shortDescription:
      'OFAC, UN, EU, Interpol, PEP, and global regulatory debarment screening across 200+ territories.',
    description:
      'Hiring for cross-border projects, regulated financial institutions, or international client accounts requires global compliance. Orbit Verify screens candidates against 1,200+ global sanctions, regulatory enforcement, and Politically Exposed Person (PEP) databases.',
    iconName: 'Globe2',
    turnaround: 'Digital • 4–24 hrs (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    whatsChecked: [
      {
        title: 'Global Sanctions & Embargo Lists',
        detail: 'Covers OFAC, UN Consolidated Sanctions, EU, HM Treasury (UK), DFAT, and OSFI lists.',
      },
      {
        title: 'Politically Exposed Persons (PEP)',
        detail: 'Identifies domestic and foreign PEPs, state-owned enterprise officials, and close associates.',
      },
      {
        title: 'Global Law Enforcement & Interpol',
        detail: 'Screens Interpol Red Notices, FBI Most Wanted, NCA, and serious international crime watchlists.',
      },
      {
        title: 'Financial & Healthcare Regulatory Bans',
        detail: 'Checks SEBI, RBI, SEC, FINRA, FCA, OIG, and GSA debarment and enforcement actions.',
      },
    ],
    documentsRequired: [
      'Full Legal Name (including aliases or maiden name)',
      'Passport Copy / National ID',
      'Date of Birth & Nationality Details',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Identity Normalization',
        detail: 'Name transliterations, DOB, and nationality identifiers are prepared for multi-lingual matching.',
      },
      {
        step: '02',
        title: '1,200+ Watchlist Query',
        detail: 'Fuzzy-logic and phonetic algorithms scan global sanctions, PEP, and enforcement databases.',
      },
      {
        step: '03',
        title: 'False-Positive Adjudication',
        detail: 'Compliance specialists verify any hits against secondary identifiers like DOB and passport data.',
      },
      {
        step: '04',
        title: 'Compliance Certificate',
        detail: 'Audit-ready global compliance dossier generated with database coverage logs.',
      },
    ],
    faqs: [
      {
        question: 'Is this check required for Indian IT/BPO teams serving US or UK banks?',
        answer:
          'Yes. Most US, UK, and EU financial and healthcare clients mandate OFAC, OIG/GSA, and global sanctions screening for offshore delivery staff.',
      },
      {
        question: 'Can global compliance checks be run continuously?',
        answer:
          'Yes, you can pair initial onboarding screening with periodic or continuous watchlist monitoring.',
      },
    ],
    relatedSlugs: [
      'criminal-background-checks',
      'compliance-screening',
      'continuous-monitoring',
    ],
  },
  {
    slug: 'specialized-checks',
    title: 'Specialized Checks',
    shortTitle: 'Specialized Checks',
    category: 'employee',
    tagline: 'Role-specific license, registry, directorship, and industry-mandated verifications.',
    shortDescription:
      'Medical council licenses, bar registrations, CA/CS memberships, DIN directorships, and UAN overlap checks.',
    description:
      'Certain hires demand domain-specific verification beyond standard BGV. Orbit Verify offers specialized checks including MCA Directorship (DIN) conflict checks, EPFO/UAN moonlighting detection, and professional license authentication.',
    iconName: 'Sparkles',
    turnaround: '1–5 Business Days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    whatsChecked: [
      {
        title: 'EPFO / UAN Dual-Employment Detection',
        detail: 'Identifies overlapping PF contributions, undisclosed concurrent jobs, and hidden short stints.',
      },
      {
        title: 'MCA Directorship & Conflict of Interest',
        detail: 'Screens Ministry of Corporate Affairs records for active DINs,LLP partnerships, or competing ventures.',
      },
      {
        title: 'Professional License & Guild Standing',
        detail: 'Verifies NMC/MCI medical registrations, Bar Council enrollment, ICAI (CA), ICSI, and nursing licenses.',
      },
      {
        title: 'Commercial Driver & Aviation Credentials',
        detail: 'Authenticates heavy-vehicle RTO permits, badge validity, and specialized technical certifications.',
      },
    ],
    documentsRequired: [
      'Candidate Consent & PAN Card',
      'Professional Registration / License Number',
      'UAN Number (where PF overlap verification is requested)',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Role Risk Profiling',
        detail: 'Select the specialized modules required for the candidate’s regulatory or technical role.',
      },
      {
        step: '02',
        title: 'Statutory Registry Verification',
        detail: 'Direct verification against statutory councils, MCA portals, and authorized government gateways.',
      },
      {
        step: '03',
        title: 'Conflict & Overlap Analysis',
        detail: 'Analysts flag active directorships, suspended licenses, or overlapping contribution timelines.',
      },
      {
        step: '04',
        title: 'Specialized Clearance Report',
        detail: 'Detailed evidence report delivered with registry screenshots and validity dates.',
      },
    ],
    faqs: [
      {
        question: 'How does Orbit Verify help detect moonlighting?',
        answer:
          'Through consent-based employment timeline analysis, UAN service history verification, and MCA directorship checks, we identify concurrent employment overlaps.',
      },
      {
        question: 'Can we bundle a specialized license check with standard employee BGV?',
        answer:
          'Yes. Any specialized module can be added à la carte to your standard onboarding package.',
      },
    ],
    relatedSlugs: [
      'professional-background',
      'employment-risk',
      'custom-bgv',
    ],
  },
  {
    slug: 'executive-screening',
    title: 'Executive Screening',
    shortTitle: 'Executive Screening',
    category: 'employee',
    tagline: 'White-glove C-suite, board, and VP-level leadership due diligence.',
    shortDescription:
      'Deep-dive directorship history, regulatory actions, litigation, media footprint, and board integrity checks.',
    description:
      'A single executive mis-hire can impact valuation, governance, and investor trust. Orbit Verify’s Executive Screening combines discreet primary-source credential validation with corporate governance, civil/criminal litigation, and reputational forensics.',
    iconName: 'Crown',
    turnaround: '5–8 Business Days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    whatsChecked: [
      {
        title: 'Corporate Directorships & Disqualifications',
        detail: 'Complete MCA/ROC history, struck-off company associations, and Section 164 disqualifications.',
      },
      {
        title: 'Regulatory & Financial Enforcement',
        detail: 'SEBI orders, RBI wilful defaulter lists, SFIO probes, NCLT insolvency links, and tax disputes.',
      },
      {
        title: 'Adverse Media & Reputational Forensics',
        detail: 'Investigative review of regional, national, and international press archives and regulatory filings.',
      },
      {
        title: 'Executive Credential & Board Reference Validation',
        detail: 'Discreet verification of global degrees, executive programs, and C-level peer endorsements.',
      },
    ],
    documentsRequired: [
      'Executive Consent Authorization',
      'Executive CV / Board Bio & DIN (if applicable)',
      'PAN / Passport Copy',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Confidential Briefing',
        detail: 'Senior analyst team scopes the jurisdiction, industry sensitivities, and disclosure parameters.',
      },
      {
        step: '02',
        title: 'Corporate & Legal Deep-Dive',
        detail: 'Exhaustive search across corporate registries, courts, tribunals, and global regulatory databases.',
      },
      {
        step: '03',
        title: 'Reputational & Source Synthesis',
        detail: 'Media intelligence and confidential peer references are corroborated by senior researchers.',
      },
      {
        step: '04',
        title: 'Executive Dossier Delivery',
        detail: 'Board-ready executive risk brief with clear governance and reputational commentary.',
      },
    ],
    faqs: [
      {
        question: 'How do you maintain confidentiality during C-suite screening?',
        answer:
          'Executive cases are handled on an encrypted, restricted-access track by senior analysts with discreet outreach protocols.',
      },
      {
        question: 'Is Executive Screening suitable for venture capital portfolio founders?',
        answer:
          'Yes. VCs, PE funds, and boards routinely use this service for pre-investment founder and CXO due diligence.',
      },
    ],
    relatedSlugs: [
      'governance-verification',
      'reputation-and-market',
      'global-compliance-checks',
    ],
  },
  {
    slug: 'digital-background',
    title: 'Digital Background Screening',
    shortTitle: 'Digital BGV & Social',
    category: 'employee',
    tagline: 'API-accelerated digital verification and public adverse footprint analysis.',
    shortDescription:
      'Paperless mobile onboarding, instant digital ID/court checks, and public digital risk screening.',
    description:
      'Built for high-velocity digital hiring. Orbit Verify’s Digital Background Screening uses instant government/database APIs, OCR document parsing, and compliant public adverse media/online risk checks to deliver rapid clearance.',
    iconName: 'Cpu',
    turnaround: 'Digital • 4–24 hrs (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'md:col-span-2',
    whatsChecked: [
      {
        title: 'Instant API Identity & Tax Checks',
        detail: 'Real-time validation of PAN, Driving Licence, Passport MRZ, and voter records.',
      },
      {
        title: 'Digital Address Geo-Verification',
        detail: 'Browser-based live location capture, doorstep photo verification, and IP/device anti-spoofing.',
      },
      {
        title: 'Adverse Media & Public Digital Footprint',
        detail: 'Screens public news and open web sources for hate speech, workplace harassment, or fraud alerts.',
      },
      {
        title: 'Automated Document OCR & Tamper Check',
        detail: 'Instant metadata and pixel analysis on uploaded PDFs and identity images.',
      },
    ],
    documentsRequired: [
      'Smartphone Consent & Live Selfie',
      'Digital Upload of ID, Address & Employment Proofs',
    ],
    processSteps: [
      {
        step: '01',
        title: 'One-Click Candidate Link',
        detail: 'Candidate receives an SMS/WhatsApp/Email link and completes mobile onboarding in under 3 minutes.',
      },
      {
        step: '02',
        title: 'Real-Time API Pipeline',
        detail: 'Identity, watchlist, and court databases run concurrently in seconds.',
      },
      {
        step: '03',
        title: 'Analyst Exception Review',
        detail: 'Any mismatch or adverse flag is routed to a human analyst for verification.',
      },
      {
        step: '04',
        title: 'Same-Day Digital Report',
        detail: 'Instant green-channel clearance or detailed exception report delivered via portal/API.',
      },
    ],
    faqs: [
      {
        question: 'Can candidates complete the entire digital BGV flow on their phone?',
        answer:
          'Yes. No app download is required—candidates complete consent, selfie, and document uploads in a secure mobile browser flow.',
      },
      {
        question: 'Does digital screening respect candidate privacy?',
        answer:
          'Absolutely. We only examine consented identity records and publicly accessible professional/news sources—never private passwords or closed accounts.',
      },
    ],
    relatedSlugs: [
      'identity-and-address-verification',
      'background-verification',
      'custom-bgv',
    ],
  },
  {
    slug: 'background-verification',
    title: 'Comprehensive Background Verification',
    shortTitle: 'Comprehensive BGV',
    category: 'employee',
    tagline: 'End-to-end 360° employee screening from fresher onboarding to lateral hires.',
    shortDescription:
      'Complete all-in-one employee background verification covering identity, address, education, employment, and criminal checks.',
    description:
      'Our flagship 360-degree employee background verification program combines primary-source education and employment checks with identity, address, and criminal court screening under one unified SLA.',
    iconName: 'ShieldCheck',
    turnaround: '24 hrs – 5 Days (Placeholder)',
    whatsChecked: [
      {
        title: 'Identity & Dual-Address Verification',
        detail: 'Government ID validation plus current and permanent address confirmation.',
      },
      {
        title: 'Highest Education Authentication',
        detail: 'Direct verification with the issuing university or examination board.',
      },
      {
        title: 'Multi-Employer Career History',
        detail: 'Verifies last 2 to 3 employers (or 5–7 years of work history) directly with HR.',
      },
      {
        title: 'Criminal Court & Global Database Sweep',
        detail: 'Pan-India litigation and national/international watchlist clearance.',
      },
    ],
    documentsRequired: [
      'Signed BGV Authorization Form',
      'Government ID (PAN/Passport/Aadhaar)',
      'Highest Degree Certificate & Marksheets',
      'Relieving Letters / Pay Slips of Previous Employers',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Case Initiation',
        detail: 'Initiate single or bulk candidate profiles from the Orbit Verify Portal.',
      },
      {
        step: '02',
        title: 'Parallel Verification Tracks',
        detail: 'Digital, field, academic, and HR verification tracks execute simultaneously.',
      },
      {
        step: '03',
        title: 'Dual-Layer Quality Review',
        detail: 'Every annexure and source response is audited before grading.',
      },
      {
        step: '04',
        title: 'Unified Red/Amber/Green Report',
        detail: 'Download a single consolidated PDF report with all proof attachments.',
      },
    ],
    faqs: [
      {
        question: 'Can we receive an interim report before physical/university checks finish?',
        answer:
          'Yes. We release a preliminary digital clearance report within 24–48 hours (ID, criminal database, global watchlists) followed by the final report once primary sources respond.',
      },
      {
        question: 'What do Red, Amber, and Green statuses mean?',
        answer:
          'Green indicates clear verification; Amber highlights minor variations or unable-to-verify entities; Red flags material discrepancies or forged documents.',
      },
    ],
    relatedSlugs: [
      'identity-and-address-verification',
      'education-and-employment-checks',
      'criminal-background-checks',
    ],
  },
  {
    slug: 'professional-background',
    title: 'Professional Background Verification',
    shortTitle: 'Professional Background',
    category: 'employee',
    tagline: 'Deep validation of work history, professional standing, and functional credentials.',
    shortDescription:
      'In-depth career track validation, professional certifications, and supervisory performance verification.',
    description:
      'Designed for experienced lateral hires, consultants, and licensed specialists. Orbit Verify validates multi-company career progression, technical certifications, professional memberships, and workplace conduct.',
    iconName: 'Briefcase',
    turnaround: '3–6 Business Days (Placeholder)',
    whatsChecked: [
      {
        title: 'Multi-Stint Employment Verification',
        detail: 'Confirms tenure, compensation, designation progression, and exit reasons across past employers.',
      },
      {
        title: 'Technical & Industry Certifications',
        detail: 'Validates cloud, cybersecurity, PMP, six-sigma, financial, and clinical certifications.',
      },
      {
        title: 'Supervisory & Peer Reference Audit',
        detail: 'Structured feedback from former reporting managers on capability and integrity.',
      },
      {
        title: 'Employer Entity Legitimacy Check',
        detail: 'Screens every past company for shell-firm indicators or fabricated domains.',
      },
    ],
    documentsRequired: [
      'Updated CV & Consent Form',
      'Relieving / Experience Certificates & Offer Letters',
      'Professional Certification IDs / Credentials',
      'Supervisor Reference Contacts',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Career Matrix Extraction',
        detail: 'Every claimed employer and credential is logged into our verification matrix.',
      },
      {
        step: '02',
        title: 'Entity & HR Verification',
        detail: 'Corporate authenticity is verified before official HR and certification body confirmation.',
      },
      {
        step: '03',
        title: 'Reference & Conduct Check',
        detail: 'Analysts interview verified supervisors regarding role responsibilities and conduct.',
      },
      {
        step: '04',
        title: 'Professional Verification Dossier',
        detail: 'Comprehensive career validation report delivered with primary source proofs.',
      },
    ],
    faqs: [
      {
        question: 'What if a candidate’s previous company has shut down or been acquired?',
        answer:
          'We cross-verify through MCA status records, acquiring company HR desks, bank salary statements, Form 16/26AS, and PF service history.',
      },
    ],
    relatedSlugs: [
      'education-and-employment-checks',
      'bank-statement-and-reference-checks',
      'specialized-checks',
    ],
  },
  {
    slug: 'employment-risk',
    title: 'Employment Risk Assessment',
    shortTitle: 'Employment Risk',
    category: 'employee',
    tagline: 'Proactive detection of dual employment, fraud indicators, and insider risk.',
    shortDescription:
      'Holistic workforce risk scoring combining moonlighting checks, litigation, credit, and integrity signals.',
    description:
      'Prevent insider threats, IP leakage, and payroll fraud before onboarding. Orbit Verify’s Employment Risk Assessment correlates employment overlap signals, undisclosed business interests, litigation records, and document forensics.',
    iconName: 'Radar',
    turnaround: '2–5 Business Days (Placeholder)',
    whatsChecked: [
      {
        title: 'Concurrent Employment & Overlap Forensics',
        detail: 'Detects dual active employment and overlapping tenure claims.',
      },
      {
        title: 'Document Forgery & Template Analysis',
        detail: 'Flags doctored relieving letters, synthetic payslips, and known fake-employer networks.',
      },
      {
        title: 'Civil, Criminal & Regulatory Exposure',
        detail: 'Comprehensive court and regulatory database screening across Indian jurisdictions.',
      },
      {
        title: 'Conflict of Interest & Undisclosed Ventures',
        detail: 'Checks for active directorships or vendor relationships that create conflict of interest.',
      },
    ],
    documentsRequired: [
      'Candidate Authorization & PAN Card',
      'Complete Employment & Education Documents',
      'Address & Identity Proofs',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Multi-Vector Data Ingestion',
        detail: 'Documents, timeline claims, and statutory identifiers are ingested.',
      },
      {
        step: '02',
        title: 'Fraud & Overlap Correlation',
        detail: 'Cross-references employers against our proprietary suspect-entity Watchlist and statutory portals.',
      },
      {
        step: '03',
        title: 'Legal & Source Verification',
        detail: 'Primary HR confirmation and court record checks validate every claim.',
      },
      {
        step: '04',
        title: 'Risk-Scored Report',
        detail: 'Actionable risk matrix delivered with clear severity indicators and evidence.',
      },
    ],
    faqs: [
      {
        question: 'Do you maintain a database of suspect or blacklisted fake-experience companies?',
        answer:
          'Yes. Our verification engine flags known diploma mills and shell companies that exist solely to issue fake experience certificates.',
      },
    ],
    relatedSlugs: [
      'specialized-checks',
      'criminal-background-checks',
      'education-and-employment-checks',
    ],
  },
  {
    slug: 'custom-bgv',
    title: 'Custom BGV Packages',
    shortTitle: 'Custom BGV Packages',
    category: 'employee',
    tagline: 'Tailor-made screening workflows mapped to your exact hiring tiers and industry regulations.',
    shortDescription:
      'Modular BGV matrices for gig workers, freshers, lateral hires, contractors, and regulated executives.',
    description:
      'One screening template rarely fits an entire enterprise. Orbit Verify architects custom BGV packages by role criticality, geography, and regulatory regime—complete with custom SLA rules and severity grading matrices.',
    iconName: 'Sliders',
    turnaround: 'Configurable per Role Tier (Placeholder)',
    whatsChecked: [
      {
        title: 'Tiered Role Packages (Fresher / Lateral / CXO)',
        detail: 'Configure 3-check fast tracks for entry roles or 10-check deep dives for leadership.',
      },
      {
        title: 'Custom Discrepancy Grading Matrix',
        detail: 'Define your own Red/Amber/Green thresholds for tenure variance, address gaps, or credit rules.',
      },
      {
        title: 'White-Labeled Candidate Experience',
        detail: 'Co-branded consent portals and customized document checklists per business unit.',
      },
      {
        title: 'Flexible Portal & API Delivery',
        detail: 'Automated webhook callbacks, batch Excel imports, and consolidated MIS billing reports.',
      },
    ],
    documentsRequired: [
      'Configured dynamically based on your selected verification modules',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Policy & SLA Workshop',
        detail: 'We map your industry compliance needs and role hierarchies into modular BGV packages.',
      },
      {
        step: '02',
        title: 'Portal & Rule Configuration',
        detail: 'Your custom packages, escalation matrix, and severity rules go live on the Orbit Verify Portal.',
      },
      {
        step: '03',
        title: 'Automated Execution',
        detail: 'Recruiters select the role package in one click and track live SLA progress.',
      },
      {
        step: '04',
        title: 'Quarterly Governance Reviews',
        detail: 'Receive turnaround analytics, discrepancy trends, and audit reports.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can a custom BGV program go live for our company?',
        answer:
          'Standard custom packages and client portal accounts are configured within 24 to 48 hours of onboarding.',
      },
    ],
    relatedSlugs: [
      'background-verification',
      'digital-background',
      'specialized-checks',
    ],
  },

  // ==========================================================================
  // 15 BUSINESS BGV (B2B DUE DILIGENCE) SERVICES
  // ==========================================================================
  {
    slug: 'financial-due-diligence-service',
    title: 'Financial Due Diligence Service',
    shortTitle: 'Financial Due Diligence',
    category: 'business',
    tagline: 'Verify balance sheet health, statutory tax compliance, and hidden credit exposure of B2B partners.',
    shortDescription:
      'MCA financial filings, GST compliance health, credit ratings, charge analysis, and solvency verification.',
    description:
      'Before onboarding a critical supplier, distributor, or strategic partner, verify their true financial standing. Orbit Verify analyzes audited MCA financial statements, GST return filing discipline, banking charges, and credit default histories.',
    iconName: 'TrendingUp',
    turnaround: '3–6 Business Days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'md:col-span-2',
    carouselIndex: '01',
    whatsChecked: [
      {
        title: 'MCA Financial Statement & Ratio Analysis',
        detail: 'Reviews multi-year revenue trends, net worth, working capital, and debt-to-equity health.',
      },
      {
        title: 'GST Filing Discipline & Tax Compliance',
        detail: 'Verifies GSTIN status, GSTR-1/3B filing regularity, and tax defaulter flags.',
      },
      {
        title: 'Open Charges & Asset Encumbrance',
        detail: 'Analyzes registered lender charges, hypothecations, and debt obligations.',
      },
      {
        title: 'Insolvency, Wilful Defaulter & Suit-Filed Checks',
        detail: 'Screens IBBI/NCLT insolvency proceedings, RBI defaulter lists, and CIBIL commercial alerts.',
      },
    ],
    documentsRequired: [
      'Target Company Name, CIN / LLPIN, and GSTIN',
      'Company PAN (optional for deeper bureau checks)',
      'Audited Financials or Bank Solvency Certificate (if counterparty-shared)',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Entity Identifier Lock',
        detail: 'CIN, GSTIN, and PAN identifiers are validated against official statutory registries.',
      },
      {
        step: '02',
        title: 'Statutory & Financial Extraction',
        detail: 'Balance sheets, charge registries, GST trails, and tribunal filings are compiled.',
      },
      {
        step: '03',
        title: 'Forensic Analyst Review',
        detail: 'Financial analysts assess liquidity risks, sudden revenue anomalies, and debt stress.',
      },
      {
        step: '04',
        title: 'Financial Risk Dossier',
        detail: 'Executive financial score and detailed annexures delivered for procurement or investment committees.',
      },
    ],
    faqs: [
      {
        question: 'Can you perform financial due diligence on private limited companies and LLPs in India?',
        answer:
          'Yes. We extract and analyze official ROC/MCA filings, charge records, and GST compliance data for all registered Indian corporate entities.',
      },
    ],
    relatedSlugs: [
      'vendor-verification-services',
      'legal-risk-verification',
      'business-identification',
    ],
  },
  {
    slug: 'cyber-and-data-security',
    title: 'Cyber & Data Security Assessment',
    shortTitle: 'Cyber & Data Security',
    category: 'business',
    tagline: 'Evaluate third-party vendor cyber posture, data handling hygiene, and breach exposure.',
    shortDescription:
      'Third-party vendor security posture assessment, dark-web breach exposure, and data compliance readiness.',
    description:
      'Your supply chain is only as secure as the vendors accessing your systems and customer data. Orbit Verify evaluates third-party cyber hygiene, external attack surface indicators, historical data breach exposure, and security governance alignment.',
    iconName: 'Lock',
    turnaround: '3–5 Business Days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    carouselIndex: '02',
    whatsChecked: [
      {
        title: 'External Domain & Infrastructure Hygiene',
        detail: 'Assesses SSL/TLS configuration, DNS security (SPF/DMARC), and exposed service ports.',
      },
      {
        title: 'Historical Data Breach & Leak Intelligence',
        detail: 'Checks whether vendor corporate domains appear in known credential leaks or breach advisories.',
      },
      {
        title: 'Information Security Policy & Governance Audit',
        detail: 'Reviews vendor security certifications, access control policies, and incident response readiness.',
      },
      {
        title: 'DPDP & Third-Party Data Processing Alignment',
        detail: 'Evaluates sub-processor transparency, encryption standards, and data retention controls.',
      },
    ],
    documentsRequired: [
      'Target Company Legal Name & Primary Web/Email Domains',
      'Completed Vendor Security Questionnaire & Policy Artefacts (for deep-dive assessments)',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Digital Footprint Mapping',
        detail: 'Vendor domains, digital assets, and data processing scopes are cataloged.',
      },
      {
        step: '02',
        title: 'Passive Surface & Breach Scan',
        detail: 'Non-intrusive external security checks and breach database queries are executed.',
      },
      {
        step: '03',
        title: 'Governance & Control Review',
        detail: 'Analysts audit submitted security documentation and data protection safeguards.',
      },
      {
        step: '04',
        title: 'Cyber Risk Scorecard',
        detail: 'Clear remediation recommendations and risk tiering delivered to your InfoSec and procurement teams.',
      },
    ],
    faqs: [
      {
        question: 'Does the external cyber hygiene scan disrupt the vendor’s servers?',
        answer:
          'No. Our external posture checks use passive OSINT, DNS/TLS inspection, and threat intelligence feeds combined with structured governance review.',
      },
    ],
    relatedSlugs: [
      'vendor-verification-services',
      'compliance-screening',
      'operational-verification',
    ],
  },
  {
    slug: 'sustainibility-risk',
    title: 'Sustainability & ESG Risk Verification',
    shortTitle: 'Sustainability Risk',
    category: 'business',
    tagline: 'Verify environmental compliance, labor standards, and ESG claims across your value chain.',
    shortDescription:
      'Environmental tribunal checks, pollution board compliance, labor welfare verification, and ESG risk screening.',
    description:
      'Prevent greenwashing and environmental liabilities in your supply chain. Orbit Verify audits supplier environmental permits, National Green Tribunal (NGT) orders, labor law compliance, and sustainability disclosures.',
    iconName: 'Leaf',
    turnaround: '4–7 Business Days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    carouselIndex: '03',
    whatsChecked: [
      {
        title: 'Environmental & Pollution Control Clearances',
        detail: 'Verifies CPCB/SPCB consents to operate, hazardous waste authorizations, and NGT violation records.',
      },
      {
        title: 'Labor Welfare & Statutory Compliance',
        detail: 'Audits EPFO/ESIC remittance regularity, factory license status, and child/forced labor prohibitions.',
      },
      {
        title: 'ESG Adverse Media & Community Disputes',
        detail: 'Screens local and national press for environmental penalties, strikes, or safety violations.',
      },
      {
        title: 'Sustainability Claim Corroboration',
        detail: 'Validates third-party sustainability certifications and ethical sourcing declarations.',
      },
    ],
    documentsRequired: [
      'Supplier Legal Entity Details & Factory Addresses',
      'Environmental Clearances / Factory Licenses / ESG Disclosures',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Facility & Regulatory Scoping',
        detail: 'Manufacturing sites and applicable environmental/labor jurisdictions are mapped.',
      },
      {
        step: '02',
        title: 'Tribunal & Statutory Audit',
        detail: 'Searches NGT dockets, pollution board notices, and labor statutory filings.',
      },
      {
        step: '03',
        title: 'On-Ground & Media Corroboration',
        detail: 'Optional physical site inspection and adverse media screening validate on-ground reality.',
      },
      {
        step: '04',
        title: 'ESG Due Diligence Report',
        detail: 'Structured ESG risk rating aligned with BRSR and global supply chain governance norms.',
      },
    ],
    faqs: [
      {
        question: 'Why is ESG verification critical for Indian enterprises today?',
        answer:
          'SEBI’s BRSR Core mandates and global export supply chain laws require enterprises to verify environmental and labor compliance across value-chain partners.',
      },
    ],
    relatedSlugs: [
      'supply-chain-risk',
      'physical-verification',
      'compliance-screening',
    ],
  },
  {
    slug: 'supply-chain-risk',
    title: 'Supply Chain Risk Verification',
    shortTitle: 'Supply Chain Risk',
    category: 'business',
    tagline: 'De-risk Tier-1 and Tier-2 suppliers before operational disruptions hit your business.',
    shortDescription:
      'End-to-end supplier continuity, capacity verification, concentration risk, and compliance screening.',
    description:
      'Single-point supplier failures, ghost warehouses, and sanctioned sub-contractors can halt production overnight. Orbit Verify provides multi-dimensional supply chain risk assessments combining financial, operational, legal, and physical audits.',
    iconName: 'Truck',
    turnaround: '4–7 Business Days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    carouselIndex: '04',
    whatsChecked: [
      {
        title: 'Supplier Legitimacy & Ownership Transparency',
        detail: 'Uncovers beneficial owners, related-party rings, and undisclosed sub-contracting dependencies.',
      },
      {
        title: 'Production & Logistics Capacity Verification',
        detail: 'On-site inspection of plant machinery, warehousing space, inventory, and workforce strength.',
      },
      {
        title: 'Financial & Litigation Continuity Risk',
        detail: 'Flags suppliers facing insolvency petitions, tax seizures, or credit freezes.',
      },
      {
        title: 'Trade Sanctions & Cross-Border Compliance',
        detail: 'Screens logistics partners and exporters against trade embargo and restricted entity lists.',
      },
    ],
    documentsRequired: [
      'Supplier Onboarding Packet (CIN, GSTIN, Factory/Warehouse Addresses)',
      'Trade Licenses & Capacity Declarations',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Supplier Tier Mapping',
        detail: 'Criticality and geographic locations of the supplier’s facilities are cataloged.',
      },
      {
        step: '02',
        title: 'Registry & Financial Sweep',
        detail: 'Corporate, tax, credit, and court records are evaluated for distress signals.',
      },
      {
        step: '03',
        title: 'Physical Facility Audit',
        detail: 'Field inspectors verify actual operational capability and geo-tagged infrastructure.',
      },
      {
        step: '04',
        title: 'Supply Chain Resilience Report',
        detail: 'Comprehensive vendor risk score with actionable mitigation advice.',
      },
    ],
    faqs: [
      {
        question: 'Can you inspect supplier factories and warehouses in industrial hubs across India?',
        answer:
          'Yes. Our field verification network covers industrial corridors across Delhi NCR, Maharashtra, Gujarat, Tamil Nadu, Karnataka, Telangana, and pan-India.',
      },
    ],
    relatedSlugs: [
      'vendor-verification-services',
      'physical-verification',
      'operational-verification',
    ],
  },
  {
    slug: 'vendor-verification-services',
    title: 'Vendor Verification Services',
    shortTitle: 'Vendor Verification',
    category: 'business',
    tagline: 'Stop procurement fraud, shell vendors, and conflict-of-interest billing before onboarding.',
    shortDescription:
      'Complete KYB (Know Your Business), GST/PAN/bank validation, promoter checks, and site verification.',
    description:
      'Protect your procurement and accounts payable teams from phantom vendors and insider collusion. Orbit Verify validates vendor legal existence, bank account ownership, GST active status, promoter criminal/litigation records, and physical office premises.',
    iconName: 'Building2',
    turnaround: 'Digital KYB • 24 hrs | Full With Site Visit • 3–5 days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    carouselIndex: '05',
    whatsChecked: [
      {
        title: 'Corporate & Tax Identity (CIN, GSTIN, PAN, MSME)',
        detail: 'Confirms active legal status, business constitution, and GST return filing compliance.',
      },
      {
        title: 'Bank Account & Cancelled Cheque Penny-Drop',
        detail: 'Verifies beneficiary account name match to prevent invoice redirection fraud.',
      },
      {
        title: 'Promoter & Employee Conflict-of-Interest Check',
        detail: 'Cross-checks vendor directors/partners against insider watchlists and related parties.',
      },
      {
        title: 'Geo-Tagged Physical Premises Verification',
        detail: 'Confirms the vendor operates from a legitimate commercial facility, not a bogus address.',
      },
    ],
    documentsRequired: [
      'Vendor GST Certificate, PAN Card & Certificate of Incorporation / Partnership Deed',
      'Cancelled Cheque or Bank Details',
      'Office / Warehouse Address Details',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Vendor KYB Ingestion',
        detail: 'Upload vendor documents or invite the vendor to submit credentials via secure portal link.',
      },
      {
        step: '02',
        title: 'Statutory & Bank Verification',
        detail: 'Automated checks confirm MCA, GST, PAN, and bank beneficiary ownership.',
      },
      {
        step: '03',
        title: 'Litigation & On-Site Inspection',
        detail: 'Court records and physical commercial premises are verified with photographic evidence.',
      },
      {
        step: '04',
        title: 'Procurement Approval Certificate',
        detail: 'Audit-ready KYB report issued for ERP vendor master activation.',
      },
    ],
    faqs: [
      {
        question: 'Can you screen Proprietorships and Partnerships as well as Private Limited firms?',
        answer:
          'Yes. For non-MCA entities, we verify GST registrations, Udyam/MSME certificates, Shop & Establishment licenses, proprietor PAN, and physical premises.',
      },
    ],
    relatedSlugs: [
      'business-identification',
      'physical-verification',
      'financial-due-diligence-service',
    ],
  },
  {
    slug: 'legal-risk-verification',
    title: 'Legal Risk Verification',
    shortTitle: 'Legal Risk Verification',
    category: 'business',
    tagline: 'Uncover corporate litigation, insolvency petitions, tax disputes, and regulatory prosecutions.',
    shortDescription:
      'Comprehensive corporate court searches across NCLT, High Courts, District Courts, DRT, and tribunals.',
    description:
      'Enterprises and investors need complete visibility into a counterparty’s legal liabilities. Orbit Verify searches civil suits, criminal prosecutions, recovery actions, insolvency filings, and arbitration disputes involving the target company and its promoters.',
    iconName: 'Scale',
    turnaround: '3–5 Business Days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    carouselIndex: '06',
    whatsChecked: [
      {
        title: 'NCLT / IBBI Insolvency & Winding-Up Petitions',
        detail: 'Flags active or historical operational/financial creditor insolvency proceedings.',
      },
      {
        title: 'Debt Recovery Tribunals (DRT) & SARFAESI Actions',
        detail: 'Identifies lender recovery suits, asset attachment notices, and loan default litigation.',
      },
      {
        title: 'Civil, Commercial & Criminal Court Dockets',
        detail: 'Searches District Courts, High Courts, and the Supreme Court of India for active disputes.',
      },
      {
        title: 'Tax, Labor & Regulatory Tribunals',
        detail: 'Covers ITAT, CESTAT, Consumer Commissions, RERA, and Competition Commission orders.',
      },
    ],
    documentsRequired: [
      'Target Company Legal Name & CIN/LLPIN',
      'Registered & Corporate Office Addresses',
      'Names of Key Promoters / Directors',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Entity & Director Mapping',
        detail: 'Company name variations, subsidiaries, and promoter names are compiled.',
      },
      {
        step: '02',
        title: 'Pan-India Court & Tribunal Sweep',
        detail: '3,000+ courts and specialized tribunal registries are queried.',
      },
      {
        step: '03',
        title: 'Legal Severity Analysis',
        detail: 'Legal analysts review case orders to classify material financial or operational exposure.',
      },
      {
        step: '04',
        title: 'Litigation Exposure Dossier',
        detail: 'Structured legal risk report with case numbers, forums, petitioner/respondent roles, and status.',
      },
    ],
    faqs: [
      {
        question: 'Do you cover both cases filed AGAINST the company and cases filed BY the company?',
        answer:
          'Yes. Our legal risk reports clearly separate respondent/defendant liabilities from petitioner/plaintiff recovery actions.',
      },
    ],
    relatedSlugs: [
      'legal-verification',
      'financial-due-diligence-service',
      'governance-verification',
    ],
  },
  {
    slug: 'physical-verification',
    title: 'Physical Business Verification',
    shortTitle: 'Physical Verification',
    category: 'business',
    tagline: 'Boots-on-the-ground inspection of corporate offices, factories, warehouses, and retail outlets.',
    shortDescription:
      'Geo-tagged on-site business inspections with live photography, signage proof, and operational validation.',
    description:
      'Digital certificates alone cannot prove a business actually operates on the ground. Orbit Verify dispatches trained field executives across India to physically inspect offices, plants, and warehouses—delivering timestamped GPS photos and occupancy proof.',
    iconName: 'MapPin',
    turnaround: '2–5 Business Days Pan-India (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    carouselIndex: '07',
    whatsChecked: [
      {
        title: 'Existence & Signage Confirmation',
        detail: 'Captures external building facade, company name board, reception, and interior workspace.',
      },
      {
        title: 'Operational Activity & Headcount Estimate',
        detail: 'Documents active staff count, machinery/workstations, and inventory movement.',
      },
      {
        title: 'Ownership, Lease & Neighbor Corroboration',
        detail: 'Verifies tenure at the premise through building management and adjacent businesses.',
      },
      {
        title: 'Tamper-Proof GPS & Timestamp Telemetry',
        detail: 'Every photograph embeds verified latitude, longitude, and date-time watermarks.',
      },
    ],
    documentsRequired: [
      'Entity Name & Complete Site Address with Pin Code',
      'Site Contact Person Name & Phone (for scheduled inside visits; mystery exterior visits also supported)',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Pin-Code Field Assignment',
        detail: 'Case is routed to the nearest verified Orbit Verify field specialist.',
      },
      {
        step: '02',
        title: 'On-Site Inspection & Geo-Capture',
        detail: 'Field executive visits the premise, captures required photo angles, and interviews site staff.',
      },
      {
        step: '03',
        title: 'GPS & Evidence QA',
        detail: 'Central QA desk verifies coordinate accuracy against the claimed address.',
      },
      {
        step: '04',
        title: 'Visual Site Audit Report',
        detail: 'High-resolution photo report with location map and verifier remarks delivered.',
      },
    ],
    faqs: [
      {
        question: 'Can you perform unannounced / discreet site checks to spot shell offices?',
        answer:
          'Yes. Depending on your requirement, we conduct either scheduled inside facility audits or discreet exterior/building-directory existence checks.',
      },
    ],
    relatedSlugs: [
      'vendor-verification-services',
      'operational-verification',
      'supply-chain-risk',
    ],
  },
  {
    slug: 'reputation-and-market',
    title: 'Reputation & Market Intelligence',
    shortTitle: 'Reputation & Market',
    category: 'business',
    tagline: 'Uncover market perception, adverse media, customer disputes, and ethical controversies.',
    shortDescription:
      'Investigative media screening, industry reputation intelligence, and stakeholder sentiment analysis.',
    description:
      'Statutory filings rarely tell the whole story until a crisis breaks. Orbit Verify conducts structured adverse media intelligence, market reputation inquiries, and regulatory controversy checks on target companies and promoters.',
    iconName: 'Newspaper',
    turnaround: '3–6 Business Days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'col-span-1',
    carouselIndex: '08',
    whatsChecked: [
      {
        title: 'Multi-Lingual Adverse Media Screening',
        detail: 'Scans national, regional, and trade publications for fraud, corruption, scam, or default reports.',
      },
      {
        title: 'Customer, Employee & Market Sentiment',
        detail: 'Analyzes recurring consumer court complaints, labor unrest, and delivery default patterns.',
      },
      {
        title: 'Promoter Political & Regulatory Exposure',
        detail: 'Identifies PEP connections, enforcement raids (ED/IT/CBI), and cartel investigations.',
      },
      {
        title: 'Industry Peer & Trade Reference Checks',
        detail: 'Structured feedback on payment discipline, ethical standing, and contract reliability.',
      },
    ],
    documentsRequired: [
      'Target Company Name, Brand Names & Key Promoter Names',
      'Registered Location & Industry Sector',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Entity & Key-Person Profiling',
        detail: 'All corporate aliases, brand trade names, and key principals are mapped.',
      },
      {
        step: '02',
        title: 'Archive & OSINT Investigation',
        detail: 'Deep media archives, regulatory bulletins, and public dispute records are analyzed.',
      },
      {
        step: '03',
        title: 'Credibility & Context Filtering',
        detail: 'Analysts separate verified investigative reports from unverified noise.',
      },
      {
        step: '04',
        title: 'Reputational Risk Brief',
        detail: 'Executive summary with archived source links, severity ratings, and timeline context.',
      },
    ],
    faqs: [
      {
        question: 'When should a business commission a Reputation & Market check?',
        answer:
          'It is strongly recommended before joint ventures, M&A transactions, franchise appointments, exclusive distributorships, or high-value vendor awards.',
      },
    ],
    relatedSlugs: [
      'executive-screening',
      'governance-verification',
      'legal-risk-verification',
    ],
  },
  {
    slug: 'operational-verification',
    title: 'Operational Verification',
    shortTitle: 'Operational Verification',
    category: 'business',
    tagline: 'Validate whether a business has the real workforce, machinery, and processes to deliver.',
    shortDescription:
      'Workforce strength via EPFO trends, ISO/quality process audits, and delivery capability validation.',
    description:
      'Many bidders look impressive on tender PDFs while subcontracting 100% of the work. Orbit Verify validates a counterparty’s genuine operational capacity using EPFO employee contribution trends, asset verification, and process audits.',
    iconName: 'Activity',
    turnaround: '3–6 Business Days (Placeholder)',
    bentoFeatured: true,
    bentoSpan: 'md:col-span-2',
    carouselIndex: '09',
    whatsChecked: [
      {
        title: 'Verified Workforce Size (EPFO / ESIC Trends)',
        detail: 'Tracks actual active headcount and monthly PF remittance continuity over the last 12–24 months.',
      },
      {
        title: 'Infrastructure & Equipment Capability',
        detail: 'Verifies physical plant, technical workstations, fleet assets, or warehouse throughput.',
      },
      {
        title: 'Quality Certifications & Operating Licenses',
        detail: 'Authenticates ISO certificates, FSSAI, drug licenses, and factory permits with issuing bodies.',
      },
      {
        title: 'Client Track-Record & Work Order Validation',
        detail: 'Verifies past performance credentials and completion certificates submitted in RFPs.',
      },
    ],
    documentsRequired: [
      'Company CIN / GSTIN / EPFO Establishment Code',
      'Submitted RFP Capability Deck, Licenses & Past Work Orders',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Capability Claim Benchmarking',
        detail: 'Vendor RFP claims (headcount, plants, certifications) are extracted for verification.',
      },
      {
        step: '02',
        title: 'Statutory & Certification Audit',
        detail: 'EPFO filings, license registries, and accreditation bodies are cross-checked.',
      },
      {
        step: '03',
        title: 'On-Site Operational Inspection',
        detail: 'Field auditors verify live operations against stated capacity.',
      },
      {
        step: '04',
        title: 'Operational Readiness Report',
        detail: 'Gap analysis highlighting verified capacity vs. claimed capacity.',
      },
    ],
    faqs: [
      {
        question: 'How do you verify a company’s real employee count?',
        answer:
          'We cross-verify official EPFO establishment contribution filings along with on-site headcount observations to expose inflated manpower claims.',
      },
    ],
    relatedSlugs: [
      'physical-verification',
      'supply-chain-risk',
      'vendor-verification-services',
    ],
  },
  {
    slug: 'compliance-screening',
    title: 'Corporate Compliance Screening',
    shortTitle: 'Compliance Screening',
    category: 'business',
    tagline: 'Screen entities and beneficial owners against AML, sanctions, PEP, and regulatory blacklists.',
    shortDescription:
      'B2B AML/CFT screening, UBO sanctions checks, debarment lists, and statutory filing compliance.',
    description:
      'Meet strict AML, KYB, and anti-bribery compliance requirements. Orbit Verify screens corporate entities, subsidiaries, and Ultimate Beneficial Owners (UBOs) against domestic and international sanctions, regulatory blacklists, and statutory defaults.',
    iconName: 'Shield',
    turnaround: 'Digital • 4–24 hrs (Placeholder)',
    carouselIndex: '10',
    whatsChecked: [
      {
        title: 'Global Sanctions & Trade Watchlists',
        detail: 'Screens entities and UBOs against OFAC, UN, EU, UK HMT, and export control lists.',
      },
      {
        title: 'Anti-Bribery, Corruption & Debarment Lists',
        detail: 'Checks World Bank debarred firms, public procurement blacklists, and enforcement notices.',
      },
      {
        title: 'PEP & State-Ownership Links',
        detail: 'Identifies politically exposed shareholders, directors, and government links.',
      },
      {
        title: 'Indian Statutory Default Screening',
        detail: 'Flags MCA struck-off entities, director disqualifications, and SEBI/RBI orders.',
      },
    ],
    documentsRequired: [
      'Entity Legal Name, Registration Number (CIN/Tax ID) & Country',
      'List of Directors & Ultimate Beneficial Owners (UBOs)',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Entity & UBO Unwrapping',
        detail: 'Corporate shareholding and board members are identified for individual + entity screening.',
      },
      {
        step: '02',
        title: 'Multi-Jurisdiction Watchlist Scan',
        detail: 'Automated screening across 1,200+ sanctions, PEP, and regulatory lists.',
      },
      {
        step: '03',
        title: 'Compliance Analyst Adjudication',
        detail: 'Every match is reviewed to eliminate false hits and document true regulatory exposure.',
      },
      {
        step: '04',
        title: 'KYB Compliance Certificate',
        detail: 'Timestamped AML/compliance report ready for regulator or internal audit review.',
      },
    ],
    faqs: [
      {
        question: 'Do you screen both the company and its directors/UBOs?',
        answer:
          'Yes. Sanctions and corruption risk often sit at the beneficial owner level, so we screen both the corporate entity and key principals.',
      },
    ],
    relatedSlugs: [
      'global-compliance-checks',
      'governance-verification',
      'continuous-monitoring',
    ],
  },
  {
    slug: 'legal-verification',
    title: 'Corporate Legal Verification',
    shortTitle: 'Legal Verification',
    category: 'business',
    tagline: 'Authenticate corporate incorporation deeds, statutory licenses, and legal standing.',
    shortDescription:
      'Verification of MOA/AOA, incorporation certificates, trade permits, and authorized signatory powers.',
    description:
      'Ensure every contract you sign is backed by a legally valid entity and properly authorized signatories. Orbit Verify validates corporate charters, board resolutions, statutory operating permits, and good-standing records.',
    iconName: 'FileCheck2',
    turnaround: '2–4 Business Days (Placeholder)',
    whatsChecked: [
      {
        title: 'Charter & Incorporation Authenticity',
        detail: 'Verifies Certificate of Incorporation, MOA, AOA, LLP Agreements, and partnership deeds.',
      },
      {
        title: 'Active Legal Standing & ROC Compliance',
        detail: 'Confirms the entity is active, compliant with annual returns, and not under strike-off.',
      },
      {
        title: 'Statutory & Sectoral Licenses',
        detail: 'Authenticates Import-Export Code (IEC), FSSAI, Shop & Establishment, PSARA, or factory licenses.',
      },
      {
        title: 'Signatory & Board Authorization',
        detail: 'Verifies current listed directors/partners authorized to bind the company legally.',
      },
    ],
    documentsRequired: [
      'Certificate of Incorporation / MOA / AOA / Partnership Deed',
      'Sectoral Licenses & GST/PAN Certificates',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Document & Registry Intake',
        detail: 'Submitted legal formation documents and license numbers are logged.',
      },
      {
        step: '02',
        title: 'Primary Registry Cross-Check',
        detail: 'Verified directly against MCA, DGFT, state labor portals, and issuing authorities.',
      },
      {
        step: '03',
        title: 'Signatory & Validity Audit',
        detail: 'Confirms license expiry dates and current authorized director roster.',
      },
      {
        step: '04',
        title: 'Legal Standing Certificate',
        detail: 'Verified corporate legal standing dossier delivered.',
      },
    ],
    faqs: [
      {
        question: 'How does Legal Verification differ from Legal Risk Verification?',
        answer:
          'Legal Verification confirms valid incorporation, charter documents, licenses, and signatory authority, whereas Legal Risk Verification focuses on court litigation, tribunals, and insolvency disputes.',
      },
    ],
    relatedSlugs: [
      'legal-risk-verification',
      'business-identification',
      'governance-verification',
    ],
  },
  {
    slug: 'governance-verification',
    title: 'Corporate Governance Verification',
    shortTitle: 'Governance Verification',
    category: 'business',
    tagline: 'Examine board composition, related-party networks, auditor changes, and governance integrity.',
    shortDescription:
      'Board history, director cross-linkages, shell-network mapping, and auditor resignation checks.',
    description:
      'Strong governance is the clearest predictor of counterparty reliability. Orbit Verify maps board tenure, frequent director/auditor churn, undisclosed related-party webs, and statutory governance lapses.',
    iconName: 'Network',
    turnaround: '3–6 Business Days (Placeholder)',
    carouselIndex: '11',
    whatsChecked: [
      {
        title: 'Board Composition & Director Disqualification',
        detail: 'Audits current and past directors, DIN status, and tenure stability.',
      },
      {
        title: 'Related-Party & Common-Director Network Map',
        detail: 'Uncovers sibling entities, shared registered addresses, and circular ownership webs.',
      },
      {
        title: 'Auditor Changes & Qualification Remarks',
        detail: 'Flags abrupt statutory auditor resignations and adverse audit qualifications.',
      },
      {
        title: 'ROC Filing Punctuality & Governance Hygiene',
        detail: 'Reviews AGM compliance, delayed annual filings, and compounding offenses.',
      },
    ],
    documentsRequired: [
      'Target Company Name & CIN / LLPIN',
      'Director DIN List / Shareholding Pattern (if available)',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Board & Shareholding Extraction',
        detail: 'Historical and current signatory and shareholding filings are retrieved from ROC.',
      },
      {
        step: '02',
        title: 'Network & Cross-Directorship Graph',
        detail: 'Analysts map every associated company linked to the promoters and directors.',
      },
      {
        step: '03',
        title: 'Governance Red-Flag Audit',
        detail: 'Evaluates auditor remarks, struck-off sibling companies, and filing defaults.',
      },
      {
        step: '04',
        title: 'Governance Intelligence Dossier',
        detail: 'Visual entity linkage summary and governance risk rating delivered.',
      },
    ],
    faqs: [
      {
        question: 'Can governance verification reveal if two competing bidders in a tender are secretly owned by the same family/promoters?',
        answer:
          'Yes! Mapping common directors, common registered addresses, and historical shareholding transfers frequently exposes bid-rigging and related-party collusion.',
      },
    ],
    relatedSlugs: [
      'financial-due-diligence-service',
      'executive-screening',
      'business-identification',
    ],
  },
  {
    slug: 'business-identification',
    title: 'Business Identification (KYB)',
    shortTitle: 'Business Identification',
    category: 'business',
    tagline: 'Rapid Know Your Business (KYB) verification for merchant, partner, and B2B onboarding.',
    shortDescription:
      'Instant verification of CIN, GSTIN, PAN, Udyam MSME, IEC, and authorized directors.',
    description:
      'Onboard B2B customers, merchants, and channel partners in minutes without compliance bottlenecks. Orbit Verify’s Business Identification validates official registration identifiers, tax IDs, and principal identities in real time.',
    iconName: 'BadgeCheck',
    turnaround: 'Instant API – 24 hrs (Placeholder)',
    carouselIndex: '12',
    whatsChecked: [
      {
        title: 'MCA / ROC Entity Master Profile',
        detail: 'Validates CIN/LLPIN, date of incorporation, paid-up capital, and registered address.',
      },
      {
        title: 'GSTIN, PAN & TAN Authentication',
        detail: 'Confirms active tax registration, business trade name, and state jurisdiction.',
      },
      {
        title: 'MSME / Udyam & Trade Identifiers',
        detail: 'Verifies Udyam enterprise classification, IEC code, and FSSAI registration numbers.',
      },
      {
        title: 'Director / Partner KYC Validation',
        detail: 'Authenticates DIN status and identity of authorized signatories.',
      },
    ],
    documentsRequired: [
      'Business GSTIN / CIN / PAN',
      'Authorized Signatory ID Proof',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Identifier Input',
        detail: 'Enter GSTIN, CIN, or PAN via portal, bulk upload, or KYB API.',
      },
      {
        step: '02',
        title: 'Multi-Registry Fetch',
        detail: 'Official registration data is pulled and cross-matched for consistency.',
      },
      {
        step: '03',
        title: 'Name & Status Verification',
        detail: 'Confirms legal entity status is Active and names match across tax and bank records.',
      },
      {
        step: '04',
        title: 'Verified KYB Profile',
        detail: 'Structured JSON or PDF KYB verification certificate generated instantly.',
      },
    ],
    faqs: [
      {
        question: 'Is Business Identification available for bulk merchant onboarding?',
        answer:
          'Yes. Fintechs, marketplaces, and enterprise procurement teams can verify hundreds of businesses via bulk upload or API integration.',
      },
    ],
    relatedSlugs: [
      'vendor-verification-services',
      'legal-verification',
      'compliance-screening',
    ],
  },
  {
    slug: 'continuous-monitoring',
    title: 'Continuous Background & Vendor Monitoring',
    shortTitle: 'Continuous Monitoring',
    category: 'business',
    tagline: 'Real-time alerts when an employee or vendor’s risk profile changes after onboarding.',
    shortDescription:
      'Ongoing monitoring for new litigation, sanctions hits, GST defaults, insolvency, and license revocations.',
    description:
      'Risk does not end on Day 1 of onboarding. Orbit Verify’s Continuous Monitoring watches your critical workforce and strategic vendor roster—alerting your risk desk when new court filings, regulatory sanctions, GST suspensions, or insolvency petitions appear.',
    iconName: 'Activity',
    turnaround: 'Automated Periodic / Real-Time Alerts (Placeholder)',
    carouselIndex: '13',
    whatsChecked: [
      {
        title: 'Ongoing Sanctions, PEP & Watchlist Deltas',
        detail: 'Detects newly added enforcement actions or global watchlist designations.',
      },
      {
        title: 'New Litigation & Insolvency Alerts',
        detail: 'Monitors court dockets and NCLT filings for newly registered disputes.',
      },
      {
        title: 'Vendor GST Cancellation & Statutory Default Watch',
        detail: 'Flags suo-motu GST cancellations, return non-filings, or MCA status downgrades.',
      },
      {
        title: 'Scheduled Annual Re-Verification Waves',
        detail: 'Automated annual or semi-annual criminal and license re-checks for regulated employees.',
      },
    ],
    documentsRequired: [
      'Active Roster of Onboarded Employees or Vendors (with existing consent/KYB identifiers)',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Roster Enrollment',
        detail: 'Enroll critical employees or Tier-1 vendors into continuous or quarterly monitoring cohorts.',
      },
      {
        step: '02',
        title: 'Automated Delta Scanning',
        detail: 'Watchlists, statutory statuses, and court registries are monitored on your chosen cadence.',
      },
      {
        step: '03',
        title: 'Analyst Verification of Triggers',
        detail: 'Any new alert is human-verified to eliminate false positives before escalating.',
      },
      {
        step: '04',
        title: 'Actionable Risk Alert',
        detail: 'Receive instant portal and email notifications with full supporting evidence.',
      },
    ],
    faqs: [
      {
        question: 'Which teams benefit most from Continuous Monitoring?',
        answer:
          'Regulated financial institutions, healthcare networks, defense/infra contractors, and procurement teams managing critical single-source suppliers.',
      },
    ],
    relatedSlugs: [
      'compliance-screening',
      'global-compliance-checks',
      'supply-chain-risk',
    ],
  },
  {
    slug: 'financial-due-diligence',
    title: 'Corporate Financial Due Diligence',
    shortTitle: 'Corporate Financial DD',
    category: 'business',
    tagline: 'Deep financial integrity & solvency verification for M&A, joint ventures, and enterprise contracts.',
    shortDescription:
      'In-depth corporate financial health, debt obligations, tax compliance, and credit risk due diligence.',
    description:
      'Our comprehensive Corporate Financial Due Diligence program provides decision-makers with clear, evidence-backed analysis of a counterparty’s financial statements, credit profile, statutory liabilities, and solvency indicators.',
    iconName: 'BarChart3',
    turnaround: '3–6 Business Days (Placeholder)',
    whatsChecked: [
      {
        title: 'Multi-Year Balance Sheet & Cash-Flow Health',
        detail: 'Evaluates revenue quality, profitability ratios, net worth erosion, and working capital cycles.',
      },
      {
        title: 'Secured & Unsecured Debt Encumbrance',
        detail: 'Reviews ROC charge registries, lender satisfaction filings, and credit bureau exposure.',
      },
      {
        title: 'Indirect & Direct Tax Compliance Signals',
        detail: 'Checks GST return regularity, tax litigation orders, and statutory payment defaults.',
      },
      {
        title: 'Insolvency & Default Early-Warning Signals',
        detail: 'Screens NCLT petitions, DRT recovery suits, and wilful defaulter registries.',
      },
    ],
    documentsRequired: [
      'Target Company Legal Name, CIN/LLPIN, and GSTIN',
      'Financial Disclosures (if provided during transaction)',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Entity & Transaction Scoping',
        detail: 'Confirm corporate registration identifiers and due diligence depth.',
      },
      {
        step: '02',
        title: 'Statutory & Bureau Data Retrieval',
        detail: 'Compile MCA filings, charge schedules, GST health, and tribunal records.',
      },
      {
        step: '03',
        title: 'Forensic Financial Assessment',
        detail: 'Analysts evaluate leverage risk, auditor qualifications, and contingent liabilities.',
      },
      {
        step: '04',
        title: 'Board-Ready Financial Dossier',
        detail: 'Comprehensive financial due diligence report with clear risk ratings.',
      },
    ],
    faqs: [
      {
        question: 'Is this route maintained for legacy links alongside /financial-due-diligence-service?',
        answer:
          'Yes. Both /financial-due-diligence and /financial-due-diligence-service are fully supported with complete schema and due diligence workflows.',
      },
    ],
    relatedSlugs: [
      'financial-due-diligence-service',
      'legal-risk-verification',
      'governance-verification',
    ],
  },
];

export const EMPLOYEE_SERVICES = SERVICES_DATA.filter(
  (s) => s.category === 'employee'
);

export const BUSINESS_SERVICES = SERVICES_DATA.filter(
  (s) => s.category === 'business'
);

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
