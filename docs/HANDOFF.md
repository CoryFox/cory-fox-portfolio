# Developer Handoff

## Purpose

This document is the fastest way for a new Codex session or developer to understand how the project is wired and where to work next.

Before making changes, also read:

- `docs/DECISION_LOG.md`
- `docs/CONTEXT_LOG.md`
- `docs/SESSION_PROTOCOL.md`

## What This Site Is

This is Cory Fox's portfolio site, now populated with real migrated work from Fox Frame and tuned toward a premium editorial product-portfolio presentation.

The site should feel:

- high-end
- calm
- strategic
- image-led
- polished
- personal rather than agency-generic

## Current Architecture

### App Routes

- `/` homepage
- `/work/[slug]` static case study pages
- `/robots.txt`
- `/sitemap.xml`
- `/_not-found`

App-shell metadata and favicon are defined in `app/layout.tsx` and `app/icon.svg`.

### Content Loading

All content loading is in `lib/content.ts`.

Functions:

- `getHomeContent()`
- `getAboutContent()`
- `getExperienceContent()`
- `getAllWork()`
- `getAllDemos()`
- `getFeaturedWork()`
- `getWorkBySlug()`

`WorkCaseStudy` frontmatter now includes:

- `technologies`
- `responsibilities`

Medium feed logic is in `lib/medium.ts`.

### Components

Key UI components:

- `Header`
- `Hero`
- `AboutSection`
- `WorkSection`
- `WorkCard`
- `DemosSection`
- `ExperienceSection`
- `WritingSection`
- `LinkedInSection`
- `ContactSection`
- `Footer`

`WorkCard` is the active homepage work showcase pattern. `ShowcaseProject` is legacy from the earlier editorial spread layout and is no longer the homepage source of truth.
`Reveal` supports both immediate rendering and in-view animation modes. Homepage section entry points use immediate mode where anchor navigation reliability matters; secondary content still uses scroll reveal.

## Styling Approach

Global styling sits in `app/globals.css`.

The project currently uses:

- CSS custom properties for palette
- Tailwind utility classes for layout, spacing, radii, and type
- `Montserrat` for display
- `Inter` for sans/body

Important:

- explicit radii are used in component classes
- avoid arbitrary Tailwind radius utilities that inject CSS variables here; they caused a visible regression
- dark/accent panels must use fully legible light text, not translucent white copy
- body copy on light backgrounds should remain dark
- muted grey is reserved for labels, metadata, and section subtitles
- section headings should wrap naturally; avoid reintroducing line clamping that causes mobile ellipsis

## Content Notes

Current copy has already been pushed toward:

- first-person voice
- stronger positioning
- recruiter-facing credibility
- UX-focused designer/developer framing over generic portfolio wording

The current work content is real project content from Fox Frame. Experience copy has also been aligned more closely to the CV timeline.
The contact form currently uses a `mailto:` submission to `coryowenfox@gmail.com` with a fixed enquiry subject and no explanatory footer copy.
Case studies are now intentionally scan-first rather than article-style: visible technologies, responsibility bullets, concise problem/focus/outcome blocks, and inline imagery that adapts to the number of available screenshots.

## Verification Status

Recent local checks:

- `npm run lint` passes when the nested duplicate folder is excluded from ESLint
- `npm run build` works from this root repo

## Recommended Next Steps

1. Do a browser-eye visual pass section by section.
2. Verify the live Medium feed path from a network-enabled environment; fallback images are in place, but real feed thumbnails still depend on feed availability.
3. Tighten any remaining copy using Cory-approved language.
4. Add contact form backend integration if desired.

## Source Of Truth

Work in this repository:

- `/Users/coryfox/Desktop/Cory Fox Portfolio`

This root repo is the active app and git source of truth.

## Documentation Expectation

If a future session changes project direction, introduces a workaround, fixes a regression, or leaves unresolved issues, the logs must be updated before handoff.
