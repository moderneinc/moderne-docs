---
sidebar_label: "Remove `Context.Provider` wrapper"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `Context.Provider` wrapper

**org.openrewrite.react.19.remove-context-provider**

_In React 19, `<Context.Provider>` is deprecated. Render `<Context>` directly as a provider instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.remove-context-provider"
  displayName="Remove `Context.Provider` wrapper"
  npmPackage="@openrewrite/recipes-react"
/>
