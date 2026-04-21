---
sidebar_label: "Replace `TestBed.get()` with `TestBed.inject()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `TestBed.get()` with `TestBed.inject()`

**org.openrewrite.angular.migration.replace-testbed-get-with-inject**

_Replaces deprecated `TestBed.get()` calls with `TestBed.inject()`. `TestBed.get()` was deprecated in Angular 9 and removed in Angular 13._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular9)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.replace-testbed-get-with-inject"
  displayName="Replace `TestBed.get()` with `TestBed.inject()`"
  npmPackage="@openrewrite/recipes-angular"
/>
