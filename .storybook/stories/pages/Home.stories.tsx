import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Home from '@site/src/pages/index';

/**
 * Homepage - Custom Docusaurus homepage
 *
 * The homepage features:
 * - Hero section with headline and CTA
 * - Product navigation pills (Platform, DX, CLI, Moddy, Recipes)
 * - Resource cards (Code Remix, Learning Resources)
 * - Decorative gem elements
 * - Responsive layout with dark mode support
 */
const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The main homepage for Moderne documentation featuring hero section, product navigation, and resource cards.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Homepage
 *
 * Shows the complete homepage as it appears to visitors.
 * Includes hero section, product pills, and resource cards.
 */
export const Default: Story = {
  render: () => <Home />,
};
