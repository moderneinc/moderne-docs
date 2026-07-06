import React, { useCallback, type FunctionComponent } from 'react';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import clsx from 'clsx';
import type { CategoryData } from '../shared/types';
import docCardStyles from '@site/src/theme/DocCard/styles.module.css';
import recipeShared from '@site/src/components/recipe/shared/styles.module.css';
import styles from './CategoryCard.module.css';

export interface CategoryCardProps {
  category: CategoryData;
  /** Max number of subcategory chips to show before "+N more". */
  maxSubcategories?: number;
  /** Highlighted subcategory labels (from filter matching). */
  highlightedSubs?: Set<string>;
}

const MAX_SUBS_DEFAULT = 5;

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  return String(n);
}

export const CategoryCard: FunctionComponent<CategoryCardProps> = ({
  category,
  maxSubcategories = MAX_SUBS_DEFAULT,
  highlightedSubs,
}) => {
  const { label, href, description, totalRecipeCount, subcategories } = category;
  const sorted = [...subcategories].sort((a, b) => b.totalRecipeCount - a.totalRecipeCount);
  const visibleSubs = sorted.slice(0, maxSubcategories);
  const remaining = sorted.length - visibleSubs.length;
  const history = useHistory();

  const onChipClick = useCallback((e: React.MouseEvent, subHref: string) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(subHref);
  }, [history]);

  return (
    <Link href={href} className={clsx(docCardStyles.cardContainer, styles.card)}>
      <div className={docCardStyles.cardContent}>
        <div className={styles.topRow}>
          <h3 className={docCardStyles.cardTitle}>{label}</h3>
          <span className={styles.count}>
            {formatCount(totalRecipeCount)} {totalRecipeCount === 1 ? 'recipe' : 'recipes'}
          </span>
        </div>

        {description && (
          <p className={docCardStyles.cardDescription}>{description}</p>
        )}

        {visibleSubs.length > 0 && (
          <div className={styles.subcategories}>
            {visibleSubs.map((sub) => (
              <span
                key={sub.label}
                role="link"
                tabIndex={0}
                aria-label={`${sub.label}, ${formatCount(sub.totalRecipeCount)} recipes`}
                className={clsx(recipeShared.chip, styles.subChip)}
                style={highlightedSubs?.has(sub.label.toLowerCase()) ? { outline: '2px solid var(--neo-digital-blue-400)' } : undefined}
                onClick={(e) => onChipClick(e, sub.href)}
                onKeyDown={(e) => { if (e.key === 'Enter') onChipClick(e as unknown as React.MouseEvent, sub.href); }}
              >
                <span aria-hidden="true">{sub.label}</span>
                <span className={styles.chipCount} aria-hidden="true">{formatCount(sub.totalRecipeCount)}</span>
              </span>
            ))}
            {remaining > 0 && (
              <span className={styles.moreChip}>+{remaining} more</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};
