import type { Meta, StoryObj } from '@storybook/react';
import { RecipeHeader } from './RecipeHeader';
import { StoryLayout } from '../shared/storyLayout';
import { SAMPLE } from './RecipeHeader.fixtures';

/** Header band for a recipe page: access badge, title, recipe-id/artifact chips, description, tags, CTAs. */
const meta: Meta<typeof RecipeHeader> = {
  title: 'Recipe/RecipeHeader',
  component: RecipeHeader,
  parameters: { layout: 'fullscreen', maxWidth: 820 },
  decorators: [StoryLayout],
};
export default meta;
type Story = StoryObj<typeof RecipeHeader>;

/** The production header on its own. */
export const Production: Story = {
  args: { ...SAMPLE },
};

/** Moderne-only (proprietary) recipe — shows the access badge + info popover. */
export const ProductionModerneOnly: Story = {
  args: { ...SAMPLE, moderneOnly: true },
};
