# Cory Fox Portfolio

Editorial-style portfolio site for Cory Fox, built in Next.js with TypeScript, Tailwind CSS v4, Framer Motion, and markdown/local content files.

The current build is designed to be:

- visually inspired by `highfulminds.com` without copying protected assets or copy
- maintainable without a CMS
- easy to deploy on Vercel
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
lib/
public/
  cv/
  images/
docs/
```

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

## Important Note

This repository is the GitHub-connected repo and is the source of truth:

- GitHub repo: `https://github.com/CoryFox/cory-fox-portfolio`
- branch: `main`

If you see another git repo in the parent folder, ignore it and work in this repository only.
