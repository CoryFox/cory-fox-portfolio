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
          "grid gap-5 sm:gap-6 lg:grid-cols-12 lg:items-center lg:gap-12",
          isReverse ? "lg:[&>*:first-child]:order-2" : "",
          "lg:[&>*:first-child]:order-1 lg:[&>*:last-child]:order-2"
        )}
      >
        <div className="order-2 relative lg:col-span-5 lg:order-none">
          <div className="absolute -top-3 left-0 text-[3.75rem] leading-none text-black/[0.08] sm:text-[7rem] lg:-left-4 lg:-top-4 lg:text-[9rem]">
            {(index + 1).toString().padStart(2, "0")}
          </div>
          <div className="relative z-10 max-w-xl space-y-5 rounded-3xl border border-[color:var(--border)] bg-[rgba(255,255,255,0.7)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:space-y-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
              {project.role}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-4xl leading-[0.94] text-balance sm:text-5xl lg:text-6xl">
              {project.title}
            </h3>
            <p className="text-base leading-7 text-[color:var(--text-secondary)] sm:text-lg sm:leading-8">{project.summary}</p>
            <div className="grid gap-3 border-y border-[color:var(--border)] py-4 text-sm leading-6 text-[color:var(--text-secondary)]">
              <p>
                <span className="mr-2 text-xs uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">Role</span>
                {project.role}
              </p>
              <p>
                <span className="mr-2 text-xs uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">Focus</span>
                {project.focus}
              </p>
              <p>
                <span className="mr-2 text-xs uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">Outcome</span>
                {project.outcome}
              </p>
            </div>
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
            <div className="flex flex-col items-start gap-4 border-t border-[color:var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                {project.year} / {project.status}
              </p>
              <Link
                href={`/work/${project.slug}`}
                className="btn-dark inline-flex shrink-0 whitespace-nowrap items-center justify-center rounded-full px-6 py-3 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
              >
                View case study
              </Link>
            </div>
          </div>
        </div>

        <div className="order-1 relative lg:col-span-7 lg:order-none">
          <motion.div
            style={{ y: accentY }}
            className={cn(
              "absolute inset-x-6 top-6 bottom-6 hidden rounded-[40px] border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(16,42,67,0.1),rgba(255,255,255,0.18))] lg:block",
              isReverse ? "right-20 left-0" : "left-20 right-0"
            )}
          />
          <div className="relative grid gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(240px,0.58fr)] lg:p-6">
            <motion.div
              style={{ y: imageY }}
              className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] shadow-[0_24px_60px_rgba(17,17,17,0.12)] sm:shadow-[0_32px_80px_rgba(17,17,17,0.12)] lg:col-span-2"
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
              className="rounded-[1.75rem] border border-[color:var(--border)] bg-white/88 p-5 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:p-6"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--text-secondary)] sm:text-xs">
                Outcome
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)] sm:text-base sm:leading-7">
                {project.outcome}
              </p>
            </motion.div>

            <motion.div
              style={{ y: accentY }}
              className="overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-white/88 shadow-[var(--shadow-soft)]"
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
      </div>
    </motion.article>
  );
}
