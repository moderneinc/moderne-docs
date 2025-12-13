import React from 'react';
import Link from '@docusaurus/Link';
import { products } from '../../config/megaMenuData';
import styles from './MegaMenu.module.css';

/**
 * ProductDocsSection - Left column of the mega menu
 * Displays product documentation links with icons and descriptions
 */
export default function ProductDocsSection({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <h3>Product Docs</h3>
      <div className={styles.productList}>
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className={styles.productItem}
            onClick={onClose}
          >
            <div className={styles.productIcon}>
              <img
                src={product.icon}
                alt={`${product.name} icon`}
                width={24}
                height={22}
              />
            </div>
            <div className={styles.productContent}>
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productDescription}>{product.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
