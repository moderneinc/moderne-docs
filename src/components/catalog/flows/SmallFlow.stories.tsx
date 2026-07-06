import type { Meta, StoryObj } from '@storybook/react';
import React, { useCallback, useState } from 'react';
import { CategoryFilter, type FilterResults } from '../CategorySearch';
import { CategoryGrid } from '../CategoryGrid';
import { PopularRecipes } from '../PopularRecipes';
import { CategoryDetail } from '../CategoryDetail';
import { RecipeHeader } from '@site/src/components/recipe';
import { CatalogStoryLayout } from '../shared/storyLayout';
import { ALL_CATEGORIES } from '../shared/sampleData';
import { SAMPLE_RECIPES, POPULAR_RECIPES } from '../shared/recipeResults';
import pageStyles from '../CategoryCatalogPage.module.css';

const BASE = '/user-documentation/recipes/recipe-catalog';

/**
 * **Small flow: Catalog → Core → Find call graph**
 *
 * The simplest path through the catalog. Core is a flat category with 20 recipes
 * and no subcategories. Two screens to reach a recipe detail page.
 */
const meta: Meta = {
  title: 'Catalog/Flows/Small - Core to recipe',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', maxWidth: 1080 },
  decorators: [CatalogStoryLayout],
};
export default meta;
type Story = StoryObj;

const totalRecipes = ALL_CATEGORIES.reduce((sum, c) => sum + c.totalRecipeCount, 0);

/** **Step 1** — User lands on the catalog page and sees the full grid. Core is visible in the category list. */
export const Step1_CatalogLanding: Story = {
  name: '1. Catalog landing',
  render: () => {
    const [results, setResults] = useState<FilterResults>({
      categories: ALL_CATEGORIES.map((c) => ({ category: c, matchedSubs: new Set<string>() })),
      query: '',
    });
    return (
      <div className={pageStyles.page}>
        <header className={pageStyles.header}>
          <h1 className={pageStyles.title}>Recipe catalog</h1>
          <p className={pageStyles.subtitle}>
            Browse {totalRecipes.toLocaleString()} recipes across {ALL_CATEGORIES.length} categories.
          </p>
        </header>
        <CategoryFilter categories={ALL_CATEGORIES} onResults={useCallback((r: FilterResults) => setResults(r), [])} />
        {!results.query && <PopularRecipes recipes={POPULAR_RECIPES} />}
        <CategoryGrid categories={results.categories} totalCategoryCount={ALL_CATEGORIES.length} isFiltering={!!results.query} />
      </div>
    );
  },
};

/** **Step 2** — User clicks the Core card. Flat list of 20 recipes, no subcategories. */
export const Step2_CoreDetail: Story = {
  name: '2. Core category',
  render: () => (
    <CategoryDetail
      breadcrumbs={[{ label: 'Catalog', href: BASE }]}
      label="Core"
      totalRecipeCount={20}
      subcategories={[]}
      recipes={[
        { label: 'Add entries to .gitignore', href: `${BASE}/core/addtogitignore` },
        { label: 'Delete files', href: `${BASE}/core/deletesourcefiles` },
        { label: 'Find LST provenance', href: `${BASE}/core/findlstprovenance` },
        { label: 'Find call graph', href: `${BASE}/core/findcallgraph` },
        { label: 'Find colliding source files', href: `${BASE}/core/findcollidingsourcefiles` },
        { label: 'Find deserialization errors', href: `${BASE}/core/finddeserializationerrors` },
        { label: 'Find duplicate source files', href: `${BASE}/core/findduplicatesourcefiles` },
        { label: 'Find files', href: `${BASE}/core/findsourcefiles` },
        { label: 'Find instances of type Quark', href: `${BASE}/core/findquarks` },
        { label: 'Find source files with ParseExceptionResult markers', href: `${BASE}/core/findparsefailures` },
        { label: 'Find styles', href: `${BASE}/core/findstyles` },
        { label: 'Is in repository', href: `${BASE}/core/isinrepository` },
        { label: 'Language composition report', href: `${BASE}/core/languagecomposition` },
        { label: 'List runtime classpath', href: `${BASE}/core/listruntimeclasspath` },
        { label: 'Move a file', href: `${BASE}/core/movefile` },
        { label: 'Remove ignoral of files from .gitignore', href: `${BASE}/core/excludefilefromgitignore` },
        { label: 'Rename a file', href: `${BASE}/core/renamefile` },
        { label: 'Set file permission attributes', href: `${BASE}/core/setfilepermissions` },
        { label: 'Show Git source control metadata', href: `${BASE}/core/findgitprovenance` },
        { label: 'Singleton', href: `${BASE}/core/singleton` },
      ]}
    />
  ),
};

/** **Step 3** — User clicks "Find call graph". Lands on the recipe detail page. */
export const Step3_RecipeDetail: Story = {
  name: '3. Recipe detail: Find call graph',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--neo-spacing_5)' }}>
      <RecipeHeader
        displayName="Find call graph"
        description="Produces a data table where each row represents a method call."
        type="Single recipe"
        languages={['Java']}
        tags={[]}
        license="Apache License 2.0"
        fqName="org.openrewrite.core.FindCallGraph"
        appLink="https://app.moderne.io/recipes/org.openrewrite.core.FindCallGraph"
        markdownUrl=""
      />
    </div>
  ),
};
