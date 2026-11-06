// Client-side redirects for docs that have moved.
//
// Each entry maps one or more old URLs (`from`) to their current location (`to`).
// At build time, @docusaurus/plugin-client-redirects emits a small meta-refresh
// HTML file at each old path, so bookmarks and external links keep working.
//
// When you move or rename a doc, add its OLD path here pointing at the new one.
// Group several old paths under a single destination with a `from` array.
//
// Notes:
//   * Paths are site-root-relative (this site serves docs at "/").
//   * `to` must resolve to a real page; the build fails on a dangling target.
//     It may also be an absolute URL, which the build does not check.
//
// Testing redirects locally:
//   This plugin only emits redirect files during a production build. `yarn start`
//   (the dev server) ignores it, so redirects never work there. To test them,
//   build the site and serve the output:
//
//     yarn build      # build + generate the redirect files
//     npm run serve   # serve build/ at http://localhost:3000
//
//   Then open an old path (e.g. http://localhost:3000/releases/cli-dx) and confirm
//   it lands on the new page.
//
// The recipe catalog moved to the Code Genome Project. Its ~9,000 redirects live in
// src/config/recipe-catalog-redirects.json rather than in this list. Each old recipe
// page goes to the same recipe on CGP by recipe ID. Each category page goes to a CGP
// search: on the full package when every recipe in the category shares one, otherwise
// on the vendor-neutral segments (e.g. `java.spring.boot3` covers both
// org.openrewrite.java.spring.boot3 and io.moderne.java.spring.boot3). A few recipe
// pages whose recipes aren't in CGP yet are grouped under their category's search.
// The file was generated once from the catalog before it was deleted; edit it by hand.

import recipeCatalogRedirects from './src/config/recipe-catalog-redirects.json';

type RedirectRule = { from: string | string[]; to: string };

const redirects: RedirectRule[] = [
  // Several old paths that now share a single destination.
  {
    from: [
      '/administrator-documentation/licensing',
      '/administrator-documentation/references/licensing',
    ],
    to: '/licensing/overview',
  },
  {
    from: [
      '/user-documentation/moderne-cli/how-to-guides/air-gapped-cli-install',
      '/user-documentation/moderne-cli/getting-started/dx-cli-install',
    ],
    to: '/user-documentation/moderne-cli/getting-started/cli-internal-mirror',
  },
  {
    from: [
      '/user-documentation/moderne-cli/how-to-guides/jdk-selection-and-config',
      '/user-documentation/moderne-cli/how-to-guides/build-tool-config',
    ],
    to: '/user-documentation/moderne-cli/how-to-guides/java',
  },
  {
    from: [
      '/user-documentation/recipes/popular-recipe-guides/migrate-to-java-17',
      '/user-documentation/recipes/popular-recipe-guides/migrate-to-java-21',
      '/user-documentation/recipes/popular-recipe-guides/migrate-to-java-25',
    ],
    to: '/user-documentation/recipes/popular-recipe-guides/migrate-to-java',
  },
  // One-to-one moves.
  {
    from: '/administrator-documentation/moderne-dx/references/moderne-dx-architecture',
    to: '/administrator-documentation/moderne-dx/getting-started/overview',
  },
  { from: '/administrator-documentation/references/repos-csv', to: '/user-documentation/moderne-cli/references/repos-csv' },
  { from: '/user-documentation/community-office-hours', to: '/user-documentation/code-remix-sessions/2026' },
  { from: '/hands-on-learning/moderne-cli-workshop', to: '/user-documentation/moderne-cli/getting-started/moderne-cli-workshop' },
  { from: '/user-documentation/moderne-cli/how-to-guides/coding-agent-skills', to: '/user-documentation/agent-tools/skills' },
  { from: '/user-documentation/moderne-cli/getting-started/cli-dev-center', to: '/user-documentation/moderne-cli/how-to-guides/cli-dev-center' },
  { from: '/user-documentation/moderne-cli/faq', to: '/user-documentation/moderne-cli/references/faq' },
  { from: '/releases/cli-dx', to: '/releases/cli-releases' },
  { from: '/user-documentation/agent-tools/code-search', to: '/user-documentation/agent-tools/trigrep' },
  { from: '/user-documentation/recipes/prethink', to: '/user-documentation/agent-tools/prethink' },
  { from: '/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-config', to: '/administrator-documentation/moderne-platform/how-to-guides/connector-configuration/connector-configuration' },
  { from: '/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-variables', to: '/administrator-documentation/moderne-platform/how-to-guides/connector-configuration/connector-variables' },
  { from: '/administrator-documentation/moderne-platform/getting-started/proof-of-value', to: '/user-documentation/moderne-platform/getting-started/proof-of-value' },
  { from: '/user-documentation/recipes/recipe-authoring/writing-python-recipes', to: '/user-documentation/recipes/authoring-recipes/writing-recipes/writing-python-recipes' },
  { from: '/administrator-documentation/moderne-platform/references/how-ast-artifacts-are-produced', to: '/administrator-documentation/moderne-platform/references/how-lst-artifacts-are-produced' },
  { from: '/user-documentation/recipes/coordinating-parent-pom-migrations', to: '/user-documentation/recipes/popular-recipe-guides/coordinating-parent-pom-migrations' },
  { from: '/user-documentation/recipes/managing-gradle-lock-files', to: '/user-documentation/moderne-cli/how-to-guides/managing-gradle-lock-files' },
  { from: '/user-documentation/recipes/popular-recipe-guides/migrate-to-spring-boot-4', to: '/user-documentation/recipes/popular-recipe-guides/migrate-to-spring-boot' },
  { from: '/user-documentation/recipes/popular-recipe-guides/migrate-to-spring-boot-3', to: '/user-documentation/recipes/popular-recipe-guides/migrate-to-spring-boot#coming-from-spring-boot-2x' },
  { from: '/administrator-documentation/moderne-platform/references/lossless-semantic-trees', to: '/user-documentation/recipes/authoring-recipes/concepts/lossless-semantic-trees' },
  { from: '/user-documentation/workshops/recipe-authoring', to: '/hands-on-learning/fundamentals/' },
  { from: '/user-documentation/moderne-platform/how-to-guides/categorize-recipes', to: '/administrator-documentation/moderne-platform/how-to-guides/categorize-recipes' },
  { from: '/user-documentation/recipes/moderne-trigrep', to: '/user-documentation/agent-tools/trigrep' },
  { from: '/administrator-documentation/moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-strict-recipe-sources', to: '/administrator-documentation/moderne-platform/how-to-guides/connector-configuration/configure-the-pom-cache' },
  { from: '/hands-on-learning/fundamentals/module-3-refaster-recipes', to: '/hands-on-learning/fundamentals/module-3-kotlin-dsl-recipes' },
  { from: '/administrator-documentation/moderne-platform/how-to-guides/accessing-the-code-genome-project', to: '/user-documentation/recipes/accessing-the-code-genome-project' },
  { from: '/user-documentation/moderne-platform/how-to-guides/introduction-to-type-aware-code-search', to: '/user-documentation/moderne-platform/getting-started/code-search' },
  {
    from: [
      '/user-documentation/recipes/lists',
      '/user-documentation/recipes/lists/all-recipes',
      '/user-documentation/recipes/lists/all-recipes-io-moderne-recipe',
      '/user-documentation/recipes/lists/all-recipes-org-openrewrite',
      '/user-documentation/recipes/lists/all-recipes-org-openrewrite-recipe',
      '/user-documentation/recipes/lists/recipes-by-tag',
      '/user-documentation/recipes/lists/recipes-with-data-tables',
      '/user-documentation/recipes/lists/scanning-recipes',
      '/user-documentation/recipes/lists/standalone-recipes',
    ],
    to: 'https://codegenomeproject.org/recipes',
  },
  ...(recipeCatalogRedirects as RedirectRule[]),
];

export default redirects;
