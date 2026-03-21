# Context Log

## Current Repo State

- repo path: `/Users/coryfox/Desktop/Cory Fox Portfolio`
- branch: `main`
- current local HEAD: `ef606eb`

## What Was Built

- Next.js portfolio scaffold
- homepage sections and static case study route
- local content loaders for site, work, and demos
- Medium RSS integration with image-capable fallbacks
- metadata routes
- migrated case study and demo assets
- CV download path

## What Changed During This Session

### Fox Frame migration

- replaced placeholder case studies with real FourJaw, Databowl, and SoloProtect content
- migrated Fox Frame case study imagery into `public/images/work/*`
- added a homepage demos section and copied legacy static demos into `public/demos`
- added demo metadata in `content/site/demos.json`

### CV refresh

- replaced the old CV asset with the new `public/cv/cory-fox-product-designer-cv.pdf` file
- removed the temporary root-level replacement PDF after copying it into `public/cv/`

### Typography and visual system pass

- switched typography to `Montserrat` for headings and `Inter` for body copy
- aligned header and footer wordmarks to the CV style: uppercase, navy, bold Montserrat
- enforced a clearer text-token split: dark body copy on light backgrounds, light copy on dark backgrounds, muted grey only for labels/subheadings
- reduced oversized section headings and tightened long section subtitle copy
- normalised homepage work cards and demo cards into a more consistent editorial card system

### Hero and homepage framing

- reworked the hero to position Cory as a UX-focused designer and developer with a block-shaped profile
- restored the stronger animated "I'm a ..." line with short rotating titles
- top-aligned the hero copy on desktop to prevent the left column from sitting too low
- added full-stop consistency to the hero and `How I work.` section title

### Section-by-section refinements

- rebuilt the homepage work section into a three-column case study card grid on desktop and one column on mobile
- restyled demos to feel related to case study cards while remaining lighter-weight
- tightened demo card spacing and added visual separation between badges and overview blocks
- rebuilt the About principles panel into a 2x2 icon-led grid
- replaced the accessibility principle icon with an eye icon after visual review
- shortened LinkedIn and Contact headings and copy
- added Medium fallback images and switched the writing CTAs to the site-wide dark button style
- corrected experience ordering, filled missing dates, and fixed bullet formatting
- removed mobile section-header clamping after it caused visible ellipsis/truncation
- aligned LinkedIn and Contact section headings to the same uppercase navy display treatment used elsewhere
- simplified the contact form footer so enquiries submit directly to `coryowenfox@gmail.com` without the launch-version placeholder copy

### Repo structure and deployment

- kept the root repo as the source of truth
- retained the static-export GitHub Pages deployment path through GitHub Actions on `main`

### Credibility polish pass

- corrected the default metadata domain to `https://coryfox.co.uk`
- replaced the stale `Product Designer` browser/share metadata framing with a full-stack developer framing that still reflects the frontend and UX bias
- added an app-level SVG favicon for the Next app shell
- renamed the CV download path from `cory-fox-product-designer-cv.pdf` to `cory-fox-cv.pdf` and updated internal links
- retuned the selected case studies section label strip and intro copy to lead with frontend engineering and UX architecture rather than product-designer framing
- softened the remaining homepage/about/writing/contact role language so the site now leans toward frontend and full stack roles without excluding product-minded recruiters
- removed the Fox Frame reference from the demos intro and strengthened the about/experience copy to reflect Python, Flask, MongoDB, Angular, Postgres, C# .NET, Git, and Linux experience alongside the design-led positioning
- updated the hero headline to lead with `Full Stack Developer` while preserving the frontend/design edge in the supporting copy
- replaced the hero date-range phrasing with a cleaner `6 years in SaaS` signal and retuned the hero proof points toward more corporate-safe recruiter language
- reduced repeated frontend/design wording across the homepage and brought the top-of-page framing closer to full-stack, backend-aware product delivery
- aligned the experience timeline and case study metadata to the CV-style source of truth: single FourJaw software-developer entry with promotion called out, corrected Databowl titles, added Relish Learning, and surfaced technical environments more clearly in work summaries
- reordered the homepage for recruiter scanning so work and experience appear before process content
- rewrote the hero support copy to lead with current full-stack value before the design-to-development background
- restored scroll reveal on secondary homepage content while keeping section entry points immediate for anchor navigation

### Case study template rebuild

- rebuilt the `/work/[slug]` layout around scannable sections: technologies, responsibilities, problem, focus, outcome, and approach
- shortened and retuned the case study copy to remove generic portfolio-helper language and surface technical environments faster
- threaded case study imagery through the page instead of dumping everything into a gallery at the bottom
- made the case study image layout responsive to available unique images, with no repeated images and no forced cropping
- added skeleton-style image placeholders with centered three-dot loading cues on case study media

### Visual polish refinements

- renamed the CV download asset to `cory-fox-cv.pdf` and updated all internal links
- tightened homepage work-card metadata layout so long job titles no longer wrap awkwardly in the top row
- refined demo card spacing and footer treatment to better match the case study card system
- corrected the SoloProtect case study to lead with a tablet-oriented hero image rather than the square phone-led asset

## Known Weak Spots

- Medium feed access is environment-dependent; when the live feed is unavailable, the site falls back to local article cards with local images
- contact form is UI-only and mailto-based for now
- Safari/browser caching can obscure live CSS changes, so verify against the active `next dev` server with a hard refresh when styles appear stale

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
