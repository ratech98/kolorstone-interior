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

  const isSolid = alwaysSolid || scrolled;

  return (
    <nav
      id="nav"
      className={isSolid ? "solid" : ""}
      aria-label="Main"
      style={{
        position: 'fixed',
        top: isSolid ? 0 : '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: isSolid ? '100%' : '85%',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isSolid ? '14px var(--pad)' : '14px 36px',
        color: '#fff',
        background: isSolid
          ? 'rgba(20, 18, 15, 0.65)'
          : 'rgba(20, 18, 15, 0.3)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: isSolid ? 0 : '60px',
        border: isSolid ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: isSolid
          ? '0 4px 20px rgba(0,0,0,0.3)'
          : '0 8px 32px rgba(0,0,0,0.25)',
        transition: 'all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <Link href="/" className="logo" onClick={() => setOpen(false)}>{SITE.name}</Link>
      <button className={`burger${open ? " open" : ""}`} aria-label="Menu" aria-expanded={open} aria-controls="links" onClick={() => setOpen((o) => !o)}>
        <i /><i />
      </button>
      <div className={`links${open ? " open" : ""}`} id="links">
        {LINKS.map(([href, label]) => (
          <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <Link
          href="/#contact"
          className="btn"
          onClick={() => setOpen(false)}
          style={{
            padding: '10px 24px',
            borderRadius: '50px',
            borderColor: 'var(--gold)',
          }}
        >
          Enquire Now
        </Link>
      </div>
    </nav>
  );
}

