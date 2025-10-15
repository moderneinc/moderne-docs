# Moderne Docs

The docs behind [https://docs.moderne.io/](https://docs.moderne.io/). For OpenRewrite docs, please see the [rewrite-docs repository](https://github.com/openrewrite/rewrite-docs).

## Contributing

We encourage you to contribute to our docs! Please feel free to create an issue or open a PR if you find any issues.

Please follow our comprehensive [Style Guide](./STYLE_GUIDE.md) when contributing to the documentation. It covers formatting rules, markdown conventions, and content guidelines to ensure consistency across all Moderne documentation.

## Getting started

This documentation site is built using [Docusaurus](https://docusaurus.io/). When any changes are merged into this repository, a build is kicked off to update the docs.

### Prerequisites

* Node.js version `20.0` or above
* Yarn package manager

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/moderneinc/moderne-docs.git
cd moderne-docs
yarn install
```

### Local development

To start the development server:

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server. The site will be available at `http://localhost:3000`.

### Building the site

To build the site to test if there are any errors:

```bash
DOCUSAURUS_IGNORE_SSG_WARNINGS=true yarn build
```

### Project structure

* `docs/` - Root documentation directory
  * `administrator-documentation/` - Platform setup and configuration guides
  * `user-documentation/` - End-user guides for Platform, CLI, and IDE
  * `openrewrite-advanced-program-analysis/` - Advanced analysis techniques
  * `releases/` - Changelogs and release notes
  * `hands-on-learning/` - Workshops and tutorials
* `static/` - Static assets like images and files
* `src/` - Custom React components and pages
* `docusaurus.config.ts` - Docusaurus configuration file
* `sidebars.ts` - Sidebar navigation configuration - must be updated whenever a new page is added
