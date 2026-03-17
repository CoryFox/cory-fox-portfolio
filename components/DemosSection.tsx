"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { DemoProject } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function DemosSection({ intro, demos }: { intro: string; demos: DemoProject[] }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-anchor overflow-hidden px-6 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-24" id="demos">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            id="demos-heading"
            label="Demos"
            title="Smaller demo builds."
            description={intro}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-7">
          {demos.map((demo, index) => (
            <motion.article
              key={demo.key}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 36 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white/70 shadow-[var(--shadow-soft)] backdrop-blur-sm"
            >
              <div className="overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--bg-alt)]">
                <Image
                  src={demo.desktopImage}
                  alt={`${demo.title} desktop preview`}
                  width={1400}
                  height={900}
                  className="aspect-[5/4] w-full object-cover object-top"
                />
              </div>

              <div className="flex flex-1 flex-col space-y-3 p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                  <span>{demo.category}</span>
                  <span>/</span>
                  <span>{demo.tech.slice(0, 2).join(" / ")}</span>
                </div>
                <div>
                  <h3 className="card-title title-two-line min-h-[2.2em] font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.045em] text-[color:var(--accent)]">
                    {demo.title}
                  </h3>
                  <p className="mt-2 min-h-[3.75rem] text-[0.98rem] leading-7 text-[color:var(--text)]">
                    {demo.subtitle}
                  </p>
                </div>
                <div className="mt-1 flex flex-wrap gap-2">
                  {demo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[color:var(--border)] bg-white px-3 py-1 text-xs text-[color:var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-1 rounded-[1.35rem] border border-[color:var(--border)] bg-[color:var(--bg-alt)]/72 p-3.5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                    Overview
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--text)]">{demo.overview}</p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-[color:var(--border)] pt-4">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                    Demo build
                  </p>
                  <Link
                    href={demo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-dark inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                  >
                    Open demo
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
