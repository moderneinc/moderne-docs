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
 * Two Items (Minimal)
 *
 * Simplest category index page with just two items.
 * Shows the basic layout with minimal content.
 */
export const TwoItems: Story = {
  args: {
    title: 'Getting Started',
    description: 'Quick guides to help you get up and running with Moderne.',
    items: [
      {
        href: '/docs/getting-started/installation',
        label: 'Installation',
        description: 'Install Moderne CLI and configure your environment',
        type: 'link',
      },
      {
        href: '/docs/getting-started/quickstart',
        label: 'Quickstart Guide',
        description: 'Run your first recipe in 5 minutes',
        type: 'link',
      },
    ],
  },
};

/**
 * Four Items (Standard)
 *
 * Standard category index page with four items.
 * Most common layout for documentation section landing pages.
 */
export const FourItems: Story = {
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
 * Six Items (Extended)
 *
 * Larger category index page with six items.
 * Tests layout with more content and scrolling behavior.
 */
export const SixItems: Story = {
  args: {
    title: 'Administrator Documentation',
    description:
      'Platform setup, architecture, configuration, and management guides for administrators.',
    items: [
      {
        href: '/docs/admin/platform',
        label: 'Moderne Platform',
        description: 'Enterprise SaaS solution setup and configuration',
        type: 'category',
      },
      {
        href: '/docs/admin/dx',
        label: 'Moderne DX',
        description: 'On-premise deployment architecture and setup',
        type: 'category',
      },
      {
        href: '/docs/admin/cli',
        label: 'CLI Configuration',
        description: 'Command-line interface setup for teams',
        type: 'category',
      },
      {
        href: '/docs/admin/organizations',
        label: 'Organizations',
        description: 'Multi-tenant organization management',
        type: 'category',
      },
      {
        href: '/docs/admin/security',
        label: 'Security & Compliance',
        description: 'Security configuration and compliance guides',
        type: 'category',
      },
      {
        href: '/docs/admin/monitoring',
        label: 'Monitoring & Observability',
        description: 'Metrics, logs, and performance monitoring',
        type: 'category',
      },
    ],
  },
};

/**
 * Many Items (8+ Items)
 *
 * Category index page with many items (8+).
 * Tests layout with extensive content and vertical scrolling.
 */
export const ManyItems: Story = {
  args: {
    title: 'Hands-on Learning',
    description:
      'Interactive workshops, tutorials, and practical exercises to master Moderne.',
    items: [
      {
        href: '/docs/workshops/intro',
        label: 'Introduction to OpenRewrite',
        description: 'Learn the basics of automated code transformation',
        type: 'link',
      },
      {
        href: '/docs/workshops/java-migration',
        label: 'Java Migration Workshop',
        description: 'Migrate Java applications to newer versions',
        type: 'link',
      },
      {
        href: '/docs/workshops/security',
        label: 'Security Remediation',
        description: 'Fix security vulnerabilities at scale',
        type: 'link',
      },
      {
        href: '/docs/workshops/custom-recipes',
        label: 'Writing Custom Recipes',
        description: 'Create your own automated refactoring recipes',
        type: 'link',
      },
      {
        href: '/docs/workshops/dataflow',
        label: 'Data Flow Analysis',
        description: 'Advanced program analysis techniques',
        type: 'link',
      },
      {
        href: '/docs/workshops/taint-analysis',
        label: 'Taint Analysis',
        description: 'Track data flow for security analysis',
        type: 'link',
      },
      {
        href: '/docs/workshops/testing',
        label: 'Testing Recipes',
        description: 'Best practices for testing automated refactorings',
        type: 'link',
      },
      {
        href: '/docs/workshops/ci-cd',
        label: 'CI/CD Integration',
        description: 'Integrate Moderne into your build pipeline',
        type: 'link',
      },
      {
        href: '/docs/workshops/advanced',
        label: 'Advanced Patterns',
        description: 'Complex refactoring patterns and techniques',
        type: 'link',
      },
    ],
  },
};

/**
 * Without Description
 *
 * Category index page without a description.
 * Shows minimal header with just the title.
 */
export const WithoutDescription: Story = {
  args: {
    title: 'Release Notes',
    items: [
      {
        href: '/docs/releases/2024-01',
        label: 'January 2024',
        description: 'New features, improvements, and bug fixes',
        type: 'link',
      },
      {
        href: '/docs/releases/2023-12',
        label: 'December 2023',
        description: 'Holiday release with performance enhancements',
        type: 'link',
      },
      {
        href: '/docs/releases/2023-11',
        label: 'November 2023',
        description: 'Security updates and new recipe support',
        type: 'link',
      },
    ],
  },
};

/**
 * Items Without Descriptions
 *
 * Category index page where individual items lack descriptions.
 * Shows cleaner, more compact layout.
 */
export const ItemsWithoutDescriptions: Story = {
  args: {
    title: 'API Reference',
    description: 'Complete API documentation for Moderne Platform and CLI.',
    items: [
      {
        href: '/docs/api/platform',
        label: 'Platform API',
        type: 'category',
      },
      {
        href: '/docs/api/cli',
        label: 'CLI API',
        type: 'category',
      },
      {
        href: '/docs/api/recipes',
        label: 'Recipe API',
        type: 'category',
      },
      {
        href: '/docs/api/visitors',
        label: 'Visitor API',
        type: 'category',
      },
    ],
  },
};

/**
 * Mixed Descriptions
 *
 * Category index page with some items having descriptions and others without.
 * Tests mixed content layout.
 */
export const MixedDescriptions: Story = {
  args: {
    title: 'Configuration',
    description: 'Configure Moderne for your organization and workflows.',
    items: [
      {
        href: '/docs/config/authentication',
        label: 'Authentication',
        description: 'SSO, SAML, and OAuth configuration',
        type: 'category',
      },
      {
        href: '/docs/config/repositories',
        label: 'Repositories',
        type: 'category',
      },
      {
        href: '/docs/config/organizations',
        label: 'Organizations',
        description: 'Multi-tenant organization setup and management',
        type: 'category',
      },
      {
        href: '/docs/config/agents',
        label: 'Agent Configuration',
        type: 'category',
      },
      {
        href: '/docs/config/recipes',
        label: 'Recipe Sources',
        description: 'Configure custom and private recipe repositories',
        type: 'category',
      },
    ],
  },
};

/**
 * With Pagination
 *
 * Category index page with previous and next links.
 * Shows full page layout with footer pagination.
 */
export const WithPagination: Story = {
  args: {
    title: 'Getting Started',
    description: 'Quick guides to help you get up and running with Moderne.',
    items: [
      {
        href: '/docs/getting-started/installation',
        label: 'Installation',
        description: 'Install Moderne CLI and configure your environment',
        type: 'link',
      },
      {
        href: '/docs/getting-started/quickstart',
        label: 'Quickstart Guide',
        description: 'Run your first recipe in 5 minutes',
        type: 'link',
      },
      {
        href: '/docs/getting-started/concepts',
        label: 'Core Concepts',
        description: 'Understand recipes, LSTs, and visitors',
        type: 'link',
      },
    ],
    previous: {
      title: 'Introduction',
      permalink: '/docs/introduction',
    },
    next: {
      title: 'User Documentation',
      permalink: '/docs/user-documentation',
    },
  },
};

/**
 * With Only Previous Link
 *
 * Category index page with only a previous link (last page in sequence).
 * Tests pagination layout when next is absent.
 */
export const WithOnlyPrevious: Story = {
  args: {
    title: 'Archive',
    description: 'Archived documentation and deprecated features.',
    items: [
      {
        href: '/docs/archive/legacy-cli',
        label: 'Legacy CLI',
        description: 'Documentation for CLI versions 1.x',
        type: 'link',
      },
      {
        href: '/docs/archive/deprecated-recipes',
        label: 'Deprecated Recipes',
        description: 'Recipes that have been superseded or removed',
        type: 'link',
      },
    ],
    previous: {
      title: 'Release Notes',
      permalink: '/docs/releases',
    },
  },
};

/**
 * With Only Next Link
 *
 * Category index page with only a next link (first page in sequence).
 * Tests pagination layout when previous is absent.
 */
export const WithOnlyNext: Story = {
  args: {
    title: 'Introduction',
    description:
      'Welcome to Moderne documentation. Start here to learn about automated code transformation.',
    items: [
      {
        href: '/docs/intro/overview',
        label: 'Overview',
        description: 'What is Moderne and how does it work?',
        type: 'link',
      },
      {
        href: '/docs/intro/benefits',
        label: 'Benefits',
        description: 'Why use automated code transformation?',
        type: 'link',
      },
    ],
    next: {
      title: 'Getting Started',
      permalink: '/docs/getting-started',
    },
  },
};

/**
 * Long Titles and Descriptions
 *
 * Tests how the component handles very long text content.
 * Important for pages with verbose technical descriptions.
 */
export const LongContent: Story = {
  args: {
    title:
      'Advanced OpenRewrite Program Analysis and Control Flow Understanding',
    description:
      'This comprehensive section covers advanced topics in program analysis including control flow graphs, data flow analysis, taint tracking, and security vulnerability detection using OpenRewrite\'s powerful analysis framework and visitor patterns.',
    items: [
      {
        href: '/docs/analysis/control-flow',
        label:
          'Control Flow Analysis: Understanding Program Execution Paths and Branch Conditions',
        description:
          'Learn how to analyze control flow graphs, identify execution paths, detect unreachable code, and understand how your program executes under different conditions using OpenRewrite\'s control flow analysis capabilities.',
        type: 'link',
      },
      {
        href: '/docs/analysis/data-flow',
        label:
          'Data Flow Analysis: Tracking Variables and Values Through Your Codebase',
        description:
          'Master data flow analysis techniques to track how data moves through your application, identify data dependencies, detect potential null pointer exceptions, and understand value propagation across method boundaries.',
        type: 'link',
      },
    ],
  },
};

/**
 * Real-World Example: User Documentation Index
 *
 * Realistic category index based on actual Moderne docs structure.
 * Shows typical top-level section landing page.
 */
export const UserDocumentationExample: Story = {
  args: {
    title: 'User Documentation',
    description:
      'End-user guides for Platform, CLI, and IDE integration covering everything from getting started to advanced workflows.',
    items: [
      {
        href: '/docs/user-documentation/moderne-platform',
        label: 'Moderne Platform',
        description:
          'Web-based platform for enterprise code transformation at scale',
        type: 'category',
        gemIcon: 'gray',
      },
      {
        href: '/docs/user-documentation/moderne-dx',
        label: 'Moderne DX',
        description: 'On-premise deployment solution for air-gapped environments',
        type: 'category',
        gemIcon: 'pink',
      },
      {
        href: '/docs/user-documentation/moderne-cli',
        label: 'Moderne CLI',
        description: 'Command-line interface for local recipe execution',
        type: 'category',
        gemIcon: 'blue',
      },
      {
        href: '/docs/user-documentation/moderne-ide-integration',
        label: 'Moderne IDE Integration',
        description: 'IntelliJ IDEA plugin for in-IDE transformations',
        type: 'category',
        gemIcon: 'green',
      },
    ],
  },
};

/**
 * Real-World Example: Administrator Guides
 *
 * Realistic category index for administrator documentation.
 * Shows technical documentation section with detailed descriptions.
 */
export const AdminDocumentationExample: Story = {
  args: {
    title: 'Administrator Documentation',
    description:
      'Platform setup, architecture, and configuration guides for administrators managing Moderne deployments.',
    items: [
      {
        href: '/docs/administrator-documentation/moderne-platform',
        label: 'Moderne Platform',
        description:
          'Enterprise SaaS solution setup, configuration, and management',
        type: 'category',
      },
      {
        href: '/docs/administrator-documentation/moderne-dx',
        label: 'Moderne DX',
        description: 'On-premise deployment architecture and installation',
        type: 'category',
      },
      {
        href: '/docs/administrator-documentation/moderne-cli',
        label: 'Moderne CLI',
        description: 'CLI configuration for enterprise teams',
        type: 'category',
      },
    ],
  },
};

/**
 * Real-World Example: Hands-on Learning
 *
 * Realistic category index for learning resources.
 * Shows workshop and tutorial section layout.
 */
export const HandsOnLearningExample: Story = {
  args: {
    title: 'Hands-on Learning',
    description:
      'Interactive workshops and tutorials to learn OpenRewrite recipe development and Moderne Platform features.',
    items: [
      {
        href: '/docs/hands-on-learning/workshop-recipe-development',
        label: 'Recipe Development Workshop',
        description:
          'Learn to create custom OpenRewrite recipes for automated code transformation',
        type: 'link',
      },
      {
        href: '/docs/hands-on-learning/workshop-moderne-platform',
        label: 'Moderne Platform Workshop',
        description:
          'Master the Moderne Platform with hands-on exercises and real-world scenarios',
        type: 'link',
      },
      {
        href: '/docs/hands-on-learning/workshop-moderne-cli',
        label: 'Moderne CLI Workshop',
        description: 'Get productive with the Moderne CLI through guided tutorials',
        type: 'link',
      },
    ],
  },
};

/**
 * Dark Mode Showcase
 *
 * Demonstrates category index page styling in dark mode.
 * Toggle dark mode to see the color changes.
 */
export const DarkModeShowcase: Story = {
  args: {
    title: 'Dark Mode Example',
    description:
      'This page demonstrates the category index styling in both light and dark modes. Notice the title, description, and card styling changes.',
    items: [
      {
        href: '/docs/example1',
        label: 'First Item',
        description: 'Example item to showcase dark mode styling',
        type: 'link',
      },
      {
        href: '/docs/example2',
        label: 'Second Item',
        description: 'Another example to demonstrate theme colors',
        type: 'link',
      },
      {
        href: '/docs/example3',
        label: 'Third Item',
        description: 'Final example showing card layout in dark mode',
        type: 'link',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toggle between light and dark modes to see styling changes. In dark mode, the title uses white color, description uses #d4d3e4, and cards maintain proper contrast. All elements use Neo Design system tokens.',
      },
    },
  },
};

/**
 * Responsive Behavior
 *
 * Shows how the category index page adapts to different screen widths.
 * Tests single-column layout consistency across breakpoints.
 */
export const ResponsiveBehavior: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h3
          style={{
            fontSize: '14px',
            marginBottom: '12px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Desktop (1200px)
        </h3>
        <div
          style={{
            width: '1200px',
            border: '1px dashed var(--ifm-color-emphasis-300)',
            padding: '16px',
          }}
        >
          <CategoryPageLayout
            title="User Documentation"
            description="Comprehensive guides for all Moderne products."
            items={[
              {
                href: '/docs/platform',
                label: 'Moderne Platform',
                description: 'Enterprise code transformation platform',
                type: 'category',
              },
              {
                href: '/docs/cli',
                label: 'Moderne CLI',
                description: 'Command-line interface for recipes',
                type: 'category',
              },
            ]}
          />
        </div>
      </div>

      <div>
        <h3
          style={{
            fontSize: '14px',
            marginBottom: '12px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Tablet (768px)
        </h3>
        <div
          style={{
            width: '768px',
            border: '1px dashed var(--ifm-color-emphasis-300)',
            padding: '16px',
          }}
        >
          <CategoryPageLayout
            title="User Documentation"
            description="Comprehensive guides for all Moderne products."
            items={[
              {
                href: '/docs/platform',
                label: 'Moderne Platform',
                description: 'Enterprise code transformation platform',
                type: 'category',
              },
              {
                href: '/docs/cli',
                label: 'Moderne CLI',
                description: 'Command-line interface for recipes',
                type: 'category',
              },
            ]}
          />
        </div>
      </div>

      <div>
        <h3
          style={{
            fontSize: '14px',
            marginBottom: '12px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Mobile (375px)
        </h3>
        <div
          style={{
            width: '375px',
            border: '1px dashed var(--ifm-color-emphasis-300)',
            padding: '16px',
          }}
        >
          <CategoryPageLayout
            title="User Docs"
            description="Guides for Moderne products."
            items={[
              {
                href: '/docs/platform',
                label: 'Platform',
                description: 'Enterprise platform',
                type: 'category',
              },
              {
                href: '/docs/cli',
                label: 'CLI',
                description: 'Command-line tool',
                type: 'category',
              },
            ]}
          />
        </div>
      </div>
    </div>
  ),
};

/**
 * All Variations Grid
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
