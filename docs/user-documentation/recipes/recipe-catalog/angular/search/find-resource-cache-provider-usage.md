---
sidebar_label: "Find `RESOURCE_CACHE_PROVIDER` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `RESOURCE_CACHE_PROVIDER` usage

**org.openrewrite.angular.search.find-resource-cache-provider-usage**

_Finds usages of the removed `RESOURCE_CACHE_PROVIDER` from `@angular/platform-browser-dynamic`. This unused API was removed in Angular 18._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-resource-cache-provider-usage"
  displayName="Find `RESOURCE_CACHE_PROVIDER` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
