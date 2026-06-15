# Spike: multi-language recipe duplication

Research spike answering a review question: recipes appear "duplicated across languages" (e.g. *Find types* exists under `python/search/`, `java/search/`, …) — how big is the problem, and how should the redesigned detail page handle it?

**Method:** extracted the fully-qualified recipe ID from all 7,025 recipe `.md` files (the bold FQ-name line under the H1); grouped by exact ID and by short name across language packages. Read-only, grep/awk only.

## Headline

The catalog is **~7,009 unique recipes**, not a heavily-duplicated set. What looks like "duplication" is **two different things**, and they need opposite treatment:

### Pattern A — true duplicates (7 IDs / 23 files)
The *same* Java recipe ID, physically copied into other language folders. Byte-identical except for one added admonition (`:::info This Java recipe works on Csharp code.`), and **every copy already declares the same canonical URL** pointing at the Java page.

| Recipe ID | Languages |
|---|---|
| `org.openrewrite.java.search.FindTypes` | java, csharp, javascript, python |
| `org.openrewrite.java.search.FindMethods` | java, csharp, javascript, python |
| `org.openrewrite.java.ChangeType` | java, csharp, javascript |
| `org.openrewrite.java.ChangePackage` | java, csharp, javascript |
| `org.openrewrite.java.ChangeMethodName` | java, csharp, javascript |
| `org.openrewrite.java.DeleteMethodArgument` | java, csharp, javascript |
| `org.openrewrite.java.ReorderMethodArguments` | java, csharp, javascript |

16 files carry the cross-language canonical + admonition (7 JS, 7 C#, 2 Python). These are **one recipe surfaced across LST languages**.

### Pattern B — distinct recipes that merely share a name (~14 concepts)
Different IDs, different packages, separate implementations — e.g. `org.openrewrite.java.dependencies.DependencyInsight` vs `org.openrewrite.python.search.DependencyInsight` (DependencyInsight alone has **5 distinct IDs**). Only ~21 short names span 2+ languages total (10 in 2, 3 in 3, 8 in 4). **Merging these would be wrong.**

## Conventions that signal language
- **Path:** top folder = language package (`java/`, `python/`, `csharp/`, …).
- **ID token:** 3rd dot-segment is the language (`org.openrewrite.<lang>.…`) — *except* Pattern A copies keep the Java ID even under non-Java folders.
- **Cross-language marker (Pattern A only):** the `:::info This … recipe works on X code.` admonition + a canonical URL whose language segment ≠ the file's folder.
- C# also uses a non-`org.openrewrite` namespace (`OpenRewrite.CSharp.Recipes.*`); Kotlin Refaster uses `$KtRecipe` suffixes.

## Recommendations

1. **Pattern A → canonical page + "Applies to: Java, C#, JS, Python" badge (recommended).** It's already half-modeled via the shared canonical URL + admonition; the redesign just needs to *surface* the relationship instead of showing 4 near-identical pages as unrelated. Feasible today from existing `<head>` canonical + admonition signals; ideally driven by an explicit generator field.
2. **Pattern B → lightweight "also available in {languages}" cross-link block.** Links rather than merges, so it's correct even when IDs differ. Needs a curated concept index (or a generator-emitted `relatedRecipes` field) — **do not** key on short name alone (it would wrongly link unrelated recipes like the two different `BestPractices`).
3. **Don't build a single "language toggle" that implies one recipe** for Pattern B — the IDs and behavior genuinely differ; a single "Run recipe" widget can't represent 5 IDs.

## Important constraint
`RecipeMarkdownWriter.kt` is **not in this repo** — the catalog is produced by an external generator; only rendered `.md` ships here. Any durable structural change (an `appliesToLanguages` / `canonicalId` / `relatedRecipes` frontmatter field) must be made **upstream in the generator**, or via a build-time post-processing plugin in this repo. The cross-language signal for Pattern A (canonical URL + admonition) is already present and could be read at build time without a generator change.

**Bottom line:** treat the catalog as ~7,009 unique recipes. Build the cross-language UX around the 7 true-duplicate IDs (Option 1, mostly already modeled), and offer an "also available in" cross-link for the ~14 parallel-but-distinct concepts (Option 2) — both driven by an explicit field, not short-name matching.
