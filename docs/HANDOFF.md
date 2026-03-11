# Developer Handoff

## Purpose

This document is the fastest way for a new Codex session or developer to understand how the project is wired and where to work next.

Before making changes, also read:

- `docs/DECISION_LOG.md`
- `docs/CONTEXT_LOG.md`
- `docs/SESSION_PROTOCOL.md`

## What This Site Is

This is not a generic portfolio template. The target is a premium, editorial, founder-style personal portfolio for Cory Fox, visually close in spirit to `highfulminds.com` but fully rebranded and rewritten.

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

### Content Loading

All content loading is in `lib/content.ts`.

Functions:

- `getHomeContent()`
- `getAboutContent()`
- `getExperienceContent()`
- `getAllWork()`
- `getFeaturedWork()`
- `getWorkBySlug()`

Medium feed logic is in `lib/medium.ts`.

### Components

Key UI components:

- `Header`
- `Hero`
- `AboutSection`
- `WorkSection`
- `ShowcaseProject`
- `ExperienceSection`
- `WritingSection`
- `LinkedInSection`
- `ContactSection`
- `Footer`

`ShowcaseProject` is the current work showcase pattern. `WorkCard` still exists from an earlier implementation and is currently unused.

## Styling Approach

Global styling sits in `app/globals.css`.

The project currently uses:

- CSS custom properties for palette
- Tailwind utility classes for layout, spacing, radii, and type
- `Cormorant Garamond` for display
- `Inter` for sans/body

Important:

- explicit radii are used in component classes
- avoid `rounded-[var(--...)]` utility patterns here; they caused a visible regression
- dark/accent panels must use fully legible light text, not translucent white copy

## Content Notes

Current copy has already been pushed toward:

- first-person voice
- stronger positioning
- recruiter-facing credibility
- product-design framing over generic UX wording

Some older-role copy is still partially inferred from CV/public profile context and should be replaced with Cory-approved specifics later.

## Verification Status

At handoff, the following pass:

- `npm run lint`
- `npm run build`

## Recommended Next Steps

1. Do a browser-eye visual pass section by section.
2. Tighten the work showcase art direction further using real imagery and stronger composition.
3. Replace placeholder case studies with real project narratives.
4. Rewrite older role bullets using confirmed LinkedIn/CV/user-provided detail.
5. Add contact form backend integration.

## Source of Truth

Work in this repository:

- `/Users/coryfox/Desktop/Cory Fox Portfolio/cory-fox-portfolio`

Do not continue work in the parent folder repo created during setup; that was an intermediate local repo only.

## Documentation Expectation

If a future session changes project direction, introduces a workaround, fixes a regression, or leaves unresolved issues, the logs must be updated before handoff.
