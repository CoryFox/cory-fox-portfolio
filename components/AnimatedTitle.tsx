"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedTitle({ titles }: { titles: string[] }) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || titles.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % titles.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, titles]);

  if (prefersReducedMotion) {
    return <span>{titles[0]}</span>;
  }

  return (
    <span className="relative inline-flex h-[1.1em] min-w-[10ch] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[index]}
          initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 text-[color:var(--accent)]"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
