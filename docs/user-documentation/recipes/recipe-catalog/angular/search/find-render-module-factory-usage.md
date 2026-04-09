---
sidebar_label: "Find `renderModuleFactory` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `renderModuleFactory` usage

**org.openrewrite.angular.search.find-render-module-factory-usage**

_Finds usages of `renderModuleFactory` from `@angular/platform-server` which was removed in Angular 16. Use `renderModule` instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular16)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-render-module-factory-usage"
  displayName="Find `renderModuleFactory` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
