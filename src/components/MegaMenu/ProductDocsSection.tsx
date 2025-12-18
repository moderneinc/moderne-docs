import React from 'react';
import Link from '@docusaurus/Link';
import { NeoCard } from '../NeoCard';
import { products } from '../../config/megaMenuData';
import styles from './MegaMenu.module.css';

/**
 * ProductDocsSection - Left column of the mega menu
 * Displays product documentation cards with icons and descriptions
 */
export default function ProductDocsSection({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.productSection}>
      <h3 className={styles.sectionHeader}>Product docs</h3>
      <div className={styles.cardContainer}>
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            onClick={onClose}
            className={styles.cardLink}
          >
            <NeoCard
              title={product.name}
              description={product.description}
              gem={
                <img
                  src={product.icon}
                  alt={`${product.name} icon`}
                  width={20}
                  height={20}
                />
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
