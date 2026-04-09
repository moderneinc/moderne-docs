---
sidebar_label: "Find `NgClass` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `NgClass` usage

**org.openrewrite.angular.search.find-ng-class-usage**

_Finds imports of `NgClass` from `@angular/common`. The `ngClass` directive is soft deprecated in Angular 21 in favor of native `[class.*]` bindings._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 21](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular21)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-ng-class-usage"
  displayName="Find `NgClass` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
