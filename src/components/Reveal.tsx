"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Adds the scroll-reveal animation to every .rv element on the page. */
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv:not(.in)"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 60}ms`; io.observe(el); });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
