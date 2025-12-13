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
 * Default Card
 *
 * Shows a standard card with title and description.
 */
export const Default: Story = {
  args: {
    href: '/docs/getting-started',
    title: 'Getting Started',
    description: 'Learn how to get started with Moderne Platform and CLI',
  },
};
