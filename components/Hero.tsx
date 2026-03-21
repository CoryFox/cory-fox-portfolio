"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedTitle } from "@/components/AnimatedTitle";

type HeroContent = {
  eyebrow: string;
  headline: string;
  description: string;
  framing: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  titles: string[];
};

export function Hero({ content }: { content: HeroContent }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="px-6 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-40 lg:px-10 lg:pb-24 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
            {content.eyebrow}
          </p>
          <h1 className="mt-6 max-w-[11ch] font-[family-name:var(--font-display)] text-[clamp(3rem,6.2vw,5.8rem)] font-bold uppercase leading-[0.92] tracking-[0.04em] text-balance text-[color:var(--accent)]">
            {content.headline}
            <span className="text-[color:var(--accent)]">.</span>
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-[clamp(1.05rem,2.5vw,1.6rem)] leading-tight text-[color:var(--text-secondary)] sm:gap-3 sm:whitespace-nowrap">
            <span>I work across</span>
            <AnimatedTitle titles={content.titles} />
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32, filter: "blur(6px)" }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-[color:var(--border)] bg-[rgba(255,255,255,0.52)] p-6 shadow-[var(--shadow-soft)] sm:p-8"
        >
          <p className="text-lg leading-8 text-[color:var(--text)]">{content.description}</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--text)]">
            {content.framing}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={content.primaryCta.href}
              className="btn-dark inline-flex items-center justify-center rounded-full px-6 py-3 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--button-dark)]"
            >
              {content.primaryCta.label}
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="btn-light inline-flex items-center justify-center rounded-full px-6 py-3 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
            >
              {content.secondaryCta.label}
            </Link>
          </div>
          <div className="mt-8 grid gap-4 border-t border-[color:var(--border)] pt-6 sm:grid-cols-3">
            <div>
              <p className="font-[family-name:var(--font-display)] text-[1.5rem] leading-tight text-[color:var(--accent)] sm:text-[1.65rem]">6+ Years in SaaS</p>
              <p className="mt-1 text-sm text-[color:var(--text-muted)]">Product, frontend, and full-stack delivery across complex platforms</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-[1.5rem] leading-tight text-[color:var(--accent)] sm:text-[1.65rem]">UX/UI Leadership</p>
              <p className="mt-1 text-sm text-[color:var(--text-muted)]">Led discovery, design systems, and implementation in Agile teams</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-[1.5rem] leading-tight text-[color:var(--accent)] sm:text-[1.65rem]">Full-Stack Delivery</p>
              <p className="mt-1 text-sm text-[color:var(--text-muted)]">Angular, Flask, MongoDB, C# .NET, and modern React delivery</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
