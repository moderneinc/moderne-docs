---
sidebar_label: "Find `BrowserTransferStateModule` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `BrowserTransferStateModule` usage

**org.openrewrite.angular.search.find-browser-transfer-state-module-usage**

_Finds usages of `BrowserTransferStateModule` from `@angular/platform-browser` which was removed in Angular 16. `TransferState` can be used directly without this module._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular16)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-browser-transfer-state-module-usage"
  displayName="Find `BrowserTransferStateModule` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
