import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Demos", href: "/#demos" },
  { label: "Experience", href: "/#experience" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" }
];

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-3xl border border-[color:var(--border)] bg-white/58 px-6 py-6 shadow-[var(--shadow-soft)] sm:px-8 sm:py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-[0.12em] text-[color:var(--accent)] sm:text-4xl"
            >
              Cory Fox
            </Link>
            <p className="mt-3 max-w-md text-base leading-7 text-[color:var(--text-secondary)]">
              I design digital products that make complex systems easier to understand.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="btn-light rounded-full px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4 border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--text-secondary)] lg:mt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-4">
            <Link href="https://www.linkedin.com/in/corymetcalfe1" target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
            <Link href="https://medium.com/@coryowenfox" target="_blank" rel="noreferrer">
              Medium
            </Link>
            <a href="mailto:coryowenfox@gmail.com">coryowenfox@gmail.com</a>
            <Link href="/cv/cory-fox-cv.pdf">Download CV</Link>
          </div>
          <p>© {new Date().getFullYear()} Cory Fox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
