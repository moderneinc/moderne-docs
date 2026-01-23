import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProductNavigation } from '@site/src/pages/index';

/**
 * ProductNavigation - Homepage product navigation section
 *
 * Displays product pills in a horizontal, wrapping layout:
 * - Platform (red gem)
 * - DX (pink gem)
 * - CLI (blue gem)
 * - Moddy (green gem)
 * - Recipes (yellow gem)
 *
 * Features:
 * - Flex layout with wrapping
 * - Responsive design (stacks on mobile)
 * - Glassmorphism design
 * - Hover animations
 * - Dark mode support
 */
const meta: Meta<typeof ProductNavigation> = {
  title: 'Pages/Home/ProductNavigation',
  component: ProductNavigation,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Navigation section that displays all Moderne product pills in a horizontal, wrapping layout.',
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
 * Shows all product pills as they appear on the homepage.
 */
export const Default: Story = {
  render: () => <ProductNavigation />,
};
