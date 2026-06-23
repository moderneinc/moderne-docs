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

export const ShortInline: Story = {
  args: { recipes: content.subRecipes.slice(0, 6), children: <h2>Definition</h2> },
};

export const LongBounded: Story = {
  args: { recipes: content.subRecipes, children: <h2>Definition</h2> }, // 73 → bounded + search
};
