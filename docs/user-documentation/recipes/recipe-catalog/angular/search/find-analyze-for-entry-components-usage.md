---
sidebar_label: "Find deprecated `ANALYZE_FOR_ENTRY_COMPONENTS` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `ANALYZE_FOR_ENTRY_COMPONENTS` usage

**org.openrewrite.angular.search.find-analyze-for-entry-components-usage**

_Finds usages of the deprecated `ANALYZE_FOR_ENTRY_COMPONENTS` injection token from `@angular/core`. `ANALYZE_FOR_ENTRY_COMPONENTS` was deprecated in Angular 9 and removed in Angular 13._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular9)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-analyze-for-entry-components-usage"
  displayName="Find deprecated `ANALYZE_FOR_ENTRY_COMPONENTS` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
