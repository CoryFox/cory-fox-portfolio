# Developer Handoff

## Purpose

This document is the fastest way for a new Codex session or developer to understand how the project is wired and where to work next.

Before making changes, also read:

- `docs/DECISION_LOG.md`
- `docs/CONTEXT_LOG.md`
- `docs/SESSION_PROTOCOL.md`

## What This Site Is

This is Cory Fox's portfolio site, populated with real migrated work from Fox Frame and now tuned toward an implementation-focused, recruiter-readable portfolio presentation.

The site should feel:

- high-end
- calm
- practical
- image-led
- polished
- personal rather than agency-generic
- credible for implementation, onboarding, workflow, and product-delivery roles

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
- `ImplementationSection`
- `AboutSection`
- `WorkSection`
- `WorkCard`
- `DemosSection`
- `ExperienceSection`
- `WritingSection`
- `LinkedInSection`
- `IdealRolesSection`
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
- avoid inspector-led overrides of Tailwind-generated utility selectors; if a typography tweak is real, apply it in the component or via a named semantic class

## Content Notes

Current copy is now pushed toward:

- first-person voice
- implementation-specialist positioning
- recruiter-facing credibility
- onboarding, workflow, delivery, and product-enablement language
- UX and systems depth as supporting context rather than the lead identity

The current work content is real project content from Fox Frame. Experience copy has also been aligned more closely to the CV timeline, and the live CV asset now sits at `public/cv/cory-fox-cv.pdf`.
The contact form currently uses a `mailto:` submission to `coryowenfox@gmail.com` with a fixed enquiry subject and no explanatory footer copy.
Case studies are now intentionally scan-first rather than article-style: visible technologies, responsibility bullets, concise problem/focus/outcome blocks, and inline imagery that adapts to the number of available screenshots.
The post-LinkedIn fit section is intentionally broader and more ambiguous than a literal target-role list.

## Verification Status

Recent local checks:

- `npm run build` works from this root repo
- local Playwright screenshot capture was used for desktop/mobile QA during the latest typography and spacing pass

## Recommended Next Steps

1. Do a browser-eye visual pass section by section.
2. Verify the live Medium feed path from a network-enabled environment; fallback images are in place, but real feed thumbnails still depend on feed availability.
3. If using elevated browser tooling again, confirm `.next` and `out` ownership afterwards so local `dev` and `build` are not left broken.
4. Tighten any remaining copy using Cory-approved language.
5. Add contact form backend integration if desired.

## Source Of Truth

Work in this repository:

- `/Users/coryfox/Desktop/Cory Fox Portfolio`

This root repo is the active app and git source of truth.

## Documentation Expectation

If a future session changes project direction, introduces a workaround, fixes a regression, or leaves unresolved issues, the logs must be updated before handoff.
