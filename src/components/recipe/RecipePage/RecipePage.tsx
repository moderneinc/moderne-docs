import React, { useState, type FunctionComponent, type ReactNode } from 'react';
import { MarkdownToggle, type MarkdownView } from '../MarkdownToggle';
import { CopyButton } from '../CopyButton';
import styles from './RecipePage.module.css';

/**
 * Wrapper for a whole recipe page. Owns the IDE-style rendered ⇄ raw view state and renders the
 * top-right MarkdownToggle over the page body. "Rendered" shows the recipe components (the children);
 * "Raw" swaps them, in place, for the `.md` source with a corner copy button.
 *
 * This lives at the recipe-page level — only recipe MDX wraps its body in `<RecipePage>` — so the
 * toggle is isolated to recipe pages without swizzling any Docusaurus theme component. When no
 * `rawMarkdown` is provided there's nothing to toggle to, so the body renders plainly.
 */
export const RecipePage: FunctionComponent<{
  /** Raw `.md` source for the "Raw" view. Omit to render the body with no toggle. */
  rawMarkdown?: string;
  children: ReactNode;
}> = ({ rawMarkdown, children }) => {
  const [view, setView] = useState<MarkdownView>('rendered');

  if (!rawMarkdown) {
    return <div className={styles.body}>{children}</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.toolbar}>
        <MarkdownToggle value={view} onChange={setView} />
      </div>
      {view === 'rendered' ? (
        <div className={styles.body}>{children}</div>
      ) : (
        <div className={styles.rawWrap}>
          <div className={styles.rawCopy}>
            <CopyButton value={rawMarkdown} label="Copy markdown source" />
          </div>
          <pre className={styles.raw}>{rawMarkdown}</pre>
        </div>
      )}
    </div>
  );
};
