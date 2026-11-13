import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HeroSection } from '@site/src/pages/index';

/**
 * HeroSection - Homepage hero section
 *
 * The main hero section featuring:
 * - Large display headline
 * - Descriptive lede
 * - Primary "Get started" and secondary "What is Moderne?" buttons
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
          'Hero section at the top of the homepage with the headline, lede, two call-to-action buttons, and the screenshot collage.',
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
