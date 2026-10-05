import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Floating from "@/components/Floating";
import JsonLd from "@/components/JsonLd";
import { businessSchema, websiteSchema } from "@/lib/schema";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14120f",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Interior Designers in Thanjavur, Trichy & Kumbakonam | Kolorstones Home Interiors",
    template: "%s | Kolorstones Home Interiors",
  },
  description:
    "Kolorstones Home Interiors is a Thanjavur interior design studio for homes, modular kitchens and offices. Serving Thanjavur, Trichy, Kumbakonam, Pattukkottai and nearby towns.",
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
    description:
      "Thoughtfully designed interiors that combine functionality, elegance and your personal style.",
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
  verification: SITE.gscVerification
    ? { google: SITE.gscVerification }
    : undefined,
  category: "Interior design",
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Thanjavur",
    ...(SITE.geo
      ? {
          "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
          ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
        }
      : {}),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${serif.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* lets the CSS hide .rv elements only when JS is available (no invisible content without JS) */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
        {/* cta butons */}
        {/* <Floating /> */}
        <Reveal />
        <JsonLd data={[businessSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
