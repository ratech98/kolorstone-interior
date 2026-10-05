import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { ContactSection, ProcessSection } from "@/components/Sections";
import { SERVICES, getService } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ service: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const s = getService(service);
  if (!s) return {};
  const path = `/services/${s.slug}`;
  const title = `${s.title} in Thanjavur, Trichy & Nearby`;
  const description = `${s.summary} ${SITE.name} serves Thanjavur, Trichy, Kumbakonam and nearby towns.`;
  return { title, description, alternates: { canonical: path }, openGraph: { title, description, url: path, type: "website" } };
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const s = getService(service);
  if (!s) notFound();
  const path = `/services/${s.slug}`;
  const others = SERVICES.filter((x) => x.slug !== s.slug);

  return (
    <>
      <Nav alwaysSolid />
      <main id="main">
        <header className="phero">
          <p className="crumbs"><Link href="/">Home</Link><span>/</span>Services<span>/</span>{s.name}</p>
          <h1>{`${s.title} in Thanjavur & Trichy`}</h1>
          <p>{s.intro}</p>
          <div className="ctas">
            <Link href="#contact" className="btn fill">Get a Free Consultation</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I would like to know about ${s.name.toLowerCase()}.`)}`} className="btn" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
        </header>

        <section><div className="wrap prose">
          <h2 className="rv">What&apos;s included</h2>
          <ul className="ticks">{s.includes.map((i) => <li className="rv" key={i}>{i}</li>)}</ul>
        </div></section>

        <ProcessSection />
        <Faq faqs={s.faqs} title={`${s.name}: FAQ`} />

        <section className="sec-sand"><div className="wrap">
          <h2 className="rv">{s.name} across our service area</h2>
          <ul className="chips">
            {LOCATIONS.map((l) => <li key={l.slug}><Link href={`/interior-designers/${l.slug}`}>{l.name}</Link></li>)}
          </ul>
          <h3 className="rv" style={{ fontSize: "1.8rem", marginTop: 56 }}>Other services</h3>
          <ul className="chips">
            {others.map((o) => <li key={o.slug}><Link href={`/services/${o.slug}`}>{o.name}</Link></li>)}
          </ul>
        </div></section>

        <ContactSection title={`Planning ${s.name.toLowerCase()}?`} />
      </main>
      <Footer />
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: s.name, path }]),
        serviceSchema(s.title, s.intro, path, LOCATIONS.map((l) => l.name)),
      ]} />
    </>
  );
}
