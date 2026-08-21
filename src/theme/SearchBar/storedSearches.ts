import { useCallback, useEffect, useState } from 'react';
import { escapeHtml, type SearchHit } from './pagefind';

/** The "Recent" and "Favorite" lists, tracking results opened rather than queries typed, as DocSearch did. */

const RECENT_KEY = '__MODERNE_DOCS_RECENT_SEARCHES__';
const FAVORITE_KEY = '__MODERNE_DOCS_FAVORITE_SEARCHES__';

const FAVORITES_LIMIT = 10;
/** As in DocSearch, the recent list gives up room once favourites exist. */
const RECENT_LIMIT = 7;
const RECENT_LIMIT_WITH_FAVORITES = 4;

export type StoredHit = {
  objectID: string;
  url: string;
  title: string;
  section: string;
};

export type StoredSearches = {
  recent: StoredHit[];
  favorites: StoredHit[];
  /** Records an opened result at the head of the recent list. */
  addRecent: (hit: SearchHit) => void;
  removeRecent: (hit: StoredHit) => void;
  /** Moves a recent entry into favourites, as the star button does. */
  addFavorite: (hit: StoredHit) => void;
  removeFavorite: (hit: StoredHit) => void;
};

function read(key: string): StoredHit[] {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    const stored = window.localStorage.getItem(key);
    const parsed: unknown = stored ? JSON.parse(stored) : [];
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.filter(
      (item): item is StoredHit =>
        typeof item?.url === 'string' && typeof item?.title === 'string',
    );
  } catch {
    // Private-mode denials and corrupt entries both mean "no history".
    return [];
  }
}

function write(key: string, hits: StoredHit[]): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(hits));
  } catch {
    // Full or blocked storage shouldn't take the modal down.
  }
}

/** Identity is the destination: the same page reached twice is one entry. */
function isSame(a: StoredHit, b: StoredHit): boolean {
  return a.url === b.url;
}

export function useStoredSearches(): StoredSearches {
  const [recent, setRecent] = useState<StoredHit[]>([]);
  const [favorites, setFavorites] = useState<StoredHit[]>([]);

  // After mount: localStorage doesn't exist during SSG, and seeding from it would mismatch.
  useEffect(() => {
    setRecent(read(RECENT_KEY));
    setFavorites(read(FAVORITE_KEY));
  }, []);

  const updateRecent = useCallback((next: StoredHit[]) => {
    setRecent(next);
    write(RECENT_KEY, next);
  }, []);

  const updateFavorites = useCallback((next: StoredHit[]) => {
    setFavorites(next);
    write(FAVORITE_KEY, next);
  }, []);

  const addRecent = useCallback(
    (hit: SearchHit) => {
      const entry: StoredHit = {
        objectID: hit.objectID,
        url: hit.url,
        title: hit.title,
        section: hit.section,
      };
      const limit = favorites.length === 0 ? RECENT_LIMIT : RECENT_LIMIT_WITH_FAVORITES;
      // Favourites already have a permanent home above the recent list.
      if (favorites.some((favorite) => isSame(favorite, entry))) {
        return;
      }
      updateRecent([entry, ...recent.filter((item) => !isSame(item, entry))].slice(0, limit));
    },
    [favorites, recent, updateRecent],
  );

  const removeRecent = useCallback(
    (hit: StoredHit) => updateRecent(recent.filter((item) => !isSame(item, hit))),
    [recent, updateRecent],
  );

  const addFavorite = useCallback(
    (hit: StoredHit) => {
      updateFavorites([hit, ...favorites.filter((item) => !isSame(item, hit))].slice(0, FAVORITES_LIMIT));
      updateRecent(recent.filter((item) => !isSame(item, hit)));
    },
    [favorites, recent, updateFavorites, updateRecent],
  );

  const removeFavorite = useCallback(
    (hit: StoredHit) => updateFavorites(favorites.filter((item) => !isSame(item, hit))),
    [favorites, updateFavorites],
  );

  return { recent, favorites, addRecent, removeRecent, addFavorite, removeFavorite };
}

/** Renders a stored entry as a result row, unhighlighted. */
export function toSearchHit(stored: StoredHit): SearchHit {
  return {
    objectID: stored.objectID,
    url: stored.url,
    title: stored.title,
    titleHtml: escapeHtml(stored.title),
    pathHtml: stored.section ? escapeHtml(stored.section) : null,
    type: 'lvl1',
    section: stored.section,
    parentId: null,
    isLastChild: false,
  };
}
