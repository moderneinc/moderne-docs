---
title: "Simplify object pattern properties"
sidebar_label: "Simplify object pattern properties"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify object pattern properties

**org.openrewrite.javascript.cleanup.simplify-object-pattern-property**

_Simplifies object destructuring patterns where the property name and variable name are the same (e.g., `{ x: x }` becomes `{ x }`)._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.cleanup.simplify-object-pattern-property"
  displayName="Simplify object pattern properties"
  npmPackage="@openrewrite/recipes-react"
/>
