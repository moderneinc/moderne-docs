---
sidebar_label: Migrate to Jakarta EE 10
description: How to migrate Java EE and Jakarta EE codebases to Jakarta EE 10 with the Moderne Platform or CLI.
keywords: [migrate to jakarta ee, jakarta ee 10, javax to jakarta, java ee to jakarta, jakarta namespace migration]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Jakarta EE 10

Jakarta EE 10 is the enterprise Java baseline that modern application servers, Spring, and a long tail of frameworks now build on. It carries forward the `jakarta.*` namespace introduced in Jakarta EE 9 – the rename of every `javax.*` enterprise package – and layers on new API versions such as Servlet 6.0, Persistence 3.1, and CDI 4.0, while removing methods and classes that had been deprecated for years.

For a codebase still on the `javax.*` APIs, that is a sprawling change: every enterprise import, every annotation attribute, every deployment descriptor, and every API dependency has to move in lockstep, and the deprecated-method removals are easy to miss until something fails at runtime.

The [`JakartaEE10`](../recipe-catalog/java/migrate/jakarta/jakartaee10.md) recipe applies these changes automatically: it migrates the `javax.*` namespace to `jakarta.*`, updates the Jakarta EE API and platform dependencies to their EE 10 versions, replaces deprecated APIs, and updates the XML descriptors and third-party libraries that need to move alongside them.

In this guide, we will show you how to run this recipe on the Moderne Platform or with the Moderne CLI.

## Prerequisites

Before running this recipe, make sure:

* Your codebase currently uses the `javax.*` enterprise APIs (Java EE or Jakarta EE 8) or an earlier Jakarta EE 9 release. `JakartaEE10` includes the [Jakarta EE 9 namespace migration](../recipe-catalog/java/migrate/jakarta/javaxmigrationtojakarta.md) transitively, so the `javax` to `jakarta` rename and the EE 10 updates are applied in a single run – you do not need to migrate to Jakarta EE 9 first.
* Your build environment uses **Java 11 or later**. Jakarta EE 10 sets its baseline at Java SE 11 and also supports Java SE 17. If you are still on Java 8, run [Migrate to Java 17](./migrate-to-java.md) first and verify everything still builds.

## What this recipe does

`JakartaEE10` is a composite recipe that bundles many smaller transformations. Some of the most visible changes this recipe makes to your code include:

* [Migrate the `javax.*` namespace to `jakarta.*`](../recipe-catalog/java/migrate/jakarta/javaxmigrationtojakarta.md) – the foundational rename covering Servlet, Persistence, Validation, CDI, JMS, and JAX-RS APIs, along with the `xmlns` declarations in deployment descriptors like `web.xml`, `beans.xml`, and `ejb-jar.xml`.
* [Update Jakarta EE API dependencies to their EE 10 versions](../recipe-catalog/java/migrate/jakarta/migrationtojakarta10apis.md) – bumps API artifacts such as `jakarta.servlet-api` to 6.0.x, `jakarta.persistence-api` to 3.1.x, and `jakarta.validation-api` to 3.0.x.
* [Replace deprecated Jakarta Servlet methods and classes](../recipe-catalog/java/migrate/jakarta/removalsservletjakarta10.md) – swaps out APIs removed in Servlet 6.0, renaming calls like `encodeUrl(..)` to `encodeURL(..)` and `HttpSession.putValue(..)` to `setAttribute(..)`.
* [Update `javax`-valued annotation attributes](../recipe-catalog/java/migrate/jakarta/updateannotationattributejavaxtojakarta.md) – rewrites string attributes that still reference `javax`, such as `interfaceName = "javax.jms.Topic"` on a `@JMSDestinationDefinition`.

Beyond these source changes, the recipe also raises the [Jakarta EE platform dependencies to 10.0.0](../recipe-catalog/java/migrate/jakarta/updatejakartaplatform10.md), removes [deprecated CDI 4.0 APIs](../recipe-catalog/java/migrate/jakarta/deprecatedcdiapisremoved40.md), upgrades supporting libraries (Jersey 3.1, EclipseLink 4.x, Apache Shiro 2.0, Eclipse Yasson 3.0, and Apache Commons Email2 and FileUpload2), migrates Jakarta Faces to 4.x, upgrades Jetty EE9 to EE10, and updates build plugins in your Maven and Gradle files. For the complete list of sub-recipes, see the [recipe catalog page](../recipe-catalog/java/migrate/jakarta/jakartaee10.md).

### Example

Here is a small servlet helper before and after `JakartaEE10` runs:

```java title="Before"
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

class SessionHandler {
    void store(HttpSession session, String userId) {
        session.putValue("user", userId);
    }

    String redirect(HttpServletResponse response, String url) {
        return response.encodeUrl(url);
    }
}
```

```java title="After"
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

class SessionHandler {
    void store(HttpSession session, String userId) {
        session.setAttribute("user", userId);
    }

    String redirect(HttpServletResponse response, String url) {
        return response.encodeURL(url);
    }
}
```

## Running the recipe

<Tabs groupId="run-target" queryString="target">
<TabItem value="platform" label="Moderne Platform" default>

1. Sign in to your Moderne tenant or [app.moderne.io](https://app.moderne.io).
2. (Optionally) Use the **Organization** selector to scope the run to the repositories you want to upgrade.
3. Search for the `Migrate to Jakarta EE 10` recipe ([Moderne Platform link](https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JakartaEE10)).
4. Click **Dry run**.

For a step-by-step walkthrough of the Moderne Platform UI, see [Quickstart: Using the Moderne Platform](../../moderne-platform/getting-started/running-your-first-recipe.md).

</TabItem>
<TabItem value="cli" label="Moderne CLI">

Make sure you have [built or downloaded Lossless Semantic Trees (LSTs)](../../moderne-cli/getting-started/cli-intro.md#building-lsts) for the repositories you want to upgrade.

<RunRecipe
  recipeName="org.openrewrite.java.migrate.jakarta.JakartaEE10"
  displayName="Migrate to Jakarta EE 10"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
/>

</TabItem>
</Tabs>

## Reviewing and committing the changes

Running the recipe never modifies your source repositories directly. Instead, the changes are presented as a diff that you can inspect before deciding what to commit. Review them with whatever workflow fits your team, then use the Moderne Platform's commit options or the [`mod git`](../../moderne-cli/cli-reference.md) CLI commands to push the changes across the affected repositories.

## Additional reading

* [Migrate to Spring Boot 3](./migrate-to-spring-boot.md#coming-from-spring-boot-2x) – Spring Boot 3 builds on this same `javax.*` to `jakarta.*` move, so start there if you are upgrading Spring applications.
* [Tracking migrations](../../moderne-platform/how-to-guides/track-migrations.md) – use data tables and visualizations to track the rollout of a Jakarta EE 10 upgrade across many repositories.
