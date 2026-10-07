"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/lib/data";

const ProjectCard = ({ project }: { project: Project }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      // Calculate which image is mostly in view
      const newIndex = Math.round(scrollLeft / width);
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth"
      });
    }
  };

  // Drag to scroll logic for desktop
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  // Auto-scroll logic
  useEffect(() => {
    if (project.imgs.length <= 1 || isDragging) return;
    
    // Give each card a slightly offset start time to avoid all cards sliding at the exact same millisecond
    const intervalTime = 4000 + Math.random() * 2000;
    
    const timer = setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % project.imgs.length;
        scrollTo(nextIndex);
        return nextIndex;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [project.imgs.length, isDragging]);

  return (
    <div className="group flex flex-col gap-4 relative">
      {/* Image Carousel */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 cursor-grab active:cursor-grabbing">
        
        {/* Swipeable Container */}
        <div 
          ref={scrollRef}
          className={`w-full h-full flex overflow-x-auto hide-scrollbar ${isDragging ? '' : 'snap-x snap-mandatory'} [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
          onScroll={handleScroll}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {project.imgs.map((img, i) => (
            <div key={i} className="w-full h-full flex-shrink-0 snap-center relative">
              <Image
                src={img}
                alt={`${project.alt} - View ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
        
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#14120f] text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 pointer-events-none shadow-sm">
          {project.cat}
        </div>
        
        {/* Navigation Dots */}
        {project.imgs.length > 1 && (
          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
            {project.imgs.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(i); }}
                className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                  activeIndex === i ? "bg-white w-6" : "bg-white/60 hover:bg-white w-2"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-serif text-[#14120f] group-hover:text-[#3F6A80] transition-colors cursor-pointer">
          {project.name}
        </h3>
        <div className="flex items-center gap-2 text-sm text-[#5E5E5E] mt-1 mb-2">
          <span>{project.place}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>{project.style}</span>
        </div>
        <p className="text-[#5E5E5E] text-sm leading-relaxed line-clamp-2">
          {project.desc}
        </p>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] font-satoshi flex flex-col pt-32">
      <div className="flex-grow w-full max-w-7xl mx-auto px-6 lg:px-16 pb-24">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#14120f] mb-6">Our Portfolio</h1>
          <p className="text-lg text-[#5E5E5E] leading-relaxed">
            Explore our diverse range of interior design projects across residential, commercial, and luxury spaces. Every project reflects our commitment to quality, functionality, and beauty.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

      </div>
    </main>
  );
}
