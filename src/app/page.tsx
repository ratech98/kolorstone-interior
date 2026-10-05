import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import ProjectGallery from "@/components/ProjectGallery";
import Reviews from "@/components/Reviews";
import Hero from "@/components/Hero";
import {
  AreasSection,
  ContactSection,
  InstagramSection,
  ProcessSection,
  ServicesSection,
  WhySection,
} from "@/components/Sections";
import { HOME_FAQS, PROJECTS, REVIEWS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />

        <section id="work">
          <div className="wrap">
            <h2 className="rv">Our Work</h2>
            <p className="lead rv">
              Homes, kitchens and workplaces designed around the people who use
              them.
            </p>
            <ProjectGallery projects={PROJECTS} />
          </div>
        </section>

        <ServicesSection />
        <AreasSection />
        <WhySection />
        <ProcessSection />

        {REVIEWS.length > 0 && (
          <section id="reviews">
            <div className="wrap">
              <h2 className="rv">What Our Clients Say</h2>
              <Reviews reviews={REVIEWS} />
            </div>
          </section>
        )}

        <Faq faqs={HOME_FAQS} />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
