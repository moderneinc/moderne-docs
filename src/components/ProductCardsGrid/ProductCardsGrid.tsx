import Link from '@docusaurus/Link';
import type { ProductItem } from '@site/src/components/ModMegaMenu/types';
import type { FunctionComponent } from 'react';
import styles from './ProductCardsGrid.module.css';

export type ProductCardsGridProps = {
  /** Product items to display in the grid */
  products: ProductItem[];
};

/**
 * ProductCardsGrid displays product documentation links in a responsive grid.
 * Auto-fills columns at a 320px minimum (three across on desktop, reflowing to
 * one on mobile). Each card is a flat Morpheus surface tile with a title,
 * description, and an "Explore" affordance.
 */
export const ProductCardsGrid: FunctionComponent<ProductCardsGridProps> = ({
  products,
}) => {
  return (
    <section className={styles.browseByProduct}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>Browse by area</h2>
        <span className={styles.sectionCount}>{products.length} areas</span>
      </div>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.homepageHref || product.href}
            className={styles.productCard}
          >
            <div className={styles.productCardContent}>
              <h3 className={styles.productCardTitle}>{product.name}</h3>
              <p className={styles.productCardDescription}>{product.description}</p>
              <span className={styles.explore}>
                Explore <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

ProductCardsGrid.displayName = 'ProductCardsGrid';
