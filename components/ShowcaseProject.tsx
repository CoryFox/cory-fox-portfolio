"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WorkCaseStudy } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ShowcaseProject({
  project,
  index
}: {
  project: WorkCaseStudy;
  index: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const prefersReducedMotion = useReducedMotion();
  const imageY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [32, -32]);
  const accentY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-24, 24]);
  const isReverse = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-12 lg:gap-12",
          isReverse ? "lg:[&>*:first-child]:order-2" : ""
        )}
      >
        <div className="relative lg:col-span-5">
          <div className="absolute -top-4 left-0 text-[5rem] leading-none text-black/[0.08] sm:text-[7rem] lg:-left-4 lg:text-[9rem]">
            {(index + 1).toString().padStart(2, "0")}
          </div>
          <div className="relative z-10 max-w-xl space-y-6 rounded-[32px] border border-[color:var(--border)] bg-[rgba(255,255,255,0.62)] p-8 shadow-[var(--shadow-soft)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
              {project.role}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-5xl leading-[0.92] text-balance sm:text-6xl">
              {project.title}
            </h3>
            <p className="text-lg leading-8 text-[color:var(--text-secondary)]">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color:var(--border)] bg-white/60 px-3 py-1 text-xs text-[color:var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-[color:var(--border)] pt-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                {project.year} / {project.status}
              </p>
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm text-white transition hover:bg-[color:var(--accent-hover)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
              >
                View case study
              </Link>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <motion.div
            style={{ y: accentY }}
            className={cn(
              "absolute hidden rounded-[40px] border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(16,42,67,0.12),rgba(255,255,255,0.15))] lg:block",
              isReverse ? "-left-8 top-16 h-[78%] w-[62%]" : "right-0 top-0 h-[76%] w-[58%]"
            )}
          />
          <motion.div
            style={{ y: imageY }}
            className="relative overflow-hidden rounded-[40px] border border-[color:var(--border)] bg-[color:var(--bg-alt)] shadow-[0_32px_80px_rgba(17,17,17,0.12)]"
          >
            <Image
              src={project.heroImage}
              alt={`${project.title} showcase image`}
              width={1600}
              height={980}
              className="h-auto w-full"
              priority={index === 0}
            />
          </motion.div>
          <motion.div
            style={{ y: accentY }}
            className={cn(
              "relative mt-[-32px] ml-auto hidden w-[56%] overflow-hidden rounded-[24px] border border-[color:var(--border)] bg-white/88 shadow-[var(--shadow-soft)] lg:block",
              isReverse ? "mr-auto ml-8" : "mr-8"
            )}
          >
            <Image
              src={project.cardImage}
              alt={`${project.title} detail image`}
              width={1200}
              height={900}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
