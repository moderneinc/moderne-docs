import React, { useState, type FunctionComponent, type ReactNode, type SyntheticEvent } from 'react';
import { ChevronRight } from 'lucide-react';
import { NeoButton } from '@site/src/components/NeoButton';
import styles from '../shared/styles.module.css';

export interface AccordionItem {
  /** Stable React key. */
  key: string;
  /** Summary text shown on the collapsed row. */
  label: ReactNode;
  /** Body revealed when expanded. */
  content: ReactNode;
}

/**
 * Collapsible list of bordered containers, shared by Examples, Usage and Data
 * tables. The first item opens by default; an Expand/Collapse-all toggle (shown
 * only when there's more than one) drives every row. The section heading itself
 * lives in the page markdown (so the native Docusaurus TOC sees it) — this
 * component renders only the toggle and the rows.
 *
 * Every <details> keeps its body in the DOM when collapsed, so crawlers and the
 * .md / llms.txt export read all of it.
 */
export const Accordion: FunctionComponent<{ items: AccordionItem[] }> = ({ items }) => {
  const [open, setOpen] = useState<boolean[]>(() => items.map((_, i) => i === 0));
  const allOpen = open.length > 0 && open.every(Boolean);

  const toggleAll = () => setOpen(items.map(() => !allOpen));
  const onToggle = (i: number, isOpen: boolean) =>
    setOpen((prev) => prev.map((o, j) => (j === i ? isOpen : o)));

  return (
    <>
      {items.length > 1 && (
        <div className={styles.accordionToolbar}>
          <NeoButton variant="text" size="small" onClick={toggleAll}>
            {allOpen ? 'Collapse all' : 'Expand all'}
          </NeoButton>
        </div>
      )}
      <div className={styles.accordion}>
        {items.map((item, i) => (
          <details
            key={item.key}
            className={styles.accordionItem}
            open={open[i]}
            onToggle={(e: SyntheticEvent<HTMLDetailsElement>) => onToggle(i, e.currentTarget.open)}
          >
            <summary className={styles.accordionSummary}>
              <ChevronRight size={16} className={styles.accordionChevron} aria-hidden="true" />
              <span className={styles.accordionLabel}>{item.label}</span>
            </summary>
            <div className={styles.accordionBody}>{item.content}</div>
          </details>
        ))}
      </div>
    </>
  );
};
