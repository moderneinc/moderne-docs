import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProductPill, PRODUCTS } from '@site/src/pages/index';

/**
 * ProductPill - Homepage product navigation pill
 *
 * A pill-shaped link component that displays:
 * - Gem icon specific to each product
 * - Product label
 * - Glassmorphism styling with backdrop blur
 * - Hover animation
 * - Dark mode support
 */
const meta: Meta<typeof ProductPill> = {
  title: 'Pages/Home/ProductPill',
  component: ProductPill,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Interactive pill component used in the homepage product navigation. Features glassmorphism design and gem icons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    product: {
      description: 'Product configuration object with label, icon, href, and gemIcon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * All Products
 *
 * Displays all product pills in a horizontal layout.
 */
export const AllProducts: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      {PRODUCTS.map((product) => (
        <ProductPill key={product.label} product={product} />
      ))}
    </div>
  ),
};

/**
 * Platform
 *
 * Platform product pill with red gem icon.
 */
export const Platform: Story = {
  args: {
    product: PRODUCTS[0], // Platform
  },
};

/**
 * DX
 *
 * DX product pill with pink gem icon.
 */
export const DX: Story = {
  args: {
    product: PRODUCTS[1], // DX
  },
};

/**
 * CLI
 *
 * CLI product pill with blue gem icon.
 */
export const CLI: Story = {
  args: {
    product: PRODUCTS[2], // CLI
  },
};

/**
 * Moddy
 *
 * Moddy product pill with green gem icon.
 */
export const Moddy: Story = {
  args: {
    product: PRODUCTS[3], // Moddy
  },
};

/**
 * Recipes
 *
 * Recipes product pill with yellow gem icon (external link).
 */
export const Recipes: Story = {
  args: {
    product: PRODUCTS[4], // Recipes
  },
};
