import { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { LOCATIONS } from '@/lib/locations';
import { SERVICES } from '@/lib/services';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Core main pages
  const staticPages: MetadataRoute.Sitemap = [
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
      priority: 0.8,
    },
  ];

  // Location Hub pages (e.g. /interior-designers/thanjavur, /interior-designers/trichy)
  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${SITE.url}/interior-designers/${loc.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Service Hub pages (e.g. /services/modular-kitchens)
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Hyper-targeted Location x Service SEO Pages (e.g. /interior-designers/thanjavur/modular-kitchens)
  const comboPages: MetadataRoute.Sitemap = [];
  for (const loc of LOCATIONS) {
    for (const service of SERVICES) {
      comboPages.push({
        url: `${SITE.url}/interior-designers/${loc.slug}/${service.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.75,
      });
    }
  }

  return [...staticPages, ...locationPages, ...servicePages, ...comboPages];
}

