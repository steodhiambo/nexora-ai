"use client";

import { type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex"
    >
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          variant === "primary" &&
            "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40",
          variant === "secondary" &&
            "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/25",
          variant === "ghost" &&
            "text-primary-500 hover:bg-primary-50",
          variant === "outline" &&
            "border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
}
