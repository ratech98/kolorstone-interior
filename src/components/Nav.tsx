"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const LINKS: [string, string][] = [
  ["/", "Home"], ["/#work", "Our Work"], ["/#services", "Services"], ["/#areas", "Areas"],
  ["/#about", "About"], ["/#process", "Process"], ["/#instagram", "Instagram"], ["/#contact", "Contact"],
];

export default function Nav({ alwaysSolid = false }: { alwaysSolid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const bg = document.getElementById("heroBg");
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (bg) bg.style.transform = `translateY(${Math.min(window.scrollY, 900) * 0.15}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav id="nav" className={alwaysSolid || scrolled ? "solid" : ""} aria-label="Main">
      <Link href="/" className="logo" onClick={() => setOpen(false)}>{SITE.name}</Link>
      <button className={`burger${open ? " open" : ""}`} aria-label="Menu" aria-expanded={open} aria-controls="links" onClick={() => setOpen((o) => !o)}>
        <i /><i />
      </button>
      <div className={`links${open ? " open" : ""}`} id="links">
        {LINKS.map(([href, label]) => (
          <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <Link href="/#contact" className="btn" onClick={() => setOpen(false)}>Enquire Now</Link>
      </div>
    </nav>
  );
}
