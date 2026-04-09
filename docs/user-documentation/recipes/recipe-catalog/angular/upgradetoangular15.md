---
sidebar_label: "Upgrade to Angular 15"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 15

**org.openrewrite.angular.UpgradeToAngular15**

_Migrates Angular 14.x applications to Angular 15. This includes removing the `relativeLinkResolution` option from `RouterModule.forRoot()`, removing the `enableIvy` compiler option from `tsconfig.json`, flagging the deprecated `DATE_PIPE_DEFAULT_TIMEZONE` token and `providedIn: NgModule`/`'any'` usage, and upgrading Angular, TypeScript, and related dependency versions._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular16)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular15"
  displayName="Upgrade to Angular 15"
  npmPackage="@openrewrite/recipes-angular"
/>
