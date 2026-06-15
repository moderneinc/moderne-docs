import React, { useState, type FunctionComponent } from 'react';
import Layout from '@theme/Layout';
import { NeoButton } from '@site/src/components/NeoButton';
import { RecipeFrame } from './_components/RecipeFrame';
import { RECIPES } from './_components/recipeData';
import styles from './_components/styles.module.css';

/**
 * PREVIEW / DESIGN MOCKUP — recipe detail page "frame" redesign.
 *
 * UI only. Not linked in the sidebar or nav. Hardcoded sample data, no backend,
 * no generated files touched. Toggle between a composite and a single recipe to
 * see both shapes. See .context/recipe-detail-refined-plan.md for the plan.
 */
const RecipeFramePreview: FunctionComponent = () => {
  const [index, setIndex] = useState(0);
  const recipe = RECIPES[index];

  return (
    <Layout
      title="Recipe detail — frame preview"
      description="UI-only design mockup of the redesigned recipe detail page."
    >
      <main className={styles.page}>
        <div className={styles.previewBanner}>
          <strong>Recipe detail — design preview.</strong> Defines the future recipe-consumption mode within
          existing constraints: reframes today’s pages for <strong>human readability, AI parsing, structured
          formatting, developer understanding, and product conversion</strong> — with <em>no AI summaries</em>,
          real / derived data only, and built entirely on existing Docusaurus + Neo components. The{' '}
          <strong>Master template</strong> tab renders every element a recipe page can have (verified against the
          generator and all 7,583 pages); the other tabs are real recipes (subsets). On wide screens, hover the
          wrench icons in the left margin for each section’s rationale — keyed below:
          <div className={styles.bannerLegend}>
            <span className={styles.bannerLegendItem}>
              <span className={`${styles.noteBadge} ${styles.noteBadge_new}`}>New</span> doesn’t exist today
            </span>
            <span className={styles.bannerLegendItem}>
              <span className={`${styles.noteBadge} ${styles.noteBadge_reframed}`}>Reframed</span> exists, rethought
            </span>
            <span className={styles.bannerLegendItem}>
              <span className={`${styles.noteBadge} ${styles.noteBadge_real}`}>Real today</span> unchanged real
              data
            </span>
            <span className={styles.bannerLegendItem}>
              <span className={`${styles.noteBadge} ${styles.noteBadge_phase2}`}>Phase 2</span> placeholder, needs
              data
            </span>
          </div>
          <div className={styles.previewBannerCaveat}>
            <strong>Caveat — sticky section headers:</strong> not a Docusaurus convention or built-in component, but
            accomplishable with native CSS <em>position: sticky</em> on each section’s header — offset below the
            fixed navbar and confined to its section, so it pins while you read the section and releases at its end.
            Scoped to this preview; rolling it out to the live docs would be a small, global CSS change.
          </div>
          <div className={styles.previewBannerRefs}>
            <span className={styles.previewBannerRefsLabel}>Planning docs:</span>
            <a className={styles.previewBannerLink} href="/planning-docs/recipe-detail-redesign-analysis.md" target="_blank" rel="noopener noreferrer">
              Analysis
            </a>
            <a className={styles.previewBannerLink} href="/planning-docs/recipe-detail-competitive-analysis.md" target="_blank" rel="noopener noreferrer">
              Competitive analysis
            </a>
            <a className={styles.previewBannerLink} href="/planning-docs/recipe-detail-frame-spec.md" target="_blank" rel="noopener noreferrer">
              Frame spec
            </a>
            <a className={styles.previewBannerLink} href="/planning-docs/recipe-detail-refined-plan.md" target="_blank" rel="noopener noreferrer">
              Refined plan
            </a>
            <a className={styles.previewBannerLink} href="/planning-docs/recipe-detail-phase2-implementation.md" target="_blank" rel="noopener noreferrer">
              Phase 2 implementation
            </a>
          </div>
        </div>

        <div className={styles.toggle}>
          {RECIPES.map((r, i) => (
            <NeoButton
              key={r.key}
              variant={i === index ? 'primary' : 'outline'}
              size="small"
              onClick={() => setIndex(i)}
            >
              {r.tabLabel}
            </NeoButton>
          ))}
        </div>

        <RecipeFrame recipe={recipe} />
      </main>
    </Layout>
  );
};

export default RecipeFramePreview;
