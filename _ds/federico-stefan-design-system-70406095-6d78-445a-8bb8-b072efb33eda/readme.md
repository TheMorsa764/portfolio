# Federico Stefan — Portfolio Design System

> **Designed, not decorated.**

Design system for the redesign of Federico Stefan's UX/UI design portfolio. The portfolio is the product: it must demonstrate UX/UI craft through precision, editorial hierarchy and restraint, and step aside so the projects carry the page.

## Sources
- Existing portfolio: https://federicostefan.webflow.io/ (could not be fetched from this environment; content is extracted separately and remains the source of truth)
- Reference — project storytelling: https://karinasirqueira.com/projects/mta/ (principle: a project page is an immersive editorial story)
- Reference — project index: https://honest.fi/ (principle: show the work first, explain the designer second)
- Brief: "Federico Stefan Portfolio — Design System" (pasted by the user)

No logo, icon set or imagery was provided. The name is set in type wherever a mark would go. Project imagery is represented by neutral placeholders until real screenshots are dropped in.

## Products / surfaces
One surface: the **portfolio website** — homepage/project index, case-study pages (e.g. *Collab.*, *Nordstern*), about/contact.

---

## CONTENT FUNDAMENTALS
- **Voice:** first person singular ("I design…", "I led…"). Calm, factual, specific. The work speaks; copy frames it.
- **Tone:** confident without self-promotion. No superlatives ("passionate", "pixel-perfect", "world-class").
- **Length:** short. Homepage intro ≤ 2 sentences. Project descriptions ≤ 1 sentence on the index, 2–4 sentences as case-study intro.
- **Casing:** project titles in Title case with the brand's own punctuation kept verbatim (*Collab.* keeps its period). Metadata and labels in UPPERCASE with tracking: `UX/UI DESIGN · 2026`. Body and headings in sentence case.
- **Separators:** middle dot `·` between metadata items, slash `/` for counters (`01 / 04`), en dash for ranges (`2024–2026`).
- **Numbers:** always two digits for project numbers (`01`, `02`).
- **Emoji:** never.
- **Examples:**
  - Index entry: `01` · **Collab.** · "Web platform designed to connect project owners with the right collaborators." · `UX/UI DESIGN · 2026`
  - Section heading in a case study: "The problem", "Research", "Outcome" — plain nouns, no clever headlines.
  - CTA: "View project", "Get in touch", "Next project" — verb-first, no exclamation marks.

## VISUAL FOUNDATIONS
- **Colour:** neutral-first. Paper `#F7F7F5` background, ink `#111111` text, graphite `#666666` secondary, ash `#999999` muted, line `#DCDCDC`, stone `#EEEEEC` surface. One accent — sage `#6B7A70` — used only for links on hover, active nav, small indicators, selected states and metadata details. Never as a large fill. Colour on a page comes from project imagery.
- **Project colour:** each case study may set `--project-accent` for small details (a dot, a rule, a highlight). Everything else stays global. Proposed (not provided — replace with colours sampled from the real project imagery): Collab. `#C8734A` (warm, human), Nordstern `#3C4A6B` (cool, technical).
- **Type:** Geist (neo-grotesk) for everything; Geist Mono only for numbers/counters when tabular alignment helps. Display sizes are tight (line-height 0.92–0.95, tracking −0.045em). Hierarchy is built with size, weight (400/500 only in most cases) and whitespace — not boxes.
- **Grid:** 12 cols / 32px gutters / ≥64px margins on desktop, 8 cols tablet, 4 cols mobile with 20px margins. Max content width 1600px; large screens grow margins. Compositions are asymmetric: text and image rarely share the same column span.
- **Spacing:** 4px base; scale 4 → 200. Sections separated by 96–200px. Whitespace is structural.
- **Backgrounds:** flat paper. No gradients, textures, patterns or illustrations. Full-bleed project imagery is the only "background" treatment. An ink (`#111`) section is allowed once per page at most (e.g. footer/contact).
- **Imagery:** large, readable UI screenshots; full-width or wide editorial crops; multiple screens arranged compositionally. Device mockups only when they add information. Images are shown at their own colour — no filters, no grain, no tint.
- **Corners:** square (0px) for images and structural blocks. 2px on inputs, pill only for small tags/status chips. No rounded card grids.
- **Cards:** avoided. Content is separated by hairline rules (1px `#DCDCDC`) and spacing. Where a container is necessary: stone `#EEEEEC` fill, no border, no shadow.
- **Borders:** 1px hairlines, horizontal only in most cases (list rows, section tops). Ink-coloured 1px rule for emphasis.
- **Shadows:** none. Depth is not part of the language.
- **Transparency / blur:** only the sticky header uses a paper background at 85% with an 12px backdrop blur. Nowhere else.
- **Motion:** 300–500ms, `ease-out` (`cubic-bezier(.22,.61,.36,1)`). Fades and small translations only; no bounces, no parallax, no scroll-jacking. Respect `prefers-reduced-motion`.
- **Hover:** project image scales 1.03 inside a clipped frame; title shifts 6px right; an arrow `→` fades in; metadata turns sage. Text links: underline grows from left, colour → sage.
- **Press:** no shrink; colour deepens to `--accent-hover`.
- **Focus:** 1px sage outline, 3px offset.
- **Fixed elements:** sticky minimal header (name left, nav right). Nothing else fixed.

## ICONOGRAPHY
- No icon set was provided and the language barely needs one. Directional glyphs are **Unicode characters set in the text font**: `→` (next/view), `↗` (external link), `←` (back), `↓` (scroll), `+`/`−` (expand). They inherit size and colour from text.
- If a real icon is ever needed (e.g. social), use **Lucide** from CDN at 1.5px stroke to match Geist's weight — flagged substitution, not yet used.
- No emoji, no illustrated icons, no icon-in-circle badges.

---

## Index
- `styles.css` — entry; imports `tokens/*`.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css` (also radii), `grid.css`, `motion.css`, `base.css` (reset + `.fs-container` / `.fs-grid` helpers).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Grid, Motion, Brand).
- `components/`
  - `editorial/` — `ProjectNumber`, `MetaLine`, `ProjectEntry`, `SectionHeading`, `ImageFrame`, `CaseStudyHero`, `Pullquote`
  - `navigation/` — `SiteHeader`, `TextLink`, `Button`, `SiteFooter`, `NextProject`
  - `core/` — `Tag`, `Input`
- `ui_kits/portfolio/` — homepage index, case study (Collab. / Nordstern treatments), about.
- `thumbnail.html`, `SKILL.md`.

### Intentional additions
No component inventory was provided (from-scratch system). Components were sized to a portfolio's needs rather than a generic app set: no Dialog/Toast/Tabs/Switch because the site does not need them. `Input` exists only for a contact form.
