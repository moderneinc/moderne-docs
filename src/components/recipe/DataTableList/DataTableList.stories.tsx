import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DataTableList } from './DataTableList';
import { StoryLayout } from '../shared/storyLayout';
import { replaceDuplicateStringLiteralsContent as content } from '../shared/sampleData/replaceDuplicateStringLiterals.data';

/**
 * Data tables accordion using the shared `CopyButton`. The `## Data tables` heading is passed as
 * children so it renders in the accordion header row.
 */
const meta: Meta<typeof DataTableList> = {
  title: 'Recipe/DataTableList',
  component: DataTableList,
  parameters: { layout: 'fullscreen', maxWidth: 820 },
  decorators: [StoryLayout],
};
export default meta;
type Story = StoryObj<typeof DataTableList>;

export const Production: Story = {
  args: { tables: content.dataTables, children: <h2>Data tables</h2> },
};
