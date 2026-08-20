import type { SearchTab } from './SearchFacetTabs';

/** Maps Pagefind's page + `sub_results` shape onto DocSearch's page row + indented heading rows. */

/** Where the generated bundle is served from, relative to the site baseUrl. */
const PAGEFIND_BUNDLE_PATH = 'pagefind/pagefind.js';

/** Pages shown per query, and headings shown beneath each. */
const MAX_PAGES = 8;
const MAX_HEADINGS_PER_PAGE = 3;

type PagefindAnchor = { element: string; id: string; text?: string; location: number };

type PagefindSubResult = {
  title: string;
  url: string;
  excerpt: string;
  anchor?: PagefindAnchor;
};

type PagefindDocument = {
  url: string;
  excerpt: string;
  meta: Record<string, string | undefined>;
  filters: Record<string, string[]>;
  sub_results: PagefindSubResult[];
};

type PagefindResult = {
  id: string;
  score: number;
  data: () => Promise<PagefindDocument>;
};

type PagefindResponse = {
  results: PagefindResult[];
  unfilteredResultCount: number;
};

export type PagefindApi = {
  options: (options: Record<string, unknown>) => Promise<void>;
  search: (
    query: string | null,
    options?: { filters?: Record<string, string[]> },
  ) => Promise<PagefindResponse>;
  destroy?: () => Promise<void>;
};

/** A single row in the results list. */
export type SearchHit = {
  objectID: string;
  url: string;
  /** The page or heading title, as plain text. */
  title: string;
  /** Pre-highlighted HTML of `title`. */
  titleHtml: string;
  /** Pre-highlighted HTML rendered beneath the title, if there is one. */
  pathHtml: string | null;
  /** Drives the leading icon, as DocSearch's `type` did. */
  type: 'lvl1' | 'lvl2';
  /** The group heading this hit sits under. */
  section: string;
  /** Set on heading rows; the page row they belong to. */
  parentId: string | null;
  /** Whether this is the final heading row of its page, for the tree elbow. */
  isLastChild: boolean;
};

export type SearchHitGroup = {
  section: string;
  hits: SearchHit[];
};

export type SearchResults = {
  groups: SearchHitGroup[];
  /** Every hit in render order, for arrow-key navigation. */
  hits: SearchHit[];
  /** Total matches, not the truncated set; the footer count. */
  totalPages: number;
};

export const EMPTY_RESULTS: SearchResults = { groups: [], hits: [], totalPages: 0 };

/** The bundle couldn't be fetched, which usually means the site has never been built. */
class PagefindUnavailableError extends Error {
  constructor(cause: unknown) {
    super('The Pagefind index could not be loaded.');
    this.name = 'PagefindUnavailableError';
    this.cause = cause;
  }
}

let apiPromise: Promise<PagefindApi> | null = null;

/** Loads the Pagefind bundle once per page load. */
export function loadPagefind(baseUrl: string): Promise<PagefindApi> {
  apiPromise ??= (async () => {
    const bundleUrl = `${baseUrl}${PAGEFIND_BUNDLE_PATH}`;
    try {
      // Opaque to rspack: the bundle is a build artifact, so a bare import(url) would fail to resolve at build time.
      const importBundle = new Function('url', 'return import(url)') as (
        url: string,
      ) => Promise<PagefindApi>;
      const api = await importBundle(bundleUrl);
      // `baseUrl` prefixes the build-root-relative paths; `excerptLength` fits the row's one line.
      await api.options({ baseUrl, excerptLength: 25 });
      return api;
    } catch (error) {
      // Uncached, so a dev server that gains an index starts working without a reload.
      apiPromise = null;
      throw new PagefindUnavailableError(error);
    }
  })();

  return apiPromise;
}

/** Pagefind filter values, matching what src/theme/DocItem/Content tags pages with. */
function filtersForTab(tab: SearchTab): Record<string, string[]> | undefined {
  switch (tab) {
    case 'documentation':
      return { category: ['documentation'] };
    case 'recipes':
      return { category: ['recipes'] };
    default:
      return undefined;
  }
}

export async function search(
  api: PagefindApi,
  query: string,
  tab: SearchTab,
): Promise<SearchResults> {
  const response = await api.search(query, { filters: filtersForTab(tab) });
  const pages = await Promise.all(response.results.slice(0, MAX_PAGES).map((result) => result.data()));

  const hits: SearchHit[] = [];
  const terms = queryTerms(query);

  pages.forEach((page, pageIndex) => {
    const section = cleanTitle(page.meta.section) || 'Documentation';
    const title = cleanTitle(page.meta.title) || page.url;
    const pageId = `page-${pageIndex}`;

    // Recipes share display names and generated excerpts across languages, so only the id tells them apart.
    const recipeId = cleanTitle(page.meta.recipeId);

    hits.push({
      objectID: pageId,
      url: normalizeUrl(page.url),
      title,
      titleHtml: highlight(title, terms),
      pathHtml: recipeId ? highlight(recipeId, terms) : page.excerpt || null,
      type: 'lvl1',
      section,
      parentId: null,
      isLastChild: false,
    });

    // The unanchored first sub-result is the page itself, already the row above.
    const headings = page.sub_results
      .filter((sub) => sub.anchor?.id)
      .slice(0, MAX_HEADINGS_PER_PAGE);

    headings.forEach((heading, headingIndex) => {
      hits.push({
        objectID: `${pageId}-heading-${headingIndex}`,
        url: normalizeUrl(heading.url),
        title: cleanTitle(heading.title),
        titleHtml: highlight(cleanTitle(heading.title), terms),
        pathHtml: heading.excerpt || null,
        type: 'lvl2',
        section,
        parentId: pageId,
        isLastChild: headingIndex === headings.length - 1,
      });
    });
  });

  return { groups: groupBySection(hits), hits, totalPages: response.results.length };
}

/** Buckets hits by section in rank order, without repeating a heading further down. */
function groupBySection(hits: SearchHit[]): SearchHitGroup[] {
  const groups: SearchHitGroup[] = [];
  const bySection = new Map<string, SearchHitGroup>();

  for (const hit of hits) {
    let group = bySection.get(hit.section);
    if (!group) {
      group = { section: hit.section, hits: [] };
      bySection.set(hit.section, group);
      groups.push(group);
    }
    group.hits.push(hit);
  }

  return groups;
}

function normalizeUrl(url: string): string {
  const [pathname, hash] = splitHash(url);
  // The trailing slash Pagefind leaves behind doesn't match Docusaurus's routes.
  const trimmed = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  return `${trimmed || '/'}${hash}`;
}

function splitHash(url: string): [string, string] {
  const index = url.indexOf('#');
  return index === -1 ? [url, ''] : [url.slice(0, index), url.slice(index)];
}

/** Drops the zero-width space Docusaurus's heading hash-links contribute. */
function cleanTitle(value: string | undefined): string {
  return value?.replace(/\u200b/g, '').trim() ?? '';
}

/** Single characters match too much to be worth highlighting. */
function queryTerms(query: string): string[] {
  return query
    .split(/\s+/)
    .map((term) => term.trim())
    .filter((term) => term.length > 1);
}

/** Marks up query terms in a title, which Pagefind returns unhighlighted; escapes for HTML injection. */
function highlight(text: string, terms: string[]): string {
  if (terms.length === 0) {
    return escapeHtml(text);
  }

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'gi');

  return text
    .split(pattern)
    .map((part, index) =>
      // split() with a capture group alternates non-match, match, non-match.
      index % 2 === 1 ? `<mark>${escapeHtml(part)}</mark>` : escapeHtml(part),
    )
    .join('');
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
