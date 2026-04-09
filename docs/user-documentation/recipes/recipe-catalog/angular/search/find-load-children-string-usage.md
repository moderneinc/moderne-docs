---
sidebar_label: "Find deprecated string-based `loadChildren` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated string-based `loadChildren` usage

**org.openrewrite.angular.search.find-load-children-string-usage**

_Finds usages of the deprecated string-based `loadChildren` syntax (e.g. `loadChildren: './path/to/module#ModuleName'`). String-based lazy loading was deprecated in Angular 8 and removed in Angular 11. Use dynamic imports instead: `loadChildren: () => import('./path/to/module').then(m => m.ModuleName)`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular9)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-load-children-string-usage"
  displayName="Find deprecated string-based `loadChildren` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
