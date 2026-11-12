import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Home from '@site/src/pages/index';

/**
 * Homepage - Custom Docusaurus homepage
 *
 * The homepage features:
 * - Hero section with headline and CTAs
 * - "Browse by area" tiles derived from the sidebar config
 * - "What is Moderne?" band with inline video cards
 * - "More about Moderne" product grid
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
          'The main homepage for Moderne documentation: hero with screenshot collage, "Browse by area" tiles, the "What is Moderne?" band with video cards, and the "More about Moderne" grid.',
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
 * Includes the hero, product tiles, video band, and product grid.
 */
export const Default: Story = {
  render: () => <Home />,
};
