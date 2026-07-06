import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CategoryDetail } from './CategoryDetail';
import { CatalogStoryLayout } from '../shared/storyLayout';

const BASE = '/user-documentation/recipes/recipe-catalog';

/**
 * CategoryDetail is the page you see after clicking into a category from the catalog landing page.
 * It shows a breadcrumb trail, the category's subcategories as cards, and its direct recipes as
 * links. The same component renders at every depth in the hierarchy.
 *
 * Stories are organized by complexity:
 * - **Small**: flat list of recipes, no subcategories (1 click to a recipe)
 * - **Medium**: subcategories + direct recipes at one level (2 clicks to a recipe)
 * - **High**: multiple levels of nesting (3–5 clicks to the deepest recipe)
 *
 * The high-complexity stories walk through the full path Java → JSF → RichFaces → Update45
 * to prove the component works at every depth.
 */
const meta: Meta<typeof CategoryDetail> = {
  title: 'Catalog/CategoryDetail',
  tags: ['autodocs'],
  component: CategoryDetail,
  parameters: { layout: 'fullscreen', maxWidth: 1080 },
  decorators: [CatalogStoryLayout],
};
export default meta;
type Story = StoryObj<typeof CategoryDetail>;

/**
 * **Small: flat recipe list** — Core has 20 recipes and no subcategories. The simplest category
 * page: just a breadcrumb, title, and a list of recipe links. One click reaches a recipe detail page.
 *
 * Path: `Catalog → Core → [recipe]`
 */
export const SmallFlat: Story = {
  name: 'Small: Core (flat, 20 recipes)',
  args: {
    breadcrumbs: [
      { label: 'Catalog', href: `${BASE}` },
    ],
    label: 'Core',
    totalRecipeCount: 20,
    subcategories: [],
    recipes: [
      { label: 'Add entries to .gitignore', href: `${BASE}/core/addtogitignore` },
      { label: 'Delete files', href: `${BASE}/core/deletesourcefiles` },
      { label: 'Find LST provenance', href: `${BASE}/core/findlstprovenance` },
      { label: 'Find call graph', href: `${BASE}/core/findcallgraph` },
      { label: 'Find colliding source files', href: `${BASE}/core/findcollidingsourcefiles` },
      { label: 'Find deserialization errors', href: `${BASE}/core/finddeserializationerrors` },
      { label: 'Find duplicate source files', href: `${BASE}/core/findduplicatesourcefiles` },
      { label: 'Find files', href: `${BASE}/core/findsourcefiles` },
      { label: 'Find instances of type Quark', href: `${BASE}/core/findquarks` },
      { label: 'Find source files with ParseExceptionResult markers', href: `${BASE}/core/findparsefailures` },
      { label: 'Find styles', href: `${BASE}/core/findstyles` },
      { label: 'Is in repository', href: `${BASE}/core/isinrepository` },
      { label: 'Language composition report', href: `${BASE}/core/languagecomposition` },
      { label: 'List runtime classpath', href: `${BASE}/core/listruntimeclasspath` },
      { label: 'Move a file', href: `${BASE}/core/movefile` },
      { label: 'Remove ignoral of files from .gitignore', href: `${BASE}/core/excludefilefromgitignore` },
      { label: 'Rename a file', href: `${BASE}/core/renamefile` },
      { label: 'Set file permission attributes', href: `${BASE}/core/setfilepermissions` },
      { label: 'Show Git source control metadata', href: `${BASE}/core/findgitprovenance` },
      { label: 'Singleton', href: `${BASE}/core/singleton` },
    ],
  },
};

/**
 * **Medium: subcategories + recipes** — Kubernetes has 5 subcategories (Migrate, RBAC, Resource,
 * Search, Services) plus 20 direct recipes. The page shows subcategory cards in a grid above the
 * recipe list. Two clicks reaches a recipe inside a subcategory.
 *
 * Path: `Catalog → Kubernetes → [subcategory] → [recipe]`
 */
export const MediumShallow: Story = {
  name: 'Medium: Kubernetes (5 subcats + recipes)',
  args: {
    breadcrumbs: [
      { label: 'Catalog', href: `${BASE}` },
    ],
    label: 'Kubernetes',
    description: 'Recipes to perform Kubernetes hygiene and migration tasks.',
    totalRecipeCount: 46,
    subcategories: [
      { label: 'Migrate', href: `${BASE}/kubernetes/migrate`, totalRecipeCount: 10 },
      { label: 'RBAC', href: `${BASE}/kubernetes/rbac`, totalRecipeCount: 1 },
      { label: 'Resource', href: `${BASE}/kubernetes/resource`, totalRecipeCount: 3 },
      { label: 'Search', href: `${BASE}/kubernetes/search`, totalRecipeCount: 9 },
      { label: 'Services', href: `${BASE}/kubernetes/services`, totalRecipeCount: 3 },
    ],
    recipes: [
      { label: 'Add Kubernetes configuration', href: `${BASE}/kubernetes/addconfiguration` },
      { label: 'Apply Docker best practices', href: `${BASE}/kubernetes/dockerbestpractices` },
      { label: 'Ensure CPU limits are set', href: `${BASE}/kubernetes/ensurecpulimits` },
      { label: 'Ensure image tag is not latest', href: `${BASE}/kubernetes/ensureimagenotlatest` },
      { label: 'Ensure liveness probe is configured', href: `${BASE}/kubernetes/ensurelivenessprobe` },
      { label: 'Ensure memory limits are set', href: `${BASE}/kubernetes/ensurememorylimits` },
      { label: 'Ensure readiness probe is configured', href: `${BASE}/kubernetes/ensurereadinessprobe` },
    ],
  },
};

/**
 * **High: top of a deep hierarchy** — Java is the largest category: 23 subcategories, 1,799
 * recipes, up to 5 nesting levels. This is the page you see after clicking "Java" from the
 * catalog landing. The subcategory grid shows the entry points into Spring (478), Modernize (453),
 * Testing (274), etc. The 46 direct recipes appear below.
 *
 * Path: `Catalog → Java → [subcategory] → ... → [recipe]`
 */
export const HighDeepTopLevel: Story = {
  name: 'High: Java (23 subcats, top of 5 levels)',
  args: {
    breadcrumbs: [
      { label: 'Catalog', href: `${BASE}` },
    ],
    label: 'Java',
    description: 'Basic building blocks for transforming Java code.',
    totalRecipeCount: 1799,
    subcategories: [
      { label: 'AI', href: `${BASE}/java/ai`, totalRecipeCount: 2 },
      { label: 'Camel', href: `${BASE}/java/camel`, totalRecipeCount: 1 },
      { label: 'Dependencies', href: `${BASE}/java/dependencies`, totalRecipeCount: 23 },
      { label: 'Dropwizard', href: `${BASE}/java/dropwizard`, totalRecipeCount: 26 },
      { label: 'Flyway', href: `${BASE}/java/flyway`, totalRecipeCount: 5 },
      { label: 'Format', href: `${BASE}/java/format`, totalRecipeCount: 16 },
      { label: 'Jackson', href: `${BASE}/java/jackson`, totalRecipeCount: 42 },
      { label: 'Joda', href: `${BASE}/java/joda`, totalRecipeCount: 12 },
      { label: 'JSF', href: `${BASE}/java/jsf`, totalRecipeCount: 4 },
      { label: 'JSpecify', href: `${BASE}/java/jspecify`, totalRecipeCount: 9 },
      { label: 'Liberty', href: `${BASE}/java/liberty`, totalRecipeCount: 6 },
      { label: 'Logging', href: `${BASE}/java/logging`, totalRecipeCount: 125 },
      { label: 'Micronaut', href: `${BASE}/java/micronaut`, totalRecipeCount: 39 },
      { label: 'Modernize', href: `${BASE}/java/migrate`, totalRecipeCount: 453 },
      { label: 'Netty', href: `${BASE}/java/netty`, totalRecipeCount: 8 },
      { label: 'Recipes', href: `${BASE}/java/recipes`, totalRecipeCount: 38 },
      { label: 'Search', href: `${BASE}/java/search`, totalRecipeCount: 37 },
      { label: 'Security', href: `${BASE}/java/security`, totalRecipeCount: 105 },
      { label: 'Server', href: `${BASE}/java/server`, totalRecipeCount: 17 },
      { label: 'Spring', href: `${BASE}/java/spring`, totalRecipeCount: 478 },
      { label: 'Springdoc', href: `${BASE}/java/springdoc`, totalRecipeCount: 11 },
      { label: 'Struts', href: `${BASE}/java/struts`, totalRecipeCount: 22 },
      { label: 'Testing', href: `${BASE}/java/testing`, totalRecipeCount: 274 },
    ],
    recipes: [
      { label: 'Add ASLv2 license header', href: `${BASE}/java/addapache2licenseheader` },
      { label: 'Add a literal method argument', href: `${BASE}/java/addliteralmethodargument` },
      { label: 'Change method name', href: `${BASE}/java/changemethodname` },
      { label: 'Change type', href: `${BASE}/java/changetype` },
      { label: 'Order imports', href: `${BASE}/java/orderimports` },
    ],
  },
};

/**
 * **High: mid-depth** — Java → JSF is 2 levels into the hierarchy. It has 1 subcategory
 * (RichFaces) and 1 direct recipe. This is the page that answers "what's inside JSF?"
 * The breadcrumb shows the user they're inside Java.
 *
 * Path: `Catalog → Java → JSF → [RichFaces or recipe]`
 */
export const HighDeepMidLevel: Story = {
  name: 'High: Java → JSF (mid-depth, level 2)',
  args: {
    breadcrumbs: [
      { label: 'Catalog', href: `${BASE}` },
      { label: 'Java', href: `${BASE}/java` },
    ],
    label: 'JSF',
    totalRecipeCount: 4,
    subcategories: [
      { label: 'RichFaces', href: `${BASE}/java/jsf/richfaces`, totalRecipeCount: 3 },
    ],
    recipes: [
      { label: 'Migrate to JSF 2.3', href: `${BASE}/java/jsf/migratetojsf23` },
    ],
  },
};

/**
 * **High: near-leaf** — Java → JSF → RichFaces is 3 levels deep. It has 1 subcategory
 * (Update45) and 2 direct recipes. The breadcrumb trail is getting long — this tests
 * that the layout handles a 3-segment breadcrumb gracefully.
 *
 * Path: `Catalog → Java → JSF → RichFaces → [Update45 or recipe]`
 */
export const HighDeepNearLeaf: Story = {
  name: 'High: Java → JSF → RichFaces (near-leaf, level 3)',
  args: {
    breadcrumbs: [
      { label: 'Catalog', href: `${BASE}` },
      { label: 'Java', href: `${BASE}/java` },
      { label: 'JSF', href: `${BASE}/java/jsf` },
    ],
    label: 'RichFaces',
    totalRecipeCount: 3,
    subcategories: [
      { label: 'Update45', href: `${BASE}/java/jsf/richfaces/update45`, totalRecipeCount: 1 },
    ],
    recipes: [
      { label: 'Migrate RichFaces 3.x to 4.5', href: `${BASE}/java/jsf/richfaces/migraterichfaces3xto45` },
      { label: 'Convert height/width attributes to extendedDataTable style', href: `${BASE}/java/jsf/richfaces/convertheightwidthattributes` },
    ],
  },
};

/**
 * **High: leaf** — Java → JSF → RichFaces → Update45 is 4 levels deep and the end of the line.
 * No subcategories, just 1 recipe. The next click reaches the recipe detail page.
 * This is the deepest drill-down the user can do through this branch.
 *
 * Path: `Catalog → Java → JSF → RichFaces → Update45 → [recipe detail page]`
 */
export const HighDeepLeaf: Story = {
  name: 'High: Java → JSF → RichFaces → Update45 (leaf, level 4)',
  args: {
    breadcrumbs: [
      { label: 'Catalog', href: `${BASE}` },
      { label: 'Java', href: `${BASE}/java` },
      { label: 'JSF', href: `${BASE}/java/jsf` },
      { label: 'RichFaces', href: `${BASE}/java/jsf/richfaces` },
    ],
    label: 'Update45',
    totalRecipeCount: 1,
    subcategories: [],
    recipes: [
      { label: 'Migrate RichFaces tags in xhtml files', href: `${BASE}/java/jsf/richfaces/update45/migraterichfacestags` },
    ],
  },
};
