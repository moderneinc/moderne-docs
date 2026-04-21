---
sidebar_label: "Update `tsconfig.json` target to `es2017`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Update `tsconfig.json` target to `es2017`

**org.openrewrite.angular.migration.update-tsconfig-target**

_Updates the `compilerOptions.target` in `tsconfig.json` from `es5`, `es2015`, or `es2016` to `es2017`. Angular 13 dropped IE11 support and requires at least ES2017._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular13)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.update-tsconfig-target"
  displayName="Update `tsconfig.json` target to `es2017`"
  npmPackage="@openrewrite/recipes-angular"
/>
