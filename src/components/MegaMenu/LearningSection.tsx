import Link from '@docusaurus/Link';
import { ArrowRight } from 'lucide-react';
import { learningItems } from '../../config/megaMenuData';
import styles from './MegaMenu.module.css';

/**
 * LearningSection - Right column of the mega menu
 * Displays learning resources and documentation links with arrow icons
 */
export default function LearningSection({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <h3>Learning & resources</h3>
      <div className={styles.learningList}>
        {learningItems.map((item) => {
          const content = (
            <>
              <ArrowRight className={styles.learningArrow} size={16} />
              <span className={styles.learningName}>{item.name}</span>
            </>
          );

          if (item.external) {
            return (
              <a
                key={item.name}
                href={item.href}
                className={styles.learningItem}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={styles.learningItem}
              onClick={onClose}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
