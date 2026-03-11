# Cory Fox Portfolio

Editorial-style portfolio site for Cory Fox, built in Next.js with TypeScript, Tailwind CSS v4, Framer Motion, and markdown/local content files.

The current build is designed to be:

- maintainable without a CMS
- easy to run locally and deploy on Vercel
- structured around a single long-form homepage plus `/work/[slug]` case study pages

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- `gray-matter` for markdown parsing
- `react-markdown` for case study rendering
- `rss-parser` for Medium feed ingestion

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  work/[slug]/page.tsx
  globals.css
components/
content/
  site/
  work/
docs/
lib/
public/
  cv/
  images/
```

## Documentation Discipline

This repo keeps its operating context in:

- `docs/HANDOFF.md`
- `docs/DECISION_LOG.md`
- `docs/CONTEXT_LOG.md`
- `docs/SESSION_PROTOCOL.md`

Any future session should read those first and update them before handoff if the project state changes.

## Content Model

Homepage content lives in:

- `content/site/home.json`
- `content/site/about.md`
- `content/site/experience.json`

Case studies live in:

- `content/work/*.md`

Each work file uses frontmatter for listing/detail metadata and markdown body content for the overview section.

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

For GitHub Pages deployment, `npm run build` produces a static export in `out/`.

## Current Status

Implemented:

- homepage with hero, about, work, experience, writing, LinkedIn, contact, and footer
- markdown-driven work pages
- sitemap and robots routes
- CV download route
- Medium RSS integration with fallback content
- placeholder work imagery system
- motion and editorial layout treatment

Still needs refinement:

- another browser-eye visual polish pass
- stronger real project imagery and final case study content
- replacement of inferred older-role copy with user-approved wording
- eventual contact form backend integration

## Deployment

The site deploys via GitHub Actions on pushes to `main`.

- workflow: `.github/workflows/deploy-pages.yml`
- target: GitHub Pages
- build output: `out/`
- custom domain: `coryfox.co.uk`

Set the repo Pages source to `GitHub Actions` in GitHub settings.

## Repo Layout Note

Work in this repository:

- `/Users/coryfox/Desktop/Cory Fox Portfolio`
