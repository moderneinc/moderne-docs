---
sidebar_label: "Replace `act` import from react-dom/test-utils"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `act` import from react-dom/test-utils

**org.openrewrite.react.19.replace-act-import**

_In React 19, `act` has been moved from `react-dom/test-utils` to `react`. This recipe updates the import statement._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.replace-act-import"
  displayName="Replace `act` import from react-dom/test-utils"
  npmPackage="@openrewrite/recipes-react"
/>
