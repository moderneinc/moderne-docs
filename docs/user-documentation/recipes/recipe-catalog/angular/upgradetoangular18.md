---
sidebar_label: "Upgrade to Angular 18"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 18

**org.openrewrite.angular.UpgradeToAngular18**

_Migrates Angular 17.x applications to Angular 18. This includes replacing the deprecated `async` test helper with `waitForAsync`, migrating `HttpClientModule` to `provideHttpClient()`, moving Transfer State APIs to `@angular/core`, and flagging removed platform APIs._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular18"
  displayName="Upgrade to Angular 18"
  npmPackage="@openrewrite/recipes-angular"
/>
