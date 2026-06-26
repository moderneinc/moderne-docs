import React, { useMemo, useState, type FunctionComponent, type ReactNode } from 'react';
import clsx from 'clsx';
import { Search } from 'lucide-react';
import { Accordion, type AccordionItem } from '../Accordion';
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

/** A count badge in an accordion label — violet for preconditions, neutral for the recipe list. */
const CountBadge: FunctionComponent<{ count: number; tone: 'violet' | 'neutral' }> = ({ count, tone }) => (
  <span className={clsx(styles.countBadge, tone === 'violet' ? styles.countBadge_violet : styles.countBadge_neutral)}>
    {count}
  </span>
);

const BOUNDED_THRESHOLD = 15;

/** Borderless, inset list of recipe links — matches the data table sitting in an accordion body. */
const RecipeRows: FunctionComponent<{ recipes: SubRecipe[] }> = ({ recipes }) => (
  <ul className={styles.recipeRows}>
    {recipes.map((r) => (<RecipeLink key={r.href} recipe={r} />))}
  </ul>
);

/**
 * Definition: preconditions + the sub-recipe list, rendered through the shared Accordion (like
 * Examples / Usage / Data tables) so the whole section folds away like the other space-saving
 * blocks — but open by default. Preconditions carry a violet count badge; the recipe list shows a
 * neutral count and, when long (88% are ≤10, only the tail is bounded), a name search + scroll window.
 * Lists are borderless and inset inside the accordion body, matching the data table.
 *
 * Pass the section's markdown `## Definition` heading as children: it renders in the accordion header
 * row and still feeds the native TOC.
 */
export const RecipeList: FunctionComponent<{ recipes: SubRecipe[]; preconditions?: SubRecipe[]; children: ReactNode }> = ({
  recipes,
  preconditions,
  children,
}) => {
  const [query, setQuery] = useState('');
  const bounded = recipes.length > BOUNDED_THRESHOLD;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? recipes.filter((r) => r.name.toLowerCase().includes(q)) : recipes;
  }, [recipes, query]);

  if (!recipes.length && !preconditions?.length) return null;

  const items: AccordionItem[] = [];

  if (preconditions?.length) {
    items.push({
      key: 'preconditions',
      label: (
        <span className={styles.itemLabel}>
          Preconditions
          <CountBadge count={preconditions.length} tone="violet" />
        </span>
      ),
      content: <RecipeRows recipes={preconditions} />,
    });
  }

  if (recipes.length) {
    items.push({
      key: 'recipes',
      label: (
        <span className={styles.itemLabel}>
          Recipes
          <CountBadge count={recipes.length} tone="neutral" />
        </span>
      ),
      content: bounded ? (
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
          <ul className={styles.recipeListWindow} aria-label="Recipe list" tabIndex={0}>
            {filtered.length ? (
              filtered.map((r) => <RecipeLink key={r.href} recipe={r} />)
            ) : (
              <li className={styles.recipeListEmpty}>No recipes match “{query}”.</li>
            )}
          </ul>
        </div>
      ) : (
        <RecipeRows recipes={recipes} />
      ),
    });
  }

  return (
    <Accordion items={items} defaultOpen="all">
      {children}
    </Accordion>
  );
};
