import React, { type FunctionComponent } from 'react';
import { Accordion, type AccordionItem } from './Accordion';
import { CopyButton } from './CopyButton';
import type { RecipeDataTable } from './types';
import { renderWithCode } from './renderWithCode';
import styles from './styles.module.css';

/** Data tables as a collapsible accordion: friendly name is the summary; expanding reveals id, description, columns. */
export const DataTableList: FunctionComponent<{ tables: RecipeDataTable[] }> = ({ tables }) => {
  const items: AccordionItem[] = tables.map((dt) => ({
    key: dt.name,
    label: dt.displayName,
    content: (
      <div className={styles.dataTableBody}>
        <div className={styles.dataTableIdRow}>
          <code className={styles.dataTableId}>{dt.name}</code>
          <CopyButton value={dt.name} label="Copy data table identifier" />
        </div>
        <p className={styles.dataTableDesc}>{renderWithCode(dt.description, styles.inlineCode)}</p>
        <table className={styles.table}>
          <thead><tr><th className={styles.th}>Column</th><th className={styles.th}>Description</th></tr></thead>
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

  return <Accordion items={items} />;
};
