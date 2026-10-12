import React from "react";
import ContactForm from "@/components/ContactForm";
import AnimatedText from "@/components/AnimatedText";
import { SITE, fullAddress } from "@/lib/site";
import { MapPin, Phone, Clock } from "lucide-react";
import type { Metadata } from "next";

import { getSEO } from "@/lib/seo";

export const metadata: Metadata = getSEO("contact");

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] font-satoshi flex flex-col relative overflow-x-hidden">
      {/* Main Content */}
      <div className="flex-grow pt-40 pb-20 px-6 lg:px-16 w-full max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText>
            <h1 className="text-4xl md:text-5xl font-serif text-[#14120f] mb-6">
              Let's build something beautiful
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-[#5E5E5E] leading-relaxed">
              Ready to transform your space? From modular kitchens to full
              turnkey interiors, our expert design team is here to bring your
              vision to life.
            </p>
          </AnimatedText>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Right: Contact Form (Shows First on Mobile) */}
          <div className="lg:col-span-7 order-first lg:order-last">
            <ContactForm />
          </div>

          {/* Left: Contact Info (Shows Second on Mobile) */}
          <div className="lg:col-span-5 flex flex-col gap-12 sticky top-32 order-last lg:order-first">
            <div className="flex flex-col gap-8">
              {/* Studio */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#3F6A80] shrink-0">
                  <MapPin size={26} />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-[#14120f] mb-1">
                    Our Studio
                  </h3>
                  <p className="text-[#5E5E5E] leading-relaxed">
                    {fullAddress()}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#3F6A80] shrink-0">
                  <Phone size={26} />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-[#14120f] mb-1">
                    Phone
                  </h3>
                  <p className="text-[#5E5E5E] leading-relaxed">
                    <a
                      href={`tel:${SITE.phone}`}
                      className="hover:text-[#3F6A80] transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#3F6A80] shrink-0">
                  <Clock size={26} />
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-[#14120f]">
                      Working Hours
                    </h3>
                    {/* <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      Open Daily
                    </span> */}
                  </div>
                  <p className="text-[#14120f] font-medium text-base">
                    Monday – Sunday
                  </p>
                  <p className="text-[#5E5E5E] text-sm mt-0.5">
                    09:00 AM – 09:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-3">
              <div className="w-full h-64 md:h-72 rounded-[2rem] overflow-hidden shadow-xl border border-gray-200 relative">
                <iframe
                  title="Kolorstones Home Interiors Location Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent("Kolorstones Home Interiors, 21, Thiyagi Velu Nagar, Madhakottai, Nanjikottai, Thanjavur, Tamil Nadu 613007")}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("21, Thiyagi Velu Nagar, Madhakottai, Nanjikottai, Thanjavur, Tamil Nadu 613007")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#3F6A80] hover:text-[#2e4d5d] hover:underline self-end pt-1"
              >
                <span>Open in Google Maps</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
