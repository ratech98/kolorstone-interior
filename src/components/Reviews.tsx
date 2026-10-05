"use client";
import { useEffect, useState } from "react";
import type { Review } from "@/lib/data";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const [i, setI] = useState(0);
  const [per, setPer] = useState(1);
  const [paused, setPaused] = useState(false);
  const max = Math.max(0, reviews.length - per);

  useEffect(() => {
    const f = () => setPer(window.innerWidth >= 900 ? 2 : 1);
    f();
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  const go = (n: number) => setI(n > max ? 0 : n < 0 ? max : n);
  useEffect(() => {
    if (paused || reviews.length <= per) return;
    const t = setInterval(() => setI((c) => (c + 1 > max ? 0 : c + 1)), 6500);
    return () => clearInterval(t);
  }, [paused, max, per, reviews.length]);

  return (
    <div className="car" onPointerEnter={() => setPaused(true)}>
      <div style={{ overflow: "hidden" }}>
        <div className="track" style={{ transform: `translateX(-${(Math.min(i, max) * 100) / per}%)` }}>
          {reviews.map((r, k) => (
            <div className="rev" key={k}>
              <blockquote>
                <div className="stars" aria-label={`${r.stars} out of 5 stars`}>{"★".repeat(r.stars)}</div>
                <q>{r.text}</q>
                <cite>{r.name}<span>{r.type}</span></cite>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      <div className="cc">
        <button aria-label="Previous review" onClick={() => go(i - 1)}>&larr;</button>
        <button aria-label="Next review" onClick={() => go(i + 1)}>&rarr;</button>
        <div className="dots">{Array.from({ length: max + 1 }, (_, k) => <i key={k} className={k === i ? "on" : ""} />)}</div>
      </div>
    </div>
  );
}
