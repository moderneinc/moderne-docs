import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HeroSection } from '@site/src/pages/index';

/**
 * HeroSection - Homepage hero section
 *
 * The main hero section featuring:
 * - Two-line heading with brand colors
 * - Descriptive subheading
 * - Primary CTA button with icon
 * - Responsive typography
 * - Dark mode support
 */
const meta: Meta<typeof HeroSection> = {
  title: 'Pages/Home/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Hero section that appears at the top of the homepage with heading, subheading, and call-to-action button.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Hero
 *
 * Shows the complete hero section as it appears on the homepage.
 */
export const Default: Story = {
  render: () => <HeroSection />,
};
