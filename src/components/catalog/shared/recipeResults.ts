import type { RecipeResult } from './types';

const BASE = '/user-documentation/recipes/recipe-catalog';

/**
 * Sample recipes for filter results and popular recipes section.
 * Real data from the generator output — names, IDs, descriptions, and category paths
 * all match what's in the docs.
 */
export const SAMPLE_RECIPES: RecipeResult[] = [
  // ── Spring Boot migrations ─────────────────────────────────────────
  {
    displayName: 'Spring Boot 3.5 best practices',
    fqName: 'io.moderne.java.spring.boot3.SpringBoot3BestPractices',
    href: `${BASE}/java/spring/boot3/springboot3bestpractices`,
    description: 'Applies best practices to Spring Boot 3.5+ applications.',
    categoryPath: ['Java', 'Spring', 'Boot 3.x'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/io.moderne.java.spring.boot3.SpringBoot3BestPractices',
  },
  {
    displayName: 'Migrate to Spring Boot 3.4',
    fqName: 'org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_4',
    href: `${BASE}/java/spring/boot3/upgradespringboot_3_4`,
    description: 'Migrate applications to the latest Spring Boot 3.4 release.',
    categoryPath: ['Java', 'Spring', 'Boot 3.x'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_4',
  },
  {
    displayName: 'Migrate to Spring Boot 3.0',
    fqName: 'org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0',
    href: `${BASE}/java/spring/boot3/upgradespringboot_3_0`,
    description: 'Migrate applications to the latest Spring Boot 3.0 release.',
    categoryPath: ['Java', 'Spring', 'Boot 3.x'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0',
  },
  {
    displayName: 'Migrate Spring Boot properties',
    fqName: 'org.openrewrite.java.spring.boot2.SpringBootProperties_2_3',
    href: `${BASE}/java/spring/boot2/springbootproperties_2_3`,
    description: 'Migrate Spring Boot application properties to their equivalents in newer versions.',
    categoryPath: ['Java', 'Spring', 'Boot 2.x'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_3',
  },

  // ── Java migrations ───────────────────────────────────────────────
  {
    displayName: 'Migrate to Java 21',
    fqName: 'org.openrewrite.java.migrate.UpgradeToJava21',
    href: `${BASE}/java/migrate/upgradetojava21`,
    description: 'This recipe will apply changes commonly needed when migrating to Java 21.',
    categoryPath: ['Java', 'Migrate'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava21',
  },
  {
    displayName: 'Migrate to Java 17',
    fqName: 'org.openrewrite.java.migrate.UpgradeToJava17',
    href: `${BASE}/java/migrate/upgradetojava17`,
    description: 'This recipe will apply changes commonly needed when migrating to Java 17.',
    categoryPath: ['Java', 'Migrate'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava17',
  },

  // ── Static analysis ───────────────────────────────────────────────
  {
    displayName: 'Common static analysis issues',
    fqName: 'org.openrewrite.staticanalysis.CommonStaticAnalysis',
    href: `${BASE}/staticanalysis/commonstaticanalysis`,
    description: 'Resolve common static analysis issues (also known as SAST issues).',
    categoryPath: ['Static analysis'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis',
  },
  {
    displayName: 'Replace duplicate String literals',
    fqName: 'org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals',
    href: `${BASE}/staticanalysis/replaceduplicatestringliterals`,
    description: 'Replaces String literals repeated a minimum of 3 times with a shared constant.',
    categoryPath: ['Static analysis'],
    type: 'Single recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals',
  },

  // ── Maven / Gradle (build tool) ───────────────────────────────────
  {
    displayName: 'Upgrade Maven dependency version',
    fqName: 'org.openrewrite.maven.UpgradeDependencyVersion',
    href: `${BASE}/maven/upgradedependencyversion`,
    description: 'Upgrade the version of a dependency by specifying a group and artifact.',
    categoryPath: ['Maven'],
    type: 'Single recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.maven.UpgradeDependencyVersion',
  },
  {
    displayName: 'Add Gradle dependency',
    fqName: 'org.openrewrite.gradle.AddDependency',
    href: `${BASE}/gradle/adddependency`,
    description: 'Add a dependency to a build.gradle file.',
    categoryPath: ['Gradle'],
    type: 'Single recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.gradle.AddDependency',
  },

  // ── Quarkus ───────────────────────────────────────────────────────
  {
    displayName: 'Quarkus 1.x to 2.x migration',
    fqName: 'org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration',
    href: `${BASE}/quarkus/quarkus2/quarkus1to2migration`,
    description: 'Migrates Quarkus 1.x to 2.x.',
    categoryPath: ['Quarkus', 'Quarkus 2.x'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration',
  },

  // ── Security ──────────────────────────────────────────────────────
  {
    displayName: 'Spring Security 5.x to 6.x',
    fqName: 'org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_0',
    href: `${BASE}/java/spring/security6/upgradespringsecurity_6_0`,
    description: 'Migrate applications to the latest Spring Security 6.0 release.',
    categoryPath: ['Java', 'Spring', 'Security 6.x'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_0',
  },
  {
    displayName: 'Find secrets',
    fqName: 'org.openrewrite.java.security.FindSecrets',
    href: `${BASE}/java/security/findsecrets`,
    description: 'Locates secrets stored in plain text in code.',
    categoryPath: ['Java', 'Security'],
    type: 'Single recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.java.security.FindSecrets',
  },

  // ── Testing ───────────────────────────────────────────────────────
  {
    displayName: 'JUnit Jupiter migration from JUnit 4.x',
    fqName: 'org.openrewrite.java.testing.junit5.JUnit4to5Migration',
    href: `${BASE}/java/testing/junit5/junit4to5migration`,
    description: 'Migrates JUnit 4.x tests to JUnit Jupiter.',
    categoryPath: ['Java', 'Testing', 'JUnit 5'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.JUnit4to5Migration',
  },
  {
    displayName: 'Mockito 4.x to 5.x migration',
    fqName: 'org.openrewrite.java.testing.mockito.Mockito4to5Migration',
    href: `${BASE}/java/testing/mockito/mockito4to5migration`,
    description: 'Upgrade Mockito from 4.x to 5.x.',
    categoryPath: ['Java', 'Testing', 'Mockito'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.Mockito4to5migration',
  },

  // ── Kubernetes / Docker / CI ──────────────────────────────────────
  {
    displayName: 'Apply Docker best practices',
    fqName: 'org.openrewrite.docker.DockerBestPractices',
    href: `${BASE}/docker/dockerbestpractices`,
    description: 'Apply best practices to Dockerfiles.',
    categoryPath: ['Docker'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.docker.DockerBestPractices',
  },
  {
    displayName: 'Update GitHub Actions',
    fqName: 'org.openrewrite.github.SetupJavaUpgradeJavaVersion',
    href: `${BASE}/github/actions/setupjavaupgradejavaversion`,
    description: 'Update setup-java GitHub Action to use a newer Java version.',
    categoryPath: ['GitHub', 'Actions'],
    type: 'Single recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.github.SetupJavaUpgradeJavaVersion',
  },

  // ── Hibernate ─────────────────────────────────────────────────────
  {
    displayName: 'Migrate to Hibernate 6.x',
    fqName: 'org.openrewrite.hibernate.MigrateToHibernate6',
    href: `${BASE}/hibernate/hibernate6/migratetohibernate6`,
    description: 'This recipe will apply changes commonly needed when migrating to Hibernate 6.x.',
    categoryPath: ['Hibernate', 'Hibernate 6.x'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.hibernate.MigrateToHibernate6',
  },

  // ── Kotlin ────────────────────────────────────────────────────────
  {
    displayName: 'Kotlin code cleanup',
    fqName: 'org.openrewrite.kotlin.cleanup.KotlinCleanup',
    href: `${BASE}/kotlin/cleanup`,
    description: 'Automatically clean up Kotlin code.',
    categoryPath: ['Kotlin'],
    type: 'Composite recipe',
    appLink: 'https://app.moderne.io/recipes/org.openrewrite.kotlin.cleanup.KotlinCleanup',
  },
];

/** Curated popular recipes for the quick-start section. */
export const POPULAR_RECIPES: RecipeResult[] = [
  SAMPLE_RECIPES[0],  // Spring Boot 3.5 best practices
  SAMPLE_RECIPES[4],  // Migrate to Java 21
  SAMPLE_RECIPES[6],  // Common static analysis issues
  SAMPLE_RECIPES[11], // Spring Security 5.x to 6.x
  SAMPLE_RECIPES[8],  // Upgrade Maven dependency version
  SAMPLE_RECIPES[13], // JUnit 4 to 5 migration
];
