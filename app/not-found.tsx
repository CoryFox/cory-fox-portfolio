import Link from "next/link";

export default function NotFound() {
  return (
    <main className="editorial-shell flex min-h-screen items-center justify-center px-6 py-24 sm:px-8">
      <div className="max-w-2xl rounded-3xl border border-[color:var(--border)] bg-white/65 p-6 text-center shadow-[var(--shadow-soft)] sm:p-10">
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">404</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg leading-8 text-[color:var(--text-secondary)]">
          The page you were looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="btn-dark mt-8 inline-flex rounded-full px-6 py-3 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--button-dark)]"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
