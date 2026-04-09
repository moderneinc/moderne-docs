---
sidebar_label: "Remove `enableIvy` compiler option"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `enableIvy` compiler option

**org.openrewrite.angular.migration.remove-enable-ivy**

_Removes the `enableIvy` option from `angularCompilerOptions` in `tsconfig.json`. Ivy is the only rendering engine since Angular 12, and the option was removed in Angular 15._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 15](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular15)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-enable-ivy"
  displayName="Remove `enableIvy` compiler option"
  npmPackage="@openrewrite/recipes-angular"
/>
