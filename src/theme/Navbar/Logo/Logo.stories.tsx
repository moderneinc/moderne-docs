import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import LogoWrapper from './index';

/**
 * Navbar Logo - Swizzled Docusaurus component
 *
 * Custom logo with:
 * - Moderne symbol (with spin animation on click)
 * - Moderne wordmark
 * - "Docs" text label
 * - Chevron dropdown button
 * - Integrated MegaMenu
 * - Dark mode support
 *
 * Features:
 * - Click chevron to open/close mega menu
 * - Logo spins on menu toggle
 * - Click outside or press Escape to close menu
 */
const meta: Meta<typeof LogoWrapper> = {
  title: 'Theme/Navbar/Logo',
  component: LogoWrapper,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Swizzled Docusaurus Navbar Logo component with MegaMenu integration and spin animation.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive Logo with MegaMenu
 *
 * Shows the complete logo implementation with MegaMenu.
 * Click the chevron to open the menu.
 */
export const Default: Story = {
  render: () => (
    <div style={{ position: 'relative', minHeight: '800px' }}>
      <div
        style={{
          background: 'var(--ifm-navbar-background-color)',
          borderBottom: '1px solid var(--ifm-color-border)',
          padding: '0 var(--ifm-navbar-padding-horizontal)',
        }}
      >
        <LogoWrapper />
      </div>
      <div style={{ padding: '20px' }}>
        <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          Click the chevron next to "Docs" to open the MegaMenu.
        </p>
        <ul style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          <li>Click chevron → menu opens, logo spins</li>
          <li>Click outside or press Escape → menu closes</li>
          <li>Click chevron again → menu closes</li>
        </ul>
      </div>
    </div>
  ),
};
