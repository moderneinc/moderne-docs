---
sidebar_label: "Remove `event.persist()` calls"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `event.persist()` calls

**org.openrewrite.react.17.remove-event-persist**

_Removes `event.persist()` calls. React 17 removed event pooling, making persist() unnecessary._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-17)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.17.remove-event-persist"
  displayName="Remove `event.persist()` calls"
  npmPackage="@openrewrite/recipes-react"
/>
