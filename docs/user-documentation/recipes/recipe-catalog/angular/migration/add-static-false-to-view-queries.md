---
sidebar_label: "Add `static: false` to view queries"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add `static: false` to view queries

**org.openrewrite.angular.migration.add-static-false-to-view-queries**

_Adds `static: false` to `@ViewChild` and `@ContentChild` decorators that don't have the `static` property. Angular 8 requires an explicit `static` flag for view query decorators. Using `static: false` preserves the Angular 7 default behavior (queries resolved after change detection)._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular8)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.add-static-false-to-view-queries"
  displayName="Add `static: false` to view queries"
  npmPackage="@openrewrite/recipes-angular"
/>
