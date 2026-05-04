import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/mentions-legales',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
