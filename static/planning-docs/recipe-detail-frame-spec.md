# Recipe detail page — v1 frame-only design spec (UI only, for front-end discussion)

Status: DESIGN SPEC, no code, no PR. v1 = frame only. Phase 2 = rollout + content changes if well-liked.

## A. Generator research findings (the "content" layer we do NOT build in v1)

Generator: `openrewrite/rewrite-recipe-markdown-generator` (Kotlin/Gradle). A nightly GitHub Action runs it and
copies output into moderne-docs. Per-page output is written by `RecipeMarkdownWriter.kt`.

What the generator HARDCODES (so changing any of these = a generator PR = phase 2, cross-team):
* Section order: frontmatter → canonical link → title → fully-qualified name → description → cross-category note
  → tags → recipe source → license → options → definition → "used by" → examples → usage → data tables →
  "See how this recipe works" callout.
* Frontmatter fields: ONLY `title` and `sidebar_label`. (No description, tags, or rich metadata in frontmatter.)
* CTA copy + links: the `<RunRecipe>` block, the `<RecipeCallout>`/ModerneLink block
  ("...run recipes across thousands of open-source repositories"), the app.moderne.io link, "contact Moderne".
* Which components are emitted into the page (`<RunRecipe>`, `<RecipeCallout>`, `<Tabs>`).

Recipe data the generator HAS (could be surfaced differently in phase 2): displayName, name, description, tags,
options (type/name/description/example/required/valid values), recipeList, preconditions, examples
(before/after/diff, language, path, parameters), dataTables (name/description/columns), license, source URI,
artifact (groupId/artifactId). NOTE: no "transformation intent" field, no "related recipes" data, no
contributors block — those don't exist yet and would be NEW generator work.

Implication: anything that adds/*reorders/relabels content or enriches metadata* is phase 2. v1 is visual.

## B. v1 frame-only scope (what we CAN do in moderne-docs without touching the generator)

The generator emits components and a known HTML structure; we restyle/relayout them. Three sub-lanes by risk:

### B1. Pure presentation — lowest risk, no new component logic
* Visual hierarchy & typography for the existing sections (make the description scannable, strengthen the
  metadata row, separate "Recipe source / license" into a quieter metadata zone). CSS only, Neo Design vars.
* Restyle the existing CTA components in place:
  * `src/components/ModerneLink` (RecipeCallout) — the primary "Try in Platform" action. Re-skin with
    `NeoButton`, reposition/elevate. (Copy text is generator-controlled; visual treatment is ours.)
  * `src/components/RunRecipe` — style the "Run this recipe" CLI block.
* Sticky / top-of-page CTA: move the primary action visually up via a swizzled layout wrapper (see B2),
  without changing where the generator prints it.

### B2. Layout via swizzle — medium risk, front-end owns
* Swizzle `DocItem` (NOT yet swizzled; `MDXComponents` already is) to add a recipe-page layout wrapper:
  metadata header band, CTA placement, and the "Copy as Markdown" button.
* SCOPING DECISION (front-end): `DocItem` swizzle affects ALL docs pages. To limit to recipe pages, gate on the
  `recipe-catalog/` route/path or a wrapper class. Confirm approach with FE team.

### B3. "Copy as Markdown" button — feasibility TBD by front-end
* Not built into Docusaurus 3.9; needs (a) raw `.md` exposed to the client and (b) a button in the swizzled
  DocItem. These recipe pages already ARE .md in the repo, so exposing source is tractable but is real FE work.
* OPEN FE QUESTION: simplest mechanism (build-time copy of raw md to static, vs a plugin, vs llms.txt export).

## C. What v1 frame CANNOT do (set expectations — these are phase 2 / generator)
* Add a "transformation intent" / "what & why" sentence (new content field).
* Add structured/AI frontmatter or JSON-LD (frontmatter is generator-controlled).
* Reorder or relabel sections; change CTA wording; add "Related recipes" / "See results" / DevCenter links
  that need recipe data.
* Anything requiring new recipe metadata that doesn't exist today.

## D. Primary CTA decision (answer 3)
Primary action = "Try in Platform", implemented by re-skinning the EXISTING `ModerneLink`/RecipeCallout (which
already links to app.moderne.io). To visually match the marketing-site "Try demo" button, we need a reference
(URL/screenshot) — that button does not exist in this repo. Reuse `NeoButton` for the styling; do not rebuild.

## E. Deliverables of this phase
1. This spec + the analysis doc (`recipe-detail-redesign-analysis.md`).
2. Designer-led visual mockup of the v1 frame (Jayd), referencing only existing components.
3. A short list of FE feasibility questions (B2 scoping, B3 copy-markdown mechanism) for the front-end team.
4. A phase-2 backlog of content changes to propose to the OpenRewrite generator team.
