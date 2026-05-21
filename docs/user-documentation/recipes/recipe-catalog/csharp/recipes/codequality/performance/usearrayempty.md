---
sidebar_label: "Use Array.Empty&lt;T&gt;() instead of new T[0]"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use Array.Empty&lt;T&gt;() instead of new T[0]

**OpenRewrite.Recipes.CodeQuality.Performance.UseArrayEmpty**

```
Use Array.Empty<T>() instead of allocating empty arrays.
```


### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Performance code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/performance/performancecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.UseArrayEmpty"
  displayName="Use Array.Empty&lt;T&gt;() instead of new T[0]"
  nugetPackage="OpenRewrite.CodeQuality"
/>
