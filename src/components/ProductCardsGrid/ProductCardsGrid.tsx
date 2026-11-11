import Link from '@docusaurus/Link';
import type { ProductItem } from '@site/src/components/ModMegaMenu/types';
import {
  BookOpen,
  Code,
  Crosshair,
  MessageSquare,
  Monitor,
  Server,
  SquareTerminal,
  type LucideIcon,
} from 'lucide-react';
import type { FunctionComponent } from 'react';
import styles from './ProductCardsGrid.module.css';

export type ProductCardsGridProps = {
  /** Product items to display, in display order */
  products: ProductItem[];
  /** How many products get the large, top-tier treatment (default 3) */
  featuredCount?: number;
};

/**
 * Lucide icons a product may name in its sidebar `customProps.homepageIcon`.
 * Kept as an explicit record rather than lucide's `icons` export so only these
 * seven ship in the bundle.
 */
const icons: Record<string, LucideIcon> = {
  'book-open': BookOpen,
  code: Code,
  crosshair: Crosshair,
  'message-square': MessageSquare,
  monitor: Monitor,
  server: Server,
  'square-terminal': SquareTerminal,
};

/**
 * Resolves a product's icon, failing the build loudly if the sidebar names an
 * icon that is not in the record, so a typo cannot fall back to the wrong
 * picture unnoticed.
 */
function iconFor(product: ProductItem): LucideIcon {
  const Icon = product.homepageIcon ? icons[product.homepageIcon] : undefined;
  if (!Icon) {
    throw new Error(
      `ProductCardsGrid: "${product.name}" needs customProps.homepageIcon in sidebars.ts set to one of: ${Object.keys(icons).join(', ')}`,
    );
  }
  return Icon;
}

/**
 * ProductCardsGrid is the "Browse by area" section. The first few products get
 * a large tile under a heavy rule; the rest sit in a compact list under
 * hairlines. Every tile is one link, and hovering it fills a raised panel under
 * a green rule.
 */
export const ProductCardsGrid: FunctionComponent<ProductCardsGridProps> = ({
  products,
  featuredCount = 3,
}) => {
  const featured = products.slice(0, featuredCount);
  const rest = products.slice(featuredCount);

  return (
    <section className={styles.browseByProduct} aria-labelledby="browse-by-area">
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle} id="browse-by-area">
          Browse by area
        </h2>
        <span className={styles.sectionCount}>{products.length} areas</span>
      </div>

      <div className={styles.featuredGrid}>
        {featured.map((product) => {
          const Icon = iconFor(product);
          return (
            <Link
              key={product.name}
              href={product.homepageHref || product.href}
              className={styles.areaCard}
            >
              <Icon className={styles.areaIcon} strokeWidth={1.6} aria-hidden="true" />
              <span className={styles.areaName}>{product.name}</span>
              <span className={styles.areaDescription}>{product.description}</span>
              <span className={styles.explore}>
                Explore{' '}
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      {rest.length > 0 && (
        <div className={styles.compactGrid}>
          {rest.map((product) => {
            const Icon = iconFor(product);
            return (
              <Link
                key={product.name}
                href={product.homepageHref || product.href}
                className={styles.compactCard}
              >
                <span className={styles.compactHead}>
                  <Icon className={styles.compactIcon} strokeWidth={1.6} aria-hidden="true" />
                  <span className={styles.compactName}>{product.name}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </span>
                <span className={styles.compactDescription}>{product.description}</span>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};

ProductCardsGrid.displayName = 'ProductCardsGrid';
