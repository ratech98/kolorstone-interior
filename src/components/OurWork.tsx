import React from "react";
import Image from "next/image";
import Link from "next/link";

// Using Unsplash placeholder images from existing data.ts for now
const imgs = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80", // Tall image
  "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80", // Wide image
];

export default function OurWork() {
  return (
    <section className="bg-[#EBEBEB] py-24 px-6 relative font-satoshi">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#14120f] mb-6">
            Our Work
          </h2>
          <p className="text-[#5E5E5E] text-lg md:text-xl max-w-2xl mx-auto font-light">
            Homes, kitchens and workplaces designed around the people who use them.
          </p>
        </div>

        {/* Bento Grid */}
        {/* Desktop Layout: 75% Left, 25% Right */}
        <div className="hidden lg:flex gap-4 h-[800px]">
          {/* Left Side (75%) */}
          <div className="w-3/4 flex flex-col gap-4">
            {/* Top Row: 3 Images */}
            <div className="flex-1 grid grid-cols-3 gap-4">
              <Link href="#" className="block relative w-full h-full rounded-xl overflow-hidden group">
                <Image src={imgs[0]} alt="Work 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium flex items-center gap-2">View Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
                </div>
              </Link>
              <Link href="#" className="block relative w-full h-full rounded-xl overflow-hidden group">
                <Image src={imgs[1]} alt="Work 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium flex items-center gap-2">Bedroom <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
                </div>
              </Link>
              <Link href="#" className="block relative w-full h-full rounded-xl overflow-hidden group">
                <Image src={imgs[2]} alt="Work 3" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium flex items-center gap-2">View Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
                </div>
              </Link>
            </div>
            {/* Bottom Row: 1 Wide Image */}
            <Link href="#" className="block flex-1 relative w-full h-full rounded-xl overflow-hidden group">
              <Image src={imgs[4]} alt="Work 4" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium flex items-center gap-2">View Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
              </div>
            </Link>
          </div>
          
          {/* Right Side (25%) */}
          <Link href="#" className="block w-1/4 relative h-full rounded-xl overflow-hidden group">
            <Image src={imgs[3]} alt="Work 5" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-medium flex items-center gap-2">View Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></span>
            </div>
          </Link>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="lg:hidden flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="#" className="block relative w-full h-[300px] rounded-xl overflow-hidden">
              <Image src={imgs[0]} alt="Work 1" fill className="object-cover" />
            </Link>
            <Link href="#" className="block relative w-full h-[300px] rounded-xl overflow-hidden">
              <Image src={imgs[1]} alt="Work 2" fill className="object-cover" />
            </Link>
            <Link href="#" className="block relative w-full h-[300px] rounded-xl overflow-hidden">
              <Image src={imgs[2]} alt="Work 3" fill className="object-cover" />
            </Link>
            <Link href="#" className="block relative w-full h-[300px] rounded-xl overflow-hidden">
              <Image src={imgs[3]} alt="Work 4" fill className="object-cover" />
            </Link>
          </div>
          <Link href="#" className="block relative w-full h-[300px] rounded-xl overflow-hidden">
             <Image src={imgs[4]} alt="Work 5" fill className="object-cover" />
          </Link>
        </div>

      </div>
    </section>
  );
}
