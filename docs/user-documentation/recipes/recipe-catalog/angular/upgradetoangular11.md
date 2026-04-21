---
sidebar_label: "Upgrade to Angular 11"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 11

**org.openrewrite.angular.UpgradeToAngular11**

_Migrates Angular 10.x applications to Angular 11. This includes replacing `ViewEncapsulation.Native` with `ViewEncapsulation.ShadowDom`, removing the deprecated `extractCss` build option from `angular.json`, flagging deprecated string-based `loadChildren` and `preserveQueryParams` usage, and upgrading Angular, TypeScript, and related dependency versions._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular12)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular11"
  displayName="Upgrade to Angular 11"
  npmPackage="@openrewrite/recipes-angular"
/>
