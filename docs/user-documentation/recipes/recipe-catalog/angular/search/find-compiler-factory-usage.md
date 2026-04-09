---
sidebar_label: "Find View Engine API usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find View Engine API usage

**org.openrewrite.angular.search.find-compiler-factory-usage**

_Finds usages of View Engine APIs from `@angular/core` (`CompilerFactory`, `Compiler`, `CompilerOptions`, `ModuleWithComponentFactories`, `NgModuleFactory`, `NgModuleFactoryLoader`) which were deprecated in Angular 13._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular12)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-compiler-factory-usage"
  displayName="Find View Engine API usage"
  npmPackage="@openrewrite/recipes-angular"
/>
