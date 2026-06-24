import React, { type FunctionComponent, type ReactNode } from 'react';
import clsx from 'clsx';
import type { RecipeOption } from '../shared/types';
import { renderWithCode } from '../shared/renderWithCode';
import styles from './OptionsTable.module.css';
import shared from '../shared/styles.module.css';

/**
 * Options as a structured card. Stays a semantic <table> with every value as real text for crawlers
 * and screen readers. Required options sort first.
 *
 * Each option spans two rows: line 1 is the scannable key facts — Parameter · Example · Type ·
 * Required (the order you assign a value in an IDE / on the CLI) — and line 2 is the description
 * across the full table width, so it gets room to breathe instead of a cramped column. A divider
 * sits between options (above each option's line 1), never between an option's own two lines.
 *
 * Pass the section's markdown `## Options` heading as children: it renders in a section header row
 * with the metrics (parameter count + required/optional tally) on the right, and still feeds the
 * native TOC.
 */
export const OptionsTable: FunctionComponent<{ options: RecipeOption[]; children: ReactNode }> = ({ options, children }) => {
  const sorted = [...options].sort((a, b) => {
    if (a.required !== b.required) return a.required ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
  const required = options.filter((o) => o.required).length;
  const optional = options.length - required;

  return (
    <div className={clsx(shared.recipe, shared.section)}>
      <div className={shared.sectionHeader}>
        {children}
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
      </div>
      <div className={styles.optionsCard}>
        <div className={shared.tableScroll}>
          <table className={styles.optionsTable}>
            <thead>
              <tr>
                <th className={styles.headCell} scope="col">Parameter</th>
                <th className={styles.headCell} scope="col">Example</th>
                <th className={styles.headCell} scope="col">Type</th>
                <th className={styles.headCell} scope="col">Required</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((opt, i) => (
                <React.Fragment key={opt.name}>
                  <tr className={clsx(styles.paramRow, i > 0 && styles.optionDivider)}>
                    <th scope="row" className={clsx(styles.cell, styles.paramCell)}>
                      <code className={clsx(shared.inlineCode, styles.optionName)}>{opt.name}</code>
                    </th>
                    <td className={styles.cell}>
                      {opt.example ? (
                        <code className={clsx(shared.inlineCode, styles.optionExample)}>{opt.example}</code>
                      ) : (
                        <span className={styles.optionExampleNone}>—</span>
                      )}
                    </td>
                    <td className={styles.cell}>
                      <span className={shared.chip}>{opt.type}</span>
                    </td>
                    <td className={styles.cell}>
                      <span className={styles.requiredMarker}>
                        <span
                          className={clsx(
                            styles.optionsSummaryDot,
                            opt.required ? styles.optionsSummaryDot_req : styles.optionsSummaryDot_opt,
                          )}
                          aria-hidden="true"
                        />
                        <span className={opt.required ? styles.optionRequired : styles.optionOptional}>
                          {opt.required ? 'Required' : 'Optional'}
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr className={styles.descRow}>
                    <td className={styles.descCell} colSpan={4}>
                      <span className={styles.optionDesc}>{renderWithCode(opt.description, shared.inlineCode)}</span>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
