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
 * Interactive
 *
 * Interactive logo with MegaMenu integration.
 * Click the chevron to open the menu and see the logo spin animation.
 */
export const Interactive: Story = {
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

/**
 * All Variations
 *
 * Shows the logo in different contexts and states.
 * Toggle dark mode to see color scheme adaptation.
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Default State (Closed MegaMenu)
        </h3>
        <div
          style={{
            background: 'var(--ifm-navbar-background-color)',
            borderBottom: '1px solid var(--ifm-color-border)',
            padding: '16px',
          }}
        >
          <LogoWrapper />
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          With Different Background
        </h3>
        <div
          style={{
            background: 'var(--ifm-background-surface-color)',
            borderBottom: '1px solid var(--ifm-color-border)',
            padding: '16px',
          }}
        >
          <LogoWrapper />
        </div>
      </div>
    </div>
  ),
};
