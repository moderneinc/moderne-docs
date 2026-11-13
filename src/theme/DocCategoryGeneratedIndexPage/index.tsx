import Link from '@docusaurus/Link';
import type {
  PropSidebarItem,
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';
import {
  findFirstSidebarItemLink,
  useCurrentSidebarCategory,
  useDocById,
} from '@docusaurus/plugin-content-docs/client';
import { PageMetadata, usePluralForm } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { SuppressCopyPageContext } from '@site/src/components/CopyPageAction';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import type { Props } from '@theme/DocCategoryGeneratedIndexPage';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocVersionBanner from '@theme/DocVersionBanner';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import { type FunctionComponent, type ReactNode } from 'react';

import styles from './styles.module.css';

/**
 * A category with more items than this uses the compact list, with hairline
 * rules, two-line descriptions, and subcategories moved after the pages.
 */
const COMPACT_THRESHOLD = 8;

/** How many pages each subcategory section previews before its "N items" link. */
const PREVIEW_COUNT = 4;

type PropSidebarItemWithLink = PropSidebarItemLink | PropSidebarItemCategory;

/** A trailing bracketed note in a sidebar label, such as "Local server [Experimental]". */
const LABEL_TAG = /\s*\[([^\]]+)\]\s*$/;

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

/**
 * Splits off the last word of a title, so it can share a no-wrap span with the
 * arrow. The lead keeps its trailing space.
 */
function splitLastWord(title: string): { lead: string; last: string } {
  const index = title.trimEnd().lastIndexOf(' ');
  if (index < 0) {
    return { lead: '', last: title };
  }
  return { lead: title.slice(0, index + 1), last: title.slice(index + 1) };
}

/** Renders backtick spans in a description as inline code. */
function renderDescription(text: string): ReactNode {
  const parts = text.split(/(`[^`]+`)/);
  if (parts.length === 1) {
    return text;
  }
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

function useCategoryItemsPlural() {
  const { selectMessage } = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          message: '1 item|{count} items',
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        { count },
      ),
    );
}

const DocCategoryGeneratedIndexPageMetadata: FunctionComponent<Props> = ({
  categoryGeneratedIndex,
}) => {
  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      // NOTE: TODO below is from upstream Docusaurus theme-classic, copied during swizzling
      // TODO `require` this?
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  );
};

DocCategoryGeneratedIndexPageMetadata.displayName = 'DocCategoryGeneratedIndexPageMetadata';

interface GridItemProps {
  href: string;
  label: string;
  description?: string;
  /** Shown in place of a description when the item has none, such as an item count. */
  meta?: string;
  compact: boolean;
}

/**
 * One page in the grid: a rule, the title with an arrow, and the description.
 * The compact variant clamps the description to two lines and carries the full
 * text in the link's title.
 */
const GridItem: FunctionComponent<GridItemProps> = ({
  href,
  label,
  description,
  meta,
  compact,
}) => {
  const { title, tag } = splitLabelTag(label);
  const { lead, last } = splitLastWord(title);
  return (
    <li className={styles.gridItem}>
      <Link
        href={href}
        className={clsx(styles.item, compact && styles.itemCompact)}
        title={compact && description ? description.replace(/`/g, '') : undefined}
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
        {description ? (
          <p className={styles.itemDescription}>{renderDescription(description)}</p>
        ) : (
          meta && <p className={clsx(styles.itemDescription, styles.itemMeta)}>{meta}</p>
        )}
      </Link>
    </li>
  );
};

GridItem.displayName = 'GridItem';

interface GridEntryProps<T> {
  item: T;
  compact: boolean;
}

const GridLink: FunctionComponent<GridEntryProps<PropSidebarItemLink>> = ({ item, compact }) => {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <GridItem
      href={item.href}
      label={item.label}
      description={item.description ?? doc?.description}
      compact={compact}
    />
  );
};

GridLink.displayName = 'GridLink';

const GridCategory: FunctionComponent<GridEntryProps<PropSidebarItemCategory>> = ({
  item,
  compact,
}) => {
  const categoryItemsPlural = useCategoryItemsPlural();
  const href = item.href ?? findFirstSidebarItemLink(item);
  if (!href) {
    return null;
  }
  return (
    <GridItem
      href={href}
      label={item.label}
      description={item.description}
      meta={categoryItemsPlural(item.items.length)}
      compact={compact}
    />
  );
};

GridCategory.displayName = 'GridCategory';

const GridEntry: FunctionComponent<GridEntryProps<PropSidebarItemWithLink>> = ({
  item,
  compact,
}) => {
  return item.type === 'link' ? (
    <GridLink item={item} compact={compact} />
  ) : (
    <GridCategory item={item} compact={compact} />
  );
};

GridEntry.displayName = 'GridEntry';

/** Two-column grid of pages, one column at phone widths. */
const ItemGrid: FunctionComponent<{ items: PropSidebarItemWithLink[]; compact: boolean }> = ({
  items,
  compact,
}) => {
  return (
    <ul className={clsx(styles.grid, compact && styles.gridCompact)}>
      {items.map((item, index) => (
        <GridEntry key={index} item={item} compact={compact} />
      ))}
    </ul>
  );
};

ItemGrid.displayName = 'ItemGrid';

function withLinks(items: PropSidebarItem[]): PropSidebarItemWithLink[] {
  return items.filter((item): item is PropSidebarItemWithLink => item.type !== 'html');
}

/**
 * A subcategory rendered as a section: its title with a link to the full
 * category carrying the item count, its description, and a grid of its pages.
 * The standard layout previews the first few pages; the compact list shows
 * them all.
 */
const CategorySection: FunctionComponent<{ item: PropSidebarItemCategory; compact: boolean }> = ({
  item,
  compact,
}) => {
  const categoryItemsPlural = useCategoryItemsPlural();
  const href = item.href ?? findFirstSidebarItemLink(item);
  const items = withLinks(item.items);

  if (!href) {
    return null;
  }

  return (
    <section className={clsx(styles.section, compact && styles.sectionCompact)}>
      <div className={styles.sectionHead}>
        <div className={styles.sectionTitleRow}>
          <Heading as="h2" className={styles.sectionTitle}>
            {item.label}
          </Heading>
          <Link
            href={href}
            className={styles.sectionCount}
            aria-label={`${item.label}: ${categoryItemsPlural(items.length)}`}
          >
            {categoryItemsPlural(items.length)} <span aria-hidden="true">→</span>
          </Link>
        </div>
        {item.description && <p className={styles.sectionDescription}>{item.description}</p>}
      </div>
      <ItemGrid items={compact ? items : items.slice(0, PREVIEW_COUNT)} compact={compact} />
    </section>
  );
};

CategorySection.displayName = 'CategorySection';

/**
 * Standard layout: pages that sit directly in the category share a grid, and
 * each subcategory becomes a section, in sidebar order.
 */
function renderStandardItems(items: PropSidebarItemWithLink[]): ReactNode[] {
  const nodes: ReactNode[] = [];
  let gridGroup: PropSidebarItemWithLink[] = [];

  const flushGrid = () => {
    if (gridGroup.length > 0) {
      nodes.push(<ItemGrid key={`grid-${nodes.length}`} items={gridGroup} compact={false} />);
      gridGroup = [];
    }
  };

  items.forEach((item, index) => {
    if (item.type === 'category') {
      flushGrid();
      nodes.push(<CategorySection key={`section-${index}`} item={item} compact={false} />);
    } else {
      gridGroup.push(item);
    }
  });
  flushGrid();

  return nodes;
}

/**
 * Compact layout: every page goes in one list first, and the subcategories
 * follow it as sections.
 */
function renderCompactItems(items: PropSidebarItemWithLink[]): ReactNode[] {
  const pages = items.filter((item): item is PropSidebarItemLink => item.type === 'link');
  const categories = items.filter(
    (item): item is PropSidebarItemCategory => item.type === 'category',
  );
  return [
    pages.length > 0 && <ItemGrid key="pages" items={pages} compact />,
    ...categories.map((item, index) => (
      <CategorySection key={`section-${index}`} item={item} compact />
    )),
  ];
}

const DocCategoryGeneratedIndexPageContent: FunctionComponent<Props> = ({
  categoryGeneratedIndex,
}) => {
  const category = useCurrentSidebarCategory();
  const items = withLinks(category.items);
  const compact = items.length > COMPACT_THRESHOLD;
  // A grid's own top rules mark where the list starts, so the header only
  // keeps its divider when a section heading follows it instead.
  const gridFollowsHeader = compact
    ? items.some((item) => item.type === 'link')
    : items[0]?.type === 'link';

  return (
    <div className={styles.generatedIndexPage}>
      <DocVersionBanner />
      <div className={styles.content}>
        {/* Category index pages are link grids — no copy-page button on their breadcrumb row. */}
        <SuppressCopyPageContext.Provider value={true}>
          <DocBreadcrumbs />
        </SuppressCopyPageContext.Provider>
        <DocVersionBadge />
        <header className={clsx(styles.header, gridFollowsHeader && styles.headerBeforeGrid)}>
          <Heading as="h1" className={styles.title}>
            {categoryGeneratedIndex.title}
          </Heading>
          {categoryGeneratedIndex.description && (
            <p className={styles.description}>{categoryGeneratedIndex.description}</p>
          )}
        </header>
        {/* The spotlight hover fades every grid item in the content area except the hovered one. */}
        <article className={clsx(styles.sections, styles.spotlight)}>
          {compact ? renderCompactItems(items) : renderStandardItems(items)}
        </article>
        <footer>
          <DocPaginator
            previous={categoryGeneratedIndex.navigation.previous}
            next={categoryGeneratedIndex.navigation.next}
          />
        </footer>
      </div>
    </div>
  );
};

DocCategoryGeneratedIndexPageContent.displayName = 'DocCategoryGeneratedIndexPageContent';

const DocCategoryGeneratedIndexPage: FunctionComponent<Props> = (props) => {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  );
};

DocCategoryGeneratedIndexPage.displayName = 'DocCategoryGeneratedIndexPage';

export default DocCategoryGeneratedIndexPage;
