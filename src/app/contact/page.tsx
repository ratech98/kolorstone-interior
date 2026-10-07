"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";
import { SITE, fullAddress } from "@/lib/site";
import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <main className="min-h-screen bg-[#f3f3f3] font-satoshi flex flex-col relative overflow-x-hidden">
      


      {/* Main Content */}
      <div className="flex-grow pt-40 pb-20 px-6 lg:px-16 w-full max-w-7xl mx-auto z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#14120f] mb-6">Let's build something beautiful</h1>
          <p className="text-lg text-[#5E5E5E] leading-relaxed">
            Ready to transform your space? From modular kitchens to full turnkey interiors, our expert design team is here to bring your vision to life.
          </p>
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
                  <h3 className="text-lg font-semibold text-[#14120f] mb-1">Our Studio</h3>
                  <p className="text-[#5E5E5E] leading-relaxed">{fullAddress()}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#3F6A80] shrink-0">
                  <Phone size={26} />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-[#14120f] mb-1">Phone</h3>
                  <p className="text-[#5E5E5E] leading-relaxed">
                    <a href={`tel:${SITE.phone}`} className="hover:text-[#3F6A80] transition-colors">{SITE.phone}</a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#3F6A80] shrink-0">
                  <Clock size={26} />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-[#14120f] mb-1">Working Hours</h3>
                  <p className="text-[#5E5E5E] leading-relaxed">Monday - Saturday<br/>10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="w-full h-64 md:h-72 rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15663.090515152367!2d79.1206141!3d10.7818454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89ce14b8a3f%3A0xe54e6df9a4eb0f02!2sThanjavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
