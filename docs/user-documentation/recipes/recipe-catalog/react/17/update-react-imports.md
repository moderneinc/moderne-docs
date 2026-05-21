---
sidebar_label: "Remove unnecessary React imports"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove unnecessary React imports

**org.openrewrite.react.17.update-react-imports**

_Removes the default `import React from 'react'` when React is only used for JSX, which is no longer necessary with the new JSX transform in React 17+._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-17)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.17.update-react-imports"
  displayName="Remove unnecessary React imports"
  npmPackage="@openrewrite/recipes-react"
/>
