import React from "react";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

import { getSEO } from "@/lib/seo";

export const metadata: Metadata = getSEO("projects");

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] font-satoshi flex flex-col pt-32">
      <div className="flex-grow w-full max-w-7xl mx-auto px-6 lg:px-16 pb-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#14120f] mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg text-[#5E5E5E] leading-relaxed">
            Explore our diverse range of interior design projects across
            residential, commercial, and luxury spaces. Every project reflects
            our commitment to quality, functionality, and beauty.
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
