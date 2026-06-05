"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef(null);

  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { y: 40 },
    right: { y: -40 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{ ...directionMap[direction] }}
      whileInView={{ x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
