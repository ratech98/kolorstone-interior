"use client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { SITE } from "@/lib/site";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const LINKS: [string, string, string][] = [
  ["/", "Home", "home"],
  ["/#work", "Our Work", "work"],
  ["/#services", "Services", "services"],
  ["/#areas", "Areas", "areas"],
  ["/#about", "About", "about"],
  ["/#process", "Process", "process"],
  ["/#instagram", "Instagram", "instagram"],
  ["/#contact", "Contact", "contact"],
];

const SECTION_IDS = [
  "home",
  "work",
  "services",
  "areas",
  "about",
  "process",
  "instagram",
  "contact",
];

export default function Nav({
  alwaysSolid = false,
}: {
  alwaysSolid?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // Track scroll position and parallax
  useEffect(() => {
    const bg = document.getElementById("heroBg");
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (bg)
        bg.style.transform = `translateY(${Math.min(window.scrollY, 900) * 0.15}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    if (pathname !== "/") return;

    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }

            // Find the most visible section
            let maxRatio = 0;
            let maxId = "home";
            visibleSections.forEach((ratio, sectionId) => {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                maxId = sectionId;
              }
            });
            setActiveSection(maxId);
          });
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-80px 0px 0px 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isSolid = alwaysSolid || scrolled;

  const isActive = useCallback(
    (sectionId: string) => {
      if (pathname !== "/") return false;
      return activeSection === sectionId;
    },
    [pathname, activeSection],
  );

  return (
    <>
      <nav
        id="nav"
        aria-label="Main"
        className={`fixed left-1/2 -translate-x-1/2 z-[60] flex items-center justify-between text-white backdrop-blur-3xl transition-all duration-[450ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isSolid
            ? "top-0 w-full py-3 px-5 md:px-[clamp(20px,5vw,72px)] bg-black/50 rounded-none border-none shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            : "top-4 w-[92%] md:w-[85%] py-3 px-5 md:px-9 bg-black/50 rounded-[60px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        }`}
      >
        <Link
          href="/"
          className="font-serif font-semibold text-xl md:text-2xl tracking-wider z-[70]"
          onClick={() => setOpen(false)}
        >
          {SITE.name}
        </Link>

        {/* Hamburger - mobile only */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-11 h-11 cursor-pointer bg-transparent border-none z-[70]"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="links"
          onClick={() => setOpen((o) => !o)}
        >
          <i
            className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
              open ? "translate-y-[3.7px] rotate-45" : ""
            }`}
          />
          <i
            className={`block w-6 h-[1.5px] bg-white mt-1.5 transition-all duration-300 ${
              open ? "-translate-y-[2px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Desktop links */}
        <div
          className="hidden lg:flex lg:items-center lg:gap-7 lg:text-[0.9rem]"
          id="links-desktop"
        >
          {LINKS.map(([href, label, sectionId]) => {
            const active = isActive(sectionId);
            return (
              <Link
                key={label}
                href={href}
                className={`relative group py-1 transition-colors duration-200 select-none ${
                  active ? "opacity-100" : "opacity-85 hover:opacity-100"
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
                <span
                  className={`absolute left-1/2 -bottom-1.5 h-[2px] bg-gold -translate-x-1/2 transition-all duration-300 ease-out ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="px-6 py-2.5 rounded-full border border-white bg-white/20 backdrop-blur-2xl hover:border-gold text-white hover:bg-gold transition-colors duration-250"
            onClick={() => setOpen(false)}
          >
            Enquire Now
          </Link>
        </div>
      </nav>

      {/* Backdrop overlay - blur + darken background */}
      <div
        className={`fixed inset-0 z-[50] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile/Tablet sidebar - slides from right, 50% width */}
      <aside
        className={`fixed top-0 right-0 h-full w-1/2 max-w-[320px] z-[65] bg-black flex flex-col pt-24 pb-10 px-8 gap-1 overflow-y-auto transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        id="links-mobile"
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <X size={24} />
        </button>
        {LINKS.map(([href, label, sectionId]) => {
          const active = isActive(sectionId);
          return (
            <Link
              key={label}
              href={href}
              className={`relative py-3 text-[1.05rem] font-medium tracking-wide transition-all duration-200 select-none ${
                active ? "text-white opacity-100" : "text-white/70 hover:text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
              {/* White underline for active */}
              <span
                className={`absolute left-0 bottom-1.5 h-[2px] bg-white transition-all duration-300 ease-out ${
                  active ? "w-8" : "w-0"
                }`}
              />
            </Link>
          );
        })}
        
        {/* Divider */}
        <div className="w-10 h-px bg-white/20 my-4" />
        
        <Link
          href="/#contact"
          className="px-6 py-3 rounded-full border border-white/30 bg-white/10 text-white text-center text-sm font-medium hover:bg-gold hover:border-gold hover:text-black transition-all duration-250"
          onClick={() => setOpen(false)}
        >
          Enquire Now
        </Link>
      </aside>
    </>
  );
}
