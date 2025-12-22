import React, { FunctionComponent } from 'react';
import { NeoCard } from '../NeoCard';
import { businessItems } from '../../config/megaMenuData';
import type { SectionProps } from './types';
import styles from './NeoMegaMenu.module.css';

/**
 * ForBusinessSection - Part of right column in mega menu
 * Displays business/admin documentation as cards
 */
const ForBusinessSection: FunctionComponent<SectionProps> = ({ onClose }) => {
  return (
    <div>
      <h3>For Business</h3>
      <div className={styles.productList}>
        {businessItems.map((item) => (
          <NeoCard
            key={item.name}
            title={item.name}
            description={item.description}
            href={item.href}
            onClick={onClose}
            gem={
              <img
                src={item.icon}
                alt={`${item.name} icon`}
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

ForBusinessSection.displayName = 'ForBusinessSection';

export default ForBusinessSection;
