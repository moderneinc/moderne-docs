import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { OptionsTable } from './OptionsTable';
import { StoryLayout } from '../shared/storyLayout';
import { replaceDuplicateStringLiteralsContent as content } from '../shared/sampleData/replaceDuplicateStringLiterals.data';

/**
 * Options table. The `## Options` heading is passed as children and a metrics row (parameter count +
 * required/optional tally) sits on the right of the heading.
 */
const meta: Meta<typeof OptionsTable> = {
  title: 'Recipe/OptionsTable',
  component: OptionsTable,
  parameters: { layout: 'fullscreen', maxWidth: 920 },
  decorators: [StoryLayout],
};
export default meta;
type Story = StoryObj<typeof OptionsTable>;

export const Production: Story = {
  args: { options: content.options, children: <h2>Options</h2> },
};
