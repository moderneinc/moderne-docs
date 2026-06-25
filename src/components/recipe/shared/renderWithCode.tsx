import React from 'react';

/**
 * Render a string, turning `backtick` segments into inline <code> elements — so
 * mixed prose + code (recipe names, option/table descriptions, titles) renders
 * the same way the real docs do, instead of showing literal backticks or flat text.
 */
export const renderWithCode = (text: string, codeClassName: string): React.ReactNode[] =>
  text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith('`') && part.endsWith('`') ? (
      <code key={i} className={codeClassName}>
        {part.slice(1, -1)}
      </code>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
