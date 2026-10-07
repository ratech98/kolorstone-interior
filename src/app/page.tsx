// Old imports commented out
// import Link from "next/link";
// import Nav from "@/components/Nav";
// import Footer from "@/components/Footer";
// import Faq from "@/components/Faq";
// import ProjectGallery from "@/components/ProjectGallery";
// import Reviews from "@/components/Reviews";
// import Hero from "@/components/Hero";
// import {
//   AreasSection,
//   ContactSection,
//   InstagramSection,
//   ProcessSection,
//   ServicesSection,
//   WhySection,
// import { HOME_FAQS, PROJECTS, REVIEWS } from "@/lib/data";

import NewHero from "@/components/NewHero";
import OurWork from "@/components/OurWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import DesignProcess from "@/components/DesignProcess";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="main">
        <NewHero />
        <OurWork />
        <WhyChooseUs />
        <DesignProcess />
      </main>
      <Footer />
        
        {/* OLD PAGE CONTENT COMMENTED OUT BELOW */}
        {/*
        <Nav />
        <Hero />

        <section
          id="work"
          className="py-24 md:py-32 px-5 md:px-[clamp(20px,5vw,72px)] bg-[#fafafa] relative"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-24 max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ink mb-6 tracking-tight">
                Our Work
              </h2>
              <p className="text-lg md:text-xl text-ink/70 font-light leading-relaxed">
                Homes, kitchens and workplaces designed around the people who
                use them.
              </p>
            </div>
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
        <Footer />
        */}
    </>
  );
}
