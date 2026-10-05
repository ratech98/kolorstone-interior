import { SITE, abs, fullAddress } from "./site";
import { LOCATIONS } from "./locations";
import type { Faq } from "./data";

const areaServed = () => [
  ...LOCATIONS.map((l) => ({ "@type": "City", name: l.name })),
  { "@type": "AdministrativeArea", name: "Tamil Nadu" },
];

export const businessId = `${SITE.url}/#business`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "ProfessionalService"],
    "@id": businessId,
    name: SITE.name,
    alternateName: SITE.shortName,
    description: SITE.description,
    url: SITE.url,
    logo: abs("/icon"),
    image: abs("/opengraph-image"),
    telephone: SITE.phone,
    ...(SITE.email ? { email: SITE.email } : {}),
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    ...(SITE.geo ? { geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng } } : {}),
    ...(SITE.googleMapsUrl ? { hasMap: SITE.googleMapsUrl } : {}),
    ...(SITE.openingHours.length ? { openingHours: SITE.openingHours } : {}),
    areaServed: areaServed(),
    knowsAbout: ["Interior design", "Modular kitchens", "Residential interiors", "Office interiors", "Commercial interiors", "Turnkey interior execution"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior design services",
      itemListElement: SITE.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
    },
    sameAs: [SITE.instagram, ...(SITE.googleMapsUrl ? [SITE.googleMapsUrl] : [])],
  };
}

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  inLanguage: "en-IN",
  publisher: { "@id": businessId },
});

export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
});

export const serviceSchema = (name: string, description: string, path: string, areas: string[]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: abs(path),
  serviceType: name,
  provider: { "@id": businessId },
  areaServed: areas.map((a) => ({ "@type": "City", name: a })),
});

export { fullAddress };
