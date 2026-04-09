---
sidebar_label: "Find `createComponent` calls with empty `projectableNodes`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `createComponent` calls with empty `projectableNodes`

**org.openrewrite.angular.search.find-empty-projectable-nodes**

_Finds `createComponent()` calls that pass empty arrays in `projectableNodes`. In Angular 19, passing an empty array now renders the default `ng-content` fallback content. To suppress fallback content, pass `[document.createTextNode('')]` instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-empty-projectable-nodes"
  displayName="Find `createComponent` calls with empty `projectableNodes`"
  npmPackage="@openrewrite/recipes-angular"
/>
