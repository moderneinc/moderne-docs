import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import NeoBreadcrumbs from '@site/src/components/NeoBreadcrumbs';

/**
 * BreadcrumbsLayout Component
 *
 * Internal component that renders the breadcrumbs layout for Storybook.
 * This is extracted to avoid Docusaurus hook dependencies.
 * The actual DocBreadcrumbs component uses useSidebarBreadcrumbs() hook.
 */
function BreadcrumbsLayout({
  items,
  showHomeIcon = true,
}: {
  items: Array<{ label: string; href?: string }>;
  showHomeIcon?: boolean;
}): JSX.Element {
  return <NeoBreadcrumbs items={items} showHomeIcon={showHomeIcon} />;
}

/**
 * DocBreadcrumbs - Swizzled Docusaurus component
 *
 * Custom breadcrumb navigation component for documentation pages with:
 * - Home icon with link to homepage
 * - Hierarchical path display
 * - Current page highlighting (digital green in dark mode, blue in light mode)
 * - Dark mode support with Neo Design system integration
 * - Chevron separators between items
 * - Responsive text handling
 * - Accessible navigation with ARIA labels
 *
 * Features:
 * - Integrates with Docusaurus sidebar structure
 * - Last item is always the current page (no link)
 * - Structured data for SEO (via StructuredData component)
 * - Consistent with Neo Design typography and color tokens
 * - Optional home icon display
 */
const meta: Meta<typeof BreadcrumbsLayout> = {
  title: 'Theme/DocBreadcrumbs',
  component: BreadcrumbsLayout,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Swizzled Docusaurus DocBreadcrumbs component with Neo Design styling and contextual navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of breadcrumb items with label and optional href',
      control: 'object',
    },
    showHomeIcon: {
      description: 'Whether to show the home icon at the beginning',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive
 *
 * Interactive breadcrumb with controls to adjust items and home icon visibility.
 * Use controls to modify the breadcrumb path and toggle the home icon.
 */
export const Interactive: Story = {
  args: {
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Getting Started' },
    ],
    showHomeIcon: true,
  },
};

/**
 * All Variations
 *
 * Shows multiple breadcrumb variations together for comparison.
 * Useful for visual regression testing and design review.
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--ifm-color-emphasis-600)' }}>
          Two Levels
        </h3>
        <BreadcrumbsLayout
          items={[
            { label: 'Documentation', href: '/docs' },
            { label: 'Getting Started' },
          ]}
          showHomeIcon={true}
        />
      </div>

      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--ifm-color-emphasis-600)' }}>
          Three Levels
        </h3>
        <BreadcrumbsLayout
          items={[
            { label: 'User Documentation', href: '/docs/user' },
            { label: 'Moderne CLI', href: '/docs/user/cli' },
            { label: 'Installation' },
          ]}
          showHomeIcon={true}
        />
      </div>

      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--ifm-color-emphasis-600)' }}>
          Four Levels
        </h3>
        <BreadcrumbsLayout
          items={[
            { label: 'Administrator Documentation', href: '/docs/admin' },
            { label: 'Moderne Platform', href: '/docs/admin/platform' },
            { label: 'Configuration', href: '/docs/admin/platform/config' },
            { label: 'Organizations' },
          ]}
          showHomeIcon={true}
        />
      </div>

      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--ifm-color-emphasis-600)' }}>
          Deep Hierarchy (5+ Levels)
        </h3>
        <BreadcrumbsLayout
          items={[
            { label: 'Documentation', href: '/docs' },
            { label: 'Administrator Documentation', href: '/docs/admin' },
            { label: 'Platform', href: '/docs/admin/platform' },
            { label: 'Configuration', href: '/docs/admin/platform/config' },
            { label: 'Organizations', href: '/docs/admin/platform/config/orgs' },
            { label: 'Settings' },
          ]}
          showHomeIcon={true}
        />
      </div>

      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--ifm-color-emphasis-600)' }}>
          Without Home Icon
        </h3>
        <BreadcrumbsLayout
          items={[
            { label: 'User Documentation', href: '/docs/user' },
            { label: 'IDE Integration', href: '/docs/user/ide' },
            { label: 'IntelliJ IDEA' },
          ]}
          showHomeIcon={false}
        />
      </div>

      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--ifm-color-emphasis-600)' }}>
          Long Labels
        </h3>
        <BreadcrumbsLayout
          items={[
            {
              label: 'Advanced Program Analysis and Control Flow',
              href: '/docs/analysis',
            },
            {
              label: 'Comprehensive Guide to Data Flow and Taint Analysis',
              href: '/docs/analysis/dataflow',
            },
            { label: 'Implementation Examples and Best Practices' },
          ]}
          showHomeIcon={true}
        />
      </div>
    </div>
  ),
};
