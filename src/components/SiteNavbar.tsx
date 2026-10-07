"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

export default function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => pathname === path;

  // The hero page might have a different default navbar background (glassmorphism on gray vs white)
  // But we'll keep the logic simple and adaptative
  const isHomePage = pathname === "/";

  return (
    <>
      <nav
        className={`flex items-center justify-between px-8 py-4 z-[90] fixed left-1/2 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
          isScrolled
            ? "top-0 w-full max-w-full bg-white/95 backdrop-blur-lg rounded-none border-gray-200 shadow-md"
            : `top-8 w-11/12 max-w-7xl backdrop-blur-md rounded-full shadow-sm ${isHomePage ? "bg-[#DEDEDE]/30 border-transparent" : "bg-white/80 border-gray-200/50"}`
        }`}
      >
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Kolorstones Logo"
              width={140}
              height={45}
              className="object-contain w-auto h-auto max-h-[32px]"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-[#5E5E5E] font-medium">
          <Link href="/" className={`${isActive("/") ? "text-[#3F6A80] border-b-2 border-[#3F6A80] pb-1" : "hover:text-black transition"}`}>
            Home
          </Link>
          <Link href="/about" className={`${isActive("/about") ? "text-[#3F6A80] border-b-2 border-[#3F6A80] pb-1" : "hover:text-black transition"}`}>
            About Us
          </Link>
          <Link href="/projects" className={`${isActive("/projects") ? "text-[#3F6A80] border-b-2 border-[#3F6A80] pb-1" : "hover:text-black transition"}`}>
            Projects
          </Link>
          <Link href="/contact" className={`${isActive("/contact") ? "text-[#3F6A80] border-b-2 border-[#3F6A80] pb-1" : "hover:text-black transition"}`}>
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-[#3F6A80] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#2e4d5d] transition">
                Enquiry Now
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-[#5E5E5E] hover:text-black transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl transition-transform duration-300 transform flex flex-col p-8 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-black transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-6 text-lg font-medium text-[#5E5E5E]">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive("/") ? "text-[#3F6A80] font-semibold" : "hover:text-black transition"}`}>Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive("/about") ? "text-[#3F6A80] font-semibold" : "hover:text-black transition"}`}>About Us</Link>
            <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive("/projects") ? "text-[#3F6A80] font-semibold" : "hover:text-black transition"}`}>Projects</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive("/contact") ? "text-[#3F6A80] font-semibold" : "hover:text-black transition"}`}>Contact</Link>
          </div>
          <div className="mt-auto md:hidden">
            <Link href="/contact">
              <button className="w-full bg-[#3F6A80] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#2e4d5d] transition">
                Enquiry Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
