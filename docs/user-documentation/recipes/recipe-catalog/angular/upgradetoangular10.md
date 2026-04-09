---
sidebar_label: "Upgrade to Angular 10"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 10

**org.openrewrite.angular.UpgradeToAngular10**

_Migrates Angular 9.x applications to Angular 10. This includes removing the deprecated `es5BrowserSupport` option from `angular.json`, renaming deprecated `validator`/`asyncValidator` to their plural forms, renaming `browserslist` to `.browserslistrc`, migrating to solution-style `tsconfig.json`, and upgrading Angular, TypeScript, and related dependency versions._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular11)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular10"
  displayName="Upgrade to Angular 10"
  npmPackage="@openrewrite/recipes-angular"
/>
