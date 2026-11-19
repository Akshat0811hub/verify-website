import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  INDUSTRIES_DATA,
  getIndustryBySlug,
} from '@/content/industries';
import { IndustryDetailTemplate } from '@/components/templates/IndustryDetailTemplate';
import { JsonLd } from '@/components/ui/JsonLd';
import { constructMetadata, getBreadcrumbSchema } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES_DATA.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) {
    return constructMetadata({ title: 'Industry Not Found' });
  }

  return constructMetadata({
    title: `BGV for ${industry.shortTitle}`,
    description: industry.oneLiner,
    path: `/industries-1/${industry.slug}`,
    keywords: [
      `${industry.shortTitle} Background Verification`,
      `${industry.shortTitle} BGV India`,
    ],
  });
}

export default async function IndustryDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Industries', url: '/industries' },
    { name: industry.shortTitle, url: `/industries-1/${industry.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <IndustryDetailTemplate industry={industry} />
    </>
  );
}
