import Link from "next/link";
import { Home } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

export const metadata = {
  title: "Page Not Found - Kolorstones Home Interiors",
  description: "The page you are looking for doesn't exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="bg-[#F8F9FA] text-[#14120f] font-satoshi flex flex-col justify-center items-center px-6 pt-36 pb-20 lg:pt-28 lg:pb-28 lg:min-h-screen relative overflow-hidden"
    >
      {/* Decorative background glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3F6A80]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#3F6A80]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full mx-auto text-center z-10 flex flex-col items-center">
        {/* Subtle pill badge */}
        <AnimatedText animateOnLoad={true}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3F6A80]/10 text-[#3F6A80] text-xs md:text-sm font-semibold tracking-wider uppercase mb-6">
            Error 404
          </div>
        </AnimatedText>

        {/* Big stylized 404 */}
        <AnimatedText animateOnLoad={true} delay={0.1}>
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-serif font-bold text-[#14120f] tracking-tight leading-none mb-4">
            4<span className="text-[#3F6A80]">0</span>4
          </h1>
        </AnimatedText>

        {/* Headline */}
        <AnimatedText animateOnLoad={true} delay={0.2}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#14120f] mb-4">
            Page Not Found
          </h2>
        </AnimatedText>

        {/* Description */}
        <AnimatedText animateOnLoad={true} delay={0.3}>
          <p className="text-base sm:text-lg text-[#5E5E5E] max-w-md mx-auto mb-10 leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </AnimatedText>

        {/* Direct Home Navigation Button */}
        <AnimatedText animateOnLoad={true} delay={0.4}>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#3F6A80] text-white font-medium text-base shadow-md hover:bg-[#34596d] hover:shadow-lg transition-all duration-300 group"
          >
            <Home size={18} className="transition-transform group-hover:-translate-y-0.5" />
            <span>Back to Home</span>
          </Link>
        </AnimatedText>
      </div>
    </main>
  );
}


