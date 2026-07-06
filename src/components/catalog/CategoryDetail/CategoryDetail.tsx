import React, { useState, type FunctionComponent } from 'react';
import Link from '@docusaurus/Link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import docCardStyles from '@site/src/theme/DocCard/styles.module.css';
import styles from './CategoryDetail.module.css';

export interface SubcategoryItem {
  label: string;
  href: string;
  totalRecipeCount: number;
}

export interface RecipeItem {
  label: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface CategoryDetailProps {
  breadcrumbs: BreadcrumbItem[];
  label: string;
  description?: string;
  totalRecipeCount: number;
  subcategories: SubcategoryItem[];
  recipes: RecipeItem[];
}

const VISIBLE_THRESHOLD = 9;

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  return String(n);
}

export const CategoryDetail: FunctionComponent<CategoryDetailProps> = ({
  breadcrumbs,
  label,
  description,
  totalRecipeCount,
  subcategories,
  recipes,
}) => {
  const [showAll, setShowAll] = useState(false);
  const hasOverflow = subcategories.length > VISIBLE_THRESHOLD;
  const visibleSubs = hasOverflow && !showAll
    ? subcategories.slice(0, VISIBLE_THRESHOLD)
    : subcategories;

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        {breadcrumbs.map((crumb, i) => (
          <React.Fragment key={crumb.href}>
            {i > 0 && <span className={styles.breadcrumbSeparator}>/</span>}
            <Link href={crumb.href} className={styles.breadcrumbLink}>{crumb.label}</Link>
          </React.Fragment>
        ))}
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>{label}</span>
      </nav>

      <header className={styles.header}>
        <h1 className={styles.title}>{label}</h1>
        {description && <p className={styles.description}>{description}</p>}
        <span className={styles.count}>
          {formatCount(totalRecipeCount)} {totalRecipeCount === 1 ? 'recipe' : 'recipes'}
          {subcategories.length > 0 && ` across ${subcategories.length} subcategories`}
        </span>
      </header>

      {subcategories.length > 0 && (
        <section>
          <h2 className={styles.sectionTitle}>Subcategories</h2>
          <div className={styles.subcatGrid}>
            {visibleSubs.map((sub) => (
              <Link key={sub.href} href={sub.href} className={docCardStyles.cardContainer}>
                <div className={docCardStyles.cardContent}>
                  <h3 className={docCardStyles.cardTitle}>{sub.label}</h3>
                  <span className={docCardStyles.cardDescription}>
                    {formatCount(sub.totalRecipeCount)} {sub.totalRecipeCount === 1 ? 'recipe' : 'recipes'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {hasOverflow && (
            <button
              type="button"
              className={styles.showAllButton}
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
            >
              {showAll ? (
                <>Show fewer <ChevronUp size={14} /></>
              ) : (
                <>Show all {subcategories.length} subcategories <ChevronDown size={14} /></>
              )}
            </button>
          )}
        </section>
      )}

      {recipes.length > 0 && (
        <section>
          <h2 className={styles.sectionTitle}>Recipes</h2>
          <ul className={styles.recipeList}>
            {recipes.map((r) => (
              <li key={r.href} className={styles.recipeItem}>
                <Link href={r.href} className={styles.recipeLink}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};
