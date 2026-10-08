"use client";
import React, { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import MobileWorkCard from "@/components/MobileWorkCard";
import { Project } from "@/lib/data";
import { useScroll } from "framer-motion";

export default function ProjectsLayout({ projects }: { projects: Project[] }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-3 gap-8 lg:gap-12">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {/* Mobile/Tablet Layout: Sticky Stack */}
      <div ref={containerRef} className="lg:hidden mt-4 pb-[15vh] relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.04;
          return (
            <MobileWorkCard
              key={i}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
              hideButton={true}
            />
          );
        })}
      </div>
    </>
  );
}
