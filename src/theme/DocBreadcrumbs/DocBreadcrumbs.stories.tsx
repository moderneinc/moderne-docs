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
 * Two-Level Breadcrumb
 *
 * Simplest breadcrumb with just a parent and current page.
 * Common pattern for top-level documentation pages.
 */
export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Getting Started' },
    ],
    showHomeIcon: true,
  },
};

/**
 * Three-Level Breadcrumb
 *
 * Standard breadcrumb depth for most documentation pages.
 * Shows section → subsection → current page hierarchy.
 */
export const ThreeLevels: Story = {
  args: {
    items: [
      { label: 'User Documentation', href: '/docs/user' },
      { label: 'Moderne CLI', href: '/docs/user/cli' },
      { label: 'Installation' },
    ],
    showHomeIcon: true,
  },
};

/**
 * Four-Level Breadcrumb
 *
 * Deeper navigation hierarchy showing multiple subsections.
 * Tests layout with four breadcrumb items.
 */
export const FourLevels: Story = {
  args: {
    items: [
      { label: 'Administrator Documentation', href: '/docs/admin' },
      { label: 'Moderne Platform', href: '/docs/admin/platform' },
      { label: 'Configuration', href: '/docs/admin/platform/config' },
      { label: 'Organizations' },
    ],
    showHomeIcon: true,
  },
};

/**
 * Deep Breadcrumb (5+ Levels)
 *
 * Very deep navigation hierarchy with many levels.
 * Tests layout with extended breadcrumb chains and overflow behavior.
 */
export const DeepHierarchy: Story = {
  args: {
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Administrator Documentation', href: '/docs/admin' },
      { label: 'Moderne Platform', href: '/docs/admin/platform' },
      { label: 'Configuration', href: '/docs/admin/platform/config' },
      { label: 'Organizations', href: '/docs/admin/platform/config/orgs' },
      { label: 'Settings', href: '/docs/admin/platform/config/orgs/settings' },
      { label: 'Advanced Options' },
    ],
    showHomeIcon: true,
  },
};

/**
 * Without Home Icon
 *
 * Breadcrumbs without the home icon, showing only the text path.
 * Less common but useful for certain navigation contexts.
 */
export const WithoutHomeIcon: Story = {
  args: {
    items: [
      { label: 'User Documentation', href: '/docs/user' },
      { label: 'IDE Integration', href: '/docs/user/ide' },
      { label: 'IntelliJ IDEA' },
    ],
    showHomeIcon: false,
  },
};

/**
 * Single Item (Current Page Only)
 *
 * Minimal breadcrumb showing only home icon and current page.
 * Typical for top-level pages like /introduction.
 */
export const SingleItem: Story = {
  args: {
    items: [{ label: 'Introduction' }],
    showHomeIcon: true,
  },
};

/**
 * Long Breadcrumb Labels
 *
 * Tests how breadcrumbs handle very long text labels.
 * Important for pages with verbose titles or deep technical paths.
 */
export const LongLabels: Story = {
  args: {
    items: [
      {
        label: 'Advanced Program Analysis and Control Flow',
        href: '/docs/analysis',
      },
      {
        label: 'Comprehensive Guide to Data Flow and Taint Analysis',
        href: '/docs/analysis/dataflow',
      },
      {
        label: 'Implementation Examples and Best Practices for Security',
      },
    ],
    showHomeIcon: true,
  },
};

/**
 * Real-World Example: User Guide Path
 *
 * Realistic breadcrumb from actual documentation structure.
 * Shows typical user documentation navigation pattern.
 */
export const UserGuidePath: Story = {
  args: {
    items: [
      { label: 'User Documentation', href: '/docs/user-documentation' },
      { label: 'Moderne Platform', href: '/docs/user-documentation/moderne-platform' },
      { label: 'Getting Started', href: '/docs/user-documentation/moderne-platform/getting-started' },
      { label: 'How to Create Visualizations' },
    ],
    showHomeIcon: true,
  },
};

/**
 * Real-World Example: Admin Configuration Path
 *
 * Realistic breadcrumb from administrator documentation.
 * Demonstrates deep configuration hierarchy navigation.
 */
export const AdminConfigPath: Story = {
  args: {
    items: [
      { label: 'Administrator Documentation', href: '/docs/administrator-documentation' },
      { label: 'Moderne Platform', href: '/docs/administrator-documentation/moderne-platform' },
      { label: 'How-to Guides', href: '/docs/administrator-documentation/moderne-platform/how-to-guides' },
      { label: 'Agent Configuration', href: '/docs/administrator-documentation/moderne-platform/how-to-guides/agent-configuration' },
      { label: 'Strict Recipe Sources' },
    ],
    showHomeIcon: true,
  },
};

/**
 * Real-World Example: OpenRewrite Analysis
 *
 * Realistic breadcrumb from advanced analysis documentation.
 * Shows technical documentation navigation pattern.
 */
export const AnalysisPath: Story = {
  args: {
    items: [
      { label: 'OpenRewrite Program Analysis', href: '/docs/openrewrite-advanced-program-analysis' },
      { label: 'Control Flow', href: '/docs/openrewrite-advanced-program-analysis/control-flow' },
      { label: 'Finding Calls in Control Flow' },
    ],
    showHomeIcon: true,
  },
};

/**
 * Dark Mode Showcase
 *
 * Demonstrates breadcrumb styling in dark mode with digital green current page.
 * View this story and toggle dark mode to see the color changes.
 */
export const DarkModeShowcase: Story = {
  args: {
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'User Guide', href: '/docs/user-guide' },
      { label: 'Current Page (Digital Green in Dark Mode)' },
    ],
    showHomeIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toggle between light and dark modes to see the breadcrumb styling changes. In dark mode, the current page is highlighted in digital green (#85fe98), while links and icons use grey-400. In light mode, links and current page use blue-500.',
      },
    },
  },
};

/**
 * All Variations Grid
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
