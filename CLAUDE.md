# Moderne Documentation Project Instructions

## Important: Style Guide

When editing any documentation in this repository, ALWAYS follow the rules in STYLE_GUIDE.md. Key rules include:

* Use asterisks (*) for bullet points, not dashes (-)
* Add blank lines after headers and before code blocks
* End description lines with exactly one period
* Use sentence case for headers (no title case, no ending periods)
* Use explicit relative paths for links (./file.md, ../parent.md)

Please read the full STYLE_GUIDE.md for all formatting rules.

## Critical: Pre-commit Validation

**IMPERATIVE**: Before committing any changes or opening a pull request, you MUST:

1. Run `yarn start` to build and start the Docusaurus site
2. Verify there are no build errors, warnings, or broken links
3. Fix any issues before proceeding with the commit

This validation step is non-negotiable and ensures documentation quality.

## Claude Instructions: Quality Assurance

After making ANY changes to documentation files, you MUST:

1. Run a thorough spelling check on all modified content
2. Review grammar and sentence structure
3. Assess clarity and readability
4. Verify the changes follow the STYLE_GUIDE.md rules

Use your language processing capabilities to identify and fix:
* Spelling errors and typos
* Grammatical mistakes
* Awkward phrasing or unclear explanations
* Inconsistent terminology
* Style guide violations

## Working with CSS Modules and Morpheus Design Tokens

The design system is Morpheus (`--mor-*` tokens). It is self-contained — there is
no external design-system package. When modifying any CSS module (`.module.css`),
follow this workflow:

1. **Find the right token** in `src/css/morpheus-tokens.css` — the single source of
   truth. It defines the complete token set (spacing, type, radii, surfaces, lines,
   text, links, buttons, status, shadows, spectral), mode-aware where relevant.
   Add new brand values there, never as one-off literals in components.

2. **Never use fallback values** with Morpheus tokens:
   * ❌ Bad: `var(--mor-space-2, 8px)`
   * ✅ Good: `var(--mor-space-2)`
   * Rationale: missing tokens should surface immediately, not fail silently.

3. **Prefer mode-aware tokens over `[data-theme='dark']` overrides.** Color, surface,
   line, and shadow tokens already carry both light and dark values, so a single
   rule usually covers both modes — reach for a dark override only when the change
   is more than a light↔dark value swap.

4. **Use class selectors, not element selectors**:
   * ❌ Bad: `.content h3 { ... }` or `.menu p { ... }`
   * ✅ Good: `.sectionHeader { ... }` or `.description { ... }`
   * Rationale: element selectors couple CSS to HTML structure; class selectors are
     explicit and give clearer specificity control.

5. **Validate before committing**:
   * Run `yarn validate:css` to verify no undefined variables are used.
   * Fix any issues before proceeding with the commit.

**Token groups (see `morpheus-tokens.css` for the full list):**

* Spacing: `--mor-space-*` (ordinal `-1..-8`; raw `-2px/-6px/-26px/-28px/-32px/-48px/-56px`)
* Type: `--mor-font-sans`, `--mor-font-mono`, `--mor-font-size-*`, `--mor-font-weight-*`
* Radii: `--mor-radius-*` (`xs/sm/md/lg/xl/2xl/full` + role aliases)
* Surfaces: `--mor-bg`, `--mor-field`, `--mor-card`, `--mor-surface`, `--mor-surface-2`, `--mor-row-hover`
* Lines: `--mor-line`, `--mor-line-2`, `--mor-line-strong`
* Text/links: `--mor-text`, `--mor-muted`, `--mor-link`, `--mor-link-deep`
* Buttons: `--mor-btn-primary-*`; on-fill text: `--mor-on-accent`
* Status (mode-aware): `--mor-status-{info,tip,note,warning,danger}-{bg,accent}`
* Shadows: `--mor-shadow-{card,dropdown,modal}`; brand: `--mor-green`, `--mor-spectral*`

## Important Context

### Language and Terminology

* **Recipe**: A program that makes automated changes to source code
* **LST (Lossless Semantic Tree)**: A tree representation of source code that is type-attributed and format preserving
* **Visitor**: Pattern for traversing and modifying LSTs
* **Marker**: Metadata attached to LST elements
* **Data Table**: Structured output from recipes for reporting

### Resources

* [Moderne Platform](https://app.moderne.io) - Public instance
* [OpenRewrite Docs](https://docs.openrewrite.org) - OpenRewrite documentation

## Project Overview

This is the primary documentation repository for Moderne (https://docs.moderne.io), an enterprise automated code remediation platform. The repository contains comprehensive documentation for:

* **Moderne Platform**: Enterprise SaaS solution for large-scale automated source code refactoring
* **Moderne CLI**: Command-line interface for running recipes locally
* **Moderne DX**: On-premise deployment solution
* **Moderne IDE Integration**: IntelliJ IDEA plugin documentation
* **Advanced Program Analysis**: In-depth guides on control flow, data flow, and taint analysis

### Repository Structure

* `docs/`: Main Moderne documentation
  * `administrator-documentation/`: Platform setup, architecture, and configuration
  * `user-documentation/`: End-user guides for Platform, CLI, and IDE
  * `openrewrite-advanced-program-analysis/`: Advanced analysis techniques
  * `releases/`: Changelogs and release notes
  * `hands-on-learning/`: Workshops and tutorials
* Built with Docusaurus, deployed automatically on merge

### Contextual Sidebar Navigation

The documentation uses dynamic sidebar filtering to provide focused navigation based on the current page. This helps users stay oriented within their current section without being overwhelmed by the full site structure.

**How it works:**

* **Top-level pages** (/, /introduction): Display all documentation sections
* **Within any major section**: Display only that section's content tree
  * Example: When in "Hands-on Learning", only workshop content is shown
  * Example: When in "User Documentation", only user-facing guides are shown

**Implementation:**

* Component: `src/theme/DocSidebarItems/index.tsx` (swizzled from Docusaurus theme)
* Filtering logic: `src/theme/DocSidebarItems/filterUtils.ts`
* Sidebar definition: `sidebars.ts` (single source of truth)

**Section boundaries:**

Sections are automatically detected using HTML divider elements in `sidebars.ts`:
* `{ type: 'html', value: '<br/><strong>Section Name</strong>' }`

**Maintenance:**

* All sidebar content is managed in `sidebars.ts`
* No frontmatter changes needed for new documents
* Filtering is automatic based on URL path
* Cache clearing (`rm -rf .docusaurus`) required after swizzle changes

### Search

Search runs entirely in the browser on a [Pagefind](https://pagefind.app/) index built from the
rendered HTML. There is no search service, API key, or crawler.

**How it works:**

* `src/theme/DocItem/Content/index.tsx` marks the doc body with `data-pagefind-body` and attaches
  the metadata search needs: `section` (the group heading results are listed under) and a
  `category` filter (`documentation` or `recipes`, backing the tabs in the modal)
* `src/components/recipe/RecipeHeader` tags the recipe id with `data-pagefind-meta="recipeId"`.
  Recipes share display names across languages — three unrelated recipes are all called "Module has
  dependency" — so results show the id instead of the generated excerpt, which is identical across
  all three
* `src/components/recipe/OptionsTable` carries `data-pagefind-weight="10"` on each option name, so
  searching an option surfaces the recipes that actually take it ahead of ones that only mention it
  in prose or a usage snippet
* `scripts/pagefind-index.mjs` builds the index into `build/pagefind/` after the site is rendered
* `src/plugins/pagefind.ts` runs that script from `postBuild`, so `yarn build` produces a
  searchable site on its own
* `src/theme/SearchBar/` renders the modal, and `src/theme/SearchBar/pagefind.ts` maps Pagefind's
  page-shaped results onto the rows it displays
* `src/pages/search.tsx` is the full results page behind "See all N results"

**The modal is DocSearch's, the engine is not:**

The markup, class names, and `src/theme/SearchBar/docsearch.css` are all vendored from
`@docsearch/react@4.6.3` so the search UI looks and behaves exactly as it did on Algolia. Only the
results underneath changed. Do not hand-edit `docsearch.css` — put overrides in
`src/theme/SearchBar/styles.css` (loaded with the modal) or `src/css/custom.css` (loaded on every
page, and where the navbar button is styled).

**Searching in development:**

Pagefind indexes rendered HTML, so `yarn start` has no index of its own. The dev server serves
whatever the last `yarn build` left in `build/pagefind/`, which means:

* Run `yarn build` once to make search work in `yarn start`
* Those results reflect the last build, not the page you are currently editing
* With no previous build, the modal says the index has not been built

**Sharded CI builds:**

Each shard renders only a slice of the routes, so the plugin stands down when `SHARD_INDEX` is set.
The `combine` job in `.github/workflows/pages-sharded.yml` runs `yarn index:search` against the
merged output instead. Anything that changes where the build lands has to keep that ordering.

### Swizzled Components and Docusaurus Compatibility

This project uses **Docusaurus 3.9.1** and has customized several theme components through swizzling. When upgrading Docusaurus, carefully review the migration guide for potential breaking changes to these components.

**Swizzled components:**

* `DocBreadcrumbs` - Custom breadcrumb component using the Morpheus design system
* `DocCard` - Enhanced with gem icon support via `customProps.gemIcon`
* `DocCategoryGeneratedIndexPage` - Custom layout for category index pages
* `DocItem/Content` - Ejected to mark the doc body for the search index (see above)
* `DocPaginator` - Styled pagination for documentation pages
* `DocSidebar/Desktop/Content` - Custom sidebar layout and styling
* `DocSidebarItems` - Implements contextual filtering (see above)
* `Footer` - Custom footer with Moderne branding
* `Navbar/Layout` - Custom navbar layout with MegaMenu integration
* `Navbar/Logo` - Custom logo component with dark mode support
* `SearchBar` - Pagefind-backed search modal using DocSearch's markup (see above)

**Important upgrade considerations:**

* Before upgrading Docusaurus, check the [Docusaurus migration guide](https://docusaurus.io/docs/migration) for changes to swizzled components
* Test all swizzled components thoroughly after upgrade, especially:
  * Sidebar filtering logic (`DocSidebarItems`)
  * Doc body markers in `DocItem/Content`, without which the search index is empty
  * Navbar and MegaMenu functionality
  * Gem icon display on DocCards
* Clear the Docusaurus cache after any swizzle changes: `rm -rf .docusaurus`
* If a swizzled component has breaking changes, consider re-swizzling or migrating to a safer wrapper approach

## Never post PR comments without approval

NEVER post comments, reviews, or any content on GitHub PRs/issues without explicit user confirmation first. Always show the draft comment and ask for approval before posting.