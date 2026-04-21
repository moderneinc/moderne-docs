---
sidebar_label: "Find deprecated `preserveFragment` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `preserveFragment` usage

**org.openrewrite.angular.search.find-preserve-fragment-usage**

_Finds usages of the deprecated `preserveFragment` navigation option. `preserveFragment` was deprecated in Angular 4 and removed in Angular 11. Fragments are now preserved by default._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular11)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-preserve-fragment-usage"
  displayName="Find deprecated `preserveFragment` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
