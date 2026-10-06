import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { businessSchema, websiteSchema } from "@/lib/schema";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14120f",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Interior Designers in Thanjavur, Trichy & Kumbakonam | Kolorstones Home Interiors",
    template: "%s | Kolorstones Home Interiors",
  },
  description: "Kolorstones Home Interiors is a Thanjavur interior design studio for homes, modular kitchens and offices. Serving Thanjavur, Trichy, Kumbakonam, Pattukkottai and nearby towns.",
  applicationName: SITE.name,
  keywords: [
    "interior designers in Thanjavur",
    "interior designers in Trichy",
    "interior designers in Kumbakonam",
    "modular kitchen Thanjavur",
    "home interiors Thanjavur",
    "office interior design Trichy",
    "turnkey interiors Tamil Nadu",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE.name,
    title: "Interior Designers in Thanjavur, Trichy & Kumbakonam | Kolorstones",
    description: "Thoughtfully designed interiors that combine functionality, elegance and your personal style.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Satoshi Font from Fontshare */}
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="font-satoshi antialiased text-[#5E5E5E]">
        <a className="absolute -left-[9999px] top-2 z-[200] bg-primary text-white px-4 py-2 focus:left-2" href="#main">
          Skip to content
        </a>
        {children}
        <Reveal />
        <JsonLd data={[businessSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
