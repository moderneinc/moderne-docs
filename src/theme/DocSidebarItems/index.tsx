import React, {type FunctionComponent} from 'react';
import DocSidebarItems from '@theme-original/DocSidebarItems';
import type DocSidebarItemsType from '@theme/DocSidebarItems';
import type {WrapperProps} from '@docusaurus/types';
import {
  filterSidebarItemsByContext,
  useContextualSidebarDepth,
} from './filterUtils';

type Props = WrapperProps<typeof DocSidebarItemsType>;

/**
 * Wrapper for DocSidebarItems that implements contextual sidebar filtering.
 *
 * Filtering behavior:
 * - Depth 0-1 (/, /introduction): Show all sections with dividers
 * - Depth 2+ (product level and deeper): Show only current product with all its children
 *   - /user-documentation/moderne-platform -> Show Platform section
 *   - /user-documentation/moderne-platform/getting-started -> Show Platform section
 *   - /user-documentation/moderne-platform/getting-started/doc -> Show Platform section
 *
 * This provides focused navigation by showing only the relevant product tree
 * at any depth, reducing cognitive load while maintaining context.
 */
const DocSidebarItemsWrapper: FunctionComponent<Props> = (props) => {
  const {depth, pathSegments, currentPath} = useContextualSidebarDepth();

  // Get the current sidebar category from Docusaurus context
  // This is more stable than path matching
  let currentCategory;
  try {
    currentCategory = require('@docusaurus/plugin-content-docs/client').useCurrentSidebarCategory();
  } catch (e) {
    // Not in a category context (e.g., on homepage)
    currentCategory = null;
  }

  // Detect if we're rendering nested items (children of a category)
  // Docusaurus passes level 1 for the top-level sidebar, level 2+ for nested items
  // @ts-ignore - level might not be in the type but is passed by Docusaurus
  const level = props.level ?? 0;
  const isNestedRendering = level > 1;

  // Apply contextual filtering
  // Only filter at the top level (level 0-1), not for nested items (level 2+)
  let filteredItems;
  if (isNestedRendering) {
    // Don't filter nested items - pass them through unchanged
    filteredItems = props.items as any[];
  } else {
    filteredItems = filterSidebarItemsByContext(
      props.items,
      currentPath,
      depth,
      pathSegments,
      currentCategory,
    );
  }

  // Use Fragment to preserve HTML structure (DocSidebarItems is rendered inside <ul>)
  // Key by currentPath to force re-render and reset collapse/expand state on navigation
  return (
    <>
      <DocSidebarItems {...props} items={filteredItems} key={currentPath} />
    </>
  );
};

DocSidebarItemsWrapper.displayName = 'DocSidebarItemsWrapper';

export default DocSidebarItemsWrapper;
