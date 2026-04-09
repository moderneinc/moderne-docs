---
sidebar_label: "Find zone.js-dependent test helper usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find zone.js-dependent test helper usage

**org.openrewrite.angular.search.find-fake-async-usage**

_Finds `fakeAsync()`, `tick()`, and `waitForAsync()` calls from `@angular/core/testing`. These zone.js-dependent test helpers are incompatible with Vitest, the default test runner in Angular 21. Migrate to native async/await patterns instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 21](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular21)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-fake-async-usage"
  displayName="Find zone.js-dependent test helper usage"
  npmPackage="@openrewrite/recipes-angular"
/>
