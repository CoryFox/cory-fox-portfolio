"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedTitle({ titles }: { titles: string[] }) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const longestTitleLength = titles.reduce((max, title) => Math.max(max, title.length), 0);

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
    return (
      <span className="inline-flex items-center whitespace-nowrap font-semibold text-[color:var(--accent)]">
        {titles[0]}
      </span>
    );
  }

  return (
    <span
      className="relative inline-flex min-h-[1.35em] items-center overflow-visible"
      style={{ width: `${Math.max(longestTitleLength + 1, 12)}ch` }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[index]}
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap font-semibold text-[color:var(--accent)]"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
