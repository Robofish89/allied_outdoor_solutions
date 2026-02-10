"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface HeroAnimationProps {
  children: ReactNode;
}

export function HeroHeading({ children }: HeroAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSubtitle({ children }: HeroAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function HeroCTA({ children }: HeroAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
