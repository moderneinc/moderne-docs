import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FrostedGlassCard } from './index';

/**
 * FrostedGlassCard - Reusable frosted glass card component
 *
 * A versatile card component with:
 * - Frosted glass background effect
 * - Backdrop blur for depth
 * - Consistent border styling (#8d99ff)
 * - 20px border radius
 * - Dark mode support
 * - Flexible content area
 */
const meta: Meta<typeof FrostedGlassCard> = {
  title: 'Components/FrostedGlassCard',
  component: FrostedGlassCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable card component with frosted glass effect and backdrop blur, used throughout the homepage for consistent styling.',
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
 * Shows the basic frosted glass card with sample content.
 */
export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '600px', padding: '40px', background: '#f7f7fe' }}>
      <FrostedGlassCard>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Card Title</h3>
        <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.4 }}>
          This is a frosted glass card with a backdrop blur effect. It can contain any content
          and automatically handles dark mode styling.
        </p>
      </FrostedGlassCard>
    </div>
  ),
};

/**
 * With Image and Text
 *
 * Demonstrates a card with image and text content side by side.
 */
export const WithImageAndText: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px', padding: '40px', background: '#f7f7fe' }}>
      <FrostedGlassCard>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>What is Moderne?</h3>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <div
            style={{
              width: '264px',
              height: '150px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '12px',
              flexShrink: 0,
            }}
          />
          <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.4, flex: 1 }}>
            With Moderne, you can fix security vulnerabilities, standardize code quality, and
            automate maintenance processes such as framework migrations.
          </p>
        </div>
      </FrostedGlassCard>
    </div>
  ),
};

/**
 * With Multiple Images
 *
 * Shows a card with text and multiple images.
 */
export const WithMultipleImages: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px', padding: '40px', background: '#f7f7fe' }}>
      <FrostedGlassCard>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>The Moderne Platform</h3>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.4, flex: 1 }}>
            The Moderne Platform is an enterprise-ready, private Software as a Service solution
            that provides automated code remediation at scale.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexShrink: 0 }}>
            <div
              style={{
                width: '267px',
                height: '150px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '12px',
              }}
            />
            <div
              style={{
                width: '267px',
                height: '150px',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                borderRadius: '12px',
              }}
            />
          </div>
        </div>
      </FrostedGlassCard>
    </div>
  ),
};

/**
 * Dark Mode
 *
 * Preview of how the card looks in dark mode with visible transparency effect.
 */
export const DarkMode: Story = {
  render: () => (
    <div
      data-theme="dark"
      style={{
        maxWidth: '600px',
        padding: '40px',
        background: 'linear-gradient(135deg, #041834 0%, #1a2f4a 100%)',
        minHeight: '300px',
      }}
    >
      <FrostedGlassCard>
        <h3
          style={{
            margin: 0,
            fontSize: '16px',
            fontWeight: 600,
            color: 'white',
          }}
        >
          Dark Mode Card
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: '18px',
            lineHeight: 1.4,
            color: 'white',
          }}
        >
          The frosted glass card automatically adapts to dark mode with adjusted background
          colors and border styling. The transparency and blur effects are visible against
          gradient backgrounds.
        </p>
      </FrostedGlassCard>
    </div>
  ),
};
