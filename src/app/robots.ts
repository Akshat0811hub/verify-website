import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/content/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
  };
}
