# Context Log

## Current Repo State

- canonical repository: `https://github.com/CoryFox/cory-fox-portfolio`
- branch: `main`
- current revision: use `git log -1 --oneline` in the active checkout; historical notes below describe earlier sessions.

## 2026-11-12 Natural case-study copy

- Rewrote all five case studies in a conversational first-person voice, using concrete tasks and removing generic delivery language.
- At Cory's request, removed public sample-size references, rounded-hours commentary and the long statistical caveats. Retained the qualified headline "around 50%" and confirmed ten-consultant adoption; did not invent broader savings or new project facts.
- Removed the third metric and adjusted the grid to two columns. Simplified the workflow labels and homepage project description. Removed the redundant Project context heading now each case has its own section headings.
- The underlying timing evidence remains recorded in the earlier internal working notes. Organisation and client identities remain absent from the anonymous project.

## 2026-11-12 Career chronology clarification

- Cory clarified that he returned to Databowl from January to June 2021 to help with increased workload, and studied for his PGCE from May 2024 to May 2025.
- Added both as dated website timeline entries. The Databowl return is a distinct CV entry; PGCE dates appear in CV education. These latest dates supersede earlier recollections.
- Preserved the visual style, role positioning and anonymous project. Both CV pages were rendered and visually checked. Lint, production build and whitespace checks passed before publication.

## 2026-11-12 Technical implementation positioning

- Implemented the employer-focused proposal: Technical Implementation Consultant, specialising in AI, automation and user adoption. Actual employment title remains Implementation Consultant.
- Added an anonymous session-email automation case study: Python, Claude API, Microsoft Graph, Outlook pre-session triggers, mapped templates and consultant review/send. Do not attribute this project to an employer or publish internal assets.
- Cory confirmed all 21 timing rows are separate email-preparation examples. Displayed hours total 5.7 before and 2.8 afterwards. Use around 50% for this sample, not an annual/project estimate. All ten consultants adopted it as normal practice.
- Added anonymous Power Query/OData reporting overview and retained FourJaw as supporting work. Earlier SaaS cases and existing web demos are available in /archive/; writing is at /writing/. Existing project URLs remain.
- Rebuilt the homepage and case template with compact sections, semantic headings, static explanatory workflows and direct email/LinkedIn contact. Essential content renders immediately. Fixed navigation background and process-card contrast after browser review. Replaced unsupported diagonal arrow glyphs.
- At the same 1363 x 936 desktop viewport, homepage height is 4367 px versus the original audit's 12839 px; Selected Work section starts around 736 px. No horizontal overflow observed.
- CV headline/profile and technical skills now match the site. Added the confirmed short-term Databowl return in the CV. Both pages rendered and visually reviewed with the matching fonts.
- Validation: npm run lint, npm run build, git diff --check; desktop homepage/case/contact review; generated internal link check. Main portfolio paths resolve; old archived demo HTML retains some incomplete sample footer/service links. No full accessibility or mobile audit claimed.
- Publication: this revision is intended for the existing main-branch GitHub Pages workflow. See workflow history for deployed status.

## 2026-11-09 AI implementation positioning and design repair

- Cory changed the focus from the National Grid learning technology vacancy to AI implementation, transformation, and adoption across sectors.
- He confirmed six months of AI transformation work across multiple teams, building efficiencies and automations across software platforms and business use cases, as part of his Aptem role.
- Lead copy, metadata, skills, About, experience introduction, contact, and footer now reflect that work. Preserve the actual title Implementation Consultant. Do not invent named AI platforms, quantified savings, enterprise rollout ownership, or formal ROI claims.
- Keep learning technology as supporting evidence. Relish remains in the homepage capability cards, About, timeline, and CV; teaching supports communication, learning, and adoption.
- Rebuilt the two-page CV with Montserrat headings, Inter body text, navy accents, warm grey metadata, aligned dates, hanging bullets, and clearer spacing. Aptem and FourJaw lead under Selected experience; other roles remain explicitly dated under Further experience.
- The reproducible DOCX authoring script is `scripts/build_cv.py`. It requires python-docx and locally installed Montserrat/Inter fonts. Render and visually inspect every page before replacing `public/cv/cory-fox-cv.pdf`. The editable Word file is maintained separately from the public repository.
- Fixed hero overflow at the source: zero-minimum grid tracks, shrinkable children, and headline typography sized from its column with container query units. The old viewport-based size continued growing after the column reached its maximum width.
- Small-screen review also found long section headings overflowing. Their size is now constrained by the section width, with wrapping as a fallback. Experience job headings and dates now stack cleanly. Capability cards, LinkedIn details, and writing titles also adapt at the narrower desktop breakpoint after QA found cramped text there.
- Simplified rotating title transitions to keep text readable rather than starting each title blurred and invisible.
- Production preview uses an isolated static-export QA directory with the managed preview runner, avoiding its incompatible flags for `next dev`. QA files are not part of the published site.
- Validation: lint and production build, two-page visual CV review and font embedding check, responsive browser review from 320 to 2560 px. See current git history and the GitHub Pages workflow for publication status.

## 2026-11-09 Deployment font repair

- The first AI-focused commit passed local lint and build, but GitHub Actions failed in `next/font/google` with `next/font/google queries have exactly one entry` while resolving Montserrat font URLs containing query parameters.
- Switched to `next/font/local` and committed the exact Latin WOFF2 bytes from the reviewed export, preserving Montserrat and Inter and their existing weight ranges. Included both original SIL Open Font License files.
- This removes Google font fetching from clean builds and avoids depending on local font-fetch caches or environment-specific TLS settings.
- Clean `npm run build` passed without the previous TLS environment setting; lint and whitespace checks also passed. Bundled font bytes match the reviewed export exactly. Responsive browser review passed again from 320 to 2560 px after changing the font loader; desktop rendering retained the same measured layout.

## 2026-10-30 Learning technology tailoring and public CV

- User explicitly requested publication of the website and refreshed CV, with copy tailored to National Grid's Learning Technology Specialist vacancy.
- Reframed the homepage around learning technology and implementation while retaining Implementation Consultant as the actual current job title.
- Made Relish Learning visible in the hero, supporting cards, learning technology highlights, About, career history, and contact copy.
- Emphasised verified experience in Articulate Storyline, SCORM, platform implementation, reporting, troubleshooting, documentation, stakeholder requirements, and learner support.
- Put Aptem and Relish together on page one of the two-page CV. Further experience remains clearly dated on page two.
- Replaced `public/cv/cory-fox-cv.pdf` with the reviewed, role-focused CV. Editable Word is maintained separately.
- Checks: lint, production build with the previously recorded TLS environment setting, two-page CV visual inspection, and whitespace validation.
- Keep the established case studies, visual styling, public URL, and GitHub Pages workflow.

## 2026-10-30 Aptem experience and CV update

- Added Implementation Consultant at Aptem, May 2026 to Present, as the first experience entry.
- Updated the hero, About, skills, implementation examples, and metadata to reflect the current role.
- Focused new claims on client implementation, Power Query/OData reporting, data validation, troubleshooting, stakeholder communication, and handover documentation.
- Closed the existing teaching entry in May 2026 and retained its existing June 2025 start date. Reordered the timeline with current work first and added the established Relish eLearning experience.
- Prepared a two-page PDF CV and editable Word version separately. Publication was initially deferred; the subsequent update above records the explicit instruction to publish.
- Kept the established layout, case studies, domain, CV URL, and GitHub Pages deployment workflow.
- Checks passed: `npm run lint`, production build, TypeScript validation during build, JSON parsing, `git diff --check`, and visual inspection of both CV pages.
- The local build required `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1` to fetch the existing Google Fonts through this environment's certificate configuration. No application configuration change was needed.
- Managed local browser preview was unavailable: the preview runner appended Vite-only `--host` and `--strictPort` flags to `next dev`. Do not modify the working application to accommodate that runner.
- Publication continues through the existing GitHub Pages workflow on `main`. Check the workflow for the actual published commit.

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

### Implementation-specialist repositioning pass

- rewrote the homepage and case study framing around implementation, onboarding, workflow design, product enablement, and practical delivery
- added a new implementation section after the hero and replaced the old process-oriented sectioning with more recruiter-relevant homepage order
- renamed `Work` to `Case Studies` and `Demos` to `Additional Work`, including updated anchor targets in navigation and footer links
- rewrote all three case study cards and detail pages to emphasise onboarding, workflows, operational UX, and delivery while staying grounded in the underlying experience
- rewrote the About, Experience, Writing, LinkedIn, Contact, and footer copy around implementation-focused positioning
- added and then reworked the post-LinkedIn fit section into a broader `Where I fit best` block instead of a literal list of target job titles
- shifted the leading role language away from `Implementation Consultant` and toward `Implementation Specialist`, while reducing role-title repetition across the rest of the site

### Copy tightening and visual QA pass

- tightened hero, about, implementation, experience, case study, LinkedIn, contact, and footer copy to reduce repeated phrasing and stacked positioning terms
- shortened the hero support-card copy and locked that block into a real three-column layout with smaller headings
- reduced the hero headline scale on mobile and adjusted the desktop clamp to avoid clipping and over-dominance at mid-width breakpoints
- tightened case study card and additional-work card text heights so the grids feel less padded after the copy reductions
- reduced the spacing gap between the homepage case studies and experience sections after visual review
- reduced the mobile contact email size to improve wrapping
- verified the visual pass with local Playwright screenshot captures across desktop and mobile, then fixed the issues found rather than relying on code inspection alone

### Repo hygiene and local runtime fixes

- replaced the live CV asset with the new `public/cv/cory-fox-cv.pdf` file
- removed the temporary root-level `Cory_Fox_IC_CV-4.pdf` after copying it into `public/cv/`
- added `playwright` as a dev dependency to support screenshot-based QA
- fixed local ownership regressions on `.next` and `out` after browser-based QA created root-owned files that blocked `npm run dev` and `npm run build`

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
- contact now uses direct email and LinkedIn links; no form backend is required
- Safari/browser caching can obscure live CSS changes, so verify against the active `next dev` server with a hard refresh when styles appear stale

## Known Good Checks

Verified successfully:

- `npm run lint`
- `npm run build`
- local Playwright screenshot pass across home, case-study, and contact views

## Operational Notes For Next Session

1. Work at the root of a checkout of `CoryFox/cory-fox-portfolio`
2. Treat this root repo as the only active project
3. Use the current content files as the editing surface for copy changes
4. Be careful with elevated browser/screenshot tooling; it can leave `.next` or `out` root-owned and break normal local builds until ownership is reset
5. Prefer real rendered review when adjusting typography or spacing, not inspector-only overrides of Tailwind-generated utility selectors
6. Read and follow `docs/SESSION_PROTOCOL.md`
