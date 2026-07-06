import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RecipeResultCard } from './RecipeResultCard';
import { CatalogStoryLayout } from '../shared/storyLayout';
import { SAMPLE_RECIPES } from '../shared/recipeResults';

const meta: Meta<typeof RecipeResultCard> = {
  title: 'Catalog/RecipeResultCard',
  tags: ['autodocs'],
  component: RecipeResultCard,
  parameters: { layout: 'fullscreen', maxWidth: 640 },
  decorators: [CatalogStoryLayout],
};
export default meta;
type Story = StoryObj<typeof RecipeResultCard>;

/** Card variant: used in filter results. Has border, description, and full padding. */
export const CardVariant: Story = {
  args: { recipe: SAMPLE_RECIPES[0], variant: 'card' },
};

/** Strip variant: used in Popular Recipes. No border, no description, compact. */
export const StripVariant: Story = {
  args: { recipe: SAMPLE_RECIPES[0], variant: 'strip' },
};

/** All recipes as cards (filter results). */
export const AllCards: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {SAMPLE_RECIPES.map((r) => (
        <RecipeResultCard key={r.fqName} recipe={r} variant="card" />
      ))}
    </div>
  ),
};

/** All recipes as strips (popular section). */
export const AllStrips: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {SAMPLE_RECIPES.slice(0, 8).map((r) => (
        <RecipeResultCard key={r.fqName} recipe={r} variant="strip" />
      ))}
    </div>
  ),
};
