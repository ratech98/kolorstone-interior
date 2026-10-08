import React from "react";
import { WHY } from "@/lib/data";
import AnimatedText from "@/components/AnimatedText";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f3f3f3] py-24 px-6 relative font-satoshi">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-serif text-[#14120f] mb-6">
              Why Choose Us
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-[#5E5E5E] text-lg md:text-xl max-w-2xl mx-auto font-light">
              We believe in creating spaces that are not only beautiful but also
              deeply personal and functional.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY.map(([title, desc, iconPath], index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-[40px] border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.04),inset_0_1px_0_0_rgba(255,255,255,1)] rounded-[32px] p-8 hover:-translate-y-2 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,1)] hover:bg-white/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col gap-4 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#3F6A80]/5 flex items-center justify-center group-hover:bg-[#3F6A80] transition-colors duration-300">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#3F6A80] group-hover:text-white transition-colors duration-300"
                >
                  <path d={iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#14120f] mt-2">
                {title}
              </h3>
              <p className="text-[#5E5E5E] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
