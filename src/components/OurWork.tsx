"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, Project } from "@/lib/data";

const SlideshowGridItem = ({ project, className }: { project: Project; className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Start with a random image index
    const randomStart = Math.floor(Math.random() * Math.min(3, project.imgs.length));
    setCurrentIndex(randomStart);

    // Give each cell a slightly randomized interval (6s to 9s) to make the page feel organically alive but relaxed
    const intervalTime = 6000 + Math.random() * 3000;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const max = Math.min(3, project.imgs.length);
        if (max <= 1) return 0;
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * max);
        } while (nextIndex === prev);
        return nextIndex;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [project.imgs.length]);

  return (
    <Link href="/projects" className={`block relative rounded-xl overflow-hidden group bg-gray-200 ${className || "w-full h-full"}`}>
      {project.imgs.slice(0, 3).map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`${project.alt} - View ${i + 1}`}
          fill
          className={`object-cover transition-all duration-[1500ms] ease-in-out ${
            i === currentIndex ? "opacity-100 scale-100 group-hover:scale-105" : "opacity-0 scale-105"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center z-10">
        <span className="text-white font-medium flex items-center gap-2">
          {project.name}{" "}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default function OurWork() {
  // Use the first 5 projects for the bento grid
  const displayProjects = PROJECTS.slice(0, 5);

  // Fallback if there are not enough projects
  if (displayProjects.length < 5) return null;

  return (
    <section className="bg-[#FAFAFA] py-24 px-6 relative font-satoshi" id="work">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#14120f] mb-6">
            Our Work
          </h2>
          <p className="text-[#5E5E5E] text-lg md:text-xl max-w-2xl mx-auto font-light mb-8">
            Homes, kitchens and workplaces designed around the people who use them.
          </p>
          {/* <Link href="/projects" className="inline-block border border-[#3F6A80] text-[#3F6A80] hover:bg-[#3F6A80] hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
            View All Projects
          </Link> */}
        </div>

        {/* Bento Grid */}
        {/* Desktop Layout: 75% Left, 25% Right */}
        <div className="hidden lg:flex gap-4 h-[800px]">
          {/* Left Side (75%) */}
          <div className="w-3/4 flex flex-col gap-4">
            {/* Top Row: 3 Images */}
            <div className="flex-1 grid grid-cols-3 gap-4">
              <SlideshowGridItem project={displayProjects[0]} />
              <SlideshowGridItem project={displayProjects[1]} />
              <SlideshowGridItem project={displayProjects[2]} />
            </div>
            {/* Bottom Row: 1 Wide Image */}
            <SlideshowGridItem project={displayProjects[4]} className="flex-1 w-full h-full" />
          </div>

          {/* Right Side (25%) */}
          <SlideshowGridItem project={displayProjects[3]} className="w-1/4 h-full" />
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="lg:hidden flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayProjects.slice(0, 4).map((project, i) => (
              <SlideshowGridItem key={i} project={project} className="w-full h-[300px]" />
            ))}
          </div>
          <SlideshowGridItem project={displayProjects[4]} className="w-full h-[300px]" />
        </div>
      </div>
    </section>
  );
}
