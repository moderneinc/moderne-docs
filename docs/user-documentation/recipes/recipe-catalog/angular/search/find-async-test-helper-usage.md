---
sidebar_label: "Find deprecated `async` test helper usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `async` test helper usage

**org.openrewrite.angular.search.find-async-test-helper-usage**

_Finds usages of the deprecated `async` test helper from `@angular/core/testing`. The `async` function was deprecated in Angular 11 and should be replaced with `waitForAsync`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular12)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-async-test-helper-usage"
  displayName="Find deprecated `async` test helper usage"
  npmPackage="@openrewrite/recipes-angular"
/>
