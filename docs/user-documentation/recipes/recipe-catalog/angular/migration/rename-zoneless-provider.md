---
sidebar_label: "Rename `provideExperimentalZonelessChangeDetection` to `provideZonelessChangeDetection`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename `provideExperimentalZonelessChangeDetection` to `provideZonelessChangeDetection`

**org.openrewrite.angular.migration.rename-zoneless-provider**

_Renames `provideExperimentalZonelessChangeDetection` to `provideZonelessChangeDetection` in imports and usages. The experimental API was promoted to developer preview in Angular 20._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 20](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular20)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.rename-zoneless-provider"
  displayName="Rename `provideExperimentalZonelessChangeDetection` to `provideZonelessChangeDetection`"
  npmPackage="@openrewrite/recipes-angular"
/>
