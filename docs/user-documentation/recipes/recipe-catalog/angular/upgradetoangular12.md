---
sidebar_label: "Upgrade to Angular 12"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 12

**org.openrewrite.angular.UpgradeToAngular12**

_Migrates Angular 11.x applications to Angular 12. This includes adding `defaultConfiguration: "production"` to build targets in `angular.json`, replacing `node-sass` with `sass` (Dart Sass), flagging deprecated `async` test helper and View Engine APIs, and upgrading Angular, TypeScript, and related dependency versions._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular13)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular12"
  displayName="Upgrade to Angular 12"
  npmPackage="@openrewrite/recipes-angular"
/>
