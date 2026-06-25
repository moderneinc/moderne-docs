import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExampleList } from './ExampleList';
import { StoryLayout } from '../shared/storyLayout';
import { quarkus1to2MigrationContent as content } from '../shared/sampleData/quarkus1to2Migration.data';

/**
 * Examples accordion. The `## Examples` heading is passed as `children` so it renders in the accordion
 * header row with the toggle, and (being a real markdown heading on a page) still feeds the native TOC.
 */
const meta: Meta<typeof ExampleList> = {
  title: 'Recipe/ExampleList',
  component: ExampleList,
  parameters: { layout: 'fullscreen', maxWidth: 820 },
  decorators: [StoryLayout],
};
export default meta;
type Story = StoryObj<typeof ExampleList>;

export const Production: Story = {
  args: { examples: content.examples, children: <h2>Examples</h2> },
};
