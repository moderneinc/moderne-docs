import type { Meta, StoryObj } from '@storybook/react';
import React, { type ReactNode } from 'react';
import {
  RecipeHeader,
  RecipeList,
  OptionsTable,
  ExampleList,
  UsageList,
  DataTableList,
  RecipeMeta,
} from '.';
import { StoryLayout } from './shared/storyLayout';
import { SAMPLE } from './RecipeHeader/RecipeHeader.fixtures';
import { commonStaticAnalysisContent as composite } from './shared/sampleData/commonStaticAnalysis.data';
import { replaceDuplicateStringLiteralsContent as single } from './shared/sampleData/replaceDuplicateStringLiterals.data';

/**
 * Whole recipe pages assembled from every component, mirroring the MDX the generator will emit.
 * Two faithful variants because a recipe is either composite or single — never both:
 * `CompositeRecipe` shows the Definition (sub-recipe) list; `SingleRecipe` shows the Options table.
 */
const meta: Meta = {
  title: 'Recipe/Full page',
  parameters: { layout: 'fullscreen', maxWidth: 980 },
  decorators: [StoryLayout],
};
export default meta;
type Story = StoryObj;

/** Page body stand-in: on real pages, Docusaurus `.markdown > *` margins space the sections; in
 *  Storybook there's no `.markdown`, so a flex column with the same rhythm stands in for it. */
const Page = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--neo-spacing_5)' }}>{children}</div>
);

const singleHeader = {
  displayName: 'Replace duplicate `String` literals',
  description:
    'Replaces `String` literals with a length of 5 or greater repeated a minimum of 3 times. Adds a new `private static final String` or uses an existing equivalent class field. Centralizing repeated string values into constants makes refactoring safer and reduces the risk of inconsistent updates.',
  type: 'Single recipe' as const,
  languages: ['Java'],
  tags: single.tags,
  license: 'Moderne Source Available License',
  fqName: 'org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals',
  artifact: 'org.openrewrite.recipe:rewrite-static-analysis',
  appLink: 'https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals',
  markdownUrl:
    'https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/replaceduplicatestringliterals.md',
  moderneOnly: true,
};

/** Composite recipe: access badge + Definition (sub-recipe list) + Examples + Usage + Data tables. */
export const CompositeRecipe: Story = {
  render: () => (
    <Page>
      <RecipeMeta
        displayName={SAMPLE.displayName}
        description={SAMPLE.description}
        fqName={SAMPLE.fqName}
        languages={SAMPLE.languages}
        license={SAMPLE.license}
        sourceUrl="https://github.com/openrewrite/rewrite-static-analysis"
      />
      <RecipeHeader {...SAMPLE} />
      <RecipeList
        recipes={composite.subRecipes}
        preconditions={composite.preconditions.map((p) => ({
          name: p,
          href: '/user-documentation/recipes/recipe-catalog/core/singleton',
        }))}
      >
        <h2>Definition</h2>
      </RecipeList>
      <ExampleList examples={composite.examples}>
        <h2>Examples</h2>
      </ExampleList>
      <UsageList usage={composite.usage}>
        <h2>Usage</h2>
      </UsageList>
      <DataTableList tables={composite.dataTables}>
        <h2>Data tables</h2>
      </DataTableList>
    </Page>
  ),
};

/** Single recipe: Moderne-only badge + Options table + Examples + Usage + Data tables. */
export const SingleRecipe: Story = {
  render: () => (
    <Page>
      <RecipeMeta
        displayName="Replace duplicate String literals"
        description="Replaces String literals repeated a minimum of 3 times with a shared constant."
        fqName={singleHeader.fqName}
        languages={singleHeader.languages}
        license={singleHeader.license}
        sourceUrl="https://github.com/openrewrite/rewrite-static-analysis"
      />
      <RecipeHeader {...singleHeader} />
      <OptionsTable options={single.options}>
        <h2>Options</h2>
      </OptionsTable>
      <ExampleList examples={single.examples}>
        <h2>Examples</h2>
      </ExampleList>
      <UsageList usage={single.usage}>
        <h2>Usage</h2>
      </UsageList>
      <DataTableList tables={single.dataTables}>
        <h2>Data tables</h2>
      </DataTableList>
    </Page>
  ),
};
