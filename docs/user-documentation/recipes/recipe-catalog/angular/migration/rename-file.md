---
sidebar_label: "Rename file"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename file

**org.openrewrite.angular.migration.rename-file**

_Renames files matching a glob pattern to a new file name, preserving the directory._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | fileMatcher | Glob pattern to match files (e.g., `**/browserslist`). Supports `**` prefix to match in any directory. | `**/browserslist` |
| `null` | fileName | The new file name (just the basename, e.g., `.browserslistrc`). | `.browserslistrc` |


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular10)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.rename-file"
  displayName="Rename file"
  npmPackage="@openrewrite/recipes-angular"
/>
