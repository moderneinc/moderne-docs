import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LearningResourcesCard } from '@site/src/pages/index';

/**
 * LearningResourcesCard - Learning guides resource card
 *
 * A resource card displaying learning guides with:
 * - "Guides" title
 * - Three resource links (Plugin, Hands-on Learning, Releases)
 * - Book icons for each link
 * - Glassmorphism styling with backdrop blur
 * - Link icons with hover effects
 * - Dark mode support
 */
const meta: Meta<typeof LearningResourcesCard> = {
  title: 'Pages/Home/LearningResourcesCard',
  component: LearningResourcesCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Resource card component that provides links to key learning resources including plugin documentation, tutorials, and releases.',
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
 * Shows the Learning Resources card as it appears on the homepage.
 */
export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <LearningResourcesCard />
    </div>
  ),
};
