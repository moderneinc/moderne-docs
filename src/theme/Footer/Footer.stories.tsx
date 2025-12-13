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
 * Default Footer
 *
 * Shows the complete footer as it appears at the bottom of every page.
 */
export const Default: Story = {
  render: () => <Footer />,
};
