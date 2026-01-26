/**
 * Navigation Configuration - Hybrid Approach
 *
 * This file uses a hybrid data strategy:
 * - Products are derived from sidebars.ts (single source of truth)
 * - Learning items, footer links, and external nav links remain static here
 *
 * Benefits:
 * - Product metadata automatically stays in sync with sidebar
 * - No duplication of descriptions, icons, or links
 * - Type-safe derivation from sidebar configuration
 */

import type { FooterLink, LearningItem, ProductItem } from '../components/NeoMegaMenu/types';
import { deriveProductsFromSidebars } from '../utils/deriveMegaMenuData';

/**
 * External navigation link for the primary navbar
 */
export type NavLink = {
  name: string;
  href: string;
  external?: boolean;
};

/**
 * Column for the "Start exploring" section on homepage
 */
export type StartExploringColumn = {
  title: string;
  links: NavLink[];
};

/**
 * Product documentation items - DERIVED FROM SIDEBARS.TS
 * Automatically extracts products from sidebar categories marked with customProps.megaMenu: true
 *
 * To add/modify products, update sidebars.ts instead of this file.
 */
const derivedProducts = deriveProductsFromSidebars();

/**
 * Preferred order for secondary nav (matches design)
 * Products not in this list will appear at the end
 */
const secondaryNavOrder = [
  'Platform',
  'CLI',
  'Recipes',
  'DX',
  'Moddy',
  'IDE plugins',
];

/**
 * Preferred order for homepage product cards (matches design)
 */
const homepageCardOrder = [
  'Platform',
  'DX',
  'CLI',
  'Moddy',
  'Recipes',
  'IDE plugins',
];

/**
 * Products sorted by the preferred secondary nav order
 */
export const products = [...derivedProducts].sort((a, b) => {
  const indexA = secondaryNavOrder.indexOf(a.name);
  const indexB = secondaryNavOrder.indexOf(b.name);
  // Items not in the order list go to the end
  const orderA = indexA === -1 ? secondaryNavOrder.length : indexA;
  const orderB = indexB === -1 ? secondaryNavOrder.length : indexB;
  return orderA - orderB;
});

/**
 * Products sorted for homepage card grid display
 */
export const homepageProducts = [...derivedProducts].sort((a, b) => {
  const indexA = homepageCardOrder.indexOf(a.name);
  const indexB = homepageCardOrder.indexOf(b.name);
  const orderA = indexA === -1 ? homepageCardOrder.length : indexA;
  const orderB = indexB === -1 ? homepageCardOrder.length : indexB;
  return orderA - orderB;
});

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
    name: 'IDE plugins',
    href: '/user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install',
    external: false,
  },
  {
    name: 'Code Remix',
    href: '/user-documentation/community-office-hours',
    external: false,
  },
  {
    name: 'Hands on Learning',
    href: '/hands-on-learning',
    external: false,
  },
  {
    name: 'OpenRewrite Advanced Program Analysis',
    href: '/openrewrite-advanced-program-analysis',
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

/**
 * External links for the primary navbar (right side)
 * Displayed next to search and theme toggle
 */
export const externalNavLinks: NavLink[] = [
  {
    name: 'OpenRewrite Docs',
    href: 'https://docs.openrewrite.org',
    external: true,
  },
  {
    name: 'App',
    href: 'https://app.moderne.io',
    external: true,
  },
  {
    name: 'Moderne.ai',
    href: 'https://www.moderne.ai',
    external: true,
  },
];

/**
 * Training dropdown items for secondary nav
 */
export const trainingItems: NavLink[] = [
  {
    name: 'Hands on Learning',
    href: '/hands-on-learning',
  },
  {
    name: 'OpenRewrite Advanced Program Analysis',
    href: '/openrewrite-advanced-program-analysis',
  },
  {
    name: 'Code Remix',
    href: '/user-documentation/community-office-hours',
    external: false,
  },
  {
    name: 'Upcoming live OpenRewrite training',
    href: 'https://www.moderne.ai/moderne-openrewrite-training-hub',
    external: true,
  },
];

/**
 * Releases dropdown items for secondary nav
 */
export const releasesItems: NavLink[] = [
  {
    name: 'Agent releases',
    href: '/releases/agent-releases',
  },
  {
    name: 'CLI releases',
    href: '/releases/cli-releases',
  },
  {
    name: 'Platform changelog',
    href: '/releases/changelog',
  },
  {
    name: 'CLI / DX changelog',
    href: '/releases/cli-dx',
  },
  {
    name: 'Proprietary recipe changelog',
    href: '/releases/proprietary-recipe-changelog',
  },
];

/**
 * "Start exploring" section columns for homepage
 * Organized in 3 columns: Try it out, Learning, Resources
 */
export const startExploringColumns: StartExploringColumn[] = [
  {
    title: 'Try it out',
    links: [
      {
        name: 'Free public instance',
        href: 'https://app.moderne.io/',
        external: true,
      },
      {
        name: 'Request a private team instance',
        href: 'https://www.moderne.io/demo',
        external: true,
      },
      {
        name: 'Quickstart guide',
        href: '/user-documentation/moderne-platform/getting-started/running-your-first-recipe',
      },
    ],
  },
  {
    title: 'Learning',
    links: [
      {
        name: 'Hands on Learning',
        href: '/hands-on-learning',
      },
      {
        name: 'OpenRewrite Advanced Program Analysis',
        href: '/openrewrite-advanced-program-analysis',
      },
      {
        name: 'Code Remix',
        href: '/user-documentation/community-office-hours',
        external: false,
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        name: 'Releases',
        href: '/releases/agent-releases',
      },
      {
        name: 'Licensing',
        href: '/licensing/overview',
      },
    ],
  },
];
