# Context Log

## Current Repo State

- repo path: `/Users/coryfox/Desktop/Cory Fox Portfolio`
- branch: `main`
- current local HEAD: `961f698`

## What Was Built

- greenfield Next.js portfolio scaffold
- homepage sections and case study route
- content loaders
- Medium RSS integration
- metadata routes
- placeholder SVG work imagery
- CV download path

## What Changed During This Session

### Hero layout

- shortened the hero headline to a compact positioning line and moved the fuller explanation into the right-hand card
- kept the established hero heading styling and limited the change to wording rather than another typographic restyle
- aligned the static and animated parts of the "I work across" line on the same vertical axis while keeping the animated blur/shadow from clipping

### Repo structure

- added the missing root-level README and project docs so the active app now documents itself
- aligned the written guidance around the root repo being the working project
- merged the GitHub history into the root repo so `main` now shares ancestry with `origin/main`
- removed the nested `cory-fox-portfolio/` folder after the root repo was confirmed as the only active project

### Deployment

- configured Next.js for static export so the site can run on GitHub Pages
- added a GitHub Actions workflow that builds on pushes to `main` and deploys the `out/` directory to Pages
- set the canonical site URL and Pages artifact domain to `coryfox.co.uk`

### Portfolio framing

- added a stronger product-framing line to the hero to position the work around untangling complexity
- inserted a new "How I Work" section and a "What I Enjoy Working On" block to surface process, collaboration maturity, and design judgement
- added role, focus, and outcome metadata to homepage work cards plus visible impact callouts under project imagery
- restructured case study pages around a fast-scanning snapshot and a clearer Problem / Thinking / Solution / Result pattern
- strengthened the teaching differentiator and simplified supporting homepage copy so the site reads more like a senior product portfolio and less like generic portfolio language

## Known Weak Spots

- older-role copy for Databowl/SoloProtect still needs confirmation from Cory for final accuracy
- real case study imagery and real project writing are still the next major improvement area
- impact statements are structurally in place, but placeholder projects still limit how credible those outcomes can feel until replaced with real project evidence
- contact form is UI-only and mailto-based for now

## Known Good Checks

Verified successfully:

- `npm run lint`
- `npm run build`

## Operational Notes For Next Session

1. Work in `/Users/coryfox/Desktop/Cory Fox Portfolio`
2. Treat this root repo as the only active project
3. Use the current content files as the editing surface for copy changes
4. Prefer visual review in browser before making another system-level polish pass
5. Read and follow `docs/SESSION_PROTOCOL.md`
