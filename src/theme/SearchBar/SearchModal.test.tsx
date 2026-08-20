import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import type { PagefindApi } from './pagefind';

/** Renders the modal against a stub index, covering wiring ./pagefind.test.ts can't reach. */

const loadPagefind = vi.fn();
vi.mock('./pagefind', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./pagefind')>()),
  loadPagefind: () => loadPagefind(),
}));

const { default: SearchModal } = await import('./SearchModal');

type Page = {
  url: string;
  title: string;
  section: string;
  recipeId?: string;
  headings?: string[];
};

const PAGES: Page[] = [
  {
    url: '/platform/agent/',
    title: 'Configuring the agent',
    section: 'Platform',
    headings: ['Generate a key', 'Start the agent'],
  },
  { url: '/platform/devcenter/', title: 'DevCenter', section: 'Platform' },
  {
    url: '/recipes/upgrade/',
    title: 'Upgrade to Java 21',
    section: 'Recipes',
    recipeId: 'org.openrewrite.java.migrate.UpgradeToJava21',
  },
];

let requestedFilters: unknown;

function stubApi(pages: Page[] = PAGES): PagefindApi {
  return {
    options: async () => undefined,
    search: async (_query, options) => {
      requestedFilters = options?.filters;
      const category = options?.filters?.category?.[0];
      const matching = category
        ? pages.filter((page) => (category === 'recipes') === page.section.startsWith('Recipes'))
        : pages;
      return {
        unfilteredResultCount: pages.length,
        results: matching.map((page, index) => ({
          id: `r${index}`,
          score: 1,
          data: async () => ({
            url: page.url,
            excerpt: `about <mark>agent</mark> things`,
            meta: { title: page.title, section: page.section, recipeId: page.recipeId },
            filters: {},
            sub_results: [
              { title: page.title, url: page.url, excerpt: '' },
              ...(page.headings ?? []).map((heading) => ({
                title: heading,
                url: `${page.url}#${heading.toLowerCase().replace(/\s/g, '-')}`,
                excerpt: 'heading excerpt',
                anchor: { element: 'h2', id: 'x', text: heading, location: 0 },
              })),
            ],
          }),
        })),
      };
    },
  };
}

function open() {
  return render(<SearchModal onClose={() => undefined} initialScrollY={0} />);
}

const input = () => screen.getByRole('combobox');
const rows = () => Array.from(document.querySelectorAll('.DocSearch-Hit'));
const selectedRow = () => document.querySelector('.DocSearch-Hit[aria-selected="true"]');

async function type(text: string) {
  fireEvent.change(input(), { target: { value: text } });
  await waitFor(() => expect(rows().length).toBeGreaterThan(0));
}

beforeEach(() => {
  window.localStorage.clear();
  requestedFilters = undefined;
  loadPagefind.mockReset();
  loadPagefind.mockResolvedValue(stubApi());
});

describe('SearchModal', () => {
  it('renders the DocSearch shell the vendored stylesheet targets', () => {
    open();
    expect(document.querySelector('.DocSearch-Container .DocSearch-Modal')).toBeTruthy();
    expect(document.querySelector('.DocSearch-SearchBar .DocSearch-Form')).toBeTruthy();
    expect(document.querySelector('.DocSearch-Footer .DocSearch-Commands')).toBeTruthy();
  });

  it('opens with no dropdown until there is something to show', () => {
    open();
    expect(document.querySelector('.DocSearch-Dropdown')).toBeNull();
  });

  it('groups results by section and nests headings under their page', async () => {
    open();
    await type('agent');

    const sections = Array.from(document.querySelectorAll('.DocSearch-Hit-source')).map(
      (node) => node.textContent,
    );
    expect(sections).toEqual(['Platform']);

    const [first, ...children] = rows();
    expect(first!.querySelector('.DocSearch-Hit-title')?.textContent).toBe(
      'Configuring the agent',
    );
    expect(first!.classList.contains('DocSearch-Hit--Child')).toBe(false);
    expect(children[0]!.classList.contains('DocSearch-Hit--Child')).toBe(true);
    expect(children[0]!.querySelector('.DocSearch-Hit-title')?.textContent).toBe(
      'Generate a key',
    );
  });

  it('starts on the Documentation tab and re-queries when the tab changes', async () => {
    open();
    await type('agent');
    expect(requestedFilters).toEqual({ category: ['documentation'] });

    fireEvent.click(screen.getByRole('tab', { name: 'Recipes' }));
    await waitFor(() => expect(requestedFilters).toEqual({ category: ['recipes'] }));
    await waitFor(() =>
      expect(document.querySelector('.DocSearch-Hit-title')?.textContent).toBe(
        'Upgrade to Java 21',
      ),
    );

    fireEvent.click(screen.getByRole('tab', { name: 'All' }));
    await waitFor(() => expect(requestedFilters).toBeUndefined());
  });

  it('shows the recipe id under a recipe result', async () => {
    open();
    await type('agent');
    fireEvent.click(screen.getByRole('tab', { name: 'Recipes' }));

    await waitFor(() =>
      expect(document.querySelector('.DocSearch-Hit-path')?.textContent).toBe(
        'org.openrewrite.java.migrate.UpgradeToJava21',
      ),
    );
  });

  it('moves the selection with the arrow keys and wraps around', async () => {
    open();
    await type('agent');

    expect(selectedRow()).toBe(rows()[0]);

    fireEvent.keyDown(input(), { key: 'ArrowDown' });
    expect(selectedRow()).toBe(rows()[1]);

    fireEvent.keyDown(input(), { key: 'ArrowUp' });
    fireEvent.keyDown(input(), { key: 'ArrowUp' });
    expect(selectedRow()).toBe(rows()[rows().length - 1]);
  });

  it('remembers an opened result and offers it again on the next visit', async () => {
    const { unmount } = open();
    await type('agent');
    fireEvent.click(within(rows()[0] as HTMLElement).getByRole('link'));
    unmount();

    open();
    const recent = document.querySelector('.DocSearch-Hit-source');
    expect(recent?.textContent).toBe('Recent');
    expect(document.querySelector('.DocSearch-Hit-title')?.textContent).toBe(
      'Configuring the agent',
    );
    // Stored rows re-render as plain text, without stale highlighting.
    expect(document.querySelector('.DocSearch-Hit-title mark')).toBeNull();
  });

  it('says so when nothing matched', async () => {
    loadPagefind.mockResolvedValue(stubApi([]));
    open();
    fireEvent.change(input(), { target: { value: 'nothing' } });

    await waitFor(() => expect(document.querySelector('.DocSearch-NoResults')).toBeTruthy());
    expect(document.querySelector('.DocSearch-NoResults')?.textContent).toContain('nothing');
  });

  it('explains an unreachable index instead of showing an empty result list', async () => {
    loadPagefind.mockRejectedValue(new Error('404'));
    open();
    fireEvent.change(input(), { target: { value: 'agent' } });

    await waitFor(() => expect(document.querySelector('.DocSearch-ErrorScreen')).toBeTruthy());
    expect(document.querySelector('.DocSearch-ErrorScreen')?.textContent).toContain(
      'has not been built',
    );
  });
});
