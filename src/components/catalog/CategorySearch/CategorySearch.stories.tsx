import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { CategoryFilter, type FilterResults } from './CategorySearch';
import { CatalogStoryLayout } from '../shared/storyLayout';
import { ALL_CATEGORIES } from '../shared/sampleData';

/**
 * ## Category filter
 *
 * Simple client-side filter that narrows the catalog grid by category name, description,
 * or subcategory name. ~60 lines of React. This is a **grid filter** — not a search engine.
 *
 * Full recipe search is handled by Algolia DocSearch (`Cmd+K`) with the "Recipes" facet tab.
 * The filter and Algolia serve different purposes: the filter narrows 72 category cards;
 * Algolia finds specific recipes across 7,400+ pages.
 *
 * ### Why this is custom
 *
 * Docusaurus has no built-in filter for `generated-index` category pages. The data
 * (category names, subcategory names, descriptions) would need to be available at build
 * time via a Docusaurus plugin or a generator-emitted JSON manifest.
 *
 * ### Future: enhanced search
 *
 * Two stretch goals for unifying filter + search:
 * - **Inline Algolia**: replace this filter with `@algolia/autocomplete-core` (already in
 *   `package.json`) embedded on the page, Recipes facet pre-selected. One search, one index.
 * - **Richer Algolia results**: configure the crawler to index category paths and recipe
 *   counts so the Cmd+K modal shows "Spring → Boot 3.x" with hierarchy context.
 */
const meta: Meta<typeof CategoryFilter> = {
  title: 'Catalog/CategoryFilter',
  tags: ['autodocs'],
  component: CategoryFilter,
  parameters: { layout: 'fullscreen', maxWidth: 640 },
  decorators: [CatalogStoryLayout],
};
export default meta;
type Story = StoryObj<typeof CategoryFilter>;

const FilterWithState = (props: { placeholder?: string }) => {
  const [results, setResults] = useState<FilterResults>({
    categories: ALL_CATEGORIES.map((c) => ({ category: c, matchedSubs: new Set<string>() })),
    query: '',
  });
  return (
    <div>
      <CategoryFilter
        categories={ALL_CATEGORIES}
        onResults={setResults}
        {...props}
      />
      <div style={{ marginTop: 16, fontSize: 13, color: 'var(--neo-typography-body-secondary)' }}>
        <p>Showing {results.categories.length} of {ALL_CATEGORIES.length} categories</p>
      </div>
    </div>
  );
};

/** Default: no filter, all categories shown. */
export const Default: Story = {
  render: () => <FilterWithState />,
};

/** Try typing "java", "spring", "docker", or "kubernetes" to narrow the grid. */
export const FilterDemo: Story = {
  render: () => <FilterWithState placeholder='Try "java", "spring", "docker", or "kubernetes"…' />,
};
