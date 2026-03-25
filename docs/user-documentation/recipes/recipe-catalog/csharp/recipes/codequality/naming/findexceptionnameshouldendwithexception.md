---
sidebar_label: "Exception name should end with 'Exception'"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Exception name should end with 'Exception'

**OpenRewrite.Recipes.CodeQuality.Naming.FindExceptionNameShouldEndWithException**

_Classes that inherit from `System.Exception` should have names ending with 'Exception' by convention._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [naming](/user-documentation/recipes/lists/recipes-by-tag#naming)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Naming code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/naming/namingcodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Naming.FindExceptionNameShouldEndWithException"
  displayName="Exception name should end with 'Exception'"
  nugetPackage="OpenRewrite.CodeQuality"
/>
