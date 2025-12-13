import { useLocation } from '@docusaurus/router';
import { useCurrentSidebarCategory } from '@docusaurus/plugin-content-docs/client';
import type { PropSidebarItem, PropSidebarItemCategory } from '@docusaurus/plugin-content-docs';

/**
 * Hook to detect current route depth and path segments
 * @returns {object} Object containing depth, path segments, and current path
 */
export function useContextualSidebarDepth() {
  const location = useLocation();

  // Remove empty segments and 'docs' prefix if present
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment && segment !== 'docs');

  return {
    depth: pathSegments.length,
    pathSegments,
    currentPath: location.pathname
  };
}


/**
 * Main filtering function to apply contextual sidebar logic
 *
 * Rules:
 * - Depth 0: No sidebar (empty array)
 * - Depth 1+: Show only the matching category's tree, drilling down to nested product categories
 *
 * Path depth examples:
 * - / = 0 segments → no sidebar
 * - /administrator-documentation = 1 segment → show Administrator Documentation with expanded subsections
 * - /administrator-documentation/moderne-platform = 2 segments → show only Moderne Platform tree
 * - /administrator-documentation/moderne-platform/getting-started = 3 segments → show only Moderne Platform tree
 *
 * @param items - All sidebar items
 * @param currentPath - Current page path
 * @param depth - Current navigation depth (number of path segments)
 * @param pathSegments - Path segments array
 * @param currentCategory - Current category from Docusaurus context
 * @returns Filtered sidebar items
 */
export function filterSidebarItemsByContext(
  items: readonly PropSidebarItem[],
  currentPath: string,
  depth: number,
  _pathSegments: string[],
  currentCategory?: any
): PropSidebarItem[] {
  // Depth 0: No sidebar at all
  if (depth === 0) {
    return [];
  }

  // Depth 1+: Find the matching category and show its tree
  // For nested structures (like Administrator Documentation), drill down to the actual product category

  // If we have a current category from Docusaurus context, use it (more reliable)
  if (currentCategory) {
    const category = findDeepestMatchingCategory(items, currentCategory);
    if (category && category.items) {
      return addCategoryHeader(category, currentPath);
    }
  }

  // Fallback to path matching
  const matchingCategory = findDeepestMatchingCategoryByPath(items, currentPath);
  if (matchingCategory && matchingCategory.items) {
    return addCategoryHeader(matchingCategory, currentPath);
  }

  // If no match found, return empty (no sidebar)
  return [];
}

/**
 * Add a section header with the category name and return the category's items
 * This creates a visual header when showing a filtered category view
 *
 * @param category - The category to display
 * @param currentPath - Current page path for auto-expand state
 * @returns Array with header followed by auto-expanded category items
 */
function addCategoryHeader(
  category: PropSidebarItemCategory,
  currentPath: string
): PropSidebarItem[] {
  // Create a section header using the category label
  const header: PropSidebarItem = {
    type: 'html',
    value: `<br/><strong>${category.label}</strong>`,
  };

  // Return header followed by the category's items with path-based expand state
  // Only expand categories that are in the current path, not all children
  return [
    header,
    ...setAutoExpandState(category.items || [], currentPath, false),
  ];
}

/**
 * Find the deepest matching category that contains the given category
 * For nested structures, this drills down to the actual product category
 * rather than stopping at the top-level parent
 */
function findDeepestMatchingCategory(
  items: readonly PropSidebarItem[],
  targetCategory: any
): PropSidebarItemCategory | null {
  // Get the permalink from the current category context
  const targetPermalink = targetCategory?.permalink;

  if (!targetPermalink) {
    return null;
  }

  // Find the deepest category that either matches the permalink or contains it
  for (const item of items) {
    if (item.type === 'category') {
      const category = item as PropSidebarItemCategory;

      // Check if this category contains the target permalink
      if (categoryContainsPermalink(category, targetPermalink)) {
        // Try to find a deeper match within this category's children
        const deeperMatch = findDeepestCategoryInTree(category, targetPermalink);
        return deeperMatch || category;
      }
    }
  }

  return null;
}

/**
 * Check if a category is a "product category" - the level at which we want to show the sidebar
 * Product categories are marked with featured: true OR contain standard subsections
 * BUT are NOT standard subsections themselves
 */
function isProductCategory(category: PropSidebarItemCategory): boolean {
  const label = category.label?.toLowerCase() || '';

  // Exact match standard subsections (not partial match with includes())
  const isStandardSubsection =
    label === 'getting started' ||
    label === 'how to guides' ||
    label === 'references' ||
    label === 'reference' ||
    label === 'shared references';

  if (isStandardSubsection) {
    return false;
  }

  // Categories with featured flag are product-level
  if (category.customProps?.featured === true) {
    return true;
  }

  // For nested structures (like Administrator Platform), detect product categories
  // by checking if they contain the standard subsection pattern
  if (category.items && category.items.length > 0) {
    const hasStandardSubsections = category.items.some(item => {
      if (item.type === 'category') {
        const itemLabel = item.label?.toLowerCase() || '';
        return itemLabel === 'getting started' ||
               itemLabel === 'how to guides' ||
               itemLabel === 'references' ||
               itemLabel === 'reference';
      }
      return false;
    });

    if (hasStandardSubsections) {
      return true;
    }
  }

  return false;
}

/**
 * Recursively find the deepest PRODUCT category in a tree that contains the target permalink
 * This stops at product-level categories (Platform, CLI, DX) rather than drilling to subsections
 */
function findDeepestCategoryInTree(
  category: PropSidebarItemCategory,
  targetPermalink: string
): PropSidebarItemCategory | null {
  // If this category's href matches exactly and it's a product category, return it
  if (category.href === targetPermalink && isProductCategory(category)) {
    return category;
  }

  // Check if any child category contains the permalink
  if (category.items) {
    for (const item of category.items) {
      if (item.type === 'category') {
        const childCategory = item as PropSidebarItemCategory;

        // If this child contains the permalink
        if (categoryContainsPermalink(childCategory, targetPermalink)) {
          // If this child is a product category, return it (don't go deeper)
          if (isProductCategory(childCategory)) {
            return childCategory;
          }

          // Otherwise, try to go deeper to find a product category
          const deeperMatch = findDeepestCategoryInTree(childCategory, targetPermalink);
          if (deeperMatch) {
            return deeperMatch;
          }

          // If no product category found deeper, return this child
          return childCategory;
        }
      }
    }
  }

  return null;
}

/**
 * Check if a category contains a page/category with the given permalink
 * Permalinks are unique and stable identifiers
 */
function categoryContainsPermalink(
  category: PropSidebarItemCategory,
  targetPermalink: string
): boolean {
  // Check if this category's href matches
  if (category.href === targetPermalink) {
    return true;
  }

  // Check children recursively
  if (category.items) {
    for (const item of category.items) {
      if (item.type === 'category') {
        const childCategory = item as PropSidebarItemCategory;
        if (categoryContainsPermalink(childCategory, targetPermalink)) {
          return true;
        }
      } else if (item.type === 'link') {
        const link = item as any;
        if (link.href === targetPermalink) {
          return true;
        }
      }
    }
  }

  return false;
}

/**
 * Set the collapsed state for categories based on whether they're in the current path
 * Categories that are in the path or contain the current page should be expanded
 *
 * @param items - Items to process
 * @param currentPath - Current page path
 * @param expandAll - If true, expand all immediate children (used when at parent level)
 */
function setAutoExpandState(
  items: readonly PropSidebarItem[],
  currentPath: string,
  expandAll: boolean = false
): PropSidebarItem[] {
  return items.map(item => {
    if (item.type === 'category') {
      const category = item as PropSidebarItemCategory;
      const categoryPath = category.href || '';

      // Check if this category is in the current path
      const isInPath = categoryPath && (
        currentPath === categoryPath ||
        currentPath === categoryPath + '/' ||
        currentPath.startsWith(categoryPath + '/')
      );

      // Check if any child contains the current path
      const hasActiveChild = category.items ?
        containsPath(category.items, currentPath) : false;

      // Expand if in path, has active child, OR expandAll flag is set
      const shouldExpand = isInPath || hasActiveChild || expandAll;

      return {
        ...category,
        collapsed: !shouldExpand,
        items: category.items ?
          setAutoExpandState(category.items, currentPath, false) :
          category.items,
      } as PropSidebarItemCategory;
    }
    return item;
  });
}

/**
 * Check if any item in the list contains the current path
 */
function containsPath(
  items: readonly PropSidebarItem[],
  currentPath: string
): boolean {
  for (const item of items) {
    if (item.type === 'category') {
      const category = item as PropSidebarItemCategory;
      const categoryPath = category.href || '';

      if (categoryPath && (
          currentPath === categoryPath ||
          currentPath === categoryPath + '/' ||
          currentPath.startsWith(categoryPath + '/')
      )) {
        return true;
      }

      if (category.items && containsPath(category.items, currentPath)) {
        return true;
      }
    } else if (item.type === 'link') {
      const link = item as any;
      if (link.href === currentPath) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Find the deepest category that contains the current path
 * For nested structures, this drills down to the actual product category
 */
function findDeepestMatchingCategoryByPath(
  items: readonly PropSidebarItem[],
  currentPath: string
): PropSidebarItemCategory | null {
  // First pass: Look for exact href matches (higher priority)
  for (const item of items) {
    if (item.type === 'category') {
      const category = item as PropSidebarItemCategory;
      const categoryPath = category.href || '';

      // Exact match for this category's href
      if (categoryPath && (
        currentPath === categoryPath ||
        currentPath === categoryPath + '/'
      )) {
        // Try to find a deeper match within this category's children
        const deeperMatch = findDeepestCategoryInTreeByPath(category, currentPath);
        return deeperMatch || category;
      }
    }
  }

  // Second pass: Look for categories that contain the path (via children)
  for (const item of items) {
    if (item.type === 'category') {
      const category = item as PropSidebarItemCategory;

      // Check if this category contains the current path
      if (categoryContainsPath(category, currentPath)) {
        // Try to find a deeper match within this category's children
        const deeperMatch = findDeepestCategoryInTreeByPath(category, currentPath);
        return deeperMatch || category;
      }
    }
  }

  return null;
}

/**
 * Recursively find the deepest PRODUCT category in a tree that contains the current path
 * This stops at product-level categories rather than drilling to subsections
 */
function findDeepestCategoryInTreeByPath(
  category: PropSidebarItemCategory,
  currentPath: string
): PropSidebarItemCategory | null {
  const categoryPath = category.href || '';

  // If this category's path matches the current path
  if (categoryPath && (
      currentPath === categoryPath ||
      currentPath === categoryPath + '/' ||
      currentPath.startsWith(categoryPath + '/')
  )) {
    // Check if any child category also contains this path
    if (category.items) {
      for (const item of category.items) {
        if (item.type === 'category') {
          const childCategory = item as PropSidebarItemCategory;

          // If this child contains the path
          if (categoryContainsPath(childCategory, currentPath)) {
            // If this child is a product category, return it (don't go deeper)
            if (isProductCategory(childCategory)) {
              return childCategory;
            }

            // Otherwise, try to go deeper to find a product category
            const deeperMatch = findDeepestCategoryInTreeByPath(childCategory, currentPath);
            if (deeperMatch) {
              return deeperMatch;
            }

            // If no product category found deeper and child is not a product category,
            // don't return the child. Continue to check if current category is a product category.
          }
        }
      }
    }

    // If this is a product category, return it
    if (isProductCategory(category)) {
      return category;
    }

    // Special case: if we're at the exact path of this category (not deeper),
    // return it even if it's not a product category (e.g., Administrator Documentation)
    if (currentPath === categoryPath || currentPath === categoryPath + '/') {
      return category;
    }

    // If we're deeper than this category and it's not a product category, don't return it
    return null;
  }

  return null;
}

/**
 * Check if a category or any of its descendants contain the current path
 */
function categoryContainsPath(
  category: PropSidebarItemCategory,
  currentPath: string
): boolean {
  const categoryPath = category.href || '';

  // Check if this category itself matches
  if (categoryPath && (
      currentPath === categoryPath ||
      currentPath === categoryPath + '/' ||
      currentPath.startsWith(categoryPath + '/')
  )) {
    return true;
  }

  // Check children recursively
  if (category.items) {
    for (const item of category.items) {
      if (item.type === 'category') {
        if (categoryContainsPath(item as PropSidebarItemCategory, currentPath)) {
          return true;
        }
      } else if (item.type === 'link') {
        const link = item as any;
        if (link.href === currentPath) {
          return true;
        }
      }
    }
  }

  return false;
}

