---
sidebar_label: "Find RxJS 5-style imports requiring `rxjs-compat`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find RxJS 5-style imports requiring `rxjs-compat`

**org.openrewrite.angular.search.find-rxjs-compat-usage**

_Finds imports using RxJS 5-style deep import paths (e.g. `rxjs/Observable`, `rxjs/add/operator/map`) that require the `rxjs-compat` package. These should be migrated to RxJS 6+ import paths before removing `rxjs-compat`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular8)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-rxjs-compat-usage"
  displayName="Find RxJS 5-style imports requiring `rxjs-compat`"
  npmPackage="@openrewrite/recipes-angular"
/>
