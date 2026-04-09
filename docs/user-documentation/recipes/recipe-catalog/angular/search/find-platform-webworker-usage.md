---
sidebar_label: "Find removed `@angular/platform-webworker` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find removed `@angular/platform-webworker` usage

**org.openrewrite.angular.search.find-platform-webworker-usage**

_Finds imports from `@angular/platform-webworker` and `@angular/platform-webworker-dynamic`, which were removed in Angular 8 with no direct replacement._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular8)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-platform-webworker-usage"
  displayName="Find removed `@angular/platform-webworker` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
