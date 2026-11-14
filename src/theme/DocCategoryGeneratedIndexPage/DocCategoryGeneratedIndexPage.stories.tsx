import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

interface PageItem {
  href: string;
  label: string;
  description?: string;
  /** Shown in place of a description when the item has none. */
  meta?: string;
}

interface SectionItem {
  href: string;
  label: string;
  description?: string;
  items: PageItem[];
}

const COMPACT_THRESHOLD = 8;

const PREVIEW_COUNT = 4;

const LABEL_TAG = /\s*\[([^\]]+)\]\s*$/;

const pluralize = (count: number) => (count === 1 ? '1 item' : `${count} items`);

function splitLabelTag(label: string): { title: string; tag?: string } {
  const match = LABEL_TAG.exec(label);
  if (!match) {
    return { title: label };
  }
  const raw = match[1].trim();
  return {
    title: label.slice(0, match.index).trim(),
    tag: raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase(),
  };
}

function splitLastWord(title: string): { lead: string; last: string } {
  const index = title.trimEnd().lastIndexOf(' ');
  if (index < 0) {
    return { lead: '', last: title };
  }
  return { lead: title.slice(0, index + 1), last: title.slice(index + 1) };
}

function renderDescription(text: string): React.ReactNode {
  const parts = text.split(/(`[^`]+`)/);
  return parts.map((part, index) =>
    part.startsWith('`') && part.endsWith('`') && part.length > 1 ? (
      <code key={index} className={styles.itemCode}>
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    ),
  );
}

function ItemGrid({ items, compact }: { items: PageItem[]; compact: boolean }): JSX.Element {
  return (
    <ul className={clsx(styles.grid, compact && styles.gridCompact)}>
      {items.map((item, index) => {
        const { title, tag } = splitLabelTag(item.label);
        const { lead, last } = splitLastWord(title);
        return (
          <li key={index} className={styles.gridItem}>
            <Link
              href={item.href}
              className={clsx(styles.item, compact && styles.itemCompact)}
              title={compact && item.description ? item.description.replace(/`/g, '') : undefined}
            >
              <Heading as="h3" className={styles.itemTitle}>
                <span className={styles.itemName}>
                  {lead}
                  <span className={styles.itemTail}>
                    {last}
                    {tag && <span className={styles.itemTag}>{tag}</span>}
                    <span className={styles.itemArrow} aria-hidden="true">→</span>
                  </span>
                </span>
              </Heading>
              {item.description ? (
                <p className={styles.itemDescription}>{renderDescription(item.description)}</p>
              ) : (
                item.meta && (
                  <p className={clsx(styles.itemDescription, styles.itemMeta)}>{item.meta}</p>
                )
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * CategoryPageLayout Component
 *
 * Internal component that renders the visual category index page layout.
 * This is extracted to avoid Docusaurus hook dependencies in Storybook
 * (useCurrentSidebarCategory, useDocById).
 *
 * Simulates the structure of DocCategoryGeneratedIndexPage with:
 * - Page title and optional description over a hairline rule
 * - A two-column grid of the category's own pages, then one section per
 *   subcategory with a preview grid and an "N items" link to the full category
 * - Spotlight hover: the hovered item turns forest green and the rest fade
 * - Optional pagination footer
 */
function CategoryPageLayout({
  title,
  description,
  items,
  sections,
  previous,
  next,
}: {
  title: string;
  description?: string;
  items?: PageItem[];
  sections?: SectionItem[];
  previous?: { title: string; permalink: string };
  next?: { title: string; permalink: string };
}): JSX.Element {
  const compact = (items?.length ?? 0) + (sections?.length ?? 0) > COMPACT_THRESHOLD;
  const gridFollowsHeader = (items?.length ?? 0) > 0;
  return (
    <div className={styles.generatedIndexPage}>
      <div className={styles.content}>
        <header className={clsx(styles.header, gridFollowsHeader && styles.headerBeforeGrid)}>
          <Heading as="h1" className={styles.title}>
            {title}
          </Heading>
          {description && <p className={styles.description}>{description}</p>}
        </header>
        <article className={clsx(styles.sections, styles.spotlight)}>
          {items && <ItemGrid items={items} compact={compact} />}
          {sections?.map((section, index) => (
            <section key={index} className={clsx(styles.section, compact && styles.sectionCompact)}>
              <div className={styles.sectionHead}>
                <div className={styles.sectionTitleRow}>
                  <Heading as="h2" className={styles.sectionTitle}>
                    {section.label}
                  </Heading>
                  <Link href={section.href} className={styles.sectionCount}>
                    {pluralize(section.items.length)} <span aria-hidden="true">→</span>
                  </Link>
                </div>
                {section.description && (
                  <p className={styles.sectionDescription}>{section.description}</p>
                )}
              </div>
              <ItemGrid
                items={compact ? section.items : section.items.slice(0, PREVIEW_COUNT)}
                compact={compact}
              />
            </section>
          ))}
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

const agentToolsItems: PageItem[] = [
  {
    href: '/docs/agent-tools/agent-chat',
    label: 'Agent chat',
    description:
      'How to start an AI coding agent on a Moderne organization with `mod <agent> chat`, and how the agent works through changesets.',
  },
  {
    href: '/docs/agent-tools/prethink',
    label: 'Moderne Prethink',
    description: 'Generate structured context for AI coding agents with Moderne Prethink.',
  },
  {
    href: '/docs/agent-tools/code-search',
    label: 'Code Search',
    description:
      'Learn how to write Code Search queries, how agents use SQL search, and how the search index works.',
  },
  {
    href: '/docs/agent-tools/skills',
    label: 'Skills for AI coding agents',
    description:
      'How to install and use the Moderne skills that teach AI coding agents to write recipes and read Prethink context.',
  },
];

const mcpSection: SectionItem = {
  href: '/docs/agent-tools/mcp',
  label: 'Moderne MCP',
  description:
    "Give AI coding agents Moderne's tools through the Model Context Protocol. The remote server, hosted on the Moderne Platform, runs recipes and searches code across an entire organization. An experimental local server runs through the CLI on repositories you have checked out.",
  items: [
    {
      href: '/docs/agent-tools/mcp/remote-server',
      label: 'Remote server (Platform)',
      description:
        'Connect AI coding agents to the hosted Moderne MCP server on the Moderne Platform.',
    },
    {
      href: '/docs/agent-tools/mcp/overview',
      label: 'Local server (CLI) [Experimental]',
      meta: '3 items',
    },
  ],
};

const platformSections: SectionItem[] = [
  {
    href: '/docs/platform/getting-started',
    label: 'Getting started',
    description: 'Learn how to get started with the Moderne Platform.',
    items: [
      {
        href: '/docs/platform/getting-started/quickstart',
        label: 'Quickstart: Using the Moderne Platform',
        description: 'A brief introduction to the Moderne platform and what it can do for you.',
      },
      {
        href: '/docs/platform/getting-started/pov-prerequisites',
        label: 'Proof of value prerequisites',
        description:
          'What your team needs to prepare before starting the Moderne SaaS proof of value process.',
      },
      {
        href: '/docs/platform/getting-started/pov',
        label: 'Proof of value process',
        description: 'Describes what a typical proof of value process looks like.',
      },
      {
        href: '/docs/platform/getting-started/pov-csharp',
        label: 'Proof of value process (C#)',
        description: 'Describes what a typical C# proof of value process looks like.',
      },
      {
        href: '/docs/platform/getting-started/code-quality',
        label: 'Enhancing code quality',
        description: 'How to find and fix static analysis and stylistic issues in your code.',
      },
    ],
  },
  {
    href: '/docs/platform/references',
    label: 'References',
    description: 'Moderne Platform reference documentation.',
    items: [
      {
        href: '/docs/platform/references/changesets',
        label: 'Changesets',
      },
      {
        href: '/docs/platform/references/tokens',
        label: 'Moderne tokens',
        description:
          'Describes the tokens Moderne issues for authenticating to the Platform and its APIs.',
      },
    ],
  },
];

/**
 * DocCategoryGeneratedIndexPage - Swizzled Docusaurus component
 *
 * Custom category index page component for documentation sections with:
 * - Category title and description over a hairline rule
 * - A two-column grid of pages with no boxes or fill: a 2px ink rule, the
 *   title with an arrow, and the description; one column at phone widths
 * - One section per subcategory with its description, an "N items →" link on
 *   the title line, and a preview grid of its first four pages
 * - Spotlight hover: the hovered item's rule, name, and arrow turn forest
 *   green and every other item fades to 0.45 after a 120ms delay
 * - Compact list for categories with more than eight items: hairline rules,
 *   two-line descriptions, an arrow that only appears on hover, and the
 *   subcategories moved after the pages
 * - Dark mode support through mode-aware Morpheus tokens
 * - Optional previous/next pagination
 */
const meta: Meta<typeof CategoryPageLayout> = {
  title: 'Theme/DocCategoryGeneratedIndexPage',
  component: CategoryPageLayout,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Swizzled Docusaurus DocCategoryGeneratedIndexPage component with Morpheus styling for category index pages.',
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
 * Mixed
 *
 * A category with pages directly inside it as well as a subcategory, as on
 * Agent tools. The pages share a grid and the subcategory becomes a section.
 */
export const Mixed: Story = {
  args: {
    title: 'Agent tools',
    description:
      'Tools and context that make AI coding agents faster, more accurate, and more effective across enterprise codebases.',
    items: agentToolsItems,
    sections: [mcpSection],
    previous: {
      title: 'CLI 3.44.0 changes',
      permalink: '/docs/cli/references/cli-3-44-0-changes',
    },
    next: {
      title: 'Agent chat',
      permalink: '/docs/agent-tools/agent-chat',
    },
  },
};

/**
 * Sections
 *
 * A product landing page whose category contains only subcategories. Each one
 * becomes a section previewing its first four pages.
 */
export const Sections: Story = {
  args: {
    title: 'Moderne Platform',
    description: 'A secure platform and toolchain for fast, enterprise-wide code modernization.',
    sections: platformSections,
    next: {
      title: 'Getting started',
      permalink: '/docs/platform/getting-started',
    },
  },
};

/**
 * Grid
 *
 * A leaf category whose items are all pages, rendered as one grid.
 */
export const Grid: Story = {
  args: {
    title: 'Getting started',
    description: 'Learn how to get started with the Moderne Platform.',
    items: platformSections[0].items,
    previous: {
      title: 'Moderne Platform',
      permalink: '/docs/platform',
    },
    next: {
      title: 'How to guides',
      permalink: '/docs/platform/how-to-guides',
    },
  },
};

const cliGuides: PageItem[] = [
  ['CLI wrapper and version management', 'How the Moderne CLI wrapper works, how to control auto-updates, and how to pin CLI versions.'],
  ['Generating DevCenters locally', 'How to create or edit DevCenters using the Moderne CLI.'],
  ['Generating Moderne Prethink context locally', 'How to generate Moderne Prethink context for AI agents using the Moderne CLI.'],
  ['Curating the recipe marketplace', 'Learn how to expose a smaller, curated subset of recipes to your developers using the CLI.'],
  ['Speed up the CLI with parallelism', 'How to speed up the Moderne CLI with parallelism.'],
  ['SSH keys with passphrases', 'How to use SSH keys with passphrases.'],
  ['Layered configuration', 'How to set global or project-specific build arguments in the Moderne CLI.'],
  ['Storing CLI secrets', 'How the Moderne CLI keeps tokens and passwords out of moderne.yml, and how to choose where they are stored.'],
  ['Code style configuration', 'How to configure Checkstyle and OpenRewrite styles for LST builds in the Moderne CLI.'],
  ['Build partitions', 'Partitions allow for splitting a large repository into multiple LSTs. They are designed for large monorepos for which building an LST could take a very long time or run out of memory.'],
].map(([label, description]) => ({
  href: `/docs/cli/how-to-guides/${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  label,
  description,
}));

/**
 * Compact
 *
 * A category with more than eight items, as on CLI How to guides. Pages come
 * first in a compact list and the subcategory follows as a section.
 */
export const Compact: Story = {
  args: {
    title: 'How to guides',
    description: 'Learn how to use the Moderne CLI.',
    items: cliGuides,
    sections: [
      {
        href: '/docs/cli/how-to-guides/language-support',
        label: 'Language support',
        items: [
          { href: '/docs/cli/how-to-guides/csharp', label: 'C# configuration', description: 'How to set up and use C# LSTs with the Moderne CLI.' },
          { href: '/docs/cli/how-to-guides/go', label: 'Go configuration', description: 'How to set up and use Go LSTs with the Moderne CLI.' },
          { href: '/docs/cli/how-to-guides/java', label: 'Java configuration', description: 'How to configure Java, Gradle, and Maven in the Moderne CLI.' },
          { href: '/docs/cli/how-to-guides/javascript', label: 'JavaScript configuration', description: 'How to set up and use JavaScript LSTs with the Moderne CLI.' },
          { href: '/docs/cli/how-to-guides/python', label: 'Python configuration', description: 'How to set up and use Python LSTs with the Moderne CLI.' },
        ],
      },
    ],
  },
};
