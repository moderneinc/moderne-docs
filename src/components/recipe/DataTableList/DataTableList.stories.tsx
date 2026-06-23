import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DataTableList } from './DataTableList';
import { DataTableList as ProtoDataTableList } from './DataTableList.prototype';
import { Compare, RecipeScope } from '../shared/Compare';
import { replaceDuplicateStringLiteralsContent as content } from '../shared/sampleData/replaceDuplicateStringLiterals.data';

/**
 * Data tables accordion. Production uses the shared `CopyButton` and renders no section heading
 * (markdown owns `## Data tables`); the prototype owns the `<h2>` via `title` and an inline copy button.
 */
const meta: Meta<typeof DataTableList> = {
  title: 'Recipe/DataTableList',
  component: DataTableList,
  parameters: { layout: 'fullscreen' },
  decorators: [RecipeScope],
};
export default meta;
type Story = StoryObj<typeof DataTableList>;

export const Production: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 820 }}>
      <h2>Data tables</h2>
      <DataTableList tables={content.dataTables} />
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <Compare
      prototype={<ProtoDataTableList title="Data tables" tables={content.dataTables} />}
      production={
        <>
          <h2>Data tables</h2>
          <DataTableList tables={content.dataTables} />
        </>
      }
    />
  ),
};
