import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { MarkdownToggle, type MarkdownView } from './MarkdownToggle';
import { StoryLayout } from '../shared/storyLayout';

/** Page-level rendered ⇄ raw toggle (top-right corner of the recipe page). */
const meta: Meta<typeof MarkdownToggle> = {
  title: 'Recipe/MarkdownToggle',
  component: MarkdownToggle,
  parameters: { layout: 'fullscreen', maxWidth: 420 },
  decorators: [StoryLayout],
};
export default meta;
type Story = StoryObj<typeof MarkdownToggle>;

export const Production: Story = {
  render: () => {
    const [view, setView] = useState<MarkdownView>('rendered');
    return <MarkdownToggle value={view} onChange={setView} />;
  },
};
