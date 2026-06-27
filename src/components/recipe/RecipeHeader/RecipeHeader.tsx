import React, { isValidElement, type FunctionComponent, type ReactElement, type ReactNode } from 'react';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import { NeoButton } from '@site/src/components/NeoButton';
import { CopyButton } from '../CopyButton';
import { AccessInfoButton } from '../AccessInfoButton';
import { renderWithCode } from '../shared/renderWithCode';
import styles from './RecipeHeader.module.css';
import shared from '../shared/styles.module.css';

export interface RecipeHeaderProps {
  /** Plain-text title. Optional when a `<RecipeHeader.Title>` child is provided (preferred — it renders
   *  the title as native MDX so code/links resolve), kept for backward compatibility / Storybook. */
  displayName?: string;
  /** Plain-text description. Optional when a `<RecipeHeader.Description>` child is provided. */
  description?: string;
  children?: ReactNode;
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

/** Marker slots — their children are extracted by RecipeHeader and rendered into the title/description.
 *  Lets the generated MDX pass the title/description as native markdown children (so `code` and
 *  [links](…) render) instead of pre-flattened string props. Title and Description must be DISTINCT
 *  component identities so the slot lookup (`c.type === Title`) can tell them apart. */
const Title: FunctionComponent<{ children?: ReactNode }> = ({ children }) => <>{children}</>;
const Description: FunctionComponent<{ children?: ReactNode }> = ({ children }) => <>{children}</>;

/** Pull the children of the first child element whose type is `slot` (a Title/Description marker). */
const slotChildren = (children: ReactNode, slot: FunctionComponent): ReactNode | undefined =>
  React.Children.toArray(children).find(
    (c): c is ReactElement => isValidElement(c) && c.type === slot,
  )?.props.children;

/** Header band for a recipe page: access badge, title, recipe-id/artifact code-chips, description, tags, CTAs. */
const RecipeHeaderRoot: FunctionComponent<RecipeHeaderProps> = ({
  displayName, description, children, type, languages, tags, license, fqName, artifact, appLink, moderneOnly = false,
}) => {
  // Prefer the markdown children; fall back to the plain-text props (older generated pages, Storybook).
  const titleSlot = slotChildren(children, Title);
  const descriptionSlot = slotChildren(children, Description);
  const title = titleSlot ?? (displayName != null ? renderWithCode(displayName, styles.titleCode) : null);
  const summary = descriptionSlot ?? (description != null ? renderWithCode(description, styles.descCode) : null);

  return (
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

      <h1 className={styles.title}>{title}</h1>

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
      <p className={styles.description}>{summary}</p>

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
};

/**
 * Compound API: `<RecipeHeader …><RecipeHeader.Title>…</RecipeHeader.Title>
 * <RecipeHeader.Description>…</RecipeHeader.Description></RecipeHeader>`. The slot children are authored
 * as markdown in the generated MDX, so Docusaurus renders inline code and links natively.
 */
export const RecipeHeader = Object.assign(RecipeHeaderRoot, { Title, Description });
