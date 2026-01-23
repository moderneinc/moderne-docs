import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ZoomableImage from './index';

/**
 * MDXComponents/Img - Swizzled Docusaurus MDX image component
 *
 * Custom image component for MDX content with:
 * - Click-to-zoom functionality (via react-medium-image-zoom)
 * - Lazy loading for performance
 * - Async decoding
 * - Custom styling via CSS module
 *
 * Features:
 * - Click any image to zoom in
 * - Click again or press Escape to zoom out
 * - Smooth zoom animation
 * - Overlay backdrop when zoomed
 */
const meta: Meta<typeof ZoomableImage> = {
  title: 'Theme/MDXComponents/Img',
  component: ZoomableImage,
  parameters: {
    docs: {
      description: {
        component:
          'Swizzled Docusaurus MDX image component with click-to-zoom functionality using react-medium-image-zoom.',
      },
    },
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for accessibility',
    },
    title: {
      control: 'text',
      description: 'Image title (shown on hover)',
    },
    width: {
      control: 'text',
      description: 'Image width',
    },
    height: {
      control: 'text',
      description: 'Image height',
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive
 *
 * Interactive zoomable image with controls to adjust all image properties.
 * Use controls to change the src, alt text, title, and dimensions.
 */
export const Interactive: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'Random landscape photo',
    title: 'Click to zoom',
  },
};

/**
 * All Variations
 *
 * Side-by-side comparison of different image sizes and orientations.
 * Useful for visual regression testing.
 */
export const AllVariations: Story = {
  render: () => (
    <div>
      <h3 style={{ color: 'var(--ifm-heading-color)', marginTop: 0 }}>
        Image Size Variations
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '32px',
        }}
      >
        <div>
          <p style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '14px', marginBottom: '8px' }}>
            Small (400x300)
          </p>
          <ZoomableImage
            src="https://picsum.photos/400/300?random=small"
            alt="Small"
            width="400"
            height="300"
          />
        </div>
        <div>
          <p style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '14px', marginBottom: '8px' }}>
            Medium (600x400)
          </p>
          <ZoomableImage
            src="https://picsum.photos/600/400?random=medium"
            alt="Medium"
            width="600"
            height="400"
          />
        </div>
        <div>
          <p style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '14px', marginBottom: '8px' }}>
            Portrait (400x600)
          </p>
          <ZoomableImage
            src="https://picsum.photos/400/600?random=portrait"
            alt="Portrait"
            width="400"
            height="600"
          />
        </div>
      </div>
    </div>
  ),
};
