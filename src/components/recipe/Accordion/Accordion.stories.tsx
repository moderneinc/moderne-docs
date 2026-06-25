import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion } from './Accordion';
import { StoryLayout } from '../shared/storyLayout';

/**
 * Shared collapsible primitive. The section's `##` heading is passed as `children` so it renders in
 * one row with the Expand/Collapse-all toggle. On real pages the heading is authored as a markdown
 * `##` node, so it still feeds the native Docusaurus TOC + anchor IDs. When no heading is passed,
 * only the toggle renders.
 */
const meta: Meta<typeof Accordion> = {
  title: 'Recipe/Accordion',
  component: Accordion,
  parameters: { layout: 'fullscreen', maxWidth: 760 },
  decorators: [StoryLayout],
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Production: Story = {
  args: {
    items: [
      { key: 'a', label: 'First item', content: <p>Body of the first item (open by default).</p> },
      { key: 'b', label: 'Second item', content: <p>Body of the second item.</p> },
      { key: 'c', label: 'Third item', content: <p>Body of the third item.</p> },
    ],
    children: <h2>Section heading</h2>,
  },
};
