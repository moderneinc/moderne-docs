import React from 'react';
import { NeoCard } from '../NeoCard';
import { businessItems } from '../../config/megaMenuData';
import styles from './MegaMenu.module.css';

/**
 * ForBusinessSection - Part of right column in mega menu
 * Displays business/admin documentation as a card
 */
export default function ForBusinessSection({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.businessSection}>
      <h3 className={styles.sectionHeader}>For Business</h3>
      <div className={styles.cardContainer}>
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
}
