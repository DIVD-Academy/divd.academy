# DIVD Academy — Site Analysis & Design Brief

Status: draft for review. This document analyses the current DIVD Academy sites and the
approved sibling sites (DIVD.Works, DIVD.Charity), and proposes a design direction for the
new frameworkless static site. It complements `docs/content-inventory.md` (added in PR #47,
not yet merged at the time of writing), which inventories individual routes and content
items. This document focuses on **visual language, information architecture and technical
findings** to brief the implementation issues (`#11`–`#39`).

Sources reviewed on 2026-08-30:

- `https://divd.academy` — language-selector root (already a static HTML redirect page in
  this repository, see [index.html](../index.html)).
- `https://the.divd.academy/` — English Google Sites production site.
- `https://nl.divd.academy/` — Dutch Google Sites production site.
- `https://divd.works` — sibling product site (approved visual reference).
- `https://divd.charity` — sibling product site (approved visual reference).

All findings below are taken directly from the live pages (rendered snapshots, accessibility
tree, and raw HTML/CSS observed on the fetch date) or from files already committed to this
repository. Where a fact could not be verified from these sources it is marked
**"unconfirmed"** rather than assumed.

---

## 1. Current DIVD Academy sites

### 1.1 `divd.academy` (root/apex)

- Already migrated in this repository to a small static HTML file
  ([index.html](../index.html)): a plain language-selector page (English / Nederlands) with a
  fixed black top bar showing the Academy logo, linking out to `the.divd.academy` and
  `nl.divd.academy`.
- This is **not** representative of the desired final design — it is a functional
  placeholder and is explicitly in scope for issues `#19`/`#28` (canonical EN/NL homepages)
  and the redirect/navigation issues (`#8`, `#42`).

### 1.2 `the.divd.academy` (English) and `nl.divd.academy` (Dutch)

Both are built on **Google Sites**, confirmed by:

- Response HTML containing Google's `WIZ_global_data`, `docs-*` feature flags, and Google's
  privacy-preserving-prototype (`ppConfig`) instrumentation script.
- A CORS console error in the browser referencing `play.google.com/log`, typical of Google
  Sites analytics beacons.
- No custom CSS/JS is served; Google Sites renders the page through its own runtime, so
  there is no reusable stylesheet or component code to port — **only content and structure
  can be reused**, not implementation.

**Observed navigation (English, `the.divd.academy`):** Home, Newsroom, FAQ, About (with
Careers), Courses, plus a language toggle (🌍) and a "DIVD Community" call-to-action button.

**Observed navigation (Dutch, `nl.divd.academy`):** Home, FAQ, Over (with Carriere), Cursus,
plus the same language toggle and "DIVD Community" call-to-action.

Note the English site has an extra **Newsroom** entry that the Dutch site does not expose in
top-level navigation — a content-parity gap relevant to issue `#32` (Dutch FAQ/contact
parity QA).

**Observed homepage content blocks (both languages, paraphrased structure, not verbatim
copy):**

1. Hero heading — English: "Teaching you…"; Dutch: "Wij leiden de volgende generatie op"
   (semantically equivalent, not a literal translation — confirms native-quality Dutch copy
   already exists for this block).
2. "Are you interested in: / Ben je geïnteresseerd in:" — three topic links (cybersecurity,
   ethical hacking / ethisch hacken, security research). This maps directly to the
   `Learn → Practice → Grow` course-area narrative required for the new homepage (issue
   `#19`).
3. A "DIVD Community" callout linking to the external DIVD Community platform/Slack.
4. A news/blog card grid (English: 4 visible cards incl. "International Girls in ICT Day",
   "Working together on a cyber-secure energy system", "House of Digital", "Managing
   thousands of students 24/7 with AI"; Dutch: 3 visible cards with different, Dutch-specific
   stories, e.g. "Van cyberagent tot ethisch hacker"). **The English and Dutch newsrooms are
   not translations of each other** — they contain different articles. This is a real
   content-parity decision point for the migration (flag for issue `#32` / `#9`, do not
   assume 1:1 translation is possible without editorial decision).
5. A contact/footer block: "HQ Office / Kantoor — Maanweg 174, 2516 AB Den Haag,
   Tel.: (+31) 70 41 90 309", a link to the DIVD Community Slack, and a "Send us a
   message"/"Learn more" link.

**Mission/Vision/Strategy copy (English, `the.divd.academy` root text extract):**

> DIVD Academy is a learning school to increase knowledge, skills, and ethical awareness and
> connects young talent. […] The DIVD Academy is an innovative hacker initiative committed to
> two goals, (1) training a new generation of hackers and (2) raising awareness about
> cybersecurity.

**Dutch homepage intro copy (extract):**

> Dit platform biedt een uitgebreid aanbod aan gratis cursussen en trainingsmateriaal over
> basis-IT, netwerken, Kubernetes, beveiliging, automatisering, programmeren in verschillende
> talen zoals JavaScript, Python en PHP, DevOps vaardigheden, Git-beheer, codebeveiliging en
> de essentie van data science.

This Dutch paragraph makes a **broader curriculum claim** (Kubernetes, DevOps, data science,
multiple programming languages) than the English mission copy, which speaks only in general
terms about "knowledge, skills, and ethical awareness". This is a content-integrity risk: the
new homepage copy must not silently invent an equivalent English claim, and any curriculum
claim carried into the new site must be verified against the actual course catalogue
(`courses/` directory in this repository) before publication. Flagged as **unconfirmed /
needs editorial verification**.

### 1.3 Existing static assets already in this repository

- [img/divd-academy.png](../img/divd-academy.png) / [image/divd-academy.png](../image/divd-academy.png)
  — the approved Academy logo: a black pill-shaped badge with "DIVD" in the Academy yellow
  (`#F5E716`), plus a yellow, hand-lettered "Academy" wordmark alongside it. This is the
  authoritative logo asset and must be preserved unmodified per repository constraints.
- A set of already-migrated static pages exist (`about.html`, `blog.html`, `news.html`,
  `courses/`, `careers/`, `events/`, `join/`, `stage/`, `support/`, `enquete/`) — these are
  prior migration work, largely undocumented, and are catalogued in `docs/content-inventory.md`
  (PR #47). They currently use ad-hoc inline styling rather than the design tokens this brief
  proposes; issue `#12` (design tokens) and the page-rebuild issues (`#19`–`#32`) should
  reconcile or replace them rather than duplicate them.

---

## 2. Approved design references

### 2.1 DIVD.Works (`divd.works`)

- **Palette:** near-black canvas (`~#0d0d0d`–`#141414`), Academy-family yellow accent,
  off-white body text. Yellow used generously for headings, pill badges and primary buttons.
- **Logo treatment:** a black pill/capsule containing "DIVD" in yellow, with a smaller yellow
  speech-bubble-style badge reading "WORKS" — directly analogous in shape language to the
  Academy's own black-pill "DIVD" mark, confirming a shared brand system.
- **Typography:** very large, bold, rounded sans-serif display type for headings ("By
  interns, for interns."); comfortable, smaller-weight body text.
- **Motifs:** an animated/decorative wave pattern of thin yellow contour lines along the
  lower half of the hero — a distinctive but non-essential decorative device (candidate for
  `prefers-reduced-motion`-aware, JS/CSS-optional treatment; must not be copied verbatim
  since instructions require the Academy to remain visually distinct from other DIVD-family
  sites).
- **Structure:** sticky header with pill-shaped nav links and a rounded primary CTA button
  ("Join .Works"); hero → vision statement → three-role card grid (Students/Businesses/
  Schools) → pricing/program tiers → closing CTA → multi-column footer with legal links.
- **Pricing/commercial content** (Starter/Professional/Elite tiers, €/month figures) is
  specific to DIVD.Works' business model and must **not** be reused or implied for DIVD
  Academy, which is a learning platform, not a paid internship marketplace.

### 2.2 DIVD.Charity (`divd.charity`)

- **Palette:** identical near-black canvas and yellow accent family, but a calmer, more
  editorial tone — large yellow display headings on black, white/light-grey body copy, and
  restrained use of translucent dark cards with a subtle top-to-bottom vignette instead of
  animated line art.
- **Logo treatment:** a yellow heart-shaped outline mark alongside "DIVD.Charity" wordmark —
  again the same shape/weight language (rounded, bold, yellow-on-black) as Works and the
  Academy, but with its own distinct icon.
- **Header:** simple horizontal nav (About, Purpose, Projects, Impact, Principles, Team,
  News), an inline EN/NL toggle rendered as two small pill buttons, and a rounded yellow
  "Participate" CTA button — a strong pattern match for the Academy's own required EN/NL
  switch and primary "Explore courses" / "Apply for a traineeship" CTAs.
- **Content pattern:** short eyebrow label ("COMMUNITY-LED DEVELOPMENT") → large quotable
  headline → supporting paragraph → statistic/pillar callout card → dual CTA row (primary
  filled + secondary outlined button). This eyebrow-headline-support-stat-CTA pattern is a
  strong, reusable template for the Academy homepage hero (issue `#19`) and can be adapted to
  the required `Learn → Practice → Grow` narrative without copying Charity's specific copy or
  card content.

### 2.3 Cross-site design system observations

All three properties (`Works`, `Charity`, and — for its badge/logo only — the Academy) share:

- A near-black canvas rather than pure `#000000`.
- The same yellow accent hue family (Academy's own token is `#F5E716`).
- Rounded/pill-shaped interactive elements (buttons, nav pills, logo badges).
- Bold, large display type for headlines with a plainer body typeface.
- A light-touch language switch rendered as a compact two-option control in the header.

This gives strong evidence for the tokens already scoped in issue `#12` (`#F5E716` accent,
`#1D1D1B` logo black, dark base surfaces such as `#080808`/`#0F0F0F`/`#161616`) and confirms
the brief's requirement that the Academy should feel like "part of the family" without
cloning Works or Charity's specific layouts, imagery or motion.

---

## 3. Design direction proposal for the new Academy site

This section translates the analysis into a concrete, implementable direction. It does not
replace or duplicate the scope of issues `#11`–`#39`; it is meant to brief them consistently.

### 3.1 Visual identity

- Canvas: dark near-black surfaces per the `#12` token scale (`#080808`/`#0F0F0F`/`#161616`),
  not pure black — matching the calmer feel of Charity rather than Works' higher-contrast
  black.
- Accent: `#F5E716` (Academy yellow) for headings, links, focus states, primary buttons and
  the existing logo pill; `#1D1D1B` reserved for the logo's own black pill and for
  black-on-yellow button/badge combinations (never yellow-on-white).
- Logo: reuse [img/divd-academy.png](../img/divd-academy.png) unmodified; do not redraw or
  recolor it (per repository constraints). Treat its black-pill "DIVD" badge as the anchor
  shape for any new pill-style buttons or nav elements, reinforcing the shared DIVD-family
  shape language observed on Works and Charity.
- Typography: a bold, rounded system/sans display face for H1/H2 (system-font stack per the
  performance requirement — no new webfont unless an issue explicitly approves one), paired
  with a plainer body weight, similar in spirit to Works/Charity's heading-vs-body contrast.
- Motion: allow a restrained decorative accent (e.g. a subtle static or `prefers-reduced-
  motion`-safe line/wave motif) only if a future issue scopes it; do not port Works' animated
  wave background as-is, to keep the Academy visually distinct as required.

### 3.2 Homepage narrative (maps to issue `#19`/`#28`)

Recommended section order, using the Charity-style eyebrow→headline→support→stat→CTA pattern
adapted to Academy content and the required `Learn → Practice → Grow` narrative:

1. Hero: eyebrow label, one H1 built around `Learn → Practice → Grow`, one supporting
   paragraph, primary CTA ("Explore courses") + secondary CTA ("Apply for a traineeship").
2. Verified impact/stat callout — **only** using figures already fact-checked under issue
   `#6`; do not port any unverified statistic from the current Google Sites copy.
3. Three learning-area cards (mirrors the existing "Are you interested in: cybersecurity /
   ethical hacking / security research" pattern already validated on both live sites).
4. Selected projects / partner trust signals — sourced from the approved partner list only
   (see dependency on issues `#6` and `#25`).
5. Academy-to-DIVD.works progression explainer — a short, unambiguous paragraph plus a link
   to DIVD.works, not a duplicate of Works' own homepage content.
6. Concise FAQ preview (2–3 items) linking to the full FAQ page (issue `#26`).
7. Final CTA band, mirroring Charity's closing "Ready to…" pattern.

### 3.3 Global navigation and language switch

- Reuse the Charity-style compact EN/NL two-pill toggle in the header rather than the Google
  Sites 🌍 emoji-link pattern.
- Consolidate the current top-level items observed on both live sites (Home, FAQ,
  About/Over, Careers/Carriere, Courses/Cursus, Newsroom) into the approved sitemap being
  defined under issue `#8`; do not invent new nav items beyond what `#8` approves.
- Preserve the existing HQ contact details ("Maanweg 174, 2516 AB Den Haag") only if
  reconfirmed as current under issue `#6` before reuse in the new footer (issue `#15`).

### 3.4 Explicit non-goals (guardrails from the brief)

- Do not reuse DIVD.Works' pricing/membership tiers or business-model language — Academy is a
  free learning platform, not a paid marketplace.
- Do not silently merge the English and Dutch newsroom content; they are currently different
  articles, so the Dutch content plan must make an explicit decision (translate, replace, or
  drop) rather than assume parity.
- Do not carry forward the Dutch homepage's broader curriculum claim (Kubernetes, DevOps,
  data science, multiple languages) unless it is verified against the real course catalogue.
- Do not copy Google Sites' analytics beacon behaviour (Play/Google logging) — the new static
  site must not introduce equivalent third-party trackers without an approved privacy
  decision (see constraint tied to issue `#40`).

---

## 4. Relationship to the open backlog

This brief is descriptive/advisory and intentionally does not implement any single issue's
acceptance criteria. It is meant to inform, in particular:

| Issue | Relevance |
|---|---|
| `#8` Approve bilingual sitemap and navigation model | Section 3.3 navigation findings |
| `#11` Scaffold the frameworkless GitHub Pages site | Section 1.3 existing asset inventory |
| `#12` Implement the DIVD Academy visual design tokens | Section 2.3 cross-site token evidence |
| `#19` Build the canonical English homepage | Section 3.2 homepage narrative proposal |
| `#28` Create and review the Dutch homepage | Section 3.2, adapted; Section 1.2 parity gaps |
| `#25` Rebuild the English partners page | Section 3.2 item 4 partner-trust-signal sourcing |
| `#32` Dutch FAQ/contact parity QA | Section 1.2 Newsroom/parity gap flagged |
| `#6` Fact-check Academy claims, statistics, partners and contact details | Section 1.2 curriculum-claim and contact-detail flags |

## 5. Open questions requiring human/editorial decision

- Should the Dutch newsroom mirror the English articles, or keep its own distinct Dutch
  stories? (Currently they differ — no repository evidence indicates an intended parity
  model.)
- Is the broader Dutch curriculum claim (Kubernetes, DevOps, data science, multiple
  languages) accurate for the current course catalogue, or was it aspirational/outdated copy
  on the Dutch Google Sites page?
- Is the HQ contact block ("Maanweg 174, Den Haag" / phone number) still current and
  authorized for reuse in the new footer?
- Should any of DIVD.Works' or DIVD.Charity's decorative motion motifs (wave lines, vignette
  cards) be adapted for the Academy, or should the Academy's own distinct motif be designed
  from scratch under a future issue?

None of these questions are answered by invented copy in this document; they are recorded
here for maintainer/editorial follow-up.
