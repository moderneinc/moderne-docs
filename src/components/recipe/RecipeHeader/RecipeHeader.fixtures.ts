/**
 * Sample data for the RecipeHeader stories. In a `.ts` file (not `.tsx`) so Storybook's
 * react-docgen-typescript loader doesn't treat it as a component and clobber the `displayName` field.
 */
export const SAMPLE = {
  displayName: 'Common static analysis issues',
  description: 'Resolve common static analysis issues (also known as SAST issues).',
  fqName: 'org.openrewrite.staticanalysis.CommonStaticAnalysis',
  artifact: 'org.openrewrite.recipe:rewrite-static-analysis',
  type: 'Composite recipe' as const,
  languages: ['Java'],
  tags: ['RSPEC-S1192', 'RSPEC-S1889'],
  license: 'Moderne Source Available License',
  appLink: 'https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis',
  markdownUrl:
    'https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/commonstaticanalysis.md',
};
