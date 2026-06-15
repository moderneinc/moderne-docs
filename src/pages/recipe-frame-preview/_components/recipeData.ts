/**
 * Sample data for the recipe-detail-frame PREVIEW page.
 *
 * UI-only design mockup. The structural recipe content (sub-recipes, YAML,
 * examples, data-table columns, options) is AUTO-EXTRACTED from the real
 * generated pages in docs/.../recipe-catalog so the frame is reviewed at true
 * parity — see *.data.ts (regenerate via scripts/.extract-preview-recipes.mjs).
 * The `atAGlance` and `relatedRecipes` fields are PLACEHOLDERS for phase-2 data
 * sourced from existing run metrics / taxonomy (NOT AI). The AI-summary
 * "transformation intent" was removed — see
 * .context/recipe-detail-phase2-implementation.md.
 *
 * Three cases are covered for the UI exploration:
 *   simple  — ReplaceDuplicateStringLiterals (single recipe, 1 option, 1 example)
 *   common  — CommonStaticAnalysis (composite, 73 sub-recipes, 2 examples)
 *   complex — Quarkus 1.x→2.x migration (composite, 22 sub-recipes, multi-language examples)
 */
import { commonStaticAnalysisContent } from './commonStaticAnalysis.data';
import { replaceDuplicateStringLiteralsContent } from './replaceDuplicateStringLiterals.data';
import { quarkus1to2MigrationContent } from './quarkus1to2Migration.data';
import { upgradeJavaVersionContent } from './upgradeJavaVersion.data';
import { dependencyInsightContent } from './dependencyInsight.data';
import { findTypesContent } from './findTypes.data';

export interface DataTableColumn {
  name: string;
  description: string;
}

/** A sub-recipe in a composite's recipe list — name + link to its detail page. */
export interface SubRecipe {
  name: string;
  href: string;
}

/** One language representation of an example (e.g. java, properties, yaml). */
export interface ExampleVariant {
  language: string;
  before: string;
  after: string;
  diff?: string;
  /** When true this variant creates a new file (renders "New file" + the result, no before). */
  newFile?: boolean;
}

/** Option values an example was run with (shown above the before/after). */
export interface ExampleParameter {
  parameter: string;
  value: string;
}

/** A single example, which may have one representation per language. */
export interface RecipeExample {
  name?: string;
  parameters?: ExampleParameter[];
  /** Optional unchanged context file shown above the before/after. */
  unchanged?: { language: string; code: string };
  variants: ExampleVariant[];
}

/** Props passed to the real RunRecipe component (the Usage section). */
export interface UsageProps {
  recipeName: string;
  displayName: string;
  groupId?: string;
  artifactId?: string;
  versionKey?: string;
  requiresConfiguration?: boolean;
  cliOptions?: string;
  useFullyQualifiedCliName?: boolean;
  npmPackage?: string;
  pipPackage?: string;
  nugetPackage?: string;
}

export interface RecipeOption {
  type: string;
  name: string;
  /** Real today: the generator marks optional options with "*Optional*." in the description. */
  required: boolean;
  description: string;
  example?: string;
}

export interface RecipeDataTable {
  name: string;
  displayName: string;
  description: string;
  columns: DataTableColumn[];
}

export interface RelatedRecipe {
  title: string;
  description: string;
}

export interface GlanceStat {
  label: string;
  value: string;
}

export interface SourceLink {
  label: string;
  href: string;
}

/** Real, extracted structural content from a generated recipe page. */
export interface ExtractedContent {
  tags: string[];
  infoAdmonition: string | null;
  preconditions: string[];
  subRecipes: SubRecipe[];
  yaml: string | null;
  options: RecipeOption[];
  usedBy: SubRecipe[];
  examples: RecipeExample[];
  usage: UsageProps;
  dataTables: RecipeDataTable[];
}

export interface RecipePreviewData {
  key: string;
  /** Label for the preview's sample-recipe toggle. */
  tabLabel: string;
  displayName: string;
  fqName: string;
  description: string;
  license: string;
  type: 'Composite recipe' | 'Single recipe';
  languages: string[];
  tags: string[];
  /**
   * "Pattern A" true duplicate: ONE recipe (same id) that applies across these
   * languages — the duplicate per-language pages collapse into this one. Reliably
   * derivable from the shared canonical link (see the spike doc).
   */
  appliesToLanguages?: string[];
  /**
   * "Pattern B" cross-language siblings: DISTINCT recipes (different IDs) that share
   * this recipe's name in other languages — linked, not merged. In production this
   * is a curated/generator-emitted index, NOT short-name matching (see the spike doc).
   */
  alsoAvailableIn?: { language: string; href: string }[];
  sourceLinks: SourceLink[];
  /** PLACEHOLDER — phase-2 data sourced from existing run metrics / platform (no AI). */
  atAGlance: GlanceStat[];
  /** Composite "this recipe is composed of more than one recipe…" note (real `:::info`). */
  infoAdmonition: string | null;
  preconditions: string[];
  options: RecipeOption[];
  /** Composite recipes only. */
  subRecipes: SubRecipe[];
  /** Composite recipes only — the full declarative definition. */
  yaml?: string | null;
  /** Composite recipes that use this one. */
  usedBy: SubRecipe[];
  examples: RecipeExample[];
  /** Usage section — real RunRecipe props. */
  usage: UsageProps;
  /** Master template only — labelled Usage variants (Java / config / JS / Python / C#). */
  usageVariants?: { label: string; props: UsageProps }[];
  dataTables: RecipeDataTable[];
  appLink: string;
  /** PLACEHOLDER — phase-2 related-recipe data. */
  relatedRecipes: RelatedRecipe[];
  /** Markdown handed to the "Copy page" / "Open in LLM" actions. */
  markdown: string;
}

const replaceDuplicateStringLiterals: RecipePreviewData = {
  key: 'simple',
  tabLabel: 'Single recipe',
  displayName: 'Replace duplicate `String` literals',
  fqName: 'org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals',
  description:
    'Replaces `String` literals with a length of 5 or greater repeated a minimum of 3 times with a `private static final String` constant. Centralizing repeated string values into constants makes refactoring safer and reduces the risk of inconsistent updates.',
  license: 'Moderne Source Available',
  type: 'Single recipe',
  languages: ['Java'],
  tags: replaceDuplicateStringLiteralsContent.tags,
  sourceLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ReplaceDuplicateStringLiterals.java',
    },
    { label: 'Issue tracker', href: 'https://github.com/openrewrite/rewrite-static-analysis/issues' },
    {
      label: 'Maven Central',
      href: 'https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/',
    },
  ],
  atAGlance: [
    { label: 'Options', value: String(replaceDuplicateStringLiteralsContent.options.length) },
    { label: 'Est. time saved', value: '~2 min / file' },
    { label: 'OSS repos run on', value: '8,900+' },
    { label: 'Avg. changes / repo', value: '42' },
  ],
  infoAdmonition: replaceDuplicateStringLiteralsContent.infoAdmonition,
  preconditions: replaceDuplicateStringLiteralsContent.preconditions,
  options: replaceDuplicateStringLiteralsContent.options,
  subRecipes: replaceDuplicateStringLiteralsContent.subRecipes,
  yaml: replaceDuplicateStringLiteralsContent.yaml,
  usedBy: replaceDuplicateStringLiteralsContent.usedBy,
  examples: replaceDuplicateStringLiteralsContent.examples,
  usage: replaceDuplicateStringLiteralsContent.usage,
  dataTables: replaceDuplicateStringLiteralsContent.dataTables,
  appLink: 'https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals',
  relatedRecipes: [
    { title: 'Common static analysis issues', description: 'The composite recipe that can run this one.' },
    { title: 'Finalize local variables', description: 'Another safety-oriented cleanup recipe.' },
    { title: 'Use String.equals()', description: 'Related String-handling cleanup.' },
  ],
  markdown: `# Replace duplicate String literals

**org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals**

Replaces String literals repeated 3+ times with a private static final constant.

## Options
- includeTestSources (Boolean): also apply to test sources.

## Usage
mod run . --recipe ReplaceDuplicateStringLiterals
`,
};

const quarkus1to2Migration: RecipePreviewData = {
  key: 'complex',
  tabLabel: 'Composite complex recipe',
  displayName: 'Quarkus 2.x migration from Quarkus 1.x',
  fqName: 'org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration',
  description:
    'Migrates Quarkus 1.x to 2.x. Applies the full set of API, configuration, and dependency changes needed to move a Quarkus application across the major version, including both Java source and application configuration (properties and YAML).',
  license: 'Apache License 2.0',
  type: 'Composite recipe',
  languages: ['Java', 'Properties', 'YAML'],
  tags: quarkus1to2MigrationContent.tags,
  sourceLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/resources/META-INF/rewrite/quarkus.yml',
    },
    { label: 'Issue tracker', href: 'https://github.com/openrewrite/rewrite-quarkus/issues' },
    {
      label: 'Maven Central',
      href: 'https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-quarkus/',
    },
  ],
  atAGlance: [
    { label: 'Sub-recipes', value: String(quarkus1to2MigrationContent.subRecipes.length) },
    { label: 'Est. time saved', value: '~3 hrs / app' },
    { label: 'OSS repos run on', value: '1,200+' },
    { label: 'Avg. changes / repo', value: '64' },
  ],
  infoAdmonition: quarkus1to2MigrationContent.infoAdmonition,
  preconditions: quarkus1to2MigrationContent.preconditions,
  options: quarkus1to2MigrationContent.options,
  subRecipes: quarkus1to2MigrationContent.subRecipes,
  yaml: quarkus1to2MigrationContent.yaml,
  usedBy: quarkus1to2MigrationContent.usedBy,
  examples: quarkus1to2MigrationContent.examples,
  usage: quarkus1to2MigrationContent.usage,
  dataTables: quarkus1to2MigrationContent.dataTables,
  appLink: 'https://app.moderne.io/recipes/org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration',
  relatedRecipes: [
    { title: 'Quarkus 1.13 migration from Quarkus 1.11', description: 'A prerequisite step bundled in this migration.' },
    { title: 'Migrate to Java 17', description: 'Often paired with a Quarkus 2 upgrade.' },
    { title: 'Spring Boot 2.x migration', description: 'Comparable framework migration recipe.' },
  ],
  markdown: `# Quarkus 2.x migration from Quarkus 1.x

**org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration**

Migrates Quarkus 1.x to 2.x.

## Definition
A composite recipe composed of ${quarkus1to2MigrationContent.subRecipes.length} sub-recipes, with examples in Java, properties, and YAML.

## Usage
mod run . --recipe Quarkus1to2Migration
`,
};

// A second complex composite — and the one real recipe in this set that carries
// an Options table, so the Options column (Required/Optional) is exercised by a
// real page, not only the master template.
const upgradeJavaVersion: RecipePreviewData = {
  key: 'upgrade-java',
  tabLabel: 'Composite complex recipe 2',
  displayName: 'Upgrade Java version',
  fqName: 'org.openrewrite.java.migrate.UpgradeJavaVersion',
  description:
    'Upgrade build plugin configuration to use the specified Java version. This recipe changes `java.toolchain.languageVersion` in `build.gradle(.kts)` of gradle projects, or maven-compiler-plugin target version and related settings. Will not downgrade if the version is newer than the specified version.',
  license: 'Apache License 2.0',
  type: 'Composite recipe',
  languages: ['Java', 'Maven', 'Gradle'],
  tags: upgradeJavaVersionContent.tags,
  sourceLinks: [
    { label: 'GitHub', href: 'https://github.com/openrewrite/rewrite-migrate-java' },
    { label: 'Issue tracker', href: 'https://github.com/openrewrite/rewrite-migrate-java/issues' },
    {
      label: 'Maven Central',
      href: 'https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/',
    },
  ],
  atAGlance: [
    { label: 'Sub-recipes', value: String(upgradeJavaVersionContent.subRecipes.length) },
    { label: 'Est. time saved', value: '~30 min / app' },
    { label: 'OSS repos run on', value: '5,000+' },
    { label: 'Avg. changes / repo', value: '8' },
  ],
  infoAdmonition: upgradeJavaVersionContent.infoAdmonition,
  preconditions: upgradeJavaVersionContent.preconditions,
  options: upgradeJavaVersionContent.options,
  subRecipes: upgradeJavaVersionContent.subRecipes,
  yaml: upgradeJavaVersionContent.yaml,
  usedBy: upgradeJavaVersionContent.usedBy,
  examples: upgradeJavaVersionContent.examples,
  usage: upgradeJavaVersionContent.usage,
  dataTables: upgradeJavaVersionContent.dataTables,
  appLink: 'https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeJavaVersion',
  relatedRecipes: [
    { title: 'Upgrade build to Java 17', description: 'A version-specific wrapper that runs this recipe.' },
    { title: 'Upgrade build to Java 21', description: 'A version-specific wrapper that runs this recipe.' },
    { title: 'Migrate to Java 17', description: 'A broader migration that bundles this upgrade.' },
  ],
  markdown: `# Upgrade Java version

**org.openrewrite.java.migrate.UpgradeJavaVersion**

Upgrade build plugin configuration to use the specified Java version.

## Options
- version (Integer, required): the Java version to upgrade to.

## Definition
A composite recipe composed of ${upgradeJavaVersionContent.subRecipes.length} sub-recipes, configured via the \`version\` option.

## Usage
mod run . --recipe UpgradeJavaVersion --recipe-option "version=11"
`,
};

// A "Pattern B" example from the multi-language spike: DependencyInsight exists as
// DISTINCT recipes (different IDs) across languages that share this name. They are
// cross-linked via `alsoAvailableIn`, not merged. Real recipe (Apache, has options).
const DI_BASE = 'https://docs.moderne.io/user-documentation/recipes/recipe-catalog';
const dependencyInsight: RecipePreviewData = {
  key: 'dependency-insight',
  tabLabel: 'Look-alike recipe',
  displayName: 'Dependency insight for Gradle and Maven',
  fqName: 'org.openrewrite.java.dependencies.DependencyInsight',
  description:
    'Finds dependencies, including transitive dependencies, in both Gradle and Maven projects. Matches within all Gradle dependency configurations and Maven scopes.',
  license: 'Apache License 2.0',
  type: 'Single recipe',
  languages: ['Java', 'Gradle', 'Maven'],
  tags: dependencyInsightContent.tags,
  alsoAvailableIn: [
    { language: 'C#', href: `${DI_BASE}/csharp/dependencies/dependencyinsight` },
    { language: 'JavaScript', href: `${DI_BASE}/javascript/search/dependencyinsight` },
    { language: 'Python', href: `${DI_BASE}/python/search/dependencyinsight` },
  ],
  sourceLinks: [
    { label: 'GitHub', href: 'https://github.com/openrewrite/rewrite-java-dependencies' },
    { label: 'Issue tracker', href: 'https://github.com/openrewrite/rewrite-java-dependencies/issues' },
    {
      label: 'Maven Central',
      href: 'https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/',
    },
  ],
  atAGlance: [
    { label: 'Sub-recipes', value: '0' },
    { label: 'Est. time saved', value: '~15 min / audit' },
    { label: 'OSS repos run on', value: '8,000+' },
    { label: 'Avg. changes / repo', value: '—' },
  ],
  infoAdmonition: dependencyInsightContent.infoAdmonition,
  preconditions: dependencyInsightContent.preconditions,
  options: dependencyInsightContent.options,
  subRecipes: dependencyInsightContent.subRecipes,
  yaml: dependencyInsightContent.yaml,
  usedBy: dependencyInsightContent.usedBy,
  examples: dependencyInsightContent.examples,
  usage: dependencyInsightContent.usage,
  dataTables: dependencyInsightContent.dataTables,
  appLink: 'https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyInsight',
  relatedRecipes: [
    { title: 'Upgrade dependency version', description: 'A common follow-up after an insight audit.' },
    { title: 'Dependency vulnerability check', description: 'Related dependency-analysis recipe.' },
    { title: 'Find dependency', description: 'A narrower dependency search.' },
  ],
  markdown: `# Dependency insight for Gradle and Maven

**org.openrewrite.java.dependencies.DependencyInsight**

Finds dependencies, including transitive dependencies, in Gradle and Maven projects.

## Options
- groupIdPattern (String, required), artifactIdPattern (String, required), version (String, optional), scope (String, optional)

## Also available in
Distinct per-language recipes: C#, JavaScript, Python.

## Usage
mod run . --recipe DependencyInsight --recipe-option "groupIdPattern=com.fasterxml.jackson*"
`,
};

// A "Pattern A" true-duplicate example from the spike: the SAME recipe id is
// published once per language (java/csharp/javascript/python copies all share one
// canonical). Modelled here as a single page with an `appliesToLanguages` badge —
// the high-confidence, machine-detectable treatment.
const findTypes: RecipePreviewData = {
  key: 'find-types',
  tabLabel: 'Multi-language recipe',
  displayName: 'Find types',
  fqName: 'org.openrewrite.java.search.FindTypes',
  description: 'Find type references by name.',
  license: 'Apache License 2.0',
  type: 'Single recipe',
  languages: ['Java'],
  appliesToLanguages: ['Java', 'C#', 'JavaScript', 'Python'],
  tags: findTypesContent.tags,
  sourceLinks: [
    { label: 'GitHub', href: 'https://github.com/openrewrite/rewrite' },
    { label: 'Issue tracker', href: 'https://github.com/openrewrite/rewrite/issues' },
    {
      label: 'Maven Central',
      href: 'https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/',
    },
  ],
  atAGlance: [
    { label: 'Sub-recipes', value: '0' },
    { label: 'Est. time saved', value: '~5 min / search' },
    { label: 'OSS repos run on', value: '20,000+' },
    { label: 'Avg. changes / repo', value: '—' },
  ],
  infoAdmonition: findTypesContent.infoAdmonition,
  preconditions: findTypesContent.preconditions,
  options: findTypesContent.options,
  subRecipes: findTypesContent.subRecipes,
  yaml: findTypesContent.yaml,
  usedBy: findTypesContent.usedBy,
  examples: findTypesContent.examples,
  usage: findTypesContent.usage,
  dataTables: findTypesContent.dataTables,
  appLink: 'https://app.moderne.io/recipes/org.openrewrite.java.search.FindTypes',
  relatedRecipes: [
    { title: 'Find methods', description: 'A sibling search recipe (also multi-language).' },
    { title: 'Change type', description: 'Often the follow-up to a type search.' },
    { title: 'Find fields', description: 'A narrower member search.' },
  ],
  markdown: `# Find types

**org.openrewrite.java.search.FindTypes**

Find type references by name.

## Applies to
One recipe, applied across Java, C#, JavaScript, Python (the duplicate per-language pages collapse into this one).

## Usage
mod run . --recipe FindTypes --recipe-option "fullyQualifiedTypeName=java.util.List"
`,
};

// ---------------------------------------------------------------------------
// MASTER TEMPLATE — a styling reference that renders EVERY possible element.
// Not a real recipe; a superset. Real shapes are reused where possible
// (sub-recipes/yaml/data-tables from CommonStaticAnalysis). The three recipes
// above are real subsets derived from this set of elements.
// ---------------------------------------------------------------------------
const MASTER_NAME = 'org.openrewrite.example.MasterRecipeTemplate';
const MASTER_USED_BY_BASE = 'https://docs.moderne.io/user-documentation/recipes/recipe-catalog';

const masterTemplate: RecipePreviewData = {
  key: 'master',
  tabLabel: 'Master template',
  displayName: 'Master recipe template — every `element`',
  fqName: MASTER_NAME,
  description:
    'A styling reference that exercises every UI element a recipe detail page can render: inline `code`, tags, options, a composite `Definition`, “Used by”, examples (parameters, unchanged context, multi-language, new file, and diffs), all Usage variants, and data tables. This is not a real recipe — real recipes are subsets of these elements.',
  license: 'Moderne Source Available',
  type: 'Composite recipe',
  languages: ['Java', 'Kotlin', 'Properties', 'YAML'],
  tags: ['RSPEC-S1192', 'RSPEC-S1889'],
  sourceLinks: [
    { label: 'GitHub', href: 'https://github.com/openrewrite/rewrite-static-analysis' },
    { label: 'Issue tracker', href: 'https://github.com/openrewrite/rewrite-static-analysis/issues' },
    { label: 'Maven Central', href: 'https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/' },
  ],
  atAGlance: [
    { label: 'Sub-recipes', value: String(commonStaticAnalysisContent.subRecipes.length) },
    { label: 'Est. time saved', value: '~5 min / file' },
    { label: 'OSS repos run on', value: '12,400+' },
    { label: 'Avg. changes / repo', value: '180' },
  ],
  infoAdmonition:
    'This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.',
  preconditions: ['Singleton'],
  options: [
    {
      type: 'Boolean',
      name: 'includeTestSources',
      required: false,
      description: 'Changes only apply to main by default. Apply the recipe to test source files too.',
      example: 'true',
    },
    {
      type: 'String',
      name: 'methodPattern',
      required: true,
      description: 'A method pattern that is used to find matching method invocations.',
      example: 'java.util.List add(..)',
    },
    {
      type: 'String',
      name: 'classPattern',
      required: false,
      description: 'A fully qualified class name pattern restricting matches to the specified class hierarchy.',
      example: 'java.util.*',
    },
    {
      type: 'Boolean',
      name: 'matchOverrides',
      required: false,
      description: 'When enabled, also matches methods overriding the target method in subclasses.',
      example: 'false',
    },
  ],
  subRecipes: commonStaticAnalysisContent.subRecipes,
  yaml: commonStaticAnalysisContent.yaml,
  usedBy: [
    { name: 'Common static analysis issues', href: `${MASTER_USED_BY_BASE}/staticanalysis/commonstaticanalysis` },
    { name: 'Code cleanup', href: `${MASTER_USED_BY_BASE}/staticanalysis/codecleanup` },
    { name: 'Migrate to Java 21', href: `${MASTER_USED_BY_BASE}/java/migrate/upgradetojava21` },
    { name: 'Migrate to Java 17', href: `${MASTER_USED_BY_BASE}/java/migrate/upgradetojava17` },
    { name: 'Spring Boot 3.x migration', href: `${MASTER_USED_BY_BASE}/java/spring/boot3/upgradespringboot_3_0` },
    { name: 'Spring Boot 2.x migration', href: `${MASTER_USED_BY_BASE}/java/spring/boot2/upgradespringboot_2_7` },
    { name: 'JUnit 4 to JUnit 5', href: `${MASTER_USED_BY_BASE}/java/testing/junit5/junit4to5migration` },
    { name: 'Migrate to Jakarta EE 10', href: `${MASTER_USED_BY_BASE}/java/migrate/jakarta/javaxmigrationtojakarta` },
    { name: 'Find and fix vulnerable dependencies', href: `${MASTER_USED_BY_BASE}/java/dependencies/dependencyvulnerabilitycheck` },
    { name: 'Remove unused imports', href: `${MASTER_USED_BY_BASE}/java/orderimports` },
    { name: 'Apache Commons Lang 2.x to 3.x', href: `${MASTER_USED_BY_BASE}/java/apache/commons/lang/upgradeapachecommonslang_2_3` },
    { name: 'Migrate to Mockito 5.x', href: `${MASTER_USED_BY_BASE}/java/testing/mockito/mockito1to4migration` },
    { name: 'Modernize logging with SLF4J', href: `${MASTER_USED_BY_BASE}/java/logging/slf4j/loggersnamedforenclosingclass` },
    { name: 'Replace Guava with Java equivalents', href: `${MASTER_USED_BY_BASE}/java/migrate/guava/noguava` },
    { name: 'Static analysis fixes (SAST)', href: `${MASTER_USED_BY_BASE}/staticanalysis/codecleanup` },
    { name: 'Migrate to AssertJ', href: `${MASTER_USED_BY_BASE}/java/testing/assertj/assertj` },
    { name: 'Spring Framework 6.x migration', href: `${MASTER_USED_BY_BASE}/java/spring/framework/upgradespringframework_6_0` },
    { name: 'Migrate to Quarkus 3', href: `${MASTER_USED_BY_BASE}/quarkus/quarkus3/quarkus2to3migration` },
    { name: 'Best practices for Java', href: `${MASTER_USED_BY_BASE}/java/recipes/javabestpractices` },
    { name: 'Security best practices', href: `${MASTER_USED_BY_BASE}/java/security/securejavapractices` },
  ],
  examples: [
    {
      name: 'MasterRecipeTest#withParameters',
      parameters: [{ parameter: 'includeTestSources', value: 'true' }],
      variants: [
        {
          language: 'java',
          before: 'class A {\n    final String a = "value";\n    final String b = "value";\n    final String c = "value";\n}',
          after: 'class A {\n    private static final String VALUE = "value";\n    final String a = VALUE;\n    final String b = VALUE;\n    final String c = VALUE;\n}',
          diff: '@@ -1,4 +1,4 @@\n class A {\n-    final String a = "value";\n-    final String b = "value";\n+    private static final String VALUE = "value";\n+    final String a = VALUE;\n+    final String b = VALUE;\n }',
        },
      ],
    },
    {
      name: 'MasterRecipeTest#withUnchangedContext',
      unchanged: { language: 'mavenProject', code: 'project' },
      variants: [
        {
          language: 'pom.xml',
          before: '<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n</project>',
          after: '<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <properties>\n    <java.version>21</java.version>\n  </properties>\n</project>',
        },
      ],
    },
    {
      name: 'MasterRecipeTest#multiLanguage',
      variants: [
        {
          language: 'java',
          before: 'class A {\n    boolean b = !(a == b);\n}',
          after: 'class A {\n    boolean b = a != b;\n}',
          diff: '@@ -1,3 +1,3 @@\n class A {\n-    boolean b = !(a == b);\n+    boolean b = a != b;\n }',
        },
        {
          language: 'properties',
          before: 'spring.profiles=dev',
          after: 'spring.config.activate.on-profile=dev',
          diff: '@@ -1,1 +1,1 @@\n-spring.profiles=dev\n+spring.config.activate.on-profile=dev',
        },
      ],
    },
    {
      name: 'MasterRecipeTest#createsNewFile',
      variants: [
        {
          language: 'toml',
          newFile: true,
          before: '',
          after: '[tool.poetry]\nname = "my-project"\nversion = "0.1.0"\ndescription = "A sample project"',
        },
      ],
    },
    {
      name: 'MasterRecipeTest#simplifyBoolean',
      variants: [
        {
          language: 'java',
          before: 'class A {\n    boolean b = a == true;\n}',
          after: 'class A {\n    boolean b = a;\n}',
          diff: '@@ -1,3 +1,3 @@\n class A {\n-    boolean b = a == true;\n+    boolean b = a;\n }',
        },
      ],
    },
    {
      name: 'MasterRecipeTest#removeUnusedImport',
      variants: [
        {
          language: 'java',
          before: 'import java.util.List;\n\nclass A {\n}',
          after: 'class A {\n}',
          diff: '@@ -1,4 +1,2 @@\n-import java.util.List;\n-\n class A {\n }',
        },
      ],
    },
  ],
  usage: {
    recipeName: MASTER_NAME,
    displayName: 'Master recipe template',
    groupId: 'org.openrewrite.recipe',
    artifactId: 'rewrite-static-analysis',
    versionKey: 'VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS',
  },
  usageVariants: [
    {
      label: 'Java / JVM',
      props: {
        recipeName: MASTER_NAME,
        displayName: 'Master recipe template',
        groupId: 'org.openrewrite.recipe',
        artifactId: 'rewrite-static-analysis',
        versionKey: 'VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS',
      },
    },
    {
      label: 'With configuration',
      props: {
        recipeName: MASTER_NAME,
        displayName: 'Master recipe template',
        groupId: 'org.openrewrite.recipe',
        artifactId: 'rewrite-static-analysis',
        versionKey: 'VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS',
        requiresConfiguration: true,
        cliOptions: ' --recipe-option "methodPattern=java.util.List add(..)"',
      },
    },
    {
      label: 'JavaScript',
      props: { recipeName: MASTER_NAME, displayName: 'Master recipe template', npmPackage: '@openrewrite/recipe-static-analysis' },
    },
    {
      label: 'Python',
      props: { recipeName: MASTER_NAME, displayName: 'Master recipe template', pipPackage: 'openrewrite-recipe-static-analysis' },
    },
    {
      label: 'C#',
      props: { recipeName: MASTER_NAME, displayName: 'Master recipe template', nugetPackage: 'OpenRewrite.Recipe.StaticAnalysis' },
    },
  ],
  dataTables: commonStaticAnalysisContent.dataTables,
  appLink: `https://app.moderne.io/recipes/${MASTER_NAME}`,
  relatedRecipes: [
    { title: 'Common static analysis issues', description: 'A real composite using these elements.' },
    { title: 'Replace duplicate String literals', description: 'A real single recipe.' },
    { title: 'Quarkus 1→2 migration', description: 'A real multi-language migration.' },
  ],
  markdown: `# Master recipe template\n\n**${MASTER_NAME}**\n\nA styling reference exercising every recipe-detail UI element.`,
};

export const RECIPES: RecipePreviewData[] = [
  masterTemplate,
  replaceDuplicateStringLiterals,
  quarkus1to2Migration,
  upgradeJavaVersion,
  findTypes,
  dependencyInsight,
];
