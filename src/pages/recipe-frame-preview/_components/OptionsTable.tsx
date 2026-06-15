import React, { type FunctionComponent } from 'react';
import clsx from 'clsx';
import type { RecipeOption } from './recipeData';
import { renderWithCode } from './renderWithCode';
import styles from './styles.module.css';

/**
 * Options as a structured card. Tags (type + required/optional) use the shared
 * Neo `.chip`; code (name + example) uses the shared inline-code styling — so it
 * matches the rest of the page. Stays a semantic <table> (Parameter / Type /
 * Description / Example) with every value as real text for crawlers and screen readers.
 */
export const OptionsTable: FunctionComponent<{ options: RecipeOption[] }> = ({ options }) => (
  <div className={styles.optionsCard}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th} scope="col">
            Parameter
          </th>
          <th className={styles.th} scope="col">
            Type
          </th>
          <th className={styles.th} scope="col">
            Description
          </th>
          <th className={styles.th} scope="col">
            Example
          </th>
        </tr>
      </thead>
      <tbody>
        {options.map((opt) => (
          <tr key={opt.name}>
            <td className={styles.td}>
              <code className={styles.optionName}>{opt.name}</code>
            </td>
            <td className={styles.td}>
              <span className={styles.chip}>{opt.type}</span>
            </td>
            <td className={styles.td}>
              <span className={styles.optionDesc}>{renderWithCode(opt.description, styles.inlineCode)}</span>
            </td>
            <td className={styles.td}>
              <div className={styles.optionExampleCell}>
                <span className={clsx(styles.chip, opt.required && styles.chipDanger)}>
                  {opt.required ? 'Required' : 'Optional'}
                </span>
                {opt.example ? (
                  <code className={styles.optionExample}>{opt.example}</code>
                ) : (
                  <span className={styles.optionExampleNone}>—</span>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
