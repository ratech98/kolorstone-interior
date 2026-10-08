"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";
import { motion, useTransform, MotionValue } from "framer-motion";

const MobileWorkCard = ({
  project,
  i,
  progress,
  range,
  targetScale,
  hideButton,
}: {
  project: Project;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  hideButton?: boolean;
}) => {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.95]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (project.imgs.length <= 1) return;
    
    const randomStart = Math.floor(Math.random() * Math.min(3, project.imgs.length));
    setCurrentIndex(randomStart);

    const intervalTime = 4000 + Math.random() * 2000;
    
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
    <div
      ref={containerRef}
      className=" flex items-start justify-center sticky top-[14%] md:top-[10%]"
    >
      <motion.div
        style={{
          scale,
          opacity,
          top: `${i * 24}px`,
        }}
        className="relative w-full max-w-6xl h-[50vh] sm:h-[60vh] bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] origin-top flex flex-col"
      >
        <div className="w-full h-full relative bg-gray-200">
          {project.imgs.slice(0, 3).map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`${project.alt || project.name} - View ${idx + 1}`}
              fill
              className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="w-full p-6 sm:p-8 flex flex-col justify-center bg-white z-10 h-fit">
          <h3 className="text-2xl sm:text-3xl font-serif text-[#14120f] mb-2 sm:mb-3">
            {project.name}
          </h3>
          <p className="text-[#5E5E5E] text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed line-clamp-3">
            {project.desc ||
              "Experience beautifully crafted spaces that blend functionality, elegance, and distinct personal style."}
          </p>
          {!hideButton && (
            <Link
              href="/projects"
              className="inline-flex w-fit items-center gap-2 border border-[#3F6A80] text-[#3F6A80] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#3F6A80] hover:text-white transition-colors duration-300"
            >
              Explore Project
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MobileWorkCard;
