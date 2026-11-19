import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  SERVICES_DATA,
  getServiceBySlug,
} from '@/content/services';
import { ServiceDetailTemplate } from '@/components/templates/ServiceDetailTemplate';
import { JsonLd } from '@/components/ui/JsonLd';
import {
  constructMetadata,
  getBreadcrumbSchema,
  getServiceSchema,
} from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) {
    return constructMetadata({ title: 'Service Not Found' });
  }

  return constructMetadata({
    title: service.title,
    description: `${service.shortDescription} ${service.tagline}`,
    path: `/${service.slug}`,
    keywords: [
      service.title,
      service.shortTitle,
      service.category === 'employee'
        ? 'Employee BGV India'
        : 'Business Due Diligence India',
    ],
  });
}

export default async function ServiceDynamicPage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    {
      name:
        service.category === 'employee' ? 'Employee BGV' : 'Business BGV',
      url:
        service.category === 'employee' ? '/employee-bgv' : '/business-bgv',
    },
    { name: service.title, url: `/${service.slug}` },
  ]);

  const serviceSchema = getServiceSchema(service);

  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceSchema]} />
      <ServiceDetailTemplate service={service} />
    </>
  );
}
