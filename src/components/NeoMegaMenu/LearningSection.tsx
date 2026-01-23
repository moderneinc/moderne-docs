import React, { FunctionComponent } from 'react';
import { ArrowRight } from 'lucide-react';
import { NeoButton } from '../NeoButton';
import { learningItems } from '../../config/megaMenuData';
import type { SectionProps } from './types';
import styles from './NeoMegaMenu.module.css';

/**
 * LearningSection - Part of right column in mega menu
 * Displays learning resources as secondary buttons with arrow icons
 */
const LearningSection: FunctionComponent<SectionProps> = ({ onClose }) => {
  return (
    <div className={styles.learningSection}>
      <h3 className={styles.sectionHeader}>Learning & resources</h3>
      <div className={styles.learningList}>
        {learningItems.map((item) => (
          <NeoButton
            key={item.name}
            variant="secondary"
            size="small"
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            onClick={onClose}
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            {item.name}
          </NeoButton>
        ))}
      </div>
    </div>
  );
};

LearningSection.displayName = 'LearningSection';

export default LearningSection;
