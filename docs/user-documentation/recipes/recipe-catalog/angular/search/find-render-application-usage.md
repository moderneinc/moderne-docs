---
sidebar_label: "Find `renderApplication` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `renderApplication` usage

**org.openrewrite.angular.search.find-render-application-usage**

_Finds usages of `renderApplication` from `@angular/platform-server`. In Angular 16 the signature changed: it no longer accepts a root component as the first argument. Use a bootstrapping function that returns `Promise<ApplicationRef>` instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular16)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-render-application-usage"
  displayName="Find `renderApplication` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
