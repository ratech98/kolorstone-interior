import type { MetadataRoute } from "next";
import { SITE, abs } from "@/lib/site";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.lastUpdated);
  return [
    { url: abs("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    ...LOCATIONS.map((l) => ({
      url: abs(`/interior-designers/${l.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: ["thanjavur", "trichy", "kumbakonam"].includes(l.slug)
        ? 0.9
        : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: abs(`/services/${s.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
