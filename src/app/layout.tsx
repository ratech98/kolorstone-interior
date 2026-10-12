import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import SiteNavbar from "@/components/SiteNavbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { businessSchema, websiteSchema } from "@/lib/schema";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14120f",
};

import { getSEO } from "@/lib/seo";

export const metadata: Metadata = getSEO("default");

import Floating from "@/components/Floating";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Satoshi Font from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="font-satoshi antialiased text-[#5E5E5E]">
        <a
          className="absolute -left-[9999px] top-2 z-[200] bg-primary text-white px-4 py-2 focus:left-2"
          href="#main"
        >
          Skip to content
        </a>
        <SiteNavbar />
        {children}
        <Footer />
        <Floating />
        <GoogleAnalytics />
        <JsonLd data={[businessSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
