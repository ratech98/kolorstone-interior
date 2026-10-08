"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  once = false,
  animateOnLoad = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  animateOnLoad?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={animateOnLoad ? { opacity: 1, y: 0 } : undefined}
      whileInView={!animateOnLoad ? { opacity: 1, y: 0 } : undefined}
      viewport={!animateOnLoad ? { once, amount: 0.1, margin: "50px" } : undefined}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
