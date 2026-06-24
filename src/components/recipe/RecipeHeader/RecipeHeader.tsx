import React, { type FunctionComponent } from 'react';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import { NeoButton } from '@site/src/components/NeoButton';
import { CopyButton } from '../CopyButton';
import { AccessInfoButton } from '../AccessInfoButton';
import { renderWithCode } from '../shared/renderWithCode';
import styles from './RecipeHeader.module.css';
import shared from '../shared/styles.module.css';

export interface RecipeHeaderProps {
  displayName: string;
  description: string;
  type: 'Composite recipe' | 'Single recipe';
  languages: string[];
  tags: string[];
  license: string;
  fqName: string;
  /** Maven coordinates `groupId:artifactId`, shown as a second code-chip when present. */
  artifact?: string;
  appLink: string;
  /** Raw markdown source URL (e.g. a raw.githubusercontent.com link). Consumed by the page-level
   *  rendered/raw MarkdownToggle, not the header itself. */
  markdownUrl: string;
  /** Proprietary recipe — shows the "Moderne Only" access badge + info popover instead of "Open source". */
  moderneOnly?: boolean;
}

/** Tags are clickable on the generated pages (RSPEC rules link to SonarQube). */
const tagHref = (tag: string): string => {
  const rspec = tag.match(/^RSPEC-S(\d+)$/);
  if (rspec) return `https://next.sonarqube.com/sonarqube/coding_rules?rule_key=java%3AS${rspec[1]}`;
  return `https://docs.moderne.io/?s=${encodeURIComponent(tag)}`;
};

/** Header band for a recipe page: access badge, title, recipe-id/artifact code-chips, description, tags, CTAs. */
export const RecipeHeader: FunctionComponent<RecipeHeaderProps> = ({
  displayName, description, type, languages, tags, license, fqName, artifact, appLink, moderneOnly = false,
}) => (
  <header className={styles.header}>
    {/* Identity group: access badge, title, recipe-id/artifact chips — tight gaps within. */}
    <div className={styles.titleGroup}>
      <div className={styles.accessRow}>
        <span
          className={clsx(styles.accessBadge, moderneOnly ? styles.accessBadge_moderne : styles.accessBadge_oss)}
          title={
            moderneOnly
              ? 'Requires the Moderne platform (Moderne Source Available license)'
              : 'Open source — free to run anywhere'
          }
        >
          {moderneOnly ? 'Moderne Only' : 'Open source'}
        </span>
        {moderneOnly && <AccessInfoButton />}
      </div>

      <h1 className={styles.title}>{renderWithCode(displayName, styles.titleCode)}</h1>

      <div className={styles.idArtifactRow}>
        <div className={styles.codeChip}>
          <span className={styles.codeChipLabel}>Recipe ID</span>
          <code className={styles.idCode}>{fqName}</code>
          <CopyButton value={fqName} label="Copy recipe ID" />
        </div>
        {artifact && (
          <div className={styles.codeChip}>
            <span className={styles.codeChipLabel}>Artifact</span>
            <code className={styles.idCode}>{artifact}</code>
            <CopyButton value={artifact} label="Copy artifact coordinates" />
          </div>
        )}
      </div>
    </div>

    {/* Summary group: description + tags — tight gaps within. */}
    <div className={styles.metaGroup}>
      <p className={styles.description}>{renderWithCode(description, styles.descCode)}</p>

      <div className={styles.tagRow}>
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
    </div>

    <div className={styles.actions}>
      <div className={styles.actionButtons}>
        {/* Tooltip sets expectations: the platform is the hosted product and needs a Moderne
            account — so prospects aren't surprised by a sign-in. Button itself is unchanged. */}
        <span className={styles.tryWrap}>
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
          <span className={styles.tryTooltip} role="tooltip">
            Try this recipe in the Moderne platform. Not a user yet? You’ll get a no-setup demo
            environment, with nothing to install or configure.
          </span>
        </span>
      </div>
    </div>
  </header>
);
