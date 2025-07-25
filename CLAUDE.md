# Moderne Documentation Project Instructions

## Important: Style Guide

When editing any documentation in this repository, ALWAYS follow the rules in STYLE_GUIDE.md. Key rules include:

* Use asterisks (*) for bullet points, not dashes (-)
* Add blank lines after headers and before code blocks
* End description lines with exactly one period
* Use sentence case for headers (no title case, no ending periods)
* Use explicit relative paths for links (./file.md, ../parent.md)

Please read the full STYLE_GUIDE.md for all formatting rules.

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
