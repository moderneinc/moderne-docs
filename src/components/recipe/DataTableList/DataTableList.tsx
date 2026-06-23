import React, { type FunctionComponent } from 'react';
import { Accordion, type AccordionItem } from '../Accordion';
import { CopyButton } from '../CopyButton';
import type { RecipeDataTable } from '../shared/types';
import { renderWithCode } from '../shared/renderWithCode';
import styles from './DataTableList.module.css';
import shared from '../shared/styles.module.css';

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
        <p className={styles.dataTableDesc}>{renderWithCode(dt.description, shared.inlineCode)}</p>
        <div className={shared.tableScroll}>
          <table className={shared.table}>
            <thead><tr><th className={shared.th}>Column</th><th className={shared.th}>Description</th></tr></thead>
            <tbody>
              {dt.columns.map((col) => (
                <tr key={col.name}>
                  <td className={shared.td}>{col.name}</td>
                  <td className={shared.td}>{renderWithCode(col.description, shared.inlineCode)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  }));

  return <Accordion items={items} />;
};
