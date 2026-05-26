---
sidebar_label: "Remove `PureRenderMixin`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `PureRenderMixin`

**org.openrewrite.react.refactoring.pure-render-mixin**

_Removes `PureRenderMixin` from `React.createClass` mixins and adds an explicit `shouldComponentUpdate` method._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.refactoring.pure-render-mixin"
  displayName="Remove `PureRenderMixin`"
  npmPackage="@openrewrite/recipes-react"
/>
