import React, { useMemo, useState, type FunctionComponent, type ReactNode } from 'react';
import { Search } from 'lucide-react';
import type { SubRecipe } from '../shared/types';
import { renderWithCode } from '../shared/renderWithCode';
import styles from './RecipeList.module.css';
import shared from '../shared/styles.module.css';

const RecipeLink: FunctionComponent<{ recipe: SubRecipe }> = ({ recipe }) => (
  <li className={styles.recipeListItem}>
    <a className={styles.recipeLink} href={recipe.href} target="_blank" rel="noopener noreferrer">
      {renderWithCode(recipe.name, shared.inlineCode)}
    </a>
  </li>
);

/**
 * Length-adaptive recipe list. 88% of composite lists have ≤10 sub-recipes, so
 * short lists render inline (no chrome); only the long tail gets a bounded
 * window + name search. The full list stays in the DOM in both modes (AI-readable).
 *
 * Pass the section's markdown `## Definition` heading as children: it renders in a section header row
 * (with the recipe count on the right) and still feeds the native TOC.
 */
const BOUNDED_THRESHOLD = 15;

export const RecipeList: FunctionComponent<{ recipes: SubRecipe[]; children: ReactNode }> = ({ recipes, children }) => {
  const [query, setQuery] = useState('');
  const bounded = recipes.length > BOUNDED_THRESHOLD;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? recipes.filter((r) => r.name.toLowerCase().includes(q)) : recipes;
  }, [recipes, query]);

  if (!recipes.length) return null;

  const count = `${recipes.length} recipes`;

  // Short list → inline, with the count on the heading row.
  if (!bounded) {
    return (
      <div className={shared.section}>
        <div className={shared.sectionHeader}>
          {children}
          <span className={styles.recipeListCount}>{count}</span>
        </div>
        <ul className={styles.recipeList}>
          {recipes.map((r) => (<RecipeLink key={r.href} recipe={r} />))}
        </ul>
      </div>
    );
  }

  // Long list → bounded window + name search (count lives in the search row).
  return (
    <div className={shared.section}>
      <div className={shared.sectionHeader}>{children}</div>
      <div className={styles.recipeListBounded}>
        <div className={styles.recipeListSearch}>
          <Search size={15} className={styles.recipeListSearchIcon} />
          <input
            className={styles.recipeListInput}
            type="text"
            placeholder={`Search ${recipes.length} recipes…`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search recipes in this list"
          />
          <span className={styles.recipeListCount}>
            {query.trim() ? `${filtered.length} of ${recipes.length}` : count}
          </span>
        </div>
        <ul className={styles.recipeListWindow} aria-label="Recipe list" tabIndex={0}>
          {filtered.length ? (
            filtered.map((r) => <RecipeLink key={r.href} recipe={r} />)
          ) : (
            <li className={styles.recipeListEmpty}>No recipes match “{query}”.</li>
          )}
        </ul>
      </div>
    </div>
  );
};
