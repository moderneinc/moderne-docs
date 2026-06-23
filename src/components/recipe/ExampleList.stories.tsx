import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExampleList } from './ExampleList';
import { ExampleList as ProtoExampleList } from './_prototype/ExampleList';
import { Compare, RecipeScope } from './_prototype/Compare';
import { quarkus1to2MigrationContent as content } from './_sampleData/quarkus1to2Migration.data';

/**
 * Examples accordion. Key difference: the prototype owns the section `<h2>` (passed via `title`);
 * production renders no heading — the `## Examples` heading lives in the page markdown (native TOC).
 */
const meta: Meta<typeof ExampleList> = {
  title: 'Recipe/ExampleList',
  component: ExampleList,
  parameters: { layout: 'fullscreen' },
  decorators: [RecipeScope],
};
export default meta;
type Story = StoryObj<typeof ExampleList>;

export const Production: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 820 }}>
      <h2>Examples</h2>
      <ExampleList examples={content.examples} />
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <Compare
      prototype={<ProtoExampleList title="Examples" examples={content.examples} />}
      production={
        <>
          <h2>Examples</h2>
          <ExampleList examples={content.examples} />
        </>
      }
    />
  ),
};
