import React, { type FunctionComponent } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import type { RecipeResult } from '../shared/types';
import docCardStyles from '@site/src/theme/DocCard/styles.module.css';
import styles from './RecipeResultCard.module.css';

export interface RecipeResultCardProps {
  recipe: RecipeResult;
  /** Strip variant: no border/description, compact row for popular recipes section. */
  variant?: 'card' | 'strip';
}

export const RecipeResultCard: FunctionComponent<RecipeResultCardProps> = ({
  recipe,
  variant = 'card',
}) => {
  const { displayName, href, description, categoryPath } = recipe;
  const isStrip = variant === 'strip';

  return (
    <Link href={href} className={isStrip ? styles.strip : clsx(docCardStyles.cardContainer, styles.card)}>
      <div className={styles.content}>
        <div className={styles.topLine}>
          <span className={styles.name}>{displayName}</span>
          <span className={styles.breadcrumb} aria-label="Category path">
            {categoryPath.map((segment, i) => (
              <React.Fragment key={segment}>
                {i > 0 && <span className={styles.breadcrumbSeparator}>/</span>}
                <span className={styles.breadcrumbSegment}>{segment}</span>
              </React.Fragment>
            ))}
          </span>
        </div>
        {!isStrip && <p className={docCardStyles.cardDescription}>{description}</p>}
      </div>
      <span className={styles.arrow}>
        <ArrowRight size={isStrip ? 14 : 16} />
      </span>
    </Link>
  );
};
