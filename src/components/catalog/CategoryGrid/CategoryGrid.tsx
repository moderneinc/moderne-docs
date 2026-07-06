import React, { type FunctionComponent } from 'react';
import { ListX } from 'lucide-react';
import { CategoryCard } from '../CategoryCard';
import type { CategoryFilterResult } from '../CategorySearch';
import styles from './CategoryGrid.module.css';

export interface CategoryGridProps {
  categories: CategoryFilterResult[];
  totalCategoryCount?: number;
  isFiltering?: boolean;
}

export const CategoryGrid: FunctionComponent<CategoryGridProps> = ({
  categories,
  totalCategoryCount,
  isFiltering = false,
}) => {
  const noResults = isFiltering && categories.length === 0;
  const categoryCount = totalCategoryCount ?? categories.length;

  if (noResults) {
    return (
      <div className={styles.grid}>
        <div className={styles.empty}>
          <ListX size={32} className={styles.emptyIcon} />
          <p className={styles.emptyTitle}>No categories match</p>
          <p className={styles.emptyDescription}>
            Try a different filter term, or clear the filter to browse all categories.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section aria-labelledby="categories-heading">
      <div className={styles.categoriesHeader}>
        <h2 id="categories-heading" className={styles.categoriesTitle}>Categories</h2>
        <span className={styles.categoriesCount}>
          {isFiltering
            ? `${categories.length} of ${categoryCount}`
            : String(categoryCount)}
        </span>
      </div>
      <div className={styles.grid}>
        {categories.map(({ category, matchedSubs }) => (
          <CategoryCard
            key={category.href}
            category={category}
            highlightedSubs={matchedSubs.size > 0 ? matchedSubs : undefined}
          />
        ))}
      </div>
    </section>
  );
};
