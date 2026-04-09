---
sidebar_label: "Find `ReflectiveInjector` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `ReflectiveInjector` usage

**org.openrewrite.angular.search.find-reflective-injector-usage**

_Finds usages of `ReflectiveInjector` which was removed in Angular 16. Use `Injector.create` as a replacement._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular16)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-reflective-injector-usage"
  displayName="Find `ReflectiveInjector` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
