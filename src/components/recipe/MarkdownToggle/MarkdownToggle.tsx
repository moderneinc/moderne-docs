import React, { type FunctionComponent } from 'react';
import clsx from 'clsx';
import { Eye, Code } from 'lucide-react';
import styles from './MarkdownToggle.module.css';

export type MarkdownView = 'rendered' | 'raw';

/**
 * Page-level rendered ⇄ raw toggle, meant for the top-right corner of the recipe page — the spot
 * IDEs put their preview/source switch. Replaces the old "View as Markdown" CTA, which is a "view"
 * affordance, not a "do" action, so it doesn't belong next to "Try in Platform".
 *
 * A controlled segmented control (the page owns the view state). Its chrome matches the page's other
 * segmented control — the Before/After/Diff picker in ExampleList.
 */
export const MarkdownToggle: FunctionComponent<{
  value: MarkdownView;
  onChange: (view: MarkdownView) => void;
}> = ({ value, onChange }) => (
  <div className={styles.toggle} role="tablist" aria-label="Recipe view">
    <button
      type="button"
      role="tab"
      aria-selected={value === 'rendered'}
      className={clsx(styles.segment, value === 'rendered' && styles.segment_active)}
      onClick={() => onChange('rendered')}
    >
      <Eye size={14} aria-hidden="true" />
      Rendered
    </button>
    <button
      type="button"
      role="tab"
      aria-selected={value === 'raw'}
      className={clsx(styles.segment, value === 'raw' && styles.segment_active)}
      onClick={() => onChange('raw')}
    >
      <Code size={14} aria-hidden="true" />
      Raw
    </button>
  </div>
);
