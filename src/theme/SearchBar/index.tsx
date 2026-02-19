/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Ejected from @docusaurus/theme-search-algolia (v3.9.2) to add
 * faceted "Search in" tabs (All / Documentation / Recipes).
 *
 * Modifications from upstream:
 * - Added SearchTab state and SearchFacetTabs component
 * - Modified useSearchParameters to merge tab-specific facet filters
 * - Reset activeTab to 'documentation' in closeModal
 * - Render SearchFacetTabs alongside DocSearchModal in the portal
 */

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {createPortal} from 'react-dom';
import {DocSearchButton} from '@docsearch/react/button';
import {useDocSearchKeyboardEvents} from '@docsearch/react/useDocSearchKeyboardEvents';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import {
  isRegexpStringMatch,
  useSearchLinkCreator,
} from '@docusaurus/theme-common';
import {
  useAlgoliaContextualFacetFilters,
  useSearchResultUrlProcessor,
  useAlgoliaAskAi,
  mergeFacetFilters,
} from '@docusaurus/theme-search-algolia/client';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import translations from '@theme/SearchTranslations';
import SearchFacetTabs, {type SearchTab} from './SearchFacetTabs';
import type {
  InternalDocSearchHit,
  DocSearchModal as DocSearchModalType,
  DocSearchModalProps,
  StoredDocSearchHit,
  DocSearchTransformClient,
  DocSearchHit,
  DocSearchTranslations,
  UseDocSearchKeyboardEventsProps,
} from '@docsearch/react';

import type {AutocompleteState} from '@algolia/autocomplete-core';
import type {FacetFilters} from 'algoliasearch/lite';
import type {ThemeConfigAlgolia} from '@docusaurus/theme-search-algolia';

type DocSearchProps = Omit<
  DocSearchModalProps,
  'onClose' | 'initialScrollY'
> & {
  contextualSearch?: string;
  externalUrlRegex?: string;
  searchPagePath: boolean | string;
  askAi?: Exclude<
    (DocSearchModalProps & {askAi: unknown})['askAi'],
    string | undefined
  >;
};

// extend DocSearchProps for v4 features
// TODO Docusaurus v4: cleanup after we drop support for DocSearch v3
interface DocSearchV4Props extends DocSearchProps {
  indexName: string;
  askAi?: ThemeConfigAlgolia['askAi'];
  translations?: DocSearchTranslations;
}

let DocSearchModal: typeof DocSearchModalType | null = null;

function importDocSearchModalIfNeeded() {
  if (DocSearchModal) {
    return Promise.resolve();
  }
  return Promise.all([
    import('@docsearch/react/modal'),
    import('@docsearch/react/style'),
    import('./styles.css'),
  ]).then(([{DocSearchModal: Modal}]) => {
    DocSearchModal = Modal;
  });
}

function useNavigator({
  externalUrlRegex,
}: Pick<DocSearchProps, 'externalUrlRegex'>) {
  const history = useHistory();
  const [navigator] = useState<DocSearchModalProps['navigator']>(() => {
    return {
      navigate(params) {
        // Algolia results could contain URL's from other domains which cannot
        // be served through history and should navigate with window.location
        if (isRegexpStringMatch(externalUrlRegex, params.itemUrl)) {
          window.location.href = params.itemUrl;
        } else {
          history.push(params.itemUrl);
        }
      },
    };
  });
  return navigator;
}

function useTransformSearchClient(): DocSearchModalProps['transformSearchClient'] {
  const {
    siteMetadata: {docusaurusVersion},
  } = useDocusaurusContext();
  return useCallback(
    (searchClient: DocSearchTransformClient) => {
      searchClient.addAlgoliaAgent('docusaurus', docusaurusVersion);
      return searchClient;
    },
    [docusaurusVersion],
  );
}

function useTransformItems(props: Pick<DocSearchProps, 'transformItems'>) {
  const processSearchResultUrl = useSearchResultUrlProcessor();
  const [transformItems] = useState<DocSearchModalProps['transformItems']>(
    () => {
      return (items: DocSearchHit[]) =>
        props.transformItems
          ? // Custom transformItems
            props.transformItems(items)
          : // Default transformItems
            items.map((item) => ({
              ...item,
              url: processSearchResultUrl(item.url),
            }));
    },
  );
  return transformItems;
}

function useResultsFooterComponent({
  closeModal,
}: {
  closeModal: () => void;
}): DocSearchProps['resultsFooterComponent'] {
  return useMemo(
    () =>
      ({state}) =>
        <ResultsFooter state={state} onClose={closeModal} />,
    [closeModal],
  );
}

function Hit({
  hit,
  children,
}: {
  hit: InternalDocSearchHit | StoredDocSearchHit;
  children: ReactNode;
}) {
  return <Link to={hit.url}>{children}</Link>;
}

type ResultsFooterProps = {
  state: AutocompleteState<InternalDocSearchHit>;
  onClose: () => void;
};

function ResultsFooter({state, onClose}: ResultsFooterProps) {
  const createSearchLink = useSearchLinkCreator();

  return (
    <Link to={createSearchLink(state.query)} onClick={onClose}>
      <Translate
        id="theme.SearchBar.seeAll"
        values={{count: state.context.nbHits}}>
        {'See all {count} results'}
      </Translate>
    </Link>
  );
}

/**
 * Algolia `filters` string for each search tab.
 *
 * Uses `filters` (SQL-like syntax) instead of `facetFilters` because
 * a negative facetFilter like `-category:recipes` also excludes records
 * missing the attribute entirely, while `NOT category:recipes` only
 * excludes records that explicitly have category:recipes.
 */
const tabFilters: Record<SearchTab, string> = {
  all: '',
  documentation: 'NOT category:recipes',
  recipes: 'category:recipes',
};

function useSearchParameters({
  contextualSearch,
  activeTab,
  ...props
}: DocSearchProps & {activeTab: SearchTab}): DocSearchProps['searchParameters'] {
  const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();

  const configFacetFilters: FacetFilters =
    props.searchParameters?.facetFilters ?? [];

  const facetFilters: FacetFilters = contextualSearch
    ? // Merge contextual search filters with config filters
      mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
    : // ... or use config facetFilters
      configFacetFilters;

  const filterString = tabFilters[activeTab];

  // We let users override default searchParameters if they want to
  return {
    ...props.searchParameters,
    facetFilters,
    ...(filterString && {filters: filterString}),
  };
}

/**
 * Creates a mount point div inside .DocSearch-Modal (between SearchBar and
 * Dropdown) and keeps a reference to it. We portal SearchFacetTabs into this
 * mount point so the tabs live inside the modal's own DOM tree and survive
 * DocSearch's internal React reconciliation.
 */
function useTabsMountPoint(
  isOpen: boolean,
  activeTab: SearchTab,
): HTMLDivElement | null {
  const [mountPoint, setMountPoint] = useState<HTMLDivElement | null>(null);
  const mountRef = useRef<HTMLDivElement | null>(null);

  // Re-run when isOpen or activeTab changes (activeTab change causes modal
  // remount via key prop, which destroys the old mount point)
  useEffect(() => {
    if (!isOpen) {
      mountRef.current?.remove();
      mountRef.current = null;
      setMountPoint(null);
      return;
    }

    function ensureMountPoint() {
      // Already created and still in the DOM
      if (mountRef.current?.isConnected) {
        return;
      }

      const modal = document.querySelector('.DocSearch-Modal');
      const dropdown = document.querySelector('.DocSearch-Dropdown');
      if (!modal || !dropdown) return;

      // Clean up any stale mount points (e.g. from React Strict Mode double-runs)
      modal.querySelectorAll('[data-facet-tabs]').forEach((el) => el.remove());

      const div = document.createElement('div');
      div.setAttribute('data-facet-tabs', '');
      modal.insertBefore(div, dropdown);
      mountRef.current = div;
      setMountPoint(div);
    }

    // Try immediately (modal may already be rendered)
    ensureMountPoint();

    // Watch for the modal/dropdown appearing if not yet in the DOM
    const observer = new MutationObserver(() => ensureMountPoint());
    observer.observe(document.body, {childList: true, subtree: true});

    return () => {
      observer.disconnect();
      mountRef.current?.remove();
      mountRef.current = null;
    };
  }, [isOpen, activeTab]);

  return mountPoint;
}

function DocSearch({externalUrlRegex, ...props}: DocSearchV4Props) {
  const navigator = useNavigator({externalUrlRegex});
  const transformItems = useTransformItems(props);
  const transformSearchClient = useTransformSearchClient();

  const [activeTab, setActiveTab] = useState<SearchTab>('documentation');
  const searchParameters = useSearchParameters({...props, activeTab});

  const handleTabChange = useCallback((tab: SearchTab) => {
    // Capture the current query so it persists across the modal remount
    const input = document.querySelector<HTMLInputElement>('.DocSearch-Input');
    if (input?.value) {
      setInitialQuery(input.value);
    }
    setActiveTab(tab);
  }, []);

  const searchContainer = useRef<HTMLDivElement | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState<string | undefined>(
    undefined,
  );

  const tabsMountPoint = useTabsMountPoint(isOpen, activeTab);

  const {isAskAiActive, currentPlaceholder, onAskAiToggle, extraAskAiProps} =
    useAlgoliaAskAi(props);

  const prepareSearchContainer = useCallback(() => {
    if (!searchContainer.current) {
      const divElement = document.createElement('div');
      searchContainer.current = divElement;
      document.body.insertBefore(divElement, document.body.firstChild);
    }
  }, []);

  const openModal = useCallback(() => {
    prepareSearchContainer();
    importDocSearchModalIfNeeded().then(() => setIsOpen(true));
  }, [prepareSearchContainer]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    searchButtonRef.current?.focus();
    setInitialQuery(undefined);
    setActiveTab('documentation');
    onAskAiToggle(false);
  }, [onAskAiToggle]);

  const handleInput = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'f' && (event.metaKey || event.ctrlKey)) {
        // ignore browser's ctrl+f
        return;
      }
      // prevents duplicate key insertion in the modal input
      event.preventDefault();
      setInitialQuery(event.key);
      openModal();
    },
    [openModal],
  );

  const resultsFooterComponent = useResultsFooterComponent({closeModal});

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen: openModal,
    onClose: closeModal,
    onInput: handleInput,
    searchButtonRef,
    isAskAiActive: isAskAiActive ?? false,
    onAskAiToggle: onAskAiToggle ?? (() => {}),
  } satisfies UseDocSearchKeyboardEventsProps & {
    // TODO Docusaurus v4: cleanup after we drop support for DocSearch v3
    isAskAiActive: boolean;
    onAskAiToggle: (askAiToggle: boolean) => void;
  } as UseDocSearchKeyboardEventsProps);

  return (
    <>
      <Head>
        {/* This hints the browser that the website will load data from Algolia,
        and allows it to preconnect to the DocSearch cluster. It makes the first
        query faster, especially on mobile. */}
        <link
          rel="preconnect"
          href={`https://${props.appId}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </Head>

      <DocSearchButton
        onTouchStart={importDocSearchModalIfNeeded}
        onFocus={importDocSearchModalIfNeeded}
        onMouseOver={importDocSearchModalIfNeeded}
        onClick={openModal}
        ref={searchButtonRef}
        translations={props.translations?.button ?? translations.button}
      />

      {isOpen &&
        DocSearchModal &&
        searchContainer.current &&
        createPortal(
          <DocSearchModal
            key={activeTab}
            onClose={closeModal}
            initialScrollY={window.scrollY}
            initialQuery={initialQuery}
            navigator={navigator}
            transformItems={transformItems}
            hitComponent={Hit}
            transformSearchClient={transformSearchClient}
            {...(props.searchPagePath && {
              resultsFooterComponent,
            })}
            placeholder={currentPlaceholder}
            {...props}
            translations={props.translations?.modal ?? translations.modal}
            searchParameters={searchParameters}
            {...extraAskAiProps}
          />,
          searchContainer.current,
        )}

      {tabsMountPoint &&
        createPortal(
          <SearchFacetTabs
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />,
          tabsMountPoint,
        )}
    </>
  );
}

export default function SearchBar(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <DocSearch {...(siteConfig.themeConfig.algolia as DocSearchV4Props)} />
  );
}
