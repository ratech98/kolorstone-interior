import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import AnimatedText from "@/components/AnimatedText";
import JsonLd from "@/components/JsonLd";
import ProjectGallery from "@/components/ProjectGallery";
import { ContactSection, ProcessSection } from "@/components/Sections";
import { LOCATIONS, getLocation } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import { PROJECTS, type Faq as FaqT } from "@/lib/data";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ city: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const l = getLocation(city);
  if (!l) return {};
  const path = `/interior-designers/${l.slug}`;
  const title = `Interior Designers in ${l.name}${l.alt ? ` (${l.alt})` : ""}`;
  const description = `Home interiors, modular kitchens and office interior design in ${l.name}. ${SITE.name} designs and executes end to end, with a clear process and transparent communication.`;
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

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const l = getLocation(city);
  if (!l) notFound();

  const path = `/interior-designers/${l.slug}`;
  const faqs: FaqT[] = [
    {
      q: `Do you provide interior design services in ${l.name}?`,
      a: `Yes. ${SITE.name} designs and executes residential and commercial interiors in ${l.name}${l.alt ? ` (${l.alt})` : ""}, working from our studio in Nanjikottai, Thanjavur.`,
    },
    {
      q: `Which areas around ${l.name} do you cover?`,
      a: `We cover ${l.areas.join(", ")}.`,
    },
    {
      q: `What services can I get in ${l.name}?`,
      a: `${SERVICES.map((s) => s.name).join(", ")}. We can design a single room or an entire project.`,
    },
    {
      q: `How do I start an interior project in ${l.name}?`,
      a: `Call or WhatsApp us on ${SITE.phoneDisplay}, or send the enquiry form. We begin with a consultation and site visit, then move to concept, materials, execution and handover.`,
    },
  ];
  const nearby = l.nearby
    .map((s) => getLocation(s))
    .filter((x): x is NonNullable<typeof x> => !!x);
  const local = PROJECTS.filter((p) => p.place === l.name);
  const projects = [
    ...local,
    ...PROJECTS.filter((p) => p.place !== l.name),
  ].slice(0, 3);

  return (
    <>
      <Nav alwaysSolid />
      <main id="main">
        <header className="phero">
          <AnimatedText>
            <p className="crumbs">
              <Link href="/">Home</Link>
              <span>/</span>Interior designers<span>/</span>
              {l.name}
            </p>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h1>{`Interior Designers in ${l.name}`}</h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p>{l.intro}</p>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <div className="ctas">
              <Link href="#contact" className="btn fill">
                Get a Free Consultation
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I am looking for interior design services in ${l.name}.`)}`}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </AnimatedText>
        </header>

        <section>
          <div className="wrap prose">
            <AnimatedText>
              <h2>
                Interior design for {l.name} homes and businesses
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p>{l.context}</p>
            </AnimatedText>
            <AnimatedText delay={0.3}>
              <p>
                Every project begins with listening: how you live, how you work,
                and what you want the space to feel like. Then we plan, design and
                execute so that you deal with one team from start to finish.
              </p>
            </AnimatedText>
          </div>
        </section>

        <section className="sec-sand">
          <div className="wrap">
            <AnimatedText>
              <h2>What we do in {l.name}</h2>
            </AnimatedText>
            <div className="svc">
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="rv">
                  <h3>{s.name}</h3>
                  <p>{s.summary}</p>
                  <span>Learn more →</span>
                </Link>
              ))}
            </div>
            <AnimatedText>
              <h3 style={{ fontSize: "1.8rem", marginTop: 56 }}>
                Areas we cover
              </h3>
            </AnimatedText>
            <ul className="chips">
              {l.areas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="wrap">
            <AnimatedText>
              <h2>Recent projects</h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="lead">
                A look at how we approach living spaces, kitchens and workplaces.
              </p>
            </AnimatedText>
            <ProjectGallery projects={projects} compact />
          </div>
        </section>

        <ProcessSection />
        <Faq faqs={faqs} title={`Interior design in ${l.name}: FAQ`} />

        <section className="sec-sand">
          <div className="wrap">
            <AnimatedText>
              <h2>Also serving nearby</h2>
            </AnimatedText>
            <ul className="chips">
              {nearby.map((n) => (
                <li key={n.slug}>
                  <Link href={`/interior-designers/${n.slug}`}>
                    Interior Designers in {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactSection
          title={`Planning interiors in ${l.name}?`}
          defaultLocation={l.name}
        />
      </main>
      <Footer />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: `Interior Designers in ${l.name}`, path },
          ]),
          serviceSchema(`Interior design in ${l.name}`, l.intro, path, [
            l.name,
            ...l.areas.slice(0, 3),
          ]),
        ]}
      />
    </>
  );
}
