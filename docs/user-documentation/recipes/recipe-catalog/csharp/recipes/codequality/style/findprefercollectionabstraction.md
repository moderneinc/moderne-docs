---
sidebar_label: "Find concrete collection in public API"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find concrete collection in public API

**OpenRewrite.Recipes.CodeQuality.Style.FindPreferCollectionAbstraction**

_Detect public method parameters or return types that use concrete collection types like `List<T>` instead of `IList<T>` or `IEnumerable<T>`._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindPreferCollectionAbstraction"
  displayName="Find concrete collection in public API"
  nugetPackage="OpenRewrite.CodeQuality"
/>
