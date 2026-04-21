---
sidebar_label: "Find deprecated `providedIn` values"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `providedIn` values

**org.openrewrite.angular.search.find-provided-in-deprecated-usage**

_Finds usages of `providedIn: 'any'` and `providedIn: NgModule` in `@Injectable` and `InjectionToken` declarations. These were deprecated in Angular 15. Use `providedIn: 'root'` or add the service to `NgModule.providers` instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 15](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular15)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-provided-in-deprecated-usage"
  displayName="Find deprecated `providedIn` values"
  npmPackage="@openrewrite/recipes-angular"
/>
