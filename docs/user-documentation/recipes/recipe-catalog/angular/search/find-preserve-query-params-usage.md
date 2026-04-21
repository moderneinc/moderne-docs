---
sidebar_label: "Find deprecated `preserveQueryParams` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `preserveQueryParams` usage

**org.openrewrite.angular.search.find-preserve-query-params-usage**

_Finds usages of the deprecated `preserveQueryParams` navigation option. `preserveQueryParams` was deprecated in Angular 4 and removed in Angular 11. Use `queryParamsHandling: 'preserve'` instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular11)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-preserve-query-params-usage"
  displayName="Find deprecated `preserveQueryParams` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
