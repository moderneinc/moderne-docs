---
sidebar_label: "Upgrade to Angular 19"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 19

**org.openrewrite.angular.UpgradeToAngular19**

_Migrates Angular 18.x applications to Angular 19. This includes updating Angular package versions, adjusting the standalone default, renaming `ExperimentalPendingTasks` to `PendingTasks`, moving the `ApplicationConfig` import to `@angular/core`, and updating `zone.js`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 20](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular20)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular19"
  displayName="Upgrade to Angular 19"
  npmPackage="@openrewrite/recipes-angular"
/>
