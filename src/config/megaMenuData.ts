/**
 * MegaMenu Configuration - Hybrid Approach
 *
 * This file uses a hybrid data strategy:
 * - Products are derived from sidebars.ts (single source of truth)
 * - Learning items and footer links remain static here (MegaMenu-specific)
 *
 * Benefits:
 * - Product metadata automatically stays in sync with sidebar
 * - No duplication of descriptions, icons, or links
 * - Type-safe derivation from sidebar configuration
 */

import type { FooterLink, LearningItem, ProductItem } from '../components/NeoMegaMenu/types';
import { deriveProductsFromSidebars } from '../utils/deriveMegaMenuData';

/**
 * Product documentation items - DERIVED FROM SIDEBARS.TS
 * Automatically extracts products from sidebar categories marked with customProps.megaMenu: true
 *
 * To add/modify products, update sidebars.ts instead of this file.
 *
 * Note: Recipes link is overridden to point to hands-on-learning/fundamentals
 */
export const products = deriveProductsFromSidebars()

/**
 * Business-focused items
 * Displayed in the "For Business" section of the mega menu
 */
export const businessItems: ProductItem[] = [
  {
    name: 'Admin',
    icon: '/img/gems/clear-block.png',
    description: 'Admin specific docs for Platform, DX, & Shared References',
    href: '/administrator-documentation/moderne-platform',
  },
];

/**
 * Learning and resource items
 * Displayed in the right column of the mega menu
 */
export const learningItems: LearningItem[] = [
  {
    name: 'Plugin for JetBrains',
    href: '/user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install',
    external: false,
  },
  {
    name: 'Code Remix',
    href: 'https://coderemix.ai/',
    external: true,
  },
  {
    name: 'Hands on Learning',
    href: '/hands-on-learning/fundamentals/workshop-overview',
    external: false,
  },
  {
    name: 'OpenRewrite Advanced Program Analysis',
    href: '/openrewrite-advanced-program-analysis/control-flow/introduction',
    external: false,
  },
  {
    name: 'Releases',
    href: '/releases/agent-releases',
    external: false,
  },
  {
    name: 'Licensing',
    href: '/licensing/overview',
    external: false,
  },
];

/**
 * Footer links
 * Displayed at the bottom of the mega menu
 */
export const footerLinks: FooterLink[] = [
  {
    name: 'Moderne Website',
    href: 'https://www.moderne.io',
    external: true,
  },
  {
    name: 'Go to App',
    href: 'https://app.moderne.io',
    external: true,
  },
  {
    name: 'OpenRewrite Docs',
    href: 'https://docs.openrewrite.org',
    external: true,
  },
];
