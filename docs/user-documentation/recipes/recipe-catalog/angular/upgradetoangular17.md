---
sidebar_label: "Upgrade to Angular 17"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 17

**org.openrewrite.angular.UpgradeToAngular17**

_Migrates Angular 16.x applications to Angular 17. This includes updating Angular package versions, replacing legacy deep `zone.js` imports, flagging the removed `withNoDomReuse` and `setupTestingRouter` APIs, and upgrading TypeScript and `zone.js` dependencies._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular17"
  displayName="Upgrade to Angular 17"
  npmPackage="@openrewrite/recipes-angular"
/>
