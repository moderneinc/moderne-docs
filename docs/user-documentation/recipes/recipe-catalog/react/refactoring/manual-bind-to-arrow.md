---
sidebar_label: "Convert manual `.bind(this)` to arrow functions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Convert manual `.bind(this)` to arrow functions

**org.openrewrite.react.refactoring.manual-bind-to-arrow**

_Converts `this.method = this.method.bind(this)` in constructors to class field arrow function syntax._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.refactoring.manual-bind-to-arrow"
  displayName="Convert manual `.bind(this)` to arrow functions"
  npmPackage="@openrewrite/recipes-react"
/>
