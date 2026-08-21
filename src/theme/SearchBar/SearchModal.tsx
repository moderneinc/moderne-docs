import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, { translate } from '@docusaurus/Translate';
import SearchFacetTabs, { type SearchTab } from './SearchFacetTabs';
import {
  EMPTY_RESULTS,
  loadPagefind,
  search,
  type SearchHit,
  type SearchHitGroup,
  type SearchResults,
} from './pagefind';
import { toSearchHit, useStoredSearches, type StoredHit } from './storedSearches';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CloseIcon,
  EnterKeyIcon,
  FavoriteIcon,
  HeadingIcon,
  LoadingIcon,
  NoResultsIcon,
  PageIcon,
  RecentIcon,
  SearchIcon,
  SelectIcon,
  TreeIcon,
} from './icons';

/** The search modal, in DocSearch's markup and class names (see ./docsearch.css) over ./pagefind results. */

/** How long typing settles before a query is issued. */
const DEBOUNCE_MS = 180;

/** How long a query runs before the spinner replaces the magnifier, so it doesn't just flash. */
const STALL_MS = 300;

type Status = 'idle' | 'loading' | 'stalled' | 'error';

type SearchModalProps = {
  onClose: () => void;
  /** Scroll position to restore behind the modal once it closes. */
  initialScrollY: number;
};

export default function SearchModal({ onClose, initialScrollY }: SearchModalProps): ReactNode {
  const baseUrl = useBaseUrl('/');
  const history = useHistory();
  const inputId = useId();
  const listboxId = useId();

  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<SearchTab>('documentation');
  const [results, setResults] = useState<SearchResults>(EMPTY_RESULTS);
  const [status, setStatus] = useState<Status>('idle');
  const [activeIndex, setActiveIndex] = useState(0);

  const stored = useStoredSearches();
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Arrow keys only; scrolling on hover would fight the pointer.
  const scrollActiveIntoView = useRef(false);

  // Lock the page behind the modal, restoring the reader's position on close.
  useEffect(() => {
    document.body.classList.add('DocSearch--active');
    return () => {
      document.body.classList.remove('DocSearch--active');
      window.scrollTo(0, initialScrollY);
    };
  }, [initialScrollY]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Mobile `100vh` includes the retracting URL bar, so measure the real viewport for `--docsearch-vh`.
  useEffect(() => {
    function setViewportHeight() {
      if (modalRef.current) {
        modalRef.current.style.setProperty('--docsearch-vh', `${window.innerHeight * 0.01}px`);
      }
    }
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);

  const trimmedQuery = query.trim();

  // The abort flag matters more than the debounce: responses can land out of order.
  useEffect(() => {
    if (trimmedQuery === '') {
      setResults(EMPTY_RESULTS);
      setStatus('idle');
      return undefined;
    }

    let cancelled = false;
    const stallTimer = setTimeout(() => {
      if (!cancelled) {
        setStatus('stalled');
      }
    }, DEBOUNCE_MS + STALL_MS);

    const debounceTimer = setTimeout(async () => {
      try {
        const api = await loadPagefind(baseUrl);
        const next = await search(api, trimmedQuery, activeTab);
        if (!cancelled) {
          setResults(next);
          setStatus('idle');
          setActiveIndex(0);
        }
      } catch {
        if (!cancelled) {
          setResults(EMPTY_RESULTS);
          setStatus('error');
        }
      }
    }, DEBOUNCE_MS);

    setStatus('loading');

    return () => {
      cancelled = true;
      clearTimeout(debounceTimer);
      clearTimeout(stallTimer);
    };
  }, [activeTab, baseUrl, trimmedQuery]);

  // Halfway down the last query's results is the wrong place to start the next.
  useEffect(() => {
    dropdownRef.current?.scrollTo({ top: 0 });
  }, [trimmedQuery, activeTab]);

  const recentHits = useMemo(() => stored.recent.map(toSearchHit), [stored.recent]);
  const favoriteHits = useMemo(() => stored.favorites.map(toSearchHit), [stored.favorites]);

  const hasHistory = recentHits.length > 0 || favoriteHits.length > 0;
  const showDropdown = trimmedQuery !== '' || hasHistory;

  // The flat list arrow keys walk, in on-screen order.
  const navigableHits = useMemo(
    () => (trimmedQuery === '' ? [...recentHits, ...favoriteHits] : results.hits),
    [favoriteHits, recentHits, results.hits, trimmedQuery],
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [navigableHits.length]);

  /** Clicks: the link navigates on its own, so only record and dismiss. */
  const selectHit = useCallback(
    (hit: SearchHit) => {
      stored.addRecent(hit);
      onClose();
    },
    [onClose, stored],
  );

  /** Enter: nothing else is going to navigate, so do it here. */
  const openHit = useCallback(
    (hit: SearchHit) => {
      selectHit(hit);
      history.push(hit.url);
    },
    [history, selectHit],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      // Escape is handled globally in ./index.tsx, which owns `isOpen`.
      if (navigableHits.length === 0) {
        return;
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        scrollActiveIntoView.current = true;
        setActiveIndex((index) => (index + 1) % navigableHits.length);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        scrollActiveIntoView.current = true;
        setActiveIndex((index) => (index - 1 + navigableHits.length) % navigableHits.length);
      } else if (event.key === 'Enter') {
        event.preventDefault();
        const hit = navigableHits[activeIndex];
        if (hit) {
          openHit(hit);
        }
      }
    },
    [activeIndex, navigableHits, openHit],
  );

  const activeHitId = navigableHits[activeIndex]
    ? `${listboxId}-${navigableHits[activeIndex]!.objectID}`
    : undefined;

  // Lets arrow keys walk past the fold; `nearest` holds still while the row is already visible.
  useEffect(() => {
    if (!scrollActiveIntoView.current) {
      return;
    }
    scrollActiveIntoView.current = false;
    if (activeHitId) {
      document.getElementById(activeHitId)?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeHitId]);

  const isSearching = status === 'stalled';

  return (
    // Handled here, not on the input, to also cover focus inside the results list.
    <div
      className={['DocSearch', 'DocSearch-Container', status === 'error' && 'DocSearch-Container--Errored']
        .filter(Boolean)
        .join(' ')}
      role="presentation"
      onKeyDown={handleKeyDown}
      onMouseDown={(event) => {
        // Backdrop clicks only; a drag that starts inside the modal shouldn't close it.
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}>
      <div className="DocSearch-Modal" ref={modalRef}>
        <header className="DocSearch-SearchBar">
          <form
            className="DocSearch-Form"
            onSubmit={(event) => event.preventDefault()}
            onReset={() => {
              setQuery('');
              inputRef.current?.focus();
            }}>
            {isSearching ? (
              <div className="DocSearch-LoadingIndicator">
                <LoadingIcon />
              </div>
            ) : (
              <label className="DocSearch-MagnifierLabel" htmlFor={inputId}>
                <SearchIcon />
                <span className="DocSearch-VisuallyHiddenForAccessibility">
                  <Translate id="theme.SearchModal.searchBox.searchInputLabel">Search</Translate>
                </span>
              </label>
            )}

            <input
              ref={inputRef}
              id={inputId}
              className="DocSearch-Input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={translate({
                id: 'theme.SearchModal.placeholder',
                message: 'Search docs',
                description: 'The placeholder of the input of the DocSearch pop-up modal',
              })}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              maxLength={512}
              enterKeyHint="search"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={showDropdown}
              aria-controls={showDropdown ? listboxId : undefined}
              aria-activedescendant={activeHitId}
            />

            <div className="DocSearch-Actions">
              <button
                className="DocSearch-Clear"
                type="reset"
                aria-label={translate({
                  id: 'theme.SearchModal.searchBox.clearButtonTitle',
                  message: 'Clear the query',
                  description: 'The label and ARIA label of the button that clears the query',
                })}
                hidden={!query}
                tabIndex={query ? 0 : -1}
                aria-hidden={query ? 'false' : 'true'}>
                <Translate id="theme.SearchModal.searchBox.clearButtonText">Clear</Translate>
              </button>

              {query && <div className="DocSearch-Divider" />}

              <button
                type="button"
                className="DocSearch-Action DocSearch-Close"
                title={translate({
                  id: 'theme.SearchModal.searchBox.closeButtonText',
                  message: 'Close',
                  description: 'The title of the button that closes the search modal',
                })}
                aria-label={translate({
                  id: 'theme.SearchModal.searchBox.closeButtonAriaLabel',
                  message: 'Close',
                  description: 'The ARIA label of the button that closes the search modal',
                })}
                onClick={onClose}>
                <CloseIcon />
              </button>
            </div>
          </form>
        </header>

        {showDropdown && (
          <>
            <SearchFacetTabs activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="DocSearch-Dropdown" ref={dropdownRef}>
              <DropdownContent
                status={status}
                query={trimmedQuery}
                results={results}
                recentHits={recentHits}
                favoriteHits={favoriteHits}
                stored={stored}
                listboxId={listboxId}
                activeHit={navigableHits[activeIndex]}
                onHitClick={selectHit}
                onHitHover={(hit) =>
                  setActiveIndex(navigableHits.findIndex((candidate) => candidate === hit))
                }
                onClose={onClose}
              />
            </div>
          </>
        )}

        <footer className="DocSearch-Footer">
          <ul className="DocSearch-Commands">
            <li>
              <kbd className="DocSearch-Commands-Key">
                <ArrowDownIcon
                  ariaLabel={translate({
                    id: 'theme.SearchModal.footer.navigateDownKeyAriaLabel',
                    message: 'Arrow down',
                    description: 'The ARIA label for the Arrow down key',
                  })}
                />
              </kbd>
              <kbd className="DocSearch-Commands-Key">
                <ArrowUpIcon
                  ariaLabel={translate({
                    id: 'theme.SearchModal.footer.navigateUpKeyAriaLabel',
                    message: 'Arrow up',
                    description: 'The ARIA label for the Arrow up key',
                  })}
                />
              </kbd>
              <span className="DocSearch-Label">
                <Translate id="theme.SearchModal.footer.navigateText">Navigate</Translate>
              </span>
            </li>
            <li>
              <kbd className="DocSearch-Commands-Key">
                <EnterKeyIcon
                  ariaLabel={translate({
                    id: 'theme.SearchModal.footer.selectKeyAriaLabel',
                    message: 'Enter key',
                    description: 'The ARIA label for the Enter key',
                  })}
                />
              </kbd>
              <span className="DocSearch-Label">
                <Translate id="theme.SearchModal.footer.selectText">Select</Translate>
              </span>
            </li>
            <li>
              <kbd className="DocSearch-Commands-Key">
                <span className="DocSearch-Escape-Key">ESC</span>
              </kbd>
              <span
                className="DocSearch-Label"
                aria-label={translate({
                  id: 'theme.SearchModal.footer.closeKeyAriaLabel',
                  message: 'Escape key',
                  description: 'The ARIA label for the Escape key',
                })}>
                <Translate id="theme.SearchModal.footer.closeText">Close</Translate>
              </span>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

type DropdownContentProps = {
  status: Status;
  query: string;
  results: SearchResults;
  recentHits: SearchHit[];
  favoriteHits: SearchHit[];
  stored: ReturnType<typeof useStoredSearches>;
  listboxId: string;
  activeHit: SearchHit | undefined;
  onHitClick: (hit: SearchHit) => void;
  onHitHover: (hit: SearchHit) => void;
  onClose: () => void;
};

function DropdownContent({
  status,
  query,
  results,
  recentHits,
  favoriteHits,
  stored,
  listboxId,
  activeHit,
  onHitClick,
  onHitHover,
  onClose,
}: DropdownContentProps): ReactNode {
  if (status === 'error') {
    return <IndexUnavailable />;
  }

  if (query === '') {
    return (
      <div className="DocSearch-Dropdown-Container">
        {recentHits.length > 0 && (
          <HitGroup
            title={translate({
              id: 'theme.SearchModal.startScreen.recentSearchesTitle',
              message: 'Recent',
              description: 'The title of the recent searches',
            })}
            hits={recentHits}
            listboxId={listboxId}
            activeHit={activeHit}
            onHitClick={onHitClick}
            onHitHover={onHitHover}
            renderIcon={() => <RecentIcon />}
            renderActions={(hit) => (
              <>
                <HitActionButton
                  title={translate({
                    id: 'theme.SearchModal.startScreen.saveRecentSearchButtonTitle',
                    message: 'Save this search',
                    description: 'The title of the button to save a search',
                  })}
                  onClick={() => stored.addFavorite(toStoredHit(hit))}>
                  <FavoriteIcon />
                </HitActionButton>
                <HitActionButton
                  title={translate({
                    id: 'theme.SearchModal.startScreen.removeRecentSearchButtonTitle',
                    message: 'Remove this search from history',
                    description: 'The title of the button to remove a recent search',
                  })}
                  onClick={() => stored.removeRecent(toStoredHit(hit))}>
                  <CloseIcon />
                </HitActionButton>
              </>
            )}
          />
        )}

        {favoriteHits.length > 0 && (
          <HitGroup
            title={translate({
              id: 'theme.SearchModal.startScreen.favoriteSearchesTitle',
              message: 'Favorite',
              description: 'The title of the favorite searches',
            })}
            hits={favoriteHits}
            listboxId={listboxId}
            activeHit={activeHit}
            onHitClick={onHitClick}
            onHitHover={onHitHover}
            renderIcon={() => <FavoriteIcon />}
            renderActions={(hit) => (
              <HitActionButton
                title={translate({
                  id: 'theme.SearchModal.startScreen.removeFavoriteSearchButtonTitle',
                  message: 'Remove this search from favorites',
                  description: 'The title of the button to remove a favorite search',
                })}
                onClick={() => stored.removeFavorite(toStoredHit(hit))}>
                <CloseIcon />
              </HitActionButton>
            )}
          />
        )}
      </div>
    );
  }

  if (results.groups.length === 0) {
    // Only once settled: "no results" during an in-flight query is a false negative.
    return status === 'idle' ? <NoResults query={query} /> : null;
  }

  return (
    <div className="DocSearch-Dropdown-Container">
      {results.groups.map((group: SearchHitGroup) => (
        <HitGroup
          key={group.section}
          title={group.section}
          hits={group.hits}
          listboxId={listboxId}
          activeHit={activeHit}
          onHitClick={onHitClick}
          onHitHover={onHitHover}
          renderIcon={(hit) => (hit.type === 'lvl1' ? <PageIcon /> : <HeadingIcon />)}
          renderActions={() => <SelectIcon />}
        />
      ))}

      <section className="DocSearch-HitsFooter">
        <Link to={`/search?q=${encodeURIComponent(query)}`} onClick={onClose}>
          <Translate id="theme.SearchBar.seeAll" values={{ count: results.totalPages }}>
            {'See all {count} results'}
          </Translate>
        </Link>
      </section>
    </div>
  );
}

type HitGroupProps = {
  title: string;
  hits: SearchHit[];
  listboxId: string;
  activeHit: SearchHit | undefined;
  onHitClick: (hit: SearchHit) => void;
  onHitHover: (hit: SearchHit) => void;
  renderIcon: (hit: SearchHit) => ReactNode;
  renderActions: (hit: SearchHit) => ReactNode;
};

function HitGroup({
  title,
  hits,
  listboxId,
  activeHit,
  onHitClick,
  onHitHover,
  renderIcon,
  renderActions,
}: HitGroupProps): ReactNode {
  return (
    <section className="DocSearch-Hits">
      <div className="DocSearch-Hit-source">{title}</div>
      <ul role="listbox" aria-label={title}>
        {hits.map((hit) => (
          <li
            key={hit.objectID}
            id={`${listboxId}-${hit.objectID}`}
            role="option"
            aria-selected={hit === activeHit}
            className={['DocSearch-Hit', hit.parentId && 'DocSearch-Hit--Child']
              .filter(Boolean)
              .join(' ')}
            onMouseMove={() => onHitHover(hit)}>
            {/* Link navigates, leaving modified clicks to the browser. */}
            <Link to={hit.url} onClick={() => onHitClick(hit)}>
              <div className="DocSearch-Hit-Container">
                {hit.parentId && <TreeIcon isLastChild={hit.isLastChild} />}
                <div className="DocSearch-Hit-icon">{renderIcon(hit)}</div>
                <div className="DocSearch-Hit-content-wrapper">
                  {/* Escaped by ./pagefind, which emits only its own <mark>. */}
                  <span
                    className="DocSearch-Hit-title"
                    dangerouslySetInnerHTML={{ __html: hit.titleHtml }}
                  />
                  {hit.pathHtml && (
                    <span
                      className="DocSearch-Hit-path"
                      dangerouslySetInnerHTML={{ __html: hit.pathHtml }}
                    />
                  )}
                </div>
                <div className="DocSearch-Hit-action">{renderActions(hit)}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function HitActionButton({
  title,
  onClick,
  children,
}: {
  title: string;
  onClick: () => void;
  children: ReactNode;
}): ReactNode {
  return (
    <button
      className="DocSearch-Hit-action-button"
      title={title}
      type="button"
      onClick={(event) => {
        // The button sits inside the result link, which would otherwise navigate.
        event.preventDefault();
        event.stopPropagation();
        onClick();
      }}>
      {children}
    </button>
  );
}

function NoResults({ query }: { query: string }): ReactNode {
  return (
    <div className="DocSearch-NoResults">
      <div className="DocSearch-Screen-Icon">
        <NoResultsIcon />
      </div>
      <p className="DocSearch-Title">
        <Translate id="theme.SearchModal.noResultsScreen.noResultsText">
          No results found for
        </Translate>{' '}
        &quot;<strong>{query}</strong>&quot;
      </p>
    </div>
  );
}

/** Shown when the bundle can't be fetched, usually `yarn start` on a never-built tree. */
function IndexUnavailable(): ReactNode {
  return (
    <div className="DocSearch-ErrorScreen">
      <div className="DocSearch-Screen-Icon">
        <NoResultsIcon />
      </div>
      <p className="DocSearch-Title">
        <Translate id="theme.SearchModal.errorScreen.titleText">
          Unable to fetch results
        </Translate>
      </p>
      <p className="DocSearch-Help">
        <Translate id="theme.SearchModal.errorScreen.helpText">
          The search index has not been built. Run `yarn build` to enable search locally.
        </Translate>
      </p>
    </div>
  );
}

function toStoredHit(hit: SearchHit): StoredHit {
  return {
    objectID: hit.objectID,
    url: hit.url,
    title: hit.title,
    section: hit.section,
  };
}
