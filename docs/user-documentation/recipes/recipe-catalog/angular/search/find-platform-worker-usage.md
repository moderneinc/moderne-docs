---
sidebar_label: "Find `isPlatformWorkerUi` and `isPlatformWorkerApp` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `isPlatformWorkerUi` and `isPlatformWorkerApp` usage

**org.openrewrite.angular.search.find-platform-worker-usage**

_Finds usages of the removed `isPlatformWorkerUi` and `isPlatformWorkerApp` APIs from `@angular/common`. These were removed in Angular 18 with no replacement, as they served no purpose since the removal of the WebWorker platform._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-platform-worker-usage"
  displayName="Find `isPlatformWorkerUi` and `isPlatformWorkerApp` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
