"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/data";

export default function ProjectGallery({ projects, compact = false }: { projects: Project[]; compact?: boolean }) {
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
      <div className="grid" id="grid">
        {projects.map((pr, i) => (
          <button
            key={pr.name}
            className={`card rv${compact ? " sm" : ""}`}
            aria-label={`View ${pr.name}`}
            onClick={(e) => { lastFocus.current = e.currentTarget; setActive(i); }}
          >
            <Image src={pr.imgs[0]} alt={pr.alt} fill sizes="(max-width:700px) 50vw, 40vw" />
            <div className="ov">
              <small>{pr.cat}</small>
              <h3>{pr.name}</h3>
              <small>{pr.place} • {pr.style}</small>
              <span className="v">View Project →</span>
            </div>
          </button>
        ))}
      </div>

      <div
        className={`lb${p ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lbT"
        aria-hidden={!p}
        onClick={(e) => e.target === e.currentTarget && setActive(null)}
      >
        <div className="top">
          <div>
            <h3 id="lbT">{p?.name}</h3>
            <small style={{ color: "var(--gold)" }}>{p ? `${p.place} • ${p.style}` : ""}</small>
          </div>
          <button ref={closeRef} className="x" aria-label="Close" onClick={() => setActive(null)}>&times;</button>
        </div>
        <p>{p?.desc}</p>
        <div className="imgs">
          {p?.imgs.map((s, k) => (
            <div key={s}>
              <Image src={s} alt={`${p.alt} ${k + 1}`} fill sizes="(max-width:900px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
