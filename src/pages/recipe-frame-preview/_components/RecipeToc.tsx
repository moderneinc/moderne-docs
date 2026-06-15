import React, { useEffect, useState, type FunctionComponent } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface TocChild {
  label: string;
  href: string;
}

export interface TocItem {
  id: string;
  label: string;
  children?: TocChild[];
}

/**
 * Sticky right-rail table of contents — represents the fixed "on this page" menu
 * the real docs pages render from headings, giving jump-to links for the larger
 * sections (and nested data-table names). Hidden on narrow screens, like the docs.
 */
export const RecipeToc: FunctionComponent<{ items: TocItem[] }> = ({ items }) => {
  const [active, setActive] = useState<string | undefined>(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className={styles.tocNav} aria-label="On this page">
      <div className={styles.tocTitle}>On this page</div>
      <ul className={styles.tocList}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              className={clsx(styles.tocLink, active === item.id && styles.tocLinkActive)}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
            {item.children && (
              <ul className={styles.tocSubList}>
                {item.children.map((child, i) => (
                  <li key={i}>
                    <a className={clsx(styles.tocLink, styles.tocSubLink)} href={child.href}>
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
