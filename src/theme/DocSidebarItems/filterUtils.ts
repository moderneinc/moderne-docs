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
 * Check if a sidebar item is a section boundary (HTML divider with <strong> tag)
 * @param item - Sidebar item to check
 * @returns True if item is a section boundary
 */
function isSectionBoundary(item: PropSidebarItem): boolean {
  return item.type === 'html' &&
         (item as any).value?.includes('<strong>');
}

/**
 * Extract the section name from an HTML divider item
 * @param item - Sidebar item with HTML content
 * @returns Extracted section name or empty string
 */
function extractSectionName(item: PropSidebarItem): string {
  const value = (item as any).value || '';
  const match = value.match(/<strong>(.*?)<\/strong>/);
  return match?.[1] || '';
}

/**
 * Find the current major section based on path segments
 * Detects which HTML-separated section the current path belongs to
 *
 * @param items - All sidebar items
 * @param pathSegments - Current path segments
 * @returns Object containing section name and items, or null if not found
 */
function findCurrentSection(
  items: readonly PropSidebarItem[],
  pathSegments: string[]
): { section: string; sectionItems: PropSidebarItem[] } | null {
  if (pathSegments.length === 0) {
    return null; // Top-level, show everything
  }

  let currentSection = '';
  let sectionItems: PropSidebarItem[] = [];
  let inMatchingSection = false;

  // First path segment helps identify the major section
  const majorPath = pathSegments[0];

  for (const item of items) {
    if (isSectionBoundary(item)) {
      if (inMatchingSection) {
        // We found the next section boundary, stop collecting
        break;
      }
      currentSection = extractSectionName(item);
      sectionItems = [];
    } else if (currentSection) {
      // Collect items in this section
      sectionItems.push(item);

      // Check if this item's path matches our current path
      if (!inMatchingSection && itemMatchesPath(item, majorPath, pathSegments)) {
        inMatchingSection = true;
      }
    }
  }

  return inMatchingSection ? { section: currentSection, sectionItems } : null;
}

/**
 * Check if a sidebar item matches the given path
 * Handles different item types (category, doc, link)
 *
 * @param item - Sidebar item to check
 * @param pathSegment - Primary path segment to match
 * @param allSegments - All path segments for deeper matching
 * @returns True if item matches the path
 */
function itemMatchesPath(
  item: PropSidebarItem,
  pathSegment: string,
  allSegments: string[]
): boolean {
  if (item.type === 'category') {
    const category = item as PropSidebarItemCategory;

    // Check if category href starts with the full path we're looking for
    const categoryPath = category.href || '';
    const targetPath = '/' + allSegments.join('/');

    // Must match from the start of the path, not just contain the segment
    if (categoryPath === targetPath || categoryPath.startsWith(targetPath + '/')) {
      return true;
    }

    // Recursively check child items
    if (category.items && allSegments.length > 1) {
      return category.items.some(child =>
        itemMatchesPath(child, allSegments[1], allSegments.slice(1))
      );
    }
  }

  if (item.type === 'link') {
    const linkItem = item as any;
    const linkPath = linkItem.href || '';
    const targetPath = '/' + allSegments.join('/');
    return linkPath === targetPath || linkPath.startsWith(targetPath + '/');
  }

  return false;
}

/**
 * Find the parent category that directly contains the current path
 * This is used for progressive disclosure to show only the current category tree
 *
 * @param items - Sidebar items to search
 * @param pathSegments - Current path segments
 * @param depth - How deep to search (tracks recursion level)
 * @returns The parent category or null if not found
 */
function findParentCategory(
  items: readonly PropSidebarItem[],
  pathSegments: string[],
  depth: number = 0
): PropSidebarItemCategory | null {
  for (const item of items) {
    if (item.type === 'category') {
      const category = item as PropSidebarItemCategory;

      // Check if this category's href matches our path
      const categoryPath = category.href || '';
      const categorySegments = categoryPath.split('/').filter(s => s);

      // Check if this category is in the current path
      const isInPath = categorySegments.length > 0 &&
                       categorySegments.every((seg, idx) => pathSegments[idx] === seg);

      if (isInPath) {
        // If we have child items, search deeper
        if (category.items && category.items.length > 0 && pathSegments.length > categorySegments.length) {
          const childCategory = findParentCategory(category.items, pathSegments, depth + 1);
          if (childCategory) {
            return childCategory;
          }
        }

        // This category is the parent of our current path
        return category;
      }
    }
  }

  return null;
}

/**
 * Main filtering function to apply contextual sidebar logic
 *
 * Rules:
 * - Depth 0-1 (top-level /,/introduction): Show all sections with dividers
 * - Depth 2+ (product level and deeper): Show all product categories
 *   - /user-documentation/moderne-platform: Show Platform section
 *   - /user-documentation/moderne-platform/getting-started: Still show Platform section
 *   - /user-documentation/moderne-platform/getting-started/doc: Still show Platform section
 *
 * Path depth examples:
 * - / = 0 segments
 * - /introduction = 1 segment
 * - /user-documentation/moderne-platform = 2 segments (product level)
 * - /user-documentation/moderne-platform/getting-started = 3 segments (category level)
 * - /user-documentation/moderne-platform/getting-started/doc = 4+ segments (doc level)
 *
 * @param items - All sidebar items
 * @param currentPath - Current page path
 * @param depth - Current navigation depth (number of path segments)
 * @param pathSegments - Path segments array
 * @returns Filtered sidebar items
 */
export function filterSidebarItemsByContext(
  items: readonly PropSidebarItem[],
  currentPath: string,
  depth: number,
  pathSegments: string[],
  currentCategory?: any
): PropSidebarItem[] {
  // Depth 0-1: Show everything (home/introduction pages)
  if (depth <= 1) {
    return [...items];
  }

  // If we have a current category from Docusaurus context, use it
  // This is more stable than path matching
  if (currentCategory) {
    // Find the top-level product category that contains this category
    const productCategory = findTopLevelProductCategory(items, currentCategory);

    if (productCategory && productCategory.items) {
      return addCategoryHeader(productCategory, currentPath);
    }
  }

  // Fallback to path matching if no category context available
  const matchingCategory = findMatchingCategory(items, currentPath);

  if (matchingCategory && matchingCategory.items) {
    return addCategoryHeader(matchingCategory, currentPath);
  }

  // If no match found, show everything as fallback
  return [...items];
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

  // Return header followed by the category's items with proper expand state
  return [
    header,
    ...setAutoExpandState(category.items || [], currentPath),
  ];
}

/**
 * Find the top-level product category that contains the given category
 * Uses the permalink from the category context which is unique and stable
 */
function findTopLevelProductCategory(
  items: readonly PropSidebarItem[],
  targetCategory: any
): PropSidebarItemCategory | null {
  // Get the permalink from the current category context
  const targetPermalink = targetCategory?.permalink;

  if (!targetPermalink) {
    return null;
  }

  // Find the top-level category whose tree contains this permalink
  for (const item of items) {
    if (item.type === 'category') {
      const category = item as PropSidebarItemCategory;

      // Check if this category is the target or contains it by permalink
      if (categoryContainsPermalink(category, targetPermalink)) {
        return category;
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
 */
function setAutoExpandState(
  items: readonly PropSidebarItem[],
  currentPath: string
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

      // Expand if in path or has active child, otherwise collapse
      const shouldExpand = isInPath || hasActiveChild;

      return {
        ...category,
        collapsed: !shouldExpand,
        items: category.items ? setAutoExpandState(category.items, currentPath) : category.items,
      };
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
 * Find the TOP-LEVEL (product) category that contains the current path
 * This ensures we show all siblings (like "How to guides", "References", etc.)
 * rather than drilling down too deep
 */
function findMatchingCategory(
  items: readonly PropSidebarItem[],
  currentPath: string
): PropSidebarItemCategory | null {
  // First pass: find top-level categories that contain the current path
  for (const item of items) {
    if (item.type === 'category') {
      const category = item as PropSidebarItemCategory;

      // Check if this top-level category or any of its descendants contain the current path
      if (categoryContainsPath(category, currentPath)) {
        return category;
      }
    }
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

/**
 * Filter sidebar items to show only a specific section
 * Includes the section boundary (HTML header) and all items within that section
 *
 * @param items - All sidebar items
 * @param currentSection - The section to display
 * @returns Filtered items containing only the specified section
 */
function filterToSection(
  items: readonly PropSidebarItem[],
  currentSection: { section: string; sectionItems: PropSidebarItem[] }
): PropSidebarItem[] {
  const filtered: PropSidebarItem[] = [];
  let inSection = false;

  for (const item of items) {
    if (isSectionBoundary(item)) {
      const sectionName = extractSectionName(item);
      if (sectionName === currentSection.section) {
        // Include the section boundary (header)
        filtered.push(item);
        inSection = true;
      } else if (inSection) {
        // Hit the next section boundary, stop
        break;
      }
    } else if (inSection) {
      // Include all items within the current section
      filtered.push(item);
    }
  }

  return filtered;
}

/**
 * Filter sidebar to show product-level view
 * At depth 2+ (e.g., /user-documentation/moderne-platform or deeper), shows:
 * - Product name as header (e.g., "Platform")
 * - Product's children promoted to root level (Getting started, How to guides, etc.)
 * - Hides sibling products
 *
 * This applies to both product-level pages and all pages deeper in the tree.
 * The entire product tree remains visible regardless of how deep you navigate.
 *
 * @param items - All sidebar items
 * @param currentSection - The section containing the products
 * @param pathSegments - Current path segments to identify the product
 * @returns Filtered items with product header and promoted children
 */
function filterToProductLevel(
  items: readonly PropSidebarItem[],
  currentSection: { section: string; sectionItems: PropSidebarItem[] },
  pathSegments: string[]
): PropSidebarItem[] {
  // Find the product category that matches the current path
  // For /user-documentation/moderne-platform, we're looking for the "Platform" category
  const productCategory = findProductCategory(currentSection.sectionItems, pathSegments);

  if (!productCategory) {
    // Fallback: show the whole section if we can't find the product
    return filterToSection(items, currentSection);
  }

  // Create a header using the product name
  const productHeader: PropSidebarItem = {
    type: 'html',
    value: `<br/><strong>${productCategory.label}</strong>`,
  };

  // Return the header followed by the product's children (promoted to root)
  return [
    productHeader,
    ...(productCategory.items || []),
  ];
}

/**
 * Find the product category that matches the current path
 * For /user-documentation/moderne-platform or any path under it, finds the "Platform" category
 *
 * @param sectionItems - Items within the current section
 * @param pathSegments - Current path segments
 * @returns The matching product category or null
 */
function findProductCategory(
  sectionItems: readonly PropSidebarItem[],
  pathSegments: string[]
): PropSidebarItemCategory | null {
  // We need to find the category whose href is a prefix of the current path
  // For example, if we're at /user-documentation/moderne-platform/getting-started/doc
  // we should match the category with href /user-documentation/moderne-platform
  const currentPath = '/' + pathSegments.join('/');

  for (const item of sectionItems) {
    if (item.type === 'category') {
      const category = item as PropSidebarItemCategory;
      const categoryPath = category.href || '';

      // Check if the current path starts with this category's path
      // This allows matching at any depth under the category
      if (currentPath === categoryPath ||
          currentPath === categoryPath + '/' ||
          currentPath.startsWith(categoryPath + '/')) {
        return category;
      }
    }
  }

  return null;
}

/**
 * Filter sidebar to show only the current category tree
 * This implements progressive disclosure by showing only the relevant category
 *
 * @param items - All sidebar items
 * @param currentSection - The section containing the category
 * @param targetCategory - The category to display
 * @returns Filtered items containing section header + only the target category
 */
function filterToCategoryTree(
  items: readonly PropSidebarItem[],
  currentSection: { section: string; sectionItems: PropSidebarItem[] },
  targetCategory: PropSidebarItemCategory
): PropSidebarItem[] {
  const filtered: PropSidebarItem[] = [];
  let inSection = false;

  // First, add the section boundary
  for (const item of items) {
    if (isSectionBoundary(item)) {
      const sectionName = extractSectionName(item);
      if (sectionName === currentSection.section) {
        filtered.push(item);
        inSection = true;
        break;
      }
    }
  }

  // Then, find and add only the target category from the section items
  // We need to find the top-level product category that contains our target
  const topLevelCategory = findTopLevelCategoryContaining(
    currentSection.sectionItems,
    targetCategory
  );

  if (topLevelCategory) {
    // Clone the category and filter its children to show only the path to target
    const filteredCategory = filterCategoryToPath(topLevelCategory, targetCategory);
    if (filteredCategory) {
      filtered.push(filteredCategory);
    }
  }

  return filtered;
}

/**
 * Find the top-level category that contains the target category
 * @param items - Items to search
 * @param targetCategory - Category we're looking for
 * @returns The top-level category or null
 */
function findTopLevelCategoryContaining(
  items: readonly PropSidebarItem[],
  targetCategory: PropSidebarItemCategory
): PropSidebarItemCategory | null {
  for (const item of items) {
    if (item.type === 'category') {
      const category = item as PropSidebarItemCategory;

      // Check if this is the target or contains it
      if (category === targetCategory || categoryContains(category, targetCategory)) {
        return category;
      }
    }
  }
  return null;
}

/**
 * Check if a category contains the target category
 * @param category - Category to search
 * @param target - Target category to find
 * @returns True if category contains target
 */
function categoryContains(
  category: PropSidebarItemCategory,
  target: PropSidebarItemCategory
): boolean {
  if (category === target) {
    return true;
  }

  if (category.items) {
    for (const item of category.items) {
      if (item.type === 'category') {
        if (categoryContains(item as PropSidebarItemCategory, target)) {
          return true;
        }
      }
    }
  }

  return false;
}

/**
 * Filter a category to show only the path to the target category
 * This creates a new category object with only the relevant children
 *
 * @param category - Category to filter
 * @param targetCategory - Target category to show
 * @returns Filtered category showing only path to target
 */
function filterCategoryToPath(
  category: PropSidebarItemCategory,
  targetCategory: PropSidebarItemCategory
): PropSidebarItemCategory | null {
  // If this is the target category, return it with all its children
  if (category === targetCategory) {
    return { ...category };
  }

  // If this category contains the target, filter its children
  if (categoryContains(category, targetCategory)) {
    const filteredItems: PropSidebarItem[] = [];

    if (category.items) {
      for (const item of category.items) {
        if (item.type === 'category') {
          const childCategory = item as PropSidebarItemCategory;

          // If this child is or contains the target, include it (filtered)
          if (childCategory === targetCategory || categoryContains(childCategory, targetCategory)) {
            const filtered = filterCategoryToPath(childCategory, targetCategory);
            if (filtered) {
              filteredItems.push(filtered);
            }
          }
          // Don't include sibling categories that don't contain the target
        }
        // Don't include doc items when we're above the target category
        // (they'll be included when we reach the target via the spread at line 423)
      }
    }

    return {
      ...category,
      items: filteredItems,
    };
  }

  return null;
}
