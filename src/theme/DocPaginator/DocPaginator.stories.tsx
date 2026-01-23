import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * PaginatorLayout Component
 *
 * Internal component that renders the visual paginator layout.
 * This is extracted to avoid Docusaurus hook dependencies in Storybook.
 */
function PaginatorLayout({
  previous,
  next,
}: {
  previous?: { title: string; permalink: string };
  next?: { title: string; permalink: string };
}): JSX.Element {
  return (
    <nav
      className={clsx(styles.paginationNav, 'pagination-nav')}
      aria-label="Docs pages">
      {previous && (
        <Link
          className={clsx(styles.paginationLink, styles.paginationLinkPrev)}
          to={previous.permalink}>
          <span className={styles.arrow}>←</span> {previous.title}
        </Link>
      )}
      {next && (
        <Link
          className={clsx(styles.paginationLink, styles.paginationLinkNext)}
          to={next.permalink}>
          {next.title} <span className={styles.arrow}>→</span>
        </Link>
      )}
    </nav>
  );
}

/**
 * DocPaginator - Swizzled Docusaurus component
 *
 * Custom pagination navigation component for documentation pages with:
 * - Previous/Next page links with inline arrows
 * - Simple text-only design (no backgrounds or borders)
 * - Typography: Inter Medium, 14px (Misc/button style from Figma)
 * - Color: Grey-500 in light mode, Grey-400 in dark mode
 * - Hover effect: Opacity transition to 0.7
 * - Responsive layout with justify-between spacing
 * - Accessible with proper ARIA labels
 *
 * Features:
 * - Handles three scenarios: both links, only previous, only next
 * - Text truncation for very long page titles
 * - Dark mode support with Neo Design system integration
 * - Consistent with Figma design spec (node-id=752:3329, 752:3330, 752:3331)
 */
const meta: Meta<typeof PaginatorLayout> = {
  title: 'Theme/DocPaginator',
  component: PaginatorLayout,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Swizzled Docusaurus DocPaginator component with Neo Design styling for previous/next page navigation.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px', width: '100%' }}>
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
 * Interactive paginator with controls to adjust previous and next page links.
 * Use controls to modify page titles and permalinks.
 */
export const Interactive: Story = {
  args: {
    previous: {
      title: 'Installation',
      permalink: '/docs/installation',
    },
    next: {
      title: 'Configuration',
      permalink: '/docs/configuration',
    },
  },
};

/**
 * All Variations
 *
 * Shows all pagination variations together for comparison.
 * Useful for visual regression testing and design review.
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Both Links (Middle Page)
        </h3>
        <PaginatorLayout
          previous={{
            title: 'Installation',
            permalink: '/docs/installation',
          }}
          next={{
            title: 'Configuration',
            permalink: '/docs/configuration',
          }}
        />
      </div>

      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Only Previous Link (Last Page)
        </h3>
        <PaginatorLayout
          previous={{
            title: 'Troubleshooting',
            permalink: '/docs/troubleshooting',
          }}
        />
      </div>

      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Only Next Link (First Page)
        </h3>
        <PaginatorLayout
          next={{
            title: 'Getting Started',
            permalink: '/docs/getting-started',
          }}
        />
      </div>

      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Long Titles
        </h3>
        <PaginatorLayout
          previous={{
            title: 'Advanced Configuration Options for Enterprise Deployments and Multi-Tenant Environments',
            permalink: '/docs/admin/config/advanced',
          }}
          next={{
            title: 'Understanding the Complete Guide to Data Flow and Taint Analysis in OpenRewrite',
            permalink: '/docs/analysis/dataflow/complete-guide',
          }}
        />
      </div>

      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Short Titles
        </h3>
        <PaginatorLayout
          previous={{
            title: 'Intro',
            permalink: '/docs/intro',
          }}
          next={{
            title: 'Setup',
            permalink: '/docs/setup',
          }}
        />
      </div>
    </div>
  ),
};
