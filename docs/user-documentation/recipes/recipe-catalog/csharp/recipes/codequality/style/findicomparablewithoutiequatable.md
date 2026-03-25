---
sidebar_label: "Find IComparable&lt;T&gt; without IEquatable&lt;T&gt;"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find IComparable&lt;T&gt; without IEquatable&lt;T&gt;

**OpenRewrite.Recipes.CodeQuality.Style.FindIComparableWithoutIEquatable**

_Detect classes that implement `IComparable<T>` but not `IEquatable<T>`. Both interfaces should be implemented together for consistent comparison semantics._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindIComparableWithoutIEquatable"
  displayName="Find IComparable&lt;T&gt; without IEquatable&lt;T&gt;"
  nugetPackage="OpenRewrite.CodeQuality"
/>
