import type { Meta, StoryObj } from '@storybook/react';
import React, { useCallback, useState } from 'react';
import { CategoryFilter, type FilterResults } from './CategorySearch';
import { CategoryGrid } from './CategoryGrid';
import { PopularRecipes } from './PopularRecipes';
import { CatalogStoryLayout } from './shared/storyLayout';
import { ALL_CATEGORIES } from './shared/sampleData';
import { POPULAR_RECIPES } from './shared/recipeResults';
import styles from './CategoryCatalogPage.module.css';

/**
 * Redesigned recipe catalog landing page (`/user-documentation/recipes/recipe-catalog`).
 *
 * ## What's custom vs. existing
 *
 * | Component | Status | Notes |
 * |---|---|---|
 * | **Category cards** | Extend `DocCard` | Adds recipe counts + subcategory preview chips (sorted by count). |
 * | **Category detail pages** | Extend `DocCategoryGeneratedIndexPage` | Adds count display, sort-by-count, "Show all" toggle (9+ threshold). |
 * | **Category grid** | CSS override on `DocCardList` | 3-column layout + section header with count. |
 * | **Category filter** | Custom | Simple client-side filter that narrows the grid by category name, description, or subcategory name. ~60 lines. |
 * | **Popular recipes** | Custom | Curated editorial section. Maintain via GA pageview data, reviewed quarterly. |
 *
 * ## User flow
 *
 * 1. User lands → Popular recipes (direct links) + full category grid
 * 2. User types in filter → Popular recipes hide; grid narrows to matching categories
 * 3. User clicks a category card → drills into that category's detail page
 * 4. Full recipe search → Algolia DocSearch (Cmd+K) with the "Recipes" facet tab
 *
 * ## Future: enhanced search
 *
 * The category filter is intentionally simple — it narrows the grid, not searches content.
 * Two stretch goals for unifying filter + search:
 * - **Inline Algolia**: replace the filter with `@algolia/autocomplete-core` (already in package.json) embedded on the page with the Recipes facet pre-selected.
 * - **Richer Algolia results**: configure the Algolia crawler to index category paths and recipe counts so the Cmd+K modal shows "Spring → Boot 3.x" with context instead of flat labels.
 */
const meta: Meta = {
  title: 'Catalog/Full page',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', maxWidth: 1080 },
  decorators: [CatalogStoryLayout],
};
export default meta;
type Story = StoryObj;

const totalRecipes = ALL_CATEGORIES.reduce((sum, c) => sum + c.totalRecipeCount, 0);

const CatalogPage = () => {
  const [filterResults, setFilterResults] = useState<FilterResults>({
    categories: ALL_CATEGORIES.map((c) => ({ category: c, matchedSubs: new Set<string>() })),
    query: '',
  });

  const handleResults = useCallback((r: FilterResults) => setFilterResults(r), []);
  const isFiltering = filterResults.query.length > 0;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Recipe catalog</h1>
        <p className={styles.subtitle}>
          Browse {totalRecipes.toLocaleString()} recipes across {ALL_CATEGORIES.length} categories.
          Filter by name or description — or use Cmd+K to search all recipes.
        </p>
      </header>

      <CategoryFilter
        categories={ALL_CATEGORIES}
        onResults={handleResults}
      />

      {!isFiltering && (
        <PopularRecipes recipes={POPULAR_RECIPES} />
      )}

      <CategoryGrid
        categories={filterResults.categories}
        totalCategoryCount={ALL_CATEGORIES.length}
        isFiltering={isFiltering}
      />
    </div>
  );
};

/** The full catalog page. Try filtering by "java", "spring", "docker", or "kubernetes". */
export const Default: Story = {
  render: () => <CatalogPage />,
};
