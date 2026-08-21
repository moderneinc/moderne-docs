import { describe, expect, it } from 'vitest';
import { search, type PagefindApi } from './pagefind';

/** Covers the translation from Pagefind's page-shaped results into the modal's row list. */

type PageFixture = {
  url: string;
  excerpt?: string;
  title?: string;
  section?: string;
  recipeId?: string;
  subResults?: { title: string; url: string; anchorId?: string; excerpt?: string }[];
};

function fakeApi(pages: PageFixture[], captured?: { filters?: unknown }): PagefindApi {
  return {
    options: async () => undefined,
    search: async (_query, options) => {
      if (captured) {
        captured.filters = options?.filters;
      }
      return {
        unfilteredResultCount: pages.length,
        results: pages.map((page, index) => ({
          id: `result-${index}`,
          score: 1,
          data: async () => ({
            url: page.url,
            excerpt: page.excerpt ?? '',
            meta: { title: page.title, section: page.section, recipeId: page.recipeId },
            filters: {},
            sub_results: (page.subResults ?? []).map((sub) => ({
              title: sub.title,
              url: sub.url,
              excerpt: sub.excerpt ?? '',
              anchor: sub.anchorId
                ? { element: 'h2', id: sub.anchorId, text: sub.title, location: 0 }
                : undefined,
            })),
          }),
        })),
      };
    },
  };
}

describe('search', () => {
  it('turns a page into a parent hit and its anchored headings into children', async () => {
    const results = await search(
      fakeApi([
        {
          url: '/guide/',
          title: 'Getting started',
          section: 'Platform',
          excerpt: 'An <mark>agent</mark> connects your SCM.',
          subResults: [
            // Pagefind repeats the page itself as the first sub-result.
            { title: 'Getting started', url: '/guide/' },
            { title: 'Install', url: '/guide/#install', anchorId: 'install' },
            { title: 'Configure', url: '/guide/#configure', anchorId: 'configure' },
          ],
        },
      ]),
      'agent',
      'all',
    );

    expect(results.hits.map((hit) => [hit.type, hit.url, hit.parentId])).toEqual([
      ['lvl1', '/guide', null],
      ['lvl2', '/guide#install', 'page-0'],
      ['lvl2', '/guide#configure', 'page-0'],
    ]);
    // Only the final heading closes off the tree elbow.
    expect(results.hits.map((hit) => hit.isLastChild)).toEqual([false, false, true]);
    expect(results.hits[0]!.pathHtml).toBe('An <mark>agent</mark> connects your SCM.');
  });

  it('strips the trailing slash so URLs match the routes Docusaurus registers', async () => {
    const results = await search(fakeApi([{ url: '/a/b/', title: 'B' }]), 'b', 'all');
    expect(results.hits[0]!.url).toBe('/a/b');
  });

  it('keeps the root URL intact', async () => {
    const results = await search(fakeApi([{ url: '/', title: 'Home' }]), 'home', 'all');
    expect(results.hits[0]!.url).toBe('/');
  });

  it('highlights query terms in titles and escapes the rest', async () => {
    const results = await search(
      fakeApi([{ url: '/x/', title: 'Recipes & <scripts>' }]),
      'recipes',
      'all',
    );
    expect(results.hits[0]!.titleHtml).toBe('<mark>Recipes</mark> &amp; &lt;scripts&gt;');
  });

  it('ignores single-character terms, which would highlight almost everything', async () => {
    const results = await search(fakeApi([{ url: '/x/', title: 'Agent' }]), 'a', 'all');
    expect(results.hits[0]!.titleHtml).toBe('Agent');
  });

  it('drops the zero-width space Docusaurus puts in heading anchors', async () => {
    const results = await search(
      fakeApi([
        {
          url: '/x/',
          title: 'X',
          subResults: [{ title: 'Prerequisites​', url: '/x/#pre', anchorId: 'pre' }],
        },
      ]),
      'prerequisites',
      'all',
    );
    expect(results.hits[1]!.title).toBe('Prerequisites');
  });

  it('identifies a recipe by its id rather than its shared display name', async () => {
    // Both are called "Module has dependency", with identical boilerplate excerpts.
    const results = await search(
      fakeApi([
        {
          url: '/recipes/gradle/',
          title: 'Module has dependency',
          excerpt: 'mod run . --recipe <mark>ModuleHasDependency</mark>',
          recipeId: 'org.openrewrite.gradle.search.ModuleHasDependency',
        },
        {
          url: '/recipes/maven/',
          title: 'Module has dependency',
          excerpt: 'mod run . --recipe <mark>ModuleHasDependency</mark>',
          recipeId: 'org.openrewrite.maven.search.ModuleHasDependency',
        },
      ]),
      'modulehasdependency',
      'recipes',
    );

    expect(results.hits.map((hit) => hit.pathHtml)).toEqual([
      'org.openrewrite.gradle.search.<mark>ModuleHasDependency</mark>',
      'org.openrewrite.maven.search.<mark>ModuleHasDependency</mark>',
    ]);
  });

  it('keeps the excerpt on pages that have no recipe id', async () => {
    const results = await search(
      fakeApi([{ url: '/guide/', title: 'Guide', excerpt: 'some <mark>context</mark>' }]),
      'context',
      'all',
    );
    expect(results.hits[0]!.pathHtml).toBe('some <mark>context</mark>');
  });

  it('groups hits by section, keeping the best-ranked section first', async () => {
    const results = await search(
      fakeApi([
        { url: '/a/', title: 'A', section: 'Platform' },
        { url: '/b/', title: 'B', section: 'Recipes' },
        // Joins the existing group rather than opening a duplicate heading.
        { url: '/c/', title: 'C', section: 'Platform' },
      ]),
      'x',
      'all',
    );

    expect(results.groups.map((group) => group.section)).toEqual(['Platform', 'Recipes']);
    expect(results.groups[0]!.hits.map((hit) => hit.title)).toEqual(['A', 'C']);
  });

  it('falls back to a generic section when a page has no breadcrumb', async () => {
    const results = await search(fakeApi([{ url: '/a/', title: 'A' }]), 'a', 'all');
    expect(results.groups[0]!.section).toBe('Documentation');
  });

  it('reports the total match count, not the truncated set', async () => {
    const pages = Array.from({ length: 25 }, (_, index) => ({
      url: `/p${index}/`,
      title: `Page ${index}`,
    }));
    const results = await search(fakeApi(pages), 'page', 'all');

    expect(results.totalPages).toBe(25);
    expect(results.hits).toHaveLength(8);
  });

  it('sends the matching category filter for each tab', async () => {
    const captured: { filters?: unknown } = {};

    await search(fakeApi([], captured), 'x', 'all');
    expect(captured.filters).toBeUndefined();

    await search(fakeApi([], captured), 'x', 'documentation');
    expect(captured.filters).toEqual({ category: ['documentation'] });

    await search(fakeApi([], captured), 'x', 'recipes');
    expect(captured.filters).toEqual({ category: ['recipes'] });
  });
});
