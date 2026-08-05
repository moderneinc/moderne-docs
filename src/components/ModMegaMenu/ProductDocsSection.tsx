import React, { FunctionComponent } from 'react';
import { ModCard } from '../ModCard';
import { products } from '../../config/megaMenuData';
import type { SectionProps } from './types';
import styles from './ModMegaMenu.module.css';

/**
 * ProductDocsSection - Left column of the mega menu
 * Displays product documentation as cards
 */
const ProductDocsSection: FunctionComponent<SectionProps> = ({ onClose }) => {
  return (
    <div>
      <h3 className={styles.sectionHeader}>Product Docs</h3>
      <div className={styles.productList}>
        {products.map((product) => (
          <ModCard
            key={product.name}
            title={product.name}
            description={product.description}
            href={product.href}
            onClick={onClose}
            gem={
              <img
                src={product.icon}
                alt={`${product.name} icon`}
                width={20}
                height={20}
              />
            }
          />
        ))}
      </div>
    </div>
  );
};

ProductDocsSection.displayName = 'ProductDocsSection';

export default ProductDocsSection;
