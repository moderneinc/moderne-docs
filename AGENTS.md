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

## Codex Instructions: Quality Assurance

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

## Working with CSS modules and design tokens

The design system is `@moderneinc/design-system-tokens` (public npm, pinned `7.3.0`),
consumed via `@moderneinc/design-system-tokens/moderne.css`. Tokens use the `--mod-*`
namespace. When modifying any CSS module (`.module.css`), follow this workflow:

1. **Find the right token** in the package — the single source of truth for token
   values, not a local file. Inspect `node_modules/@moderneinc/design-system-tokens/assets/*.css`
   (individual collections) or `node_modules/@moderneinc/design-system-tokens/tokens.json` to
   locate a value. `src/css/tokens-supplement.css` is the only local token file; it defines
   only the mode-aware `--mod-docs-shadow-card`, `--mod-docs-shadow-dropdown`, and
   `--mod-docs-shadow-modal` tokens, because the package's shadows have no dark variant. Do
   not add other one-off tokens there without a design reason — request new values upstream
   in the package instead.

2. **Never use fallback values** with `--mod-*` tokens:
   * ❌ Bad: `var(--mod-spacing_1, 8px)`
   * ✅ Good: `var(--mod-spacing_1)`
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

**Token groups** (see `node_modules/@moderneinc/design-system-tokens/assets/*.css` for the
full list of collections):

* Radii: `border-radius`
* Color: `colors`, `semantic-colors`
* Gradients: `gradients`
* Spacing: `spacing`, `padding`
* Type: `typography`, `semantic-typography`
* Shadows: `shadows`
* Strokes: `strokes`
* Sizing: `height`, `icon-size`
* Aggregate (imports all collections): `moderne`

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

### Swizzled Components and Docusaurus Compatibility

This project uses **Docusaurus 3.9.1** and has customized several theme components through swizzling. When upgrading Docusaurus, carefully review the migration guide for potential breaking changes to these components.

**Swizzled components:**

* `DocBreadcrumbs` - Custom breadcrumb component using the Morpheus design system
* `DocCard` - Enhanced with gem icon support via `customProps.gemIcon`
* `DocCategoryGeneratedIndexPage` - Custom layout for category index pages
* `DocPaginator` - Styled pagination for documentation pages
* `DocSidebar/Desktop/Content` - Custom sidebar layout and styling
* `DocSidebarItems` - Implements contextual filtering (see above)
* `Footer` - Custom footer with Moderne branding
* `Navbar/Layout` - Custom navbar layout with MegaMenu integration
* `Navbar/Logo` - Custom logo component with dark mode support

**Important upgrade considerations:**

* Before upgrading Docusaurus, check the [Docusaurus migration guide](https://docusaurus.io/docs/migration) for changes to swizzled components
* Test all swizzled components thoroughly after upgrade, especially:
  * Sidebar filtering logic (`DocSidebarItems`)
  * Navbar and MegaMenu functionality
  * Gem icon display on DocCards
* Clear the Docusaurus cache after any swizzle changes: `rm -rf .docusaurus`
* If a swizzled component has breaking changes, consider re-swizzling or migrating to a safer wrapper approach

## Never post PR comments without approval

NEVER post comments, reviews, or any content on GitHub PRs/issues without explicit user confirmation first. Always show the draft comment and ask for approval before posting.