import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { UsageList } from './UsageList';
import { StoryLayout } from '../shared/storyLayout';
import { replaceDuplicateStringLiteralsContent as content } from '../shared/sampleData/replaceDuplicateStringLiterals.data';

/**
 * Usage accordion wrapping `RunRecipe` (mocked in Storybook). The `## Usage` heading is passed as
 * children so it renders in the accordion header row.
 */
const meta: Meta<typeof UsageList> = {
  title: 'Recipe/UsageList',
  component: UsageList,
  parameters: { layout: 'fullscreen', maxWidth: 820 },
  decorators: [StoryLayout],
};
export default meta;
type Story = StoryObj<typeof UsageList>;

export const Production: Story = {
  args: { usage: content.usage, children: <h2>Usage</h2> },
};
