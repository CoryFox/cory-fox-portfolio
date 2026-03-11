# Decision Log

## 2026-03-11

### Chosen Stack

Decision:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- markdown/local files instead of CMS

Reason:

- low-cost hosting
- maintainable without paid tooling
- exact control over layout and animation
- strong fit for static portfolio content

### Editorial Direction

Decision:

- use `highfulminds.com` as the visual benchmark
- preserve the editorial pacing and premium feel
- avoid copying exact copy, imagery, brand assets, or proprietary work

Reason:

- the user explicitly wanted strong visual proximity in mood and rhythm, but original branding and content

### Content Storage

Decision:

- homepage content split across JSON and markdown
- case studies stored as markdown with frontmatter

Reason:

- simple editing model
- no backend required
- easy future migration if needed

### Work Showcase Direction

Decision:

- move away from a simple equal-card grid
- use alternating editorial spreads with layered imagery and motion

Reason:

- the first implementation felt too bootstrap-like and insufficiently art directed

### Medium Integration

Decision:

- use Medium RSS feed via `rss-parser`
- provide fallback post data when parsing/network access fails

Reason:

- free and low-maintenance
- satisfies requirement to link out to Medium rather than mirror content internally

### Visual System Adjustment

Decision:

- use explicit radius values in components instead of Tailwind arbitrary classes with CSS variables

Reason:

- using Tailwind arbitrary radius utilities with CSS variable syntax caused a visible regression where expected radii disappeared

### Current Button Treatment

Decision:

- dark/accent CTAs use explicit light foreground text
- light CTAs use dark border and text

Reason:

- prevent muddy hover states and ensure strong contrast

### Hero Typography Constraint

Decision:

- keep the hero display heading on a tighter max width and a slightly lower size ceiling than other large editorial headings
- reserve explicit width for the rotating "I work across" title so every role stays visible on one line

Reason:

- the homepage hero copy is substantially longer than the other section headings, so using the same scale made the opening composition feel ungainly
- the animated title slot clipped and wrapped longer role labels instead of presenting them cleanly

### Repo Normalization

Decision:

- treat the root repository as the active working app
- move project documentation to the root repo
- remove the nested legacy duplicate after the root repo is aligned with GitHub history

Reason:

- the development server, dependencies, and active file edits are happening in the root folder
- splitting runtime and source-of-truth between two repos created avoidable confusion and false-negative verification
