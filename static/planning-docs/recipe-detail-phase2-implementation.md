# Recipe detail — Phase 2 implementation notes (MVP)

## MVP goal

> **Define the future recipe consumption mode within existing constraints.**
> AI summary is unrealistic right now, so it is explicitly out of scope.

Principle: every MVP feature must be sourced from data that **already exists** (recipe descriptor,
generator output, recipe taxonomy, or Moderne platform run metrics) or from deterministic structure —
**never from a generative/AI summary.**

## A. Cut from MVP — requires AI / generative summary

| Feature | Why it's cut | What we use instead |
| --- | --- | --- |
| "Transformation intent" / "What this changes & why" prose | A natural-language summary of recipe behavior = generative AI | The existing author-written `description` field already on every recipe |
| Auto-written explanations, tl;dr, plain-English rewrites | Generative | Author `description` + examples |
| "Related recipes" via semantic/embedding similarity | Needs an embedding model | Taxonomy-based related recipes (see B6) — deterministic, no AI |

The preview has been updated to **remove the transformation-intent placeholder**. Remaining placeholders
("At a glance", "Related recipes") are kept because they are achievable WITHOUT AI (sourcing below).

## B. In scope for MVP — sourced from existing data, no AI

Lanes: **B(frame)** = docs repo presentation · **A(gen)** = generator change · **P(platform)** = Moderne run data.

| # | Feature | Data source | Lane | AI? | Notes |
| --- | --- | --- | --- | --- | --- |
| B1 | Redesigned frame/layout (header band, hierarchy, CTAs) | none (presentation) | B | No | Already prototyped; productionize via swizzled `DocItem` scoped to `recipe-catalog/` |
| B2 | "Copy page" → Copy as Markdown / Open in Claude / Open in ChatGPT | per-page `.md` endpoint + `llms.txt` | B + build | No | Mechanical export; pages are already markdown |
| B3 | Recipe type + language badges | recipe descriptor (composite vs single, languages) | A | No | Generator already knows this |
| B4 | Preconditions, options, examples (Before/After/Diff), data-table columns | generator output (exists today) | B | No | Pure presentation of existing content |
| B5 | "At a glance": sub-recipe count | `recipeList` length | A | No | Trivial, deterministic |
| B5 | "At a glance": estimated time saved | existing `SourcesFileResults` data-table column "Estimated time saving" | A/P | No | Already computed by OpenRewrite; aggregate |
| B5 | "At a glance": OSS repos run on / avg changes per repo | Moderne platform run metrics | P | No | Needs platform data access; not AI. May be phase-2b |
| B6 | Related recipes (deterministic) | taxonomy: same category/package, shared tags, parent composite(s) that include this recipe, and its own sub-recipes | A | No | Explicitly NOT embedding similarity |
| B7 | Structured frontmatter (description, tags, type, languages, source, license) | recipe descriptor | A | No | Structured metadata ≠ summary; big AI-parsing win |
| B8 | JSON-LD (`SoftwareApplication` / `HowTo`) in `<head>` | same structured fields as B7 | B + A | No | Machine-readable, deterministic |
| B9 | `llms.txt` / `llms-full.txt` + per-page `.md` | build step over existing markdown | build | No | The AI-readiness backbone; no generation |

## C. Suggested sequencing (cut lines)

* **v1 — frame only (DONE as preview):** B1, B4 presentation, plus the B2 menu shell. Ships from the docs
  repo alone, no coordination.
* **Phase 2a — no AI, low coordination (docs build + light generator):** B2 (real `.md`/`llms.txt`), B7
  frontmatter, B8 JSON-LD, B3 badges, B5 sub-recipe count, B6 taxonomy related-recipes.
* **Phase 2b — no AI, needs platform/aggregate data:** B5 time-saved + repos-run / avg-changes stats.
* **Out of scope:** all of section A (AI summaries / intent / semantic similarity).

## D. Dependencies & owners

* **Generator (A)** items require coordination with the OpenRewrite `rewrite-recipe-markdown-generator` team.
* **Platform (P)** items require access to Moderne run-metrics data.
* **Frame/build (B)** items are owned in this repo and can proceed independently — this is the MVP's
  critical path and lowest risk.

## F. Examples rendering — scalability findings + the "viewer" pattern

Corpus review (all 7,583 pages) surfaced constraints the design must hold:

* **74% of pages (5,631) have zero examples** → the Examples section must be hidden when empty (done in preview).
* **Examples carry a language dimension** — 11+ languages (java, scala, yaml, kotlin, xml, properties, hcl,
  docker, toml, json, python); each language is its own `<Tabs>` group with its own Before/After + Diff.
* **Code width**: p50 39 chars, p90 ~99, p99 189, max 3,667. The real doc content column (~700px after
  sidebar + TOC) is too narrow to split into two side-by-side code panes — most real code would scroll.

**ACCURACY CORRECTION on tabs vs AI (verified against Docusaurus source):** Docusaurus `<TabItem>` renders
`<div role="tabpanel" hidden={!isSelected}>{children}</div>` — inactive panels ARE in the rendered HTML/DOM,
just marked `hidden`. (Only the opt-in `lazy` prop returns `null` and removes them; the recipe pages don't use
it.) So **tabs do NOT 100% hide content from agents**: raw-HTML crawlers and the markdown/`.md`/`llms.txt`
export get everything; only agents that honor `hidden` / read rendered visible text / the a11y tree skip the
inactive panel. The earlier "tabs hide content from AI" framing was overstated. Net: tabs are a legitimate,
arguably better UX for examples (full width, compact, content-in-DOM). The bounded viewer's advantage over tabs
is therefore **marginal** (helps only visible-text/screenshot/a11y agents + no-click comparison), at the real
cost of nested scrolling (normally an anti-pattern). Treat examples-as-tabs vs examples-as-viewer as an open
design choice, not an AI mandate.

**Decision — the "Examples viewer" (revisit pending):** a bounded (max-height), scrollable window holding all
examples/languages stacked at full width, with a chip nav that scroll-snaps to a language/example. Rationale:
* All panels visible at once → best for visible-text/screenshot agents and for no-click human comparison.
* Scalable: full-width code (no cramped columns); handles 0, 1, or many examples and multiple languages.
* Compact one-window footprint + snap-to nav, so users don't scroll past content they don't want.
* Bounded/nested scroll is normally an anti-pattern — used deliberately (fixed height + snap) and kept small.
* A11y handled: scroll region has `role="region"` + `tabindex` + aria-label; active chip via
  IntersectionObserver; scroll-snap for orientation.
* The width argument is **against side-by-side**, not against tabs — tabs are full-width per panel too.

Implication for the generator (A): to ship this at scale the generator likely needs to emit the stacked,
language-grouped example structure (today it emits `<Tabs>`); restyling tabs into this viewer via CSS alone is
fragile. Flag for the OpenRewrite team.

Preview now covers three cases: **simple** (ReplaceDuplicateStringLiterals), **common** (CommonStaticAnalysis,
73 sub-recipes), **complex** (Quarkus 1→2 migration, 22 sub-recipes, multi-language java/properties examples).

## G. Recipe list — sizing data + length-adaptive decision

Corpus measurement (1,763 composite recipes) killed the "filter + group by category" idea:
* **Sizes:** median 2 sub-recipes; 77% ≤5; 88% ≤10; only ~12% >10 and ~6% >20 (max 381).
* **Grouping data:** 96.6% of recipe lists live in a SINGLE package → grouping is pointless.
* **Filter data:** items carry only name + link; no tags/facets in the parent list → the only viable
  filter is **name text search** (faceted/multi-filter isn't supported without new generator data).

**Decision — length-adaptive list:**
* ≤15 sub-recipes (the ~88%): render **inline, full, no chrome** — best UX, fully in DOM (AI-ready).
* >15 (the tail, e.g. CommonStaticAnalysis 73, Quarkus 22): **bounded scroll window + name search**
  with an "X of Y" count. Full list stays in DOM regardless of filter → AI-readable.
* No grouping, no faceted filters (data doesn't justify them).

**YAML** stays collapsed (read-on-demand / copy artifact) with a prominent **Copy** button and a
"copy to customize your rewrite.yml" hint — copy-to-customize is the enterprise dev's actual job here.

## H. UX parity vs the current generated page

| Element (current page) | Our frame | Status |
| --- | --- | --- |
| Title, fully-qualified id | Title + id with copy button | ✅ parity (+copy) |
| Description (italic) | Clean lead prose | ✅ intentional improvement |
| Recipe source links | Same links | ✅ parity |
| Options table | Options table | ✅ parity |
| Definition: Tabs[Recipe list, YAML] | Tabs[Recipe list, YAML] | ✅ parity |
| Recipe-list items are **links** | Now rendered as links → real docs.moderne.io URLs | ✅ parity (fixed) |
| Examples: tabs (language + Diff) | Tabs (language + Diff), group-synced | ✅ parity |
| Usage (RunRecipe) | Same component | ✅ parity |
| "Run across OSS repos" callout | Re-skinned CTA (Try in Platform) | ✅ parity-ish |
| Tags: `### Tags` with RSPEC **links** | Tags as **linked** chips (RSPEC→SonarQube) in header | ✅ parity (fixed) |
| Data Tables: Tabs[one tab per table] | Tabs[one tab per table] | ✅ parity (fixed) |
| License: sentence + link | License chip | informational, not functionality — left as chip |
| Composite `:::info` "…copy to customize" admonition | Copy YAML + tooltip | informational, not functionality — not represented |

**"Gap" = UI representation of *functionality*, not the wiring** (per Jayd). By that definition the only true
gaps were the interactive elements — Data Tables (tab switching) and Tags (clickable links) — both now closed.
The admonition and license sentence are informational text, not functionality, so they are intentionally not
represented (the customize *function* is represented by the Copy YAML control). Links are styled as links and
resolve to real docs.moderne.io / SonarQube URLs, but functionality wiring was never the bar — representation was.

## I. Known extractor/representation gaps (preview)

* **Example `###### Unchanged` context blocks** are NOT yet captured by the preview extractor. Some recipes
  (e.g. Spring Boot properties migrations) show an "Unchanged" file block alongside before/after; our three
  sample recipes don't use it, so it's deferred. For full-catalog parity the generator-driven implementation
  must render it. (Example `Parameters` tables ARE now captured.)
* **Section order is the single source of truth** — the page renders sections in this order and the right TOC
  is built from the same list: Recipe source → Options → Definition → Examples → Usage → Run in Platform →
  Data tables → Related. (The "Run in Platform" CTA sits before Data tables, matching the generated page's
  "See how this recipe works" placement.)

## E. Open questions for the team

1. Can the generator emit richer frontmatter (B7) and the "at a glance" counts (B5) in phase 2a?
2. Is platform run-metrics data (B5 repos/changes) queryable at docs-build time, or does it need a service?
3. Confirm related-recipes taxonomy rules (B6): category + tags + parent/child composites — anything else?
4. Owner + timing for the `.md` endpoint / `llms.txt` build step (B2/B9).
