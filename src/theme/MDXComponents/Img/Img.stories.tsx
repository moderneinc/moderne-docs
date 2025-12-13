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
 * Default Zoomable Image
 *
 * Standard image with click-to-zoom functionality.
 * Click the image to zoom in and see the full detail.
 */
export const Default: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'Random landscape photo',
    title: 'Click to zoom',
  },
};

/**
 * Small Image
 *
 * Demonstrates zoom functionality with a smaller image.
 * Useful for thumbnails or inline images in documentation.
 */
export const SmallImage: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Small example image',
    title: 'Small image with zoom',
    width: '400',
    height: '300',
  },
};

/**
 * Large Image
 *
 * Full-width image that demonstrates zoom on large content.
 * Tests zoom behavior with images that fill the container.
 */
export const LargeImage: Story = {
  args: {
    src: 'https://picsum.photos/1200/800',
    alt: 'Large landscape photo',
    title: 'Large image - click to zoom',
  },
};

/**
 * Portrait Image
 *
 * Demonstrates zoom with a portrait-oriented image.
 * Tests vertical aspect ratio handling.
 */
export const PortraitImage: Story = {
  args: {
    src: 'https://picsum.photos/600/900',
    alt: 'Portrait orientation photo',
    title: 'Portrait image',
    width: '600',
    height: '900',
  },
};

/**
 * With Custom Styling
 *
 * Image with additional CSS classes.
 * Demonstrates that custom styling is preserved through the component.
 */
export const WithCustomStyling: Story = {
  args: {
    src: 'https://picsum.photos/700/500',
    alt: 'Styled image',
    title: 'Image with border and shadow',
    className: 'custom-image-class',
  },
  render: (args) => (
    <div>
      <style>{`
        .custom-image-class {
          border: 4px solid var(--ifm-color-primary);
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      <ZoomableImage {...args} />
    </div>
  ),
};

/**
 * Multiple Images
 *
 * Shows multiple zoomable images in a grid.
 * Each image can be zoomed independently.
 */
export const MultipleImages: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
      }}
    >
      <ZoomableImage
        src="https://picsum.photos/400/300?random=1"
        alt="Image 1"
        title="Click to zoom"
      />
      <ZoomableImage
        src="https://picsum.photos/400/300?random=2"
        alt="Image 2"
        title="Click to zoom"
      />
      <ZoomableImage
        src="https://picsum.photos/400/300?random=3"
        alt="Image 3"
        title="Click to zoom"
      />
      <ZoomableImage
        src="https://picsum.photos/400/300?random=4"
        alt="Image 4"
        title="Click to zoom"
      />
    </div>
  ),
};

/**
 * Dark Mode Support
 *
 * Toggle between light and dark modes to see the zoom overlay adapt.
 * The react-medium-image-zoom library automatically adapts to the theme.
 */
export const DarkModeSupport: Story = {
  args: {
    src: 'https://picsum.photos/800/600?random=dark',
    alt: 'Dark mode test image',
    title: 'Toggle theme to see zoom overlay adaptation',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toggle between light and dark modes using the theme switcher in the Storybook toolbar. The zoom overlay will adapt to the current theme automatically.',
      },
    },
  },
};

/**
 * Screenshot Example
 *
 * Realistic example using a documentation screenshot.
 * Demonstrates typical usage in documentation pages.
 */
export const ScreenshotExample: Story = {
  render: () => (
    <div>
      <p
        style={{
          color: 'var(--ifm-color-emphasis-600)',
          marginBottom: '16px',
        }}
      >
        Below is a screenshot from the Moderne Platform. Click to zoom and see
        the details.
      </p>
      <ZoomableImage
        src="https://picsum.photos/1000/700?random=screenshot"
        alt="Moderne Platform screenshot"
        title="Click to see full resolution"
      />
      <p
        style={{
          color: 'var(--ifm-color-emphasis-600)',
          marginTop: '16px',
          fontSize: '14px',
        }}
      >
        All documentation images are zoomable for better readability.
      </p>
    </div>
  ),
};

/**
 * With Caption
 *
 * Image with caption text, as commonly used in documentation.
 * Tests integration with surrounding text content.
 */
export const WithCaption: Story = {
  render: () => (
    <figure style={{ margin: 0 }}>
      <ZoomableImage
        src="https://picsum.photos/800/500?random=caption"
        alt="Example diagram"
        title="Click to zoom"
      />
      <figcaption
        style={{
          marginTop: '8px',
          fontSize: '14px',
          fontStyle: 'italic',
          color: 'var(--ifm-color-emphasis-600)',
          textAlign: 'center',
        }}
      >
        Figure 1: Example architecture diagram showing component relationships
      </figcaption>
    </figure>
  ),
};

/**
 * Inline in Text
 *
 * Small image placed inline with text content.
 * Demonstrates that zoom works even for inline images.
 */
export const InlineInText: Story = {
  render: () => (
    <div style={{ lineHeight: '1.8' }}>
      <p style={{ color: 'var(--ifm-color-emphasis-800)' }}>
        Documentation text with an inline image{' '}
        <ZoomableImage
          src="https://picsum.photos/100/100?random=inline"
          alt="Inline icon"
          title="Click to zoom"
          style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 4px' }}
        />{' '}
        that can be zoomed. This is useful for showing small UI elements or
        icons within the documentation flow.
      </p>
    </div>
  ),
};

/**
 * All Variations Grid
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
