import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RecipeList } from './RecipeList';
import { RecipeList as ProtoRecipeList } from './_prototype/RecipeList';
import { Compare } from './_prototype/Compare';
import { commonStaticAnalysisContent as content } from './_sampleData/commonStaticAnalysis.data';

/** Length-adaptive sub-recipe list: inline when ≤15, bounded window + name search when longer. */
const meta: Meta<typeof RecipeList> = {
  title: 'Recipe/RecipeList',
  component: RecipeList,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof RecipeList>;

const short = content.subRecipes.slice(0, 6);
const long = content.subRecipes; // 73 → bounded + search

export const ShortInline: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 760 }}>
      <RecipeList recipes={short} />
    </div>
  ),
};

export const LongBounded: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 760 }}>
      <RecipeList recipes={long} />
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <Compare prototype={<ProtoRecipeList recipes={long} />} production={<RecipeList recipes={long} />} />
  ),
};
