---
sidebar_label: "Remove `aotSummaries` from TestBed"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `aotSummaries` from TestBed

**org.openrewrite.angular.migration.remove-aot-summaries**

_Removes the `aotSummaries` property from `TestBed.configureTestingModule()` and `TestBed.initTestEnvironment()` calls. The `aotSummaries` parameter was removed in Angular 14 as it was only needed for the View Engine compiler._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular14)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-aot-summaries"
  displayName="Remove `aotSummaries` from TestBed"
  npmPackage="@openrewrite/recipes-angular"
/>
