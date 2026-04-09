---
sidebar_label: "Find `platformDynamicServer` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `platformDynamicServer` usage

**org.openrewrite.angular.search.find-platform-dynamic-server-usage**

_Finds usages of the removed `platformDynamicServer` API from `@angular/platform-server`. In Angular 18, replace with `platformServer` and add `import '@angular/compiler'`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-platform-dynamic-server-usage"
  displayName="Find `platformDynamicServer` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
