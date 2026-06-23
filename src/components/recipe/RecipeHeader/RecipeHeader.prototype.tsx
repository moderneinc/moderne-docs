/** Faithful copy of the PR #776 preview header, for the Storybook visual comparison only. */
import React from 'react';
import clsx from 'clsx';
import { ArrowRight, FileText, Clock } from 'lucide-react';
import { NeoButton } from '@site/src/components/NeoButton';
import { CopyButton } from '../CopyButton';
import { renderWithCode } from '../shared/renderWithCode';
import styles from './RecipeHeader.module.css';
import shared from '../shared/styles.module.css';
import { SAMPLE } from './RecipeHeader.fixtures';

const tagHref = (tag: string): string => {
  const rspec = tag.match(/^RSPEC-S(\d+)$/);
  if (rspec) return `https://next.sonarqube.com/sonarqube/coding_rules?rule_key=java%3AS${rspec[1]}`;
  return `https://docs.moderne.io/?s=${encodeURIComponent(tag)}`;
};

export const PrototypeHeader: React.FunctionComponent = () => (
  <header className={styles.header}>
    <div className={styles.accessRow}>
      <span
        className={clsx(styles.accessBadge, styles.accessBadge_oss)}
        title="Open source — Apache-2.0, free to run anywhere"
      >
        Open source
      </span>
    </div>

    <h1 className={styles.title}>{renderWithCode(SAMPLE.displayName, styles.titleCode)}</h1>

    <div className={styles.idArtifactRow}>
      <div className={styles.codeChip}>
        <span className={styles.codeChipLabel}>Recipe ID</span>
        <code className={styles.idCode}>{SAMPLE.fqName}</code>
        <CopyButton value={SAMPLE.fqName} label="Copy recipe id" />
      </div>
      <div className={styles.codeChip}>
        <span className={styles.codeChipLabel}>Artifact</span>
        <code className={styles.idCode}>{SAMPLE.artifact}</code>
        <CopyButton value={SAMPLE.artifact} label="Copy artifact coordinates" />
      </div>
    </div>

    <p className={styles.description}>{renderWithCode(SAMPLE.description, styles.descCode)}</p>

    <div className={styles.tagRow}>
      <span className={shared.chip}>{SAMPLE.type}</span>
      {SAMPLE.languages.map((l) => (
        <span key={l} className={shared.chip}>{l}</span>
      ))}
      {SAMPLE.tags.map((t) => (
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
      <span className={shared.chip}>{SAMPLE.license}</span>
    </div>

    <div className={styles.actions}>
      <span className={styles.headerTimeSaved}>
        <Clock size={15} className={styles.headerTimeSavedIcon} aria-hidden="true" />
        <span className={styles.headerTimeSavedValue}>~5 min / file</span>
        <span className={styles.headerTimeSavedLabel}>est. time saved</span>
      </span>
      <div className={styles.actionButtons}>
        <NeoButton
          variant="primary"
          size="small"
          href={SAMPLE.appLink}
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
          href={SAMPLE.markdownUrl}
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
