---
title: "Remove `React.FC` type annotation"
sidebar_label: "Remove `React.FC` type annotation"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `React.FC` type annotation

**org.openrewrite.react.19.remove-react-fc**

_Removes `React.FC` and `FC` type annotations from functional components, moving the props type to the function parameter instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.remove-react-fc"
  displayName="Remove `React.FC` type annotation"
  npmPackage="@openrewrite/recipes-react"
/>
