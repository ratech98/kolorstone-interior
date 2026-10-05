"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/data";
import { X, ArrowRight } from "lucide-react";

export default function ProjectGallery({
  projects,
  compact = false,
}: {
  projects: Project[];
  compact?: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const p = active === null ? null : projects[active];

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      lastFocus.current?.focus();
    };
  }, [active]);

  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${compact ? "lg:grid-cols-2 gap-6" : "lg:grid-cols-3 gap-6 md:gap-8"}`}
        id="grid"
      >
        {projects.map((pr, i) => (
          <button
            key={pr.name}
            className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] md:aspect-square w-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`View ${pr.name}`}
            onClick={(e) => {
              lastFocus.current = e.currentTarget;
              setActive(i);
            }}
          >
            {/* Background Image */}
            <Image
              src={pr.imgs[0]}
              alt={pr.alt}
              fill
              className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
              sizes="(max-width:700px) 100vw, (max-width:1024px) 50vw, 33vw"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <small className="text-gold text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 drop-shadow-md">
                {pr.cat}
              </small>
              <h3 className="text-white font-serif text-3xl md:text-4xl leading-tight mb-2 drop-shadow-md">
                {pr.name}
              </h3>

              {/* Hidden details that appear on hover */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <p className="text-white/80 text-sm md:text-base mb-6 pt-2">
                    {pr.place} • {pr.style}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold font-medium uppercase tracking-wider text-sm transition-transform duration-500 ease-out group-hover:translate-x-2">
                    View Project <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center p-4 md:p-8 lg:p-12 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          p ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lbT"
        aria-hidden={!p}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-ink/95 backdrop-blur-3xl -z-10"
          onClick={() => setActive(null)}
        />

        {/* Modal Header */}
        <div className="w-full max-w-[1400px] flex justify-between items-start mb-8 md:mb-12 shrink-0 relative z-10">
          <div className="max-w-2xl">
            <h3
              id="lbT"
              className="text-white font-serif text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight"
            >
              {p?.name}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-gold/90 font-medium tracking-wide">
              <span>{p?.place}</span>
              <span className="w-1 h-1 rounded-full bg-gold/50" />
              <span>{p?.style}</span>
              <span className="w-1 h-1 rounded-full bg-gold/50" />
              <span className="uppercase tracking-widest text-sm">
                {p?.cat}
              </span>
            </div>
            {p?.desc && (
              <p className="text-white/70 text-base md:text-lg mt-6 leading-relaxed font-light">
                {p.desc}
              </p>
            )}
          </div>
          <button
            ref={closeRef}
            className="text-white/70 hover:text-white p-3 md:p-4 rounded-full hover:bg-white/10 transition-colors bg-white/5 backdrop-blur-md shrink-0 ml-4"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Modal Images Grid */}
        <div
          className="w-full max-w-[1400px] h-full overflow-y-auto pb-10 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {p?.imgs.map((s, k) => (
              <div
                key={s}
                className={`relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-white/5 group ${
                  k === 0
                    ? "md:col-span-2 aspect-[4/3] md:aspect-[21/9]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={s}
                  alt={`${p.alt} ${k + 1}`}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, (max-width:1400px) 50vw, 700px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
