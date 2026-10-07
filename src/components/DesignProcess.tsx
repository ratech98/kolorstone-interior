"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const processSteps = [
  {
    title: "Consultation",
    desc: "We discuss your vision, requirements, and budget.",
    pos: "left-[1%] top-[30%]",
    textOffset: "bottom-6 left-[-20px] lg:left-[-40px]",
    color: "text-[#464CC8]",
    bgColor: "bg-[#464CC8]",
  },
  {
    title: "Site Visit",
    desc: "Detailed measurement and assessment of your space.",
    pos: "left-[23%] top-[70%]",
    textOffset: "top-6 left-[-20px] lg:left-[-40px]",
    color: "text-[#2860b2]",
    bgColor: "bg-[#2860b2]",
  },
  {
    title: "Concept & Design",
    desc: "Creating layouts, 3D views, and finalising.",
    pos: "left-[41%] top-[30%]",
    textOffset: "bottom-6 left-[-20px] lg:left-[-40px]",
    color: "text-[#009987]",
    bgColor: "bg-[#009987]",
  },
  {
    title: "Material Selection",
    desc: "Choosing finishes and materials.",
    pos: "left-[59%] top-[70%]",
    textOffset: "top-6 left-[-20px] lg:left-[-40px]",
    color: "text-[#60b566]",
    bgColor: "bg-[#60b566]",
  },
  {
    title: "Execution",
    desc: "Our expert team brings the design to life on site.",
    pos: "left-[77%] top-[30%]",
    textOffset: "bottom-6 left-[-20px] lg:left-[-40px]",
    color: "text-[#BFD146]",
    bgColor: "bg-[#BFD146]",
  },
  {
    title: "Final Handover",
    desc: "Thorough quality check and delivery.",
    pos: "right-[1%] top-[70%]",
    textOffset: "top-6 right-[-10px] lg:right-[-20px] text-right",
    color: "text-[#464CC8]",
    bgColor: "bg-[#464CC8]",
  },
];

const slideInTop = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export default function DesignProcess() {
  const [isAnimated, setIsAnimated] = useState(false);
  const svgRef = useRef(null);
  const isInView = useInView(svgRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  return (
    <div className="bg-[#FAFAFA] py-24 px-6 overflow-x-clip flex flex-col items-center justify-center lg:gap-[62px] gap-8 font-satoshi">
      {/* top */}
      <div className="w-full max-w-[1200px]">
        <div className="text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            variants={slideInTop}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-serif text-[#14120f] mb-6"
          >
            Our Design Process
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            variants={slideInTop}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-[#5E5E5E] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            A seamless, transparent journey from your first idea to the final
            handover. We guide you through every step of creating your perfect
            space.
          </motion.p>
        </div>
      </div>

      {/* steps desktop */}
      <div className="hidden lg:block w-full max-w-[1200px] aspect-[2/1] relative">
        {/* SVG Curve */}
        <svg
          ref={svgRef}
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 600"
          fill="none"
        >
          <defs>
            <linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="1200"
              y2="0"
            >
              <stop offset="0%" stopColor="#464CC8" />
              <stop offset="35%" stopColor="#009987" />
              <stop offset="70%" stopColor="#BFD146" />
              <stop offset="92%" stopColor="#464CC8" />
            </linearGradient>
          </defs>

          <motion.path
            d="M 0 180 L 60 180 C 168 180, 168 420, 276 420 C 384 420, 384 180, 492 180 C 600 180, 600 420, 708 420 C 816 420, 816 180, 924 180 C 1032 180, 1032 420, 1140 420 L 1200 420"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isAnimated ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            style={{
              filter: "drop-shadow(0px 8px 6px rgba(63,106,128,0.15))",
            }}
          />
        </svg>

        {processSteps.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            className={`absolute ${item.pos} z-10`}
          >
            {/* The Dot is exactly at item.pos, perfectly centered */}
            <div
              className={`absolute w-5 h-5 rounded-full border-4 border-[#FAFAFA] ${item.bgColor} shadow-sm -translate-x-1/2 -translate-y-1/2 z-20`}
            />

            {/* The Text Box offset from the dot */}
            <div
              className={`absolute ${item.textOffset} w-[200px] lg:w-[220px]`}
            >
              {/* Number Background */}
              <div
                className={`absolute  -translate-y-[60%] z-0 pointer-events-none ${
                  item.textOffset.includes("right")
                    ? "right-0 translate-x-16 top-1/2"
                    : "left-0 -translate-x-12 top-2"
                }`}
              >
                <p
                  className={`font-bold ${item.color} opacity-20 text-[100px] lg:text-[140px] leading-[1] -tracking-[2%] select-none`}
                >
                  {i + 1}
                </p>
              </div>

              <div className="relative z-10">
                <h3 className="text-[#14120f] font-bold text-lg leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#5E5E5E] text-sm leading-[18px] mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* mobile and tab ui */}
      <div className="lg:hidden flex flex-col gap-12 w-full mt-8 relative">
        {/* Vertical Connecting Line */}
        <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#464CC8] via-[#009987] to-[#BFD146] opacity-30 z-0"></div>

        {processSteps.map((item, i) => (
          <div key={i} className="relative w-full pl-[56px] z-10">
            {/* The Dot centered on the vertical line */}
            <div
              className={`absolute left-[16px] top-[6px] w-4 h-4 rounded-full border-2 border-[#FAFAFA] ${item.bgColor} shadow-sm z-20`}
            />

            {/* Background Number */}
            <div className="absolute top-0 left-[36px] z-0 -translate-y-6 pointer-events-none">
              <p
                className={`font-bold ${item.color} opacity-15 text-[80px] leading-[1] -tracking-[2%] select-none`}
              >
                {i + 1}
              </p>
            </div>

            <div className="relative z-10 left-7 -top-4 max-w-[80%]">
              <motion.h3
                initial="hidden"
                variants={slideInTop}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-[#14120f] font-bold text-xl"
              >
                {item.title}
              </motion.h3>

              <motion.p
                initial="hidden"
                variants={slideInTop}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3, margin: "-40px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[#5E5E5E] leading-relaxed mt-2"
              >
                {item.desc}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
