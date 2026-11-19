import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/content/config';

interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}

export function constructMetadata({
  title,
  description = SITE_CONFIG.defaultDescription,
  path = '',
  keywords = [],
}: PageMetadataOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} | Orbit Verify`
    : SITE_CONFIG.defaultTitle;
  const canonicalUrl = `${SITE_CONFIG.siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      'Background Verification India',
      'Employee BGV',
      'Business Due Diligence',
      'Orbit Verify',
      'Orbitouch Outsourcing',
      'Employment Verification Delhi',
      'Criminal Background Check India',
      'Identity Verification API',
      ...keywords,
    ],
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'Orbit Verify',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: '/orbit-verify-logo.jpg',
          width: 1200,
          height: 630,
          alt: 'Orbit Verify — Background Verification You Can Trust',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/orbit-verify-logo.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.companyName,
    legalName: SITE_CONFIG.legalEntity,
    url: SITE_CONFIG.siteUrl,
    logo: `${SITE_CONFIG.siteUrl}/orbit-verify-logo.jpg`,
    slogan: SITE_CONFIG.tagline,
    description: SITE_CONFIG.defaultDescription,
    taxID: SITE_CONFIG.gstin,
    identifier: SITE_CONFIG.cin,
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phones[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '28/6A, 1st Floor, Ashok Nagar, Tilak Nagar',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110018',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.contact.phones[0],
        contactType: 'sales',
        email: SITE_CONFIG.contact.email,
        areaServed: ['IN', 'Global'],
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.contact.phones[1],
        contactType: 'customer support',
        email: SITE_CONFIG.contact.escalationEmail,
        areaServed: ['IN', 'Global'],
      },
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Orbit Verify (Orbitouch Outsourcing Private Limited)',
    image: `${SITE_CONFIG.siteUrl}/orbit-verify-logo.jpg`,
    url: SITE_CONFIG.siteUrl,
    telephone: SITE_CONFIG.contact.phones[0],
    email: SITE_CONFIG.contact.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '28/6A, 1st Floor, Ashok Nagar, Tilak Nagar',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110018',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6366,
      longitude: 77.0965,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '18:30',
      },
    ],
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${SITE_CONFIG.siteUrl}/${service.slug}`,
    serviceType:
      service.category === 'employee'
        ? 'Employee Background Verification'
        : 'Business Background Verification & Due Diligence',
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.companyName,
      legalName: SITE_CONFIG.legalEntity,
      url: SITE_CONFIG.siteUrl,
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Place', name: 'International Markets' },
    ],
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE_CONFIG.siteUrl}${item.url}`,
    })),
  };
}
