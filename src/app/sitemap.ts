import { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  
  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE.url}/projects`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
