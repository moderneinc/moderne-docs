import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CategoryGrid } from './CategoryGrid';
import { CatalogStoryLayout } from '../shared/storyLayout';
import { ALL_CATEGORIES } from '../shared/sampleData';

const meta: Meta<typeof CategoryGrid> = {
  title: 'Catalog/CategoryGrid',
  tags: ['autodocs'],
  component: CategoryGrid,
  parameters: { layout: 'fullscreen', maxWidth: 1080 },
  decorators: [CatalogStoryLayout],
};
export default meta;
type Story = StoryObj<typeof CategoryGrid>;

const noHighlight = (cats: typeof ALL_CATEGORIES) =>
  cats.map((c) => ({ category: c, matchedSubs: new Set<string>() }));

/** Full catalog: all categories with section header, no filter active. */
export const FullCatalog: Story = {
  args: {
    categories: noHighlight(ALL_CATEGORIES),
    totalCategoryCount: ALL_CATEGORIES.length,
    isFiltering: false,
  },
};

/** Filtered: showing "N of M" count. */
export const Filtered: Story = {
  args: {
    categories: ALL_CATEGORIES
      .filter((c) => c.label.toLowerCase().includes('java'))
      .map((c) => ({
        category: c,
        matchedSubs: new Set<string>(),
      })),
    totalCategoryCount: ALL_CATEGORIES.length,
    isFiltering: true,
  },
};

/** No results. */
export const NoResults: Story = {
  args: { categories: [], isFiltering: true },
};
