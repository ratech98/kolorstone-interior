"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/hero_img1.png";
import heroMobileImg from "@/assets/hero_mobile_img.png";
import logo from "@/assets/logo.png";
import { trackEvent } from "@/lib/analytics";
import AnimatedText from "./AnimatedText";

export default function NewHero() {
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
    <div className="lg:min-h-screen md:min-h-[50vh] bg-[#f3f3f3] relative font-satoshi flex flex-col items-center pt-0 lg:pt-8 overflow-hidden">
      {/* 3D Sphere & Atom Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-sphere {
          0% { transform: rotateX(20deg) rotateY(0deg); }
          100% { transform: rotateX(20deg) rotateY(360deg); }
        }
        @keyframes orbit {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.2); box-shadow: none; }
          10% { opacity: 1; transform: scale(1.5); box-shadow: 0 0 15px #3F6A80; }
          20% { opacity: 0; transform: scale(0.2); box-shadow: none; }
        }
      `}} />

      {/* Interactive 3D Atom Sphere */}
      <div
        className="hidden lg:flex absolute -right-[8%] top-[27%] w-[500px] h-[500px] z-0 items-center justify-center pointer-events-none transition-transform duration-300 ease-out"
        style={{ perspective: "1000px" }}
      >
        <div
          className="w-full h-full relative origin-center"
          style={{
            transformStyle: "preserve-3d",
            animation: "spin-sphere 25s linear infinite",
          }}
        >
          {/* Orbital Rings */}
          {[0, 45, 90, 135].map((angle, i) => (
            <div
              key={`ring-${i}`}
              className="absolute inset-0 rounded-full border border-[#3F6A80]/30"
              style={{
                transform: `rotateY(${angle}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Orbiting Atom Dot */}
              <div
                className="w-full h-full absolute"
                style={{
                  animation: `orbit ${6 + i * 1.5}s linear infinite reverse`,
                }}
              >
                <div className="w-[10px] h-[10px] bg-[#3F6A80] rounded-full absolute top-[-5px] left-[50%] -translate-x-1/2 shadow-[0_0_15px_#3F6A80]" />
              </div>
            </div>
          ))}

          {/* Horizontal Equator Ring */}
          <div
            className="absolute inset-0 rounded-full border border-[#3F6A80]/30"
            style={{
              transform: "rotateX(90deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="w-full h-full absolute"
              style={{ animation: "orbit 8s linear infinite" }}
            >
              <div className="w-[10px] h-[10px] bg-[#3F6A80] rounded-full absolute top-[-5px] left-[50%] -translate-x-1/2 shadow-[0_0_15px_#3F6A80]" />
            </div>
          </div>

          {/* Core Glowing Orb Removed as requested */}

          {/* Random Sparkling 3D Stars */}
          {[...Array(40)].map((_, i) => {
            const duration = 5 + ((i * 7) % 8); // Random duration between 5s and 12s
            const delay = -((i * 13) % 20); // Negative delay scatters starting times seamlessly
            return (
              <div
                key={`sparkle-${i}`}
                className="absolute w-[4px] h-[4px] bg-[#3F6A80] rounded-full"
                style={{
                  left: `${10 + ((i * 29) % 80)}%`,
                  top: `${10 + ((i * 37) % 80)}%`,
                  transform: `translateZ(${((i * 53) % 400) - 200}px)`,
                  animation: `sparkle ${duration}s ease-in-out infinite ${delay}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:px-6 gap-16 lg:gap-24 relative mt-0 z-10 h-auto pb-12 pt-42 lg:pt-0 lg:pb-0">
        {/* Mobile Background Image (Hidden on large devices) */}
        <div className="absolute inset-0 z-0 flex lg:hidden w-full h-full">
          <Image
            src={heroMobileImg}
            alt="Interior Design"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Gradient Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        {/* Left Side: Desktop Image Container (Hidden on small devices) */}
        <div className="hidden relative lg:flex w-full lg:w-1/2 h-[50vh] lg:h-[75vh] items-center justify-center">
          <Image
            src={heroImg}
            alt="Interior Design"
            fill
            priority
            className="object-cover object-left absolute min-w-[800px] min-h-screen lg:-left-35! lg:-top-27!"
          />
        </div>

        {/* Right Side: Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-end lg:justify-center items-center lg:items-start text-center lg:text-left relative z-10 px-6 h-full mt-auto lg:mt-0">
          <AnimatedText animateOnLoad={true}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white lg:text-black leading-[1.1] mb-6 drop-shadow-lg lg:drop-shadow-none">
              Spaces Designed To <br className="hidden lg:block" /> Feel Like
              Home.
            </h1>
          </AnimatedText>
          <AnimatedText animateOnLoad={true} delay={0.2}>
            <p className="text-white/90 lg:text-[#5E5E5E] text-base md:text-lg mb-10 max-w-lg leading-relaxed drop-shadow-md lg:drop-shadow-none">
              Thoughtfully designed interiors that combine functionality,
              elegance, and your personal style.
            </p>
          </AnimatedText>
          <AnimatedText animateOnLoad={true} delay={0.4} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/projects"
                onClick={() =>
                  trackEvent({
                    action: "click",
                    category: "Hero CTA",
                    label: "View Our Work",
                  })
                }
                className="w-full sm:w-auto"
              >
                <button className="bg-[#3F6A80] text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#2e4d5d] transition w-full shadow-lg lg:shadow-none">
                  VIEW OUR WORK
                </button>
              </Link>
              <Link
                href="/contact"
                onClick={() =>
                  trackEvent({
                    action: "click",
                    category: "Hero CTA",
                    label: "Enquiry Now",
                  })
                }
                className="w-full sm:w-auto"
              >
                <button className="border border-white lg:border-[#3F6A80] text-white lg:text-[#3F6A80] bg-white/10 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-white hover:text-[#3F6A80] transition w-full shadow-lg lg:shadow-none">
                  ENQUIRY NOW
                </button>
              </Link>
            </div>
          </AnimatedText>
        </div>
      </div>
    </div>
  );
}
