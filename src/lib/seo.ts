import { Metadata } from "next";
import { SITE } from "./site";

export const seoData = new Map<string, Metadata>([
  [
    "default",
    {
      metadataBase: new URL(SITE.url),
      title: {
        default: "Interior Designers in Thanjavur, Trichy & Kumbakonam | Kolorstones Home Interiors",
        template: "%s | Kolorstones Home Interiors",
      },
      description: SITE.description,
      keywords: [
        "interior designers in Thanjavur",
        "interior designers in Trichy",
        "interior designers in Kumbakonam",
        "modular kitchen Thanjavur",
        "home interiors Thanjavur",
        "office interior design Trichy",
        "turnkey interiors Tamil Nadu",
      ],
      authors: [{ name: SITE.name, url: SITE.url }],
      creator: SITE.name,
      alternates: { canonical: "/" },
      openGraph: {
        type: "website",
        locale: "en_IN",
        url: "/",
        siteName: SITE.name,
        title: "Interior Designers in Thanjavur, Trichy & Kumbakonam | Kolorstones",
        description: SITE.description,
        images: [
          {
            url: "/logo.png",
            width: 1200,
            height: 630,
            alt: "Kolorstones Home Interiors Logo",
          },
        ],
      },
      twitter: { card: "summary_large_image" },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
      verification: SITE.gscVerification ? { google: SITE.gscVerification } : undefined,
      category: "Interior design",
    },
  ],
  [
    "about",
    {
      title: "About Us",
      description: "Learn about Kolorstones Home Interiors. We are a premium interior design studio in Thanjavur specializing in modern and functional living spaces.",
    }
  ],
  [
    "projects",
    {
      title: "Our Portfolio",
      description: "Browse our diverse interior design portfolio featuring modern residential, commercial, and luxury spaces designed by Kolorstones Home Interiors.",
    }
  ],
  [
    "contact",
    {
      title: "Contact Us",
      description: "Get in touch with Kolorstones Home Interiors. Visit our studio in Thanjavur or contact us for a consultation regarding your next interior design project.",
    }
  ],
]);

export function getSEO(key: string): Metadata {
  const data = seoData.get(key) || seoData.get("default");
  if (!data) {
    throw new Error(`SEO data not found for key: ${key}`);
  }
  return data;
}
