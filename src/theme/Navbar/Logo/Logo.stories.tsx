import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import LogoWrapper from './index';

/**
 * Navbar Logo - Swizzled Docusaurus component
 *
 * Renders the Moderne "Documentation" lockup, linked to the site root.
 *
 * Both the light and dark lockups are always in the DOM and toggled via
 * [data-theme] in CSS rather than swapped in JS, so the logo does not flash on
 * hydration. Toggle Storybook's theme to see the dark treatment.
 */
const meta: Meta<typeof LogoWrapper> = {
  title: 'Theme/Navbar/Logo',
  component: LogoWrapper,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Swizzled Docusaurus Navbar Logo component rendering the Moderne "Documentation" lockup.',
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
 * The lockup as it appears in the navbar.
 */
export const Default: Story = {
  render: () => (
    <div
      style={{
        background: 'var(--ifm-navbar-background-color)',
        borderBottom: '1px solid var(--ifm-color-border)',
        padding: '0 var(--ifm-navbar-padding-horizontal)',
      }}
    >
      <LogoWrapper />
    </div>
  ),
};

/**
 * On different surfaces
 *
 * The lockup over the navbar background and over a card surface.
 * Toggle dark mode to see the light/dark lockups swap.
 */
export const OnDifferentSurfaces: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Navbar background
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
          Card surface
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
