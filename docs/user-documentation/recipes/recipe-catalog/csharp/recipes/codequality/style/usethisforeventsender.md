---
sidebar_label: "Use 'this' for event sender"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use 'this' for event sender

**OpenRewrite.Recipes.CodeQuality.Style.UseThisForEventSender**

_Replace `null` with `this` as the sender argument when raising instance events. The sender should be the object raising the event._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Style code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/style/stylecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.UseThisForEventSender"
  displayName="Use 'this' for event sender"
  nugetPackage="OpenRewrite.CodeQuality"
/>
