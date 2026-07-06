import type { Meta, StoryObj } from '@storybook/react';
import React, { useCallback, useState } from 'react';
import { CategoryFilter, type FilterResults } from '../CategorySearch';
import { CategoryGrid } from '../CategoryGrid';
import { CategoryDetail } from '../CategoryDetail';
import { RecipeHeader } from '@site/src/components/recipe';
import { CatalogStoryLayout } from '../shared/storyLayout';
import { ALL_CATEGORIES } from '../shared/sampleData';
import pageStyles from '../CategoryCatalogPage.module.css';

const BASE = '/user-documentation/recipes/recipe-catalog';

/**
 * **Medium flow: filter "kubernetes" → Kubernetes → Migrate → recipe**
 *
 * A one-level-deep category. User filters the grid, clicks a category, picks a
 * subcategory, then reaches a recipe.
 */
const meta: Meta = {
  title: 'Catalog/Flows/Medium - Kubernetes to Migrate',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', maxWidth: 1080 },
  decorators: [CatalogStoryLayout],
};
export default meta;
type Story = StoryObj;

/** **Step 1** — User filters "kubernetes". The grid narrows to the Kubernetes card. */
export const Step1_FilterKubernetes: Story = {
  name: '1. Filter "kubernetes"',
  render: () => {
    const [results, setResults] = useState<FilterResults>({
      categories: ALL_CATEGORIES.filter((c) => c.label === 'Kubernetes').map((c) => ({ category: c, matchedSubs: new Set<string>() })),
      query: 'kubernetes',
    });
    return (
      <div className={pageStyles.page}>
        <header className={pageStyles.header}>
          <h1 className={pageStyles.title}>Recipe catalog</h1>
        </header>
        <CategoryFilter categories={ALL_CATEGORIES} onResults={useCallback((r: FilterResults) => setResults(r), [])} />
        <CategoryGrid categories={results.categories} totalCategoryCount={ALL_CATEGORIES.length} isFiltering={true} />
      </div>
    );
  },
};

/** **Step 2** — User clicks the Kubernetes card. 5 subcategories + direct recipes. */
export const Step2_KubernetesDetail: Story = {
  name: '2. Kubernetes category',
  render: () => (
    <CategoryDetail
      breadcrumbs={[{ label: 'Catalog', href: BASE }]}
      label="Kubernetes"
      description="Recipes to perform Kubernetes hygiene and migration tasks."
      totalRecipeCount={46}
      subcategories={[
        { label: 'Migrate', href: `${BASE}/kubernetes/migrate`, totalRecipeCount: 10 },
        { label: 'RBAC', href: `${BASE}/kubernetes/rbac`, totalRecipeCount: 1 },
        { label: 'Resource', href: `${BASE}/kubernetes/resource`, totalRecipeCount: 3 },
        { label: 'Search', href: `${BASE}/kubernetes/search`, totalRecipeCount: 9 },
        { label: 'Services', href: `${BASE}/kubernetes/services`, totalRecipeCount: 3 },
      ]}
      recipes={[
        { label: 'Ensure CPU limits are set', href: `${BASE}/kubernetes/ensurecpulimits` },
        { label: 'Ensure image tag is not latest', href: `${BASE}/kubernetes/ensureimagenotlatest` },
        { label: 'Ensure liveness probe is configured', href: `${BASE}/kubernetes/ensurelivenessprobe` },
        { label: 'Ensure memory limits are set', href: `${BASE}/kubernetes/ensurememorylimits` },
        { label: 'Ensure readiness probe is configured', href: `${BASE}/kubernetes/ensurereadinessprobe` },
      ]}
    />
  ),
};

/** **Step 3** — User clicks "Migrate". 10 migration recipes. */
export const Step3_MigrateDetail: Story = {
  name: '3. Kubernetes → Migrate',
  render: () => (
    <CategoryDetail
      breadcrumbs={[
        { label: 'Catalog', href: BASE },
        { label: 'Kubernetes', href: `${BASE}/kubernetes` },
      ]}
      label="Migrate"
      totalRecipeCount={10}
      subcategories={[]}
      recipes={[
        { label: 'Update image name', href: `${BASE}/kubernetes/migrate/updateimagename` },
        { label: 'Update container image name', href: `${BASE}/kubernetes/migrate/updatecontainerimagename` },
        { label: 'Change Kubernetes API version', href: `${BASE}/kubernetes/migrate/changeapiversion` },
        { label: 'Migrate to recommended labels', href: `${BASE}/kubernetes/migrate/migraterecommendedlabels` },
      ]}
    />
  ),
};

/** **Step 4** — User clicks "Update image name". Recipe detail page. */
export const Step4_RecipeDetail: Story = {
  name: '4. Recipe detail: Update image name',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--neo-spacing_5)' }}>
      <RecipeHeader
        displayName="Update image name"
        description="Search for image names that match a pattern and update them."
        type="Single recipe"
        languages={['YAML']}
        tags={[]}
        license="Apache License 2.0"
        fqName="org.openrewrite.kubernetes.UpdateContainerImageName"
        appLink="https://app.moderne.io/recipes/org.openrewrite.kubernetes.UpdateContainerImageName"
        markdownUrl=""
      />
    </div>
  ),
};
