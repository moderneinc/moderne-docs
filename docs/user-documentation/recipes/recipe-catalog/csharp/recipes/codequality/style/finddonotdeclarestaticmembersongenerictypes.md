---
sidebar_label: "Find static members on generic types"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find static members on generic types

**OpenRewrite.Recipes.CodeQuality.Style.FindDoNotDeclareStaticMembersOnGenericTypes**

_Detect static members declared on generic types. Static members on generic types require specifying type arguments at the call site, reducing discoverability._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [style](/user-documentation/recipes/lists/recipes-by-tag#style)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Style code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/style/stylecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindDoNotDeclareStaticMembersOnGenericTypes"
  displayName="Find static members on generic types"
  nugetPackage="OpenRewrite.CodeQuality"
/>
