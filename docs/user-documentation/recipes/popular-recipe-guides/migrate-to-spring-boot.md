---
sidebar_label: Migrate to a newer version of Spring Boot
description: How to upgrade Spring Boot codebases to the latest version with the Moderne Platform or CLI.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to a newer version of Spring Boot

Spring Boot 4 reorganizes the starter layout into smaller, more focused modules, removes test annotations like `@MockBean` and `@SpyBean` in favor of Spring Framework's bean-override APIs, and pulls in major bumps to Spring Framework 7, Spring Security 7, Spring Cloud 2025.1, Hibernate 7.1, and a long tail of related libraries. Upgrading from Spring Boot 2 is staged: first to Spring Boot 3 (the `javax` to `jakarta` namespace change), then to Spring Boot 4.

This guide leads with the upgrade to the latest release, **Spring Boot 4**. If your codebase is still on Spring Boot 2.x, start with [Coming from Spring Boot 2.x](#coming-from-spring-boot-2x) to get to Spring Boot 3 first.

In this guide, we will show you how to run these recipes on the Moderne Platform or with the Moderne CLI.

## Prerequisites

Before running the Spring Boot 4 recipe, make sure:

* Your codebase currently builds on **Spring Boot 3.x** (or an earlier 4.x release). The recipe handles the full upgrade path from Spring Boot 3.0 onward, applying intermediate version migrations as needed. If you are still on Spring Boot 2.x, complete the [Spring Boot 2.x to 3 upgrade](#coming-from-spring-boot-2x) first and validate the result before moving on.
* Your build environment uses **Java 17 or later**. If you are still on an earlier Java version, run [Migrate to Java](./migrate-to-java.md) first and verify everything still builds.

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

## Coming from Spring Boot 2.x

Spring Boot 3 brought one of the most significant breaking changes in the framework's history: the move from `javax.*` to `jakarta.*`, alongside renamed configuration properties, a rewritten Spring Security configuration model, and a baseline bump to Java 17. Every Spring Boot 2 codebase is touched by these changes, so complete this upgrade first, then return to [What this recipe does](#what-this-recipe-does) to continue on to Spring Boot 4.

The [`UpgradeSpringBoot_3_5`](../recipe-catalog/java/spring/boot3/upgradespringboot_3_5-moderne-edition.md) recipe migrates the Jakarta namespace, updates configuration settings, modernizes deprecated APIs, and chains the supporting framework upgrades (Spring Framework, Spring Data, Spring Security, Spring Cloud) so everything lands on compatible versions.

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

Run it the same way as the Spring Boot 4 recipe above, substituting the recipe below.

<RunRecipe
  recipeName="io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5"
  displayName="Migrate to Spring Boot 3.5"
  groupId="io.moderne.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING"
  useFullyQualifiedCliName
/>

On the Moderne Platform, search for the `Migrate to Spring Boot 3.5` recipe ([Moderne Platform link](https://app.moderne.io/recipes/io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5)).

## Additional reading

* [Spring Boot migration workshop](../../../hands-on-learning/spring-boot-migration/workshop-overview.md) – a hands-on guide to planning and executing a Spring Boot upgrade in waves, including assessment, smoke testing, and custom recipe authoring for organization-specific patterns.
* [Tracking migrations](../../moderne-platform/how-to-guides/track-migrations.md) – use data tables and visualizations to track the rollout of a Spring Boot upgrade across many repositories.
