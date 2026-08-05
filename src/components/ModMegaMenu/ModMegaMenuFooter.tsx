import React, { FunctionComponent } from 'react';
import { ExternalLink } from 'lucide-react';
import { footerLinks } from '../../config/megaMenuData';
import type { SectionProps } from './types';
import styles from './ModMegaMenu.module.css';

/**
 * ModMegaMenuFooter - Footer section of the mega menu
 * Displays bottom row of links (Moderne Website, Go to App, OpenRewrite Docs)
 */
const ModMegaMenuFooter: FunctionComponent<SectionProps> = ({ onClose }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        {footerLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
            onClick={onClose}
          >
            {link.name}
              <ExternalLink className={styles.externalIcon} size={12} />
          </a>
        ))}
      </div>
    </div>
  );
};

ModMegaMenuFooter.displayName = 'ModMegaMenuFooter';

export default ModMegaMenuFooter;
