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

- keep the hero display heading styling stable once the general scale feels right, and solve hero issues by tightening the wording instead
- reserve explicit width for the rotating "I work across" title so every role stays visible on one line
- keep the hero headline itself extremely short and move the supporting explanation into the right-hand card
- center the static and animated parts of the "I work across" line on the same vertical axis

Reason:

- once the display scale is dialed in, changing the copy is a better fix than repeatedly changing the headline styling
- the animated title slot clipped and wrapped longer role labels instead of presenting them cleanly
- the hero works better as a sharp positioning statement than as a full value proposition paragraph
- mismatched vertical alignment made the static and animated title parts look visually broken

### Repo Normalization

Decision:

- treat the root repository as the active working app
- move project documentation to the root repo
- remove the nested legacy duplicate after the root repo is aligned with GitHub history

Reason:

- the development server, dependencies, and active file edits are happening in the root folder
- splitting runtime and source-of-truth between two repos created avoidable confusion and false-negative verification

### GitHub Pages Deployment

Decision:

- deploy the portfolio through a GitHub Actions workflow on pushes to `main`
- configure Next.js for static export with `output: "export"`
- use unoptimized Next images and publish the generated `out/` directory to GitHub Pages
- treat `https://coryfox.co.uk` as the canonical site URL and ship a `CNAME` file in the Pages artifact

Reason:

- GitHub Pages serves static output, not a running Next.js server
- the repo now has a single root app and a clean `main` branch, so deployment should happen from that source of truth automatically
- GitHub Pages custom-domain settings are more reliable when the domain is represented directly in the built artifact

### Portfolio Framing Pass

Decision:

- shift the homepage and case study structure toward explicit senior-product-designer signals
- add process framing, problem-solving language, and impact metadata instead of relying on more general design-language alone
- treat the current structure as the recruiter-scanning baseline, with real case study outcomes as the next major upgrade

Reason:

- the portfolio already communicated taste and perspective, but needed stronger signals around problem solving, product impact, and clear thinking process
- hiring managers often scan quickly, so problem, scope, approach, and outcome need to be legible near the top of both the homepage and case studies

## 2026-03-12

### CV Source Of Truth

Decision:

- treat the newly uploaded CV PDF and the pasted CV text as the source of truth for CV links and the experience section wording
- remove the superseded CV files from the repo

Reason:

- the portfolio should not present stale assets or paraphrased experience copy when the user has supplied an updated CV

### Experience Copy Fidelity

Decision:

- align the experience section content directly to the user-provided CV wording instead of keeping the more interpretive portfolio copy

Reason:

- for the experience section, accuracy to the CV matters more than editorial smoothing

### Button Contrast Rule

Decision:

- use a strict button rule: dark buttons are visibly dark with light text, and light buttons are visibly light with dark text

Reason:

- the previous button treatments became too visually subtle against similar backgrounds and no longer read clearly as clickable controls

### Radius Regression Fix

Decision:

- remove the custom fallback radius helper approach and restore explicit rounded utility classes directly on UI surfaces

Reason:

- the helper approach did not behave reliably in the live styling path, and the direct utilities are simpler and easier to verify visually

### Live Preview Workflow

Decision:

- use `next dev` on `http://localhost:3000` as the live preview source of truth and treat stale browser caching as a first-line debugging check when visual changes appear missing

Reason:

- the user needs immediate visual feedback while iterating, and stale Safari caching plus unhealthy dev-server processes caused false negatives during review

## 2026-03-17

### Fox Frame Migration

Decision:

- replace the placeholder work content with migrated Fox Frame case studies and assets
- add a dedicated demos section rather than merging legacy demos into the case study content model

Reason:

- the site needed to retain the Cory Fox layout while using the real Fox Frame copy and imagery
- demos are useful supporting work, but they should remain distinct from the main case study structure

### Homepage Work Presentation

Decision:

- replace the overlapping editorial showcase on the homepage with a uniform card grid

## 2026-04-03

### Positioning Reset

Decision:

- replace the earlier `Implementation Consultant` framing with `Implementation Specialist` only where the title meaningfully helps
- rely more heavily on implementation, onboarding, workflow, delivery, and product-enablement language across the rest of the site

Reason:

- `consultant` read as overstated and too business-specific for the intended transition back into tech
- the site needed to stay implementation-relevant without sounding like a formal consultancy profile

### Copy Tightening Rule

Decision:

- tighten all major homepage and case-study copy blocks toward shorter sentences, less repetition, and fewer stacked positioning terms
- avoid repeating `complex systems`, `clarity`, `stakeholder communication`, and similar framing language unless it is pulling real weight

Reason:

- the first rewrite established the direction, but it still felt too insistent in places
- the stronger version is calmer, more direct, and more credible

### Visual QA Method

Decision:

- use real local screenshot capture to validate homepage and case-study layout changes instead of relying on code inspection or browser inspector tweaks alone

Reason:

- the spacing, heading-wrap, and card-density issues only became obvious in rendered views across breakpoints

### Utility Override Rule

Decision:

- do not keep inspector-led global overrides that target Tailwind-generated utility selectors such as escaped arbitrary-value classes or broad utilities like `sm:text-3xl`
- implement typography changes either on the component class itself or through a clearly named semantic class

Reason:

- those overrides are brittle, difficult to reason about, and too easy to accidentally broaden beyond the intended component

### Role-Fit Section Direction

Decision:

- replace the literal `Ideal Roles` title-list section with a broader `Where I fit best` section built around themes rather than exact role titles

Reason:

- the role list felt visually weak and too prescriptive, even though it matched the surrounding system
- a broader fit section preserves the direction without making the page feel like a job-title checklist

Reason:

- the layered outcome/image treatment created readability issues and visual collisions on desktop and mobile
- the migrated work read more cleanly as a controlled three-card presentation

### Typography Reset

Decision:

- use `Montserrat` for headings and `Inter` for body text
- style the header/footer wordmark to match the CV treatment
- constrain muted grey to metadata and subtitles only

Reason:

- the site needed to align more closely with the CV branding and improve body-copy accessibility

### Hero Framing

Decision:

- position Cory as a UX-focused designer and developer with a block-shaped profile
- keep the animated "I'm a ..." line, but simplify the rotating terms to short one-word labels

Reason:

- the hero needed to reflect the user's actual path from graphic design to UX to development without sounding generic or over-engineered

### Medium Fallback Imagery

Decision:

- keep parsing real Medium thumbnails when available
- provide local fallback writing images for the fallback Medium cards

Reason:

- feed access is not guaranteed in every environment, and image-less fallback cards looked unfinished

### Contact Form Presentation

Decision:

- remove the launch-version helper copy under the contact form and keep the form visually clean
- continue using a `mailto:` submission directly to `coryowenfox@gmail.com` for now

Reason:

- the helper text added noise without improving the user-facing experience
- the current requirement is simply that enquiries route to the user's email address

### Section Heading Wrap Behaviour

Decision:

- remove heading line clamping from section titles

Reason:

- on mobile, the clamp introduced visible ellipsis/overflow and made headings feel broken

## 2026-03-21

### Credibility-Focused Shell Polish

Decision:

- keep the visible homepage layout and body copy unchanged for this pass
- tighten only the site shell surfaces that affect first impressions: metadata framing, canonical domain, favicon, and CV download naming
- frame the metadata around full-stack development with a frontend and UX bias rather than the older standalone product-designer label
- where section-level copy is explicitly approved for change, shift work framing toward frontend engineering, UX architecture, and implementation quality over product-designer terminology
- keep product and UX literacy visible in the wording so the portfolio still reads credibly to product-design-adjacent hiring managers
- make concrete stack depth visible in the copy where it is true, especially where earlier wording understated backend, data, workflow, and engineering-environment experience
- where possible, lead with the target hiring label explicitly in the hero while using the supporting copy to qualify the frontend/design bias
- use the CV timeline and job titles as the source of truth, but surface promotions and technical environment details inside the supporting copy so recruiter scanning still sees the real scope of the work
- let section headers and anchor targets render immediately, but keep secondary homepage content on scroll reveal so navigation feels reliable without losing motion
- rebuild case studies around scannable sections and case-specific content rather than long article-style copy and gallery dumps
- allow case-study media layouts to collapse around the number of unique available images instead of preserving empty slots

Reason:

- the current requirement is to improve recruiter-facing credibility without introducing unsanctioned layout or copy changes
- browser tabs, link previews, favicon absence, and download filenames are high-signal quality markers that can be polished safely without changing the designed content
- the work section should reinforce the intended hiring signal instead of pulling the site back toward a design-only reading
- the strongest positioning here is not "designer no longer" but "developer with proven UX and product judgement"
- specific technologies and environments are more credible than generic full-stack claims, especially for mid-senior engineering roles
- recruiters often scan the hero first, so the primary label should be immediate and machine-readable without losing the differentiator
- title fidelity protects trust, while the surrounding copy can do the heavier lifting on technical breadth and seniority
- anchor navigation should never land on apparently missing content
- recruiters scan case studies for stack, scope, and outcomes before they read long narrative copy
- empty media slots and repeated imagery make handcrafted case studies feel unfinished
