# Recipe detail page redesign — productionization design spec

Status: APPROVED DESIGN. Date: 2026-06-18.

Scope of this document: turn the UI-only design preview in moderne-docs PR
[#776](https://github.com/moderneinc/moderne-docs/pull/776) (branch `jaydjj/recipe-detail-preview`,
served at `/recipe-frame-preview/`) into a production recipe detail page for **docs.moderne.io only**,
by building a set of production React components in `moderne-docs` and changing the
`rewrite-recipe-markdown-generator` to emit MDX that references those components — without affecting
the OpenRewrite documentation (docs.openrewrite.org).

## 1. Goals and non-goals

### Goals

* Productionize the redesigned recipe detail **frame** (header band, badges, structured section bodies,
  accordions, CTA, copy-page menu) as real `recipe-catalog/` documentation pages.
* Render all sections from data the generator **already has** today (no new data sources).
* Affect **only** the Moderne docs output; leave the OpenRewrite docs output byte-for-byte unchanged.
* Preserve real markdown for prose and section headings so the native Docusaurus TOC, anchors, and
  AI/markdown readability are retained.
* Emit structured frontmatter and JSON-LD (structured metadata, deterministically derived — not AI summaries).

### Non-goals (explicitly deferred)

* **No new/derived data**: `atAGlance` metrics (time saved, OSS repos run on), taxonomy-based
  `relatedRecipes`, and any platform-run-metrics features are out of scope for this pass.
* **No AI-generated content** of any kind (transformation-intent prose, summaries, semantic similarity).
* **Robust "Copy as Markdown"** (clean per-page `.md` / `llms.txt` export) is deferred. The copy-page
  menu ships with working "Open in Claude" / "Open in ChatGPT" links only.
* **No changes to the OpenRewrite docs** output or to the `forModerneDocs = false` code path.

## 2. Decisions (locked)

| # | Decision | Rationale |
|---|---|---|
| D1 | Scope = **core frame only** | Ships from existing data; no platform/coordination blockers |
| D2 | Architecture = **hybrid** (Approach 2): wrapper component for the frame; prose + section headings stay markdown; structured section bodies are prop-driven components | Matches the "emit MDX that references components and passes data to props/slots" vision; preserves markdown for TOC + AI/readability goals; extends the generator's existing component-emitting pattern |
| D3 | **Drop the custom `RecipeToc`**; use the native Docusaurus doc-layout TOC | Native TOC populates from markdown `##`/`###` headings with scroll-spy + anchors for free. The prototype only needed a custom TOC because it was a standalone `src/pages/` page outside the doc layout |
| D4 | Copy-page menu = **ship UI + working "Open in…" links; defer clean Copy-as-Markdown** | Lowest effort now; robust clean-markdown ingest needs a build step deferred to a later pass |
| D5 | Generator changes are **gated behind the existing `forModerneDocs` flag** | Structurally guarantees OpenRewrite output is untouched |
| D6 | **Components merge into moderne-docs first**, generator change second | If the generator emitted a component reference before the component existed, the docs build would break |

## 3. Feasibility findings (the seam that makes this possible)

`rewrite-recipe-markdown-generator` already cleanly separates Moderne vs. OpenRewrite output:

* A single `./gradlew run` writes **two independent output trees**: `build/docs/` (→ docs.openrewrite.org,
  open-source recipes only) and `build/moderne-docs/` (→ docs.moderne.io, all recipes). No files are shared.
* `RecipeMarkdownWriter` is instantiated **twice** — `forModerneDocs = false` and `forModerneDocs = true`
  (see `RecipeMarkdownGenerator.kt` ~lines 219–222). The boolean already gates ~6 behavioral differences
  (canonical `<head>` link, tag base paths, suppressing Gradle/Maven tabs, required-config copy, etc.).
* All MDX is produced by **string concatenation / multi-line Kotlin string literals** — no template engine.
  Adding Moderne-only emission is the established `if (forModerneDocs) { … }` pattern.
* Moderne-only recipe selection already exists: `isModerneDocsOnly(origin)` (Proprietary license or
  `MODERNE_DOCS_ONLY_MODULES`), and the recipe sets `openSourceRecipeDescriptors` vs `allRecipeDescriptors`.

**Verdict:** affecting only the Moderne docs is fully supported by the current architecture.

## 4. Part 1 — moderne-docs component layer

### 4.1 Page anatomy: component vs. native

Recipe pages are real `recipe-catalog/` doc pages rendered in the **standard doc layout**, which provides —
for free — the two-rail layout, native right-rail **TOC with scroll-spy**, sidebar, breadcrumbs, and
heading anchors/IDs.

* **Stays markdown (required for the native TOC):** every `## Section` heading.
* **Stays markdown (prose; not headings, so it does not affect the TOC):** the `#` title, the `**fqName**`
  line, and the description.
* **Becomes a component fed props:** everything structured (options, examples, data tables, sub-recipe list,
  header meta chrome, JSON-LD).

**Architecture rule:** section headings live in markdown; components render only section *bodies* and must
not own their own `<h2>`.

### 4.2 The slot pattern

`RecipeHeader` wraps the markdown title/fqName/description as children, so prose stays prose while the
component adds the meta chrome:

```mdx
<RecipeHeader type="Composite recipe" languages={["Java"]} tags={["..."]} license="Apache License 2.0" fqName="org.openrewrite.staticanalysis.CommonStaticAnalysis" appLink="https://app.moderne.io/recipes/..." pageUrl="https://docs.moderne.io/...">

# Common static analysis

**org.openrewrite.staticanalysis.CommonStaticAnalysis**

Applies a set of static analysis recipes...

</RecipeHeader>
```

### 4.3 Component inventory (new, under `src/components/recipe/`)

| Component | Role | Key props |
|---|---|---|
| `RecipeHeader` | Slot wrapper around markdown title/fqName/description; renders type + language badges, linked tag chips, license badge, copy-id button, primary "Try in Platform" CTA, `CopyPageMenu`, and (Moderne-only) `AccessInfoButton` | `type`, `languages[]`, `tags[]`, `license`, `fqName`, `appLink`, `pageUrl`, `moderneOnly` |
| `OptionsTable` | Options section body | `options[]` |
| `RecipeList` | Sub-recipe list, **adaptive** (inline ≤15; bounded window + name search >15); reused for "Used by" | `recipes[]` |
| `ExampleList` | Before/after/diff accordion; multi-language; optional parameters | `examples[]` |
| `DataTableList` | Data tables accordion | `dataTables[]` |
| `UsageList` | Wraps the **existing** `<RunRecipe>` (reused as-is) in the accordion pattern | passthrough |
| `Accordion` | Shared collapsible primitive (Examples / Usage / Data tables) | — |
| `CopyPageMenu` | Dropdown: working "Open in Claude" / "Open in ChatGPT" links; Copy-as-Markdown deferred | `pageUrl` |
| `AccessInfoButton` | Moderne-only access info popover | — |
| `CopyButton` | Clipboard primitive (recipe id, YAML) | — |
| `RecipeMeta` | Injects JSON-LD (`SoftwareSourceCode`/`HowTo`) into `<head>` via `@docusaurus/Head` | structured fields |

The prototype's `RecipeToc` is **not** ported (native TOC replaces it).

### 4.4 Reuse and provenance

* Reuse existing components where they already exist: `RunRecipe`, `NeoButton`, `NeoCard`,
  `ModerneLink`/`RecipeCallout`, `Admonition`, Docusaurus `CodeBlock`/`Tabs`.
* Build new components fresh in `src/components/recipe/`, using the PR #776 `_components/` as the
  **reference implementation**, refactored from "fed one big object" into focused, prop-driven units.

### 4.5 Styling and conventions (per repo CLAUDE.md / STYLE_GUIDE.md)

* One co-located `*.module.css` per component.
* **Neo Design variables only, no fallback values**; discover via `yarn neo:search` / `yarn neo:list`.
* **Class selectors, not element selectors.**
* Validate with `yarn validate:css`.
* Follow STYLE_GUIDE.md for any prose/markdown.

## 5. Part 2 — generator layer (`rewrite-recipe-markdown-generator`)

### 5.1 Where the change lives

All new emission is gated inside `RecipeMarkdownWriter` behind **`forModerneDocs`**. The
`forModerneDocs = false` path is left **byte-for-byte unchanged** (the OpenRewrite guarantee).

In `writeRecipeToPath()`, branch on `forModerneDocs`: when true, emit the new component-based MDX;
otherwise fall through to today's code. Factor the Moderne path into its own `writeModerne*` methods
(header, options, examples, data tables, etc.) alongside the existing writers — not one giant `if`.

### 5.2 What the Moderne path emits (in order)

1. **Frontmatter** — extend beyond today's `title`/`sidebar_label` with structured fields:
   `description`, `tags`, `type`, `languages`, `source`, `license`. (Structured metadata, not summaries.)
2. **Imports** — only the components actually used on the page (e.g. omit the `ExampleList` import on the
   ~74% of pages with no examples).
3. **`<RecipeHeader …>`** wrapping the markdown `# title` / `**fqName**` / description as children.
4. **Markdown section headings** (`## Recipe source`, `## Options`, `## Definition`, `## Examples`,
   `## Usage`, `## Data tables`) so the native TOC populates — each followed by its component body fed props.
5. **`<RunRecipe>`** reused as-is under `## Usage`.
6. **`<RecipeMeta>`** emitting JSON-LD.

Preserve the established section order used by the generator and the preview.

### 5.3 Data flow / serialization (primary technical risk)

Structured props are passed as **JSON object/array literals inside JSX expressions**:

```mdx
<OptionsTable options={[{"type":"boolean","name":"...","required":false,"description":"...","example":"..."}]} />
```

JSON is valid JS, so MDX/acorn parses `{[...]}` correctly. Required safeguards (must be honored in code):

* **Use a real JSON serializer in Kotlin** (correctly escaping `"`, `\`, newlines, and control characters) —
  not hand-rolled `StringBuilder` concatenation.
* Examples carry real source code (newlines, quotes, **backticks**, `{`, `<`). JSON double-quoted,
  `\n`-escaped strings sidestep MDX's backtick/brace/angle-bracket interpretation. Verify backticks and
  braces inside code never leak outside the JSON expression into raw MDX text.
* Each prop value must be a single well-formed JSON literal. Prefer a small, unit-tested serialization helper.

### 5.4 Edge cases the generator must handle

* **No examples** (~74% of pages) → omit the `## Examples` heading, component, and import entirely.
* **Single vs. composite** → no Definition / YAML / sub-recipe list for single recipes.
* **Proprietary / Moderne-only** recipes → `RecipeHeader moderneOnly`; "Recipe source" shows the
  "only available to Moderne" treatment (current behavior).
* **Multi-language examples**, **no options**, **no data tables**, **large recipe lists (>15)** — all already
  modeled in the component props.
* **Empty sections** generally → omit heading + component rather than rendering an empty block.

## 6. Cross-repo sequencing

1. **moderne-docs first:** build and merge `src/components/recipe/` components + CSS; verify against
   hand-written sample MDX pages. (Components must exist before the generator references them.)
2. **Generator second:** add the `forModerneDocs` emission referencing the now-existing components.
3. **End-to-end verification before merging the generator change:** run the generator locally → copy
   `build/moderne-docs/` output into moderne-docs → `yarn build` green.

## 7. Testing and verification

### Generator (`rewrite-recipe-markdown-generator`)

* Golden-file / snapshot tests for the Moderne output across the edge-case matrix: single recipe,
  composite, no-examples, proprietary/Moderne-only, multi-language examples, large recipe list.
* An explicit assertion that the **OpenRewrite output (`build/docs/`) is unchanged** by this work.
* Unit tests for the JSON serialization helper (escaping of quotes, backticks, newlines, braces, angles).

### moderne-docs

* `tsc` clean.
* `yarn validate:css` clean (Neo variables, no fallbacks).
* Full `yarn build` (not just `yarn start`) over generated sample pages — per CLAUDE.md pre-commit validation.
* Spot-check representative real recipes: a simple single recipe, a large composite
  (e.g. CommonStaticAnalysis, 73 sub-recipes), and a multi-language migration (e.g. Quarkus 1→2).

## 8. Open items to confirm during implementation

* Exact `recipe-catalog/` route/path scoping so the new layout/styling applies only to recipe pages.
* JSON-LD schema choice (`SoftwareSourceCode` vs `HowTo`) and which structured fields populate it.
* Whether YAML in the Definition section stays a `<Tabs>` panel (current) or moves to a collapsible block
  with a prominent Copy button (preview behavior). Default: match the preview unless it complicates parity.
* Confirm the Moderne-docs CI consumes `build/moderne-docs/` exactly as assumed (nightly copy step).
