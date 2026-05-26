---
sidebar_label: "Remove implicit ref callback returns"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove implicit ref callback returns

**org.openrewrite.react.19.no-implicit-ref-callback-return**

_In React 19, ref callbacks can return cleanup functions. Arrow functions with expression bodies implicitly return values, which React would interpret as cleanup functions. This recipe wraps them in block bodies._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.no-implicit-ref-callback-return"
  displayName="Remove implicit ref callback returns"
  npmPackage="@openrewrite/recipes-react"
/>
