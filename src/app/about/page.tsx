"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";

export default function AboutPage() {
  const heroImage = PROJECTS[0].imgs[1] || PROJECTS[0].imgs[0];

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-satoshi flex flex-col pt-32">
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-16 mb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#3F6A80]/10 text-[#3F6A80] text-sm font-semibold tracking-wider uppercase self-start">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#14120f] leading-tight">
              Designing Spaces,<br/> Building Lifestyles
            </h1>
            <p className="text-lg text-[#5E5E5E] leading-relaxed">
              At Kolorstones Home Interiors, we believe that your home should be a reflection of who you are. Located in the heart of Thanjavur, we specialize in creating elegant, functional, and highly personalized spaces that elevate everyday living.
            </p>
            <div className="pt-4 flex gap-8">
              <div>
                <h4 className="text-3xl font-serif text-[#3F6A80]">150+</h4>
                <p className="text-[#5E5E5E] text-sm mt-1 uppercase tracking-wide">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-[#3F6A80]">100%</h4>
                <p className="text-[#5E5E5E] text-sm mt-1 uppercase tracking-wide">Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
              <Image src={heroImage} alt="About Kolorstones" fill className="object-cover hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#3F6A80] rounded-full blur-[60px] opacity-30 animate-pulse pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-24 border-y border-gray-100 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FAFAFA] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-[#14120f] mb-4">Our Core Philosophy</h2>
            <p className="text-[#5E5E5E] text-lg">We don't just fill empty rooms. We design environments that inspire, comfort, and endure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Uncompromising Quality",
                desc: "From premium grade plywood to imported hardware, we never cut corners. Our materials are meticulously chosen to last generations.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                )
              },
              {
                title: "Client-Centric Design",
                desc: "Your lifestyle dictates our design. We listen intimately to your needs to create spaces that perfectly align with how you actually live.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                )
              },
              {
                title: "Flawless Execution",
                desc: "Our master craftsmen and dedicated project managers ensure that what you see in the 3D render is exactly what gets built.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                )
              }
            ].map((v, i) => (
              <div key={i} className="flex flex-col gap-5 p-8 rounded-[2rem] bg-[#FAFAFA] hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-gray-100 group cursor-default">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-[#3F6A80] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#3F6A80] group-hover:text-white">
                  {v.icon}
                </div>
                <h3 className="text-xl font-serif text-[#14120f]">{v.title}</h3>
                <p className="text-[#5E5E5E] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise / CTA */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-24">
        <div className="bg-[#14120f] rounded-[2.5rem] p-10 md:p-16 lg:p-20 relative overflow-hidden flex flex-col items-center text-center text-white shadow-2xl group">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-3xl aspect-square bg-[#3F6A80]/30 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#3F6A80]/40 transition-colors duration-1000" />
          
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 leading-tight">
            "We treat every home as if it were our own."
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light mb-10 relative z-10">
            Our promise is simple: complete transparency, exceptional craftsmanship, and a seamless journey from the first sketch to the final handover. 
          </p>
          <Link href="/contact" className="relative z-10 bg-[#3F6A80] hover:bg-white hover:text-[#14120f] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-[0_0_40px_rgba(63,106,128,0.4)] hover:shadow-xl hover:-translate-y-1">
            Start Your Journey With Us
          </Link>
        </div>
      </section>

    </main>
  );
}
