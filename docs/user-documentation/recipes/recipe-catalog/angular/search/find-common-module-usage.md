---
sidebar_label: "Find `CommonModule` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `CommonModule` usage

**org.openrewrite.angular.search.find-common-module-usage**

_Finds imports of `CommonModule` from `@angular/common`. Since Angular 19, standalone components are the default and `CommonModule` is no longer needed in component `imports` arrays. Built-in directives and pipes are available automatically._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 21](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular21)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-common-module-usage"
  displayName="Find `CommonModule` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
