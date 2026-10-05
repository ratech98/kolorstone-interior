import Link from "next/link";
import { SITE, fullAddress } from "@/lib/site";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

export default function Footer() {
  return (
    <footer>
      <div className="fg">
        <div>
          <h4>{SITE.name}</h4>
          <p>{SITE.description}</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/#work">Our Work</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#process">Process</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>{SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Contact</h4>
          <address style={{ fontStyle: "normal" }}>
            <ul>
              <li><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></li>
              {SITE.email && <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>}
              <li>{fullAddress()}</li>
              <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </address>
        </div>
      </div>
      <div className="fcities">
        <h4>Interior designers near you</h4>
        <ul>
          {LOCATIONS.map((l) => (
            <li key={l.slug}><Link href={`/interior-designers/${l.slug}`}>Interior Designers in {l.name}</Link></li>
          ))}
        </ul>
      </div>
      <p className="copy">© {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</p>
    </footer>
  );
}
