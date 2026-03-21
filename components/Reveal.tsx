"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
  mode = "inView"
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  mode?: "inView" | "immediate";
}) {
  const prefersReducedMotion = useReducedMotion();
  const immediate = prefersReducedMotion || mode === "immediate";

  return (
    <motion.div
      initial={immediate ? false : { opacity: 0, y: 32, filter: "blur(8px)" }}
      animate={immediate ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={immediate ? undefined : { once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
