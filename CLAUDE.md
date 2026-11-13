# Moderne Documentation Project Instructions

@CONTRIBUTING.md

## Style guide

`STYLE_GUIDE.md` governs all documentation. It loads automatically when you touch files under `docs/`. Before you write a new page, read `STYLE_GUIDE.md` in full. The prose rules (11 and 22-28) matter most, because `yarn lint:markdown` does not check them.

## Commands

* `yarn start`: dev server for previews (does not exit)
* `yarn build`: production build, the same one CI runs
* `yarn lint:markdown`: mechanical style checks for `docs/`
* `yarn validate:css`: undefined CSS variable check
* `yarn typecheck`: TypeScript check
* `yarn test:run`: vitest, single run
* `yarn storybook`: Storybook on port 6006

## Pre-commit validation

Before committing or opening a pull request:

1. Run `yarn build` and fix any warnings or broken links.
2. Run `yarn lint:markdown` for docs changes, `yarn validate:css` for CSS changes, and `yarn typecheck` for TypeScript changes.

## Quality assurance for documentation

After any change to documentation files:

1. Check spelling, grammar, and clarity in all modified content.
2. Re-read the diff against the rules in `STYLE_GUIDE.md`, the prose rules (11 and 22-28) in particular.
3. Fix inconsistent terminology and awkward phrasing.

## Generated files

Do not hand-edit the latest-versions list, the GraphQL reference, or the proprietary recipe changelog. Scheduled workflows overwrite them. See CONTRIBUTING.md.

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

This project uses **Docusaurus 3.10.x** and swizzles many theme components. The folders in `src/theme/` are the full list. When upgrading Docusaurus, review the migration guide for breaking changes to them.

Two customizations carry behavior beyond styling:

* `DocSidebarItems` implements contextual filtering (see above)
* `DocCard` adds gem icon support via `customProps.gemIcon`

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