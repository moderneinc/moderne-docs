import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

/**
 * CardLayout Component
 *
 * Internal component that renders the visual card layout.
 * This is extracted to avoid Docusaurus hook dependencies in Storybook.
 */
function CardLayout({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description?: string;
}): JSX.Element {
  return (
    <Link
      href={href}
      className={clsx("card", styles.cardContainer)}
    >
      <div className={styles.cardContent}>
        <Heading
          as="h2"
          className={clsx(styles.cardTitle, 'doc-card-title')}
          title={title}
        >
          {title}
        </Heading>
        {description && (
          <p
            className={clsx(styles.cardDescription)}
            title={description}
          >
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}

/**
 * DocCard - Swizzled Docusaurus component
 *
 * Custom card component for displaying links to docs pages and categories with:
 * - Category cards (show item count or custom description)
 * - Link cards (show document description)
 * - Dark mode support
 * - Hover effects with background color transitions
 * - Responsive layout
 */
const meta: Meta<typeof CardLayout> = {
  title: 'Theme/DocCard',
  component: CardLayout,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Swizzled Docusaurus DocCard component with Neo Design styling.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px', width: '100%' }}>
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
 * Interactive card with controls to adjust title, description, and href.
 * Use controls to modify the card content and test different configurations.
 */
export const Interactive: Story = {
  args: {
    href: '/docs/getting-started',
    title: 'Getting Started',
    description: 'Learn how to get started with Moderne Platform and CLI',
  },
};

/**
 * All Variations
 *
 * Shows cards with different content lengths and states.
 * Useful for visual regression testing and design review.
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Standard Card
        </h3>
        <CardLayout
          href="/docs/getting-started"
          title="Getting Started"
          description="Learn how to get started with Moderne Platform and CLI"
        />
      </div>
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Long Title and Description
        </h3>
        <CardLayout
          href="/docs/analysis"
          title="Advanced OpenRewrite Program Analysis and Control Flow Understanding"
          description="This comprehensive guide covers advanced topics in program analysis including control flow graphs, data flow analysis, taint tracking, and security vulnerability detection using OpenRewrite's powerful analysis framework."
        />
      </div>
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Short Title and Description
        </h3>
        <CardLayout
          href="/docs/cli"
          title="CLI"
          description="Command-line interface guide"
        />
      </div>
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Without Description
        </h3>
        <CardLayout
          href="/docs/api"
          title="API Reference"
        />
      </div>
    </div>
  ),
};
