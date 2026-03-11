"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedTitle } from "@/components/AnimatedTitle";

type HeroContent = {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  titles: string[];
};

export function Hero({ content }: { content: HeroContent }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:px-10 lg:pb-24 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--text-secondary)]">
            {content.eyebrow}
          </p>
          <h1 className="mt-6 max-w-[11ch] font-[family-name:var(--font-display)] text-[clamp(3.15rem,7.2vw,6.9rem)] leading-[0.94] text-balance">
            {content.headline}
          </h1>
          <div className="mt-7 flex items-baseline gap-3 whitespace-nowrap text-[clamp(1.15rem,2.7vw,2rem)] leading-tight text-[color:var(--text-secondary)]">
            <span>I work across</span>
            <AnimatedTitle titles={content.titles} />
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32, filter: "blur(6px)" }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[32px] border border-[color:var(--border)] bg-[rgba(255,255,255,0.52)] p-8 shadow-[var(--shadow-soft)]"
        >
          <p className="text-lg leading-8 text-[color:var(--text-secondary)]">{content.description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--button-dark)] px-6 py-3 text-sm text-[color:var(--button-light-text)] transition hover:bg-[color:var(--accent)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--button-dark)]"
            >
              {content.primaryCta.label}
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--text)] bg-white/72 px-6 py-3 text-sm text-[color:var(--text)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
            >
              {content.secondaryCta.label}
            </Link>
          </div>
          <div className="mt-10 grid gap-4 border-t border-[color:var(--border)] pt-6 sm:grid-cols-3">
            <div>
              <p className="font-[family-name:var(--font-display)] text-3xl">6+</p>
              <p className="mt-1 text-sm text-[color:var(--text-secondary)]">Years shaping SaaS and digital products</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-3xl">Lead</p>
              <p className="mt-1 text-sm text-[color:var(--text-secondary)]">Former UX/UI Lead with discovery and system depth</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-3xl">Teach</p>
              <p className="mt-1 text-sm text-[color:var(--text-secondary)]">Classroom insight that sharpens inclusive design</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
