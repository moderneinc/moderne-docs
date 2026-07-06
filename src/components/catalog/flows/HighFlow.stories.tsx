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
 * **High flow: filter "richfaces" → Java → JSF → RichFaces → recipe**
 *
 * The deepest path in the catalog (5 levels). Demonstrates filtering to find a
 * deeply nested category, then drilling through Java → JSF → RichFaces to a recipe.
 */
const meta: Meta = {
  title: 'Catalog/Flows/High - filter richfaces to RichFaces',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', maxWidth: 1080 },
  decorators: [CatalogStoryLayout],
};
export default meta;
type Story = StoryObj;

/** **Step 1** — User filters "richfaces". The Java card surfaces (RichFaces is a subcategory of Java). */
export const Step1_FilterRichfaces: Story = {
  name: '1. Filter "richfaces"',
  render: () => {
    const [results, setResults] = useState<FilterResults>({
      categories: ALL_CATEGORIES.filter((c) => c.label === 'Java').map((c) => ({ category: c, matchedSubs: new Set(['richfaces']) })),
      query: 'richfaces',
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

/** **Step 2** — User clicks the Java card, then navigates to JSF → RichFaces. */
export const Step2_RichfacesDetail: Story = {
  name: '2. Java → JSF → RichFaces',
  render: () => (
    <CategoryDetail
      breadcrumbs={[
        { label: 'Catalog', href: BASE },
        { label: 'Java', href: `${BASE}/java` },
        { label: 'JSF', href: `${BASE}/java/jsf` },
      ]}
      label="RichFaces"
      totalRecipeCount={3}
      subcategories={[
        { label: 'Update45', href: `${BASE}/java/jsf/richfaces/update45`, totalRecipeCount: 1 },
      ]}
      recipes={[
        { label: 'Migrate RichFaces 3.x to 4.5', href: `${BASE}/java/jsf/richfaces/migraterichfaces3xto45` },
        { label: 'Convert height/width attributes to extendedDataTable style', href: `${BASE}/java/jsf/richfaces/convertheightwidthattributes` },
      ]}
    />
  ),
};

/** **Step 3** — User clicks "Migrate RichFaces 3.x to 4.5". Recipe detail page. */
export const Step3_RecipeDetail: Story = {
  name: '3. Recipe: Migrate RichFaces 3.x to 4.5',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--neo-spacing_5)' }}>
      <RecipeHeader
        displayName="Migrate RichFaces 3.x to 4.5"
        description="Migrates RichFaces 3.x components to their 4.5 equivalents where possible."
        type="Composite recipe"
        languages={['Java', 'XML']}
        tags={[]}
        license="Apache License 2.0"
        fqName="org.openrewrite.java.jsf.richfaces.MigrateRichFaces3xTo45"
        appLink="https://app.moderne.io/recipes/org.openrewrite.java.jsf.richfaces.MigrateRichFaces3xTo45"
        markdownUrl=""
      />
    </div>
  ),
};

/** **Alternate** — Java detail page (what you see if you click the Java card from the filter). */
export const Alt_JavaDetail: Story = {
  name: 'Alt: Java category (browse to JSF)',
  render: () => (
    <CategoryDetail
      breadcrumbs={[{ label: 'Catalog', href: BASE }]}
      label="Java"
      description="Basic building blocks for transforming Java code."
      totalRecipeCount={1799}
      subcategories={[
        { label: 'Spring', href: `${BASE}/java/spring`, totalRecipeCount: 478 },
        { label: 'Modernize', href: `${BASE}/java/migrate`, totalRecipeCount: 453 },
        { label: 'Testing', href: `${BASE}/java/testing`, totalRecipeCount: 274 },
        { label: 'Logging', href: `${BASE}/java/logging`, totalRecipeCount: 125 },
        { label: 'Security', href: `${BASE}/java/security`, totalRecipeCount: 105 },
        { label: 'Jackson', href: `${BASE}/java/jackson`, totalRecipeCount: 42 },
        { label: 'Micronaut', href: `${BASE}/java/micronaut`, totalRecipeCount: 39 },
        { label: 'Recipes', href: `${BASE}/java/recipes`, totalRecipeCount: 38 },
        { label: 'Search', href: `${BASE}/java/search`, totalRecipeCount: 37 },
        { label: 'Dropwizard', href: `${BASE}/java/dropwizard`, totalRecipeCount: 26 },
        { label: 'Dependencies', href: `${BASE}/java/dependencies`, totalRecipeCount: 23 },
        { label: 'Struts', href: `${BASE}/java/struts`, totalRecipeCount: 22 },
        { label: 'Server', href: `${BASE}/java/server`, totalRecipeCount: 17 },
        { label: 'Format', href: `${BASE}/java/format`, totalRecipeCount: 16 },
        { label: 'Joda', href: `${BASE}/java/joda`, totalRecipeCount: 12 },
        { label: 'Springdoc', href: `${BASE}/java/springdoc`, totalRecipeCount: 11 },
        { label: 'JSpecify', href: `${BASE}/java/jspecify`, totalRecipeCount: 9 },
        { label: 'Netty', href: `${BASE}/java/netty`, totalRecipeCount: 8 },
        { label: 'Liberty', href: `${BASE}/java/liberty`, totalRecipeCount: 6 },
        { label: 'Flyway', href: `${BASE}/java/flyway`, totalRecipeCount: 5 },
        { label: 'JSF', href: `${BASE}/java/jsf`, totalRecipeCount: 4 },
        { label: 'AI', href: `${BASE}/java/ai`, totalRecipeCount: 2 },
        { label: 'Camel', href: `${BASE}/java/camel`, totalRecipeCount: 1 },
      ]}
      recipes={[]}
    />
  ),
};
