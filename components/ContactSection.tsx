import { Reveal } from "@/components/Reveal";

type ContactContent = {
  title: string;
  description: string;
  email: string;
};

export function ContactSection({ content }: { content: ContactContent }) {
  return (
    <section className="section-anchor px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-24" id="contact">
      <div className="mx-auto max-w-7xl">
        <Reveal className="overflow-hidden rounded-[32px] border border-[color:var(--border)] bg-[color:var(--bg-alt)] shadow-[var(--shadow-soft)]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[color:var(--border)] p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">Contact</p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-none sm:text-5xl lg:text-6xl">
                {content.title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--text-secondary)]">
                {content.description}
              </p>
              <div className="mt-8 rounded-[24px] border border-[color:var(--border)] bg-white/60 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">Email</p>
                <a href={`mailto:${content.email}`} className="mt-3 inline-block font-[family-name:var(--font-display)] text-3xl">
                  {content.email}
                </a>
              </div>
            </div>
            <form
              className="grid gap-6 p-8 lg:grid-cols-2 lg:p-10"
              action={`mailto:${content.email}`}
              method="post"
              encType="text/plain"
            >
              <label className="flex flex-col gap-2 text-sm">
                Name
                <input
                  required
                  name="name"
                  className="rounded-[24px] border border-[color:var(--border)] bg-white/72 px-4 py-4 outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[rgba(16,42,67,0.14)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-[24px] border border-[color:var(--border)] bg-white/72 px-4 py-4 outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[rgba(16,42,67,0.14)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                Company / Project
                <input
                  name="company"
                  className="rounded-[24px] border border-[color:var(--border)] bg-white/72 px-4 py-4 outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[rgba(16,42,67,0.14)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                What do you need help with?
                <input
                  name="help"
                  className="rounded-[24px] border border-[color:var(--border)] bg-white/72 px-4 py-4 outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[rgba(16,42,67,0.14)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm lg:col-span-2">
                Message
                <textarea
                  required
                  name="message"
                  rows={7}
                  className="rounded-[24px] border border-[color:var(--border)] bg-white/72 px-4 py-4 outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[rgba(16,42,67,0.14)]"
                />
              </label>
              <div className="flex flex-col gap-4 lg:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-[color:var(--text-secondary)]">
                  This launch version uses a mail-ready form structure and can be swapped to Formspree later without redesign.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--button-dark)] px-6 py-3 text-sm text-[color:var(--button-light-text)] transition hover:bg-[color:var(--accent)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--button-dark)]"
                >
                  Send enquiry
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
