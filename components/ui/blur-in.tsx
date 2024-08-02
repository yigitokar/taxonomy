"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  containerClassName?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const BlurIn = ({ 
  word, 
  className, 
  containerClassName,
  variant, 
  duration = 1 
}: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <div className={containerClassName}>
      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ duration }}
        variants={combinedVariants}
        className={cn(
          "font-display text-center font-bold tracking-[-0.02em] drop-shadow-sm",
          className
        )}
      >
        {word}
      </motion.h1>
    </div>
  );
};

export default BlurIn;