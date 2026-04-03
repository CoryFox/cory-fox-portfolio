"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "/#about" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Additional Work", href: "/#additional-work" },
  { label: "Experience", href: "/#experience" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-4 transition duration-300 sm:px-6",
          scrolled
            ? "border-[color:var(--border)] bg-[rgba(246,243,238,0.82)] shadow-[0_14px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-[0.12em] text-[color:var(--accent)]"
        >
          Cory Fox
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[color:var(--text-secondary)] transition hover:text-[color:var(--text)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cv/cory-fox-cv.pdf"
            className="btn-light inline-flex rounded-full px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            View CV
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/55 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-5 bg-[color:var(--text)] transition",
                open && "top-[6px] rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[6px] h-px w-5 bg-[color:var(--text)] transition",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[12px] h-px w-5 bg-[color:var(--text)] transition",
                open && "top-[6px] -rotate-45"
              )}
            />
          </span>
        </button>
      </div>
      <div
        className={cn(
          "mx-auto mt-4 max-w-7xl overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[rgba(246,243,238,0.96)] backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto max-h-[432px] p-6 opacity-100" : "pointer-events-none max-h-0 p-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-4 text-base text-[color:var(--text-secondary)] transition hover:bg-white/60 hover:text-[color:var(--text)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cv/cory-fox-cv.pdf"
            className="btn-dark mt-2 inline-flex justify-center rounded-full px-6 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--button-dark)]"
          >
            View CV
          </Link>
        </nav>
      </div>
    </header>
  );
}
