import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion } from './Accordion';
import { Accordion as ProtoAccordion } from './Accordion.prototype';
import { Compare, RecipeScope } from '../shared/Compare';

/**
 * Shared collapsible primitive. The core adaptation: the prototype renders its own section `<h2>`
 * (via `title`); production renders only the toggle + rows so the `##` heading can live in markdown
 * and feed the native Docusaurus TOC.
 */
const meta: Meta<typeof Accordion> = {
  title: 'Recipe/Accordion',
  component: Accordion,
  parameters: { layout: 'fullscreen' },
  decorators: [RecipeScope],
};
export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  { key: 'a', label: 'First item', content: <p>Body of the first item (open by default).</p> },
  { key: 'b', label: 'Second item', content: <p>Body of the second item.</p> },
  { key: 'c', label: 'Third item', content: <p>Body of the third item.</p> },
];

export const Production: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 760 }}>
      <h2>Section heading (markdown)</h2>
      <Accordion items={items} />
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <Compare
      prototype={<ProtoAccordion title="Section heading" items={items} />}
      production={
        <>
          <h2>Section heading (markdown)</h2>
          <Accordion items={items} />
        </>
      }
    />
  ),
};
