import Link from "next/link";
import Image from "next/image";
import { SITE, fullAddress } from "@/lib/site";
import logo from "@/assets/logo.png";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const InstagramIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <>
      <div className="relative w-full h-[80px] md:h-[120px] overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-[#1E1E1E]"
          style={{
            clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>
      {/* Negative margin to prevent any hairline gaps between slant and footer */}
      <footer className="bg-[#1E1E1E] text-white pb-16 pt-4 lg:pt-8 px-6 lg:px-16 font-satoshi -mt-1">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
          {/* Top Row: Auto-balancing Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-12 lg:gap-8">
            {/* Column 1: Logo & Info */}
            <div className="flex flex-col gap-6">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Kolorstones Logo"
                  width={180}
                  className="w-auto h-12 object-contain"
                />
              </Link>
              <p className="text-[#A3A3A3] text-[15px] leading-relaxed">
                Kolorstones Home Interiors is a Thanjavur interior design studio
                creating homes and workplaces that balance function, craft and
                personal style.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-6 lg:pl-8">
              <h4 className="font-serif text-xl tracking-wide text-white">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-4 text-[#A3A3A3] text-[15px]">
                <li>
                  <Link
                    href="/#work"
                    className="hover:text-white transition-colors"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#process"
                    className="hover:text-white transition-colors"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#reviews"
                    className="hover:text-white transition-colors"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            {/* <div className="flex flex-col gap-6">
            <h4 className="font-serif text-xl tracking-wide text-white">Services</h4>
            <ul className="flex flex-col gap-4 text-[#A3A3A3] text-[15px]">
              <li><span className="cursor-default hover:text-white transition-colors">Residential Interiors</span></li>
              <li><span className="cursor-default hover:text-white transition-colors">Modular Kitchens</span></li>
              <li><span className="cursor-default hover:text-white transition-colors">Office & Commercial</span></li>
              <li><span className="cursor-default hover:text-white transition-colors">Turnkey Execution</span></li>
            </ul>
          </div> */}

            {/* Column 4: Contact */}
            <div className="flex flex-col gap-6">
              <h4 className="font-serif text-xl tracking-wide text-white">
                Contact
              </h4>
              <div className="flex flex-col gap-4 text-[#A3A3A3] text-[15px]">
                {/* <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
              </div> */}
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{fullAddress()}</span>
                </div>

                {/* Icons instead of text for Phone, Whatsapp, Instagram */}
                <div className="flex items-center gap-6 mt-4">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="text-[#A3A3A3] hover:text-white transition-transform hover:scale-110"
                    aria-label="Phone"
                  >
                    <Phone size={22} />
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A3A3A3] hover:text-[#25D366] transition-transform hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={22} />
                  </a>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A3A3A3] hover:text-[#E1306C] transition-transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10"></div>

          {/* Bottom Row: Copyright (Centered) */}
          <div className="flex justify-center text-[#A3A3A3] text-[14px]">
            <p className="text-center">
              © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
