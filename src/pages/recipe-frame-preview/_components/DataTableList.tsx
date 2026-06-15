import React, { type FunctionComponent } from 'react';
import { Accordion, type AccordionItem } from './Accordion';
import type { RecipeDataTable } from './recipeData';
import styles from './styles.module.css';

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
        <code className={styles.dataTableId}>{dt.name}</code>
        <p className={styles.dataTableDesc}>{dt.description}</p>
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
                <td className={styles.td}>{col.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  }));

  return <Accordion title={title} items={items} />;
};
