import React, { useMemo, useState, type FunctionComponent } from 'react';
import { ListFilter, X } from 'lucide-react';
import type { CategoryData } from '../shared/types';
import styles from './CategorySearch.module.css';

export interface CategoryFilterResult {
  category: CategoryData;
  matchedSubs: Set<string>;
}

export interface FilterResults {
  categories: CategoryFilterResult[];
  query: string;
}

export interface CategoryFilterProps {
  categories: CategoryData[];
  onResults: (results: FilterResults) => void;
  placeholder?: string;
}

function buildIndex(categories: CategoryData[]) {
  return categories.map((cat) => ({
    category: cat,
    tokens: [
      cat.label.toLowerCase(),
      ...(cat.description ? [cat.description.toLowerCase()] : []),
      ...cat.subcategories.map((s) => s.label.toLowerCase()),
    ],
    subLabels: cat.subcategories.map((s) => s.label.toLowerCase()),
  }));
}

function doFilter(
  index: ReturnType<typeof buildIndex>,
  query: string,
): FilterResults {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const q = query.trim();

  if (terms.length === 0) {
    return {
      categories: index.map(({ category }) => ({ category, matchedSubs: new Set<string>() })),
      query: q,
    };
  }

  const categories = index
    .map(({ category, tokens, subLabels }) => {
      const allText = tokens.join(' ');
      if (!terms.every((t) => allText.includes(t))) return null;
      const matchedSubs = new Set<string>();
      for (const sub of subLabels) {
        if (terms.some((t) => sub.includes(t))) matchedSubs.add(sub);
      }
      return { category, matchedSubs };
    })
    .filter((r): r is CategoryFilterResult => r !== null);

  return { categories, query: q };
}

export const CategoryFilter: FunctionComponent<CategoryFilterProps> = ({
  categories,
  onResults,
  placeholder = 'Filter categories…',
}) => {
  const [query, setQuery] = useState('');
  const index = useMemo(() => buildIndex(categories), [categories]);
  const results = useMemo(() => doFilter(index, query), [index, query]);

  React.useEffect(() => {
    onResults(results);
  }, [results, onResults]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputRow}>
        <span className={styles.searchIcon}>
          <ListFilter size={16} />
        </span>
        <input
          type="text"
          className={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label="Filter recipe categories"
        />
        {query && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={() => setQuery('')}
            aria-label="Clear filter"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {query.trim() && (
        <p className={styles.summary}>
          <span className={styles.summaryBold}>{results.categories.length}</span>
          {results.categories.length === 1 ? ' category' : ' categories'}
          {' filtered by "'}{query.trim()}{'"'}
        </p>
      )}
    </div>
  );
};
