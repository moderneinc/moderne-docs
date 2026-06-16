import React, { useState, type FunctionComponent } from 'react';
import { Copy, Check } from 'lucide-react';
import { Accordion, type AccordionItem } from './Accordion';
import type { RecipeDataTable } from './recipeData';
import { renderWithCode } from './renderWithCode';
import styles from './styles.module.css';

/** Inline copy button for data table identifiers. */
const CopyIdButton: FunctionComponent<{ value: string }> = ({ value }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className={styles.copyId}
      onClick={() => {
        navigator.clipboard?.writeText(value).then(() => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        }).catch(() => { /* no-op */ });
      }}
      aria-label="Copy data table identifier"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
};

/**
 * Data tables as a collapsible accordion (see Accordion): the friendly name is
 * the summary; expanding reveals the technical id, description and column table.
 */
export const DataTableList: FunctionComponent<{ title: string; tables: RecipeDataTable[] }> = ({
  title,
  tables,
}) => {
  const items: AccordionItem[] = tables.map((dt) => ({
    key: dt.name,
    label: dt.displayName,
    content: (
      <div className={styles.dataTableBody}>
        <div className={styles.dataTableIdRow}>
          <code className={styles.dataTableId}>{dt.name}</code>
          <CopyIdButton value={dt.name} />
        </div>
        <p className={styles.dataTableDesc}>{renderWithCode(dt.description, styles.inlineCode)}</p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Column</th>
              <th className={styles.th}>Description</th>
            </tr>
          </thead>
          <tbody>
            {dt.columns.map((col) => (
              <tr key={col.name}>
                <td className={styles.td}>{col.name}</td>
                <td className={styles.td}>{renderWithCode(col.description, styles.inlineCode)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  }));

  return <Accordion title={title} items={items} />;
};
