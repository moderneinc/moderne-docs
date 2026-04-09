---
sidebar_label: "Find classes with DI dependencies but missing `@Injectable()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find classes with DI dependencies but missing `@Injectable()`

**org.openrewrite.angular.search.find-missing-injectable**

_Finds classes that have constructor parameters (suggesting dependency injection) but lack an `@Injectable()` or other Angular class-level decorator. Angular 9 with Ivy requires an explicit `@Injectable()` decorator for all services that use dependency injection._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular9)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-missing-injectable"
  displayName="Find classes with DI dependencies but missing `@Injectable()`"
  npmPackage="@openrewrite/recipes-angular"
/>
