import Link from '@docusaurus/Link';
import type { ProductItem } from '@site/src/components/NeoMegaMenu/types';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Blocks,
  BookOpen,
  Globe,
  MessageSquare,
  Package,
  Shield,
  Sparkles,
  Terminal,
} from 'lucide-react';
import type { FunctionComponent } from 'react';
import styles from './ProductCardsGrid.module.css';

export type ProductCardsGridProps = {
  /** Product items to display in the grid */
  products: ProductItem[];
};

/** Flat Morpheus icon tiles, keyed by product name. Unknown products fall back to BookOpen. */
const productTileIcons: Record<string, LucideIcon> = {
  Platform: Globe,
  CLI: Terminal,
  'Agent tools': Sparkles,
  Recipes: Package,
  DX: Shield,
  Moddy: MessageSquare,
  'IDE plugins': Blocks,
};

/**
 * ProductCardsGrid displays product documentation links in a responsive grid.
 * Each card includes a flat icon tile, title, description, and explore link.
 */
export const ProductCardsGrid: FunctionComponent<ProductCardsGridProps> = ({
  products,
}) => {
  return (
    <section className={styles.browseByProduct}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>Browse by area</h2>
        <span className={styles.sectionMeta}>{products.length} areas</span>
      </div>
      <div className={styles.productGrid}>
        {products.map((product) => {
          const TileIcon = productTileIcons[product.name] ?? BookOpen;
          return (
            <Link
              key={product.name}
              href={product.homepageHref || product.href}
              className={styles.productCard}
            >
              <span className={styles.productCardTile}>
                <TileIcon size={22} strokeWidth={2} aria-hidden="true" />
              </span>
              <div className={styles.productCardContent}>
                <h3 className={styles.productCardTitle}>{product.name}</h3>
                <p className={styles.productCardDescription}>{product.description}</p>
                <span className={styles.productCardGo}>
                  Explore <ArrowRight size={12} aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

ProductCardsGrid.displayName = 'ProductCardsGrid';
