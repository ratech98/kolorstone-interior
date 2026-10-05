import Link from "next/link";
import Image from "next/image";
import { WHY, STEPS, INSTA } from "@/lib/data";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { SITE, unsplash } from "@/lib/site";
import ContactForm from "./ContactForm";
import { ArrowRight, MapPin } from "lucide-react";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-5 md:px-[clamp(20px,5vw,72px)] bg-ink relative"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24 max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
            Interior Design Services
          </h2>
          <p
          className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
            Everything you need to turn an empty or tired space into a home or
            workplace you love.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative p-8 md:p-10 rounded-[2rem] bg-white/5 hover:bg-white/10 border border-white/5 hover:border-gold/30 shadow-sm transition-all duration-500 overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto h-full min-h-[320px] backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                  {s.name}
                </h3>
                <p className="text-white/60 leading-relaxed font-light">
                  {s.summary}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-gold font-medium uppercase tracking-wider text-sm transition-transform duration-300 group-hover:translate-x-2">
                Learn more <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AreasSection() {
  return (
    <section
      id="areas"
      className="py-24 md:py-32 px-5 md:px-[clamp(20px,5vw,72px)] bg-[#fafafa] relative"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-20 max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-ink">
            Interior Designers in Thanjavur, Trichy &amp; Nearby
          </h2>
          <p className="text-lg md:text-xl text-ink/70 font-light leading-relaxed">
            Our studio is in Nanjikottai, Thanjavur. We design and execute
            interiors across the Delta region and central Tamil Nadu.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {LOCATIONS.map((l) => (
            <Link
              key={l.slug}
              href={`/interior-designers/${l.slug}`}
              className="group flex items-center p-5 md:p-6 bg-white rounded-2xl border border-black/5 hover:border-gold/30 hover:shadow-[0_10px_40px_rgba(176,141,87,0.12)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-ink/5 group-hover:bg-gold/10 flex items-center justify-center mr-4 transition-colors duration-300 shrink-0">
                <MapPin className="w-5 h-5 text-ink/40 group-hover:text-gold transition-colors duration-300" />
              </div>
              <span className="font-medium text-ink group-hover:text-gold transition-colors duration-300 text-lg">
                {l.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-5 md:px-[clamp(20px,5vw,72px)] bg-[#100f0d] text-white"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              We bring craftsmanship, transparency, and a tailored approach to every single project we take on.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 border-t border-white/10 pt-16">
          {WHY.map((w) => (
            <div key={w[0]} className="group relative">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 transform group-hover:-translate-y-2 group-hover:bg-gold/10 transition-all duration-500 border border-white/5 group-hover:border-gold/30">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-8 h-8 stroke-gold fill-none stroke-[1.5] transition-transform duration-500 group-hover:scale-110"
                >
                  <path d={w[2]} />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-white/90 mb-4 group-hover:text-gold transition-colors duration-300">
                {w[0]}
              </h3>
              <p className="text-white/50 leading-relaxed font-light text-lg">
                {w[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 px-5 md:px-[clamp(20px,5vw,72px)] bg-ink text-white"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
            Our Design Process
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
            Six clear steps from first conversation to the day you move in.
          </p>
        </div>

        <div className="relative mt-16 md:mt-24">
          {/* Horizontal line for desktop, vertical for mobile */}
          <div className="absolute top-[28px] left-0 w-full h-px bg-white/10 hidden md:block" />
          <div className="absolute top-0 bottom-0 left-[27px] w-px bg-white/10 md:hidden" />

          <ol className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-12 md:gap-y-16 relative">
            {STEPS.map((s, i) => (
              <li key={s} className="relative pl-16 md:pl-0 pr-8 md:pr-4 group">
                {/* Dot */}
                <div className="absolute left-[20px] md:left-0 top-[20px] md:top-[20px] w-4 h-4 rounded-full bg-ink border-2 border-gold z-10 group-hover:bg-gold group-hover:scale-125 transition-all duration-300" />

                <div className="md:pt-16">
                  <span className="text-gold font-medium text-sm tracking-widest block mb-2">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-white/90 group-hover:text-white transition-colors">
                    {s}
                  </h3>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section
      id="instagram"
      className="py-24 md:py-32 px-5 md:px-[clamp(20px,5vw,72px)] bg-white text-center"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl text-ink mb-6">
            Follow Our Work
          </h2>
          <p className="text-lg text-ink/70 font-light">
            New projects, site progress and design ideas, shared regularly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          {INSTA.map((id, i) => (
            <a
              key={id}
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Instagram"
              className="relative aspect-square overflow-hidden rounded-2xl group block"
            >
              <Image
                src={unsplash(id, 500)}
                alt={`Interior design post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width:700px) 50vw, (max-width:1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>
          ))}
        </div>

        <a
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-ink text-white font-medium hover:bg-gold hover:text-ink transition-colors duration-300 tracking-wide"
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
}

export function ContactSection({
  title = "Let's Create Your Space.",
  defaultLocation = "",
}: {
  title?: string;
  defaultLocation?: string;
}) {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-5 md:px-[clamp(20px,5vw,72px)] bg-[#100f0d] text-white"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
        <div className="max-w-xl">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
            Have a project in mind? Tell us about your space and we&apos;ll get
            in touch with you.
          </p>
        </div>
        <ContactForm defaultLocation={defaultLocation} />
      </div>
    </section>
  );
}
