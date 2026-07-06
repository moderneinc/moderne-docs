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
 * **Scale test: Catalog → Kotlin → Migrate → recipe**
 *
 * Kotlin is the second-largest category: 20 direct subcategories, 1,046 recipes.
 * Unlike Java (which has deep nesting), Kotlin is wide and flat — all 20 subcategories
 * are at a single level. This tests the grid at high width without the depth complexity.
 *
 * Kotlin vs Java comparison:
 * - Java: 23 subcats, 148 total (deep), 5 levels, 1,799 recipes
 * - Kotlin: 20 subcats, 20 total (flat), 1 level, 1,046 recipes
 */
const meta: Meta = {
  title: 'Catalog/Flows/Scale - Kotlin to Migrate',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', maxWidth: 1080 },
  decorators: [CatalogStoryLayout],
};
export default meta;
type Story = StoryObj;

const totalRecipes = ALL_CATEGORIES.reduce((sum, c) => sum + c.totalRecipeCount, 0);

/** **Step 1** — Catalog landing. Kotlin card shows top 5 by count: Kotlin migration (208), Search (94), Compose (92), Bestpractices (89), Performance (84), +15 more. */
export const Step1_CatalogLanding: Story = {
  name: '1. Catalog landing (check Kotlin card)',
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

/** **Step 2** — Kotlin detail. 20 subcategories in a flat grid (no deeper nesting). Wide but shallow — every subcategory is a leaf with recipes. */
export const Step2_KotlinDetail: Story = {
  name: '2. Kotlin (20 subcats, 1k recipes, flat)',
  render: () => (
    <CategoryDetail
      breadcrumbs={[{ label: 'Catalog', href: BASE }]}
      label="Kotlin"
      description="Recipes to search and transform Kotlin."
      totalRecipeCount={1046}
      subcategories={[
        { label: 'Kotlin migration', href: `${BASE}/kotlin/migrate`, totalRecipeCount: 208 },
        { label: 'Search', href: `${BASE}/kotlin/search`, totalRecipeCount: 94 },
        { label: 'Compose', href: `${BASE}/kotlin/compose`, totalRecipeCount: 92 },
        { label: 'Bestpractices', href: `${BASE}/kotlin/bestpractices`, totalRecipeCount: 89 },
        { label: 'Performance', href: `${BASE}/kotlin/performance`, totalRecipeCount: 84 },
        { label: 'Spring', href: `${BASE}/kotlin/spring`, totalRecipeCount: 81 },
        { label: 'Security', href: `${BASE}/kotlin/security`, totalRecipeCount: 76 },
        { label: 'Android', href: `${BASE}/kotlin/android`, totalRecipeCount: 60 },
        { label: 'Interop', href: `${BASE}/kotlin/interop`, totalRecipeCount: 49 },
        { label: 'Idiom', href: `${BASE}/kotlin/idiom`, totalRecipeCount: 41 },
        { label: 'Testing', href: `${BASE}/kotlin/testing`, totalRecipeCount: 38 },
        { label: 'Logging', href: `${BASE}/kotlin/logging`, totalRecipeCount: 35 },
        { label: 'Coroutines', href: `${BASE}/kotlin/coroutines`, totalRecipeCount: 32 },
        { label: 'Functional', href: `${BASE}/kotlin/functional`, totalRecipeCount: 31 },
        { label: 'Stdlib', href: `${BASE}/kotlin/stdlib`, totalRecipeCount: 19 },
        { label: 'Cleanup', href: `${BASE}/kotlin/cleanup`, totalRecipeCount: 7 },
        { label: 'Exposed', href: `${BASE}/kotlin/exposed`, totalRecipeCount: 4 },
        { label: 'Format', href: `${BASE}/kotlin/format`, totalRecipeCount: 1 },
        { label: 'Kotlinx', href: `${BASE}/kotlin/kotlinx`, totalRecipeCount: 1 },
        { label: 'Replace', href: `${BASE}/kotlin/replace`, totalRecipeCount: 1 },
      ]}
      recipes={[
        { label: 'Find Kotlin sources and collect data metrics', href: `${BASE}/kotlin/findkotlinsources` },
        { label: 'Order Kotlin imports', href: `${BASE}/kotlin/orderimports` },
        { label: 'Rename type alias', href: `${BASE}/kotlin/renametypealias` },
      ]}
    />
  ),
};

/** **Step 3** — Kotlin migration subcategory. 208 recipes — the largest leaf under Kotlin. */
export const Step3_MigrateDetail: Story = {
  name: '3. Kotlin migration (208 recipes, leaf)',
  render: () => (
    <CategoryDetail
      breadcrumbs={[
        { label: 'Catalog', href: BASE },
        { label: 'Kotlin', href: `${BASE}/kotlin` },
      ]}
      label="Kotlin migration"
      totalRecipeCount={208}
      subcategories={[]}
      recipes={[
        { label: 'Migrate Kotlin 1.7 to 1.8', href: `${BASE}/kotlin/migrate/kotlin17to18` },
        { label: 'Migrate Kotlin 1.8 to 1.9', href: `${BASE}/kotlin/migrate/kotlin18to19` },
        { label: 'Migrate Kotlin 1.9 to 2.0', href: `${BASE}/kotlin/migrate/kotlin19to20` },
        { label: 'Migrate Kotlin 2.0 to 2.1', href: `${BASE}/kotlin/migrate/kotlin20to21` },
        { label: 'Replace deprecated Kotlin API', href: `${BASE}/kotlin/migrate/replacedeprecatedapi` },
        { label: 'Update Kotlin version', href: `${BASE}/kotlin/migrate/updatekotlinversion` },
      ]}
    />
  ),
};

/** **Step 4** — Recipe detail. End of a 3-step path from catalog. */
export const Step4_RecipeDetail: Story = {
  name: '4. Recipe: Migrate Kotlin 1.9 to 2.0',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--neo-spacing_5)' }}>
      <RecipeHeader
        displayName="Migrate Kotlin 1.9 to 2.0"
        description="Applies changes for migrating from Kotlin 1.9 to 2.0."
        type="Composite recipe"
        languages={['Kotlin']}
        tags={[]}
        license="Apache License 2.0"
        fqName="org.openrewrite.kotlin.migrate.Kotlin19to20"
        appLink="https://app.moderne.io/recipes/org.openrewrite.kotlin.migrate.Kotlin19to20"
        markdownUrl=""
      />
    </div>
  ),
};
