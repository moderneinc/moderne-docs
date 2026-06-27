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

/**
 * Compound API: title and description are passed as children so the generated MDX can author them as
 * markdown (code spans, links). On real pages MDX renders the markdown; here we pass the equivalent JSX.
 */
export const CompoundChildren: Story = {
  args: { ...SAMPLE, displayName: undefined, description: undefined },
  render: (args) => (
    <RecipeHeader {...args}>
      <RecipeHeader.Title>
        Replace <code>BigDecimal</code> rounding constants with <code>RoundingMode</code> enums
      </RecipeHeader.Title>
      <RecipeHeader.Description>
        Install a CircleCI <a href="https://circleci.com/docs/2.0/orb-intro/">orb</a> if it is not already
        installed. Uses <code>RoundingMode</code> under the hood.
      </RecipeHeader.Description>
    </RecipeHeader>
  ),
};
