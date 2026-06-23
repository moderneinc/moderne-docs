import React, { type FunctionComponent } from 'react';
import clsx from 'clsx';
import type { RecipeOption } from '../shared/types';
import { renderWithCode } from '../shared/renderWithCode';
import styles from '../shared/styles.module.css';

/**
 * Options as a structured card. Stays a semantic <table> (Parameter / Type /
 * Description / Example / Required) with every value as real text for crawlers
 * and screen readers. Required options sort first. A metrics row (parameter count
 * + required/optional tally) sits on the page's `## Options` heading row.
 */
export const OptionsTable: FunctionComponent<{ options: RecipeOption[] }> = ({ options }) => {
  const sorted = [...options].sort((a, b) => {
    if (a.required !== b.required) return a.required ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
  const required = options.filter((o) => o.required).length;
  const optional = options.length - required;

  return (
    <>
      <div className={styles.optionsMeta}>
        <span className={styles.optionsCount}>{options.length} parameters</span>
        <div className={styles.optionsSummary}>
          {required > 0 && (
            <span className={styles.optionsSummaryItem}>
              <span className={clsx(styles.optionsSummaryDot, styles.optionsSummaryDot_req)} aria-hidden="true" />
              {required} required
            </span>
          )}
          {optional > 0 && (
            <span className={styles.optionsSummaryItem}>
              <span className={clsx(styles.optionsSummaryDot, styles.optionsSummaryDot_opt)} aria-hidden="true" />
              {optional} optional
            </span>
          )}
        </div>
      </div>
      <div className={styles.optionsCard}>
      <div className={styles.tableScroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th} scope="col">Parameter</th>
            <th className={styles.th} scope="col">Type</th>
            <th className={styles.th} scope="col">Description</th>
            <th className={styles.th} scope="col">Example</th>
            <th className={styles.th} scope="col">Required</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((opt) => (
            <tr key={opt.name}>
              <td className={styles.td}><code className={styles.optionName}>{opt.name}</code></td>
              <td className={styles.td}><span className={styles.chip}>{opt.type}</span></td>
              <td className={styles.td}><span className={styles.optionDesc}>{renderWithCode(opt.description, styles.inlineCode)}</span></td>
              <td className={styles.td}>
                {opt.example ? (
                  <code className={styles.optionExample}>{opt.example}</code>
                ) : (
                  <span className={styles.optionExampleNone}>—</span>
                )}
              </td>
              <td className={styles.td}>
                <span className={opt.required ? styles.optionRequired : styles.optionOptional}>
                  {opt.required ? 'Required' : 'Optional'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
};
