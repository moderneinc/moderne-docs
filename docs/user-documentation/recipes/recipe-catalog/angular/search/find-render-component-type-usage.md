---
sidebar_label: "Find deprecated `RenderComponentType` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `RenderComponentType` usage

**org.openrewrite.angular.search.find-render-component-type-usage**

_Finds imports of the deprecated `RenderComponentType` from `@angular/core`. `RenderComponentType` was part of the View Engine API, deprecated in Angular 4, and removed in Angular 9._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular9)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-render-component-type-usage"
  displayName="Find deprecated `RenderComponentType` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
