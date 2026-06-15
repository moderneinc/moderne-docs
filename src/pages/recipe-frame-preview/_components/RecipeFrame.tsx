import React, { useState, type FunctionComponent } from 'react';
import clsx from 'clsx';
import { NeoButton } from '@site/src/components/NeoButton';
import latestVersions from '@site/src/plugins/latest-versions';
import Head from '@docusaurus/Head';
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ArrowRight, Check, Clock, Copy, ExternalLink, Wrench } from 'lucide-react';
import { CopyPageMenu } from './CopyPageMenu';
import { DataTableList } from './DataTableList';
import { ExampleList } from './ExampleList';
import { OptionsTable } from './OptionsTable';
import { UsageList } from './UsageList';
import { RecipeList } from './RecipeList';
import { renderWithCode } from './renderWithCode';
import { RecipeToc, type TocItem } from './RecipeToc';
import type { RecipePreviewData } from './recipeData';
import styles from './styles.module.css';

/**
 * Copy-to-clipboard affordance. Icon-only when no label (recipe id); icon+label
 * for actions like "Copy" on the YAML. stopPropagation so it can live inside a
 * <summary> without toggling the <details>.
 */
const CopyButton: FunctionComponent<{
  value: string;
  label?: string;
  ariaLabel: string;
  title?: string;
  className?: string;
}> = ({ value, label, ariaLabel, title, className }) => {
  const [copied, setCopied] = useState(false);
  const onCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard
      ?.writeText(value)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        /* no-op in mockup */
      });
  };
  return (
    <button
      type="button"
      className={clsx(label ? styles.copyBtn : styles.copyId, className)}
      onClick={onCopy}
      aria-label={ariaLabel}
      title={title}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {label && <span>{copied ? 'Copied' : label}</span>}
    </button>
  );
};

/** A labelled "phase 2 / preview" wrapper so placeholder data is never mistaken for real. */
const PlaceholderTag: FunctionComponent = () => (
  <span className={styles.placeholderTag}>Phase 2 · preview data</span>
);

/**
 * Left-margin design note → scannable popover. A status badge (New / Reframed /
 * Real today / Phase 2) and the goal(s) it serves, plus a one-line rationale.
 * Built for handoff: explains what changed vs. today and why, within the
 * "define the future recipe consumption mode, no AI summaries" guardrails.
 */
type NoteStatus = 'new' | 'reframed' | 'real' | 'phase2';
const NOTE_STATUS_LABEL: Record<NoteStatus, string> = {
  new: 'New',
  reframed: 'Reframed',
  real: 'Real today',
  phase2: 'Phase 2',
};
const SectionNote: FunctionComponent<{
  status: NoteStatus;
  goals?: string[];
  children: React.ReactNode;
}> = ({ status, goals, children }) => (
  <span className={styles.sectionNote}>
    <button type="button" className={styles.sectionNoteIcon} aria-label="Design note">
      <Wrench size={13} />
    </button>
    <span className={styles.sectionNoteTip} role="tooltip">
      <span className={styles.noteMeta}>
        <span className={clsx(styles.noteBadge, styles[`noteBadge_${status}`])}>{NOTE_STATUS_LABEL[status]}</span>
        {goals?.map((g) => (
          <span key={g} className={styles.noteGoal}>
            {g}
          </span>
        ))}
      </span>
      <span className={styles.noteBody}>{children}</span>
    </span>
  </span>
);

/** Maven coordinates `group:artifact:version` from the real usage props (version via latest-versions). */
const artifactCoords = (usage: RecipePreviewData['usage']): string | undefined => {
  if (!usage.groupId || !usage.artifactId) return undefined;
  const version = usage.versionKey ? (latestVersions as Record<string, string>)[usage.versionKey] : undefined;
  return `${usage.groupId}:${usage.artifactId}${version ? `:${version}` : ''}`;
};

/** Build SoftwareSourceCode JSON-LD from REAL fields only (no AI, no authoring). */
const stripCode = (s: string) => s.replace(/`/g, '');
const recipeJsonLd = (recipe: RecipePreviewData) => {
  const github = recipe.sourceLinks.find((l) => /github/i.test(l.label));
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: stripCode(recipe.displayName),
    identifier: recipe.fqName,
    description: stripCode(recipe.description),
    ...(github ? { codeRepository: github.href } : {}),
    programmingLanguage: recipe.languages,
    license: /apache/i.test(recipe.license)
      ? 'https://www.apache.org/licenses/LICENSE-2.0'
      : 'https://docs.moderne.io/licensing/moderne-source-available-license',
  };
};

/** Tags are clickable on the generated pages (RSPEC rules link to SonarQube). */
const tagHref = (tag: string): string => {
  const rspec = tag.match(/^RSPEC-S(\d+)$/);
  if (rspec) {
    return `https://next.sonarqube.com/sonarqube/coding_rules?rule_key=java%3AS${rspec[1]}`;
  }
  return `https://docs.moderne.io/?s=${encodeURIComponent(tag)}`;
};

interface RecipeFrameProps {
  recipe: RecipePreviewData;
}

export const RecipeFrame: FunctionComponent<RecipeFrameProps> = ({ recipe }) => {
  const isComposite = recipe.type === 'Composite recipe';
  // Surface only the (placeholder) time-saved metric in the header; the rest of the
  // old "at a glance" dashboard was removed per review.
  const timeSaved = recipe.atAGlance.find((s) => /time saved/i.test(s.label))?.value;
  // Access tier derived from the real license: Apache = open source / free;
  // anything else (Moderne Source Available) = requires the Moderne platform.
  const isOpenSource = /apache/i.test(recipe.license);

  const tocItems: TocItem[] = [
    { id: 'recipe-source', label: 'Recipe source' },
    recipe.options.length ? { id: 'options', label: 'Options' } : null,
    isComposite ? { id: 'definition', label: 'Definition' } : null,
    recipe.usedBy.length ? { id: 'used-by', label: 'Used by' } : null,
    recipe.examples.length ? { id: 'examples', label: 'Examples' } : null,
    { id: 'usage', label: 'Usage' },
    { id: 'platform', label: 'Run in the Platform' },
    {
      id: 'data-tables',
      label: 'Data tables',
      children: recipe.dataTables.map((dt) => ({ label: dt.displayName, href: '#data-tables' })),
    },
    { id: 'related', label: 'Related recipes' },
    { id: 'structured-data', label: 'Structured data' },
  ].filter(Boolean) as TocItem[];

  const jsonLd = recipeJsonLd(recipe);
  const artifact = artifactCoords(recipe.usage);

  return (
    <div className={styles.withToc}>
    {/* Real SoftwareSourceCode JSON-LD injected into <head> (invisible to readers). */}
    <Head>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
    <article className={styles.recipe}>
      {/* ---------- Header zone (light band) ---------- */}
      <header className={styles.header}>
        <SectionNote status="reframed" goals={['Readability', 'Conversion']}>
          Title, id, description, tags, license and a primary CTA in one header card, with copyable id + Artifact and
          an estimated-time-saved stat. Title, id, description, tags and license are real (tags = the page’s “###
          Tags”); languages are derived; time-saved is placeholder (phase-2, from platform run data — not AI). New:
          the Copy-as-Markdown action — the AI-consumption entry (a per-page .md / llms.txt export; phase 2).
        </SectionNote>

        <h1 className={styles.title}>{renderWithCode(recipe.displayName, styles.titleCode)}</h1>

        <div className={styles.idArtifactRow}>
          <div className={styles.codeChip}>
            <span className={styles.codeChipLabel}>Recipe ID</span>
            <code className={styles.idCode}>{recipe.fqName}</code>
            <CopyButton value={recipe.fqName} ariaLabel="Copy recipe id" />
          </div>
          {artifact && (
            <div className={styles.codeChip}>
              <span className={styles.codeChipLabel}>Artifact</span>
              <code className={styles.idCode}>{artifact}</code>
              <CopyButton value={artifact} ariaLabel="Copy artifact coordinates" />
            </div>
          )}
        </div>

        <p className={styles.description}>{renderWithCode(recipe.description, styles.descCode)}</p>

        {/* Uniform, low-contrast metadata pills — quiet context in the reading flow */}
        <div className={styles.tagRow}>
          <span
            className={clsx(styles.chip, isOpenSource ? styles.chipSuccess : styles.chipBrand)}
            title={
              isOpenSource
                ? 'Open source — Apache-2.0, free to run anywhere'
                : 'Requires the Moderne platform (Moderne Source Available license)'
            }
          >
            {isOpenSource ? 'Open source' : 'Moderne'}
          </span>
          <span className={styles.chip}>{recipe.type}</span>
          {recipe.languages.map((lang) => (
            <span key={lang} className={styles.chip}>
              {lang}
            </span>
          ))}
          {recipe.tags.map((tag) => (
            <a
              key={tag}
              className={clsx(styles.chip, styles.chipLink)}
              href={tagHref(tag)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tag}
            </a>
          ))}
          <span className={styles.chip}>{recipe.license}</span>
        </div>

        {/* Footer: value-prop stat (left) + actions (right) */}
        <div className={styles.actions}>
          {timeSaved && (
            <span className={styles.headerTimeSaved}>
              <Clock size={15} className={styles.headerTimeSavedIcon} aria-hidden="true" />
              <span className={styles.headerTimeSavedValue}>{timeSaved}</span>
              <span className={styles.headerTimeSavedLabel}>est. time saved</span>
              <PlaceholderTag />
            </span>
          )}
          <div className={styles.actionButtons}>
            <NeoButton
              variant="primary"
              size="small"
              href={recipe.appLink}
              target="_blank"
              rel="noopener noreferrer"
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              Try in Platform
            </NeoButton>
            <CopyPageMenu markdown={recipe.markdown} />
          </div>
        </div>
      </header>

      {/* ---------- Source ---------- */}
      <section className={styles.section} id="recipe-source">
        <SectionNote status="real" goals={['Developer understanding']}>
          Real today (generator): source, issue-tracker and Maven links + license, and the composite “customize”
          note.
        </SectionNote>
        <h2 className={styles.sectionTitle}>Recipe source</h2>
        <div className={styles.sourceLinks}>
          {recipe.sourceLinks.map((link) => (
            <a key={link.href} className={styles.sourceLink} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} <ExternalLink size={13} />
            </a>
          ))}
        </div>
        {recipe.infoAdmonition && (
          <div className={styles.admonition}>
            <Admonition type="info">{recipe.infoAdmonition}</Admonition>
          </div>
        )}
      </section>

      {/* ---------- Options ---------- */}
      {recipe.options.length > 0 && (
        <section className={styles.section} id="options">
          <SectionNote status="reframed" goals={['Developer understanding', 'AI parsing']}>
            Real today (recipe descriptor): each option’s type, name, description, example, and required/optional
            state. Reframed: a structured card where type and required/optional read as labelled badges — but it
            stays a semantic table (Parameter / Type / Description / Example) so crawlers and screen readers parse it cleanly.
            Flexibility: every option renders as a row (no cap); the header tallies required vs optional and scales
            with the count.
          </SectionNote>
          <div className={styles.optionsHeader}>
            <h2 className={clsx(styles.sectionTitle, styles.optionsTitle)}>
              Options
              <span className={styles.optionsCount}>{recipe.options.length} parameters</span>
            </h2>
            <div className={styles.optionsSummary}>
              {recipe.options.some((o) => o.required) && (
                <span className={styles.optionsSummaryItem}>
                  <span className={clsx(styles.optionsSummaryDot, styles.optionsSummaryDot_req)} aria-hidden="true" />
                  {recipe.options.filter((o) => o.required).length} required
                </span>
              )}
              {recipe.options.some((o) => !o.required) && (
                <span className={styles.optionsSummaryItem}>
                  <span className={clsx(styles.optionsSummaryDot, styles.optionsSummaryDot_opt)} aria-hidden="true" />
                  {recipe.options.filter((o) => !o.required).length} optional
                </span>
              )}
            </div>
          </div>
          <OptionsTable options={recipe.options} />
        </section>
      )}

      {/* ---------- Definition (composite) — preconditions + full list + YAML ---------- */}
      {isComposite && (
        <section className={styles.section} id="definition">
          <SectionNote status="reframed" goals={['Readability', 'Developer understanding']}>
            Real today (generator): recipe list + YAML as tabs. New: the recipe list becomes searchable above 15
            items (the job is “is X bundled?”), and a tab-level Copy YAML supports copy-to-customize without
            switching tabs.
          </SectionNote>
          <h2 className={styles.sectionTitle}>Definition</h2>

          {recipe.preconditions.length > 0 && (
            <div className={styles.preconditions}>
              <span className={styles.metaLabel}>Preconditions:</span>
              {recipe.preconditions.map((p) => (
                <span key={p} className={styles.chip}>
                  {p}
                </span>
              ))}
            </div>
          )}

          <div className={styles.defTabs}>
            {recipe.yaml && (
              <CopyButton
                value={recipe.yaml}
                label="Copy YAML"
                ariaLabel="Copy YAML definition"
                title="Copy the YAML to customize which recipes run — no need to switch tabs."
                className={styles.defCopyYaml}
              />
            )}
            <Tabs groupId="recipeType">
              <TabItem value="recipe-list" label="Recipe list" default>
                <RecipeList recipes={recipe.subRecipes} />
              </TabItem>
              {recipe.yaml && (
                <TabItem value="yaml" label="YAML">
                  <CodeBlock language="yaml">{recipe.yaml}</CodeBlock>
                </TabItem>
              )}
            </Tabs>
          </div>
        </section>
      )}

      {/* ---------- Used by (composite recipes that include this one) ---------- */}
      {recipe.usedBy.length > 0 && (
        <section className={styles.section} id="used-by">
          <SectionNote status="reframed" goals={['Readability', 'Developer understanding']}>
            Real today (generator): the composite recipes that include this one, linked to their detail pages.
            Flexibility: the same list widget as Definition — inline when short, searchable/bounded above 15 items.
            Used-by counts run 1–347, so search beats an endless list. Reflects the open-source catalog only
            (enterprise/private usage isn’t surfaced) — flagged inline so it isn’t mistaken for the full picture.
          </SectionNote>
          <h2 className={styles.sectionTitle}>Used by</h2>
          <p className={styles.usedByIntro}>
            This recipe is used as part of the following composite recipes (from the open-source catalog):
          </p>
          <RecipeList recipes={recipe.usedBy} />
        </section>
      )}

      {/* ---------- Examples (hidden when none — true for ~74% of recipes) ---------- */}
      {recipe.examples.length > 0 && (
        <section className={styles.section} id="examples">
          <SectionNote status="reframed" goals={['Readability', 'AI parsing']}>
            Real before/after/diff. New UI: each example is a collapsible container (first open, with an
            Expand/Collapse-all toggle when there’s more than one), matching the data tables â so the rare
            many-example pages (counts run 0–26, median 1) stay tidy instead of growing an endless column. Collapsed
            bodies remain in the DOM, so every example is crawlable and in the .md / llms.txt export.
          </SectionNote>
          <ExampleList title="Examples" examples={recipe.examples} />
        </section>
      )}

      {/* ---------- Usage (reuses the real RunRecipe component) ---------- */}
      <section className={styles.section} id="usage">
        <SectionNote status="reframed" goals={['Developer understanding']}>
          The real RunRecipe component with the page’s actual props (CLI run + jar install). New: each form is a
          collapsible container (first open, with an Expand/Collapse-all toggle when there’s more than one variant),
          matching the data tables. The master shows every variant the component renders — Java/JVM,
          with-configuration, and JavaScript / Python / C# package forms.
        </SectionNote>
        <UsageList title="Usage" usage={recipe.usage} variants={recipe.usageVariants} />
      </section>

      {/* ---------- Run in Platform CTA (above data tables, matching the generated page order) ---------- */}
      <section className={styles.cta} id="platform">
        <SectionNote status="reframed" goals={['Conversion']}>
          Reuses the existing app.moderne.io link, also surfaced as a primary “Try in Platform” button in the
          header.
        </SectionNote>
        <div className={styles.ctaBody}>
          <h2 className={styles.ctaTitle}>See how this recipe works across thousands of OSS repositories</h2>
          <p className={styles.ctaText}>
            Run this recipe at scale on the Moderne Platform and review every change before it lands.
          </p>
        </div>
        <NeoButton
          variant="primary"
          size="large"
          href={recipe.appLink}
          target="_blank"
          rel="noopener noreferrer"
          icon={<ArrowRight size={18} />}
          iconPosition="right"
        >
          Try in Platform
        </NeoButton>
      </section>

      {/* ---------- Data tables ---------- */}
      <section className={styles.section} id="data-tables">
        <SectionNote status="reframed" goals={['Developer understanding']}>
          Real today (generator): data-table names and column descriptions. Reframed: a collapsible list instead
          of a tab strip (first open, with an Expand/Collapse-all toggle when there’s more than one) â it scales to
          any number of tables and stays readable on narrow screens. Every table’s columns remain in the page
          markup even while collapsed, so crawlers and the .md export still read them.
        </SectionNote>
        <DataTableList title="Data tables" tables={recipe.dataTables} />
      </section>

      {/* ---------- Related recipes (placeholder) ---------- */}
      <section className={styles.section} id="related">
        <SectionNote status="phase2" goals={['Conversion']}>
          New (placeholder): deterministic taxonomy — shared package / tags, parent-child composites. Not AI
          similarity; needs phase-2 data.
        </SectionNote>
        <h2 className={styles.sectionTitle}>
          Related recipes <PlaceholderTag />
        </h2>
        <div className={styles.relatedGrid}>
          {recipe.relatedRecipes.map((rel) => (
            <div key={rel.title} className={styles.relatedCard}>
              <span className={styles.relatedTitle}>{rel.title}</span>
              <span className={styles.relatedDesc}>{rel.description}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Structured data (JSON-LD) — demo view of the real <head> markup ---------- */}
      <section className={styles.section} id="structured-data">
        <SectionNote status="new" goals={['AI parsing', 'Structured semantic formatting']}>
          SoftwareSourceCode JSON-LD, not present on today’s pages. Built from real fields only (name, id,
          description, repo, languages, license); no AI, no authoring. Injected into the page &lt;head&gt;
          (invisible in production); shown here so you can see the markup.
        </SectionNote>
        <h2 className={styles.sectionTitle}>Structured data</h2>
        <p className={styles.usedByIntro}>
          <code className={styles.inlineCode}>SoftwareSourceCode</code> JSON-LD emitted into the page head:
        </p>
        <CodeBlock language="json">{JSON.stringify(jsonLd, null, 2)}</CodeBlock>
      </section>
    </article>
    <aside className={styles.rightRail}>
      <RecipeToc items={tocItems} />
    </aside>
    </div>
  );
};
