/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Ejected from @docusaurus/theme-search-algolia (v3.9.2).
 *
 * Modifications from upstream:
 * - Backport the DocSearch insights fix in useTransformSearchClient
 * - Type `askAi` from the theme config and pass it through to useAlgoliaAskAi
 * - Let every Cmd/Ctrl combo through to useDocSearchKeyboardEvents in
 *   handleInput, not only Ctrl+F
 */

import React, {
  useCallback,
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
interface DocSearchV4Props extends Omit<DocSearchProps, 'askAi'> {
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
    siteConfig: {themeConfig},
  } = useDocusaurusContext();
  const {appId, apiKey} = themeConfig.algolia as {appId: string; apiKey: string};

  return useCallback(
    (searchClient: DocSearchTransformClient) => {
      searchClient.addAlgoliaAgent('docusaurus', docusaurusVersion);

      // DocSearch v4.6.3 doesn't attach __autocomplete_algoliaCredentials,
      // __autocomplete_queryID, or __autocomplete_indexName to hits, which
      // causes the insights plugin to crash on click. This is fixed in the
      // DocSearch main branch but not yet released. Backport the fix here
      // and remove once @docsearch/react > 4.6.3 ships.
      const originalSearch = (
        searchClient as unknown as {search: (...args: unknown[]) => Promise<{results: unknown[]}>}
      ).search.bind(searchClient);
      (searchClient as unknown as {search: unknown}).search = async function (...args: unknown[]) {
        const response = await originalSearch(...args);
        response?.results?.forEach((result: unknown) => {
          const r = result as {queryID?: string; index?: string; hits?: Record<string, unknown>[]};
          if (r?.queryID && Array.isArray(r.hits)) {
            r.hits.forEach((hit) => {
              hit.__autocomplete_queryID = r.queryID;
              hit.__autocomplete_indexName = r.index;
              hit.__autocomplete_algoliaCredentials = {appId, apiKey};
            });
          }
        });
        return response;
      };

      return searchClient;
    },
    [docusaurusVersion, appId, apiKey],
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

function useSearchParameters({
  contextualSearch,
  ...props
}: DocSearchV4Props): DocSearchProps['searchParameters'] {
  const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();

  const configFacetFilters: FacetFilters =
    props.searchParameters?.facetFilters ?? [];

  const facetFilters: FacetFilters = contextualSearch
    ? // Merge contextual search filters with config filters
      mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
    : // ... or use config facetFilters
      configFacetFilters;

  // We let users override default searchParameters if they want to
  return {
    ...props.searchParameters,
    facetFilters,
  };
}

function DocSearch({externalUrlRegex, askAi, ...props}: DocSearchV4Props) {
  const navigator = useNavigator({externalUrlRegex});
  const transformItems = useTransformItems(props);
  const transformSearchClient = useTransformSearchClient();

  const searchParameters = useSearchParameters(props);

  const searchContainer = useRef<HTMLDivElement | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState<string | undefined>(
    undefined,
  );

  const {isAskAiActive, currentPlaceholder, onAskAiToggle, extraAskAiProps} =
    useAlgoliaAskAi({...props, askAi});

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
    onAskAiToggle(false);
  }, [onAskAiToggle]);

  const handleInput = useCallback(
    (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey) {
        // Let modifier combos (Cmd+K, Ctrl+F, etc.) pass through to
        // useDocSearchKeyboardEvents which handles them directly.
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
    </>
  );
}

export default function SearchBar(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <DocSearch {...(siteConfig.themeConfig.algolia as DocSearchV4Props)} />
  );
}
