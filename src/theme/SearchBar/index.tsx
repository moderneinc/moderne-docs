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

import {
  forwardRef,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { translate } from '@docusaurus/Translate';

/** The navbar search entry point, backed by Pagefind (see ./pagefind.ts) and lazily loading the modal. */

const SearchModal = lazy(() => import('./SearchModal'));

let modalPreloaded = false;

/** Warms the modal chunk so opening doesn't wait on a round trip. */
function preloadModal(): void {
  if (!modalPreloaded) {
    modalPreloaded = true;
    void import('./SearchModal');
  }
}

export default function SearchBar(): ReactNode {
  const [modal, setModal] = useState<{ container: HTMLDivElement; scrollY: number } | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const openModal = useCallback(() => {
    preloadModal();
    setModal((current) => {
      if (current) {
        return current;
      }
      // Portalled out of the navbar, whose stacking context would clip the backdrop.
      const container = document.createElement('div');
      document.body.insertBefore(container, document.body.firstChild);
      return { container, scrollY: window.scrollY };
    });
  }, []);

  const closeModal = useCallback(() => {
    setModal((current) => {
      current?.container.remove();
      return null;
    });
    searchButtonRef.current?.focus();
  }, []);

  useSearchKeyboardShortcuts({ isOpen: modal !== null, onOpen: openModal, onClose: closeModal });

  // Unmounting while open would otherwise strand the container in the DOM.
  useEffect(() => () => modal?.container.remove(), [modal]);

  return (
    <>
      <SearchButton
        ref={searchButtonRef}
        onClick={openModal}
        onFocus={preloadModal}
        onMouseOver={preloadModal}
        onTouchStart={preloadModal}
      />

      {modal &&
        createPortal(
          <Suspense fallback={null}>
            <SearchModal onClose={closeModal} initialScrollY={modal.scrollY} />
          </Suspense>,
          modal.container,
        )}
    </>
  );
}

/** Cmd/Ctrl+K and `/` open search, Escape closes it; ported from `@docsearch/react`. */
function useSearchKeyboardShortcuts({
  isOpen,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}): void {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const isCommandK = event.key?.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey);
      const isSlash = event.key === '/';

      if (
        (event.code === 'Escape' && isOpen) ||
        isCommandK ||
        // `/` is a plain character while typing, so it only fires outside editable elements.
        (isSlash && !isOpen && !isEditingContent(event))
      ) {
        event.preventDefault();
        if (isOpen) {
          onClose();
        } else if (!document.body.classList.contains('DocSearch--active')) {
          onOpen();
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onOpen, onClose]);
}

function isEditingContent(event: KeyboardEvent): boolean {
  const element = event.composedPath()[0] as HTMLElement | undefined;
  const tagName = element?.tagName;
  return Boolean(
    element?.isContentEditable ||
      tagName === 'INPUT' ||
      tagName === 'SELECT' ||
      tagName === 'TEXTAREA',
  );
}

type SearchButtonProps = {
  onClick: () => void;
  onFocus: () => void;
  onMouseOver: () => void;
  onTouchStart: () => void;
};

/** Transcribed from `@docsearch/react`'s `DocSearchButton`, down to the class names custom.css restyles. */
const SearchButton = forwardRef<HTMLButtonElement, SearchButtonProps>(function SearchButton(
  handlers,
  ref,
) {
  // Null until mount: the glyph is platform-dependent, and a server-side guess would mismatch.
  const [modifierKey, setModifierKey] = useState<'meta' | 'ctrl' | null>(null);

  useEffect(() => {
    setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? 'meta' : 'ctrl');
  }, []);

  const shortcut = modifierKey === 'ctrl' ? 'Control+k' : 'Meta+k';
  const buttonText = translate({
    id: 'theme.SearchBar.button.buttonText',
    message: 'Search',
    description: 'The label and ARIA label of the button that opens the search modal',
  });

  return (
    <button
      type="button"
      className="DocSearch DocSearch-Button"
      aria-label={`${buttonText} (${shortcut})`}
      aria-keyshortcuts={shortcut}
      ref={ref}
      {...handlers}>
      <span className="DocSearch-Button-Container">
        <SearchGlyph />
        <span className="DocSearch-Button-Placeholder">{buttonText}</span>
      </span>
      <span className="DocSearch-Button-Keys">
        {modifierKey !== null && (
          <>
            <ShortcutKey reactsToKey={modifierKey === 'ctrl' ? 'Ctrl' : 'Meta'}>
              {modifierKey === 'ctrl' ? 'Ctrl' : '⌘'}
            </ShortcutKey>
            <ShortcutKey reactsToKey="k">K</ShortcutKey>
          </>
        )}
      </span>
    </button>
  );
});

function SearchGlyph(): ReactNode {
  return (
    <svg
      width={20}
      height={20}
      className="DocSearch-Search-Icon"
      viewBox="0 0 24 24"
      aria-hidden="true">
      <circle cx="11" cy="11" r="8" stroke="currentColor" fill="none" strokeWidth="1.4" />
      <path
        d="m21 21-4.3-4.3"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A keycap that visually depresses while its key is held down. */
function ShortcutKey({
  reactsToKey,
  children,
}: {
  reactsToKey: string;
  children: ReactNode;
}): ReactNode {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === reactsToKey) {
        setIsPressed(true);
      }
    }
    function onKeyUp(event: KeyboardEvent) {
      // Releasing Meta suppresses keyup for keys held with it, so clear every cap.
      if (event.key === reactsToKey || event.key === 'Meta') {
        setIsPressed(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [reactsToKey]);

  return (
    <kbd
      className={[
        'DocSearch-Button-Key',
        isPressed && 'DocSearch-Button-Key--pressed',
        reactsToKey === 'Ctrl' && 'DocSearch-Button-Key--ctrl',
      ]
        .filter(Boolean)
        .join(' ')}>
      {children}
    </kbd>
  );
}
