import React, { type FunctionComponent, type ReactNode } from 'react';
import { Accordion, type AccordionItem } from '../Accordion';
import { CopyButton } from '../CopyButton';
import type { RecipeDataTable } from '../shared/types';
import { renderWithCode } from '../shared/renderWithCode';
import styles from './DataTableList.module.css';
import shared from '../shared/styles.module.css';

/**
 * Data tables as a collapsible accordion: friendly name is the summary; expanding reveals id,
 * description, columns. Pass the section's markdown `## Data tables` heading as children: it renders
 * in the accordion header row (with the toggle) and still feeds the native TOC.
 */
export const DataTableList: FunctionComponent<{ tables: RecipeDataTable[]; children?: ReactNode }> = ({ tables, children }) => {
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

  // `.recipe` scopes the table-chrome resets (Infima zebra-striping removal) onto the column tables
  // inside each accordion body — matching ExampleList.
  return (
    <div className={shared.recipe}>
      <Accordion items={items}>{children}</Accordion>
    </div>
  );
};
