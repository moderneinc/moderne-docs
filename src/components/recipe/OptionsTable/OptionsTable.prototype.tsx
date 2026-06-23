import React, { type FunctionComponent } from 'react';
import type { RecipeOption } from '../shared/types';
import { renderWithCode } from '../shared/renderWithCode';
import styles from './OptionsTable.module.css';
import shared from '../shared/styles.module.css';

/**
 * Options as a structured card. Tags (type + required/optional) use the shared
 * Neo `.chip`; code (name + example) uses the shared inline-code styling — so it
 * matches the rest of the page. Stays a semantic <table> (Parameter / Type /
 * Description / Example) with every value as real text for crawlers and screen readers.
 */
export const OptionsTable: FunctionComponent<{ options: RecipeOption[] }> = ({ options }) => {
  const sorted = [...options].sort((a, b) => {
    if (a.required !== b.required) return a.required ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className={styles.optionsCard}>
      <table className={shared.table}>
        <thead>
          <tr>
            <th className={shared.th} scope="col">
              Parameter
            </th>
            <th className={shared.th} scope="col">
              Type
            </th>
            <th className={shared.th} scope="col">
              Description
            </th>
            <th className={shared.th} scope="col">
              Example
            </th>
            <th className={shared.th} scope="col">
              Required
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((opt) => (
            <tr key={opt.name}>
              <td className={shared.td}>
                <code className={styles.optionName}>{opt.name}</code>
              </td>
              <td className={shared.td}>
                <span className={shared.chip}>{opt.type}</span>
              </td>
              <td className={shared.td}>
                <span className={styles.optionDesc}>{renderWithCode(opt.description, shared.inlineCode)}</span>
              </td>
              <td className={shared.td}>
                {opt.example ? (
                  <code className={styles.optionExample}>{opt.example}</code>
                ) : (
                  <span className={styles.optionExampleNone}>—</span>
                )}
              </td>
              <td className={shared.td}>
                <span className={opt.required ? styles.optionRequired : styles.optionOptional}>
                  {opt.required ? 'Required' : 'Optional'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
