---
sidebar_label: "Upgrade to Angular 14"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 14

**org.openrewrite.angular.UpgradeToAngular14**

_Migrates Angular 13.x applications to Angular 14. This includes replacing form classes with their `Untyped*` equivalents for backward compatibility with typed forms, updating deprecated `initialNavigation` router option values, removing `aotSummaries` from TestBed calls, and flagging `pathMatch` properties that may need type narrowing._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 15](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular15)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular14"
  displayName="Upgrade to Angular 14"
  npmPackage="@openrewrite/recipes-angular"
/>
