---
sidebar_label: Migrate to Spring Boot 4
description: How to upgrade Spring Boot codebases to Spring Boot 4 with the Moderne Platform or CLI.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Spring Boot 4

Spring Boot 4 reorganizes the starter layout into smaller, more focused modules, removes test annotations like `@MockBean` and `@SpyBean` in favor of Spring Framework's bean-override APIs, and pulls in major bumps to Spring Framework 7, Spring Security 7, Spring Cloud 2025.1, Hibernate 7.1, and a long tail of related libraries.

A manual upgrade typically means renaming every starter dependency, hunting down deprecated test annotations, and chasing a cascade of framework-version bumps until everything aligns – the kind of churn that's easy to leave half-finished.

The [`UpgradeSpringBoot_4_0`](../recipe-catalog/java/spring/boot4/upgradespringboot_4_0-moderne-edition.md) recipe applies these changes automatically: it renames the modular starters, replaces deprecated APIs, migrates configuration settings, and chains the supporting framework upgrades (Spring Framework 7, Spring Security 7, Spring Cloud, Hibernate 7.1, Testcontainers 2, SpringDoc 3) so everything lands on compatible versions.

In this guide, we will show you how to run this recipe on the Moderne Platform or with the Moderne CLI.

## Prerequisites

Before running this recipe, make sure:

* Your codebase currently builds on **Spring Boot 3.x** (or an earlier 4.x release). The recipe handles the full upgrade path from Spring Boot 3.0 onward, applying intermediate version migrations as needed. If you are still on Spring Boot 2.x, run [Migrate to Spring Boot 3](./migrate-to-spring-boot-3.md) first and validate the result before moving on.
* Your build environment uses **Java 17 or later**. If you are still on an earlier Java version, run [Migrate to Java 17](./migrate-to-java-17.md) first and verify everything still builds.

## What this recipe does

`UpgradeSpringBoot_4_0` is a composite recipe that bundles many smaller transformations. Some of the most visible changes this recipe makes to your code include:

* [Adopt the modular starter layout](../recipe-catalog/java/spring/boot4/migratetomodularstarters-moderne-edition.md) – renames Spring Boot starters that have been split or moved (for example, `spring-boot-starter-web` becomes `spring-boot-starter-webmvc`, and the OAuth2 starters move under the `security` prefix).
* [Replace `@MockBean` and `@SpyBean`](../recipe-catalog/java/spring/boot4/replacemockbeanandspybean.md) – swaps the removed Spring Boot Test annotations for the `@MockitoBean` and `@MockitoSpyBean` equivalents from Spring Test.
* [Update renamed Spring Boot configuration properties](../recipe-catalog/java/spring/boot4/springbootproperties_4_0.md) – rewrites entries in `application.properties` and `application.yml` for keys that changed in Spring Boot 4.
* **Apply the supporting framework upgrades** – chains the [Spring Framework 7](../recipe-catalog/java/spring/framework7/upgradespringframework_7_0.md) and [Spring Security 7](../recipe-catalog/java/spring/security7/upgradespringsecurity_7_0.md) migrations, along with Spring Cloud 2025.1, Hibernate 7.1, Testcontainers 2, and SpringDoc 3 upgrades needed for Spring Boot 4 compatibility.

Beyond your code, the recipe also bumps Spring Boot dependency, parent POM, plugin, and Gradle plugin versions in your Maven and Gradle build files. It also bumps Kotlin to 2.2.x and updates the Gradle wrapper to 8.14 or later when present. For the complete list of sub-recipes, see the [recipe catalog page](../recipe-catalog/java/spring/boot4/upgradespringboot_4_0-moderne-edition.md).

### Example

Here is a small test class before and after `UpgradeSpringBoot_4_0` runs:

```java title="Before"
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;

@SpringBootTest
class UserControllerTest {
    @MockBean
    private UserService service;

    @SpyBean
    private AuditLogger auditLogger;
}
```

```java title="After"
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.context.bean.override.mockito.MockitoSpyBean;

@SpringBootTest
class UserControllerTest {
    @MockitoBean
    private UserService service;

    @MockitoSpyBean
    private AuditLogger auditLogger;
}
```

## Running the recipe

<Tabs groupId="run-target" queryString="target">
<TabItem value="platform" label="Moderne Platform" default>

1. Sign in to your Moderne tenant or [app.moderne.io](https://app.moderne.io).
2. (Optionally) Use the **Organization** selector to scope the run to the repositories you want to upgrade.
3. Search for the `Migrate to Spring Boot 4.0` recipe ([Moderne Platform link](https://app.moderne.io/recipes/io.moderne.java.spring.boot4.UpgradeSpringBoot_4_0)).
4. Click **Dry run**.

For a step-by-step walkthrough of the Moderne Platform UI, see [Quickstart: Using the Moderne Platform](../../moderne-platform/getting-started/running-your-first-recipe.md).

</TabItem>
<TabItem value="cli" label="Moderne CLI">

Make sure you have [built or downloaded Lossless Semantic Trees (LSTs)](../../moderne-cli/getting-started/cli-intro.md#building-lsts) for the repositories you want to upgrade.

<RunRecipe
  recipeName="io.moderne.java.spring.boot4.UpgradeSpringBoot_4_0"
  displayName="Migrate to Spring Boot 4.0"
  groupId="io.moderne.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING"
  useFullyQualifiedCliName
/>

</TabItem>
</Tabs>

## Reviewing and committing the changes

Running the recipe never modifies your source repositories directly. Instead, the changes are presented as a diff that you can inspect before deciding what to commit. Review them with whatever workflow fits your team, then use the Moderne Platform's commit options or the [`mod git`](../../moderne-cli/cli-reference.md) CLI commands to push the changes across the affected repositories.

## Additional reading

* [Tracking migrations](../../moderne-platform/how-to-guides/track-migrations.md) – use data tables and visualizations to track the rollout of a Spring Boot 4 upgrade across many repositories.
* [Spring Boot migration workshop](../../../hands-on-learning/spring-boot-migration/workshop-overview.md) – a hands-on guide to planning and executing a Spring Boot upgrade in waves, including assessment, smoke testing, and custom recipe authoring for organization-specific patterns.
