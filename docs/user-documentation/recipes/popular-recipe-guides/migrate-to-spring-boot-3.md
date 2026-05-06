---
sidebar_label: Migrate to Spring Boot 3
description: How to upgrade Spring Boot codebases to Spring Boot 3.5 with the Moderne Platform or CLI.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Spring Boot 3

Spring Boot 3 brought one of the most significant breaking changes in the framework's history: the move from `javax.*` to `jakarta.*`, alongside renamed configuration properties, a rewritten Spring Security configuration model, and a baseline bump to Java 17. Every Spring Boot 2 codebase is touched by these changes.

A manual upgrade typically means hunting through every `javax` import, every renamed property, and every deprecated annotation across dozens of repositories – repetitive work that's easy to leave half-done.

The [`UpgradeSpringBoot_3_5`](../recipe-catalog/java/spring/boot3/upgradespringboot_3_5-moderne-edition.md) recipe applies these changes automatically: it migrates the Jakarta namespace, updates configuration settings, modernizes deprecated APIs, and chains the supporting framework upgrades (Spring Framework, Spring Data, Spring Security, Spring Cloud) so everything lands on compatible versions.

In this guide, we will show you how to run this recipe on the Moderne Platform or with the Moderne CLI.

## Prerequisites

Before running this recipe, make sure:

* Your codebase currently builds on **Spring Boot 2.x** (or an earlier 3.x release). The recipe handles the full upgrade path from Spring Boot 2.0 onward, applying intermediate version migrations as needed.
* Your build environment uses **Java 17 or later**. Spring Boot 3 dropped support for Java 8 and Java 11. If you are still on an earlier Java version, run [Migrate to Java 17](./migrate-to-java-17.md) first and verify everything still builds.

## What this recipe does

`UpgradeSpringBoot_3_5` is a composite recipe that bundles many smaller transformations. Some of the most visible changes this recipe makes to your code include:

* **Migrate `javax.*` imports to `jakarta.*`** – the foundational namespace change covering Servlet, Persistence, Validation, and other Jakarta EE APIs that moved between Spring Boot 2 and 3.
* **Update renamed Spring Boot configuration properties** – rewrites entries in `application.properties` and `application.yml` (for example, `spring.datasource.schema` becomes `spring.sql.init.schema-locations`).
* **Modernize Spring Security configuration** – replaces removed APIs like `authorizeRequests()` with their Spring Security 6 equivalents.
* **Replace deprecated APIs and patterns** – removes redundant `@Autowired` on single-constructor classes, swaps out APIs marked for removal in Spring Framework 6, and modernizes other patterns that have changed since Spring Boot 2.x.

Beyond your code, the recipe also bumps Spring Boot dependency, parent POM, plugin, and Gradle plugin versions to 3.5.x in your Maven and Gradle build files, along with the chained upgrades to Spring Cloud 2025 and Spring Security 6.5. For the complete list of sub-recipes, see the [recipe catalog page](../recipe-catalog/java/spring/boot3/upgradespringboot_3_5-moderne-edition.md).

### Example

Here is a small REST controller before and after `UpgradeSpringBoot_3_5` runs:

```java title="Before"
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/users", method = RequestMethod.GET)
class UserController {
    private final UserService service;

    @Autowired
    UserController(UserService service) {
        this.service = service;
    }

    void log(HttpServletRequest request) {
        // ...
    }
}
```

```java title="After"
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@GetMapping("/users")
class UserController {
    private final UserService service;

    UserController(UserService service) {
        this.service = service;
    }

    void log(HttpServletRequest request) {
        // ...
    }
}
```

## Running the recipe

<Tabs groupId="run-target" queryString="target">
<TabItem value="platform" label="Moderne Platform" default>

1. Sign in to your Moderne tenant or [app.moderne.io](https://app.moderne.io).
2. (Optionally) Use the **Organization** selector to scope the run to the repositories you want to upgrade.
3. Search for the `Migrate to Spring Boot 3.5` recipe ([Moderne Platform link](https://app.moderne.io/recipes/io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5)).
4. Click **Dry run**.

For a step-by-step walkthrough of the Moderne Platform UI, see [Quickstart: Using the Moderne Platform](../../moderne-platform/getting-started/running-your-first-recipe.md).

</TabItem>
<TabItem value="cli" label="Moderne CLI">

Make sure you have [built or downloaded Lossless Semantic Trees (LSTs)](../../moderne-cli/getting-started/cli-intro.md#building-lsts) for the repositories you want to upgrade.

<RunRecipe
  recipeName="io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5"
  displayName="Migrate to Spring Boot 3.5"
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

* [Migrate to Spring Boot 4](./migrate-to-spring-boot-4.md) – the next step once your codebase is on Spring Boot 3.
* [Tracking migrations](../../moderne-platform/how-to-guides/track-migrations.md) – use data tables and visualizations to track the rollout of a Spring Boot 3 upgrade across many repositories.
* [Spring Boot migration workshop](../../../hands-on-learning/spring-boot-migration/workshop-overview.md) – a hands-on guide to planning and executing a Spring Boot upgrade in waves, including assessment, smoke testing, and custom recipe authoring for organization-specific patterns.
