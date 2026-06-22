import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DataTableList } from './DataTableList';
import { DataTableList as ProtoDataTableList } from './_prototype/DataTableList';
import { Compare } from './_prototype/Compare';
import { replaceDuplicateStringLiteralsContent as content } from './_sampleData/replaceDuplicateStringLiterals.data';

/**
 * Data tables accordion. Production uses the shared `CopyButton` and renders no section heading
 * (markdown owns `## Data tables`); the prototype owns the `<h2>` via `title` and an inline copy button.
 */
const meta: Meta<typeof DataTableList> = {
  title: 'Recipe/DataTableList',
  component: DataTableList,
  parameters: { layout: 'fullscreen' },
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
