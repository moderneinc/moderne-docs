import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { UsageList } from './UsageList';
import { UsageList as ProtoUsageList } from './UsageList.prototype';
import { Compare, RecipeScope } from '../shared/Compare';
import { replaceDuplicateStringLiteralsContent as content } from '../shared/sampleData/replaceDuplicateStringLiterals.data';

/**
 * Usage accordion wrapping `RunRecipe` (mocked in Storybook). Production renders no section heading
 * (markdown owns `## Usage`); the prototype owns the `<h2>` via `title`.
 */
const meta: Meta<typeof UsageList> = {
  title: 'Recipe/UsageList',
  component: UsageList,
  parameters: { layout: 'fullscreen' },
  decorators: [RecipeScope],
};
export default meta;
type Story = StoryObj<typeof UsageList>;

export const Production: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 820 }}>
      <h2>Usage</h2>
      <UsageList usage={content.usage} />
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <Compare
      prototype={<ProtoUsageList title="Usage" usage={content.usage} />}
      production={
        <>
          <h2>Usage</h2>
          <UsageList usage={content.usage} />
        </>
      }
    />
  ),
};
