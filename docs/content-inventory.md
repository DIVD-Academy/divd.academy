# DIVD Academy — Content Inventory

Status: **Draft — requires human verification before use as a migration source of truth.**

Related issue: [#5 — Inventory all current Academy pages, content and external links](https://github.com/DIVD-Academy/divd.academy/issues/5)

## Purpose

This document is the single, reviewable inventory of everything currently published
across the Academy's domains, produced before any content migration, rewrite or
removal decision is executed. It exists to make migration decisions explicit and
reviewable rather than implicit.

## Method and limitations

This inventory was compiled by:

1. Reading every HTML file currently checked into this repository (the files GitHub
   Pages serves at `divd.academy`), including meta-refresh / JavaScript redirect
   targets, iframe embeds, form actions and outbound links found in each file.
2. Fetching the public homepages of `https://the.divd.academy/` (English, Google
   Sites) and `https://nl.divd.academy/` (Dutch, Google Sites) with a single
   read-only request each, on the date noted below.

**This agent has no access to:**

- Google Sites' admin/CMS view, so the *complete* navigation trees, sub-pages,
  page owners, and last-edited/last-reviewed dates of `the.divd.academy` and
  `nl.divd.academy` could not be enumerated or verified.
- Google Search Console, GA4/analytics, or any indexing report, so claims about
  which legacy URLs are actually indexed by search engines are **not verified**
  and are marked accordingly.
- Content ownership records (who on the DIVD/Academy team is accountable for a
  given page). All "owner" fields are marked unconfirmed unless stated
  explicitly in repository documentation (none was found).

Every field that could not be verified from repository content or a single live
fetch is marked **"onbevestigd / handmatige verificatie vereist"**. No fact in
this document has been invented or estimated. A human with CMS/analytics access
to `divd.academy`, `the.divd.academy` and `nl.divd.academy` must complete the
unconfirmed fields before this inventory is used to authorize redirects or
content removal.

Snapshot date of live fetches: 2026-08-30.

No production content was changed, deleted or redirected as part of producing
this document.

## Column definitions

| Column | Meaning |
|---|---|
| URL / route | The route as currently served, relative to its host. |
| Host | Which domain currently serves this route. |
| Language | `en`, `nl`, or `selector` (language-choice page with no single language). |
| Title | `<title>` value found in the source, or the visible heading on the live page. |
| Purpose | What the page is for, based on visible content only. |
| Owner | Content owner, if recorded anywhere in the repo or issue tracker. Otherwise unconfirmed. |
| Last review status | Last known editorial review date/state. Otherwise unconfirmed. |
| Primary CTA | The main call to action a visitor is pushed toward. |
| Embeds / forms / downloads / external links | Iframes, `<form>` actions, downloadable files and notable outbound links found in the source. |
| Classification | `keep` / `rewrite` / `merge` / `translate` / `redirect` / `remove`, proposed by this inventory for maintainer review — not a final decision. |
| Proposed destination | Suggested new route under the frameworkless rebuild, where applicable. |
| Notes | Risks, uncertainties, or decisions that need human sign-off. |

## A. Routes currently in this repository (`divd.academy`, GitHub Pages)

| URL / route | Host | Language | Title | Purpose | Owner | Last review status | Primary CTA | Embeds / forms / downloads / external links | Classification | Proposed destination | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `/` (`index.html`) | divd.academy | selector | "DIVD Academy: Language Selector / Kies uw taal" | Language chooser, links out to the two Google Sites | unconfirmed | unconfirmed | Choose English / Dutch site | Links to `https://the.divd.academy/` and `https://nl.divd.academy/` | rewrite | `/` (new bilingual homepage per approved sitemap) | This page is the de-facto entry point; must be replaced by the real EN homepage with an in-page language switch, not a separate chooser page, once the new site design is approved. |
| `/about.html` | divd.academy | en-US | "About" | Older/legacy About page (Google Sites export) | unconfirmed | unconfirmed | unclear — no explicit CTA found | Google Sites tracking iframe/script references, Google Maps links, Google cookie-policy link | merge | `/about/` | Appears superseded by `/about/index.html`; content overlap must be diffed by a human before removal — do not delete without confirming `about.html` has no unique content or inbound links. |
| `/about/index.html` | divd.academy | en | "DIVD Academy" | About / mission page | unconfirmed | unconfirmed | Explore DIVD community / Thinkific courses | `iframe` embed of `theorg.com/org/divd-academy/embed` (org chart), links to `divd.thinkific.com`, `divd.community` | rewrite | `/about/` | Org-chart iframe is a third-party embed; confirm with maintainers whether it should be kept, replaced with a static team list, or removed for privacy/performance. |
| `/about/partners/index.html` | divd.academy | en-US | "Partners" | Lists partner organizations and named collaborations | unconfirmed | unconfirmed | none explicit | Outbound links (via Google redirector `google.com/url?q=...`) to: `nl.joinhackshield.com`, `cyberbrein.nl`, `cisco.com` (NetAcad/digital skills), `netacad.com`, `politie.nl`, `denhaag.nl`, `eset.com`, `sidnfonds.nl`, `bit-academy.nl`, `ecp.nl`, `government.nl` | translate + rewrite | `/partners/` (EN) + `/nl/partners/` (NL) | **Every partner name and relationship listed here must be reconfirmed with the partner or an internal owner before republishing** — content integrity rules forbid restating unverified partner relationships. Do not carry this list forward verbatim without sign-off. |
| `/about/projects/index.html` | divd.academy | en-US | "Projects" | Describes/links specific community projects | unconfirmed | unconfirmed | none explicit | LinkedIn article link, GitHub link (`SSC-ICT-Innovatie/LearningLion`), `learninglion.nl` | rewrite | `/about/projects/` or merged into `/about/` | Confirm these projects are still active/associated with DIVD Academy before republishing. |
| `/blog.html` | divd.academy | en | "Blog" | Lists/links to Substack blog posts | unconfirmed | unconfirmed | Read blog posts (external, Substack) | Links to `astrido.substack.com` posts | keep (as external-link index) or merge with `/news.html` | `/news/` (unify with news.html) | `blog.html` and `news.html` both point at Substack content and largely duplicate each other's purpose; a human must decide whether DIVD Academy keeps one Substack (director's blog) and one company Substack, or unifies them. |
| `/news.html` | divd.academy | en | "Blog" (title tag says "Blog", not "News") | Lists/links to a different Substack (`divdacademy.substack.com`) | unconfirmed | unconfirmed | Read news posts (external, Substack) | Links to `divdacademy.substack.com` posts | keep (as external-link index) or merge with `/blog.html` | `/news/` | Title tag mismatch (`news.html` titled "Blog") is a pre-existing content bug; flag for correction regardless of migration decision. |
| `/home.html` | divd.academy | en-US | "Home" | Appears to be an older/alternate homepage export, distinct from `index.html` | unconfirmed | unconfirmed | Join DIVD Community / Slack / apply via JotForm | Links to `divd.community`, Slack invite (`join.slack.com/t/divdcommunity/...`), a JotForm URL via Google redirector, Google Maps links | remove or merge | n/a — superseded by new homepage | Not linked from `index.html` navigation as far as found in this repo; confirm whether this file is still reachable/indexed before removing. Slack invite link should be treated as **not verified live** — do not carry forward without checking it has not expired. |
| `/careers/index.html` | divd.academy | en-US | "Careers" | Careers/traineeship landing page | unconfirmed | unconfirmed | Apply for a role (external, via Google redirector to `the.divd.academy/careers/apply`) | Outbound to `the.divd.academy/careers/apply`, `theorg.com` (implied via careers/volunteer), Slack link, self-referential `divd.academy` link | keep + rewrite | `/careers/` | The "apply" CTA currently points at a `the.divd.academy` route that itself needs confirming as live before reuse. |
| `/careers/volunteer/index.html` | divd.academy | en-US | "Volunteer" | Volunteer opportunities page | unconfirmed | unconfirmed | none explicit found | `theorg.com/org/divd-academy/jobs` (via join/index.html reference), Google Maps links | rewrite | `/careers/volunteer/` or merged into `/careers/` | Confirm whether volunteering is still an active, distinct call to action from "apply for traineeship". |
| `/courses/index.html` | divd.academy | en (meta-refresh) | "Redirecting..." | Redirect stub only | unconfirmed | n/a (auto-redirect) | Browse courses | **Meta-refresh** to `https://the.divd.academy/courses` (0-second delay) | redirect | `/courses/` (new static courses index) | This is a pure redirect page with no content of its own; the new courses index must be built as real content per the approved sitemap, not another redirect. |
| `/courses/ethical-hacker/index.html` | divd.academy | (none set) | "Redirecting to Skills for all" | Redirect stub to a partner course | unconfirmed | n/a | Take the course (external) | **Meta-refresh** to `skillsforall.com/course/ethical-hacker?...` (Cisco Networking Academy / Skills For All, external partner platform) | redirect (keep as an external redirect if the partner course is still active) | `/courses/ethical-hacker/` (as a real content page describing the course, still linking out to the partner platform for enrollment) | **Must not be represented as an Academy-owned course** — it is a partner (Skills For All / Cisco) course; confirm the course is still published at that URL before reusing the link. |
| `/courses/introduction-to-cybersecurity/index.html` | divd.academy | (none set) | "Redirecting to Skills for all" | Redirect stub to a partner course | unconfirmed | n/a | Take the course (external) | **Meta-refresh** to `skillsforall.com/course/introduction-to-cybersecurity?...` | redirect (same caveat as above) | `/courses/introduction-to-cybersecurity/` | Same partner-course caveat as the ethical-hacker course; confirm liveness and partner attribution before reuse. |
| `/enquete/index.html` | divd.academy | en (meta-refresh) | "Redirecting..." | Redirect stub to an external survey form | unconfirmed | n/a | Fill in survey (external) | **Meta-refresh** to `https://form.jotform.com/252544159393059` | redirect | none — evaluate whether this survey is still open | **Form liveness is not verified.** Do not keep linking to it in the new site without confirming the JotForm survey is still accepting responses; per content-integrity rules, expired forms must not be published. |
| `/events/codeweek/index.html` | divd.academy | (none set) | "Aanmelden voor Meet & Code 2023" (Dutch title on an EN-classified path) | Redirect stub to a 2023 event sign-up form | unconfirmed | n/a | Sign up (external, JotForm) | **Meta-refresh** to `https://form.jotform.com/232514903868361` | remove | none | This references a **dated, likely-expired 2023 event**; per content-integrity rules this must not be republished as current. Recommend removal or archival with an explicit "past event" notice, pending maintainer confirmation. |
| `/events/live/index.html` | divd.academy | (none set) | "DIVD Academy: Live event" | Live event page with countdown timer to a 2023 Google Meet event | unconfirmed | n/a | Join live event (Google Meet link embedded in countdown widget) | `iframe` embed of `free.timeanddate.com` countdown widget pointing to a `meet.google.com` link and a September 2023 date | remove | none | Event date (`2023-09-13`) has passed; this page is stale. Must not be carried into the new site as live content. Confirm removal with maintainers; do not silently delete without recording the decision here (recorded now — removal recommended, awaiting explicit sign-off). |
| `/join/index.html` | divd.academy | en-US | "DIVD.academy: Join" | Traineeship/community "join" application form | unconfirmed | unconfirmed | Submit application (embedded JotForm) | Embedded JotForm (`form.jotform.com/222612161340340`, submit action `eu-submit.jotform.com/submit/222612161340340`), `theorg.com/org/divd-academy/jobs` | keep (as external-link, not embedded iframe) | `/apply/` or `/join/` per approved sitemap | This is likely one of the two primary CTAs ("apply for a traineeship"). Per accessibility/privacy guidance, prefer linking out to the JotForm rather than embedding it. **Form liveness/expiry not verified** — confirm the JotForm is still accepting submissions before relaunch. |
| `/stage/index.html` | divd.academy | en-US | "DIVD.Academy: Aanvraag stage" (Dutch title, `en-US` lang attribute — mismatch) | Dutch-language internship ("stage") application form | unconfirmed | unconfirmed | Submit application (embedded JotForm) | `iframe` embed of `form.jotform.com/231722586656363` | keep (as external-link, not embedded iframe) + fix lang mismatch | `/nl/join/` or `/nl/stage/` | `lang="en-US"` is incorrect for Dutch content — a pre-existing bug to fix regardless of migration path. **Form liveness/expiry not verified.** |
| `/support/index.html` | divd.academy | (none set) | "Redirecting to Freshdesk Support" | Redirect stub to a support desk | unconfirmed | n/a | Get support (external) | **Meta-refresh** to a malformed URL: `https://https://divd-academy.freshdesk.com/` (duplicated scheme, likely a copy-paste bug) | redirect (fix URL) | `/support/` (as a small real page linking to Freshdesk, or a corrected redirect) | The redirect target URL is broken (`https://https://...`) and should be fixed as part of any reuse; confirm Freshdesk desk is still active before relinking. |
| `/favicon.ico`, `/img/`, `/image/`, `/css/`, `/js/` | divd.academy | n/a | n/a | Static assets (icons, images, stylesheets, scripts) supporting the pages above | n/a | n/a | n/a | Contains legacy Bootstrap/jQuery/JotForm/prototype.js bundles under `join/js/vendor` and `stage/js/vendor` | keep (assets in active use) / remove (legacy unused vendor JS) | `/assets/` per new design system | `join/js/vendor` and `stage/js/vendor` contain old jQuery/Prototype.js/Flash (`flashcanvas.swf`) bundles tied to the embedded JotForm widgets; once forms move to plain external links these vendor bundles become removable dead weight — confirm before deleting. |
| `/CNAME` | divd.academy | n/a | n/a | GitHub Pages custom domain config (`divd.academy`) | n/a | n/a | n/a | n/a | keep | keep | Must be preserved untouched per repository safety rules. |
| `/robots.txt` | divd.academy | n/a | n/a | Currently allows all crawling, no sitemap reference | n/a | n/a | n/a | n/a | rewrite | `/robots.txt` | Should reference the future `sitemap.xml` once the new site sitemap exists (tracked by a separate issue, not this one). |
| `/security.txt` | divd.academy | n/a | n/a | Security contact/disclosure file | n/a | unconfirmed | n/a | n/a | keep (content unverified) | keep | Contents were not altered or re-verified as part of this inventory task; a human should confirm contact details are current. |

## B. Routes on the live Google Sites domains (best-effort, unauthenticated snapshot)

These entries come from a single unauthenticated fetch of each homepage only.
**Full navigation trees, sub-pages, and any pages not linked from the homepage
could not be enumerated** without CMS or sitemap access. This section must be
treated as a starting point, not a complete inventory, until a human with
Google Sites edit access exports the full page list.

| URL / route | Host | Language | Title / heading observed | Purpose (from visible content) | Owner | Last review status | Primary CTA | Embeds / forms / links | Classification | Proposed destination | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `https://the.divd.academy/` | the.divd.academy (Google Sites) | en | (no `<title>` captured by fetch; body has "Mission / Vision / Strategy" sections) | Mission/vision/strategy statement for DIVD Academy | unconfirmed | unconfirmed | none explicit in the fetched excerpt | not captured (full HTML/embeds not fetched) | translate + rewrite | `/` (EN homepage) | This is the **current canonical English homepage** that `divd.academy/index.html` links out to. Its full content, embedded forms and navigation must be reviewed live by a maintainer with Sites access — this fetch only captured the main text. |
| `https://the.divd.academy/courses` | the.divd.academy (Google Sites) | en | not captured (cookie-consent interstitial returned instead of page content) | Presumed course catalog / listing page | unconfirmed | unconfirmed | unconfirmed | unconfirmed | translate + rewrite | `/courses/` | Fetch was blocked by a Google cookie-consent interstitial; **content of this page is unverified**. A human must load this page directly (ideally logged out, to see what a real visitor sees) to confirm its content before migration. |
| `https://nl.divd.academy/` | nl.divd.academy (Google Sites) | nl | (no `<title>` captured; body promotes DIVD Community and lists free courses: basic IT, networking, Kubernetes, security, automation, JavaScript/Python/PHP, DevOps, Git, code security, data science) | Dutch homepage, promotes community + a broad free-course catalog | unconfirmed | unconfirmed | Join DIVD Community (`divd.community`) | Link to `divd.community` | translate + rewrite | `/nl/` | The breadth of topics listed ("Kubernetes", "PHP", "data science", etc.) reads as a general learning-platform pitch rather than Academy-specific copy — **a human editor must confirm which of these course topics are still accurate and Academy-endorsed** before carrying any of this list into the new bilingual homepage. Do not restate this list as fact without that confirmation. |
| `https://nl.divd.academy/courses` | nl.divd.academy (Google Sites) | nl | n/a | n/a | n/a | n/a | n/a | n/a | **404 — route does not exist** | n/a | The Dutch site currently has **no equivalent `/courses` route** to the English site. This is a known EN/NL content-parity gap that must be recorded, not silently fixed by inventing Dutch course content. |
| Any other `the.divd.academy/*` or `nl.divd.academy/*` sub-pages (e.g. about, careers, contact equivalents) | the.divd.academy / nl.divd.academy | en / nl | unconfirmed | unconfirmed | unconfirmed | unconfirmed | unconfirmed | unconfirmed | unconfirmed | unconfirmed | **Not enumerable from this agent's tooling.** A maintainer with Google Sites access must export the full page tree (Sites has no public sitemap.xml by default) and extend this table with every additional route, before this inventory can be marked complete against the acceptance criteria. |

## C. Known legacy/indexed routes not confirmed live

The technical notes on issue #5 mention comparing against "the audit URL set" and
search-engine results. No such audit URL set or search-console export was found
in this repository (searched for `docs/`, `content/`, sitemap files, and any
existing inventory — none exist prior to this document). This is a **gap that
blocks full acceptance-criteria coverage** and requires either:

- an existing Search Console / analytics export supplied by a maintainer, or
- a manual `site:divd.academy`, `site:the.divd.academy`, `site:nl.divd.academy`
  search-engine query run by someone with unrestricted web access, to catch
  indexed URLs not reachable from the current navigation.

No such data could be safely substituted without inventing findings, so this
section is left as an explicit open item rather than filled with assumptions.

## Summary of open items requiring human action

1. Confirm content owners and last-review dates for every route above (none
   were recorded anywhere in the repository).
2. Obtain full Google Sites navigation export for `the.divd.academy` and
   `nl.divd.academy` (this inventory only covers their homepages plus one
   sub-route each).
3. Verify liveness/expiry of every external form referenced (JotForm surveys,
   traineeship/internship applications, event sign-ups) before relaunch.
4. Reconfirm every partner name and relationship in `about/partners/` with the
   relevant partner or internal owner before republishing.
5. Decide and record the fate of clearly stale event pages
   (`events/codeweek`, `events/live`) — recommended: remove, pending sign-off.
6. Run a search-engine/Search-Console audit for indexed legacy URLs not
   reachable from current navigation; none was available for this task.
7. Decide on unifying `blog.html` and `news.html` (two separate Substacks) or
   keeping them distinct, and correct the mismatched `<title>` on `news.html`.
8. Fix the malformed redirect target in `support/index.html`
   (`https://https://divd-academy.freshdesk.com/`) as part of any reuse.
9. Fix the `lang="en-US"` attribute on `stage/index.html`, whose content is Dutch.

No production content, form, redirect or DNS record was changed as part of
producing this document.
