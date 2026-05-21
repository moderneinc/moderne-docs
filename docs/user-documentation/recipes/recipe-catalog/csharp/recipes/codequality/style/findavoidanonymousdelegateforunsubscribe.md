---
sidebar_label: "Do not use anonymous delegates to unsubscribe from events"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Do not use anonymous delegates to unsubscribe from events

**OpenRewrite.Recipes.CodeQuality.Style.FindAvoidAnonymousDelegateForUnsubscribe**

_Unsubscribing from events using anonymous delegates or lambdas has no effect because each lambda creates a new delegate instance._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindAvoidAnonymousDelegateForUnsubscribe"
  displayName="Do not use anonymous delegates to unsubscribe from events"
  nugetPackage="OpenRewrite.CodeQuality"
/>
