import Link from "next/link";
import Image from "next/image";
import { WHY, STEPS, INSTA } from "@/lib/data";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { SITE, unsplash } from "@/lib/site";
import ContactForm from "./ContactForm";

export function ServicesSection() {
  return (
    <section id="services" className="sec-sand"><div className="wrap">
      <h2 className="rv">Interior Design Services</h2>
      <p className="lead rv">Everything you need to turn an empty or tired space into a home or workplace you love.</p>
      <div className="svc">
        {SERVICES.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="rv">
            <h3>{s.name}</h3><p>{s.summary}</p><span>Learn more →</span>
          </Link>
        ))}
      </div>
    </div></section>
  );
}

export function AreasSection() {
  return (
    <section id="areas"><div className="wrap">
      <h2 className="rv">Interior Designers in Thanjavur, Trichy &amp; Nearby</h2>
      <p className="lead rv" style={{ maxWidth: 680 }}>
        Our studio is in Nanjikottai, Thanjavur. We design and execute interiors across the Delta region and central Tamil Nadu.
      </p>
      <ul className="chips">
        {LOCATIONS.map((l) => (
          <li key={l.slug}><Link href={`/interior-designers/${l.slug}`}>{l.name}</Link></li>
        ))}
      </ul>
    </div></section>
  );
}

export function WhySection() {
  return (
    <section id="about" className="sec-sand"><div className="wrap">
      <h2 className="rv">Why Choose Us</h2>
      <div className="why">
        {WHY.map((w) => (
          <div className="rv" key={w[0]}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d={w[2]} /></svg>
            <h3>{w[0]}</h3><p>{w[1]}</p>
          </div>
        ))}
      </div>
    </div></section>
  );
}

export function ProcessSection() {
  return (
    <section id="process"><div className="wrap">
      <h2 className="rv">Our Design Process</h2>
      <p className="lead rv">Six clear steps from first conversation to the day you move in.</p>
      <ol className="steps">
        {STEPS.map((s, i) => <li className="rv" key={s}><b>0{i + 1}</b><h3>{s}</h3></li>)}
      </ol>
    </div></section>
  );
}

export function InstagramSection() {
  return (
    <section id="instagram"><div className="wrap">
      <h2 className="rv">Follow Our Work</h2>
      <p className="lead rv">New projects, site progress and design ideas, shared regularly.</p>
      <div className="ig">
        {INSTA.map((id, i) => (
          <a key={id} href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Open Instagram">
            <Image src={unsplash(id, 500)} alt={`Interior design post ${i + 1}`} fill sizes="(max-width:700px) 33vw, 16vw" />
          </a>
        ))}
      </div>
      <a className="btn fill" href={SITE.instagram} target="_blank" rel="noopener noreferrer">Follow us on Instagram</a>
    </div></section>
  );
}

export function ContactSection({ title = "Let's Create Your Space.", defaultLocation = "" }: { title?: string; defaultLocation?: string }) {
  return (
    <section id="contact" className="dark"><div className="wrap cg">
      <div className="rv">
        <h2>{title}</h2>
        <p className="lead" style={{ color: "#b5ad9f" }}>Have a project in mind? Tell us about your space and we&apos;ll get in touch with you.</p>
      </div>
      <ContactForm defaultLocation={defaultLocation} />
    </div></section>
  );
}
