import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RecipeList } from './RecipeList';
import { StoryLayout } from '../shared/storyLayout';
import { commonStaticAnalysisContent as content } from '../shared/sampleData/commonStaticAnalysis.data';

/** Length-adaptive sub-recipe list: inline when ≤15, bounded window + name search when longer. */
const meta: Meta<typeof RecipeList> = {
  title: 'Recipe/RecipeList',
  component: RecipeList,
  parameters: { layout: 'fullscreen', maxWidth: 760 },
  decorators: [StoryLayout],
};
export default meta;
type Story = StoryObj<typeof RecipeList>;

const singleton = { name: 'Singleton', href: '/user-documentation/recipes/recipe-catalog/core/singleton' };
const morePreconditions = [
  singleton,
  { name: 'Find missing types', href: '#' },
  { name: 'Has Java version 17+', href: '#' },
];

export const ShortInline: Story = {
  args: { recipes: content.subRecipes.slice(0, 6), preconditions: [singleton], children: <h2>Definition</h2> },
};

export const LongBounded: Story = {
  args: { recipes: content.subRecipes, preconditions: morePreconditions, children: <h2>Definition</h2> }, // 73 → bounded + search
};

/** No preconditions — the chips row simply doesn't render (the common case). */
export const NoPreconditions: Story = {
  args: { recipes: content.subRecipes.slice(0, 6), children: <h2>Definition</h2> },
};
