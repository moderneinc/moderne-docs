---
sidebar_label: "Upgrade to Angular 16"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 16

**org.openrewrite.angular.UpgradeToAngular16**

_Migrates Angular 15.x applications to Angular 16. This includes removing `entryComponents` and `moduleId` from decorators, replacing `RouterLinkWithHref` with `RouterLink`, moving the `XhrFactory` import to `@angular/common`, and flagging removed APIs like `ReflectiveInjector`, `renderModuleFactory`, and `BrowserTransferStateModule`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular17)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular16"
  displayName="Upgrade to Angular 16"
  npmPackage="@openrewrite/recipes-angular"
/>
