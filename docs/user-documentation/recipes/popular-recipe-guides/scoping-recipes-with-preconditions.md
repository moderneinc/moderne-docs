---
sidebar_label: Scoping recipes with preconditions
description: How to control which repositories and files a recipe changes when you run it across a large set of repositories.
keywords: [preconditions, scoping recipes, targeting repositories, large scale migration, declarative recipe, dependency filter, module has dependency]
---

# Scoping recipes with preconditions

Not every repository is ready for every migration. A handful of applications may be pinned to an older JDK because a runtime they deploy onto - a Databricks cluster, an application server, or an internal platform - has not certified the newer one yet. Running `Migrate to Java 25` across the whole estate would generate pull requests those teams have to close.

Preconditions provide a way to solve for this. A precondition is an ordinary search recipe that runs first and "marks" source files; the recipes in your `recipeList` are then only allowed to change the files that were marked. By wrapping an existing recipe in a small declarative YAML recipe, you can ship one recipe that is safe to run everywhere.

In this guide, we will walk through how preconditions work, the common filtering patterns you can use in various scenarios, and how to package them so that every team in your organization can reuse them. Everything here is declarative YAML, so you can scope a recipe without writing any Java.

## How preconditions decide what runs

Preconditions are evaluated **per source file**, not per repository. A precondition passes for a file only if the precondition recipe would have marked _that specific file_.

This is the single most important thing to understand, because it determines which search recipes are usable. For example, [`FindDependency`](../recipe-catalog/java/dependencies/finddependency.md) marks the `pom.xml` or `build.gradle` file that declares a dependency - and nothing else. Used as a precondition, it would allow your recipe to edit the build file and no Java sources at all.

Fortunately, there is also a family of search recipes designed to mark _every_ file in a module or repository when a condition holds. Knowing which family a recipe belongs to is what makes a precondition work as intended.

:::info
Preconditions run after parsing, changes made by preconditions never appear in your results, and multiple preconditions are combined with AND. For the full mechanics, see the [preconditions section of the declarative YAML format reference](../authoring-recipes/references/yaml-format-reference.md#preconditions).
:::

### Matching precondition scope to your recipe

Before you pick a precondition, ask what the recipe you are wrapping needs to edit. That question splits preconditions into two groups, and the rest of this guide is organized around them.

The first group makes a decision about a **repository or a module** and then marks every file in it. Use it for recipes that have to change a project as a unit - a Java version migration rewrites source code, the build file, and CI configuration together, and a precondition that marks only the Java files would leave you with sources that no longer compile.

The second group marks **individual files**. Use it for recipes that work file by file, such as static analysis cleanups, where marking a whole module would be far more than you meant.

| Scope | Recipes | What gets marked |
| ----- | -------- | ---------------- |
| Repository | `IsInRepository`, `RepositoryContainsFile`, `RepositoryHasDependency` | Every file in the repository, including build files and non-Java sources |
| Module | `ModuleHasDependency`, `ModuleHasPlugin`, `ModuleUsesType`, `ModuleContainsFile`, `HasBuildToolVersion` | Every file in each matching Gradle or Maven module |
| Single file, Java sources | `HasJavaVersion`, `HasMinimumJavaVersion`, `HasType`, `HasMethod`, `FindTypes`, `DoesNotUseType`, `IsLikelyTest`, `HasSourceSet` | Only the Java source files that match |
| Single file, any type | `FindSourceFiles`, `text.Find`, `IsLikelyNotTest`, `FindDependency`, `FindPlugins` | Only the individual files that match |

:::tip
When you are unsure what a recipe marks, run it on its own against a representative repository and look at the results. If it puts a search marker on every file you want changed, it is usable as a precondition for your recipe. If it only lights up the build file, it is not.
:::

## Repository and module preconditions

The recipes in this group mark **every file** in a repository or in a module: Java sources, `pom.xml` and `build.gradle` files, YAML, resources, everything. Use them when the recipe you are wrapping needs to change the whole project as a unit.

The examples below all wrap **Migrate to Java 25** (`org.openrewrite.java.migrate.UpgradeToJava25`), which is the classic case. That recipe rewrites Java source to adopt newer APIs and language features, replaces APIs that have been removed or deprecated for removal, raises the source and target level in the build file, and upgrades build plugins that cannot run on Java 25. Since it changes Java code, build files, and project metadata together, a precondition that marks only some of those files would leave the repository in a half-migrated state that no longer compiles.

### Gating on the kind of build

[`RepositoryContainsFile`](../recipe-catalog/search/repositorycontainsfile.md) checks whether a repository contains at least one file matching a glob, and if so marks every file in that repository. Its `filePattern` option accepts several globs separated by a semicolon, and any one of them matching is enough.

Combined with the Java 25 migration, this says: if the repository builds with Maven or Gradle, migrate all of it; otherwise leave it completely alone.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeJvmBuiltRepositoriesToJava25
displayName: Upgrade JVM-built repositories to Java 25
description: Runs the Java 25 migration only in repositories that build with Maven or Gradle.
preconditions:
  - org.openrewrite.search.RepositoryContainsFile:
      filePattern: "**/pom.xml;**/build.gradle;**/build.gradle.kts"
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava25
```

### Gating on a dependency being present

[`RepositoryHasDependency`](../recipe-catalog/java/dependencies/search/repositoryhasdependency.md) marks every file in the repository when any module resolves a dependency matching the group and artifact globs you give it. [`ModuleHasDependency`](../recipe-catalog/java/dependencies/search/modulehasdependency.md) does the same decision module by module, marking only the files in the modules that matched. Both accept an optional `scope` and `version`.

Together with the Java 25 migration, the recipe below says: only spend a pull request on this repository if it is still on Spring Boot 2.x, because those are the applications the platform team wants moved first.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeSpringBoot2RepositoriesToJava25
displayName: Upgrade Spring Boot 2.x repositories to Java 25
description: Runs the Java 25 migration only in repositories that still use Spring Boot 2.x.
preconditions:
  - org.openrewrite.java.dependencies.search.RepositoryHasDependency:
      groupIdPattern: org.springframework.boot
      artifactIdPattern: spring-boot-starter*
      version: 2.x
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava25
```

The `version` option accepts [dependency version selectors](../authoring-recipes/references/dependency-version-selectors.md), which is what makes framework version bands like `2.x` possible.

### Gating on a dependency being absent

This is the pattern that covers the pinned-runtime problem. `ModuleHasDependency` has an `invertMarking` option that flips the decision, so instead of marking the modules that have a dependency it marks every file in the modules that do _not_ have it.

In plain terms, the recipe below migrates a module to Java 25 unless that module compiles against the Databricks runtime, in which case it is skipped entirely and no pull request is opened.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeToJava25WhereRuntimeAllows
displayName: Upgrade to Java 25 where the runtime allows it
description: Runs the Java 25 migration, skipping modules that depend on a runtime pinned to an older JDK.
preconditions:
  - org.openrewrite.java.dependencies.search.ModuleHasDependency:
      groupIdPattern: com.databricks
      artifactIdPattern: "*"
      invertMarking: true
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava25
```

Note that because the check is per _module_, a multi-module repository where only one module depends on Databricks will still have its other modules upgraded. Also, because files that do not belong to any module - top-level configuration, CI definitions, documentation - are marked as not having the dependency, so they remain eligible.

:::warning
[`DoesNotIncludeDependency`](../recipe-catalog/java/dependencies/search/doesnotincludedependency.md) sounds like it does the same thing, but it marks only the `pom.xml` or `build.gradle` file it visits. Use it when the recipe you are wrapping edits the build file, and use `ModuleHasDependency` with `invertMarking: true` when the recipe edits source code.
:::

### Gating on a build plugin

[`ModuleHasPlugin`](../recipe-catalog/gradle/search/modulehasplugin.md) marks every file in a Gradle module that applies a given plugin, and a [Maven equivalent](../recipe-catalog/maven/search/modulehasplugin.md) does the same for Maven modules.

This is how you express "only migrate the things we actually deploy." The recipe below limits the Java 25 migration to modules that build a shadow JAR, on the assumption that those are the runnable applications and the rest are libraries consumed by teams who are not ready.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeShadowedApplicationsToJava25
displayName: Upgrade shadowed applications to Java 25
description: Runs the Java 25 migration only in Gradle modules that build a shadow JAR.
preconditions:
  - org.openrewrite.gradle.search.ModuleHasPlugin:
      pluginId: com.github.johnrengelman.shadow
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava25
```

Do not substitute [`FindPlugins`](../recipe-catalog/gradle/search/findplugins.md) here. It marks the `build.gradle` file that applies the plugin and nothing else, so the migration would only touch that one file.

### Gating on a type used anywhere in a module

[`ModuleUsesType`](../recipe-catalog/java/search/moduleusestype.md) looks for a type anywhere in a module and, if it finds one use, marks every file in that module - including the build file, which a file-by-file type search would miss.

Read the recipe below as: if any class in this module still uses JAXB, migrate the whole module, because the migration has to add the JAXB dependency to the build file that the JDK no longer bundles.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeJaxbModulesToJava25
displayName: Upgrade JAXB modules to Java 25
description: Runs the Java 25 migration only in modules that use JAXB, which needs an explicit dependency on modern JDKs.
preconditions:
  - org.openrewrite.java.search.ModuleUsesType:
      fullyQualifiedTypeName: javax.xml.bind.JAXBContext
      includeImplicit: true
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava25
```

### Gating on a file the module contains

[`ModuleContainsFile`](../recipe-catalog/java/search/modulecontainsfile.md) marks every file in modules that contain a file matching a pattern. It is the module-scoped counterpart to `RepositoryContainsFile`, and it lets you turn a filesystem convention into a policy.

The recipe below encodes the convention "a module with a `Dockerfile` is a deployable service," and migrates only those modules - libraries in the same repository are left on their current Java version.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeDeployableModulesToJava25
displayName: Upgrade deployable modules to Java 25
description: Runs the Java 25 migration only in modules that ship a container image.
preconditions:
  - org.openrewrite.java.search.ModuleContainsFile:
      filePattern: "**/Dockerfile"
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava25
```

### Gating on the build tool version

[`HasBuildToolVersion`](../recipe-catalog/java/search/hasbuildtoolversion.md) marks files built by a given build tool at a version in the range you specify. Because the build tool is recorded on every file in a module, this behaves as a module-wide gate.

Use it when the migration depends on build tooling that older versions cannot provide. The recipe below runs the Java 25 migration only where Maven is already at 3.9 or newer, so that the plugin upgrades it performs will actually resolve.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeModernMavenBuildsToJava25
displayName: Upgrade modern Maven builds to Java 25
description: Runs the Java 25 migration only where Maven 3.9 or newer is in use.
preconditions:
  - org.openrewrite.java.search.HasBuildToolVersion:
      type: Maven
      version: 3.9.x
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava25
```

### Gating on a named list of repositories

When the set of affected applications is already known, [`IsInRepository`](../recipe-catalog/core/isinrepository.md) is the bluntest and clearest instrument. It marks every file in repositories whose name matches one you list, and nothing at all anywhere else.

This is the shape to reach for when piloting a migration: the recipe below is safe to run against your whole estate, but only the two named repositories will produce changes.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradePilotRepositoriesToJava25
displayName: Upgrade pilot repositories to Java 25
description: Runs the Java 25 migration against the pilot group only.
preconditions:
  - org.openrewrite.IsInRepository:
      allowedRepositories:
        - payments-service
        - notifications-service
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava25
```

:::tip
An explicit allowlist inside a recipe has to be maintained by whoever owns the recipe. If your list is stable and shared across many recipes, [a user-configured organization](../../moderne-platform/how-to-guides/managing-user-configured-organizations.md) is usually cheaper to maintain, since it scopes _every_ recipe run rather than one.
:::

## Single-file preconditions

The recipes in this group mark **individual files** rather than whole modules. The recipe you wrap will only change the files that were marked, and everything else in the repository is left untouched.

Most of the examples below wrap **Common static analysis** (`org.openrewrite.staticanalysis.CommonStaticAnalysis`), which is a bundle of dozens of small, independent cleanups: replacing `new BigDecimal(double)`, chaining `StringBuilder.append()` calls, un-inverting boolean checks, removing catch blocks that only rethrow, and so on. Each one works on one Java file at a time and none of them touch build files, so a file-scoped precondition is exactly the right fit.

### Skipping test code

[`IsLikelyNotTest`](../recipe-catalog/java/search/islikelynottest.md) marks files that show no sign of being test code, based on their source set and on whether they use testing libraries such as JUnit, TestNG, Mockito, or AssertJ. Its counterpart [`IsLikelyTest`](../recipe-catalog/java/search/islikelytest.md) marks the ones that do.

The recipe below cleans up production code and leaves test fixtures alone, which keeps the diff reviewable and avoids churning assertions that were written to look a particular way.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CleanUpProductionCodeOnly
displayName: Clean up production code only
description: Applies common static analysis fixes to production code, leaving tests untouched.
preconditions:
  - org.openrewrite.java.search.IsLikelyNotTest
recipeList:
  - org.openrewrite.staticanalysis.CommonStaticAnalysis
```

`IsLikelyNotTest` is a negation, so it also marks `pom.xml`, `build.gradle`, and other non-Java sources, which makes it safe to combine with recipes that update build files. `IsLikelyTest` only marks Java sources.

[`HasSourceSet`](../recipe-catalog/java/search/hassourceset.md) gives you the same idea with an explicit source set name, such as `main` or `integrationTest`.

### Skipping generated and vendored paths

[`FindSourceFiles`](../recipe-catalog/core/findsourcefiles.md) marks files whose path matches a glob, and the glob can be negated. That makes it the tool for carving out directories you do not own.

The recipe below applies static analysis fixes everywhere except generated sources, so that the next build does not simply overwrite your changes.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CleanUpHandwrittenCode
displayName: Clean up handwritten code
description: Applies common static analysis fixes everywhere except generated sources.
preconditions:
  - org.openrewrite.FindSourceFiles:
      filePattern: "!(**/generated/**)"
recipeList:
  - org.openrewrite.staticanalysis.CommonStaticAnalysis
```

### Limiting to a Java language level

[`HasJavaVersion`](../recipe-catalog/java/search/hasjavaversion.md) marks source files compiled at a given language level. [`HasMinimumJavaVersion`](../recipe-catalog/java/search/hasminimumjavaversion.md) first works out the oldest language level anywhere in the repository and then marks files only if that oldest level meets your bar - so a repository whose test source set is still on Java 8 is treated as a Java 8 repository.

Use these when a recipe emits syntax that older compilers reject. `instanceof` pattern matching only compiles on Java 16 and newer, so the recipe below applies it only where every source set is already there.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AdoptInstanceOfPatternMatching
displayName: Adopt instanceof pattern matching
description: Rewrites instanceof-and-cast pairs only where the whole repository is on Java 16 or newer.
preconditions:
  - org.openrewrite.java.search.HasMinimumJavaVersion:
      version: "16"
recipeList:
  - org.openrewrite.staticanalysis.InstanceOfPatternMatch
```

:::warning
Both of these recipes mark files inside a Java source set, which does not include `pom.xml` or `build.gradle`. Wrapping a recipe that also updates the build file in one of them means the build file will not be updated. Keep them for recipes that only touch Java code, and use a repository or module-scoped precondition otherwise.
:::

### Limiting to files that use a type or API

To gate on what a file actually uses rather than what it imports, use the type-aware search recipes: [`HasType`](../recipe-catalog/java/search/hastype.md), [`FindTypes`](../recipe-catalog/java/search/findtypes.md), [`DoesNotUseType`](../recipe-catalog/java/search/doesnotusetype.md), [`HasMethod`](../recipe-catalog/java/search/hasmethod.md), and [`FindAnnotations`](../recipe-catalog/java/search/findannotations.md). Each marks the individual files that match.

The recipe below rewrites string concatenation in log statements into SLF4J's parameterized form, but only in files that actually log through SLF4J - so files using another logging framework are never visited.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ParameterizeSlf4jLogging
displayName: Parameterize SLF4J logging
description: Converts concatenated log messages to parameterized form in files that use SLF4J.
preconditions:
  - org.openrewrite.java.search.HasType:
      fullyQualifiedTypeName: org.slf4j.Logger
recipeList:
  - org.openrewrite.java.logging.slf4j.ParameterizedLogging
```

`DoesNotUseType` accepts `includeImplicit`, which also matches types that never appear by name in the source, and `HasType` and `FindTypes` accept `checkAssignability` to match subtypes.

### Limiting to text files that match

[`text.Find`](../recipe-catalog/text/find.md) searches the contents of any text file and accepts its own `filePattern` to limit where it looks. It marks only the files that matched, so use it to gate recipes that edit those same files.

Read the recipe below as: in Dockerfiles that pin a Temurin 17 base image, and nowhere else, move the tag to 25.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RetagTemurin17Images
displayName: Retag Temurin 17 base images
description: Updates the base image tag only in Dockerfiles that pin Temurin 17.
preconditions:
  - org.openrewrite.text.Find:
      find: "eclipse-temurin:17"
      filePattern: "**/Dockerfile"
recipeList:
  - org.openrewrite.text.FindAndReplace:
      find: "eclipse-temurin:17"
      replace: "eclipse-temurin:25"
```

Because `text.Find` marks only the files containing the text, it cannot gate a recipe that edits Java sources. When you need a repository-wide decision based on a non-Java signal, express it as file presence with `RepositoryContainsFile` instead, or use the structured search recipes for [YAML](../recipe-catalog/yaml/search/findkey.md), [properties](../recipe-catalog/properties/search/findproperties.md), and [Maven properties](../recipe-catalog/maven/search/findproperties.md).

## Combining preconditions

Preconditions compose in three ways.

**AND** is the default. Every entry in the `preconditions` list must mark a file for that file to be eligible:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeEligibleProductionCodeToJava25
displayName: Upgrade eligible production code to Java 25
description: Runs the Java 25 migration on production code in modules that are not pinned to an older runtime.
preconditions:
  - org.openrewrite.java.dependencies.search.ModuleHasDependency:
      groupIdPattern: com.databricks
      artifactIdPattern: "*"
      invertMarking: true
  - org.openrewrite.java.search.IsLikelyNotTest
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava25
```

**OR** requires one extra layer. Wrap the alternatives in a recipe of their own and use that recipe as the single precondition, since a file marked by any recipe in a `recipeList` is marked by the recipe as a whole:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeSupportedFrameworksToJava25
displayName: Upgrade supported frameworks to Java 25
description: Runs the Java 25 migration in repositories that use either Spring Boot or Quarkus.
preconditions:
  - com.yourorg.precondition.UsesSpringBootOrQuarkus
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava25
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.precondition.UsesSpringBootOrQuarkus
displayName: Uses Spring Boot or Quarkus
description: Marks every file in repositories that depend on Spring Boot or Quarkus.
recipeList:
  - org.openrewrite.java.dependencies.search.RepositoryHasDependency:
      groupIdPattern: org.springframework.boot
      artifactIdPattern: spring-boot-starter*
  - org.openrewrite.java.dependencies.search.RepositoryHasDependency:
      groupIdPattern: io.quarkus
      artifactIdPattern: quarkus-*
```

**NOT** only exists where a recipe offers it. There is no generic negation operator, so you will need `invertMarking: true` on `ModuleHasDependency`, a `DoesNot*` recipe, or a negated glob on `FindSourceFiles`.

## Running your wrapped recipe

To try a wrapped recipe with the Moderne CLI, install the YAML file into your local recipe marketplace and then run it by name:

```bash
mod config recipes yaml install ./java-25-policy.yml
mod run . --recipe=com.yourorg.UpgradeToJava25
```

To make the recipe available to everyone in the Moderne Platform, put the YAML file in the `META-INF/rewrite` directory of a recipe artifact and publish it. The [writing and installing recipes guide](../../moderne-platform/how-to-guides/writing-and-installing-recipes.md) walks through publishing and deploying that artifact.

If you would rather assemble the recipe interactively than write YAML, the Platform's recipe builder supports adding recipes as preconditions. See the guide on [using preconditions in the Moderne Platform](../../moderne-platform/how-to-guides/preconditions.md).

## Things to watch out for

**Preconditions fail silently.** A repository that does not meet a precondition simply produces no changes, which is indistinguishable from a recipe that found nothing to do. Before a large rollout, run the precondition's underlying search recipe on its own and export its [data table](../authoring-recipes/advanced-authoring/data-tables.md) results. That gives you an explicit list of which repositories were in scope and which were skipped, which is much easier than answering "why didn't my repository get a pull request?" one team at a time.

**Preconditions cannot stop a file from being parsed.** They are evaluated after parsing, so they are not a substitute for build exclusions when a file fails to parse. The [declarative YAML format reference](../authoring-recipes/references/yaml-format-reference.md#preconditions) covers this distinction in detail.

**Preconditions do not apply to generated files.** A recipe that creates new files during its generate phase will still create them, because preconditions can only evaluate files that already exist in the source set.

## Additional reading

* [Declarative YAML format reference](../authoring-recipes/references/yaml-format-reference.md#preconditions) - the full precondition mechanics, including how they interact with exclusions.
* [Migrate to a newer version of Java](./migrate-to-java.md) - what the Java upgrade recipes change and how to run them.
