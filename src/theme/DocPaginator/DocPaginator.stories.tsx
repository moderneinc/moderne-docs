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
 * Both Links Present (Default)
 *
 * Most common scenario showing both Previous and Next links.
 * This is the typical pagination state for middle pages in documentation.
 */
export const BothLinks: Story = {
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
 * Only Previous Link (Last Page)
 *
 * Shows pagination when on the last page of a section.
 * Next link is absent, and Previous link appears on the left.
 */
export const OnlyPrevious: Story = {
  args: {
    previous: {
      title: 'Troubleshooting',
      permalink: '/docs/troubleshooting',
    },
  },
};

/**
 * Only Next Link (First Page)
 *
 * Shows pagination when on the first page of a section.
 * Previous link is absent, and Next link appears on the right.
 */
export const OnlyNext: Story = {
  args: {
    next: {
      title: 'Getting Started',
      permalink: '/docs/getting-started',
    },
  },
};

/**
 * Long Page Titles
 *
 * Tests how the component handles very long page titles.
 * Important for technical documentation with verbose titles.
 * Both links have long titles to demonstrate layout behavior.
 */
export const LongTitles: Story = {
  args: {
    previous: {
      title: 'Advanced Configuration Options for Enterprise Deployments and Multi-Tenant Environments',
      permalink: '/docs/admin/config/advanced',
    },
    next: {
      title: 'Understanding the Complete Guide to Data Flow and Taint Analysis in OpenRewrite',
      permalink: '/docs/analysis/dataflow/complete-guide',
    },
  },
};

/**
 * Short Page Titles
 *
 * Shows pagination with minimal, concise page titles.
 * Demonstrates clean layout with short text.
 */
export const ShortTitles: Story = {
  args: {
    previous: {
      title: 'Intro',
      permalink: '/docs/intro',
    },
    next: {
      title: 'Setup',
      permalink: '/docs/setup',
    },
  },
};

/**
 * Real-World Example: User Documentation
 *
 * Realistic pagination from the User Documentation section.
 * Shows typical navigation between user guide pages.
 */
export const UserDocumentation: Story = {
  args: {
    previous: {
      title: 'How to Install the Moderne CLI',
      permalink: '/docs/user-documentation/moderne-cli/how-to-guides/cli-intro',
    },
    next: {
      title: 'Running Your First Recipe',
      permalink: '/docs/user-documentation/moderne-cli/getting-started/running-your-first-recipe',
    },
  },
};

/**
 * Real-World Example: Administrator Guides
 *
 * Realistic pagination from the Administrator Documentation section.
 * Shows navigation between configuration and setup pages.
 */
export const AdminDocumentation: Story = {
  args: {
    previous: {
      title: 'Configuring Organizations',
      permalink: '/docs/administrator-documentation/moderne-platform/how-to-guides/organizations',
    },
    next: {
      title: 'Agent Configuration',
      permalink: '/docs/administrator-documentation/moderne-platform/how-to-guides/agent-configuration',
    },
  },
};

/**
 * Real-World Example: Advanced Analysis
 *
 * Realistic pagination from the OpenRewrite Advanced Program Analysis section.
 * Shows navigation between technical analysis topics.
 */
export const AnalysisDocumentation: Story = {
  args: {
    previous: {
      title: 'Control Flow Analysis',
      permalink: '/docs/openrewrite-advanced-program-analysis/control-flow',
    },
    next: {
      title: 'Data Flow Analysis',
      permalink: '/docs/openrewrite-advanced-program-analysis/data-flow',
    },
  },
};

/**
 * Dark Mode Showcase
 *
 * Demonstrates paginator styling in both light and dark modes.
 * View this story and toggle dark mode to see the color changes.
 * Light mode uses Grey-500, dark mode uses Grey-400 for better visibility.
 */
export const DarkModeShowcase: Story = {
  args: {
    previous: {
      title: 'Previous Page',
      permalink: '/docs/previous',
    },
    next: {
      title: 'Next Page',
      permalink: '/docs/next',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toggle between light and dark modes to see the paginator styling changes. In dark mode, links use Grey-400 for better visibility. In light mode, links use Grey-500. Hover effects show opacity transition to 0.7.',
      },
    },
  },
};

/**
 * Responsive Behavior
 *
 * Shows how pagination adapts to different screen widths.
 * On narrow screens, long titles may wrap or require horizontal scrolling.
 */
export const ResponsiveBehavior: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Desktop (800px)
        </h3>
        <div style={{ width: '800px', border: '1px dashed var(--ifm-color-emphasis-300)', padding: '16px' }}>
          <PaginatorLayout
            previous={{
              title: 'Getting Started with Moderne Platform',
              permalink: '/docs/getting-started',
            }}
            next={{
              title: 'Advanced Configuration Options',
              permalink: '/docs/config',
            }}
          />
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Tablet (600px)
        </h3>
        <div style={{ width: '600px', border: '1px dashed var(--ifm-color-emphasis-300)', padding: '16px' }}>
          <PaginatorLayout
            previous={{
              title: 'Getting Started with Moderne Platform',
              permalink: '/docs/getting-started',
            }}
            next={{
              title: 'Advanced Configuration Options',
              permalink: '/docs/config',
            }}
          />
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Mobile (400px)
        </h3>
        <div style={{ width: '400px', border: '1px dashed var(--ifm-color-emphasis-300)', padding: '16px' }}>
          <PaginatorLayout
            previous={{
              title: 'Getting Started',
              permalink: '/docs/getting-started',
            }}
            next={{
              title: 'Configuration',
              permalink: '/docs/config',
            }}
          />
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Small Mobile (320px) - Long Titles
        </h3>
        <div style={{ width: '320px', border: '1px dashed var(--ifm-color-emphasis-300)', padding: '16px' }}>
          <PaginatorLayout
            previous={{
              title: 'Advanced Configuration Options for Enterprise',
              permalink: '/docs/getting-started',
            }}
            next={{
              title: 'Understanding Data Flow Analysis Concepts',
              permalink: '/docs/config',
            }}
          />
        </div>
      </div>
    </div>
  ),
};

/**
 * All Scenarios Grid
 *
 * Shows all pagination scenarios together for comparison.
 * Useful for visual regression testing and design review.
 */
export const AllScenarios: Story = {
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

/**
 * Edge Case: Single Very Long Title Previous
 *
 * Tests layout with one extremely long title on the left side.
 */
export const EdgeCaseLongPrevious: Story = {
  args: {
    previous: {
      title: 'This is an extremely long page title that tests how the pagination component handles text wrapping and layout when only the previous link contains very lengthy content that might span multiple lines',
      permalink: '/docs/long-title-page',
    },
    next: {
      title: 'Next',
      permalink: '/docs/next',
    },
  },
};

/**
 * Edge Case: Single Very Long Title Next
 *
 * Tests layout with one extremely long title on the right side.
 */
export const EdgeCaseLongNext: Story = {
  args: {
    previous: {
      title: 'Previous',
      permalink: '/docs/previous',
    },
    next: {
      title: 'This is an extremely long page title that tests how the pagination component handles text wrapping and layout when only the next link contains very lengthy content that might span multiple lines',
      permalink: '/docs/long-title-page',
    },
  },
};
