import Link from '@docusaurus/Link';
import type { ProductItem } from '@site/src/components/NeoMegaMenu/types';
import type { FunctionComponent } from 'react';
import styles from './ProductCardsGrid.module.css';

export type ProductCardsGridProps = {
  /** Product items to display in the grid */
  products: ProductItem[];
};

/**
 * ProductCardsGrid displays product documentation links in a responsive grid.
 * Shows 3 columns on desktop, 2 on tablet, 1 on mobile.
 * Each card includes an icon, title, and description.
 */
export const ProductCardsGrid: FunctionComponent<ProductCardsGridProps> = ({
  products,
}) => {
  return (
    <section className={styles.browseByProduct}>
      <h2 className={styles.sectionTitle}>Browse by area</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className={styles.productCard}
          >
            <div className={styles.productCardIcon}>
              <img src={product.icon} alt="" className={styles.productCardIconImage} />
            </div>
            <div className={styles.productCardContent}>
              <h3 className={styles.productCardTitle}>{product.name}</h3>
              <p className={styles.productCardDescription}>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

ProductCardsGrid.displayName = 'ProductCardsGrid';
