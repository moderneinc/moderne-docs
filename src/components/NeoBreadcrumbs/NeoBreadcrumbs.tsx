import React, { FunctionComponent } from 'react';
import { Home, ChevronRight } from 'lucide-react';
import styles from './NeoBreadcrumbs.module.css';

export type NeoBreadcrumbItem = {
  label: string;
  href?: string;
};

export type NeoBreadcrumbsProps = {
  items: NeoBreadcrumbItem[];
  showHomeIcon?: boolean;
};

export const NeoBreadcrumbs: FunctionComponent<NeoBreadcrumbsProps> = ({ items, showHomeIcon = true }) => {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
      <ol className={styles.list}>
        {showHomeIcon && (
          <>
            <li className={styles.item}>
              <a href="/" className={styles.link} aria-label="Home">
                <Home className={styles.homeIcon} size={16} />
              </a>
            </li>
            {items.length > 0 && (
              <li className={styles.separator} aria-hidden="true">
                <ChevronRight size={16} />
              </li>
            )}
          </>
        )}

        {items.map((item) => {
          const isLast = items.indexOf(item) === items.length - 1;

          return (
            <React.Fragment key={item.href || item.label}>
              <li className={styles.item}>
                {isLast || !item.href ? (
                  <span className={styles.current} aria-current={isLast ? 'page' : undefined}>
                    {item.label}
                  </span>
                ) : (
                  <a href={item.href} className={styles.link}>
                    {item.label}
                  </a>
                )}
              </li>

              {!isLast && (
                <li className={styles.separator} aria-hidden="true">
                  <ChevronRight size={16} />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

NeoBreadcrumbs.displayName = 'NeoBreadcrumbs';
