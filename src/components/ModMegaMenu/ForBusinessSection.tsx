import React, { FunctionComponent } from 'react';
import { ModCard } from '../ModCard';
import { businessItems } from '../../config/megaMenuData';
import type { SectionProps } from './types';
import styles from './ModMegaMenu.module.css';

/**
 * ForBusinessSection - Part of right column in mega menu
 * Displays business/admin documentation as cards
 */
const ForBusinessSection: FunctionComponent<SectionProps> = ({ onClose }) => {
  return (
    <div>
      <h3 className={styles.sectionHeader}>For Business</h3>
      <div className={styles.productList}>
        {businessItems.map((item) => (
          <ModCard
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
