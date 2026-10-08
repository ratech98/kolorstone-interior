"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";

const SlideshowGridItem = ({ project, className }: { project: Project; className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const randomStart = Math.floor(Math.random() * Math.min(3, project.imgs.length));
    setCurrentIndex(randomStart);

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

export default SlideshowGridItem;
