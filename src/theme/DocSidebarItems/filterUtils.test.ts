import { describe, it, expect } from 'vitest';
import { filterSidebarItemsByContext } from './filterUtils';
import type { PropSidebarItem, PropSidebarItemCategory } from '@docusaurus/plugin-content-docs';

// Mock sidebar structure matching the actual sidebars.ts
const mockSidebarItems: PropSidebarItem[] = [
  // User Documentation - Moderne Platform (flat structure)
  {
    type: 'category',
    label: 'Platform',
    href: '/user-documentation/moderne-platform',
    customProps: { gemIcon: 'clear-block', featured: true },
    items: [
      {
        type: 'category',
        label: 'Getting started',
        href: '/user-documentation/moderne-platform/getting-started',
        items: [
          {
            type: 'link',
            label: 'Running your first recipe',
            href: '/user-documentation/moderne-platform/getting-started/running-your-first-recipe',
          },
        ],
      },
      {
        type: 'category',
        label: 'How to guides',
        href: '/user-documentation/moderne-platform/how-to-guides',
        items: [
          {
            type: 'link',
            label: 'Recipe builder',
            href: '/user-documentation/moderne-platform/how-to-guides/new-recipe-builder',
          },
        ],
      },
      // Platform includes a link to Administrator Documentation
      // This tests that exact href matches are prioritized
      {
        type: 'link',
        label: 'Administrator documentation',
        href: '/administrator-documentation',
      },
    ],
  } as PropSidebarItemCategory,

  // User Documentation - CLI (flat structure)
  {
    type: 'category',
    label: 'CLI',
    href: '/user-documentation/moderne-cli',
    customProps: { gemIcon: 'blue-block', featured: true },
    items: [
      {
        type: 'category',
        label: 'Getting started',
        href: '/user-documentation/moderne-cli/getting-started',
        items: [
          {
            type: 'link',
            label: 'CLI intro',
            href: '/user-documentation/moderne-cli/getting-started/cli-intro',
          },
        ],
      },
    ],
  } as PropSidebarItemCategory,

  // Administrator Documentation (nested structure)
  {
    type: 'category',
    label: 'Administrator Documentation',
    href: '/administrator-documentation',
    items: [
      {
        type: 'category',
        label: 'Moderne Platform',
        href: '/administrator-documentation/moderne-platform',
        items: [
          {
            type: 'category',
            label: 'Getting started',
            href: '/administrator-documentation/moderne-platform/getting-started',
            items: [
              {
                type: 'link',
                label: 'Admin pages',
                href: '/administrator-documentation/moderne-platform/getting-started/admin-pages',
              },
            ],
          },
          {
            type: 'category',
            label: 'How to guides',
            href: '/administrator-documentation/moderne-platform/how-to-guides',
            items: [
              {
                type: 'link',
                label: 'Mass ingest',
                href: '/administrator-documentation/moderne-platform/how-to-guides/mass-ingest',
              },
              {
                type: 'category',
                label: 'Moderne Agent',
                href: '/administrator-documentation/moderne-platform/agent-configuration',
                items: [
                  {
                    type: 'link',
                    label: 'Agent config',
                    href: '/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-config',
                  },
                ],
              },
            ],
          },
          {
            type: 'category',
            label: 'References',
            href: '/administrator-documentation/moderne-platform/references',
            items: [
              {
                type: 'link',
                label: 'Authentication',
                href: '/administrator-documentation/moderne-platform/references/authentication',
              },
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'DX',
        href: '/administrator-documentation/moderne-dx',
        items: [
          {
            type: 'category',
            label: 'How to guides',
            href: '/administrator-documentation/moderne-dx/how-to-guides',
            items: [
              {
                type: 'link',
                label: 'Mass ingest and run DX',
                href: '/administrator-documentation/moderne-dx/how-to-guides/mass-ingest-and-run-dx',
              },
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'Shared references',
        href: '/administrator-documentation/references',
        items: [
          {
            type: 'link',
            label: 'FAQ',
            href: '/administrator-documentation/references/faq',
          },
        ],
      },
    ],
  } as PropSidebarItemCategory,
];

describe('filterSidebarItemsByContext', () => {
  describe('Root level (depth 0)', () => {
    it('should return empty sidebar for root path', () => {
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/',
        0,
        [],
        null
      );

      expect(result).toEqual([]);
    });
  });

  describe('Full sidebar structure test', () => {
    it('should NOT return the full sidebar at /administrator-documentation', () => {
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/administrator-documentation',
        1,
        ['administrator-documentation'],
        null
      );

      // Should NOT include Platform (user-facing product)
      const hasPlatform = result.some(item =>
        item.type === 'category' && item.label === 'Platform'
      );
      expect(hasPlatform).toBe(false);

      // Should NOT include CLI
      const hasCLI = result.some(item =>
        item.type === 'category' && item.label === 'CLI'
      );
      expect(hasCLI).toBe(false);

      // Should have the header as first item
      expect(result[0]?.type).toBe('html');
      expect(result[0]?.value).toContain('Administrator Documentation');

      // Should only have Admin Documentation subsections
      expect(result.length).toBeLessThan(10); // Not the full sidebar (which has 15+ items)
    });
  });

  describe('User Documentation (flat structure)', () => {
    it('should show Platform tree when on /user-documentation/moderne-platform', () => {
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/user-documentation/moderne-platform',
        2,
        ['user-documentation', 'moderne-platform'],
        null
      );

      expect(result.length).toBeGreaterThan(0);
      expect(result[0].type).toBe('html'); // Header
      expect(result[0].value).toContain('Platform');

      // Should include the category items
      expect(result.some(item =>
        item.type === 'category' && item.label === 'Getting started'
      )).toBe(true);
    });

    it('should show Platform tree when deep in Platform section', () => {
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/user-documentation/moderne-platform/getting-started/running-your-first-recipe',
        4,
        ['user-documentation', 'moderne-platform', 'getting-started', 'running-your-first-recipe'],
        null
      );

      expect(result.length).toBeGreaterThan(0);
      expect(result[0].value).toContain('Platform');
    });

    it('should show CLI tree when on /user-documentation/moderne-cli', () => {
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/user-documentation/moderne-cli',
        2,
        ['user-documentation', 'moderne-cli'],
        null
      );

      expect(result.length).toBeGreaterThan(0);
      expect(result[0].value).toContain('CLI');
    });
  });

  describe('Administrator Documentation (nested structure)', () => {
    it('should show Administrator Documentation sections when on /administrator-documentation', () => {
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/administrator-documentation',
        1,
        ['administrator-documentation'],
        null
      );

      // EXPECTED: Should show header + the three subsections (Platform, DX, Shared references)
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].type).toBe('html');
      expect(result[0].value).toContain('Administrator Documentation');

      // Should show the subsections as collapsed (not auto-expanded)
      // They only expand when you navigate into them
      const platformCategory = result.find(item =>
        item.type === 'category' && item.label === 'Moderne Platform'
      );
      expect(platformCategory).toBeDefined();
      expect(platformCategory?.collapsed).toBe(true);
    });

    it('should show Moderne Platform tree when on /administrator-documentation/moderne-platform', () => {
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/administrator-documentation/moderne-platform',
        2,
        ['administrator-documentation', 'moderne-platform'],
        null
      );

      // EXPECTED: Should show "Moderne Platform" header followed by its tree
      // (Getting started, How to guides, References)
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].type).toBe('html');
      expect(result[0].value).toContain('Moderne Platform');

      // Should include Getting started, How to guides, References
      const hasGettingStarted = result.some(item =>
        item.type === 'category' && item.label === 'Getting started'
      );
      const hasHowToGuides = result.some(item =>
        item.type === 'category' && item.label === 'How to guides'
      );
      const hasReferences = result.some(item =>
        item.type === 'category' && item.label === 'References'
      );

      expect(hasGettingStarted).toBe(true);
      expect(hasHowToGuides).toBe(true);
      expect(hasReferences).toBe(true);
    });

    it('should show Moderne Platform tree when deep in Platform section', () => {
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/administrator-documentation/moderne-platform/getting-started/admin-pages',
        4,
        ['administrator-documentation', 'moderne-platform', 'getting-started', 'admin-pages'],
        null
      );

      // Should still show the Platform tree, not drill down further
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].value).toContain('Moderne Platform');
    });

    it('should show DX tree when on /administrator-documentation/moderne-dx', () => {
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/administrator-documentation/moderne-dx',
        2,
        ['administrator-documentation', 'moderne-dx'],
        null
      );

      expect(result.length).toBeGreaterThan(0);
      expect(result[0].value).toContain('DX');

      const hasHowToGuides = result.some(item =>
        item.type === 'category' && item.label === 'How to guides'
      );
      expect(hasHowToGuides).toBe(true);
    });
  });

  describe('Auto-expand state', () => {
    it('should expand categories in the current path', () => {
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/user-documentation/moderne-platform/getting-started/running-your-first-recipe',
        4,
        ['user-documentation', 'moderne-platform', 'getting-started', 'running-your-first-recipe'],
        null
      );

      // Find the Getting started category
      const gettingStarted = result.find(item =>
        item.type === 'category' && item.label === 'Getting started'
      );

      expect(gettingStarted?.collapsed).toBe(false);
    });

    it('should collapse categories not in the current path', () => {
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/user-documentation/moderne-platform/getting-started/running-your-first-recipe',
        4,
        ['user-documentation', 'moderne-platform', 'getting-started', 'running-your-first-recipe'],
        null
      );

      // Find the How to guides category (not in path)
      const howToGuides = result.find(item =>
        item.type === 'category' && item.label === 'How to guides'
      );

      expect(howToGuides?.collapsed).toBe(true);
    });
  });

  describe('Edge cases', () => {
    it('should handle trailing slashes in paths', () => {
      const result1 = filterSidebarItemsByContext(
        mockSidebarItems,
        '/user-documentation/moderne-platform',
        2,
        ['user-documentation', 'moderne-platform'],
        null
      );

      const result2 = filterSidebarItemsByContext(
        mockSidebarItems,
        '/user-documentation/moderne-platform/',
        2,
        ['user-documentation', 'moderne-platform'],
        null
      );

      expect(result1.length).toBe(result2.length);
      expect(result1[0].value).toBe(result2[0].value);
    });

    it('should return empty array for unknown paths', () => {
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/nonexistent-path',
        1,
        ['nonexistent-path'],
        null
      );

      expect(result).toEqual([]);
    });

    it('should prioritize exact href matches over links to the path', () => {
      // CRITICAL: Platform category contains a link to /administrator-documentation
      // When navigating to /administrator-documentation, we should get the
      // Administrator Documentation category, NOT Platform
      const result = filterSidebarItemsByContext(
        mockSidebarItems,
        '/administrator-documentation',
        1,
        ['administrator-documentation'],
        null
      );

      // Should return Administrator Documentation, not Platform
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].type).toBe('html');
      expect(result[0].value).toContain('Administrator Documentation');
      expect(result[0].value).not.toContain('Platform');

      // Verify it's the Admin Documentation sections
      const hasPlatformSubsection = result.some(item =>
        item.type === 'category' && item.label === 'Moderne Platform'
      );
      expect(hasPlatformSubsection).toBe(true);
    });
  });
});
