import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  RecipeHeader,
  RecipeList,
  OptionsTable,
  ExampleList,
  UsageList,
  DataTableList,
  RecipeMeta,
  RecipePage,
} from '.';
import { StoryLayout } from './shared/storyLayout';
import { SAMPLE } from './RecipeHeader/RecipeHeader.fixtures';
import { commonStaticAnalysisContent as composite } from './shared/sampleData/commonStaticAnalysis.data';
import { replaceDuplicateStringLiteralsContent as single } from './shared/sampleData/replaceDuplicateStringLiterals.data';

/**
 * Whole recipe pages assembled from every component, mirroring the MDX the generator will emit:
 * the body is wrapped in `<RecipePage>`, which owns the rendered ⇄ raw markdown toggle.
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

/** Stand-in for the raw `.md` source the generator emits — shown when the toggle flips to "Raw". */
const SAMPLE_RAW_MARKDOWN = `---
sidebar_label: "Common static analysis issues"
description: "Resolve common static analysis issues (also known as SAST issues)."
---

# Common static analysis issues

**org.openrewrite.staticanalysis.CommonStaticAnalysis**

_Resolve common static analysis issues (also known as SAST issues)._

## Recipe source

This recipe is composed of more than one recipe. If you want to see the source
code for this recipe, you can find it in the [rewrite-static-analysis] repository.

## Definition

### Preconditions

* [Singleton](/recipes/core/singleton)

### Recipe list

* [Constructors of an \`abstract\` class should not be declared \`public\`](/recipes/...)
* [Atomic Boolean, Integer, and Long equality checks compare their values](/recipes/...)
* ...
`;

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
    <RecipePage rawMarkdown={SAMPLE_RAW_MARKDOWN}>
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
    </RecipePage>
  ),
};

/** Single recipe: Moderne-only badge + Options table + Examples + Usage + Data tables. */
export const SingleRecipe: Story = {
  render: () => (
    <RecipePage rawMarkdown={SAMPLE_RAW_MARKDOWN}>
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
    </RecipePage>
  ),
};
