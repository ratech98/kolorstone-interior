"use client";
import { motion } from "framer-motion";
import type { Review } from "@/lib/data";
import { Star } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  if (!reviews || reviews.length === 0) return null;

  // Split reviews into two rows
  const mid = Math.ceil(reviews.length / 2);
  const row1 = reviews.slice(0, mid);
  const row2 = reviews.slice(mid);

  const ReviewCard = ({ r }: { r: Review }) => (
    <div className="w-[350px] md:w-[400px] shrink-0 bg-[#FAFAFA] border border-[#EAEAEA] rounded-3xl p-8  hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center gap-1 mb-6 text-[#D4AF37]">
          {[...Array(r.stars || 5)].map((_, idx) => (
            <Star key={idx} size={18} fill="currentColor" stroke="none" />
          ))}
        </div>
        <p className="text-[#14120f] text-[16px] leading-relaxed font-medium mb-8 line-clamp-4">
          "{r.text}"
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#1E1E1E] flex items-center justify-center text-white font-serif text-xl shrink-0">
          {r.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-[#14120f] font-semibold">{r.name}</h4>
          <p className="text-[#5E5E5E] text-sm">{r.type || "Client"}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="reviews"
      className="bg-white py-24 relative font-satoshi overflow-hidden"
    >
      <style>{`
        @keyframes marquee {
          to { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee linear infinite reverse;
        }
        .scroller-track {
          display: flex;
          width: max-content;
          gap: 1.5rem;
        }
        /* Desktop: Pause on hover */
        @media (hover: hover) {
          .pause-on-hover:hover .scroller-track {
            animation-play-state: paused;
          }
        }
        
        /* Mobile/Touch: Pause ONLY while tapping and holding */
        @media (hover: none) {
          .pause-on-hover:active .scroller-track {
            animation-play-state: paused;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <AnimatedText>
          <h2 className="text-4xl md:text-5xl font-serif text-[#14120f] mb-6">
            What Our Clients Say
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <p className="text-[#5E5E5E] text-lg md:text-xl max-w-2xl mx-auto font-light">
            Real stories from people who trusted us with their spaces.
          </p>
        </AnimatedText>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex flex-col gap-6 overflow-hidden pb-8 pause-on-hover">
        {/* Left/Right Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Scrolling Left) */}
        <div
          className="scroller-track animate-marquee"
          style={{ animationDuration: `${Math.max(row1.length * 5, 10)}s` }}
        >
          <div className="flex gap-6">
            {row1.map((r, i) => (
              <ReviewCard key={`r1-a-${i}`} r={r} />
            ))}
          </div>
          <div className="flex gap-6">
            {row1.map((r, i) => (
              <ReviewCard key={`r1-b-${i}`} r={r} />
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolling Right) */}
        {row2.length > 0 && (
          <div
            className="scroller-track animate-marquee-reverse ml-[-20%]"
            style={{ animationDuration: `${Math.max(row2.length * 5, 10)}s` }}
          >
            <div className="flex gap-6">
              {row2.map((r, i) => (
                <ReviewCard key={`r2-a-${i}`} r={r} />
              ))}
            </div>
            <div className="flex gap-6">
              {row2.map((r, i) => (
                <ReviewCard key={`r2-b-${i}`} r={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
