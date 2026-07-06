import React, { type FunctionComponent } from 'react';
import { RecipeResultCard } from '../RecipeResultCard';
import type { RecipeResult } from '../shared/types';
import styles from './PopularRecipes.module.css';

export interface PopularRecipesProps {
  recipes: RecipeResult[];
}

export const PopularRecipes: FunctionComponent<PopularRecipesProps> = ({ recipes }) => {
  if (recipes.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="popular-recipes-heading">
      <h2 id="popular-recipes-heading" className={styles.title}>Popular recipes</h2>
      <div className={styles.list}>
        {recipes.map((r) => (
          <RecipeResultCard key={r.fqName} recipe={r} variant="strip" />
        ))}
      </div>
    </section>
  );
};
