---
title: "Replace string-based `loadChildren` with dynamic `import()`"
sidebar_label: "Replace string-based `loadChildren` with dynamic `import()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace string-based `loadChildren` with dynamic `import()`

**org.openrewrite.angular.migration.replace-load-children-string**

_Converts the deprecated string-based `loadChildren: 'path#Module'` syntax to dynamic imports: `loadChildren: () => import('path').then(m => m.Module)`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.replace-load-children-string"
  displayName="Replace string-based `loadChildren` with dynamic `import()`"
  npmPackage="@openrewrite/recipes-angular"
/>
