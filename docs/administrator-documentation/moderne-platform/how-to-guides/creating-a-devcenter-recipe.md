---
sidebar_label: Creating a DevCenter recipe
description: How to create a DevCenter recipe.
---

# Creating a DevCenter recipe

Moderne DevCenters can be defined and configured via a standard OpenRewrite recipe. This approach delivers significantly better performance and greater flexibility in the generation process compared to [defining a DevCenter via a JSON file](./dev-center.md).

In this doc, we'll walk you through how to create a DevCenter recipe and deploy it to your tenant. By the end, you should be ready to [configure a recipe-based DevCenter in your tenant](./recipe-based-devcenter.md).

## Prerequisites

This guide assumes that you have:

* Already configured an [organizational structure](./agent-configuration/configure-organizations-hierarchy.md)
* A basic understanding of what [declarative YAML recipes](https://docs.openrewrite.org/reference/yaml-format-reference) look like and how to work with them.

## Creating and deploying a DevCenter recipe

### Step 1: Create a new recipe repository

The first thing you need to do is to create a new recipe repository using either the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) or your own internal recipe starter template. This repository is where you'll create all of the DevCenter recipes you'd like to use.

### Step 2: Add the rewrite-devcenter dependency

Once you've created your recipe repository, you will need to update your `build.gradle` or `pom.xml` file to include a dependency on [io.moderne.recipe:rewrite-devcenter](https://central.sonatype.com/artifact/io.moderne.recipe/rewrite-devcenter). This will give you access to key components you need to create and run DevCenter recipes.

### Step 3: Create a declarative DevCenter recipe

We've provided a [devcenter-starter recipe](https://github.com/moderneinc/rewrite-devcenter/blob/main/src/main/resources/META-INF/rewrite/devcenter-starter.yml) that you can copy to your own repository to get started. You can also create your own if you desire. Check out the [understanding DevCenter recipes section](#understanding-devcenter-recipes) below for more information on how to create your own.

The [rewrite-devcenter repository](https://github.com/moderneinc/rewrite-devcenter) contains common card recipe that you may want to use or modify such as the [LibraryUpgrade card recipe](https://github.com/moderneinc/rewrite-devcenter/blob/main/src/main/java/io/moderne/devcenter/LibraryUpgrade.java).

Any recipe that meets the following requirements can be displayed as a DevCenter card:
- Requires no input options
- Outputs the `UpgradesAndMigrations` and/or `SecurityIssues` data tables (either or both)
- Includes the correct columns for those tables (see [DevCenterStarter data table definitions](https://docs.openrewrite.org/recipes/devcenter/devcenterstarter#data-tables) for details)

### Step 4: Deploy the recipe artifact

Once you're satisfied with your recipe(s), you will need to [deploy them to your tenant](./importing-external-recipes.md)

## Understanding DevCenter recipes

In order to help you get a better understanding of how DevCenter recipes work, let's walk through the [DevCenter starter recipe](https://github.com/moderneinc/rewrite-devcenter/blob/main/src/main/resources/META-INF/rewrite/devcenter-starter.yml). By the end, you should have a good idea of what makes up a DevCenter recipe and how you can create your own.

### Metadata

The top of this recipe begins with standard metadata (e.g., `name` and `description`) that you would find in any declarative YAML recipe:

```yaml
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.devcenter.DevCenterStarter
displayName: DevCenter
description: >-
  This is a default DevCenter configuration that can be used as a starting point for your own DevCenter configuration.
  It includes a combination of upgrades, migrations, and security fixes.
  You can customize this configuration to suit your needs.
  
  For more information on how to customize your DevCenter configuration, see the [DevCenter documentation](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/dev-center/).
```

### Recipe list

After that, it lists out the recipes that will be run to build the DevCenter dashboard. Each of these recipes will turn into a card in your DevCenter:

```yaml
recipeList:
  - io.moderne.devcenter.LibraryUpgrade:
      cardName: Move to Spring Boot 3.5.0
      groupIdPattern: org.springframework.boot
      artifactIdPattern: '*'
      version: 3.5.0
      upgradeRecipe: io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5
  - io.moderne.devcenter.JavaVersionUpgrade:
      majorVersion: 21
      upgradeRecipe: org.openrewrite.java.migrate.UpgradeToJava21
  - io.moderne.devcenter.JUnitJupiterUpgrade:
      upgradeRecipe: org.openrewrite.java.testing.junit5.JUnit4to5Migration
  - io.moderne.devcenter.SecurityStarter
```
DevCenter recipes have two notable properties worth calling out:

* `cardName` is a property that allows you to customize what the name of the card should be. Not all recipes have a `cardName` property. For instance, the [LibaryUpgrade recipe](https://github.com/moderneinc/rewrite-devcenter/blob/main/src/main/java/io/moderne/devcenter/LibraryUpgrade.java#L35-L38) has a `cardName` property – whereas the [JavaVersionUpgrade recipe](https://github.com/moderneinc/rewrite-devcenter/blob/main/src/main/java/io/moderne/devcenter/JavaVersionUpgrade.java) does not.
* `upgradeRecipe` is a property that defines the recipe that should be run to upgrade your repositories. It is the recipe that will get executed when you press the `Upgrade` button on a card.

<figure>
  ![](./assets/example-card.png)
  <figcaption>_An example of a DevCenter card._</figcaption>
</figure>

### Security card

It's also possible to create recipes in your `devcenter.yml` file. For instance, at the bottom of our example, you will find a recipe that is used to create a security card in the DevCenter:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.devcenter.SecurityStarter
displayName: OWASP top ten
description: >-
  This recipe is a starter card to reveal common OWASP Top 10 issues in your source code.
  You can customize this configuration to suit your needs.
  
  For more information on how to customize your DevCenter configuration, see the [DevCenter documentation](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/dev-center/).
recipeList:
  - org.openrewrite.java.security.OwaspA01
  - org.openrewrite.java.security.OwaspA02
  - org.openrewrite.java.security.OwaspA03
  - org.openrewrite.java.security.OwaspA08
  - org.openrewrite.java.security.RegularExpressionDenialOfService
  - org.openrewrite.java.security.ZipSlip
  - org.openrewrite.java.security.SecureTempFileCreation
  # Changes made by recipes above this one in the recipe list are reported as occurrences
  # in the Security DevCenter card.
  - io.moderne.devcenter.ReportAsSecurityIssues:
      fixRecipe: org.openrewrite.java.security.OwaspTopTen
```

This security recipe differs slightly from a traditional YAML recipe. In the recipe list, there is a specical recipe called `io.moderne.devcenter.ReportAsSecurityIssues`. By adding that recipe to the list, it will detect the number of issues found in the above recipes and generate a card that display them all.

This recipe takes in a `fixRecipe` property that defines the recipe that can be run to fix the issues reported by the above security recipes.

<figure>
  ![](./assets/example-security.png)
  <figcaption>_An example of a security section in a DevCenter._</figcaption>
</figure>

## More DevCenter recipe examples

To help you get a better idea of how you can customize this to meet your own needs, let's walk through a few more examples.

### Quarkus example

In the following example, you will see that we:

* Adjusted the `LibaryUpgrade` recipe to target `io.quarkus` dependencies instead of `org.springframework.boot`.
* Created a new `UpgradeQuarkus` recipe (as a generic one doesn't exist) to upgrade all Quarkus dependencies to the latest version.

```yaml
# An example DevCenter configuration for a Quarkus application.
# Includes a named custom upgrade recipe.
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.devcenter.DevCenterQuarkus
displayName: DevCenter
description: >-
  DevCenter for organizations that use Quarkus.
  Also includes Java and JUnit upgrades and security findings.
recipeList:
  - io.moderne.devcenter.LibraryUpgrade:
      cardName: Move to Quarkus 3.23.0
      groupIdPattern: io.quarkus
      artifactIdPattern: '*'
      version: 3.23.0
      upgradeRecipe: io.moderne.devcenter.UpgradeQuarkus
  - io.moderne.devcenter.JavaVersionUpgrade:
      majorVersion: 21
      upgradeRecipe: org.openrewrite.java.migrate.UpgradeToJava21
  - io.moderne.devcenter.JUnitJupiterUpgrade:
      upgradeRecipe: org.openrewrite.java.testing.junit5.JUnit4to5Migration
  - io.moderne.devcenter.SecurityStarter
---
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.devcenter.UpgradeQuarkus
displayName: DevCenter
description: >-
  This recipe upgrades all Quarkus dependencies to the latest 3.23 version.
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: io.quarkus
      artifactId: '*'
      newVersion: 3.23.x
```

:::tip
Additional recipes do not have to be in the same file or even the same module.
:::

### Custom parent example

In the following example, you will see that we:

* Use a `ParentPomUpgrade` recipe to target the Apache Maven parent POM instead of using a `LibraryUpgrade` recipe.
* Created a custom recipe that specifies the `groupId` and `artifactId` of the parent POM we want to upgrade.

```yaml
# An example DevCenter tracking Parent POM versions, illustrated by using the Apache Maven parent POM
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.devcenter.DevCenterApacheParent
displayName: DevCenter
description: >-
  DevCenter for organizations that use the apache maven parent.
  Also includes Java and JUnit upgrades and security findings.
recipeList:
  - io.moderne.devcenter.ParentPomUpgrade:
      cardName: Move to the latest Apache Maven parent POM
      groupIdPattern: org.apache.maven
      artifactIdPattern: maven-parent
      version: x
      upgradeRecipe: io.moderne.devcenter.UpgradeApacheMavenParent
  - io.moderne.devcenter.JavaVersionUpgrade:
      majorVersion: 21
      upgradeRecipe: org.openrewrite.java.migrate.UpgradeToJava21
  - io.moderne.devcenter.JUnitJupiterUpgrade:
      upgradeRecipe: org.openrewrite.java.testing.junit5.JUnit4to5Migration
  - io.moderne.devcenter.SecurityStarter
---
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.devcenter.UpgradeApacheMavenParent
displayName: Upgrade Apache Maven Parent
description: >-
  Upgrades the Apache Maven parent POM to the latest version.
recipeList:
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.apache.maven
      artifactId: maven-parent
      newVersion: x
```
