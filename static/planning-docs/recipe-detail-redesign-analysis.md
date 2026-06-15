# AI-driven recipe detail page — analysis & draft plan

Status: PLANNING (no implementation, no PR). Branch: `jaydjj/shanghai`.

## 1. What a recipe detail page is today

Source of truth: pages are **generated** by `openrewrite/rewrite-recipe-markdown-generator` and synced into
`docs/user-documentation/recipes/recipe-catalog/**` (~7,583 `.md` files). They are NOT hand-authored and are
overwritten on regeneration. `scripts/check-markdown.mjs` and `docusaurus.config.ts` both treat them as generated.

Current page anatomy (from `commonstaticanalysis.md` + `replaceduplicatestringliterals.md`):

1. Frontmatter: only `sidebar_label`.
2. `<head>` canonical link → docs.openrewrite.org (these pages mirror OpenRewrite docs).
3. MDX imports: `Tabs`, `TabItem`, `RunRecipe`.
4. `# Title`
5. Fully-qualified recipe name in bold (`org.openrewrite...`).
6. Italic description (one paragraph; can be long).
7. `### Tags` (optional) — RSPEC links etc.
8. `## Recipe source` — GitHub / Issue tracker / Maven Central links + license note.
9. `:::info` admonition for composite recipes.
10. `## Options` (optional) — markdown table: Type / Name / Description / Example.
11. `## Definition` (composite only) — Tabs: Recipe List (links) vs Yaml.
12. `## Examples` / `## Example` — Before / After / Diff tabs; optional Parameters table.
13. `## Usage` — `<RunRecipe>` component → `mod run` CLI command + install command.
14. `## See how this recipe works across multiple open-source repositories` — `<RecipeCallout>` (ModerneLink) → app.moderne.io + marketing copy.
15. `## Data Tables` — Tabs of column-description tables.

Existing CTA surface area (already present, can be built on):
* `src/components/RunRecipe` — renders CLI run/install commands (Java/JS/Python/C#).
* `src/components/ModerneLink` (`RecipeCallout`) — "run across OSS repos" link to app.moderne.io.

## 2. How the proposed approach maps to reality

| Approach goal | Today | Gap |
| --- | --- | --- |
| Human readability | Decent but dense; description is one long italic blob; metadata flat | Hierarchy + scannability |
| AI parsing | Plain markdown is already AI-friendly; but semantics implicit | No structured/semantic metadata (frontmatter, JSON-LD); transformation intent not explicit |
| Structured semantic formatting | Section headers only | No machine-readable metadata block; tags/options not normalized |
| Developer understanding | Before/After/Diff good | "Why / what changes" intent not stated up front |
| Product conversion | One ModerneLink callout + CLI | CTAs are minimal, generic, bottom-of-page; no DevCenter / related recipes / results |

## 3. The central constraint (decides everything)

Because pages are generated, there are three places a change can live:

* **A — Generator** (`rewrite-recipe-markdown-generator`, external repo): the only way to durably change the
  per-page *markdown content/structure* (e.g. new frontmatter, a transformation-intent line, reordered sections).
  Owned outside this repo → cross-team, slower, but correct for content/data.
* **B — Docusaurus theme/components in THIS repo**: swizzled `DocItem` layout, new MDX components, CSS modules.
  Applies uniformly to all recipe pages without touching the 7,583 files. Best for *presentation*, CTAs,
  layout, "copy as markdown" button, related-recipes widget.
* **C — Per-file hand edits**: NOT viable — overwritten on regen. Only for a throwaway prototype.

Recommended split: **prototype in B** (fast, fully in our control, no main-build risk), then promote the
data-dependent parts to **A** once the design is validated.

## 4. "Copy page as markdown" / LLM button (user's idea)

Docusaurus 3.9 does not ship this natively, but it's very achievable as a swizzled component (B):
the raw markdown is available at build time; a small DocItem/Footer addition can expose a "Copy as Markdown"
button and/or a `/llms.txt`-style export. Low risk, high AI-parsing payoff. Good candidate for an early,
self-contained prototype.

## 5. Draft plan (to agree on)

Phase 0 — Alignment (now): agree scope, the A/B/C split, and which 1–2 recipe archetypes to prototype
(suggest: one simple single recipe + one composite like CommonStaticAnalysis).

Phase 1 — Design audit & target layout: produce an annotated before/after of the page anatomy; define the
new metadata hierarchy, "transformation intent" block, and CTA placements (Try in Platform / Run / DevCenter /
Related recipes / See results / Learn automation). Designer-led (Jayd).

Phase 2 — Presentation prototype (B, this repo, behind a non-production route or single sample page):
swizzle/extend DocItem + new MDX components + CSS modules (Neo Design vars per CLAUDE.md). Include the
"Copy as Markdown" button. No generated files touched. `yarn lint:markdown` + `yarn build` must stay green.

Phase 3 — Validate, then promote content-level changes to the generator (A) via coordination with the
OpenRewrite team. Define what new fields/sections the generator must emit.

Phase 4 — AI/semantic layer: frontmatter metadata, optional JSON-LD, llms.txt export conventions.

## 6. Open questions for Jayd

1. Which recipe(s) should be the prototype target(s)?
2. Are we allowed/planning to change the generator (A), or must v1 stay presentation-only (B)?
3. Priority order of the CTAs — which is the primary conversion action?
4. Is the "copy as markdown" button in scope for v1?
5. Does the redesign apply to ALL recipe pages or a curated subset first?
