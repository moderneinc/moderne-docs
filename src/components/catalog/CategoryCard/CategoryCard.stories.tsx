import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CategoryCard } from './CategoryCard';
import { CatalogStoryLayout } from '../shared/storyLayout';
import { ALL_CATEGORIES } from '../shared/sampleData';

const find = (label: string) => {
  const match = ALL_CATEGORIES.find((c) => c.label === label);
  if (!match) throw new Error(`Category "${label}" not found in sample data`);
  return match;
};

/**
 * CategoryCard renders a single category in the catalog grid.
 * Cards scale from a single recipe with no subcategories to 1,799 recipes across 23 subcategories
 * and 5 nesting levels. The stories below cover every structural variant the generator produces.
 */
const meta: Meta<typeof CategoryCard> = {
  title: 'Catalog/CategoryCard',
  tags: ['autodocs'],
  component: CategoryCard,
  parameters: { layout: 'fullscreen', maxWidth: 480 },
  decorators: [CatalogStoryLayout],
};
export default meta;
type Story = StoryObj<typeof CategoryCard>;

/**
 * **Large with deep nesting** — Java has 23 direct subcategories (Spring, Testing, Migrate, etc.)
 * containing 1,799 total recipes across up to 5 levels of nesting. The card shows the top 5
 * subcategories with recipe counts, then "+N more" for the rest.
 */
export const LargeDeepNesting: Story = {
  args: { category: find('Java') },
};

/**
 * **Multiple subcategories, one level** — Apache has 8 subcategories (Commons, Camel, HttpClient, etc.)
 * all at a single depth. No "+N more" chip because all 8 fit within the default limit.
 * Has a description line from the generator.
 */
export const MultipleSubcatsOneLevel: Story = {
  args: { category: find('Apache') },
};

/**
 * **Mostly direct recipes** — Static analysis has 178 recipes at the top level with only 2 tiny
 * subcategories. The card emphasizes the recipe count; the subcategory chips are minimal.
 * Has both a description and composite recipes.
 */
export const MostlyDirectRecipes: Story = {
  args: { category: find('Static analysis and remediation') },
};

/**
 * **Single subcategory chain** — Picnic has 1,105 recipes but they're all nested behind a single
 * path: Picnic → Error Prone → Refaster Rules. The card shows just one subcategory chip.
 * This tests that the card doesn't look broken with a high count but minimal chips.
 */
export const SingleSubcategoryChain: Story = {
  args: { category: find('Picnic') },
};

/**
 * **Recipes only, no subcategories** — Android has 29 recipes with no subcategory nesting at all.
 * The card shows only the label, description, and recipe count — no subcategory chips.
 */
export const RecipesOnlyNoSubcats: Story = {
  args: { category: find('Android') },
};

/**
 * **Minimal — single recipe** — Vulncheck has exactly 1 recipe, no subcategories, and no
 * description from the generator. This is the smallest possible card.
 */
export const MinimalSingleRecipe: Story = {
  args: { category: find('Vulncheck') },
};

/**
 * **No description** — Core has 20 recipes but the generator didn't produce a description
 * line for it. The card renders without the description paragraph — the gap between the
 * title row and subcategory chips (or lack thereof) should still look balanced.
 */
export const NoDescription: Story = {
  args: { category: find('Core') },
};

/**
 * **Filter highlight** — Simulates what happens when a user filters by "spring" and the Java card
 * surfaces via subcategory match. The "spring" and "testing" subcategory chips get a blue outline
 * to show the user which subcategories matched their filter.
 */
export const FilterHighlight: Story = {
  args: {
    category: find('Java'),
    highlightedSubs: new Set(['spring', 'testing']),
  },
};

/**
 * **Large count formatting** — Kotlin has 1,046 recipes, displayed as "1k recipes" using
 * shorthand formatting. Verifies the count doesn't wrap or overflow.
 */
export const LargeCountFormatting: Story = {
  args: { category: find('Kotlin') },
};
