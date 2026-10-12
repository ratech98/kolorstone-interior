import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedText from "@/components/AnimatedText";
import JsonLd from "@/components/JsonLd";
import { LOCATIONS, getLocation } from "@/lib/locations";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ city: string; service: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const l of LOCATIONS) {
    for (const s of SERVICES) {
      params.push({ city: l.slug, service: s.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, service } = await params;
  const l = getLocation(city);
  const s = getService(service);
  if (!l || !s) return {};

  const path = `/interior-designers/${l.slug}/${s.slug}`;
  const title = `${s.name} in ${l.name} | Best Designers & Execution`;
  const description = `Looking for top-quality ${s.name.toLowerCase()} in ${l.name}? Kolorstones delivers premium 3D design, custom woodwork, BWR waterproof ply & turnkey execution in ${l.name} and surrounding areas.`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE.shortName}`,
      description,
      url: path,
      type: "website",
    },
  };
}

export default async function CityServiceSeoPage({ params }: Props) {
  const { city, service } = await params;
  const l = getLocation(city);
  const s = getService(service);

  if (!l || !s) notFound();

  const path = `/interior-designers/${l.slug}/${s.slug}`;
  const whatsappMessage = encodeURIComponent(
    `Hi, I am looking for ${s.name.toLowerCase()} in ${l.name}.`,
  );

  return (
    <>
      <main
        id="main"
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#f3f3f3] font-satoshi px-6 pt-36 pb-24"
      >
        {/* Soft ambient glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-[#3F6A80]/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-[#3F6A80]/10 blur-[110px]" />

        <section className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <AnimatedText animateOnLoad={true}>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center justify-center gap-2 text-sm text-[#5E5E5E]"
            >
              <Link href="/" className="hover:text-[#3F6A80] transition-colors">
                Home
              </Link>
              <span className="text-[#5E5E5E]/40">/</span>
              <Link
                href={`/interior-designers/${l.slug}`}
                className="hover:text-[#3F6A80] transition-colors"
              >
                {l.name}
              </Link>
              <span className="text-[#5E5E5E]/40">/</span>
              <span className="text-[#14120f] font-medium">{s.name}</span>
            </nav>
          </AnimatedText>

          <AnimatedText animateOnLoad={true} delay={0.1}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#3F6A80]/10 text-[#3F6A80] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              {l.name}
            </div>
          </AnimatedText>

          <AnimatedText animateOnLoad={true} delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#14120f] leading-tight">
              {s.name} in {l.name}
            </h1>
          </AnimatedText>

          <AnimatedText animateOnLoad={true} delay={0.2}>
            <p className="text-base sm:text-lg text-[#5E5E5E] leading-relaxed max-w-2xl">
              {s.intro}
            </p>
          </AnimatedText>

          <AnimatedText animateOnLoad={true} delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#3F6A80] hover:bg-[#2e4d5d] text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Our Studio
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#14120f] border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-sm transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </AnimatedText>
        </section>
      </main>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: `Interior Designers in ${l.name}`,
              path: `/interior-designers/${l.slug}`,
            },
            { name: `${s.name} in ${l.name}`, path },
          ]),
          serviceSchema(
            `${s.name} in ${l.name}`,
            `Custom ${s.name.toLowerCase()} design and execution services in ${l.name} by ${SITE.name}.`,
            path,
            [l.name, ...l.areas.slice(0, 3)],
          ),
        ]}
      />
    </>
  );
}
