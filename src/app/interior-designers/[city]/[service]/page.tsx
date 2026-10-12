import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedText from "@/components/AnimatedText";
import JsonLd from "@/components/JsonLd";
import { LOCATIONS, getLocation } from "@/lib/locations";
import { SERVICES, getService } from "@/lib/services";
import { SITE, unsplash } from "@/lib/site";
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

// Curated high-resolution service images mapped by service slug
const SERVICE_IMAGES: Record<
  string,
  { src: string; alt: string; caption: string }[]
> = {
  "bedroom-interiors": [
    {
      src: unsplash("photo-1616594039964-ae9021a400a0", 900),
      alt: "Luxury master bedroom interior with upholstered headboard & ambient lighting",
      caption: "Master Bedroom Suite",
    },
    {
      src: unsplash("photo-1505693416388-ac5ce068fe85", 800),
      alt: "Minimalist wardrobe joinery and warm bedroom interior",
      caption: "Custom Wardrobes & Lighting",
    },
    {
      src: unsplash("photo-1540518614846-7eded433c457", 800),
      alt: "Contemporary bedroom interior with integrated side tables",
      caption: "Ergonomic Layout & Storage",
    },
  ],
  "modular-kitchens": [
    {
      src: unsplash("photo-1556909114-f6e7ad7d3136", 900),
      alt: "Modern handle-less modular kitchen with quartz countertop",
      caption: "Handle-less Island Kitchen",
    },
    {
      src: unsplash("photo-1600585152220-90363fe7e115", 800),
      alt: "Clean modular kitchen storage cabinets and pantry unit",
      caption: "Pantry & Soft-close Storage",
    },
    {
      src: unsplash("photo-1565538810643-b5bdb714032a", 800),
      alt: "Ergonomic modular kitchen layout and chimney area",
      caption: "BWR Waterproof Cabinetry",
    },
  ],
  "living-room-interiors": [
    {
      src: unsplash("photo-1600210492486-724fe5c67fb0", 900),
      alt: "Spacious modern living room with fluted TV wall paneling",
      caption: "Designer TV Unit & Foyer",
    },
    {
      src: unsplash("photo-1618221195710-dd6b41faaea6", 800),
      alt: "Warm living room interior with contemporary false ceiling cove lighting",
      caption: "Cove Lighting & Seating",
    },
    {
      src: unsplash("photo-1600585154340-be6161a56a0c", 800),
      alt: "Open-plan living and lounge interior styling",
      caption: "Custom Joinery & Partitions",
    },
  ],
  "residential-interiors": [
    {
      src: unsplash("photo-1618219908412-a29a1bb7b86e", 900),
      alt: "Comprehensive residential interior styling and woodwork",
      caption: "Full Home Interior Concept",
    },
    {
      src: unsplash("photo-1600607687939-ce8a6c25118c", 800),
      alt: "Luxury residential living and dining execution",
      caption: "Living & Dining Integration",
    },
    {
      src: unsplash("photo-1600566752355-35792bedcfea", 800),
      alt: "Custom joinery and interior detailing for modern homes",
      caption: "Bespoke Joinery & Finishes",
    },
  ],
  "office-commercial-interiors": [
    {
      src: unsplash("photo-1497366216548-37526070297c", 900),
      alt: "Modern commercial office workspace and executive cabin",
      caption: "Executive Suite & Workspace",
    },
    {
      src: unsplash("photo-1524758631624-e2822e304c36", 800),
      alt: "Acoustic ceiling and collaborative corporate meeting room",
      caption: "Conference & Meeting Hub",
    },
    {
      src: unsplash("photo-1497366811353-6870744d04b2", 800),
      alt: "Commercial reception and branded interior architecture",
      caption: "Reception & Brand Experience",
    },
  ],
  "turnkey-interior-execution": [
    {
      src: unsplash("photo-1600585154340-be6161a56a0c", 900),
      alt: "End-to-end turnkey interior execution with precision craftsmanship",
      caption: "Turnkey Execution & Supervision",
    },
    {
      src: unsplash("photo-1617806118233-18e1de247200", 800),
      alt: "Crafted interior finishes delivered ready to move in",
      caption: "Premium Materials & Handover",
    },
    {
      src: unsplash("photo-1616594039964-ae9021a400a0", 800),
      alt: "Seamless interior coordination from 3D designs to site handover",
      caption: "3D Design to Final Reality",
    },
  ],
};

const DEFAULT_IMAGES = [
  {
    src: unsplash("photo-1600210492486-724fe5c67fb0", 900),
    alt: "Premium interior design and execution by Kolorstones",
    caption: "Bespoke Interior Craftsmanship",
  },
  {
    src: unsplash("photo-1616594039964-ae9021a400a0", 800),
    alt: "Custom residential interior design",
    caption: "Tailored Living Spaces",
  },
  {
    src: unsplash("photo-1556909114-f6e7ad7d3136", 800),
    alt: "Precision modular interiors",
    caption: "High-grade Materials & Finish",
  },
];

export default async function CityServiceSeoPage({ params }: Props) {
  const { city, service } = await params;
  const l = getLocation(city);
  const s = getService(service);

  if (!l || !s) notFound();

  const path = `/interior-designers/${l.slug}/${s.slug}`;
  const whatsappMessage = encodeURIComponent(
    `Hi, I am looking for ${s.name.toLowerCase()} in ${l.name}.`,
  );

  const images = SERVICE_IMAGES[s.slug] || DEFAULT_IMAGES;

  return (
    <>
      <main
        id="main"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#f3f3f3] font-satoshi px-4 sm:px-6 pt-32 pb-20 sm:pb-24"
      >
        {/* Soft ambient glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-[#3F6A80]/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#3F6A80]/10 blur-[110px]" />

        <section className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-5">
          <AnimatedText animateOnLoad={true}>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-[#5E5E5E]"
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

          <AnimatedText animateOnLoad={true} delay={0.08}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3F6A80]/10 text-[#3F6A80] text-xs font-semibold tracking-wider uppercase">
              <span>{l.name}</span>
              <span className="w-1 h-1 rounded-full bg-[#3F6A80]/40" />
              <span>{s.name}</span>
            </div>
          </AnimatedText>

          <AnimatedText animateOnLoad={true} delay={0.14}>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-serif text-[#14120f] leading-tight max-w-4xl">
              {s.name} in {l.name}
            </h1>
          </AnimatedText>

          <AnimatedText animateOnLoad={true} delay={0.18}>
            <p className="text-base sm:text-lg text-[#5E5E5E] leading-relaxed max-w-2xl mx-auto">
              {s.intro}
            </p>
          </AnimatedText>

          <AnimatedText animateOnLoad={true} delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1 w-full sm:w-auto">
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

          {/* Service-Specific Image Showcase (Elegant visual cards for the service) */}
          <AnimatedText animateOnLoad={true} delay={0.24}>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 my-2 text-left">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md border border-black/5 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img
                      src={img.src}
                      alt={`${s.name} in ${l.name} - ${img.alt}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <span className="absolute bottom-2.5 left-3 text-[11px] font-medium tracking-wide text-white/95 uppercase bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
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
