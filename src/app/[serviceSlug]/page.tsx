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

export function generateMetadata({
  params,
}: {
  params: { serviceSlug: string };
}): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
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

export default function ServiceDynamicPage({
  params,
}: {
  params: { serviceSlug: string };
}) {
  const service = getServiceBySlug(params.serviceSlug);

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
