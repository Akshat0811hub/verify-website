import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/content/config';
import { SERVICES_DATA } from '@/content/services';
import { INDUSTRIES_DATA } from '@/content/industries';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.siteUrl;
  const now = new Date();

  const coreRoutes = [
    '',
    '/industries',
    '/employee-bgv',
    '/business-bgv',
    '/about',
    '/contact',
    '/faq',
    '/blog',
    '/privacy-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const industryRoutes = INDUSTRIES_DATA.map((ind) => ({
    url: `${baseUrl}/industries-1/${ind.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...coreRoutes, ...serviceRoutes, ...industryRoutes];
}
