import Link from '@docusaurus/Link';
import type { StartExploringColumn } from '@site/src/config/megaMenuData';
import { ExternalLink } from 'lucide-react';
import type { FunctionComponent } from 'react';
import styles from './StartExploringSection.module.css';

export type StartExploringSectionProps = {
  /** Columns of links to display */
  columns: StartExploringColumn[];
};

/**
 * StartExploringSection displays resource links in a 3-column layout.
 * Each column has a title and list of links.
 * External links show an external link icon.
 */
export const StartExploringSection: FunctionComponent<StartExploringSectionProps> = ({
  columns,
}) => {
  return (
    <section className={styles.startExploring}>
      <h2 className={styles.sectionTitle}>Start exploring</h2>
      <div className={styles.columnsGrid}>
        {columns.map((column) => (
          <div key={column.title} className={styles.column}>
            <h3 className={styles.columnTitle}>{column.title}</h3>
            <ul className={styles.linkList}>
              {column.links.map((link) => (
                <li key={link.name} className={styles.linkItem}>
                  <Link
                    href={link.href}
                    className={styles.link}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                    {link.external && (
                      <ExternalLink size={12} className={styles.externalIcon} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

StartExploringSection.displayName = 'StartExploringSection';
