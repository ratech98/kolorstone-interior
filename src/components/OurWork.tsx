"use client";
import React, { useRef } from "react";
import { PROJECTS } from "@/lib/data";
import { useScroll } from "framer-motion";
import AnimatedText from "./AnimatedText";
import SlideshowGridItem from "./SlideshowGridItem";
import MobileWorkCard from "./MobileWorkCard";

export default function OurWork() {
  const containerRef = useRef(null);
  
  const displayProjectsBento = PROJECTS.slice(0, 5);
  const displayProjectsStack = PROJECTS.slice(0, 4);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (displayProjectsBento.length < 5) return null;

  return (
    <section className="bg-[#FAFAFA] relative font-satoshi py-16 lg:py-24" id="work">
      <div className="max-w-7xl mx-auto px-6 mb-8 sm:mb-12 lg:mb-16">
        <div className="text-center">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-serif text-[#14120f] mb-4 lg:mb-6">
              Our Work
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-[#5E5E5E] text-base md:text-xl max-w-2xl mx-auto font-light">
              Homes, kitchens and workplaces designed around the people who use them.
            </p>
          </AnimatedText>
        </div>
      </div>

      {/* Desktop Layout: Bento Grid (Visible only on lg+) */}
      <div className="hidden lg:flex max-w-7xl mx-auto gap-4 h-[800px] px-6">
        <div className="w-3/4 flex flex-col gap-4">
          <div className="flex-1 grid grid-cols-3 gap-4">
            <SlideshowGridItem project={displayProjectsBento[0]} />
            <SlideshowGridItem project={displayProjectsBento[1]} />
            <SlideshowGridItem project={displayProjectsBento[2]} />
          </div>
          <SlideshowGridItem project={displayProjectsBento[4]} className="flex-1 w-full h-full" />
        </div>
        <SlideshowGridItem project={displayProjectsBento[3]} className="w-1/4 h-full" />
      </div>

      {/* Mobile/Tablet Layout: Sticky Scroll Stack (Hidden on lg+) */}
      <div ref={containerRef} className="lg:hidden mt-4 sm:mt-8 pb-[1vh] px-4 md:px-6 relative">
        {displayProjectsStack.map((project, i) => {
          const targetScale = 1 - (displayProjectsStack.length - i) * 0.04;
          return (
            <MobileWorkCard
              key={i}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
