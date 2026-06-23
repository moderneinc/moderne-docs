import React, { useState, type FunctionComponent, type ReactNode, type SyntheticEvent } from 'react';
import { ChevronRight } from 'lucide-react';
import { NeoButton } from '@site/src/components/NeoButton';
import styles from './Accordion.module.css';
import shared from '../shared/styles.module.css';

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
 * only when there's more than one) drives every row.
 *
 * Pass the section's markdown `##` heading as `children`: it renders in one row
 * with the toggle, and (being a real markdown heading node) still feeds the native
 * Docusaurus TOC + anchor IDs. When no heading is passed, only the toggle renders.
 *
 * Every <details> keeps its body in the DOM when collapsed, so crawlers and the
 * .md / llms.txt export read all of it.
 */
export const Accordion: FunctionComponent<{ items: AccordionItem[]; children?: ReactNode }> = ({ items, children }) => {
  const [open, setOpen] = useState<boolean[]>(() => items.map((_, i) => i === 0));
  const allOpen = open.length > 0 && open.every(Boolean);

  const toggleAll = () => setOpen(items.map(() => !allOpen));
  const onToggle = (i: number, isOpen: boolean) =>
    setOpen((prev) => prev.map((o, j) => (j === i ? isOpen : o)));

  const toggle =
    items.length > 1 ? (
      <NeoButton variant="text" size="small" onClick={toggleAll}>
        {allOpen ? 'Collapse all' : 'Expand all'}
      </NeoButton>
    ) : null;

  return (
    <div className={shared.section}>
      {children ? (
        <div className={shared.sectionHeader}>
          {children}
          {toggle}
        </div>
      ) : (
        toggle && <div className={styles.accordionToolbar}>{toggle}</div>
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
    </div>
  );
};
