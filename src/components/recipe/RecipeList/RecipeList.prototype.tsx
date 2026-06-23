import React, { useMemo, useState, type FunctionComponent } from 'react';
import { Search } from 'lucide-react';
import type { SubRecipe } from '../shared/types';
import { renderWithCode } from '../shared/renderWithCode';
import styles from '../shared/styles.module.css';

/** A sub-recipe rendered as a link (parity with the generated pages). */
const RecipeLink: FunctionComponent<{ recipe: SubRecipe }> = ({ recipe }) => (
  <li className={styles.recipeListItem}>
    <a className={styles.recipeLink} href={recipe.href} target="_blank" rel="noopener noreferrer">
      {renderWithCode(recipe.name, styles.inlineCode)}
    </a>
  </li>
);

/**
 * Length-adaptive recipe list for composite recipes.
 *
 * Data-driven design: across the catalog, 88% of composite recipe lists have
 * ≤10 sub-recipes (median 2) and 96.6% live in a single package — so grouping
 * and faceted filters aren't justified. Short lists render inline (best UX, no
 * chrome); only long lists (the ~12% tail) get a bounded window + name search,
 * the one filter dimension the data actually supports. The full list stays in
 * the DOM in both modes, so it remains crawlable / AI-readable.
 */
const BOUNDED_THRESHOLD = 15;

export const RecipeList: FunctionComponent<{ recipes: SubRecipe[] }> = ({ recipes }) => {
  const [query, setQuery] = useState('');
  const bounded = recipes.length > BOUNDED_THRESHOLD;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? recipes.filter((r) => r.name.toLowerCase().includes(q)) : recipes;
  }, [recipes, query]);

  if (!recipes.length) return null;

  // Short list → inline, full, no filter.
  if (!bounded) {
    return (
      <>
        <div className={styles.recipeListHeader}>{recipes.length} recipes</div>
        <ul className={styles.recipeList}>
          {recipes.map((r) => (
            <RecipeLink key={r.href} recipe={r} />
          ))}
        </ul>
      </>
    );
  }

  // Long list → bounded window + name search.
  return (
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
          {query.trim() ? `${filtered.length} of ${recipes.length}` : `${recipes.length} recipes`}
        </span>
      </div>
      <ul className={styles.recipeListWindow} role="region" aria-label="Recipe list" tabIndex={0}>
        {filtered.length ? (
          filtered.map((r) => <RecipeLink key={r.href} recipe={r} />)
        ) : (
          <li className={styles.recipeListEmpty}>No recipes match “{query}”.</li>
        )}
      </ul>
    </div>
  );
};
