import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, { translate } from '@docusaurus/Translate';
import {
  HtmlClassNameProvider,
  PageMetadata,
  usePluralForm,
  useSearchQueryString,
} from '@docusaurus/theme-common';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import { loadPagefind, type PagefindApi } from '@site/src/theme/SearchBar/pagefind';
import styles from './search.module.css';

/** The full results page, replacing the one `@docusaurus/theme-search-algolia` provided. */

/** Results appended per batch as the reader scrolls. */
const PAGE_SIZE = 20;

type ResultItem = {
  url: string;
  title: string;
  section: string;
  /** Recipe pages only; what distinguishes results that share a display name. */
  recipeId: string;
  excerpt: string;
};

type PagefindPageResult = {
  data: () => Promise<{
    url: string;
    excerpt: string;
    meta: Record<string, string | undefined>;
  }>;
};

function useDocumentsFoundPlural() {
  const { selectMessage } = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.SearchPage.documentsFound.plurals',
          description:
            'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One document found|{count} documents found',
        },
        { count },
      ),
    );
}

function getSearchPageTitle(searchQuery: string): string {
  return searchQuery
    ? translate(
        {
          id: 'theme.SearchPage.existingResultsTitle',
          message: 'Search results for "{query}"',
          description: 'The search page title for non-empty query',
        },
        { query: searchQuery },
      )
    : translate({
        id: 'theme.SearchPage.emptyResultsTitle',
        message: 'Search the documentation',
        description: 'The search page title for empty query',
      });
}

function SearchPageContent(): ReactNode {
  const baseUrl = useBaseUrl('/');
  const documentsFoundPlural = useDocumentsFoundPlural();
  const [searchQuery, setSearchQuery] = useSearchQueryString();
  const pageTitle = getSearchPageTitle(searchQuery);

  const [items, setItems] = useState<ResultItem[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  // Held unresolved: Pagefind defers each page's content behind `data()`, so only scrolled-to batches are fetched.
  const pendingRef = useRef<PagefindPageResult[]>([]);
  const [loaderRef, setLoaderRef] = useState<HTMLDivElement | null>(null);

  const appendNextBatch = useCallback(async () => {
    const batch = pendingRef.current.splice(0, PAGE_SIZE);
    if (batch.length === 0) {
      return;
    }
    const pages = await Promise.all(batch.map((result) => result.data()));
    setItems((current) => [
      ...current,
      ...pages.map((page) => ({
        url: page.url,
        title: page.meta.title?.trim() || page.url,
        section: page.meta.section?.trim() ?? '',
        recipeId: page.meta.recipeId?.trim() ?? '',
        excerpt: page.excerpt,
      })),
    ]);
  }, []);

  useEffect(() => {
    let cancelled = false;

    setItems([]);
    setTotalResults(0);
    setFailed(false);
    pendingRef.current = [];

    if (!searchQuery) {
      return undefined;
    }

    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const api: PagefindApi = await loadPagefind(baseUrl);
        const response = await api.search(searchQuery);
        if (cancelled) {
          return;
        }
        pendingRef.current = response.results as unknown as PagefindPageResult[];
        setTotalResults(response.results.length);
        await appendNextBatch();
      } catch {
        if (!cancelled) {
          setFailed(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }, 300);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [appendNextBatch, baseUrl, searchQuery]);

  const hasMore = items.length > 0 && items.length < totalResults;

  useEffect(() => {
    if (!loaderRef || !hasMore || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          void appendNextBatch();
        }
      },
      { threshold: 1 },
    );
    observer.observe(loaderRef);
    return () => observer.disconnect();
  }, [appendNextBatch, hasMore, loaderRef]);

  const resultsSummary = useMemo(
    () => (totalResults > 0 ? documentsFoundPlural(totalResults) : null),
    [documentsFoundPlural, totalResults],
  );

  return (
    <Layout>
      <PageMetadata title={pageTitle} />

      <Head>
        {/* Search pages shouldn't be indexed; see docusaurus#3233. */}
        <meta property="robots" content="noindex, follow" />
      </Head>

      <div className="container margin-vert--lg">
        <Heading as="h1">{pageTitle}</Heading>

        <form className="row" onSubmit={(event) => event.preventDefault()}>
          <div className={clsx('col', 'col--12', styles.searchQueryColumn)}>
            <input
              type="search"
              name="q"
              className={styles.searchQueryInput}
              placeholder={translate({
                id: 'theme.SearchPage.inputPlaceholder',
                message: 'Type your search here',
                description: 'The placeholder for search page input',
              })}
              aria-label={translate({
                id: 'theme.SearchPage.inputLabel',
                message: 'Search',
                description: 'The ARIA label for search page input',
              })}
              onChange={(event) => setSearchQuery(event.target.value)}
              value={searchQuery}
              autoComplete="off"
              autoFocus
            />
          </div>
        </form>

        <div className="row">
          <div className={clsx('col', 'col--12', styles.searchResultsColumn)}>{resultsSummary}</div>
        </div>

        {items.length > 0 ? (
          <main>
            {items.map((item) => (
              <article key={item.url} className={styles.searchResultItem}>
                <Heading as="h2" className={styles.searchResultItemHeading}>
                  <Link to={item.url}>{item.title}</Link>
                </Heading>

                {(item.section || item.recipeId) && (
                  <nav aria-label="breadcrumbs">
                    <ul className={clsx('breadcrumbs', styles.searchResultItemPath)}>
                      {item.section && <li className="breadcrumbs__item">{item.section}</li>}
                      {item.recipeId && (
                        <li className="breadcrumbs__item">
                          <code className={styles.searchResultItemRecipeId}>{item.recipeId}</code>
                        </li>
                      )}
                    </ul>
                  </nav>
                )}

                {item.excerpt && (
                  <p
                    className={styles.searchResultItemSummary}
                    // Pagefind escapes excerpts, emitting only its own <mark>.
                    dangerouslySetInnerHTML={{ __html: item.excerpt }}
                  />
                )}
              </article>
            ))}
          </main>
        ) : (
          <>
            {failed && (
              <p>
                <Translate
                  id="theme.SearchPage.indexUnavailable"
                  description="Shown when the search index could not be loaded">
                  The search index is unavailable. If you are running the site locally, build it
                  once with `yarn build` to generate the index.
                </Translate>
              </p>
            )}
            {searchQuery && !loading && !failed && (
              <p>
                <Translate
                  id="theme.SearchPage.noResultsText"
                  description="The paragraph for empty search result">
                  No results were found
                </Translate>
              </p>
            )}
            {loading && <div className={styles.loadingSpinner} />}
          </>
        )}

        {hasMore && (
          <div className={styles.loader} ref={setLoaderRef}>
            <Translate
              id="theme.SearchPage.fetchingNewResults"
              description="The paragraph for fetching new search results">
              Fetching new results...
            </Translate>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default function SearchPage(): ReactNode {
  return (
    <HtmlClassNameProvider className="search-page-wrapper">
      <SearchPageContent />
    </HtmlClassNameProvider>
  );
}
