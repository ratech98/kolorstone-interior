"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, MessageCircle, X } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { SITE } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

// WhatsApp Brand SVG Icon
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Floating() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initialize Cal.com embed integration
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: {
            light: { "cal-brand": "#3F6A80" },
            dark: { "cal-brand": "#3F6A80" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (err) {
        console.error("Failed to initialize Cal.com embed:", err);
      }
    })();
  }, []);

  // Close floating menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const rawPhone = SITE.phone?.replace(/[^0-9]/g, "") || SITE.whatsapp;
  const whatsappUrl = `https://wa.me/${SITE.whatsapp || rawPhone}?text=${encodeURIComponent(
    SITE.whatsappMessage ||
      "Hi, I would like to enquire about your interior design services.",
  )}`;

  const handleActionClick = (actionName: string) => {
    trackEvent({
      action: "click",
      category: "Floating CTA",
      label: actionName,
    });
  };

  const actionItems = [
    {
      id: "whatsapp",
      label: "WhatsApp Chat",
      sublabel: "Instant response",
      href: whatsappUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      icon: <WhatsAppIcon className="w-5 h-5 text-white" />,
      badgeColor:
        "bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)]",
      hoverBg: "hover:bg-[#25D366]/10 active:bg-[#25D366]/20",
      isCal: false,
    },
    {
      id: "cal",
      label: "Book a Meeting",
      sublabel: "cal.com/kolorstone",
      href: undefined,
      icon: <Calendar className="w-5 h-5 text-white" />,
      badgeColor:
        "bg-[#3F6A80] text-white shadow-[0_4px_16px_rgba(63,106,128,0.4)]",
      hoverBg: "hover:bg-[#3F6A80]/10 active:bg-[#3F6A80]/20",
      isCal: true,
      calLink: "vijay-iy2uad/kolorstone",
    },
    {
      id: "call",
      label: "Call Directly",
      sublabel: SITE.phoneDisplay || SITE.phone,
      href: `tel:${SITE.phone}`,
      icon: <Phone className="w-5 h-5 text-white" />,
      badgeColor:
        "bg-[#1E293B] text-white shadow-[0_4px_16px_rgba(30,41,59,0.35)]",
      hoverBg: "hover:bg-[#1E293B]/10 active:bg-[#1E293B]/20",
      isCal: false,
    },
  ];

  return (
    <>
      {/* Background touch-dismiss overlay when open on mobile/tablet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[9998]"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div
        className="fixed bottom-[20%] right-5 sm:bottom-6 sm:right-6 md:bottom-[15%] lg:bottom-[8%] md:right-8 z-[9999] flex flex-col items-end select-none pointer-events-auto"
        style={{
          paddingBottom: "max(env(safe-area-inset-bottom, 0px), 0px)",
          paddingRight: "max(env(safe-area-inset-right, 0px), 0px)",
        }}
        role="region"
        aria-label="Quick contact actions"
      >
        {/* Floating Menu Popout */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 12 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="mb-3 flex flex-col gap-2.5 items-end max-w-[calc(100vw-2rem)]"
            >
              {actionItems.map((item, index) => {
                const content = (
                  <motion.div
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ delay: index * 0.04, duration: 0.16 }}
                    className={`group flex items-center gap-3 pl-3.5 sm:pl-4 pr-2 sm:pr-2.5 py-2 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200/80 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.22),0_4px_12px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]`}
                  >
                    <div className="flex flex-col text-right">
                      <span className="text-[13px] sm:text-[13.5px] font-semibold text-gray-900 group-hover:text-[#3F6A80] transition-colors leading-tight">
                        {item.label}
                      </span>
                      <span className="text-[10.5px] sm:text-[11px] font-medium text-gray-500 tracking-tight">
                        {item.sublabel}
                      </span>
                    </div>

                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-108 ${item.badgeColor}`}
                    >
                      {item.icon}
                    </div>
                  </motion.div>
                );

                if (item.isCal) {
                  return (
                    <button
                      key={item.id}
                      type="button"
                      data-cal-link={item.calLink}
                      data-cal-config='{"layout":"month_view"}'
                      onClick={() => {
                        handleActionClick("Cal.com Meeting");
                        setIsOpen(false);
                      }}
                      className="outline-none focus-visible:ring-2 focus-visible:ring-[#3F6A80] rounded-2xl cursor-pointer"
                      aria-label="Schedule a call on Cal.com"
                    >
                      {content}
                    </button>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    onClick={() => {
                      handleActionClick(item.label);
                      setIsOpen(false);
                    }}
                    className="outline-none focus-visible:ring-2 focus-visible:ring-[#3F6A80] rounded-2xl cursor-pointer"
                    aria-label={item.label}
                  >
                    {content}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Trigger Button */}
        <div className="relative">
          {/* Elegant soft ambient ripple when closed (indicates without dominating) */}
          {!isOpen && (
            <>
              {/* Outer soft expanding wave */}
              <motion.span
                className="absolute inset-0 rounded-full border border-[#3F6A80]/30 pointer-events-none"
                animate={{
                  scale: [1, 1.45],
                  opacity: [0.45, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeOut",
                  repeatDelay: 1.2,
                }}
              />
              {/* Inner ambient soft glow */}
              <motion.span
                className="absolute inset-0 rounded-full bg-[#3F6A80] pointer-events-none"
                animate={{
                  scale: [0.95, 1.15, 0.95],
                  opacity: [0.15, 0.28, 0.15],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </>
          )}

          <button
            onClick={() => {
              const nextState = !isOpen;
              setIsOpen(nextState);
              trackEvent({
                action: "toggle",
                category: "Floating CTA",
                label: nextState ? "Open" : "Close",
              });
            }}
            aria-expanded={isOpen}
            aria-haspopup="true"
            aria-label={
              isOpen ? "Close contact options" : "Open contact options"
            }
            className={`relative group flex items-center justify-center w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] md:w-[62px] md:h-[62px] rounded-full text-white cursor-pointer transition-all duration-300 shadow-[0_8px_24px_rgba(63,106,128,0.45)] hover:shadow-[0_12px_32px_rgba(63,106,128,0.55)] active:scale-95 outline-none focus-visible:ring-4 focus-visible:ring-[#3F6A80]/40 ${
              isOpen
                ? "bg-[#1E293B] rotate-90"
                : "bg-gradient-to-tr from-[#2d5062] via-[#3F6A80] to-[#50849f] hover:scale-105 active:scale-95"
            }`}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 0.95 : 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.4]" />
              ) : (
                <MessageCircle className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white stroke-[2.2] group-hover:scale-110 transition-transform duration-200" />
              )}
            </motion.div>
          </button>
        </div>
      </div>
    </>
  );
}
