"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, ChevronDown, MessageCircle, Phone, X } from "lucide-react";
import { SITE, unsplash } from "@/lib/site";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  },
};

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="hero" id="home" style={{ position: 'relative', height: '100svh', minHeight: '700px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '0 var(--pad)', overflow: 'hidden' }}>
        
        {/* Background Image with Smooth, Transparent Gradient Overlay */}
        <motion.div 
          className="bg" 
          id="heroBg"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        >
          <Image 
            src={unsplash(SITE.heroImage, 2000)} 
            alt={`Elegant modern living room interior by ${SITE.name} in Thanjavur`} 
            fill 
            priority 
            fetchPriority="high" 
            sizes="100vw" 
            quality={85} 
            style={{ objectFit: 'cover' }}
          />
          {/* A sleek, feathered gradient that darkens only the text area, leaving the rest of the image completely visible */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(15,14,12,0.85) 0%, rgba(15,14,12,0.5) 45%, rgba(15,14,12,0) 80%), linear-gradient(0deg, rgba(15,14,12,0.6) 0%, rgba(15,14,12,0) 30%)' }} />
        </motion.div>
        
        {/* Main Content (No Box, Just clean typography on top of the gradient) */}
        <div className="in" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
          {mounted && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                maxWidth: '820px',
                paddingTop: '20px'
              }}
            >
              <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', background: 'var(--gold)' }} />
                <p className="studio-p" style={{ color: 'var(--gold)', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', margin: 0, fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                  {SITE.name} · Thanjavur
                </p>
              </motion.div>
              
              <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3.2rem, 6.5vw, 6rem)', lineHeight: 1.05, marginBottom: '24px', fontWeight: 500, color: '#fff', textShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                Spaces Designed to Feel Like Home.
              </motion.h1>
              
              <motion.p variants={itemVariants} style={{ maxWidth: '640px', fontSize: 'clamp(1.05rem, 1.2vw, 1.2rem)', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.95)', marginBottom: '40px', fontWeight: 400, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                Thoughtfully designed interiors that combine functionality, elegance, and your personal style. Serving Thanjavur, Trichy, Kumbakonam and nearby towns.
              </motion.p>
              
              <motion.div variants={itemVariants} className="ctas" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/#work" className="btn fill" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 36px', borderRadius: '50px', fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.05em', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                  View Our Work <ArrowRight size={18} />
                </Link>
                <Link href="/#contact" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 36px', borderRadius: '50px', fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.05em', borderColor: 'rgba(255,255,255,0.4)', color: '#fff', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(4px)', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                  Enquire Now
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>
        
        {/* Scroll indicator */}
        {mounted && (
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: 'var(--gold)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 2 }}
          >
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.9, fontWeight: 500, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown size={20} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
            </motion.div>
          </motion.div>
        )}
      </header>

      {/* Global Floating Contact Action Button */}
      {mounted && (
        <div style={{ position: 'fixed', bottom: '40px', right: '40px', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <AnimatePresence>
            {contactOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
              >
                <a 
                  href={`https://wa.me/${SITE.phone?.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: '#25D366', color: '#fff',
                    boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
                    textDecoration: 'none',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <WhatsAppIcon size={28} />
                </a>
                <a 
                  href={`tel:${SITE.phone}`} 
                  aria-label="Call Us"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'var(--gold)', color: '#fff',
                    boxShadow: '0 8px 24px rgba(176, 141, 87, 0.4)',
                    textDecoration: 'none',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Phone size={24} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
          
          <button
            onClick={() => setContactOpen(!contactOpen)}
            aria-label="Contact Options"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '68px', height: '68px', borderRadius: '50%',
              background: 'var(--ink)', color: '#fff',
              border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              transition: 'background 0.3s, transform 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'var(--char)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'var(--ink)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: contactOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex' }}
            >
              {contactOpen ? <X size={32} /> : <MessageCircle size={32} />}
            </motion.div>
          </button>
        </div>
      )}
    </>
  );
}
