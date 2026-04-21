---
sidebar_label: "Replace `node-sass` with `sass`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `node-sass` with `sass`

**org.openrewrite.angular.migration.replace-node-sass-with-sass**

_Replaces the deprecated `node-sass` package with `sass` (Dart Sass). Angular 12 requires Dart Sass; `node-sass` is no longer supported._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular12)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.replace-node-sass-with-sass"
  displayName="Replace `node-sass` with `sass`"
  npmPackage="@openrewrite/recipes-angular"
/>
