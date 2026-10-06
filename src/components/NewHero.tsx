"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/hero_img1.png";
import heroMobileImg from "@/assets/hero_mobile_img.png";
import logo from "@/assets/logo.png";

export default function NewHero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#EBEBEB] relative font-satoshi flex flex-col items-center pt-8">
      {/* Floating Navbar */}
      <nav 
        className={`flex items-center justify-between px-8 py-4 z-50 fixed left-1/2 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
          isScrolled 
            ? "top-0 w-full max-w-full bg-white/95 backdrop-blur-lg rounded-none border-gray-200 shadow-md" 
            : "top-8 w-11/12 max-w-7xl bg-[#DEDEDE]/30 backdrop-blur-md rounded-full border-transparent shadow-sm"
        }`}
      >
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Kolorstones Logo"
            width={140}
            height={45}
            className="object-cover"
          />
        </div>

        <div className="hidden lg:flex items-center space-x-8 text-[#5E5E5E] font-medium">
          <Link
            href="#"
            className="text-[#3F6A80] border-b-2 border-[#3F6A80] pb-1"
          >
            Home
          </Link>
          <Link href="#" className="hover:text-black transition">
            Work
          </Link>
          <Link href="#" className="hover:text-black transition">
            About
          </Link>
          <Link href="#" className="hover:text-black transition">
            Process
          </Link>
          <Link href="#" className="hover:text-black transition">
            Reviews
          </Link>
          <Link href="#" className="hover:text-black transition">
            Instagram
          </Link>
          <Link href="#" className="hover:text-black transition">
            Contact
          </Link>
        </div>

        <div>
          <button className="bg-[#3F6A80] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#2e4d5d] transition">
            Enquiry Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center px-6   gap-16 lg:gap-24">
        {/* Left Side: Image Container (Hidden on small devices) */}
        <div className="hidden relative lg:flex w-full lg:w-1/2 h-[50vh] lg:h-[75vh]  items-center justify-center">
          <Image
            src={heroImg}
            alt="Interior Design"
            fill
            className="object-cover object-left absolute min-w-[800px] min-h-screen lg:-left-35! lg:-top-27!"
          />
        </div>

        {/* Mobile Image Container (Hidden on large devices) */}
        <div className="flex relative lg:hidden w-full h-[40vh] items-center justify-center  overflow-hidden rounded-xl mt-[25%] md:mt-0">
          <Image
            src={heroMobileImg}
            alt="Interior Design"
            fill
            className="object-cover object-center h-full w-full"
          />
        </div>

        {/* Right Side: Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-[1.1] mb-6">
            Spaces Designed To <br className="hidden md:block lg:hidden" /> Feel
            Like Home.
          </h1>
          <p className="text-[#5E5E5E] text-base md:text-lg mb-10 max-w-lg leading-relaxed">
            Thoughtfully designed interiors that combine functionality,
            elegance, and your personal style.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-[#3F6A80] text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#2e4d5d] transition w-full sm:w-auto">
              VIEW OUR WORK
            </button>
            <button className="border border-[#3F6A80] text-[#3F6A80] px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#3F6A80] hover:text-white transition w-full sm:w-auto">
              ENQUIRY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
