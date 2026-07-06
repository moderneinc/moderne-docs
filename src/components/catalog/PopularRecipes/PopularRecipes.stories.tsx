import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PopularRecipes } from './PopularRecipes';
import { CatalogStoryLayout } from '../shared/storyLayout';
import { POPULAR_RECIPES } from '../shared/recipeResults';

/**
 * ## Popular recipes
 *
 * Curated section at the top of the catalog landing page — direct links to
 * high-value recipes, skipping category navigation entirely.
 *
 * ### How to maintain
 *
 * The list is a static array of 6 recipes. Pick them using Google Analytics
 * pageview data for the recipe catalog (top pages by traffic over the last 90 days),
 * combined with product judgment — some recipes are strategically important even if
 * they aren't the most visited (e.g. a newly launched migration recipe you want to
 * promote). Review and update quarterly. No automation needed for a 6-item list.
 *
 * GA data could also inform the **sort order of categories** on the landing page grid,
 * putting the most-visited categories at the top instead of alphabetical.
 *
 * ### Why this is custom
 *
 * Docusaurus has no concept of featured or curated content. This is a thin component
 * (a heading + a list of links). Could alternatively be a static MDX block on the
 * catalog page if a React component feels like overkill.
 */
const meta: Meta<typeof PopularRecipes> = {
  title: 'Catalog/PopularRecipes',
  tags: ['autodocs'],
  component: PopularRecipes,
  parameters: { layout: 'fullscreen', maxWidth: 1080 },
  decorators: [CatalogStoryLayout],
};
export default meta;
type Story = StoryObj<typeof PopularRecipes>;

/** 6 curated popular recipes in a 2-column strip layout. */
export const Default: Story = {
  args: { recipes: POPULAR_RECIPES },
};
