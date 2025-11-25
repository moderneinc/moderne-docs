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

* `DocBreadcrumbs` - Custom breadcrumb component using Neo Design system
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
