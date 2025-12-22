import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Footer from './index';

/**
 * Footer - Swizzled Docusaurus component
 *
 * Custom footer with:
 * - Social media links (X, LinkedIn, YouTube)
 * - Footer links (Contact, Privacy, Terms, Copyright)
 * - Feedback button with icon
 * - Responsive layout
 * - Dark mode support
 */
const meta: Meta<typeof Footer> = {
  title: 'Theme/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Swizzled Docusaurus Footer component with custom branding and feedback button.',
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
 * Interactive footer component showing all elements.
 * The footer is rendered as-is without controls since it's configuration-driven.
 */
export const Interactive: Story = {
  render: () => <Footer />,
};

/**
 * All Variations
 *
 * Shows the footer in different contexts for visual testing.
 * Toggle dark mode to see color scheme adaptation.
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Default Footer
        </h3>
        <Footer />
      </div>
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          With Different Background
        </h3>
        <div style={{ background: 'var(--ifm-background-surface-color)', padding: '16px' }}>
          <Footer />
        </div>
      </div>
    </div>
  ),
};
