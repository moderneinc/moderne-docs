---
sidebar_label: "Find `NgStyle` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `NgStyle` usage

**org.openrewrite.angular.search.find-ng-style-usage**

_Finds imports of `NgStyle` from `@angular/common`. The `ngStyle` directive is soft deprecated in Angular 21 in favor of native `[style.*]` bindings._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 21](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular21)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-ng-style-usage"
  displayName="Find `NgStyle` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
