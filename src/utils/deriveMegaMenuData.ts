/**
 * Utility for deriving MegaMenu data from sidebars.ts
 *
 * This implements a hybrid approach where:
 * - Product items are derived from sidebar categories marked with featured: true
 * - Learning items and footer links remain static in megaMenuData.ts
 *
 * Benefits:
 * - Single source of truth for product metadata
 * - Automatic synchronization of labels, descriptions, and gem icons
 * - Type-safe derivation
 */

import sidebars from '../../sidebars';
import type { ProductItem } from '../components/MegaMenu/types';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';

/**
 * Type definition for a category sidebar item with link and customProps
 */
interface CategoryWithLink {
  type: 'category';
  label: string;
  collapsed: boolean;
  collapsible: boolean;
  items: PropSidebarItem[];
  link: {
    description?: string;
    slug?: string;
    [key: string]: any;
  };
  customProps?: {
    featured?: boolean;
    gemIcon?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

/**
 * Type guard to check if a sidebar item is a category with link
 */
function isCategoryWithLink(item: PropSidebarItem): item is CategoryWithLink {
  return (
    item.type === 'category' &&
    'link' in item &&
    item.link !== undefined
  );
}

/**
 * Derives product items from sidebars.ts top-level categories
 *
 * Looks for categories with customProps.featured === true
 * and extracts their label, description, gem icon, and slug.
 *
 * @returns Array of ProductItem objects for the MegaMenu
 */
export function deriveProductsFromSidebars(): ProductItem[] {
  const products: ProductItem[] = [];
  const sidebarDocs = sidebars.docs;

  // Ensure sidebarDocs is an array before iterating
  if (!Array.isArray(sidebarDocs)) {
    return products;
  }

  // Iterate through all sidebar items
  sidebarDocs.forEach((item: PropSidebarItem) => {
    // Check if this is a category with featured flag
    if (
      isCategoryWithLink(item) &&
      item.customProps?.featured === true
    ) {
      const gemIcon = item.customProps.gemIcon || 'pink'; // Default to pink if not specified

      products.push({
        name: item.label,
        icon: `/img/gems/${gemIcon}.png`,
        description: item.link.description || '',
        href: item.link.slug || `/${item.label.toLowerCase()}`,
      });
    }
  });

  return products;
}
