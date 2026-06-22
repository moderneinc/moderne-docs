import React, { type FunctionComponent, type ReactNode } from 'react';
import clsx from 'clsx';
import { FileText, ArrowRight } from 'lucide-react';
import { NeoButton } from '@site/src/components/NeoButton';
import { CopyButton } from './CopyButton';
import { AccessInfoButton } from './AccessInfoButton';
import shared from './styles.module.css';
import styles from './RecipeHeader.module.css';

export interface RecipeHeaderProps {
  type: 'Composite recipe' | 'Single recipe';
  languages: string[];
  tags: string[];
  license: string;
  fqName: string;
  appLink: string;
  /** Raw markdown source URL (e.g. a raw.githubusercontent.com link) for "View as Markdown". */
  markdownUrl: string;
  moderneOnly?: boolean;
  children?: ReactNode;
}

/** Tags are clickable on the generated pages (RSPEC rules link to SonarQube). */
const tagHref = (tag: string): string => {
  const rspec = tag.match(/^RSPEC-S(\d+)$/);
  if (rspec) return `https://next.sonarqube.com/sonarqube/coding_rules?rule_key=java%3AS${rspec[1]}`;
  return `https://docs.moderne.io/?s=${encodeURIComponent(tag)}`;
};

/** Header band for a recipe page. Children carry the markdown title + description (slot). */
export const RecipeHeader: FunctionComponent<RecipeHeaderProps> = ({
  type, languages, tags, license, fqName, appLink, markdownUrl, moderneOnly = false, children,
}) => (
  <header className={styles.recipeHeader}>
    {moderneOnly && (
      <div className={styles.moderneOnly}>
        <span className={styles.badgeModerne}>Moderne Only</span>
        <AccessInfoButton />
      </div>
    )}

    <div className={styles.title}>{children}</div>

    <div className={styles.idRow}>
      <code className={styles.fqName}>{fqName}</code>
      <CopyButton value={fqName} label="Copy recipe ID" />
    </div>

    {/* Uniform, low-contrast metadata pills using the shared chip styling. Tags link to SonarQube. */}
    <div className={shared.tagRow}>
      <span className={shared.chip}>{type}</span>
      {languages.map((l) => (
        <span key={l} className={shared.chip}>{l}</span>
      ))}
      {tags.map((t) => (
        <a
          key={t}
          className={clsx(shared.chip, shared.chipLink)}
          href={tagHref(t)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t}
        </a>
      ))}
      <span className={shared.chip}>{license}</span>
    </div>

    <div className={shared.actions}>
      <div className={shared.actionButtons}>
        <NeoButton
          variant="primary"
          size="small"
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          icon={<ArrowRight size={14} />}
          iconPosition="right"
        >
          Try in Platform
        </NeoButton>
        <NeoButton
          variant="outline"
          size="small"
          href={markdownUrl}
          target="_blank"
          rel="noopener noreferrer"
          icon={<FileText size={14} />}
          iconPosition="left"
        >
          View as Markdown
        </NeoButton>
      </div>
    </div>
  </header>
);
