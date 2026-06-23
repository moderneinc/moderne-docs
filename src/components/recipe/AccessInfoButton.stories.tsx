import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AccessInfoButton } from './AccessInfoButton';
import { AccessInfoButton as ProtoAccessInfoButton } from './_prototype/AccessInfoButton';
import { Compare, RecipeScope } from './_prototype/Compare';

/**
 * Moderne-only info icon + hover/focus popover. Production is a verbatim port of the prototype.
 * Hover (or tab to) the info icon to reveal the popover.
 */
const meta: Meta<typeof AccessInfoButton> = {
  title: 'Recipe/AccessInfoButton',
  component: AccessInfoButton,
  parameters: { layout: 'fullscreen' },
  decorators: [RecipeScope],
};
export default meta;
type Story = StoryObj<typeof AccessInfoButton>;

export const Production: Story = {
  render: () => (
    <div style={{ padding: 60 }}>
      <AccessInfoButton />
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <Compare
      prototype={<div style={{ padding: 40 }}><ProtoAccessInfoButton /></div>}
      production={<div style={{ padding: 40 }}><AccessInfoButton /></div>}
    />
  ),
};
