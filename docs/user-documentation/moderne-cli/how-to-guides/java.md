---
sidebar_label: Java configuration
description: How to configure Java, Gradle, and Maven in the Moderne CLI.
keywords: [java, jdk, gradle, maven, java configuration, java refactoring]
---

# How to configure Java builds in the Moderne CLI

Java is the default ecosystem supported by the Moderne CLI, so Maven and Gradle builds work out of the box without any additional configuration. However, you may want to customize which JDK is used, register build tool installations from non-standard locations, pin specific versions, or pass extra build arguments.

In this guide, we'll walk you through how to configure the Moderne CLI for Java builds — including JDK selection, Gradle, and Maven tuning.

## Prerequisites

This guide assumes that:

* You have [installed and configured the Moderne CLI](../getting-started/cli-intro.md) (version `4.1.9` or higher)
* You are familiar with running Moderne CLI commands (if not, work through our [CLI workshop](../getting-started/moderne-cli-workshop.md))
* You have at least one JDK installed on your machine

## Step 1: Confirm Java is enabled in your `moderne.yml` file

Java is enabled by default via the `maven` and `gradle` [build steps](./build-steps.md). Your `moderne.yml` file, located at `~/.moderne/cli/moderne.yml`, should already include them.

If you have customized your build steps previously, confirm that `maven` and `gradle` are present. Otherwise, no changes are needed:

```yml title="moderne.yml"
# Other keys and values...
build:
  steps:
    - type: maven
    - type: gradle
    - type: resource
      inclusion: |-
        **/*
```

## Step 2: (Optionally) Configure your JDK

The CLI automatically discovers JDK installations from these locations (with the first one representing the one given the highest priority):

* `$PATH`
* `$JAVA_HOME`
* Predictable OS installation paths
* SDKMAN directories (`~/.sdkman/candidates/java/`)
* Homebrew directories
* Gradle toolchains
* User-configured paths (via `mod config java installation edit`)

### Discovering installations

You can see all detected JDKs and their priority by running:

```bash
mod config java installation list
```

<details>

<summary>Here is what the output of that command might look like:</summary>

```bash
> Listing available JDKs

> Set globally for all repositories
17.0.7-tem       $PATH         java
17.0.7-tem       $JAVA_HOME    /Users/someuser/.sdkman/candidates/java/17.0.7-tem/bin/java
21.0.1-oracle    OS directory  /Library/Java/JavaVirtualMachines/jdk-21.jdk/Contents/Home/bin/java
17.0.7-tem       SDKMAN        /Users/someuser/.sdkman/candidates/java/17.0.7-tem/bin/java
17.0.8-graalce   SDKMAN        /Users/someuser/.sdkman/candidates/java/17.0.8-graalce/bin/java

* What to do next
    > Run mod config java installation edit to change this configuration
    > Add --local <path-to-local-repos> to see repository-specific values
    > Run mod config java installation delete to delete global configuration
```

</details>

### Adding installation locations

If you have JDKs installed in locations the CLI does not automatically discover, you can register them:

```bash
mod config java installation edit /path/to/jdk
```

Each path should point to a JDK home directory. Projects will only use a registered location if the appropriate Java version exists there. For example, if a project targets Java 17 but the registered path only contains Java 11, the CLI will look elsewhere for a matching JDK.

To remove manually configured installation paths:

```bash
mod config java installation delete
```

This only removes user-configured paths. Automatically discovered installations remain available.

### Selecting a version

To force the CLI to use a specific Java version when building:

```bash
mod config java version edit 17
```

You can use a major version (`17`), a vendor-qualified name (`17-tem`), or an exact version (`17.0.6-tem`) depending on how tight you need the match to be.

To apply a version only to a specific group of repositories, use the `--local` flag:

```bash
mod config java version edit 17 --local ./working-set
```

To revert to auto-detection:

```bash
mod config java version delete
```

To see the currently configured version:

```bash
mod config java version show
```

### Specifying a Java version in the CSV

When cloning using `mod git sync csv`, you can add a `java` column to the CSV to specify the version per repository.

In the example below, `rewrite-maven-plugin` is configured to use Java 8, while `rewrite-spring` will use auto-detection:

```csv
"cloneUrl","branch","origin","path","java"
"https://github.com/openrewrite/rewrite-maven-plugin","main","github.com","openrewrite/rewrite-maven-plugin",8
"https://github.com/openrewrite/rewrite-spring","main","github.com","openrewrite/rewrite-spring"
```

The CLI uses `mod config java version edit <VERSION> --local <REPO>` for each row that has a value for that column, so you can verify the configuration by running:

```bash
mod config java version show --local <REPO>
```

### Passing JVM options

You can configure JVM options (for example, heap size) that will be applied when the CLI runs Java-based build tools and recipes:

```bash
mod config java options edit -Xmx8G
```

To see the currently configured options:

```bash
mod config java options show
```

To revert to defaults:

```bash
mod config java options delete
```

## Step 3: (Optionally) Configure Gradle

By default, the CLI uses the Gradle wrapper (`gradlew`) included in each repository. If a repository doesn't include a wrapper, the CLI falls back to Gradle installations it discovers on your machine.

### Discovering installations

The CLI automatically discovers Gradle installations from these locations (with the first one representing the one given the highest priority):

* User-configured paths (via `mod config build gradle installation edit`)
* `$PATH`
* `$GRADLE_HOME`
* SDKMAN (`~/.sdkman/candidates/gradle/`)
* Homebrew (`/opt/homebrew/opt/gradle*` or `/usr/local/opt/gradle*`)

You can see all detected installations and their priority by running:

```bash
mod config build gradle installation list
```

### Adding installation locations

If you have Gradle installations in locations the CLI does not automatically discover, you can register them:

```bash
mod config build gradle installation edit /path/to/gradle-home
```

Each path should point to a Gradle home directory (i.e., a directory containing `bin/gradle`). You can register multiple installations at once:

```bash
mod config build gradle installation edit /opt/gradle-4.5 /opt/gradle-8.1.1
```

To remove manually configured installation paths:

```bash
mod config build gradle installation delete
```

### Selecting a version

When a repository does not include a Gradle wrapper, you can tell the CLI which Gradle version to use. The version must exactly match one of the installations known to the CLI.

To set a Gradle version globally:

```bash
mod config build gradle version edit 8.1.1
```

To apply a version only to a specific group of repositories:

```bash
mod config build gradle version edit 4.5 --local ./working-set
```

To revert to auto-detection:

```bash
mod config build gradle version delete
```

To see the currently configured version:

```bash
mod config build gradle version show
```

### Specifying a Gradle version in the CSV

When cloning using `mod git sync csv`, you can add a `gradleVersion` column to the CSV to specify the Gradle version per repository:

```csv
"cloneUrl","branch","origin","path","gradleVersion"
"https://github.com/example/legacy-app","main","github.com","example/legacy-app","4.5"
"https://github.com/example/modern-app","main","github.com","example/modern-app"
```

:::tip
If a repository has a Gradle wrapper, the wrapper always takes precedence regardless of the configured Gradle version. The `gradleVersion` setting only applies to repositories without a wrapper.
:::

### Passing Gradle arguments

You can pass additional arguments to Gradle when building LSTs. For details on how `gradleArgs` works with global, local, and CSV-based configuration, please check out our [layered configuration guide](./layer-config-cli.md).

## Step 4: (Optionally) Configure Maven

The CLI uses the Maven installation found on your `$PATH`. There is no version selection or installation discovery for Maven.

### Passing Maven arguments

You can pass additional arguments to Maven when building LSTs. For details on how `mavenArgs` works with global, local, and CSV-based configuration, please check out our [layered configuration guide](./layer-config-cli.md).

## Step 5: (Optionally) Clone a custom list of repositories

If you don't have the repositories you want to work with cloned locally already, you can clone a group of them by defining a `repos.csv` file that lists them out such as in the following example:

```csv title="repos.csv"
cloneUrl,branch,origin,path
git@github.com:spring-projects/spring-petclinic.git,main,github.com,spring-projects/spring-petclinic
git@github.com:openrewrite/rewrite.git,main,github.com,openrewrite/rewrite
git@github.com:apache/commons-lang.git,master,github.com,apache/commons-lang
```

:::tip
Check out our documentation on [creating a repos.csv file](../references/repos-csv.md) for more detailed information about what's expected in this file.
:::

After creating the CSV, clone the repositories by running the following command:

```bash
mod git sync csv . repos.csv --with-sources
```

## Step 6: Build your Java repositories

The next thing you'll need to do is build LSTs for each of your repositories. To build the LSTs, run:

```bash
mod build /path/to/your/repos
```

Presuming everything has been set up correctly, you should see output similar to:

```bash
▶ spring-projects/spring-petclinic@main
    Build output will be written to build.log
    # highlight-start
    > Step 1 - build with Maven
        Selected JDK 17.0.7-tem
        Running mvn install
    ✓ Built spring-petclinic-20260424120000000-ast.jar
    # highlight-end
    Cleaned 1 older builds
```

## Step 7: Install recipes

In order to run recipes, you'll need to make sure the recipes are installed on your local machine.

You can install a specific Java recipe JAR by running a command like:

```bash
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:LATEST
```

:::tip
You can find the specific installation command for any recipe on its page in the [recipe catalog](../../recipes/recipe-catalog).
:::

## Step 8: Run recipes

With the LSTs built and recipes installed, you can now run recipes against your Java repositories. You can either specify the full recipe path for running such as in:

```bash
mod run . --recipe=org.openrewrite.java.migrate.UpgradeToJava21
```

Or, you can search for a specific recipe and set it as the active recipe:

```bash
mod config recipes search UpgradeToJava21
```

Then you can run the active recipe by:

```bash
mod run . --active-recipe
```

## Step 9: View data tables

Many recipes will also produce useful data tables that you can access via the `mod study` command such as in:

```bash
mod study . --last-recipe-run --data-table SourcesFileResults
```
