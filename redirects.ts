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
//
// Testing redirects locally:
//   This plugin only emits redirect files during a production build. `yarn start`
//   (the dev server) ignores it, so redirects never work there. To test them,
//   build the site and serve the output:
//
//     EXAMPLE_RECIPES_ONLY=1 yarn build   # build + generate the redirect files
//     npm run serve                       # serve build/ at http://localhost:3000
//
//   Then open an old path (e.g. http://localhost:3000/releases/cli-dx) and confirm
//   it lands on the new page. EXAMPLE_RECIPES_ONLY skips the ~5,700 recipe-catalog
//   pages for a much faster build; every redirect is still generated.

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
  { from: '/administrator-documentation/references/repos-csv', to: '/user-documentation/moderne-cli/references/repos-csv' },
  { from: '/user-documentation/community-office-hours', to: '/user-documentation/code-remix-sessions/2026' },
  { from: '/hands-on-learning/moderne-cli-workshop', to: '/user-documentation/moderne-cli/getting-started/moderne-cli-workshop' },
  { from: '/user-documentation/moderne-cli/how-to-guides/coding-agent-skills', to: '/user-documentation/agent-tools/skills' },
  { from: '/administrator-documentation/moderne-platform-v1/how-to-guides/recipe-based-devcenter-beta', to: '/administrator-documentation/moderne-platform-v1/how-to-guides/recipe-based-devcenter' },
  { from: '/administrator-documentation/moderne-platform-v1/how-to-guides/creating-a-devcenter-recipe-beta', to: '/administrator-documentation/moderne-platform-v1/how-to-guides/creating-a-devcenter-recipe' },
  { from: '/user-documentation/moderne-cli/getting-started/cli-dev-center', to: '/user-documentation/moderne-cli/how-to-guides/cli-dev-center' },
  { from: '/user-documentation/moderne-cli/faq', to: '/user-documentation/moderne-cli/references/faq' },
  { from: '/releases/cli-dx', to: '/releases/cli-releases' },
  { from: '/user-documentation/agent-tools/code-search', to: '/user-documentation/agent-tools/trigrep' },
  { from: '/user-documentation/recipes/prethink', to: '/user-documentation/agent-tools/prethink' },
  { from: '/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-config', to: '/administrator-documentation/moderne-platform/how-to-guides/connector-configuration/connector-configuration' },
  { from: '/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-variables', to: '/administrator-documentation/moderne-platform/how-to-guides/connector-configuration/connector-variables' },
  { from: '/administrator-documentation/moderne-platform-v1/getting-started/proof-of-value', to: '/user-documentation/moderne-platform-v1/getting-started/proof-of-value' },
  { from: '/administrator-documentation/moderne-platform/getting-started/proof-of-value', to: '/user-documentation/moderne-platform/getting-started/proof-of-value' },
  { from: '/user-documentation/recipes/recipe-authoring/writing-python-recipes', to: '/user-documentation/recipes/authoring-recipes/writing-recipes/writing-python-recipes' },
  { from: '/administrator-documentation/moderne-platform-v1/references/how-ast-artifacts-are-produced', to: '/administrator-documentation/moderne-platform-v1/references/how-lst-artifacts-are-produced' },
  { from: '/administrator-documentation/moderne-platform/references/how-ast-artifacts-are-produced', to: '/administrator-documentation/moderne-platform/references/how-lst-artifacts-are-produced' },
  { from: '/user-documentation/recipes/coordinating-parent-pom-migrations', to: '/user-documentation/recipes/popular-recipe-guides/coordinating-parent-pom-migrations' },
  { from: '/user-documentation/recipes/managing-gradle-lock-files', to: '/user-documentation/moderne-cli/how-to-guides/managing-gradle-lock-files' },
  { from: '/user-documentation/recipes/popular-recipe-guides/migrate-to-spring-boot-4', to: '/user-documentation/recipes/popular-recipe-guides/migrate-to-spring-boot' },
  { from: '/user-documentation/recipes/popular-recipe-guides/migrate-to-spring-boot-3', to: '/user-documentation/recipes/popular-recipe-guides/migrate-to-spring-boot#coming-from-spring-boot-2x' },
  { from: '/administrator-documentation/moderne-platform/references/lossless-semantic-trees', to: '/user-documentation/recipes/authoring-recipes/concepts/lossless-semantic-trees' },
  { from: '/user-documentation/workshops/recipe-authoring', to: '/hands-on-learning/fundamentals/' },
  { from: '/user-documentation/moderne-platform/how-to-guides/categorize-recipes', to: '/administrator-documentation/moderne-platform/how-to-guides/categorize-recipes' },
  { from: '/user-documentation/recipes/moderne-trigrep', to: '/user-documentation/agent-tools/trigrep' },
];

export default redirects;
