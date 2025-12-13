import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CodeRemixCard } from '@site/src/pages/index';

/**
 * CodeRemixCard - Code Remix resource card
 *
 * A resource card promoting Code Remix with:
 * - Header with Code Remix logo
 * - Two resource links (YouTube, Past sessions)
 * - Glassmorphism styling with backdrop blur
 * - Link icons with hover effects
 * - Dark mode support
 */
const meta: Meta<typeof CodeRemixCard> = {
  title: 'Pages/Home/CodeRemixCard',
  component: CodeRemixCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Resource card component that promotes Code Remix educational content with links to YouTube and past sessions.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default
 *
 * Shows the Code Remix card as it appears on the homepage.
 */
export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <CodeRemixCard />
    </div>
  ),
};
