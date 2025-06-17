---
sidebar_label: Getting started with DevCenter recipes
description: How to create a custom DevCenters recipe.
---

# How to create your custom DevCenter recipe

In this guide, we'll walk you through how to create a custom DevCenter recipe that can be used to build a DevCenter dashboard for your repositories.

## Prerequisites

* This guide assumes that you already have a basic understanding of what a YAML recipe looks like.
* To be able to use the recipe in the CLI or in your tenant, you'll have to make it part of a recipe module.
  * If you haven't set this up yet, please refer to the [Recipe authoring workshop](https://docs.moderne.io/user-documentation/workshops/recipe-authoring/#exercise-2-create-and-test-your-own-recipe-module).
  * Make sure your recipe module depends on `rewrite-devcenter`

## Understanding how a DevCenter recipe works

To understand how a DevCenter recipe works, let's first look at the [DevCenter starter](https://github.com/moderneinc/rewrite-devcenter/blob/main/src/main/resources/META-INF/rewrite/devcenter-starter.yml), which happens to be Spring Boot oriented.
It starts with some metadata, which should be familiar from other recipes
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

Then it lists the recipes that will be run to build the DevCenter dashboard.
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
This is where a few new concepts arise.
* The `LibraryUpgrade` recipe has a `cardName` property, which is used to display the card in the DevCenter dashboard.
* The `LibraryUpgrade` recipe also has a `upgradeRecipe` property, which is the recipe that can be run to perform the upgrade.
* The `SecurityStarter` recipe calls a `ReportAsSecurityIssues` recipe, which is a special recipe that reports occurrences of issues found by the recipes above it in the recipe list as security issues in the DevCenter dashboard.
* The `ReportAsSecurityIssues` recipe has a `fixRecipe` property, which is the recipe that can be run to fix the issues reported in the DevCenter dashboard.

## Examples of customizations

Taking the DevCenter starter as a starting point, you can customize it to suit your needs. Here are a few examples of how you can do that:

### Quarkus example
```yaml
# An example DevCenter configuration for a Quarkus application, with a named custom upgrade recipe for Quarkus
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
* The `LibraryUpgrade` recipe was adjusted to target `io.quarkus` dependencies instead of `org.springframework.boot`.
* As a generic `UpgradeQuarkus` recipe doesn't exist yet, a new `UpgradeQuarkus` recipe was created to upgrade all Quarkus dependencies to the latest version.
  * Note that this recipe does not have to be in the same file or even module.

### Custom parent example
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
* Instead of the `LibraryUpgrade` recipe seen previously, this example uses a `ParentPomUpgrade` recipe to target the Apache Maven parent POM.
* A generic recipe to upgrade parent versions does exist, but to fill its parameters in a DevCenter recipe, you need to create a custom recipe that specifies the groupId and artifactId of the parent POM you want to upgrade.
