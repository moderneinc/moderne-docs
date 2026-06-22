import React, { type FunctionComponent, type ReactNode } from 'react';
import { NeoButton } from '@site/src/components/NeoButton';
import { CopyButton } from './CopyButton';
import { CopyPageMenu } from './CopyPageMenu';
import { AccessInfoButton } from './AccessInfoButton';
import styles from './RecipeHeader.module.css';

export interface RecipeHeaderProps {
  type: 'Composite recipe' | 'Single recipe';
  languages: string[];
  tags: string[];
  license: string;
  fqName: string;
  appLink: string;
  /** Raw markdown for the Copy-as-Markdown action. */
  markdown: string;
  moderneOnly?: boolean;
  children?: ReactNode;
}

/** Header band for a recipe page. Children carry the markdown title + description (slot). */
export const RecipeHeader: FunctionComponent<RecipeHeaderProps> = ({
  type, languages, tags, license, fqName, appLink, markdown, moderneOnly = false, children,
}) => (
  <header className={styles.recipeHeader}>
    <div className={styles.badges}>
      <span className={styles.badge}>{type}</span>
      {languages.map((l) => (<span key={l} className={styles.badge}>{l}</span>))}
      {moderneOnly && (
        <span className={styles.moderneOnly}>
          <span className={styles.badgeModerne}>Moderne Only</span>
          <AccessInfoButton />
        </span>
      )}
    </div>

    <div className={styles.title}>{children}</div>

    <div className={styles.idRow}>
      <code className={styles.fqName}>{fqName}</code>
      <CopyButton value={fqName} label="Copy recipe ID" />
    </div>

    {tags.length > 0 && (
      <ul className={styles.tagChips}>
        {tags.map((t) => (<li key={t} className={styles.tagChip}>{t}</li>))}
      </ul>
    )}

    <div className={styles.actions}>
      <NeoButton variant="primary" href={appLink} target="_blank" rel="noopener noreferrer">
        Try in Platform
      </NeoButton>
      <CopyPageMenu markdown={markdown} />
      <span className={styles.licenseChip}>{license}</span>
    </div>
  </header>
);
