import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import clsx from 'clsx';
import { ArrowRight, FileText, Clock } from 'lucide-react';
import { NeoButton } from '@site/src/components/NeoButton';
import { RecipeHeader } from './RecipeHeader';
import { CopyButton } from './CopyButton';
import { AccessInfoButton } from './AccessInfoButton';
import { renderWithCode } from './renderWithCode';
import shared from './styles.module.css';

/**
 * Side-by-side comparison of the production `RecipeHeader` against a faithful copy of the
 * design-preview (PR #776) header. The "prototype" header below is vendored into this story
 * file purely for visual A/B — it renders against the same ported `styles.module.css` the
 * production components use, so the styling is apples-to-apples.
 */

// ---- Shared sample data (a composite recipe with RSPEC tags, to exercise linked tag chips) ----
const SAMPLE = {
  displayName: 'Common static analysis issues',
  description: 'Resolve common static analysis issues (also known as SAST issues).',
  fqName: 'org.openrewrite.staticanalysis.CommonStaticAnalysis',
  artifact: 'org.openrewrite.recipe:rewrite-static-analysis',
  type: 'Composite recipe' as const,
  languages: ['Java'],
  tags: ['RSPEC-S1192', 'RSPEC-S1889'],
  license: 'Moderne Source Available License',
  appLink: 'https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis',
  markdownUrl:
    'https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/commonstaticanalysis.md',
};

const tagHref = (tag: string): string => {
  const rspec = tag.match(/^RSPEC-S(\d+)$/);
  if (rspec) return `https://next.sonarqube.com/sonarqube/coding_rules?rule_key=java%3AS${rspec[1]}`;
  return `https://docs.moderne.io/?s=${encodeURIComponent(tag)}`;
};

/** Faithful copy of the PR #776 preview header (for visual comparison only). */
const PrototypeHeader: React.FunctionComponent = () => (
  <header className={shared.header}>
    <div className={shared.accessRow}>
      <span
        className={clsx(shared.accessBadge, shared.accessBadge_oss)}
        title="Open source — Apache-2.0, free to run anywhere"
      >
        Open source
      </span>
    </div>

    <h1 className={shared.title}>{renderWithCode(SAMPLE.displayName, shared.titleCode)}</h1>

    <div className={shared.idArtifactRow}>
      <div className={shared.codeChip}>
        <span className={shared.codeChipLabel}>Recipe ID</span>
        <code className={shared.idCode}>{SAMPLE.fqName}</code>
        <CopyButton value={SAMPLE.fqName} label="Copy recipe id" />
      </div>
      <div className={shared.codeChip}>
        <span className={shared.codeChipLabel}>Artifact</span>
        <code className={shared.idCode}>{SAMPLE.artifact}</code>
        <CopyButton value={SAMPLE.artifact} label="Copy artifact coordinates" />
      </div>
    </div>

    <p className={shared.description}>{renderWithCode(SAMPLE.description, shared.descCode)}</p>

    <div className={shared.tagRow}>
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

    <div className={shared.actions}>
      <span className={shared.headerTimeSaved}>
        <Clock size={15} className={shared.headerTimeSavedIcon} aria-hidden="true" />
        <span className={shared.headerTimeSavedValue}>~5 min / file</span>
        <span className={shared.headerTimeSavedLabel}>est. time saved</span>
      </span>
      <div className={shared.actionButtons}>
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

/** Production header fed the same sample data. */
const ProductionHeader: React.FunctionComponent<{ moderneOnly?: boolean }> = ({ moderneOnly }) => (
  <RecipeHeader
    displayName={SAMPLE.displayName}
    description={SAMPLE.description}
    type={SAMPLE.type}
    languages={SAMPLE.languages}
    tags={SAMPLE.tags}
    license={SAMPLE.license}
    fqName={SAMPLE.fqName}
    artifact={SAMPLE.artifact}
    appLink={SAMPLE.appLink}
    markdownUrl={SAMPLE.markdownUrl}
    moderneOnly={moderneOnly}
  />
);

const Panel: React.FunctionComponent<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div style={{ flex: '1 1 0', minWidth: 360 }}>
    <div style={{ font: '600 13px/1.4 system-ui', textTransform: 'uppercase', letterSpacing: '.04em', opacity: 0.6, marginBottom: 8 }}>
      {label}
    </div>
    {children}
  </div>
);

const meta: Meta<typeof RecipeHeader> = {
  title: 'Recipe/RecipeHeader',
  component: RecipeHeader,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof RecipeHeader>;

/** The production header on its own. */
export const Production: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 820 }}>
      <ProductionHeader />
    </div>
  ),
};

/** Production header for a Moderne-only (proprietary) recipe — shows the access badge + info popover. */
export const ProductionModerneOnly: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 820 }}>
      <ProductionHeader moderneOnly />
    </div>
  ),
};

/** Prototype (PR #776) header vs the production header, side by side, on the same data. */
export const Comparison: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <Panel label="Prototype (PR #776 target)">
          <PrototypeHeader />
        </Panel>
        <Panel label="Production (current)">
          <ProductionHeader />
        </Panel>
      </div>
    </div>
  ),
};
