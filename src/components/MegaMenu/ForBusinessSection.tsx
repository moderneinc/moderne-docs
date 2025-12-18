import React from 'react';
import Link from '@docusaurus/Link';
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
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className={styles.cardLink}
          >
            <NeoCard
              title={item.name}
              description={item.description}
              gem={
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
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
