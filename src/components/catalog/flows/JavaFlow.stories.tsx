import type { Meta, StoryObj } from '@storybook/react';
import React, { useCallback, useState } from 'react';
import { CategoryFilter, type FilterResults } from '../CategorySearch';
import { CategoryGrid } from '../CategoryGrid';
import { PopularRecipes } from '../PopularRecipes';
import { CategoryDetail } from '../CategoryDetail';
import { RecipeHeader } from '@site/src/components/recipe';
import { CatalogStoryLayout } from '../shared/storyLayout';
import { ALL_CATEGORIES } from '../shared/sampleData';
import { SAMPLE_RECIPES, POPULAR_RECIPES } from '../shared/recipeResults';
import pageStyles from '../CategoryCatalogPage.module.css';

const BASE = '/user-documentation/recipes/recipe-catalog';

/**
 * **Scale test: Catalog → Java → Spring → Boot 3.x → recipe**
 *
 * Tests the design at maximum scale. Java is the largest category: 23 subcategories,
 * 1,799 recipes, 5 nesting levels. Spring alone has 478 recipes across 30+ subcategories.
 * This flow proves the card, detail page, and drill-down work at the heaviest end.
 *
 * Also verifies that the chip sort-by-count tweak shows Spring (478), Modernize (453),
 * Testing (274) instead of AI (2), Camel (1), Dependencies (23).
 */
const meta: Meta = {
  title: 'Catalog/Flows/Scale - Java to Spring Boot 3',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', maxWidth: 1080 },
  decorators: [CatalogStoryLayout],
};
export default meta;
type Story = StoryObj;

const totalRecipes = ALL_CATEGORIES.reduce((sum, c) => sum + c.totalRecipeCount, 0);

/** **Step 1** — Catalog landing. Java card now shows top subcategories by recipe count: Spring (478), Modernize (453), Testing (274), Logging (125), Security (105), +18 more. */
export const Step1_CatalogLanding: Story = {
  name: '1. Catalog landing (check Java card chips)',
  render: () => {
    const [results, setResults] = useState<FilterResults>({
      categories: ALL_CATEGORIES.map((c) => ({ category: c, matchedSubs: new Set<string>() })),
      query: '',
    });
    return (
      <div className={pageStyles.page}>
        <header className={pageStyles.header}>
          <h1 className={pageStyles.title}>Recipe catalog</h1>
          <p className={pageStyles.subtitle}>
            Browse {totalRecipes.toLocaleString()} recipes across {ALL_CATEGORIES.length} categories.
          </p>
        </header>
        <CategoryFilter categories={ALL_CATEGORIES} onResults={useCallback((r: FilterResults) => setResults(r), [])} />
        {!results.query && <PopularRecipes recipes={POPULAR_RECIPES} />}
        <CategoryGrid categories={results.categories} totalCategoryCount={ALL_CATEGORIES.length} isFiltering={!!results.query} />
      </div>
    );
  },
};

/** **Step 2** — Java detail page. All 23 subcategories as cards (sorted by recipe count) + 10 of 46 direct recipes. Tests the grid at maximum subcategory count. */
export const Step2_JavaDetail: Story = {
  name: '2. Java (23 subcategories, 1.8k recipes)',
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
      recipes={[
        { label: 'Add ASLv2 license header', href: `${BASE}/java/addapache2licenseheader` },
        { label: 'Add a literal method argument', href: `${BASE}/java/addliteralmethodargument` },
        { label: 'Add imports for fully qualified references to types', href: `${BASE}/java/shortenfullyqualifiedtypereferences` },
        { label: 'Add license header', href: `${BASE}/java/addlicenseheader` },
        { label: 'Change method name', href: `${BASE}/java/changemethodname` },
        { label: 'Change type', href: `${BASE}/java/changetype` },
        { label: 'Create Java class', href: `${BASE}/java/createemptyjavaclass` },
        { label: 'Delete method argument', href: `${BASE}/java/deletemethodargument` },
        { label: 'Order imports', href: `${BASE}/java/orderimports` },
        { label: 'Replace constant with another constant', href: `${BASE}/java/replaceconstantwithanotherconstant` },
      ]}
    />
  ),
};

/** **Step 3** — Spring detail. 30 subcategories (also a scale test) + direct recipes. The second-largest branch in the catalog. */
export const Step3_SpringDetail: Story = {
  name: '3. Java → Spring (30 subcats, 478 recipes)',
  render: () => (
    <CategoryDetail
      breadcrumbs={[
        { label: 'Catalog', href: BASE },
        { label: 'Java', href: `${BASE}/java` },
      ]}
      label="Spring"
      description="Recipes for upgrading and patching Spring applications."
      totalRecipeCount={478}
      subcategories={[
        { label: 'Spring Boot 3.x', href: `${BASE}/java/spring/boot3`, totalRecipeCount: 88 },
        { label: 'Boot4', href: `${BASE}/java/spring/boot4`, totalRecipeCount: 61 },
        { label: 'Spring Boot 2.x', href: `${BASE}/java/spring/boot2`, totalRecipeCount: 52 },
        { label: 'Security 6.x', href: `${BASE}/java/spring/security6`, totalRecipeCount: 45 },
        { label: 'Spring Framework', href: `${BASE}/java/spring/framework`, totalRecipeCount: 38 },
        { label: 'Security 5.x', href: `${BASE}/java/spring/security5`, totalRecipeCount: 31 },
        { label: 'Spring Data', href: `${BASE}/java/spring/data`, totalRecipeCount: 28 },
        { label: 'Spring Batch', href: `${BASE}/java/spring/batch`, totalRecipeCount: 22 },
        { label: 'Cloud 2024', href: `${BASE}/java/spring/cloud2024`, totalRecipeCount: 18 },
        { label: 'Cloud 2023', href: `${BASE}/java/spring/cloud2023`, totalRecipeCount: 15 },
        { label: 'Cloud 2022', href: `${BASE}/java/spring/cloud2022`, totalRecipeCount: 12 },
        { label: 'Boot', href: `${BASE}/java/spring/boot`, totalRecipeCount: 11 },
        { label: 'Http', href: `${BASE}/java/spring/http`, totalRecipeCount: 8 },
        { label: 'Spring Kafka', href: `${BASE}/java/spring/kafka`, totalRecipeCount: 7 },
        { label: 'Mvc', href: `${BASE}/java/spring/mvc`, totalRecipeCount: 6 },
        { label: 'AMQP', href: `${BASE}/java/spring/amqp`, totalRecipeCount: 5 },
        { label: 'Integration', href: `${BASE}/java/spring/integration`, totalRecipeCount: 4 },
        { label: 'Hibernate', href: `${BASE}/java/spring/hibernate`, totalRecipeCount: 4 },
        { label: 'Opentelemetry', href: `${BASE}/java/spring/opentelemetry`, totalRecipeCount: 3 },
        { label: 'Security7', href: `${BASE}/java/spring/security7`, totalRecipeCount: 3 },
        { label: 'Orm', href: `${BASE}/java/spring/orm`, totalRecipeCount: 2 },
        { label: 'Doc', href: `${BASE}/java/spring/doc`, totalRecipeCount: 2 },
        { label: 'Framework7', href: `${BASE}/java/spring/framework7`, totalRecipeCount: 2 },
        { label: 'Search', href: `${BASE}/java/spring/search`, totalRecipeCount: 2 },
        { label: 'Kotlin', href: `${BASE}/java/spring/kotlin`, totalRecipeCount: 1 },
        { label: 'Cloud2020', href: `${BASE}/java/spring/cloud2020`, totalRecipeCount: 1 },
        { label: 'Cloud2021', href: `${BASE}/java/spring/cloud2021`, totalRecipeCount: 1 },
        { label: 'Cloud20251', href: `${BASE}/java/spring/cloud20251`, totalRecipeCount: 1 },
        { label: 'Cloud2025', href: `${BASE}/java/spring/cloud2025`, totalRecipeCount: 1 },
      ]}
      recipes={[
        { label: 'Normalize Spring properties', href: `${BASE}/java/spring/normalizespringproperties` },
        { label: 'Rename bean', href: `${BASE}/java/spring/renamebean` },
      ]}
    />
  ),
};

/** **Step 4** — Spring Boot 3.x detail. 88 recipes — a large leaf-ish category with mostly direct recipes. */
export const Step4_Boot3Detail: Story = {
  name: '4. Java → Spring → Boot 3.x (88 recipes)',
  render: () => (
    <CategoryDetail
      breadcrumbs={[
        { label: 'Catalog', href: BASE },
        { label: 'Java', href: `${BASE}/java` },
        { label: 'Spring', href: `${BASE}/java/spring` },
      ]}
      label="Spring Boot 3.x"
      totalRecipeCount={88}
      subcategories={[]}
      recipes={[
        { label: 'Spring Boot 3.5 best practices', href: `${BASE}/java/spring/boot3/springboot3bestpractices` },
        { label: 'Migrate to Spring Boot 3.4', href: `${BASE}/java/spring/boot3/upgradespringboot_3_4` },
        { label: 'Migrate to Spring Boot 3.3', href: `${BASE}/java/spring/boot3/upgradespringboot_3_3` },
        { label: 'Migrate to Spring Boot 3.2', href: `${BASE}/java/spring/boot3/upgradespringboot_3_2` },
        { label: 'Migrate to Spring Boot 3.1', href: `${BASE}/java/spring/boot3/upgradespringboot_3_1` },
        { label: 'Migrate to Spring Boot 3.0', href: `${BASE}/java/spring/boot3/upgradespringboot_3_0` },
        { label: 'Add @Configuration to classes with @Bean methods', href: `${BASE}/java/spring/boot3/addconfigurationtoclasseswithbeanmethods` },
        { label: 'Actuator endpoint sanitization', href: `${BASE}/java/spring/boot3/actuatorendpointsanitization` },
        { label: 'Add valid to configuration properties fields', href: `${BASE}/java/spring/boot3/addvalidtoconfigurationpropertiesfields` },
        { label: 'Comment deprecations', href: `${BASE}/java/spring/boot3/commentdeprecations` },
      ]}
    />
  ),
};

/** **Step 5** — Recipe detail page. End of the flow — 4 levels deep from the catalog. */
export const Step5_RecipeDetail: Story = {
  name: '5. Recipe: Spring Boot 3.5 best practices',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--neo-spacing_5)' }}>
      <RecipeHeader
        displayName="Spring Boot 3.5 best practices"
        description="Applies best practices to Spring Boot 3.5+ applications."
        type="Composite recipe"
        languages={['Java']}
        tags={['spring', 'boot']}
        license="Moderne Source Available License"
        fqName="io.moderne.java.spring.boot3.SpringBoot3BestPractices"
        artifact="org.openrewrite.recipe:rewrite-spring"
        appLink="https://app.moderne.io/recipes/io.moderne.java.spring.boot3.SpringBoot3BestPractices"
        markdownUrl=""
        moderneOnly
      />
    </div>
  ),
};
