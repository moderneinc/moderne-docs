import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ResourceSection } from '@site/src/pages/index';

/**
 * ResourceSection - Homepage resource cards section
 *
 * Container section that displays two resource cards side by side:
 * - Code Remix card (YouTube, Past sessions)
 * - Learning Resources card (Plugin, Hands-on Learning, Releases)
 *
 * Features:
 * - Flex layout with equal width cards
 * - Responsive layout (stacks on mobile)
 * - Glassmorphism design
 * - Dark mode support
 */
const meta: Meta<typeof ResourceSection> = {
  title: 'Pages/Home/ResourceSection',
  component: ResourceSection,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Container section that displays resource cards for Code Remix and Learning Resources in a horizontal layout.',
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
 * Shows both resource cards side by side as they appear on the homepage.
 */
export const Default: Story = {
  render: () => <ResourceSection />,
};
