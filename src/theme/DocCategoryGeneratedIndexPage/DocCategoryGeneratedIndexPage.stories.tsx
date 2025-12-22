import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

/**
 * CategoryPageLayout Component
 *
 * Internal component that renders the visual category index page layout.
 * This is extracted to avoid Docusaurus hook dependencies in Storybook
 * (useCurrentSidebarCategory).
 *
 * Simulates the structure of DocCategoryGeneratedIndexPage with:
 * - Page title and optional description
 * - Card list with gem icons (hidden via CSS on generated index pages)
 * - Optional pagination footer
 */
function CategoryPageLayout({
  title,
  description,
  items,
  previous,
  next,
}: {
  title: string;
  description?: string;
  items: Array<{
    href: string;
    label: string;
    description?: string;
    type: 'link' | 'category';
    gemIcon?: string;
  }>;
  previous?: { title: string; permalink: string };
  next?: { title: string; permalink: string };
}): JSX.Element {
  return (
    <div className={styles.generatedIndexPage}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Heading as="h1" className={styles.title}>
            {title}
          </Heading>
          {description && <p>{description}</p>}
        </header>
        <article>
          <div className={styles.list}>
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={clsx('card', 'padding--lg')}
                style={{ textDecoration: 'none' }}
              >
                <Heading as="h2" className="doc-card-title">
                  {item.label}
                </Heading>
                {item.description && <p>{item.description}</p>}
              </Link>
            ))}
          </div>
        </article>
        {(previous || next) && (
          <footer>
            <nav
              className={clsx('pagination-nav')}
              aria-label="Docs pages"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              {previous && (
                <Link
                  to={previous.permalink}
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--ifm-color-emphasis-700)',
                    textDecoration: 'none',
                  }}
                >
                  ← {previous.title}
                </Link>
              )}
              {next && (
                <Link
                  to={next.permalink}
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--ifm-color-emphasis-700)',
                    textDecoration: 'none',
                    marginLeft: 'auto',
                  }}
                >
                  {next.title} →
                </Link>
              )}
            </nav>
          </footer>
        )}
      </div>
    </div>
  );
}

/**
 * DocCategoryGeneratedIndexPage - Swizzled Docusaurus component
 *
 * Custom category index page component for documentation sections with:
 * - Category title and description (matching Figma design node 478:5567)
 * - Full-width card list with single-column layout
 * - Cards display title and optional description
 * - Gem icons are hidden on auto-generated category index pages via CSS
 * - 32px vertical spacing between sections (header, cards, paginator)
 * - 8px gap within header group (title + description)
 * - Dark mode support with Neo Design system integration
 * - Optional previous/next pagination
 *
 * Features:
 * - Typography: H3/21px Medium for title, 14px Regular for description
 * - Single-column card list (not grid) for better readability
 * - Consistent spacing using Neo Design tokens
 * - Accessible with semantic HTML structure
 * - Integrates with Docusaurus sidebar structure
 *
 * Design notes:
 * - This component intentionally hides gem icons (.cardIcon display: none)
 * - Cards are full-width without icon decoration for cleaner look
 * - Layout uses flexbox with gap for consistent spacing
 */
const meta: Meta<typeof CategoryPageLayout> = {
  title: 'Theme/DocCategoryGeneratedIndexPage',
  component: CategoryPageLayout,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Swizzled Docusaurus DocCategoryGeneratedIndexPage component with Neo Design styling for category index pages.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px', width: '100%' }}>
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
 * Interactive category index page with controls to adjust title, description, and items.
 * Use controls to modify the page content and test different configurations.
 */
export const Interactive: Story = {
  args: {
    title: 'User Documentation',
    description:
      'Comprehensive guides for using Moderne Platform, CLI, and IDE integrations.',
    items: [
      {
        href: '/docs/user/platform',
        label: 'Moderne Platform',
        description: 'Web-based platform for enterprise code transformation',
        type: 'category',
      },
      {
        href: '/docs/user/cli',
        label: 'Moderne CLI',
        description: 'Command-line interface for running recipes locally',
        type: 'category',
      },
      {
        href: '/docs/user/dx',
        label: 'Moderne DX',
        description: 'On-premise deployment solution',
        type: 'category',
      },
      {
        href: '/docs/user/ide',
        label: 'IDE Integration',
        description: 'IntelliJ IDEA plugin for code transformation',
        type: 'category',
      },
    ],
  },
};

/**
 * All Variations
 *
 * Shows multiple category index page variations together for comparison.
 * Useful for visual regression testing and design review.
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div>
        <h3
          style={{
            fontSize: '14px',
            marginBottom: '12px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Two Items (Minimal)
        </h3>
        <CategoryPageLayout
          title="Getting Started"
          description="Quick guides to get you started."
          items={[
            {
              href: '/docs/install',
              label: 'Installation',
              description: 'Install and configure',
              type: 'link',
            },
            {
              href: '/docs/quickstart',
              label: 'Quickstart',
              description: 'Run your first recipe',
              type: 'link',
            },
          ]}
        />
      </div>

      <div>
        <h3
          style={{
            fontSize: '14px',
            marginBottom: '12px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Four Items (Standard)
        </h3>
        <CategoryPageLayout
          title="User Documentation"
          description="Comprehensive user guides."
          items={[
            {
              href: '/docs/platform',
              label: 'Platform',
              description: 'Web platform',
              type: 'category',
            },
            {
              href: '/docs/cli',
              label: 'CLI',
              description: 'Command-line tool',
              type: 'category',
            },
            {
              href: '/docs/dx',
              label: 'DX',
              description: 'On-premise solution',
              type: 'category',
            },
            {
              href: '/docs/ide',
              label: 'IDE',
              description: 'IntelliJ plugin',
              type: 'category',
            },
          ]}
        />
      </div>

      <div>
        <h3
          style={{
            fontSize: '14px',
            marginBottom: '12px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Without Description
        </h3>
        <CategoryPageLayout
          title="Release Notes"
          items={[
            {
              href: '/docs/2024-01',
              label: 'January 2024',
              description: 'New features and fixes',
              type: 'link',
            },
            {
              href: '/docs/2023-12',
              label: 'December 2023',
              description: 'Holiday release',
              type: 'link',
            },
          ]}
        />
      </div>

      <div>
        <h3
          style={{
            fontSize: '14px',
            marginBottom: '12px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          With Pagination
        </h3>
        <CategoryPageLayout
          title="Configuration"
          description="Configure Moderne for your needs."
          items={[
            {
              href: '/docs/auth',
              label: 'Authentication',
              description: 'SSO and OAuth setup',
              type: 'category',
            },
            {
              href: '/docs/repos',
              label: 'Repositories',
              description: 'Connect your repos',
              type: 'category',
            },
          ]}
          previous={{
            title: 'Getting Started',
            permalink: '/docs/getting-started',
          }}
          next={{
            title: 'Advanced Topics',
            permalink: '/docs/advanced',
          }}
        />
      </div>
    </div>
  ),
};
